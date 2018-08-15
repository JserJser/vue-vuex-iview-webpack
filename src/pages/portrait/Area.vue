<template>
  <div class="scorediv" style="postion:relative">
    <i-col span="24">
            <div class="AreaTitle"  style="margin:10px">
                <Button class="portraitActive"  @click="ly">来源</Button>
                <Button @click="qx">去向</Button>
            </div>
    </i-col>     
    <i-col span="24"  style='padding:10px'>
        <div id="container"></div>
    </i-col>
    <i-col span="24" style='padding:10px'>
        <div id="AreaSource"></div>
    </i-col>     
    <RadioGroup style="
            position: absolute;
            right: 25%;
            top: 3%;"
            v-model="Ctity"
            @on-change='CtityTable'
      >
        <Radio label="市"></Radio>
        <Radio label="省"></Radio>
    </RadioGroup>

  </div>
  
</template>
<style type="text/css">
    #AreaSource{
     margin: 0 auto;
     height: 1000px;      
    }
    #container{
     margin: 0 auto;
     height: 1000px;  
    }
    .Areatable1 {
        position: absolute!important;
        top: 3%;
        left: 50%;
        width: 100%;
        margin-left: -50%;
        z-index: 2;
    }
    .tablebut {
    position: absolute;
    z-index: 3;
    top: 1.2%;
    }
    .AreaTitle {
    position: absolute;
    top: 30px;
    left: 10px;
    z-index: 1;
    width: 100%;
    }
    .AreaTitle button {
        border: none;
        border-radius: 5%;
        display: inline;
        padding: 5px 10px;
        font-size: 12px;
        float: left;
    } 
    #container div:nth-child(3){
        z-index: 11;
    }
</style>
<script type="text/javascript">
      
     import api from '../../api/API'
     import echarts from 'echarts'
     import loading from '../../components/loading'
     import { setTimeout } from 'timers';
       export default {
          props:{
            ListData:{},
            option:{}
          },
          data(){
            return{
                Ctity: '市',
                Data1:'',
                Data2:'',
                flog:true,
                map_1:'',
                map_2:'',
                data1:'',
                data2:'',
                lycity:[],
                qxcity:[],
                Id_Date:'',
                select:[],
                Areaflog:false,
                tableflog:false,          
            }
          },
          mounted(){
                $('.cheack').show()
               var _this = this ;
              if(_this.Areaflog==false){
                  setTimeout(() =>{
                      _this.init();
                      _this.Areaflog =true;
                  },1000)
              }
          },
          methods:{
            init(){
                var _this = this ;
                var Id_Date = _this.ListData
                var option = _this.option               
               api.portrait.getPortraitArea(Id_Date[0],Id_Date[1],Id_Date[2],option[0],option[1],option[4],option[2],option[3],function(resp){
                        if(resp.status==1){
                            _this.start(resp.data.detail);
                            if(_this.flog){
                                    _this.ComeGoAll(_this.Data1,1,0,'#D53A35',_this.map_1,_this.data1);
                                    _this.mapAll(_this.lycity);
                                
                            }else{
                                    _this.ComeGoAll(_this.Data2,0,1,'#46bee9',_this.map_2,_this.data2);
                                    _this.mapAll(_this.qxcity);
                            }     
                                                      
                        }else{
                                  _this.ComeGoAll([],0,1,'#46bee9',[],[]);
                                 _this.mapAll([]);
                                     
                        }
               })
            },      
            CtityTable(){
                  if(this.flog){
                      this.mapAll(this.lycity);
                  }else{
                      this.mapAll(this.qxcity);
                  }
            },
            ly(){
                this.flog = true;
                this.ComeGoAll(this.Data1,1,0,'#D53A35',this.map_1,this.data1);
                $('.AreaTitle').children().eq(0).addClass('portraitActive').siblings().removeClass('portraitActive');                
                 this.mapAll(this.lycity);
            },
            qx(){
                this.flog = false;
                this.ComeGoAll(this.Data2,0,1,'#46bee9',this.map_2,this.data2);
                $('.AreaTitle').children().eq(1).addClass('portraitActive').siblings().removeClass('portraitActive');                                
                this.mapAll(this.qxcity);          
            },
            start(val){
                      var _this = this ;
                      var data1 = val['from'];
                      var data2 = val['go'];
                      var arr1 = [];
                      var arr2 = [] ;
                      var map_1 = {};
                      var map_2 = {};
                      var arr3 = [];
                      var arr4 = [];
                      var ly_ctity = [];
                      var qx_ctity = [];                      
                      for(let i in data1){//来源
                          var sz =[];
                          var datalist = {};
                          datalist['name'] =data1[i].code ;
                          datalist['value'] =data1[i].count ;     
                          if(data1[i].code ==null || data1[i].lon_lat==null){    
                          }else{
                              map_1[data1[i].code] = [data1[i].lon_lat.lon,data1[i].lon_lat.lat]
                          }
                        
                        if(data1[i].code !=null){
                           var datacity = {};
                           datacity['name'] = data1[i].code;
                           datacity['value1'] = data1[i].count;
                           ly_ctity.push(datacity);
                        }
                          
                          sz.push(datalist);
                          sz.push({name:'深圳市'});
                          arr1.push(sz);
                          arr3.push(datalist);
                      }
                      for(let k in data2){//去向
                          var sz = [];
                          var datalist = {};
                            datalist['name'] =data2[k].code ;
                            datalist['value'] =data2[k].count ;  
                            if(data2[k].code==null || data2[k].lon_lat==null){
                            }else{
                                 map_2[data2[k].code] = [data2[k].lon_lat.lon,data2[k].lon_lat.lat];
                            }   
                         if(data2[k].code !=null){
                           var datacity = {};
                           datacity['name'] = data2[k].code;
                           datacity['value1'] = data2[k].count;
                           qx_ctity.push(datacity);
                        }                               
                          sz.push({name:'深圳市'});                       
                          sz.push(datalist);
                          arr2.push(sz);
                          arr4.push(datalist)
                      }                 
                      _this.Data1 = arr1 ;
                      _this.Data2 = arr2 ; 
                      _this.map_1 = map_1;
                      _this.map_2 = map_2;    
                      _this.data1 = arr3;
                      _this.data2 = arr4;
                      _this.lycity = ly_ctity;
                      _this.qxcity =qx_ctity;                
            },            
            ComeGoAll(data1,one,two,color,map,zzData){
                    var dom = document.getElementById('AreaSource');    
                    var myChart = this.$echarts.init(dom); 
                    var geoCoordMap = map;
                    var GZData = data1;
                    var convertData = function(data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var dataItem = data[i];
                            var fromCoord = geoCoordMap[dataItem[0].name];
                            if(geoCoordMap[dataItem[1].name]){
                                var toCoord = geoCoordMap[dataItem[1].name];
                            }else{
                                  
                            }     
                            if (fromCoord) {
                                res.push([{
                                    coord: fromCoord,
                                    value: dataItem[one].value//来源或流向修改
                                }, {
                               coord: toCoord,
                                }]);
                            }
                        }
                        return res;
                    };
                    var resultdata0 = [];
                    var titledata = [];
                    for (var i = 0; i < zzData.length; i++) {
                        var a = zzData[i].value;//加倍
                        var b = parseFloat(a).toFixed(2);
                        var d0 = {
                            name: zzData[i].name,
                            value: b
                        };
                        titledata.push(zzData[i].name)
                        resultdata0.push(d0);
                    }
                    function NumDescSort(a,b){
                        return a.value-b.value;
                    }
                    // resultdata0.sorret(NumDescSort);                    
                    var color = [color];
                    var series = [];
                    [['深圳市', GZData]].forEach(function (item, i) {
                        series.push(
                        {
                            type: 'lines',
                            zlevel: 2,
                            symbol: ['none', 'arrow'],
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0,
                                symbol: 'arrow',
                                symbolSize: 5
                            },
                            lineStyle: {
                                normal: {
                                    color: color[i],
                                    width: 1,
                                    opacity: 0.6,
                                    curveness: 0.2
                                }
                            },
                            data: convertData(item[1])
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },                 
                            itemStyle: {
                                normal: {
                                    color: color[i]
                                }
                            },
                            data: item[1].map(function (dataItem) {
                                return {
                                    name: dataItem[two].name,
                                    value: geoCoordMap[dataItem[two].name]
                                };
                            })
                        },
                        );
                    });
                    var option = {
                    backgroundColor: '#404a59',
                      tooltip: {
                             trigger: 'axis',
                             formatter: '{b}:\n{c}%'
                        },     
                        geo: {
                            map: 'china',
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            left:'100',
                            top: '-150',                            
                            zoom: 1,
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#323c48',
                                    borderColor: '#404a59'
                                },
                                emphasis: {
                                    areaColor: '#fff'
                                }
                            }
                        },         
                         toolbox: {
                                right:200,
                                feature: {
                                   dataView: {show: true, readOnly: false,
                                        optionToContent: function(opt) {   
                                            var data = opt.series[1].data;
                                            $(function(){
                                                $('#AreaSource').children().eq(2).css('z-index','2222');
                                            })
                                            let table = '<table class="ectb" style="width:100%;"><tbody>'
                                            table +=  '<tr ><th>城市</th><th>经纬度</th></tr>'
                                            for(let i in data){
                                               table+='<tr><td>'+data[i].name+'</td><td>'+data[i].value+'</td></tr>'
                                            }
                                             table += '</tbody></table>';
                                             return table;                                           
                                            }
                                            },
                                    // restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'}
                                },
                            },                                                               
                            grid: {
                                right: 40,
                                top: 0,
                                bottom: 40,
                                width: '30%'
                            },                                 
                        series:series
                     
                    };
                    if (option && typeof option === "object") {
                        myChart.setOption(option, true);
                    }                               
            },    
            compare(property){
                return function(obj1,obj2){
                    var value1 = obj1[property];
                    var value2 = obj2[property];
                    return value2 - value1;     // 升序
                }
            },        
             comparea(property){
                return function(obj1,obj2){
                    var value1 = obj1[property];
                    var value2 = obj2[property];
                    return value1 - value2;     // 升序
                }
            },                                      
            mapAll(data){                
                var dom = document.getElementById('container');    
                var myChart = this.$echarts.init(dom); 
                var resultdata0 = [];
                var titledata = [];
                var resultdata1 = [];
                var data = data.sort(this.compare('value1'));
                var ctity = this.Ctity; 
                var size = 0;
                var sizeT= 0;
                var shen = [];
                var shi = [];
                for (var i = 0; i < data.length; i++) {
                    var d0 = {
                        name: data[i].name,
                        value: (data[i].value1*100).toFixed(3)
                    };   
                  resultdata0.push(d0); 
                    if(ctity=='省'){           
                        if(data[i].name.indexOf('省') != -1 ||data[i].name.indexOf('自治区') != -1){
                                    size=size+1;
                                    if(size<=20){
                                            shen.push(data[i]);
                                    }                                
                        }
                    }else{
                         if(data[i].name.indexOf('市') != -1 ){
                                    sizeT=sizeT+1;
                                    if(sizeT<=20){
                                            shi.push(data[i]);
                                    }     
                         }
                    }
                }
                var shen = shen.sort(this.comparea('value1'));
                var shi = shi.sort(this.comparea('value1'));
                if(ctity=='省'){
                    for(let k in shen){ 
                            var d1 = {
                                name: shen[k].name,
                                value: (shen[k].value1*100).toFixed(3)
                            };                           
                            titledata.push(shen[k].name);
                            resultdata1.push(d1);                    
                    }
                }else{
                     for(let o in shi){
                            var d2 = {
                                name: shi[o].name,
                                value: (shi[o].value1*100).toFixed(3)
                            };                           
                            titledata.push(shi[o].name);
                            resultdata1.push(d2);
                    }            
                }
                 var _this = this ;
                 var option = {
                    tooltip: {
                        trigger: 'item',
                        // formatter(e){
                        //             console.log(e);
                        //         return e.name+':'+e.data.value+'%'
                        // }                        
                    },
                    visualMap: {
                        left: 'left',
                        max:100,
                        // top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        colorLightness: [0.2, 100],
                        color: ['#c05050','#e5cf0d','#5ab1ef'],
                        dimension: 0
                    },
                    toolbox: {
                        show: true,
                        feature: {
                           dataView: {
                               readOnly: false,
                               optionToContent: function(opt) {      
                                    var  data =  opt.series[0].data ;
                                    let table = '<table class="ectb" style="width:100%;"><tbody>'
                                    table +=  '<tr><th>省</th><th>比例</th></tr>'       
                                    for(let i in data){
                                        if(data[i].name.indexOf('省') != -1 ||data[i].name.indexOf('自治区') != -1){
                                           table+='<tr><td>'+data[i].name+'</td><td>'+data[i].value+'%</td></tr>'
                                        }
                                    }
                                     table +=  '<tr><th>市</th><th>比例</th></tr>'  
                                     for(let k in data){
                                       if(data[k].name.indexOf('市') != -1 ){
                                           table+='<tr><td>'+data[k].name+'</td><td>'+data[k].value+'%</td></tr>'
                                        }
                                     }                                    
                                        table += '</tbody></table>';   
                                        return table                                                                                                                                   
                               } 
                           },                      
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        right: 40,
                        top: 100,
                        bottom: 0,
                        width: '30%'
                    },
                    xAxis: [{
                        show : false,
                        position: 'top',
                        type: 'value',
                        boundaryGap: false,
                    }],
                    yAxis: [{
                        type: 'category',
                        data: titledata,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }],
                    series: [{
                        z: 1,
                        name: '省',
                        type: 'map',
                        map: 'china',
                        left: '10',
                        right: '35%',
                        top: 100,
                        bottom: "35%",
                        zoom: 0.75,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: resultdata0
                    },{
                        name: '',
                        z: 2,
                        type: 'bar',
                        label: {
                                 position:'right',
                                 show:true,
                                 formatter(e){
                                    var data = e.data.value;
                                    return data+'%'
                                 }                                              
                        },
                        itemStyle: {
                            emphasis: {
                                color: "rgb(254,153,78)"
                            }
                        },
                        data: resultdata1
                    }
                     ]
                };
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
                //   if(this.Areaflog){
                //     this.init();
                //   }else{
                //     this.Areaflog =true;
                //  }
              },
              option(val){
                 this.select = val;           
                 if(this.Areaflog){
                     this.init();
                 }else{
                     this.Areaflog =true;
                 }
              }           
          }
       }
</script>