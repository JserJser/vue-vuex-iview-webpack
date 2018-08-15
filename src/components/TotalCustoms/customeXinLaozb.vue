<template>
  <div>
    <div v-bind="{id:idContainer}"></div>
  </div>
</template>
<style scoped>
  #chartXlzbContainer {
      width: 100%;
      height: 470px;
      top: -25px  
  }
</style>
<script>
   
  import echarts from 'echarts'

  export default{
    props: {
        NewXlzbData:{
          type:Object,
          require:true
        }, 
        fsXlzbData:{
          type:Object,
          require:true
        },
        setmychart:{}
    },
    data(){
      return {
        idContainer: 'chartXlzbContainer',
        Xzhou:'',
      }
    },
      methods:{
          init(data,data1,data2,data3){
            var dom = document.getElementById("chartXlzbContainer");
            var myChart = this.$echarts.init(dom);   
            var _this =this;
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
                               return  e[0].name+'<br />'+e[0].seriesName+' : '+e[0].data+'%'+'<br />'+e[1].seriesName+' : '+e[1].data+'%'+'<br />'+e[2].seriesName+' : '+e[2].data+'人'+'<br />'+e[3].seriesName+' : '+e[3].data+'人'
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
                                        option.xAxis[0].data = _this.Xzhou;
                                        data[2].type = 'bar';
                                        data[3].type = 'bar';
                                        option.series = data;
                                        myChart.setOption(option, true);
                                    }                                    
                                },
                                 dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {       
                                     var data = opt.series ; 
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+data[2].name+'</th><th>'+data[3].name+'</th><th>'+data[0].name+'</th><th>'+data[1].name+'</th></tr>'                                     
                                     data[2].data.forEach(function(item,index){
                                         table+='<tr><td>'+item+'</td><td>'+data[3].data[index]+'</td><td>'+data[0].data[index]+'%</td><td>'+data[1].data[index]+'%</td></tr>'
                                    })
                                    table += '</tbody></table>';
                                    return table;
                                    
                                  }},                               
                                saveAsImage: {show: true,name:'身边数据'},
                            },
                            top:'-1%',
                        },
                        legend: {
                            data:['新顾客','老顾客','新顾客占比','老顾客占比'],
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
                                name:'新顾客占比',
                                type:'line',
                                data:data2,
                                yAxisIndex: 1,
                                color:'#006699',
                            },                                                  
                            {
                                name:'老顾客占比',
                                type:'line',
                                data:data3,
                                yAxisIndex: 1,
                                color:'#A5A5A5',
                            },
                            {
                                name:'新顾客',
                                type:'line',
                                data:data,
                                color:'#003366',
                                stack: '总量',
                                areaStyle: {},
                            },   
                             {
                                name:'老顾客',
                                type:'line',
                                data:data1,
                                stack: '总量',
                                 color:'#E5323E',
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
    watch: {
   NewXlzbData:function(data){
           let oldL =  data.data.data.old_customes;
           let newL =  data.data.data.new_customes;
           this.Xzhou =  data.data.data.index;
          
           let newArr   = [];
           let oldArr   = [];
           let newbfArr = [];
           let oldbfArr = [];
           let allarr= [] ;
           for(let i in newL){
                newArr.push(newL[i]);
                oldArr.push(oldL[i]);
                var allcustomes = parseFloat(newL[i]+oldL[i]);
                if(allcustomes==0 && newL[i] ==0){
                    newbfArr.push(0);
                }else if(allcustomes==0 && newL[i]>0){
                    newbfArr.push(0);
                }else{
                     var num =parseFloat((newL[i]/allcustomes*100).toFixed(2));
                     newbfArr.push(num);
                }

                if(allcustomes==0 && oldL[i] ==0){
                    oldbfArr.push(0);
                }else if(allcustomes==0 && oldL[i]>0){
                    oldbfArr.push(0);
                }else{
                     var num =parseFloat((oldL[i]/allcustomes*100).toFixed(2));
                     oldbfArr.push(num);
                }                
           }
            this.init(newArr,oldArr,newbfArr,oldbfArr);    
   },   
fsXlzbData:function(data){ //算法可能有问题
           let newdata = data.data;
           this.Xzhou=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];    
           let oldL  =  newdata.old_customes;
           let newL =  newdata.new_customes;
 
           let newArr   = [];
           let oldArr   = [];
           let newbfArr = [];
           let oldbfArr = [];
           let allarr= [] ;
           for(let i in newL){
                newArr.push(newL[i]);
                oldArr.push(oldL[i]);
                var allcustomes = parseFloat(newL[i]+oldL[i]);
                if(allcustomes==0 && newL[i] ==0){
                    newbfArr.push(0);
                }else if(allcustomes==0 && newL[i]>0){
                    newbfArr.push(0);
                }else{
                     var num =parseFloat((newL[i]/allcustomes*100).toFixed(2));
                     newbfArr.push(num);
                }

                if(allcustomes==0 && oldL[i] ==0){
                    oldbfArr.push(0);
                }else if(allcustomes==0 && oldL[i]>0){
                    oldbfArr.push(0);
                }else{
                     var num =parseFloat((oldL[i]/allcustomes*100).toFixed(2));
                     oldbfArr.push(num);
                }                
           }
            this.init(newArr,oldArr,newbfArr,oldbfArr);    
      }, 
        setmychart(){
            var dom = document.getElementById("chartXlzbContainer");
            var myChart = this.$echarts.init(dom); 
            myChart.resize()
         }             
      }
    }
  
</script>
