<template>
  <div>
    <div v-bind="{id:idContainer}"></div>
  </div>
</template>
<style scoped>
  #chartJinRuContainer {
      width: 100%;
      height: 470px;
      top: -25px   
  }
</style>
<script>
 
import echarts from 'echarts'
 export default{
      props:{
        NewKLData:{
          type:Object,
          require:true
        },
         setmychart:{}
      },
      data(){
        return{
          idContainer:'chartJinRuContainer',
          Xzhou:'',
        }
      },
      methods:{
          init(data,data1,data2){
            var dom = document.getElementById("chartJinRuContainer");
            var myChart = this.$echarts.init(dom);     
            var _this = this;   
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
                               return  e[0].name+'<br />'+e[0].seriesName+' : '+e[0].data+'人'+'<br />'+e[1].seriesName+' : '+e[1].data+'人'+'<br />'+e[2].seriesName+' : '+e[2].data+'%'
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
                                        data[0].type = 'bar';
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
                                     table +=  '<tr ><th>'+data[0].name+'</th><th>'+data[1].name+'</th><th>'+data[2].name+'</th></tr>'                                     
                                     data[0].data.forEach(function(item,index){
                                         table+='<tr><td>'+item+'</td><td>'+data[1].data[index]+'</td><td>'+data[2].data[index]+'%</td></tr>'
                                     })
                                    table += '</tbody></table>';
                                    return table;                                     
                                  }},                               
                                saveAsImage: {show: true,name:'身边数据'},
                            },
                            top:'-1%',
                        },
                        legend: {
                            data:['客流量','驻店量','百分比'],
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
                                    formatter: '{value} %'
                                }
                            }
                        ],
                        series: [                         
                            {
                                name:'客流量',
                                type:'bar',
                                data:data,
                                color:'#003366',
                             
                                areaStyle: {},
                            },
                            {
                                name:'驻店量',
                                type:'bar',
                                data:data1,
                                 color:'#E5323E',
                                areaStyle: {},
                            },                               
                            {
                                name:'百分比',
                                type:'line',
                                yAxisIndex: 1,
                                data:data2,
                                color:'#A5A5A5',
                            }
                        ]
                    };                    
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
                window.addEventListener('resize', function () { myChart.resize(); } );
            }                 
          }
      },
      watch:{ 
      NewKLData:function (newData) {       
             let keliu  = newData.data.data.keliu;
             let zhudian = newData.data.data.zhudian; 
             this.Xzhou = newData.data.data.index;   
             let arr = [] ;
             let arrzhudian = [];
             let arrkeliu = [];       
             for(let i in keliu){
               arrkeliu.push(keliu[i]);
               arrzhudian.push(zhudian[i]);
               if(keliu[i]==0&&zhudian[i]==0){
                 arr.push(0);
               }else if(keliu[i]==0 && zhudian[i]>0){
                 arr.push(0);
               }else{
                    var num =parseFloat((zhudian[i]/keliu[i]*100).toFixed(2));
                    arr.push(num)                
               }
             }
           this.init(arrkeliu,arrzhudian,arr);      
         },
          setmychart(){
            var dom = document.getElementById("chartJinRuContainer");
            var myChart = this.$echarts.init(dom); 
            myChart.resize()
         }        
      }
    }
</script>
