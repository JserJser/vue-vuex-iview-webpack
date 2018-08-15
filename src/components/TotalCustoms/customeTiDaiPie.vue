<template>
  <div>
    <div v-bind="{id:idContainer}"></div>
  </div>
</template>
<style scoped>
  #chartTiDaiContainer{
      width: 100%;
      height: 470px;
      top: -25px   
  }

</style>

<script>
  
 export default{
    props: {
        NewXlData:{
          type:Object,
          require:true
        }, 
        fsXlData:{
          type:Object,
          require:true
        },
        setmychart:{}
    },
    data(){
      return {
        idContainer: 'chartTiDaiContainer',  
        Xzhou:''
      }
    },
   methods:{
          init(data,data1,data2){
            var dom = document.getElementById("chartTiDaiContainer");
            var myChart = this.$echarts.init(dom); 
            var _this =this ;  
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
                               return  e[0].name+'<br />'+e[0].seriesName+' : '+e[0].data+'人'+'<br />'+e[1].seriesName+' : '+e[1].data+'人'+'<br />'+e[2].seriesName+' : '+e[2].data+'人'
                            }
                        },
                         grid:{
                            y2:30,
                        },                       
                        toolbox: {
                            feature: {   
                                dataView: {show: true, readOnly: false,
                                 optionToContent: function(opt) {       
                                     var data = opt.series ; 
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+data[0].name+'</th><th>'+data[1].name+'</th><th>'+data[2].name+'</th></tr>'                                     
                                     data[0].data.forEach(function(item,index){
                                         table+='<tr><td>'+item+'</td><td>'+data[1].data[index]+'</td><td>'+data[2].data[index]+'</td></tr>'
                                    })
                                    table += '</tbody></table>';
                                    return table;
                                    
                                  }},                               
                                saveAsImage: {show: true,name:'身边数据'},
                            },
                            top:'-1%',
                        },
                        legend: {
                            data:['客流量','新顾客','老顾客'],
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
                        ],
                        series: [
                            {
                                name:'客流量',
                                type:'line',
                                data:data,    
                                color:'#003366',
                                areaStyle: {},
                                z:1,
                            },  
                             {
                                name:'老顾客',
                                type:'bar',
                                stack: '总量',
                                data:data2,
                                color:'#4CABCE',
                                z:2,
                            },                                                     
                            {
                                name:'新顾客',
                                type:'bar',
                                data:data1,
                                color:'#E5323E',
                                stack: '总量',
                                z:2,
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
  fsXlData:function(data){
          var newdata = data.data;
          this.Xzhou=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
          let newAarry  = newdata.new_customes;
          let oldAarry = newdata.old_customes; 
          let keliu = newdata.keliu;
          let newgkarr = [];
          let oldgkarr = [];
          let keliuarr = [];       
          for(let i in keliu){
             keliuarr.push(keliu[i]);
             newgkarr.push(newAarry[i]);
             oldgkarr.push(oldAarry[i]);
          }
        this.init(keliuarr,newgkarr,oldgkarr);            
      },        
      NewXlData:function (newData) { 
         var newData = newData.data;
         let newAarry  = newData.data.new_customes;
         let oldAarry = newData.data.old_customes; 
         let keliu = newData.data.keliu;
         this.Xzhou = newData.data.index;
          let newgkarr = [];
          let oldgkarr = [];
          let keliuarr = [];     
          for(let i in keliu){
             keliuarr.push(keliu[i]);
             newgkarr.push(newAarry[i]);
             oldgkarr.push(oldAarry[i]);
          }
              this.init(keliuarr,newgkarr,oldgkarr);            
         },
         setmychart(){
            var dom = document.getElementById("chartTiDaiContainer");
            var myChart = this.$echarts.init(dom); 
            myChart.resize()
         } 
      }
    }
</script>
