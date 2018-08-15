<template>
  <div class="scorediv">
        <i-col span="8" style='padding:10px'>
            <div id='gender'></div>
        </i-col>           
        <i-col span="8" style='padding:10px'>
            <div id='agebin'></div>
        </i-col>      
         <i-col span="8" style='padding:10px'>
            <div id='kids'></div>
        </i-col>    
        <i-col span="8" style='padding:10px'>
            <div id='edu'></div>
        </i-col>                 
         <i-col span="8" style='padding:10px'>
            <div id='cell_factory'></div>
        </i-col>        
         <i-col span="8" style='padding:10px'>
            <div id='car'></div>
        </i-col> 
        <i-col span="8" style='padding:10px'>
            <div id='income'></div>
        </i-col>     
        <i-col span="8" style='padding:10px'>
            <div id='occupation'></div>
        </i-col>
        <i-col span="8" style='padding:10px'>
            <div id='segment'></div>
        </i-col>                     
         <i-col span="8" style='padding:10px'>
            <div id='model'></div>
        </i-col>       
         <i-col span="8" style='padding:10px'>
            <div id='screensize'></div>
        </i-col>        
          <i-col span="8" style='padding:10px'>
            <div id='sysver'></div>
        </i-col> 
          <i-col span="8" style='padding:10px'>
            <div id='network'></div>
        </i-col> 
        <i-col span="8" style='padding:10px'>
            <div id='carrier'></div>
        </i-col>  
        <i-col span="8" style='padding:10px'>
            <div id='model_level'></div>
        </i-col>                                                                                                 
  </div>
</template>
<style type="text/css">
 #gender,#edu,#agebin,#kids,#cell_factory,#model,#screensize,#sysver,#network,#carrier,#car,#income,#model_level,#occupation,#segment{
  margin: 0 auto;
  height: 300px;
 }
 .scorediv div div:hover{
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
 }
 li {
     list-style: none;
 }
 .ectb tr{
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
 }
 .ectb th{
     -webkit-box-flex: 1;   /* OLD - iOS 6-, Safari 3.1-6 */  
    -moz-box-flex: 1;     /* OLD - Firefox 19- */              
    -webkit-flex: 1;      /* Chrome */  
    -ms-flex: 1;           /* IE 10 */  
    flex: 1;              /* NEW, Spec - Opera 12.1, Firefox 20+ */
    text-align: center;
    color:#8E8E8E;
    background: #f0f0f0;
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: inline-block;
 }
 .ectb td {
     -webkit-box-flex: 1;   /* OLD - iOS 6-, Safari 3.1-6 */  
    -moz-box-flex: 1;     /* OLD - Firefox 19- */              
    -webkit-flex: 1;      /* Chrome */  
    -ms-flex: 1;           /* IE 10 */  
    flex: 1;              /* NEW, Spec - Opera 12.1, Firefox 20+ */
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px dashed #ededed
 }
</style>
<script type="text/javascript">
	    
       import api from '../../api/API'
       import echarts from 'echarts'
       import { setTimeout } from 'timers';
        import loading from '../../components/loading'
  	   export default {
        props:{
            ListData:{}
        },
  	   		data(){
  	   		  return{
                scoreDate:'',
                data1: [
     
                ],
                Id_Date:'',
                ScoreFlog:false,
  	   			}
  	   		},
          mounted(){  
              $('.cheack').hide()
              var _this = this ;
                    if(_this.ScoreFlog==false){ 
                        setTimeout(function(){
                                  _this.init();     
                                  _this.ScoreFlog =true;
                        },1000)                                   
                    }
          },
  	   	methods:{
            init(){
                this.scoreDate = JSON.parse(sessionStorage.getItem('portraitDate'));    
                var _this =this;
                var val = _this.ListData;
                 api.portrait.getPortraitScore(val[0],val[1],val[2],function(resp){                  
                        if(resp.status==1){                
                            _this.start(resp.data.detail); 
                        }else{
                            _this.start([]); 
                        }
                })     
                  
            },
            start(val){
               var _this = this ;
               var data = val;    
               _this.genderData(data.gender);
               _this.eduData(data.edu);
               _this.agebinData(data.agebin);
               _this.kidsData(data.kids);
               _this.cell_factoryData(data.cell_factory);
               _this.modelData(data.model);
               _this.screensizeData(data.screensize);
               _this.sysverData(data.sysver);
               _this.networkData(data.network);
               _this.carrierData(data.carrier);
               _this.carData(data.car);
               _this.incomeData(data.income);
               _this.model_levelData(data.model_level);
               _this.occupationData(data.occupation);
               _this.segmentData(data.segment);
            },
            setval(val){
                     var data = [];                 
                     var val = val ;
                      for(var i in val){
                         var dataList = {}
                          dataList['name'] = i;
                          dataList['value'] =val[i].toFixed(4);
                          data.push(dataList);
                      }         
                      return data;     
            },
 		scatter(val,id,text){
						var dom = document.getElementById(""+id+"");
						var myChart = echarts.init(dom);
						var app = {};
						var subtext = this.scoreDate[0]+'至'+this.scoreDate[1];
						var arr = [];
						var arr2 = [];
						for(let i in val){
							arr.push(i);
							arr2.push([i,val[i]*100]);
						}
						var colors = ['#259493',  '#60bef4'];
				    	var	option = {
							backgroundColor:'#f5f7f9',
                             title: {
                                  text:text,      
                                   x:'left', 
                                   left:20,
                                   textStyle:{
                                     fontSize:16,
                                     fontWeight:400,
                                     color:'#8E8E8E'
                                   },
                                   subtext:''+subtext+'',
                                    subtextStyle:{
                                        color:'#8E8E8E'
                                    }                      
                                },   
							tooltip : {
									formatter(e){
										return e[0].name+' : '+(e[0].data[1]).toFixed(2)+'%'
									},
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
                             toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {       
                                     let series = opt.series[0].data;
                                     let title = opt.title[0].text;
                                     let Xzhou = opt.xAxis[0].data;
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
									 table +=  '<tr ><th>'+title+'</th><th>比例</th></tr>'
                                     series.forEach(function (item,index) {
                                         table+='<tr><td>'+Xzhou[index]+'</td><td>'+parseFloat(item[1]).toFixed(2)+'%</td></tr>'
                                     });                                     
                                     table += '</tbody></table>';
                                    return table;
                              }
                              },
                                    //magicType: {show: true, type: ['stack', 'tiled']},
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'},
                                }
                            },    							
							xAxis: {
								data: arr,
							},
							yAxis: [
								{
									type: 'value',
									position: 'left',
									axisLine: {
										lineStyle: {
											color: '#000'
										}
									},
									axisLabel: {
										formatter:function(e){
											return e+'%'
										}
									}
								},
							], 
							series: [{
								type: 'scatter',
								color : '#259493',
								symbol: 'circle',
								data:arr2
							}]
						};
						if (option && typeof option === "object") {
							myChart.setOption(option, true);
						}
			},           
            GyArea(val,id,text,color){
                    var data = this.setval(val);
                    var dom = document.getElementById(""+id+"");
                    var _this = this ;
                    if(color !=''){
                      var  color = color;
                    }else{
                      var  color =  ['#0081D2', '#06A7DD', '#03DAE4', '#00D2A8', '#88D370', '#949496'];
                    }
                    var subtext = this.scoreDate[0]+'至'+this.scoreDate[1];
                         var myChart = this.$echarts.init(dom);
                         var option = {                      
                            	backgroundColor:'#f5f7f9',
                                title: {
                                  text:text,      
                                   x:'left', 
                                   left:20,
                                   textStyle:{
                                     fontSize:16,
                                     fontWeight:400,
                                     color:'#8E8E8E'
                                   },
                                   subtext:''+subtext+'',
                                    subtextStyle:{
                                        color:'#8E8E8E'
                                    }                      
                                },                        
                              tooltip: {
                                  trigger: 'item',
                                  formatter: " {b} : {c} ({d}%)"
                              },    
                             toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {
                                    
                                     let series = opt.series[0].data;
                                     let title = opt.title[0].text;
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+title+'</th><th>比例</th></tr>'
                                     series.forEach(function (item) {
                                         table+='<tr><td>'+item.name+'</td><td>'+parseFloat(item.value*100).toFixed(2)+'%</td></tr>'
                                     });                                     
                                     table += '</tbody></table>';        
                                    return table;
                              
                                   
                              }
                              },
                                 
                                    //magicType: {show: true, type: ['stack', 'tiled']},
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'},
                                }
                            },        
                                                      
                              series: [{
                                  type: 'pie',
                                  radius: '60%',
                                  center: ['50%', '50%'],
                                  clockwise: false,
                                  data: data,
                                  label: {
                                      normal: {
                                          textStyle: {
                                              color: '#999',
                                              fontSize: 14,
                                          }
                                      }
                                  },
                                  itemStyle: {
                                      emphasis: {
                                          borderWidth: 0,
                                          shadowBlur: 10,
                                          shadowOffsetX: 0,
                                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                                      }
                                  }
                              }],
                              color: color,                       
                          };
            
                          if (option && typeof option === "object") {
                              myChart.setOption(option, true);
                          }  
            },
            GyArea2(val,id,text){
            var data = this.setval(val);
            var dom = document.getElementById(""+id+"");
            var myChart = this.$echarts.init(dom);
            var subtext = this.scoreDate[0]+'至'+this.scoreDate[1];
               var option = {
               	 backgroundColor:'#f5f7f9',
                  tooltip: {
                      trigger: 'item',
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                  },
                                title: {
                                  text:text,      
                                   x:'left', 
                                   left:20,
                                   textStyle:{
                                     fontSize:16,
                                     fontWeight:400,
                                     color:'#8E8E8E'
                                   },
                                   subtext:''+subtext+'',
                                    subtextStyle:{
                                        color:'#8E8E8E'
                                    }                      
                                },      
                             toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {  
                                     let series = opt.series[0].data;
                                     let title = opt.title[0].text;
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+title+'</th><th>比例</th></tr>'
                                     series.forEach(function (item) {
                                         table+='<tr><td>'+item.name+'</td><td>'+parseFloat(item.value*100).toFixed(2)+'%</td></tr>'
                                     });                                     
                                     table += '</tbody></table>';                   
                                    return table;
                                       }
                              },
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'},
                                }
                            },                             
                  series: [
                      {
                          name:'',
                          type: 'pie',
                          radius: ['30%', '55%'],
                          labelLine: {
                              normal: {
                                  length: 20,
                                  length2: 50,
                                  lineStyle: {
                                      color: '#333'
                                  }
                              }

                          },
                          label: {
                              normal: {
                                  formatter: '{a|{d}%}\n{b|{b}}',
                                  borderWidth: 0,
                                  borderRadius: 4,
                                  padding: [0, -50],
                                  rich: {
                                      a: {
                                          color: '#333',
                                          fontSize: 16,
                                          lineHeight: 20
                                      },
                                      hr: {
                                          borderColor: '#333',
                                          width: '100%',
                                          borderWidth: 0.5,
                                          height: 0
                                      },
                                      b: {
                                          fontSize: 16,
                                          lineHeight: 20,
                                          color: '#333'
                                      }

                                  }
                              }
                          },
                          data:data,
                          color:['#0081D2', '#06A7DD', '#03DAE4', '#00D2A8', '#88D370', '#949496']
                      }
                  ]
              };             
             if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }                     
            },
            Gybar(val,id,text,color,sort){     
             var dom = document.getElementById(''+id+'');
                    var myChart = this.$echarts.init(dom);
                    var arr = [];
                    var arr2 = [];
                    if(sort ==''){
                        for(let i in val){
                            arr.push(i);
                        }
                        var ydata = arr.sort();
                        for(let k in ydata){
                            arr2.push((val[ydata[k]]).toFixed(4))
                        }  
                    }else{
                        
                        var arr3 = {}; 
                        var arr4 = [];
                        for(let q in val){
                            var nub = parseFloat(val[q]);
                            arr3[q] = parseFloat((nub).toFixed(4));
                            arr4.push(parseFloat((nub).toFixed(4)));
                        }
                        var nb1 = arr4.sort((a,b) => a < b ?-1 :1);
                        var arr2 = nb1.reverse()
                        var data = arr3; 
                        var arr = Object.keys(data).sort((a,b) => data[a] - data[b] >0 ?-1 :1);
                    }
                    var subtext = this.scoreDate[0]+'至'+this.scoreDate[1];             
                              var  option = {
                                    color: [color],
                                    backgroundColor:'#f5f7f9',
                                    tooltip : {
                                         formatter(e){
                                                return e[0].name+':'+(e[0].data*100).toFixed(2)+'%'
                                         },
                                        trigger: 'axis',
                                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                        }
                                    },
                                 title: {
                                  text:text,      
                                   x:'left', 
                                   left:20,
                                   textStyle:{
                                     fontSize:16,
                                     fontWeight:400,
                                     color:'#8E8E8E'
                                   },
                                   subtext:''+subtext+'',
                                    subtextStyle:{
                                        color:'#8E8E8E'
                                    }                      
                                },  
                             toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                    optionToContent: function(opt) {       
                                     let series = opt.series[0].data;
                                     let title = opt.title[0].text;
                                     let Xzhou = opt.xAxis[0].data;
                                     let table = '<table class="ectb" style="width:100%;"><tbody>'
                                     table +=  '<tr ><th>'+title+'</th><th>比例</th></tr>'
                                     series.forEach(function (item,index) {
                                         table+='<tr><td>'+Xzhou[index]+'</td><td>'+parseFloat(item*100).toFixed(2)+'%</td></tr>'
                                     });                                     
                                     table += '</tbody></table>';
                                    return table;
                              }
                              },
                                    //magicType: {show: true, type: ['stack', 'tiled']},
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'},
                                }
                            },                                                                       
                                    grid: {
                                        left: '3%',
                                        right: '4%',
                                        bottom: '3%',
                                        containLabel: true
                                    },
                                    xAxis : [
                                        {
                                            type : 'category',
                                            data :arr,
                                            axisTick: {
                                                alignWithLabel: true
                                            }
                                        }
                                    ],
                                    yAxis : [
                                        {
                                            type : 'value'
                                        }
                                    ],
                                    series : [
                                        {
                                            name:'',
                                            type:'bar',
                                            barWidth: '60%',
                                            data:arr2,
                                        }
                                    ]
                                };   
                              if (option && typeof option === "object") {
                                  myChart.setOption(option, true);
                              }     
            },
		    genderData(val){
                    this.GyArea2(val,'gender','男女比例')                                         
              },
             eduData(val){
              this.GyArea(val,'edu','学历','');
                },
             agebinData(val){
                    this.Gybar(val,'agebin','成年人年龄结构比例','#D53A35','')     
                  },    
             kidsData(val){
                     this.Gybar(val,'kids','子女年龄结构比例','#D53A35','')       
                  },
             cell_factoryData(val){
                     this.Gybar(val,'cell_factory','手机品牌','#D53A35',1)          
                },
                modelData(val){
                        var  color= [
                        '#A87C00',
                        '#B78900',
                        '#C69401',
                        '#D39E00',
                        '#E0A602',
                        '#FEC52C',
                        '#F4B800',
                        '#FBC306',
                        '#FCC953',
                        '#F5CF7B',
                        '#FDD290',
                        '#FFD7A3',
                        '#FDE686',
                            ]
                this.Gybar(val,'model','Android型号','#D53A35','1');          
                },
                  screensizeData(val){
           
                      this.scatter(val,'screensize','手机分辨率');  
                  },
                  sysverData(val){
                        
                     this.GyArea(val,'sysver','Android操作系统','');  
                  },
                  networkData(val){                  
                     this.GyArea(val,'network','网络','');                      
                  },
                  carrierData(val){      
                     this.scatter(val,'carrier','运营商');                                     
                  },
                  carData(val){
                    this.GyArea2(val,'car','车');                 
                   },    
                  incomeData(val){
                        this.GyArea(val,'income','收入','');                      
                   },
                  model_levelData(val){
                        this.GyArea(val,'model_level','手机品牌价位','');                  
                 },
                  occupationData(val){
                        this.Gybar(val,'occupation','职业','#D53A35',1)
                 },
               segmentData(val){
                        this.Gybar(val,'segment','偏好','#D53A35',1)              
              }           
  	   		},
                watch:{
                        ListData(val){       
                              this.Id_Date = val
                              if(this.ScoreFlog){
                                  this.init();
                              }else{
                                  this.ScoreFlog =true;
                              }
                        }
                }
  	   }
</script>