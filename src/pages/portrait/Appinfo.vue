<template>
  <div class="scorediv">
    <i-col span="24" style='padding:10px'>
       <div id='AppinfoPie'></div>
    </i-col>
    <i-col span="24" style='padding:10px'>
        <div id='Appinfo'></div>
    </i-col>    
      <i-col span="24" style="padding:10px">
         <Table  :columns="columnsa" :data="data7" size="small" ></Table>
      </i-col>    
  </div>
</template>
<style type="text/css">
    #Appinfo{
        margin: 0 auto;
        height: 400px;
    }
    #AppinfoPie {
      height: 500px;
      margin: 0 auto;
    }
</style>
<script type="text/javascript">
      
     import api from '../../api/API'
     import echarts from 'echarts'
     import loading from '../../components/loading'
       export default {
        props:{
          ListData:{}
        },
          data(){
            return{
                columnsa: [
                        {
                        'type': 'index',
                        'width': 60,
                        'title':'序号'
                        },         
                       {
                        "title": "名称",
                        "key": "name",
                         render: (h,params) => {   
                            return h('div',{
                            },[
                                h('img',{
                                    attrs:{
                                        src:params.row.name[1], style: 'width: 30px;height: 30px;border-radius: 2px;float: left'
                                    }
                                }),
                                h('span',{
                                      style:'display: inline-block;line-height: 30px;margin:0 20px'      
                                },params.row.name[0])
                              
                            ])
                        }                         
                       },
                       {
                        "title": "分类",
                        "key": "fl",
                       },  
                       {
                        "title": "活跃渗透率",
                        "key": "hy",
                         "sortable": true,
                         render: (h,params) => {  
                             return h('span',{

                             },params.row.hy.toFixed(2)+'%')
                         }
                       }, 
                       {
                        "title": "TGI",
                        "key": "tg",  
                        "sortable": true
                       },                        

                ],
                data7:[],
                columnechart:[],
                dataecharts:[],
                Id_Date:'',
                AppFlog:false,
            }
          },
          mounted(){
              $('.cheack').hide();
              var _this = this ;
              if(_this.AppFlog==false){
                  setTimeout(() => {
                         _this.init();
                          _this.AppFlog = true;
                  }, 1000);
              }  
          },
          methods:{    
              init(){
                var _this  = this;
                var Id_Date = _this.ListData;
                api.portrait.getPortraitAppinfo(Id_Date[0],Id_Date[1],Id_Date[2],function(resp){
                          if(resp.status==1){
                                var val = resp.data.detail;
                                var arr = [];
                                for(let i in val){
                                    var dataList = {};
                                    dataList['name'] = [val[i].name,val[i].icon];
                                    dataList['fl'] = val[i].cate_name ;
                                    dataList['hy'] = parseFloat(val[i].final_pct*100);
                                    dataList['tg'] = parseInt(val[i].index) ;
                                    arr.push(dataList);
                                }
                            _this.data7 = arr; 
                            _this.start(val);                    
                            }else{
                            _this.start([]); 
                            }
                })   
              }, 
            compare(property){
                return function(obj1,obj2){
                    var value1 = obj1[property];
                    var value2 = obj2[property];
                    return value2 - value1;     // 升序
                }
            },                  
              start(val){
                  var _this =this ;
                     var arrname = [];
                     var arrpct = [];
                     var arrIndex = [];
                     var arr = []  ;
                     var size = 0; 
                     var sizeT = 0;
                     for(let o in val){
                            arr.push(val[o]);
                     }
                     var data = arr.sort(this.compare('final_pct'));
                      for(let i in data){
                          size = size+1 ;
                          if(size<=30){       
                                arrname.push(data[i].name);
                                arrpct.push(parseFloat(data[i].final_pct*100).toFixed(2));
                                arrIndex.push(parseInt(data[i].index));                              
                          }
                      }
                      /// 对饼状动图进行数据筛选
                      var dataList = {}
                      var dataList_t = {};
                      var dataListname = [];
                      for(let k in data){  
                          sizeT = sizeT+1;                      
                        if(sizeT<=30){
                            dataListname.push(data[k].name);
                            dataList[k] = parseInt(data[k].index);      
                            dataList_t[k] = parseFloat(data[k].final_pct*100).toFixed(2);                                 
                        }         
                      }
                   _this.AppinfoData(arrname,arrpct,arrIndex); 
                   _this.AppinfoPrea(dataList,dataList_t,dataListname);
              },
            AppinfoData(name,pct,index){
                    var dom = document.getElementById("Appinfo");
                    var myChart = this.$echarts.init(dom);
                    var  option = {
                          backgroundColor:'#f5f7f9',
                          color: ["#D53A35", "#A5A5A5"],
                          tooltip: {
                            formatter(e){
                                if(e.componentSubType =='bar'){
                                        return e.name+'(活跃渗透率) : '+e.data+'%';
                                }else{
                                        return e.name+'(TGI) : '+e.data;
                                }        
                            }                   
                            },                
                            toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {
                                      let Xzhou = opt.xAxis[0].data;
                                      let Hy = opt.series[0].data;
                                      let Tpi = opt.series[1].data;
                                      let table = '<table class="ectb" style="width:100%;"><tbody>'
                                      table+= '<tr><th>名称</th><th>'+opt.series[0].name+'</th><th>'+opt.series[1].name+'</th></tr>'
                                      Hy.forEach(function (item,index) {
                                          table+='<tr><td>'+Xzhou[index]+'</td><td>'+item+'%</td><td>'+Tpi[index]+'</td></tr>'
                                     });         
                                      table += '</tbody></table>';                                      
                                      return table;                    
                                           }
                                           },
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'}
                                }
                            },                          
                          title:{
                              text:'TOP30应用分析',
                              x:'50%',
                              textStyle:{
                                     color:'#8E8E8E'
                              },                              
                          },
                          xAxis: [
                              {
                                  type: 'category',
                                  axisTick: {
                                      alignWithLabel: true
                                  },
                                  data: name
                              }
                          ],
                          yAxis: [                   
                              {
                                  type: 'value',
                                  name: 'TGI',
                                  position: 'left',
                                  axisLabel: {
                                      formatter: '{value}'
                                  }
                              },
                              {
                                  type: 'value',
                                  name: '活跃渗透率',
                                  position: 'right',
                                  axisLabel: {
                                      formatter: '{value}'
                                  }
                              }
                          ],
                          series: [
                              {
                                  name:'活跃渗透率',
                                  type:'bar',
                                  smooth: true,
                                  yAxisIndex: 0,
                                  data:pct
                              },
                              {
                                  name:'TGI',
                                  type:'line',
                                  smooth: true,
                                  symbol: 'circle',
                                   symbolSize: 10,
                                  yAxisIndex: 1,
                                  data:index
                              },                              
                          ]
                      };  
                          if (option && typeof option === "object") {
                              myChart.setOption(option, true);
                          }                                     
            },
              AppinfoPrea(dataList,dataList_t,name){
                  var _this =  this ;
                    var dom = document.getElementById("AppinfoPie");
                    var myChart = this.$echarts.init(dom);
                    var builderJson = {
                      "charts": dataList
                    };
                    var downloadJson = dataList_t
                    var option = {
                    	backgroundColor:'#f5f7f9',
                        tooltip: {
                          formatter(e){
                              if(e.componentSubType =='bar'){
                                    return e.name+'(TGI) : '+e.data;
                              }else{
                                   return '<div><span style="background:'+e.color+';border-radius:100%;width:10px;height:10px;display:inline-block;margin-right:10px"></span><span>'+e.data.name+' : '+e.data.value+'%'+'</span></div>'
                              }
                          }                   
                        },
                       toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                     optionToContent: function(opt) {
                                      let Hy = opt.series[0].data;
                                      let Tpi = opt.series[1].data;    
                                      let table = '<table class="ectb" style="width:100%;"><tbody>'
                                      table+= '<tr><th>名称</th><th>活跃渗透率</th><th>TGI</th></tr>'
                                      Hy.forEach(function (item,index) {
                                          table+='<tr><td>'+Tpi[index].name+'</td><td>'+Tpi[index].value+'%</td><td>'+item+'</td></tr>'
                                     });                                           
                                      table += '</tbody></table>';                                      
                                      return table;      
                                    }
                                    },
                                     
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'}
                                }
                         },                       
                        title: [{
                            text: 'TOP30TGI群体指数',
                            x: '25%',
                            textAlign: 'center',
                              textStyle:{
                                     color:'#8E8E8E'
                              },                              
                        }, {
                            text: 'TOP30APP活跃渗透率',
                            x: '75%',
                            textAlign: 'center',
                              textStyle:{
                                     color:'#8E8E8E'
                              },                              
                        }],
                        grid: [{
                            top: 50,
                            width: '50%',
                            // bottom: '45%',
                            left: 10,
                            containLabel: true
                        }, {
                            // top: '55%',
                            width: '50%',
                            bottom: 0,
                            left: 10,
                            containLabel: true
                        }],
                        xAxis: [{
                            type: 'value',
                            max: builderJson.all,
                            splitLine: {
                                show: false
                            },
                        }],
                        yAxis: [{
                            type: 'category',
                            data: Object.keys(builderJson.charts),
                            axisLabel: {
                                interval: 0,
                                rotate: 30
                            },
                            splitLine: {
                                show: false
                            },
                            data: name
                        }],
                        series: [{
                            type: 'bar',
                            stack: 'chart',
                            z: 3,
                            label: {
                                normal: {
                                    position: 'right',
                                    show: true
                                }
                            },
                            data: Object.keys(builderJson.charts).map(function (key) {
                                return builderJson.charts[key];
                            })
                        }, {
                            type: 'pie',
                            radius:'50%',
                            center: ['75%', '50%'],
                            data: Object.keys(downloadJson).map(function (key) {
                                return {
                                    name: name[key],
                                    value: downloadJson[key]
                                }
                            })
                        }]
                    }

                    if (option && typeof option === "object") {
                        myChart.setOption(option, true);
                    }                         
              }  
          },
          components:{
    
          },
          watch:{
            ListData(val){
                this.Id_Date = val;
                if(this.AppFlog){
                  this.init();
                }else{
                  this.AppFlog = true;
                }
            },
          }
          

       }
</script>