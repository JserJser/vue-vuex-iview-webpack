<template>
  <div>
    <i-col span="24" style="postion:relative;padding:10px">
        <div class="LiveTitle"><Button class="portraitActive" @click="jzData">居住地</Button><Button  @click="gzData">工作地</Button><Button @click="bfData">拜访区域</Button></div>
        <div id="Live_a"></div>
    </i-col>  
  </div>
</template>
<style type="text/css">
    #Live_a,#Live_b,#Live_c{
     margin: 0 auto;
      height:800px; 
    }
    .LiveTitle {
        position: absolute;
        z-index: 11;
        top: 20px;
    }
    .LiveTitle button {
        border: none;
        border-radius: 5%;
        display: inline;
        padding: 5px 10px;
        font-size: 12px;
        float: left;
    }
    .Live_a  div:nth-child(1){
        z-index: 1111;
    }
</style>

<script type="text/javascript">
      
     import api from '../../api/API'
     import echarts from 'echarts'
     import map from 'echarts/map/js/china'  
     import loading from '../../components/loading'
     import { setTimeout } from 'timers';
     var bmap = require('../../../node_modules/echarts/extension/bmap/bmap');
       export default {
        props:{
           ListData:{},
           option:{}
        },
          data(){
            return{
                juzhu:'',
                gongzuo:'',
                baifang:'',
                all:[],
                Id_Date:'',
                select:[],            
                Liveflog:false,   
            }
          },
          mounted(){
             $('.cheack').show()
               var _this = this ;
               if(_this.Liveflog==false){
                   setTimeout(function(){
                        _this.init();
                        _this.Liveflog =true;
                   },1000)
               }
          },
          methods:{
                init(){
                    var _this = this ;       
                    var Id_Date = _this.ListData ;
                    var option = _this.option;     
                    api.portrait.getPortraitLive(Id_Date[0],Id_Date[1],Id_Date[2],option[0],option[1],option[4],option[2],option[3],function(resp){
                            if(resp.status==1){
                                    _this.start(resp.data.detail);    
                                    var Choice =  sessionStorage.getItem('LiveChoice')?sessionStorage.getItem('LiveChoice'):'juzhu';             
                                    if(Choice=='juzhu'){           
                                    _this.jzData();
                                    }else if (Choice =='gongzuo'){
                                    _this.gzData();
                                    }else{
                                    _this.bfData();
                                    }           
                            }else{
                                    _this.start([]);    
                                    var Choice =  sessionStorage.getItem('LiveChoice')?sessionStorage.getItem('LiveChoice'):'juzhu';             
                                    if(Choice=='juzhu'){           
                                    _this.jzData();
                                    }else if (Choice =='gongzuo'){
                                    _this.gzData();
                                    }else{
                                    _this.bfData();
                                    }      
                                                             
                            }
                    })  
                },
                jzData(){
                      $('.LiveTitle').children().eq(0).addClass('portraitActive').siblings().removeClass('portraitActive');
                     sessionStorage.setItem('LiveChoice','juzhu');
                      this.a([this.juzhu]);
                },
                gzData(){          
                    $('.LiveTitle').children().eq(1).addClass('portraitActive').siblings().removeClass('portraitActive');
                    sessionStorage.setItem('LiveChoice','gongzuo');
                     this.a([this.gongzuo]);
                },
                bfData(){           
                    $('.LiveTitle').children().eq(2).addClass('portraitActive').siblings().removeClass('portraitActive');                    
                    sessionStorage.setItem('LiveChoice','baifang');
                    this.a([this.baifang]);
                },
                getData(a,b){
                        var point = new BMap.Point(a,b);
                        var gc = new BMap.Geocoder();                          
                        var promise = new Promise((resolve) => {               
                        gc.getLocation(point,function(rs){
                            var addComp = rs.addressComponents;
                            var mapAddress = addComp.province+addComp.city + addComp.district
                            + addComp.street + addComp.streetNumber;    
                            setTimeout(() => {
                                resolve(mapAddress);
                            },1000)
                            });     
                        })
                        return promise
                },                
                start(val){
                  var _this = this ;
                                var arr = [] ; 
                                var jzd = val['live'];
                                for(let i in jzd){
                                var datalist = {};
                                datalist['coord'] = [jzd[i].lon,jzd[i].lat];
                                datalist['elevation'] =jzd[i].count*1000;
                                arr.push(datalist)
                                }
                                _this.juzhu = arr;
                                var arr1 = [];
                                var gzq = val['work'];
                                for(let k in gzq){
                                var datalist = {};
                                datalist['coord'] = [gzq[k].lon,gzq[k].lat];
                                datalist['elevation'] =gzq[k].count;
                                arr1.push(datalist)
                                }     
                                _this.gongzuo = arr1;
                                var arr2 = [];
                                var bfqy = val['visit'];
                                for(let g in bfqy){
                                var datalist = {};
                                datalist['coord'] = [bfqy[g].lon,bfqy[g].lat];
                                datalist['elevation'] =bfqy[g].count;
                                arr2.push(datalist)
                                }                     
                                _this.baifang = arr2 ; 
                },
                a(data1){
                      var _this = this ; 
                      var dom = document.getElementById('Live_a');    
                      var myChart = this.$echarts.init(dom); 
                      var app 
                      var points = [].concat.apply([], data1.map(function (track) {
                                return track.map(function (seg) {
                                    return seg.coord.concat([1]);
                                });
                      }));          
                      var zb = data1[0];
                        for(let i in zb){
                            _this.getData(zb[i].coord[0],zb[i].coord[1]).then((data) =>{
                                     _this.all.push(data);
                            })
                      }
                      var option 
                        myChart.setOption(option = {
                            animation: false,
                            bmap: {
                                center: [110.13066322374, 26.040018034923],
                                zoom: 7,
                                roam: true,
                                mapStyle: {//改变百度地图样式
                                    styleJson:[
                                               {
                                                "featureType": "road",
                                                "elementType": "all",
                                                "stylers": {
                                                        "color": "#FFF3E3",            
                                                      //   "color": "#004882"     
                                                }
                                                },                            
                                            ]
                                }                                
                            },
                            visualMap: {
                                show: false,
                                top: 'top',
                                seriesIndex: 0, 
                                max:5,                        
                                calculable: true,
                                inRange: {
                                  color: ['blue', 'blue', 'green', 'yellow', 'red']
                                }
                            },                  
                            toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false,
                                     optionToContent: function(opt) {     
                                            var data = opt.series[0].data;
                                            $(function(){
                                                $('#Live_a').children().eq(1).css('z-index','2222');
                                            })
                                            var table = '<table class="ectb" style="width:100%;"><tbody>' ;
                                            table +=  '<tr ><th>地址</th><th>经度</th><th>纬度</th></tr>'  ;                                   
                                            var zbList = _this.all;
                                            for(let i in data){
                                                var lon = data[i][0]; 
                                                var lat = data[i][1];   
                                                var name = zbList[i]   
                                                table+='<tr><td>'+name+'</td><td>'+lon+'</td><td>'+lat+'</td></tr>' 
                                            }

                                                  table += '</tbody></table>';
                                                  return table;
                                     }
                                     },
                                    restore: {show: true},
                                    saveAsImage: {show: true,name:'身边数据'}
                                },
                                iconStyle:{
                                        colorStops: [{
                                            offset: 0, color: '#000' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#000' // 100% 处的颜色
                                        }],
                                },
                                right:'6%',
                                top:'1%'
                            },
                            series: [{
                                type: 'heatmap',
                                coordinateSystem: 'bmap',
                                data: points,
                                pointSize: 25,
                                blurSize: 20,
                                maxOpacity:.8,                             
                            }]                                               
                        });
                        // if (!app.inNode) {
                            // 添加百度地图插件
                              var bmap = myChart.getModel().getComponent('bmap').getBMap();

                              bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP,BMAP_HYBRID_MAP ]}));

                              bmap.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_ZOOM}));

                              bmap.addControl(ZoomControl);
                        // }                      
                          if (option && typeof option === "object"){
                              myChart.setOption(option, true);
                          }                         
                }
          },
          components:{
    
          },
          watch:{
                ListData(val){
                 this.Id_Date = val;
                //   if(this.Liveflog){
                //     this.init();
                //   }else{
                //     this.Liveflog =true;
                //  }
              },
              option(val){
                 this.select = val;           
                 if(this.Liveflog){
                     this.init();
                 }else{
                     this.Liveflog =true;
                 }
              }
          }
          

       }
</script>