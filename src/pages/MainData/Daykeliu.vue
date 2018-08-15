<template>
  <div>

    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '数据', to: ''}, {name: '每日客流', to: ''}]"></breads>
        </i-col>

        <i-col  :xs="10" :sm="12" :md="12" :lg="14" >
          <store-date-selector @seldevice="deviceChange" @seldate="selDateChange"></store-date-selector>
        </i-col>

        <i-col  :xs="8"  :sm="6" :md="6" :lg="6">
          <user  style="float:right;margin-right:20px"></user>
        </i-col>

      </row>
    </div>
    <grid  :DataHeaderList='DataHeaderList' :Nowcust='Nowcust' ></grid>
    <div class="layout-content" style="padding-top:0!important">

    <div  class="allData">
        <Row class="allDataList">
            <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
                <div class="Numpeople Indexpie" id="Numpeople"></div>
            </i-col>
            <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
                <div class="Passenger Indexpie" id="Passenger"></div>
            </i-col>
             <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
                <div class="customers Indexpie" id="customers"></div>
            </i-col>
           <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
             <div class="mobileTypeContainer Indexpie" id="mobileTypeContainer"></div> 
           </i-col>
            <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
              <div class="spreadTimeContainer Indexpie" id="spreadTimeContainer"></div> 
           </i-col>
           <i-col :xs="24" :sm="24" :md="12" :lg="8" class="Indexpie">
              <div class="spreadCountContainer Indexpie" id="spreadCountContainer"></div>  
           </i-col>                          
       </Row>  
    </div>   
      <!--// 进店-->
      <div class="PeopleEntering">
        <div id="haveinChartContainer"></div>
      </div>

      <!--// 新老客户对比-->
      <div class="NewOldcustomers">      
        <div id="chartoldContainer"></div>
      </div>
    
      <!--// 客流量周趋势-->
        <div class="passenger">
          <div id="chartWeekAnalysis"></div>          
      </div>
    </div>
  </div>
</template>
<script>
  import dateUtils from '../../util/dateUtils'
   
  import '../../style/style.css'
  var initialDay = dateUtils.dateInit.initDay();
  import api from '../../api/API'
  import echarts from 'echarts'
  import loading from '../../components/loading'
  export default {
    data() {
      return {
        presentDevice: this.$store.getters.getDefId,
        shouldIn: false,
        FirstForm: true,
        SecondForm:true,
        ThirdForm:true,
        selectedDate: initialDay,
        DataHeaderList:{},//人流量等框框
        Time:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        TimeWeek: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        GetDayData:'',
        Nowcust:'',
        StopData:'',
      }
    },
    components: {
      breads: require('../../components/headBreadcrumb.vue'),
      storeDateSelector: require('../../components/Date/dateAndStoreBanner.vue'),
      grid: require('../../components/dataGrids.vue'),
      user: require('../../components/user.vue'),
    },
    created: function () {
      this.$logger('created');
    },
    beforeDestroy: function () {
      this.$logger('beforeDestroy');
    },  
    methods: {
      deviceChange: function (device) {
        this.presentDevice = device;
        this.loadDataFromNet(this.selectedDate);
        this.loadMobileType(this.selectedDate);
        this.loadWeekData(this.selectedDate);      
      },
      selDateChange: function (selDay) {
        this.selectedDate = selDay;
        this.loadDataFromNet(selDay);
        this.loadMobileType(selDay);
        this.loadWeekData(selDay);
      },  
      loadDataFromNet: function (selday) {
        var _this = this;
        api.NewDataList.getCountTimes(this.presentDevice,selday,function(resp){
                if (resp.status == 1) {
                    _this.StopData = resp.data;
                    _this.TimeCount();
                    }else{
                          loading.show(resp.status, resp.statusMsg);
                   }
            })          
        api.NewDataList.getCustomerHourData(this.presentDevice,selday,'keliu,renliu,new_customes,old_customes,into_store',function(resp){ 
                if (resp.status == 1){
                      _this.LineAll('haveinChartContainer','进店人数统计', resp.data.keliu, resp.data.into_store,'客流人数','进店人数',_this.Time,_this.selectedDate)
                      _this.LineAll('chartoldContainer','新老顾客统计', resp.data.new_customes, resp.data.old_customes,'新顾客','老顾客',_this.Time,_this.selectedDate)                          
                  }else{       
                   loading.show(resp.status, resp.statusMsg);
                }
        })
        api.NewData.getCustomerDayData(this.presentDevice,selday,selday,'renliu,keliu,zhudian,tiaochu,new_customes,old_customes,avg_time','day',function(resp){   
                if (resp.status == 1) {
                      _this.GetDayData = resp.data; 
                      _this.DataHeaderList = resp.data;    
                      _this.Pierenliu();                                     
                }else{
                       loading.show(resp.status, resp.statusMsg);   
                }
        })
        api.NewDataList.getNowCustomerData(this.presentDevice,function(resp){
                if (resp.status == 1) {
                     _this.Nowcust = resp.data;
                }else{
                      loading.show(resp.status, resp.statusMsg);
                }
        })    
      },
      TimeCount(){
            var StopData = this.StopData;
            var StopNub =  StopData.count;//次数
            var StopTime = StopData.times;//时间  
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var e = 0;
            var f = 0;
            var a1 = 0;
            var b1 = 0;
            var c1 = 0;
            var d1 = 0;
            var e1 = 0;
            var f1 = 0;    
            for(let i in StopNub){
                if(i<=10){
                  a+= StopNub[i];
                }else if(i<=30 && i>=11){
                  b+= StopNub[i];
                }else if(i<=60 && i>=31){
                  c+= StopNub[i];
                }else if(i<=90 && i>=61){
                  d+= StopNub[i];
                }else if(i<=120 && i>=91){
                  e+= StopNub[i];
                }else{
                  f+= StopNub[i];
                }
            }
              for(let k in StopTime){
                if(k<=10){
                  a1+= StopTime[k];
                }else if(k<=30 && k>=11){
                  b1+= StopTime[k];
                }else if(k<=60 && k>=31){
                  c1+= StopTime[k];
                }else if(k<=90 && k>=61){
                  d1+= StopTime[k];
                }else if(k<=120 && k>=91){
                  e1+= StopTime[k];
                }else{
                  f1+= StopTime[k];
                }
            }      
            var arr3 = [{name:'0~10(次)',value:a},{name:'11~30(次)',value:b},{name:'31~60(次)',value:c},{name:'61~90(次)',value:d},{name:'91~120(次)',value:e},{name:'大于120(次)',value:f}]
            var arr4 = [{name:'0~10(分钟)',value:a1},{name:'11~30(分钟)',value:b1},{name:'31~60(分钟)',value:c1},{name:'61~90(分钟)',value:d1},{name:'91~120(分钟)',value:e1},{name:'大于120(分钟)',value:f1}];            
            this.PieAll(arr4,'spreadTimeContainer','停留时间分布');    
            this.PieAll(arr3,'spreadCountContainer','历史出现次数');   
      },
      LineAll(id,text,data1,data2,name1,name2,time,time2){
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
                    top:'5%',
                    right:'8%'
                },  
              legend: {
                  data: [name1,name2],
                  right: 10,
                  top:'2%',
                  width:20,
                  icon:'circle'
              },                  
              tooltip: {
                  trigger: 'axis'
              },                
              title: {
                text: time2+' '+text,
                x: "left",
                textStyle:{
                    fontSize:16,
                    fontWeight:400,
                    color:'#8E8E8E'
                }                            
              },    
                grid:{
                   width:'95%',
                   left:'4%'
                },                          
                xAxis: {
                    type: 'category',
                    boundaryGap: ['10%', '10%'],
                    data:time
                },
                yAxis: {
                    type: 'value',
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
                                show: true,
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
                                  show: true,
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
      PieAll(val,id,text){
                         var dom = document.getElementById(""+id+"");
                         var myChart = this.$echarts.init(dom);
                         var option = {                      
                                title: {
                                  text:text,      
                                   x:'left', 
                                   left:20,
                                   textStyle:{
                                     fontSize:16,
                                     fontWeight:400,
                                     color:'#8E8E8E'
                                   },              
                                },                        
                              tooltip: {
                                  trigger: 'item',
                                  formatter: " {b} : {c} ({d}%)"
                              },   
                  toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false,
                        optionToContent: function(opt) {      
                            var data = opt.series[0].data ;
                            var arr = 0;
                                for(let k in data){
                                    arr+=data[k].value
                                }
                                 let table = '<table class="DaykeliuTable"  style="width:100%;"><tbody>'
                                 table+= '<tr class="indextime"><th style="border: 1px solid #000;">名称</th><th style="border: 1px solid #000;">数量</th><th style="border: 1px solid #000;">占比</th></tr>' 
                             for(let i in data){
                              table+='<tr class="indextime"><td>'+data[i].name+'</td><td>'+data[i].value+'</td><td>'+((data[i].value/arr)*100).toFixed(2)+'%</td></tr>'
                              }                                
                                  table += '</tbody></table>';                 
                                  return table;                                  
                              }},
                        saveAsImage: {show: true,name:'身边数据'}
                    },
                    top:'0%',
                    right:'0%'
                },                                                                                  
                              series: [{
                                  type: 'pie',
                                  radius: '65%',
                                  center: ['50%', '50%'],
                                  clockwise: false,
                                  data: val,
                                  label: {
                                      normal: {
                                          textStyle: {
                                              color: '#999',
                                              fontSize: 14,
                                              // width:5,
                                          },
                                            formatter: "{b}:{d}%"
                                      },
                                  },
                                  labelLine:{
                                    normal:{
                                      length:1,
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
                              color:  ['#0081D2', '#06A7DD', '#03DAE4', '#00D2A8', '#88D370', '#191970'],                       
                          };
                          if (option && typeof option === "object") {
                              myChart.setOption(option, true);
                              window.addEventListener('resize', function () { myChart.resize(); } );
                          }           
      },
      Pierenliu(){
        var data = this.GetDayData.data ;
        var zhudian = data.zhudian[this.selectedDate];
        var tiaochu = data.tiaochu[this.selectedDate];
        var indoorCustomes = data.keliu[this.selectedDate];//客   
        var oldCustomes = data.old_customes[this.selectedDate];//旧
        var newCustomes = data.new_customes[this.selectedDate];//新         
        var all = data.renliu[this.selectedDate];
        var nocus = parseInt(all-tiaochu);
        var arr = [
          {name:'驻店量',value:zhudian},{name:'跳出量',value:tiaochu},{name:'未进店人数',value:nocus}
        ];
        var arr1 = [
          {name:'驻店量',value:zhudian},{name:'跳出量',value:tiaochu}
        ];        
        var arr2 = [
          {name:'新客户',value:newCustomes},{name:'老客户',value:oldCustomes}
        ];    
      
        this.PieAll(arr,'Numpeople','人流量统计');    
        this.PieAll(arr1,'Passenger','客流量统计');    
        this.PieAll(arr2,'customers','新老客户统计');       
      },
      loadMobileType: function (selday) {
        var _this = this;
        api.realTimeAndhistory.realTimeMobileTypes(this.presentDevice, selday, function (resp) {
            if(resp.status==1){
            var data = resp.data;
            var arr =[];
            for(let i in data){
                var dataList ={
                  'name':data[i].brand,
                  'value':data[i].brandNum
                }
                arr.push(dataList);
            }
                 _this.PieAll(arr,'mobileTypeContainer','今日顾客手机品牌分布')              
            }else{
                loading.show(resp.status, resp.statusMsg);
             }
        })
      },
      loadWeekData: function (selday) {
        var _this = this;
        api.realTimeAndhistory.historyWeek(this.presentDevice, selday, function (resp) {
          if (resp.status == 1) {
            _this.LineAll('chartWeekAnalysis','客流量周趋势图', resp.data.sweek, resp.data.bweek,'上周','本周',_this.TimeWeek,'')
          } else {
            loading.show(resp.status, resp.statusMsg);
          }
        })
      },   
    },
  }
</script>