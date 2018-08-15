
<template>
  <div>
  <div v-bind="{id:idContainer}"></div>
  </div>
</template>
<style>
  #chartRlTcZdContainer{
      width: 100%;
      height: 470px;
      top: -25px  
  }
</style>
<script>
   
  import echarts from 'echarts'
    export default{
      props:{
        NewRlTcZdData:{
          type:Object,
          require:true
        },
        setmychart:{}
      },
      data(){
        return{
          idContainer:'chartRlTcZdContainer',  
          Xzhou:''     
        }
      },
      methods:{
          init(data,data1,data2,data3){
            var dom = document.getElementById("chartRlTcZdContainer");
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
                               return  e[0].name+'<br />'+e[0].seriesName+' : '+e[0].data+'人'+'<br />'+e[1].seriesName+' : '+e[1].data+'人'+'<br />'+e[2].seriesName+' : '+e[2].data+'人'+'<br />'+e[3].seriesName+' : '+e[3].data+'人'
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
                                        data[2].type = 'bar';
                                        data[3].type = 'bar';
                                        option.series = data;
                                        option.xAxis[0].data = _this.Xzhou;
                                        myChart.setOption(option, true);
                                    }                                    
                                },
                                 dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {       
                                     var data = opt.series ; 
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+data[0].name+'</th><th>'+data[1].name+'</th><th>'+data[2].name+'</th><th>'+data[3].name+'</th></tr>'                                     
                                     data[0].data.forEach(function(item,index){
                                         table+='<tr><td>'+item+'</td><td>'+data[1].data[index]+'</td><td>'+data[2].data[index]+'</td><td>'+data[3].data[index]+'</td></tr>'
                                    })
                                    table += '</tbody></table>';
                                    return table;
                                    
                                  }},                               
                                saveAsImage: {show: true,name:'身边数据'},
                            },
                            top:'-1%',
                        },
                        legend: {
                            data:['人流量','客流量','驻店量','跳出量'],
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
                                name:'跳出量',
                                type:'line',
                                stack: '总量',
                                data:data3,
                                color:'#E5323E',
                                areaStyle: {},
                            },                                                  
                            {
                                name:'驻店量',
                                type:'line',
                                stack:'总量',
                                data:data2,
                                color:'#4CABCE',
                                areaStyle: {},
                            },
                            {
                                name:'客流量',
                                type:'line',
                                data:data1,
                                color:'#006699',
                                stack: '总量',
                                areaStyle: {},
                            },   
                             {
                                name:'人流量',
                                type:'line',
                                data:data,
                                stack: '总量',
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
        NewRlTcZdData:function(data){
            let zhudian = data.data.data.zhudian;
            let renliu = data.data.data.renliu;
            let tiaochu = data.data.data.tiaochu;
            let keliu = data.data.data.keliu;
            this.Xzhou = data.data.data.index; 

            let renliuarr= [];
            let keliuarr =[];
            let tiaochuarr = [];
            let zhudianarr = [];

        
            for(let i in renliu){
                renliuarr.push(renliu[i]);
                keliuarr.push(keliu[i]);
                tiaochuarr.push(tiaochu[i]);
                zhudianarr.push(zhudian[i]);
            }
            this.init(renliuarr,keliuarr,zhudianarr,tiaochuarr)  
        },
        setmychart(){
            var dom = document.getElementById("chartRlTcZdContainer");
            var myChart = this.$echarts.init(dom); 
            myChart.resize()
         } 
        
      }
    }
</script>
