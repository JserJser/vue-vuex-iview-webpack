<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">
          <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
             <breads :items="[{name: '数据', to: ''}, {name: '数据分析', to: ''}]"></breads>
          </i-col>
          <i-col  :xs="10" :sm="12" :md="12" :lg="14">
            <NewDate @seldevice="deviceChange"  @seldate="selDateChange"></NewDate> 
          </i-col>
        <i-col  :xs="8"  :sm="6" :md="6" :lg="6">
          <user  style="float:right;margin-right:20px"></user>
        </i-col>
      </row>

    </div>
      <row style="margin-top:20px;">
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
              <div class="chartWrapperRight"  ref="rk">
                  <div class="title">
                          <div class="title_list">
                             <a href="javascript:void(0)" @click="enlarge($event,'rk')"> 人客量及转换率分析 </a>
                            <div>
                               <span>{{Time.start_date_Hh}}</span>
                               <span>至</span>  
                               <span>{{Time.start_end_Hh}}</span>          
                            </div>           
                          </div>
                        <div class="but">
                            <select class="butHh onday Tday dday" @change='Datesle'>
                               <option  class='evl' value="dday">时</option>
                               <option   value="day">天</option>
                               <option   value="week">周</option>
                               <option   value="month">月</option>
                            </select>
                        </div>  
                  </div>             
                      <custom-RenKe-Pie :NewHhData='dataAll.NewHhData'   :fsHhData='dataAll.fsHhData' :setmychart='setmychart'></custom-RenKe-Pie>
              </div>         
        </i-col>
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
                <div class="chartWrapperRight" ref="kl">
                    <div class="title">
                      <div class="title_list">
                         <a href="javascript:void(0)"  @click="enlarge($event,'kl')"> 客流驻店率</a>
                          <div>
                          <span>{{Time.start_date_Kl}}</span>
                          <span>至</span>
                          <span>{{Time.start_end_Kl}}</span>  
                          </div>
                      </div>
                       <div class="but">
                          <select  class="butKL onday" @change='DateKL' >
                             <option   value="day">天</option>
                             <option  value="week">周</option>
                             <option  value="month">月</option>
                          </select>
              
                      </div>  
                  </div>         
                     <custom-jin-ru-pie :NewKLData='dataAll.NewKLData' :setmychart='setmychart'></custom-jin-ru-pie>              
                </div>     
        </i-col>
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
            <div class="chartWrapperRight" ref="tc">
                <div class="title">
                  <div class="title_list">
                      <a href="javascript:void(0)"  @click="enlarge($event,'tc')"> 跳出量与跳出率 </a>
                      <div>
                      <span>{{Time.start_date_Tc}}</span>
                      <span>至</span>
                      <span >{{Time.start_end_Tc}}</span>  
                      </div>
                  </div>
                  <div class="but">
                      <select class="butTc onday" @change='DateTc'>   
                         <option  value="day">天</option>
                         <option  value="week">周</option>
                         <option  value="month">月</option>
                      </select>
                  </div>  
              </div>      
                <custom-tiao-zhu-pie :NewTcData='dataAll.NewTcData' :setmychart='setmychart'></custom-tiao-zhu-pie>    
              </div>         
        </i-col> 

        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
          <div class="chartWrapperRight" ref="zd">
            <div class="title">
              <div class="title_list">
                  <a href="javascript:void(0)"  @click="enlarge($event,'zd')"> 驻店量与停留时长分析 </a>
                  <div>
                   <span>{{Time.start_date_Zd}}</span>
                   <span>至</span>
                   <span>{{Time.start_end_Zd}}</span>  
                  </div>
              </div>
              <div class="but">
                <select class="butZd onday" @change='DateZd'>   
                   <option  value="day">天</option>
                   <option  value="week">周</option>
                   <option  value="month">月</option>
                </select>
              </div>  
          </div>          
            <custom-xin-lao-pie :NewZdData='dataAll.NewZdData' :setmychart='setmychart'></custom-xin-lao-pie>
          </div>
        </i-col>  
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
          <div class="chartWrapperRight" ref="xlkl">
            <div class="title">
              <div class="title_list">
                  <a href="javascript:void(0)" @click="enlarge($event,'xlkl')"> 客流量及新老顾客对比 </a>
                  <div>
                     <span>{{Time.start_date_Xl}}</span>
                     <span>至</span>
                     <span style="right:0">{{Time.start_end_Xl}}</span>  
                  </div>
              </div>
              <div class="but">
                <select class="butXl onday Tday dday" @change='DateXl'> 
                  <option  class='evl' value="dday">时</option>  
                   <option  value="day">天</option>
                   <option  value="week">周</option>
                   <option  value="month">月</option>
                </select>
              </div>  
          </div>          
            <custome-Ti-Dai-Pie :NewXlData='dataAll.NewXlData' :fsXlData='dataAll.fsXlData' :setmychart='setmychart'></custome-Ti-Dai-Pie> 
          </div>          
      </i-col>  
      <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
        <div class="chartWrapperRight" ref="rll">
          <div class="title">
            <div class="title_list">
                <a href="javascript:void(0)" @click="enlarge($event,'rll')"> 人流量占比分析图 </a>
                <div>
                <span>{{Time.start_date_RlTcZd}}</span>
                <span>至</span>
                <span >{{Time.start_end_RlTcZd}}</span>
                </div>
            </div>
            <div class="but">
              <select class="butRlTcZd onday" @change='DateRlTcZd'> 
                 <option  value="day">天</option>
                 <option  value="week">周</option>
                 <option  value="month">月</option>
              </select>
            </div>  
        </div>          
          <custome-Rl-Tc-Zd :NewRlTcZdData='dataAll.NewRlTcZdData' :setmychart='setmychart'></custome-Rl-Tc-Zd>      
        </div>          
    </i-col>       
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
            <div class="chartWrapperRight" ref="xldb">
              <div class="title">
                <div class="title_list">
                    <a href="javascript:void(0)" @click="enlarge($event,'xldb')"> 新老顾客对比 </a>
                    <div>
                     <span>{{Time.start_date_Xlzb}}</span>
                     <span>至</span>
                     <span>{{Time.start_end_Xlzb}}</span>               
                    </div>
                </div>
                <div class="but">
                  <select class="butXlzb onday Tday" @change='DateXlzb'> 
                    <option  class='evl' value="dday">时</option>  
                     <option  value="day">天</option>
                     <option  value="week">周</option>
                     <option  value="month">月</option>
                  </select>
                </div>  
            </div>          
              <customeXinLaozb :NewXlzbData='dataAll.NewXlzbData' :fsXlzbData='dataAll.fsXlzbData' :setmychart='setmychart'></customeXinLaozb>      
            </div>          
        </i-col>  
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
          <div class="chartWrapperRight" ref="zdkl">
            <div class="title">
              <div class="title_list">
                  <a href="javascript:void(0)"  @click="enlarge($event,'zdkl')"> 客流量与驻店量对比 </a>
                  <div>
                   <span>{{Time.start_date_zdl}}</span>
                   <span>至</span>
                   <span>{{Time.start_end_zdl}}</span>            
                  </div>
              </div>
              <div class="but">
                <select class="butzdl onday" @change='Datezdl'> 
                   <option  value="day">天</option>
                   <option  value="week">周</option>
                   <option  value="month">月</option>
                </select>
              </div>  
          </div>          
            <customeKz :NewZdlData='dataAll.NewZdlData' :setmychart='setmychart'></customeKz>        
          </div>          
        </i-col>  
        <i-col span="8" :xs="24" :sm="24" :md="12" :lg="8">
          <div class="chartWrapperRight" ref="kltc">
            <div class="title">
              <div class="title_list">
                  <a href="javascript:void(0)"  @click="enlarge($event,'kltc')"> 客流量与跳出对比 </a>
                      <div>
                        <span>{{Time.start_date_tcl}}</span>
                        <span>至</span>
                        <span>{{Time.start_end_tcl}}</span>                 
                      </div>
              </div>
              <div class="but">
                <select class="buttcl onday" @change='Datetcl'> 
                   <option  value="day">天</option>
                   <option  value="week">周</option>
                   <option  value="month">月</option>
                </select>
              </div>  
          </div>          
            <customekeliutiaochu :NewtclData='dataAll.NewtclData' :setmychart='setmychart'></customekeliutiaochu>  
          </div>          
        </i-col>                                                       
      </row>
        <div class="StoreImg" v-if='setchart'></div>
        <div class="closechart" v-if='setchart'  @click="closechart"><Icon type="close-circled"></Icon></div>
  </div>
</template>

<style lang="scss" scoped>
$width: 80%;
$border-width: 1px;
$border-color: lightgray;

.chartwrapper {
  width: $width;
  padding-top: 0.02rem;
  background: white;
}
.closechart {
  font-size: 2rem;
  z-index: 9;
  position: fixed;
  top: 65px;
  right: 2rem;
}
.StoreImg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}

.chartWrapperRight {
  @extend .chartwrapper;
  margin: 0 auto;
  margin-top: 50px;
  height: 500px;
  width: 90%;
  background: rgb(245, 247, 249);
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.chartWrapperRight:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.active {
  width: 500px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
  z-index: 2333;
  transform: scale(1.2);
  transition: 1s all;
}
.close {
  position: fixed;
  top: 22%;
  z-index: 99999;
  right: 31%;
  transform: scale(2);
  display: none;
  color: #fff;
}
.title {
  width: 100%;
  height: 60px;
  border: 1px solid #ececee;
  position: relative;
  background: #f0f0f0f0;
  color: #8e8e8e;
}
.title_list {
  text-align: left;
  text-indent: 25px;
  height: auto;
  float: left;
  font-size: 16px;
  margin-top: 10px;
}
.title_list > div {
  position: absolute;
  top: 40px;
  left: 0;
}
.title_list span {
  font-size: 12px;
  text-indent: 6px;
}

.but {
  float: right;
  font-size: 12px;
  height: 100%;
}

.but select {
  font-size: 13px;
  background: #ccc;
  border: 1px solid #000;
  border-radius: 1px;
  margin: 10px;
}
.but div {
  float: left;
  line-height: 6px;
  margin: 0 1px;
  margin-top: 29px;
}
.bigCharts {
  position: fixed;
  z-index: 111;
  height: 700px;
  width: 80%;
  margin-left: 5%;
  left: 10%;
  top: 50%;
  margin-top: -350px;
}
.charthight {
  height: 650px !important;
}
.ivu-date-picker .ivu-select-dropdown {
  z-index: 2444;
}
.ivu-picker-panel-sidebar {
  z-index: 3333;
}
</style>

<script>
import dateUtils from '../../util/dateUtils';
import api from '../../api/API';
var initialDay = dateUtils.dateInit.initDay();
import loading from '../../components/loading';

export default {
  data() {
    return {
      presentDevice: this.$store.getters.getDefId,
      selectData: initialDay,
      setmychart: 0,
      setchart: false,
      bigcharts: '',
      dataAll: {
        NewHhData: {},
        fsHhData: {},
        fsXlData: {},
        fsXlzbData: {},
        NewKLData: {},
        NewTcData: {},
        NewZdData: {},
        NewXlData: {},
        NewRlTcZdData: {},
        NewXlzbData: {},
        NewZdlData: {},
        NewtclData: {},
      },
      Time: {
        start_date_Hh: initialDay,
        start_end_Hh: initialDay,

        start_date_Kl: initialDay,
        start_end_Kl: initialDay,

        start_date_Tc: initialDay,
        start_end_Tc: initialDay,

        start_date_Zd: initialDay,
        start_end_Zd: initialDay,

        start_date_Xl: initialDay,
        start_end_Xl: initialDay,

        start_date_RlTcZd: initialDay,
        start_end_RlTcZd: initialDay,

        start_date_Xlzb: initialDay,
        start_end_Xlzb: initialDay,

        start_date_zdl: initialDay,
        start_end_zdl: initialDay,

        start_date_tcl: initialDay,
        start_end_tcl: initialDay,
      },
      // 这是上面日期的时间，不动的，
      start_stop_one: '',
      start_stop_two: '',
      // 这是上面日期的时间，不动的，
      start_date_NewHh: initialDay,
      start_end_NewHh: initialDay,
      start_time: initialDay,
      catesHh: 'renliu,keliu',
      catesKl: 'keliu,zhudian',
      catesTc: 'keliu,tiaochu',
      catesZd: 'zhudian,avg_time',
      catesXl: 'keliu,new_customes,old_customes',
      catesRlTcZd: 'renliu,keliu,zhudian,tiaochu',
      catesxlzb: 'new_customes,old_customes',
      key: '',
      disabled: true,
      timeblog: false, //开关
      alltime: '', //总的起始时间改变
      DataFs: [
        '0:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
      ],
      //总时间控制
      altime: false,
    };
  },
  methods: {
    DateAddDay(date, days) {
      //计算变化多少天后的日期，秒/分/时/月 等都可同理
      var date = new Date(date);
      return new Date(date.setDate(date.getDate() + days));
    },
    formatDate(date) {
      //今天
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      var d = date.getDate();
      d = d < 10 ? '0' + d : d;
      return y + '-' + m + '-' + d;
    },
    SevenDays() {
      //右边按钮得分天
      var k = this.allnum();
      var arr = [];
      if (k == 1) {
        var date = new Date(this.start_stop_one);
        var time = this.DateAddDay(date, -6);
        var timeover = this.formatDate(time);
        var timeoverToo = this.start_stop_two;
        arr.push(timeover);
        arr.push(timeoverToo);
      } else {
        var timeover = this.start_stop_one;
        var timeoverToo = this.start_stop_two;
        arr.push(timeover);
        arr.push(timeoverToo);
      }
      return arr;
    },
    SevenDaysAnother() {
      //自定义日期得分天
      var arr = [];
      if (this.timeblog) {
        var timeover = this.start_date_NewHh;
        var timeoverToo = this.start_end_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      } else {
        var date = new Date();
        var time = this.DateAddDay(date, -6);
        var timeover = this.formatDate(time);
        var timeoverToo = this.start_end_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      }
      return arr;
    },
    ThreeWeeks() {
      //右边总按钮分周
      var k = this.allnum();
      var arr = [];
      if (k >= 1 && k <= 7) {
        var date = new Date(this.start_stop_one);
        var time = this.DateAddDay(date, -21);
        var timeover = this.formatDate(time);
        var timeoverToo = this.start_stop_two;
        arr.push(timeover);
        arr.push(timeoverToo);
      } else {
        var timeover = this.start_stop_one;
        var timeoverToo = this.start_stop_two;
        arr.push(timeover);
        arr.push(timeoverToo);
      }
      return arr;
    },
    ThreeWeeksAnother() {
      //自定义分周
      var arr = [];
      if (this.timeblog) {
        var timeover = this.start_date_NewHh;
        var timeoverToo = this.start_end_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      } else {
        var date = new Date();
        var time = this.DateAddDay(date, -21);
        var timeover = this.formatDate(time);
        var timeoverToo = this.start_end_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      }
      return arr;
    },
    YearMonth() {
      var arr = [];
      var timeover = this.SixMonth()[4];
      var timeoverToo = this.start_end_NewHh;
      arr.push(timeover);
      arr.push(timeoverToo);
      return arr;
    },
    YearMonthAnother() {
      var arr = [];
      var date = new Date();
      if (this.timeblog) {
        var timeover = this.start_date_NewHh;
        var timeoverToo = this.start_end_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      } else {
        var timeover = this.SixMonth()[4];
        var timeoverToo = this.start_date_NewHh;
        arr.push(timeover);
        arr.push(timeoverToo);
      }
      return arr;
    },
    SixMonth() {
      //创建现在的时间
      var data = new Date();
      //获取年
      var year = data.getFullYear();
      //获取月
      var mon = data.getMonth() + 1;
      var arry = new Array();
      for (var i = 0; i < 5; i++) {
        mon = mon - 1;
        if (mon <= 0) {
          year = year - 1;
          mon = mon + 12;
        }
        if (mon < 10) {
          mon = '0' + mon;
        }

        arry[i] = year + '-' + mon + '-' + '1';
      }
      return arry;
    },
    DataChangeAll(id, two, three, four, five, six) {
      var _this = this;
      var time = $('.' + id + '').val();
      var k = _this.allnum();
      var date = new Date();
      if ($('.' + id + '').val() == 'dday') {
        _this.Realall(
          _this.key,
          _this.start_date_NewHh,
          'keliu,renliu,new_customes,old_customes',
          six
        );
        _this.$set(_this.Time, '' + three + '', _this.start_date_NewHh);
        _this.$set(_this.Time, '' + four + '', _this.start_date_NewHh);
      } else if ($('.' + id + '').val() == 'day') {
        //天
        if (_this.altime == true) {
          var arr = _this.SevenDays(); //前七天
        } else {
          var arr = _this.SevenDaysAnother();
        }
        _this.NewAllData(
          _this.key,
          arr[0],
          arr[1],
          two,
          time,
          three,
          four,
          five
        );
      } else if ($('.' + id + '').val() == 'week') {
        //周
        if (_this.altime == true) {
          var arr = _this.ThreeWeeks();
        } else {
          var arr = _this.ThreeWeeksAnother();
        }
        _this.NewAllData(
          _this.key,
          arr[0],
          arr[1],
          two,
          time,
          three,
          four,
          five
        );
      } else if ($('.' + id + '').val() == 'month') {
        if (_this.altime == true) {
          var arr = _this.YearMonth();
        } else {
          var arr = _this.YearMonthAnother();
        }
        _this.NewAllData(
          _this.key,
          arr[0],
          arr[1],
          two,
          time,
          three,
          four,
          five
        );
      }
    },
    Datesle: function(value) {
      //第一个切换
      this.DataChangeAll(
        'butHh',
        this.catesHh,
        'start_date_Hh',
        'start_end_Hh',
        'NewHhData',
        'fsHhData'
      );
    },
    DateKL: function(value) {
      //第二个切换
      this.DataChangeAll(
        'butKL',
        this.catesKl,
        'start_date_Kl',
        'start_end_Kl',
        'NewKLData',
        ''
      );
    },
    DateTc: function(value) {
      //第三个切换
      this.DataChangeAll(
        'butTc',
        this.catesTc,
        'start_date_Tc',
        'start_end_Tc',
        'NewTcData',
        ''
      );
    },
    DateZd: function(value) {
      //第四个切换
      this.DataChangeAll(
        'butZd',
        this.catesZd,
        'start_date_Zd',
        'start_end_Zd',
        'NewZdData',
        ''
      );
    },
    DateXl: function(value) {
      //第五个切换
      this.DataChangeAll(
        'butXl',
        this.catesXl,
        'start_date_Xl',
        'start_end_Xl',
        'NewXlData',
        'fsXlData'
      );
    },
    DateRlTcZd: function() {
      //第六个切换
      this.DataChangeAll(
        'butRlTcZd',
        this.catesRlTcZd,
        'start_date_RlTcZd',
        'start_end_RlTcZd',
        'NewRlTcZdData',
        ''
      );
    },
    DateXlzb: function() {
      //第七个切换
      this.DataChangeAll(
        'butXlzb',
        this.catesxlzb,
        'start_date_Xlzb',
        'start_end_Xlzb',
        'NewXlzbData',
        'fsXlzbData'
      );
    },
    Datezdl: function() {
      //第八个切换
      this.DataChangeAll(
        'butzdl',
        this.catesKl,
        'start_date_zdl',
        'start_end_zdl',
        'NewZdlData',
        ''
      );
    },
    Datetcl: function() {
      //第九个切换
      this.DataChangeAll(
        'buttcl',
        this.catesTc,
        'start_date_tcl',
        'start_end_tcl',
        'NewtclData',
        ''
      );
    },
    selDateChange: function(selDay) {
      this.selectData = selDay;
      this.timeblog = true; //时间开关
      var start = selDay[0];
      var end = selDay[1];
      var _this = this;
      _this.altime = false;
      setTimeout(function() {
        if (_this.altime == true) {
        } else {
          if (start == end) {
            //分时
            _this.Realall(
              _this.key,
              start,
              'keliu,renliu,new_customes,old_customes',
              'all'
            );
            $('.evl').removeAttr('disabled');
            $('.onday').val('day');
            $('.Tday').val('dday');
          } else {
            $('.evl').attr('disabled', 'disabled');
            $('.onday').val('day');
          }
          _this.NewAllDate(
            _this.key,
            start,
            end,
            'renliu,keliu,zhudian,tiaochu,new_customes,old_customes,avg_time',
            'day'
          );
        }
      }, 1500);
      _this.start_date_NewHh = start;
      _this.start_end_NewHh = end;
      _this.start_stop_one = start;
      _this.start_stop_two = end;
    },
    deviceChange: function(device) {
      this.presentDevice = device;
      this.key = device;
      var _this = this;
      if (this.start_date_NewHh == this.start_end_NewHh) {
        //分时间
        _this.Realall(
          _this.key,
          _this.start_date_NewHh,
          'keliu,renliu,new_customes,old_customes',
          'all'
        );
      }
      var date = new Date();
      var time = _this.DateAddDay(date, -6);
      var timeover = _this.formatDate(time);
      this.Time.start_date_Kl = timeover; //天的变为前七天
      this.NewAllDate(
        device,
        this.Time.start_date_Kl,
        this.start_end_NewHh,
        'renliu,keliu,zhudian,tiaochu,new_customes,old_customes,avg_time',
        'day'
      );
    },
    Realall: function(id, date, relcates, fsdata) {
      var _this = this;
      var id = id;
      var date = date;
      var relcates = relcates;
      api.NewDataList.getCustomerHourData(id, date, relcates, function(resp) {
        if (resp.status == 1) {
          if (fsdata == 'all') {
            _this.dataAll.fsHhData = resp;
            _this.dataAll.fsXlData = resp;
            _this.dataAll.fsXlzbData = resp;
          } else {
            _this.$set(_this.dataAll, '' + fsdata + '', resp);
          }
          var data = resp.data;
          var len = data.keliu.length;
          var result = [];
          var time = _this.DataFs;
          for (var i = 0; i < len; i++) {
            result[i] = {};
            result[i].renliu = data.renliu[i];
            result[i].keliu = data.keliu[i];
            result[i].new_customes = data.new_customes[i];
            result[i].old_customes = data.old_customes[i];
            result[i].index = time[i];
          }
        } else {
        }
      });
    },
    NewAllDate: function(
      id,
      start_date_NewHh,
      start_end_NewHh,
      catesHh,
      DateHh
    ) {
      var data_type = DateHh;
      var id = id;
      var cates = catesHh;
      var _this = this;
      api.NewData.getCustomerDayData(
        id,
        start_date_NewHh,
        start_end_NewHh,
        cates,
        data_type,
        function(resp) {
          if (resp.status == 1) {
            _this.dataAll.NewKLData = resp;
            _this.dataAll.NewTcData = resp;
            _this.dataAll.NewZdData = resp;
            _this.dataAll.NewZdlData = resp;
            _this.dataAll.NewRlTcZdData = resp;
            _this.dataAll.NewtclData = resp;
            if (_this.start_date_NewHh == _this.start_end_NewHh) {
              //分时间
            } else {
              _this.dataAll.NewXlData = resp;
              _this.dataAll.NewHhData = resp;
              _this.dataAll.NewXlzbData = resp;
            }
            _this.Time.start_date_Hh = resp.data.start_date;
            _this.Time.start_end_Hh = resp.data.end_date;

            _this.Time.start_date_Xl = resp.data.start_date;
            _this.Time.start_end_Xl = resp.data.end_date;

            _this.Time.start_date_Xlzb = resp.data.start_date;
            _this.Time.start_end_Xlzb = resp.data.end_date;

            _this.Time.start_date_Kl = resp.data.start_date;
            _this.Time.start_end_Kl = resp.data.end_date;

            _this.Time.start_date_Tc = resp.data.start_date;
            _this.Time.start_end_Tc = resp.data.end_date;

            _this.Time.start_date_Zd = resp.data.start_date;
            _this.Time.start_end_Zd = resp.data.end_date;

            _this.Time.start_date_RlTcZd = resp.data.start_date;
            _this.Time.start_end_RlTcZd = resp.data.end_date;

            _this.Time.start_date_zdl = resp.data.start_date;
            _this.Time.start_end_zdl = resp.data.end_date;

            _this.Time.start_date_tcl = resp.data.start_date;
            _this.Time.start_end_tcl = resp.data.end_date;
          }
        }
      );
    },
    NewAllData(id, start, end, cate, DateAll, one, two, three) {
      var _this = this;
      var cates = cate;
      api.NewData.getCustomerDayData(id, start, end, cates, DateAll, function(
        resp
      ) {
        if (resp.status == 1) {
          _this.$set(_this.dataAll, '' + three + '', resp);
          _this.$set(_this.Time, '' + one + '', resp.data.start_date);
          _this.$set(_this.Time, '' + two + '', resp.data.end_date);
        }
      });
    },
    allnum: function() {
      var _this = this;
      var start_time = _this.start_stop_one;
      var end_time = _this.start_stop_two;
      var bd = new Date(start_time),
        be = new Date(end_time); //时间间隔多少天
      var bd_time = bd.getTime(),
        be_time = be.getTime(),
        time_diff = be_time - bd_time;
      var k = 0;
      for (var i = 0; i <= time_diff; i += 86400000) {
        k++;
      }
      return k;
    },
    enlarge(e, val) {
      var bigcharts = this.$refs[val]; //获取元素
      this.bigcharts = bigcharts; //存上元素
      var sethight = bigcharts.children[1].children[0]; //改变高度的图表
      $('#' + sethight.getAttribute('id') + '').css('height', '650px');
      bigcharts.setAttribute('class', 'chartWrapperRight bigCharts'); //图表添加CLASS 增加定位到中间
      this.setmychart = this.setmychart + 1; //告诉子组件图表可以resize
      this.setchart = true;
    },
    closechart() {
      var bigcharts = this.bigcharts;
      var sethight = bigcharts.children[1].children[0]; //改变高度的图表
      $('#' + sethight.getAttribute('id') + '').css('height', '470px');
      bigcharts.setAttribute('class', 'chartWrapperRight');
      this.setmychart = this.setmychart + 1;
      this.setchart = false;
    },
  },
  components: {
    customRenKePie: require('../../components/TotalCustoms/customeRenKePie.vue'),
    customJinRuPie: require('../../components/TotalCustoms/customeTiaoChuPie.vue'),
    customTiaoZhuPie: require('../../components/TotalCustoms/customeTiaoZhuPie.vue'),
    customXinLaoPie: require('../../components/TotalCustoms/customeXinLaoPie.vue'),
    customeTiDaiPie: require('../../components/TotalCustoms/customeTiDaiPie.vue'),
    customeRlTcZd: require('../../components/TotalCustoms/customeRlTcZd.vue'),
    customeXinLaozb: require('../../components/TotalCustoms/customeXinLaozb.vue'),
    customeKz: require('../../components/TotalCustoms/customeKz.vue'),
    customekeliutiaochu: require('../../components/TotalCustoms/customekeliutiaochu.vue'),
    breads: require('../../components/headBreadcrumb.vue'),
    user: require('../../components/user.vue'),
    NewDate: require('../../components/Date/NewDate.vue'),
  },
};
</script>
