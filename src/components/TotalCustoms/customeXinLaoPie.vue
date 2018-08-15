
<template>
  <div>
  <div v-bind="{id:idContainer}"></div>
  </div>
</template>


<style>
  #chartXinLaoContainer{
      width: 100%;
      height: 470px;
      top: -25px   
  }

</style>


<script>
  
 import echarts from 'echarts'
    export default{
      props:{
        NewZdData:{
          type:Object,
          require:true
        },
        setmychart:{}
      },
      data(){
        return{
          idContainer:'chartXinLaoContainer',
          Xzhou:''
        }
      },
  methods:{
          init(data,data1){
            var dom = document.getElementById("chartXinLaoContainer");
            var myChart = this.$echarts.init(dom);        
            var _this = this ;
            var option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            },
                            formatter(e){
                               return  e[0].name+'<br />'+e[0].seriesName+' : '+e[0].data+'分钟'+'<br />'+e[1].seriesName+' : '+e[1].data+'人'
                            }
                        },
                        grid:{
                            y2:30,
                        },
                        toolbox: {
                            feature: {   
                                magicType: {show: true, type: ['line']},
                                myTool:{
                                    show:true,
                                    title:'切换为柱状图',
                                    icon: 'path://M441.691632 79.418044l125.94359 0 0 881.109746L441.691632 960.52779 441.691632 79.418044zM378.71883 1023.498578l251.889193 0L630.608023 16.445242 378.71883 16.445242 378.71883 1023.498578zM63.859856 457.250826l125.942583 0 0 503.276964L63.859856 960.52779 63.859856 457.250826zM0.887054 1023.498578l251.889193 0L252.776247 394.280038 0.887054 394.280038 0.887054 1023.498578zM819.359287 268.301208l125.674755 0 0 691.689919L819.359287 959.991127 819.359287 268.301208zM756.350238 1023.29821l251.491478 0L1007.841717 205.49454 756.350238 205.49454 756.350238 1023.29821z',
                                    onclick: function (e){
                                        var data = e.option.series ;
                                        // data[0].type = 'bar';
                                        data[1].type = 'bar';
                                        option.series = data;
                                         option.xAxis[0].data = _this.Xzhou;
                                        myChart.setOption(option, true);
                                    }                                    
                                },
                                 dataView: {show: true, readOnly: false,
                                  optionToContent: function(opt) {       
                                     var data = opt.series ; 
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+data[1].name+'</th><th>'+data[0].name+'</th></tr>'                                     
                                     data[1].data.forEach(function(item,index){
                                         table+='<tr><td>'+item+'</td><td>'+data[0].data[index]+'</td></tr>'
                                    })
                                    table += '</tbody></table>';
                                    return table;
                                    
                                  }},                               
                                saveAsImage: {show: true,name:'身边数据'},
                            },
                            top:'-1%',
                        },
                        legend: {
                            data:['平均驻店时长','驻店量'],
                            top:'6%'
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data:_this.Xzhou,
                                boundaryGap: ['20%', '20%'],
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '',
                                boundaryGap: ['0%', '20%'],
                            },
                            {
                                type: 'value',
                                name: '',
                                boundaryGap: ['0%', '20%'],
                                axisLabel: {
                                    formatter: '{value} (分)'
                                }
                            }
                        ],
                        series: [
                            {
                                name:'平均驻店时长',
                                type:'line',
                                data:data1,      
                                color:'#E5323E',
                                 yAxisIndex: 1,
                            },                            
                            {
                                name:'驻店量',
                                type:'bar',
                                data:data,
                                color:'#003366',
                                areaStyle: {},
                            },
                        ]
                    };                    
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
                window.addEventListener('resize', function () { myChart.resize(); } );
            }                 
          }
      },
      watch:{
        NewZdData:function(data){
            var newData = data;
            let zhudian = newData.data.data.zhudian;
            let avg_time = newData.data.data.avg_time;
            this.Xzhou = newData.data.data.index; 
            let Arrzhudian = [];
            let Arravg = [] ;
            for(let i in zhudian){
                  Arrzhudian.push(zhudian[i]);
                  Arravg.push(avg_time[i]);
            }
            this.init(Arrzhudian,Arravg);
        },
        setmychart(){
            var dom = document.getElementById("chartXinLaoContainer");
            var myChart = this.$echarts.init(dom); 
            myChart.resize()
         }        
      }
    }
</script>
