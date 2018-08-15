<template>
        <div  style="width:100%;height:260px" id="PeopleNub"></div>
</template>
<style>
#PeopleNub {
    top: -40px;
}
</style>

<script>
import echarts from 'echarts';
    export default {
        data(){
        },
        props:{
            PeopleNubData:{},
        },
        mounted() {
        },
        watch:{
            PeopleNubData(val){
                  this.init(val);
            },
        },
        methods:{
         init(resp){
                
                this.LineAll('PeopleNub','进店人数统计', resp.data.keliu, resp.data.into_store,'客流人数','进店人数')                 
         },     
      LineAll(id,text,data1,data2,name1,name2){
          var dom = document.getElementById(""+id+"");
          var myChart = this.$echarts.init(dom);
            var option = {
                toolbox: {
                    feature: {
                        magicType: {show: true, type: ['line', 'bar']},
                        dataView: {show: true, readOnly: false,
                        optionToContent: function(opt) {         
                                     let time = opt.xAxis[0].data;
                                     let data = opt.series;
                                     let table = '<table class="DaykeliuTable"  style="width:100%;"><tbody>'
                                     let tableth =''      
                                      time.forEach(function(item){
                                         tableth+='<th style="border: 1px solid #000;">'+item+'</th>'
                                      })
                                      table+= '<tr class="indextime"><th style="border: 1px solid #000;">时间</th>'+tableth+'</tr>'  
                                       for(let i in data){
                                        let dataList = ' '
                                        for(let k in data[i].data){
                                            dataList+='<td>'+data[i].data[k]+'</td>'
                                        }
                                        table+='<tr class="indextime"><td>'+data[i].name+'</td>'+dataList+'</tr>'
                                      }                                        
                                     table += '</tbody></table>';                 
                                    return table; 
                              }},
                        saveAsImage: {show: true,name:'身边数据'}
                    },
                    top:'-0%',
                    right:'35%'
                }, 
              legend: {
                  data: [name1,name2],
                  right: 0,
                  top:'0%',
                  width:'200px',
                  icon:'circle'
              },                  
              tooltip: {
                  trigger: 'axis'
              },                
                grid:{
                   width:'95%',
                   left:'4%',
                   bottom:10,
                   top:50
                },                          
                xAxis: {
                    type: 'category',
                    boundaryGap: ['10%', '10%'],
                    data:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                },
                yAxis: {
                    type: 'value',
                    splitLine:{show: false},
                    boundaryGap: ['0%', '10%']
                    
                },
                series: [{
                        name:name1,
                        data:data1,
                        type: 'line',
                         color: "#003366",
                          areaStyle: {},
                        label: {
                            normal: {
                                show: false,
                                position: 'top',
                                color:'#000'
                            }
                        },                          
                      },
                      {
                          name:name2,
                          data:data2,
                          type: 'line',
                          color: "#E5323E", 
                          areaStyle: {},
                          label: {
                              normal: {
                                  show: false,
                                  position: 'top',
                                  color:'#000'
                              }
                          },                            
                      }
                 ]
            };        
            if (option && typeof option === "object") {
                  myChart.setOption(option, true);
                  window.addEventListener('resize', function () { myChart.resize(); } );
             }       
      },			
        }
    }
</script>
