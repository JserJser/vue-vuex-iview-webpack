<template>
  <div>
    <row>
      <div   style="text-align:center;margin:0 10px;float:right;width:100%">
        <i-col span='4' class="ShopOrDate" style="float:left;margin-right:20px">
              <Cascader :data="shopData"
                       trigger='hover'
                       @on-change="onChange" 
                       :load-data="loadData"
                       filterable
                        v-model="value1" 
                        placeholder="请选择店铺或者输入店铺名称"
                        :render-format="Exhibition"
                        :clearable="false"
                        >
            </Cascader>     
        </i-col>
        <i-col span='4' class="ShopOrDate" style="float:left">
                <div class="slecontainer">
                    <Date-picker type="daterange" @on-change='selDate'  v-model="selectedDate"  :options="options2" placement="bottom-end" placeholder="选择日期" style="width:200px" ></Date-picker>
                </div>   
        </i-col>            
      </div>
    </row>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
    data(){
      return {
        selStore: '',
        selectedDate: [new Date(),new Date()],
        value1:[], 
        shopData: [],      
        cos:'',       
        options2:{
            shortcuts: [
                {
                    text: '今天',
                    value () {
                        const end = new Date();
                        const start = new Date();              
                        return [start, end];
                    },    
                },
                {
                    text: '昨天',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                        return [start, start];
                    },                       
                },
                {
                    text: '本周',
                    value () {
                      var time = new Date();
                        function DateAddDay(date, days){//计算变化多少天后的日期，秒/分/时/月 等都可同理
                          var date = new Date(date);
                          return new Date(date.setDate(date.getDate() + days));
                        }                     
                        function FirstDayInThisWeek(){//本周一
                          var date = new Date();
                          return DateAddDay(date, 1 - date.getDay());
                        }
                         function FirstDayInThisWeekList(){//本周末
                          var date = new Date();
                          return  DateAddDay(date,7 - date.getDay());
                        }
                        return [FirstDayInThisWeek(), FirstDayInThisWeekList()];
                    },                     
                },
                {
                    text: '上周',
                    value () {
                      var time = new Date();
                        function DateAddDay(date, days){//计算变化多少天后的日期，秒/分/时/月 等都可同理
                          var date = new Date(date);
                          return new Date(date.setDate(date.getDate() + days));
                        }                     
                        function FirstDayInThisWeek(){//上周一
                          var date = new Date();
                          return DateAddDay(date,-6 - date.getDay());
                        }
                         function FirstDayInThisWeekList(){//上周末
                          var date = new Date();
                           return DateAddDay(date,0 - date.getDay());
                        }
                        return [FirstDayInThisWeek(), FirstDayInThisWeekList()];
                    },                     
                },
                {
                    text: '本月',
                    value () {
                          var time = new Date();         
                          var nowMonth = time.getMonth(); //当前月   
                          var nowYear = time.getFullYear(); //当前年      
                          function FirstDayInThisWeek(){//本月第一天
                            var monthStartDate = new Date(nowYear, nowMonth, 1);   
                            return monthStartDate;  
                          }
                        function getCurrentMonthLast(){//本月最后一天
                           var date=new Date();
                           var currentMonth=date.getMonth();
                           var nextMonth=++currentMonth;
                           var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
                           var oneDay=1000*60*60*24;
                           return new Date(nextMonthFirstDay-oneDay);
                          }
                        return [FirstDayInThisWeek(), getCurrentMonthLast()];
                    },                      
                },  
                {
                    text: '上月',
                    value () {           
                      var now = new Date();                    //当前日期               
                      var nowMonth = now.getMonth();           //当前月     
                      var nowYear = now.getYear();             //当前年     
                      nowYear += (nowYear < 2000) ? 1900 : 0;  // 
                      var lastMonthDate = new Date();  //上月日期  
                      lastMonthDate.setDate(1);  
                      lastMonthDate.setMonth(lastMonthDate.getMonth()-1);  
                      var lastYear = lastMonthDate.getYear();  
                      var lastMonth = lastMonthDate.getMonth(); 
                      function getMonthDays(myMonth){     
                          var monthStartDate = new Date(nowYear, myMonth, 1);      
                          var monthEndDate = new Date(nowYear, myMonth + 1, 1);      
                          var   days   =   (monthEndDate   -   monthStartDate)/(1000   *   60   *   60   *   24);      
                          return   days;      
                      }     

                      //获得上月开始时间  
                      function getLastMonthStartDate(){  
                          var tmonth = now.getMonth(); 
                        if(lastMonth>tmonth){
                          var time = nowYear-1
                        }else{
                            var time = nowYear
                        }
                          var lastMonthStartDate = new Date(time, lastMonth, 1);  
                          return lastMonthStartDate
                      }  
                      //获得上月结束时间  
                      function getLastMonthEndDate(){  
                        var tmonth = now.getMonth(); 
                        if(lastMonth>tmonth){
                          var time = nowYear-1
                        }else{
                            var time = nowYear
                        }
                          var lastMonthEndDate = new Date(time, lastMonth, getMonthDays(lastMonth));  
                          return lastMonthEndDate 
                      }  
                        return [getLastMonthStartDate(), getLastMonthEndDate()];
                    },                     
                },                                                           
            ]
        }        
      }
    },
    mounted: function () {
      if (!this.$store.getters.getStores.length) {
        // this.$store.dispatch('fetchStores',).then(() => {
        //        this.init();
        // })
      } else {
               this.init();
      }
    },

    computed: mapGetters({
      stores: 'getStores'
    }),

    methods: {
       init(){
           let def_sid = sessionStorage.getItem('def_sid');
           this.$emit('seldevice', def_sid);
           this.value1=[def_sid];
           var dataall = JSON.stringify(this.stores);
           var data =JSON.parse(dataall);
           for(let i in data){
                data[i]['value'] = data[i].id;
                data[i]['label'] = data[i].name;
                var  children = data[i].children;       
                if(typeof(children) !='undefined'){
                    let data1 =JSON.stringify(data[i]);
                    let data2 =JSON.parse(data1);
                    data2.children = '';
                    children.unshift(data2);
                }
             for(let k in children){
                  children[k]['value'] = children[k].id;
                  children[k]['label'] = children[k].name;
                  var childrenList = children[k].children;
                  if(typeof(childrenList) !='undefined' && childrenList!=''){
                    let data3 =JSON.stringify(children[k]);
                    let data4 =JSON.parse(data3);
                    data4.children = '';
                    childrenList.unshift(data4);
                  }
                for(let p in childrenList){
                  childrenList[p]['value'] = childrenList[p].id;
                  childrenList[p]['label'] = childrenList[p].name;
                }
             }
           }
           this.shopData = data;
      },     
      selDate: function (selectedDay) {
        this.$emit('seldate', selectedDay)
      },
      onChange: function (val) {
        var val = val.pop();
        this.value1=[val];
        this.$emit('seldevice', val)
      },
      Exhibition(labels,selectedData){
           if(labels==''){
             var data = this.stores;
             var def_sid = this.$store.getters.getDefId
             for(let i in data){
                  if(data[i].id ==def_sid){
                       return data[i].name;
                 }     
             }
           }else{
              return labels.pop();
           }
      }
    },
    watch:{
       stores(val){
          this.init();
      }
    }

  }
</script>
