<template>
  <div class="scorediv">
     <i-col span="24">
            <div class="ComeTitle"  style="margin:10px">
                <Button class="portraitActive"  @click="lyChoice">来源</Button>
                <Button @click="qxChoice">去向</Button>
            </div>
            <div class="ComeListTitle" style="margin:10px">
                 <Button class="portraitActive"  @click="xqChoice">小区</Button>
                 <Button @click="bgChoice">办公</Button>               
                 <Button @click="sqChoice">商圈</Button>      
            </div>
    </i-col>          
    <i-col span="24" style='padding:10px'>
        <i-col span="7">
            
                <div id="ComeGoBar" :class="{w0:shrink}"></div>
                 <span class="button triangle" :class="{left0:shrink}" @click="ComeGoshrink">      
        <div class="triangle-facing-right" :class="{shrinkList:shrink}"></div>  
        <div class="triangle-facing-right" :class="{shrinkList:shrink}"></div>  
        <div class="triangle-facing-right" :class="{shrinkList:shrink}"></div>  
        <div class="triangle-facing-right" :class="{shrinkList:shrink}"></div> 
                </span> 
                <div class="ComeGoData">暂无数据</div>
               
        </i-col>
        <div id="ComeGoSource" ></div>
    </i-col>
        
  </div>
</template>
<style type="text/css">
	.triangle {
		width: 150px;
		height: 20px;
		position:fixed;
		bottom: 0;
		left:0;
    z-index: 22222;
    line-height: 20px;
    transform: rotate(0deg);
	}
    .triangle-facing-right {  
        display: inline-block;  
        border-right: 4px solid #4DC07C; border-bottom: 4px solid  #4DC07C;  
        width: 10px; height: 10px;
        transform: rotate(-225deg);        
    }  
    .triangle-active {
     transform: rotate(180deg);
      margin-bottom: 50px;
      width: 90px;
      padding-left: 20px;
    }
.w0 {
  width: 0 !important;
  display: none;
}
.left0 {
  left: 0 !important;
  transition: left 0.3s;
    
}
.shrinkList {
    transform: rotate(320deg);
}
#ComeGoSource {
  margin: 0 auto;
  height: 900px;
}
.button {
  position: absolute;
  left: 80%;
  top: 860px;
  z-index: 111;
  transition: all 0.3s;
}
.ComeGoData {
  width: 100%;
  position: absolute;
  top: 300px;
  z-index: 1111;
  text-align: center;
}
.ComeTitle {
  top: 20px;
  position: absolute;
  z-index: 11;
}
.ComeListTitle {
  position: absolute;
  z-index: 11;
  top: 60px;
}
.ComeTitle button,
.ComeListTitle button {
  border: none;
  border-radius: 5%;
  display: inline;
  padding: 5px 10px;
  font-size: 12px;
  float: left;
}
#ComeGoBar {
  width: 100%;
  height: 800px;
  transition: width 0.3s;
  position: absolute;
  z-index: 11;
  background: #fff;
  top: 100px;
}
</style>
<script type="text/javascript">
import api from '../../api/API';
import echarts from 'echarts';
import map from 'echarts/map/js/china';
import loading from '../../components/loading';
import {setTimeout} from 'timers';
var bmap = require('../../../node_modules/echarts/extension/bmap/bmap');
export default {
  props: {
    ListData: {},
    option: {},
  },
  data() {
    return {
      ly: '',
      qx: '',
      lyxq: [],
      lybg: [],
      lysq: [],
      qxxq: [],
      qxbg: [],
      qxsq: [],
      flog: true,
      Id_Date: '',
      select: [],
      comeflog: false,
      shrink: false,
    };
  },
  mounted() {
    $('.cheack').show();
    var _this = this;
    if (_this.comeflog == false) {
      setTimeout(() => {
        _this.init();
        _this.comeflog = true;
      }, 1000);
    }
  },
  methods: {
    init() {
      var _this = this;
      var Id_Date = _this.ListData;
      var option = _this.option;
      api.portrait.getPortraitComeGo(
        Id_Date[0],
        Id_Date[1],
        Id_Date[2],
        option[0],
        option[1],
        option[4],
        option[2],
        option[3],
        function(resp) {
          if (resp.status == 1) {
            _this.startList(resp.data.detail);
            var Choice = sessionStorage.getItem('ComeGoListChoice')
              ? sessionStorage.getItem('ComeGoListChoice')
              : '1';
            if (Choice == 1) {
              _this.xqChoice();
            } else if (Choice == 2) {
              _this.bgChoice();
            } else {
              _this.sqChoice();
            }
          } else {
            _this.startList([]);
            var Choice = sessionStorage.getItem('ComeGoListChoice')
              ? sessionStorage.getItem('ComeGoListChoice')
              : '1';
            if (Choice == 1) {
              _this.xqChoice();
            } else if (Choice == 2) {
              _this.bgChoice();
            } else {
              _this.sqChoice();
            }
          }
        }
      );
      api.portrait.getPortraitAreaThermal(
        Id_Date[0],
        Id_Date[1],
        Id_Date[2],
        _this.option[0],
        _this.option[1],
        _this.option[4],
        _this.option[2],
        _this.option[3],
        function(resp) {
          if (resp.status == 1) {
            _this.start(resp.data.detail);
            var Choice = sessionStorage.getItem('ComeGoChoice')
              ? sessionStorage.getItem('ComeGoChoice')
              : 'ly';
            if (Choice == 'ly') {
              _this.lyChoice();
            } else {
              _this.qxChoice();
            }
          } else {
            _this.start([]);
            var Choice = sessionStorage.getItem('ComeGoChoice')
              ? sessionStorage.getItem('ComeGoChoice')
              : 'ly';
            if (Choice == 'ly') {
              _this.lyChoice();
            } else {
              _this.qxChoice();
            }
          }
        }
      );
    },
    ComeGoshrink() {
      //收缩点击
      this.shrink = !this.shrink;
    },
    lyChoice() {
      $('.ComeTitle')
        .children()
        .eq(0)
        .addClass('portraitActive')
        .siblings()
        .removeClass('portraitActive');
      sessionStorage.setItem('ComeGoChoice', 'ly');
      this.flog = true;
      var Choice = sessionStorage.getItem('ComeGoListChoice')
        ? sessionStorage.getItem('ComeGoListChoice')
        : '1';
      if (Choice == 1) {
        this.ComeGobar(this.lyxq);
      } else if (Choice == 2) {
        this.ComeGobar(this.lybg);
      } else {
        this.ComeGobar(this.lysq);
      }
         this.ComeGo([this.ly]);
    },
    qxChoice() {
         
      $('.ComeTitle')
        .children()
        .eq(1)
        .addClass('portraitActive')
        .siblings()
        .removeClass('portraitActive');
      sessionStorage.setItem('ComeGoChoice', 'qx');
      this.flog = false;
      var Choice = sessionStorage.getItem('ComeGoListChoice')
        ? sessionStorage.getItem('ComeGoListChoice')
        : '1';
      if (Choice == 1) {
        this.ComeGobar(this.qxxq);
      } else if (Choice == 2) {
        this.ComeGobar(this.qxbg);
      } else {
        this.ComeGobar(this.qxsq);
      }
       this.ComeGo([this.qx]);
    },
    xqChoice() {
      $('.ComeListTitle')
        .children()
        .eq(0)
        .addClass('portraitActive')
        .siblings()
        .removeClass('portraitActive');
      sessionStorage.setItem('ComeGoListChoice', '1');
      if (this.flog) {
        this.ComeGobar(this.lyxq);
      } else {
        this.ComeGobar(this.qxxq);
      }
    },
    bgChoice() {
      $('.ComeListTitle')
        .children()
        .eq(1)
        .addClass('portraitActive')
        .siblings()
        .removeClass('portraitActive');
      sessionStorage.setItem('ComeGoListChoice', '2');
      if (this.flog) {
        this.ComeGobar(this.lybg);
      } else {
        this.ComeGobar(this.qxbg);
      }
    },
    sqChoice() {
      $('.ComeListTitle')
        .children()
        .eq(2)
        .addClass('portraitActive')
        .siblings()
        .removeClass('portraitActive');
      sessionStorage.setItem('ComeGoListChoice', '3');
      if (this.flog) {
        this.ComeGobar(this.lysq);
      } else {
        this.ComeGobar(this.qxsq);
      }
    },
    startList(val) {
      var _this = this;
      var ly = val['from'];
      var qx = val['go'];
      var arr = [];
      var arr1 = [];
      var arr2 = [];
      var arr3 = [];
      var arr4 = [];
      var arr5 = [];
      for (let i in ly) {
        //来源
        if (ly[i].area_type == 1) {
          arr.push(ly[i]);
        } else if (ly[i].area_type == 2) {
          arr1.push(ly[i]);
        } else {
          arr2.push(ly[i]);
        }
      }
      _this.lyxq = arr;
      _this.lybg = arr1;
      _this.lysq = arr2;
      for (let k in qx) {
        //去向
        if (qx[k].area_type == 1) {
          arr3.push(qx[k]);
        } else if (qx[k].area_type == 2) {
          arr4.push(qx[k]);
        } else {
          arr5.push(qx[k]);
        }
      }
      _this.qxxq = arr3;
      _this.qxbg = arr4;
      _this.qxsq = arr5;
    },
    start(val) {
      var _this = this;
      var arr = [];
      var ly = val['from'];
      for (let i in ly) {
        var datalist = {};
        datalist['coord'] = [ly[i].lon, ly[i].lat];
        datalist['elevation'] = ly[i].count;
        arr.push(datalist);
      }
      _this.ly = arr;
      var arr1 = [];
      var qx = val['go'];
      for (let k in qx) {
        var datalist = {};
        datalist['coord'] = [qx[k].lon, qx[k].lat];
        datalist['elevation'] = qx[k].count;
        arr1.push(datalist);
      }
      _this.qx = arr1;
    },
    compare(property) {
      return function(obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value2 - value1;
      };
    },
    comparea(property) {
      return function(obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 - value2; // 升序
      };
    },
    ComeGobar(data) {
      if(data.length !=0){
          $('.ComeGoData').hide();
      }
      var _this = this;
      var dom = document.getElementById('ComeGoBar');
      var myChart = this.$echarts.init(dom);
      var name = [];
      var value = [];
      var newData = data.sort(_this.compare('count'));
      var arr = [];
      for (var k = 0; k < newData.length; k++) {
        if (k < 10) {
          arr.push(newData[k]);
        }
      }
      var dataList = arr.sort(_this.comparea('count'));
      for (var i = 0; i < dataList.length; i++) {
        name.push(dataList[i].name);
        value.push((dataList[i].count * 100).toFixed(2));
      }
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: null, // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter(e) {
            return e[0].name + ':' + e[0].data + '%';
          },
        },
        toolbox: {
          right: 10,
          feature: {
            dataView: {
              show: true,
              readOnly: false,
              optionToContent: function(opt) {
                var name = opt.yAxis[0].data;
                var data = opt.series[0].data;
                let table = '<table class="ectb" style="width:100%;"><tbody>';
                table += '<tr ><th>城市</th><th>比例</th></tr>';
                for (let i in data) {
                  table +=
                    '<tr><td>' +
                    name[i] +
                    '</td><td>' +
                    data[i] +
                    '%</td></tr>';
                }
                table += '</tbody></table>';
                return table;
              },
            },
            saveAsImage: {show: true, name: '身边数据'},
          },
        },
        grid: {
          left: '1%',
          right: '18%',
          top: '0',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: name,
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: 25,
            label: {
              show: true,
              position: 'right',
              formatter(e) {
                var data = e.data;
                return data + '%';
              },
            },
            data: value,
          },
        ],
      };
      if (option && typeof option === 'object') {
        myChart.setOption(option, true);
      }
    },
    ComeGo(data1) {
      var _this = this;
      var dom = document.getElementById('ComeGoSource');
      var myChart = this.$echarts.init(dom);
      var app;
      var points = [].concat.apply(
        [],
        data1.map(function(track) {
          return track.map(function(seg) {
            return seg.coord.concat([1]);
          });
        })
      );
      var option;
      myChart.setOption(
        (option = {
          animation: false,
          bmap: {
            center: [110.13066322374, 26.040018034923],
            zoom: 7,
            roam: true,
            mapStyle: {
              //改变百度地图样式
              styleJson: [
                {
                  featureType: 'road',
                  elementType: 'all',
                  stylers: {
                    color: '#FFF3E3',
                  },
                },
              ],
            },
          },
          visualMap: {
            show: false,
            top: 'top',
            seriesIndex: 0,
            max: 5,
            calculable: true,
            inRange: {
              color: ['blue', 'blue', 'green', 'yellow', 'red'],
            },
          },
          series: [
            {
              type: 'heatmap',
              coordinateSystem: 'bmap',
              data: points,
              pointSize: 25,
              blurSize: 20,
              maxOpacity: 0.8,
            },
          ],
        })
      );
      // if (!app.inNode) {
      // 添加百度地图插件
      var bmap = myChart
        .getModel()
        .getComponent('bmap')
        .getBMap();
      bmap.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP],
        })
      );
      bmap.addControl(
        new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          type: BMAP_NAVIGATION_CONTROL_ZOOM,
        })
      ); 
      // var zoomControl=new BMap.ZoomControl();  

      bmap.addControl(zoomControl);

      // // }
      if (option && typeof option === 'object') {
        myChart.setOption(option, true);
      }
    },
  },
  watch: {
    ListData(val) {
      this.Id_Date = val;
      // if (this.comeflog) {
      //   // this.init();
      //          console.log('ListData')
      // } else {
      //   this.comeflog = true;
      // }
    },
    option(val) {
      this.select = val;
      if (this.comeflog) {
        this.init();
      } else {
        this.comeflog = true;
      }
    },
  },
};
</script>