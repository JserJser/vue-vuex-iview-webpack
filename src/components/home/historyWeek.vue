<<template>
    <div style="width:100%;height:260px" id="HomeWeek"></div>
</template>
<style>
    #HomeWeek{
         top: -40px;
    }
</style>
<script>
    import echarts from 'echarts';
    export default {
        data(){
            return{
                 TimeWeek: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            }
        },
        props:{
            WeekData:{}
        },
        watch:{
            WeekData(val){
                    this.init(val)
            }
        },
        methods:{
        init(resp){
              this.LineAll('HomeWeek','客流量周趋势图', resp.data.sweek, resp.data.bweek,'上周','本周',this.TimeWeek,'')                   
        },
      LineAll(id,text,data1,data2,name1,name2,time){
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
                   bottom:20,
                   top:50
                },                          
                xAxis: {
                    type: 'category',
                    boundaryGap: ['10%', '10%'],
                    data:time
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
                        smooth: true,
                        showSymbol: false,
                        symbol: 'circle',
                        symbolSize: 6,
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
                            smooth: true,
                            showSymbol: false,
                            symbol: 'circle',
                            symbolSize: 6,
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