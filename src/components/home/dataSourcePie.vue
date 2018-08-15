<template>
    <div style="width:100%;height:260px;" id="data_source_con"></div>
</template>
<style>
#data_source_con{
    top:-40px;
}
</style>

<script>
import echarts from 'echarts';

export default {
  name: 'dataSourcePie',
  data() {
    return {

    };
  },
  props: {
    distribution: {},
  },
  watch: {
    distribution(val) {
      this.init(val);
    },
  },
  methods: {
    init(val) {
      var StopData = val;
      var StopTime = StopData.times; //时间
      var a1 = 0;
      var b1 = 0;
      var c1 = 0;
      var d1 = 0;
      var e1 = 0;
      var f1 = 0;
      for (let k in StopTime) {
        if (k <= 10) {
          a1 += StopTime[k];
        } else if (k <= 30 && k >= 11) {
          b1 += StopTime[k];
        } else if (k <= 60 && k >= 31) {
          c1 += StopTime[k];
        } else if (k <= 90 && k >= 61) {
          d1 += StopTime[k];
        } else if (k <= 120 && k >= 91) {
          e1 += StopTime[k];
        } else {
          f1 += StopTime[k];
        }
      }
      var arr4 = [
        {name: '0~10(分钟)', value: a1},
        {name: '11~30(分钟)', value: b1},
        {name: '31~60(分钟)', value: c1},
        {name: '61~90(分钟)', value: d1},
        {name: '91~120(分钟)', value: e1},
        {name: '大于120(分钟)', value: f1},
      ];
      this.PieAll(arr4, 'data_source_con', '停留时间分布');
    },
    PieAll(val, id, text) {
      var dom = document.getElementById('' + id + '');
      var myChart = this.$echarts.init(dom);
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: ' {b} : {c} ({d}%)',
        },
        grid:{
          bottom:20
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false,
              optionToContent: function(opt) {
                var data = opt.series[0].data;
                var arr = 0;
                for (let k in data) {
                  arr += data[k].value;
                }
                let table =
                  '<table class="DaykeliuTable"  style="width:100%;"><tbody>';
                table +=
                  '<tr class="indextime"><th style="border: 1px solid #000;">名称</th><th style="border: 1px solid #000;">数量</th><th style="border: 1px solid #000;">占比</th></tr>';
                for (let i in data) {
                  table +=
                    '<tr class="indextime"><td>' +
                    data[i].name +
                    '</td><td>' +
                    data[i].value +
                    '</td><td>' +
                    (data[i].value / arr * 100).toFixed(2) +
                    '%</td></tr>';
                }
                table += '</tbody></table>';
                return table;
              },
            },
            saveAsImage: {show: true, name: '身边数据'},
          },
          top: '0%',
          right: '0%',
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            clockwise: false,
            // roseType: 'radius',
            data: val,
            label: {
              normal: {
                textStyle: {
                  color: '#999',
                  fontSize: 14,
                  // width:5, 
                },
                formatter: '{b}:{d}%',
              },
            },
            labelLine: {
              normal: {
                length: 1,
              },
            },
            itemStyle: {
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
        color: [
          '#0081D2',
          '#06A7DD',
          '#03DAE4',
          '#00D2A8',
          '#88D370',
          '#191970',
        ],
      };
      if (option && typeof option === 'object') {
        myChart.setOption(option, true);
        window.addEventListener('resize', function() {
          myChart.resize();
        });
      }
    },
  },
};
</script>
