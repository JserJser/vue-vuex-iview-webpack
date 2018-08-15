<template>
  <div class='Heat'>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '数据', to: ''}, {name: '热力图', to: ''}]"></breads>
        </i-col>
         <i-col :xs="8" :sm="8" :md="8" :lg="7">
          <Heat-Date @seldevice="deviceChange" :SelectedId='SelectedId' @seldate="selDateChange" v-on:No-authority ='Jurisdiction'></Heat-Date>
        </i-col>       
         <i-col :xs="6" :sm="5" :md="4" :lg="7">
           <Time-picker :clearable='false'  @on-change="timerchange"  :value="value1"  placeholder="选择时间" style="width: 90px;float:left"></Time-picker>
           <button class="zd" @click ='nowTime'>自动轮播</button>
         </i-col>
        <i-col :xs="4"  :sm="5" :md="6" :lg="6">
          <user  style="float:right;margin-right:20px"></user>
        </i-col>

      </row>
    </div>
    <div class="ivu-col ivu-col-span-24 Heatbg"  v-show='show'>
        <!-- <ul class="louc">
          <li v-for="(item,$index) in items" @click="selectSort($index)" :class="{HeatActive:$index==active}" ><span>{{item}}</span></li>
        </ul>       -->
        <img class='Heatimg' :src="floor">    
        <div class="selt">
            <div class="ground-floor"  >
                <Sea-One-Floor :oneFloor='oneFloor'></Sea-One-Floor>
            </div>
            <div class="Second-floor" style="display:none"> 
                <Sea-Two-Floor  :TwoFloor='TwoFloor'></Sea-Two-Floor>
            </div>
            <div class="three-floor" style="display:none">
                <Sea-Three-Floor  :ThreeFloor='ThreeFloor'></Sea-Three-Floor>
            </div>   
            <div class="four-floor" style="display:none">
                <Sea-Four-Floor :FourFloor='FourFloor'></Sea-Four-Floor>
            </div>   
            <div class="five-floor" style="display:none">
                <Sea-Five-Floor :FiveFloor='FiveFloor'></Sea-Five-Floor> 
            </div>                  
            <div class="six-floor" style="display:none">
                <jiaoyuzhan :jiaoyu='jiaoyu'></jiaoyuzhan> 
            </div>      
            <div class="Heatdemo"  style="display:none">
                <div id="heatmap_demo" class="heatmapList"></div> 
            </div>                                     
      </div>
     </div>
  </div>
</template>
<style>

#heatmap_demo,#heatmap_a,#heatmap_one,#heatmap_two,#heatmap_three,#heatmap_four,#heatmap_five{
  width: 100%;
  height: 100%;
  position: absolute!important;
  top: 0;
}
.Heat .Heatbg {
  margin-top: 3rem;
  position: relative;
}
.heatmap-canvas {
  width: 100%!important;
  height: 100%!important;
}

.ground-floor,.three-floor,.Second-floor,.four-floor,.five-floo,.six-floo,.Heatdemo{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0
}
.zezao {
  background: #000;
  width: 100px;
  height: 30px;
  opacity: .8;
}
.ivu-input-icon-normal+.ivu-input {
  color:#000!important;
  text-align: center;
}
.zd {
  padding:2px 5px;
  border-radius: 5%;
  border:none;
  background: #4DC07C;
  font-weight: bold;
  color: #fff;
  font-size: .8rem;
  margin: 4px 5px;
}
</style>
<script>
  import api from '../api/API'
  import dateUtils from '../util/dateUtils'
  import loading from '../components/loading'
  import {mapGetters, mapActions} from 'vuex'
   import { setTimeout } from 'timers';
 	   var heatmap = require('heatmap');
  export default{
    data(){
      return {
        floor:'',
        oneFloor:'',        
        TwoFloor:'',
        ThreeFloor:'',
        FourFloor:'',
        FiveFloor:'',
        jiaoyu:'',
        active:0,
        show:true,
    　　items:'',
        arr:[],
        sid:'',
        SelectedId:'',
        position:0,//选择店铺得id位于数组的第几个
        selectedDay: dateUtils.dateInit.initDay(),
        value1: '00:00:00',
        timer:'',//定时器
        timerFive:'',
        store:'',//店铺ID
        map:'',//地图地址
      }
    },

    mounted: function () {
      this.Time();
      this.FiveTime();
    },
    methods: {
      Time(){
        var _this = this ;
        _this.timer = setInterval(function(){
            var time = _this.sstime();
           _this.value1 =time;  
        },1000)   
      },
      sstime(){
           var oDate = new Date(); //实例一个时间对象；        
           var a = oDate.getHours(); //获取系统时，
           var b = oDate.getMinutes(); //分
          if(a<10){
            a= '0'+a
          }           
          if(b<10){
            b= '0'+b
          }
           var c = oDate.getSeconds(); //秒
           if(c<10){
              c = "0"+c;
           }
           var time = a+':'+b+':'+c  ;
           return time ;
      },
      FiveTime(){
        var _this = this ;
        _this.timerFive = setInterval(function(){
               _this.getshop(_this.store,_this.selectedDay+' '+_this.sstime());
        },300000)
      }, 
      timerchange(val){
         var _this = this ;
         _this.getshop(_this.store,_this.selectedDay+' '+val);
         clearInterval(_this.timer);
         clearInterval(_this.timerFive);
      },
      nowTime(){
        clearInterval(this.timer);
        clearInterval(this.timerFive);
        this.Time();
        this.FiveTime();
      },
      demoHeat(){
              $(function(){    
                        var heatmapInstance = heatmap.create({
                            container: document.querySelector('#heatmap_demo'),
                        });
                        //构建一些随机数据点,网页切图价格这里替换成你的业务数据
                        var points = [];
                        var max = 0;
                        var len = 400;
                        var width =1000
                        var height = 650
                        while (len--) {
                            var val = Math.floor(Math.random()*100);
                            max = Math.max(max, val);
                            var point = {
                                x: Math.floor(Math.random()*500+Math.random()*500),  
                                y: Math.floor(Math.random()*350+Math.random()*300),  
                                value: val,
                            };
                            points.push(point);
                        } 
                        var data = {
                            max: max,
                          data: points};
                        //因为data是一组数据,web切图报价所以直接setData
                        setTimeout(() => {
                              heatmapInstance.setData(data); //数据绑定还可以使用
                        }, 1000);
                         if($('#heatmap_demo').children().length>1){
                                         $('#heatmap_demo').children().eq(0).remove();
                           }                       
                    })
      },
      Jurisdiction(val,val2,val3){
        this.items = val2;
        this.sid  = val;
        this.map = val3;
         if(val !=''){      
              this.show =true;
         }else{
              this.show =false;       
         }
      },
      selDateChange: function (selDay) {
        this.selectedDay = selDay;
        this.value1 = this.sstime();
        this.getshop(this.store,this.selectedDay+' '+this.sstime()); 
      }, 
      deviceChange: function (store) {
        var position =  this.sid.indexOf(store);
        this.store = store;
        this.value1 = this.sstime();
      
        this.getshop(store,this.selectedDay+' '+this.sstime()); 
        this.floor =this.map[position];      
      },
　　　selectSort(index) {
        this.active=index;
        var _this = this ;
        $(function(){
           _this.SelectedId = _this.sid[index];   
           _this.floor =_this.map[index];
         })  
　　　},
      getshop(sid,date){
        var  _this = this;       
        var yourtime = date.replace("-","/")
        var d1 = new Date(Date.parse(yourtime));   
        var d2 = new Date();  
        if(d1>d2){
         $('.heatmapList').children('canvas').remove();
         loading.showMessage('日期选择不正确，请重新选择');
        }else{
        api.NewData.getThermodynamicData(sid,date,function(resp){
            if(resp.status ==1){
              var data =resp.data;
              if(sid ==869){
                _this.demoHeat();
                 $('.Heatdemo').show();
                 $('.Heatdemo').siblings().hide();               
              }else if(sid == 935){
                 _this.oneFloor = data;
                 $('.ground-floor').show();
                 $('.ground-floor').siblings().hide();
               }else if(sid == 936){
                _this.TwoFloor = data;
                 $('.Second-floor').show();
                 $('.Second-floor').siblings().hide();                
               }else if(sid == 937){
                _this.ThreeFloor = data;   
                 $('.three-floor').show();
                 $('.three-floor').siblings().hide();                    
               }else if(sid == 938){
                _this.FourFloor = data;    
                 $('.four-floor').show();
                 $('.four-floor').siblings().hide();                       
               }else if(sid == 939){
                _this.FiveFloor = data;   
                 $('.five-floor').show();
                 $('.five-floor').siblings().hide();                  
               }else if(sid == 1511){
                _this.jiaoyu = data;   
                 $('.six-floor').show();
                 $('.six-floor').siblings().hide();                  
               }          
             }else if(resp.status !=1){
               $('.heatmapList').children('canvas').remove();
             }         
         })
        }            
      }  

  },
    components: {
      user: require('../components/user.vue'),
      HeatDate: require('../components/Date/HeatDate.vue'),
      breads: require('../components/headBreadcrumb.vue'),
      SeaOneFloor: require('../components/HeatMap/SeaOneFloor.vue'),
      SeaTwoFloor: require('../components/HeatMap/SeaTwoFloor.vue'),
      SeaThreeFloor: require('../components/HeatMap/SeaThreeFloor.vue'),
      SeaFourFloor: require('../components/HeatMap/SeaFourFloor.vue'),
      SeaFiveFloor: require('../components/HeatMap/SeaFiveFloor.vue'),
      jiaoyuzhan: require('../components/HeatMap/jiaoyuzhan.vue'),
    }
  }
</script>
