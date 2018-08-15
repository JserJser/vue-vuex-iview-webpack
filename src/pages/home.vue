<template>
        <div>
            <div class="layout-breadcrumb">
                <row type="flex" align="middle">
                <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-align:center">
                    <breads :items="[{name: '首页', to: ''}]"></breads>
                </i-col>

                <i-col  :xs="10" :sm="12" :md="12" :lg="14" >
                    <store-date-selector @seldevice="deviceChange" @seldate="selDateChange"></store-date-selector>
                </i-col>

                <i-col  :xs="8"  :sm="6" :md="6" :lg="6">
                    <user  style="float:right;margin-right:20px"></user>
                </i-col>
                </row>
            </div>   
    <div class="home-main layout-content">
            <Row :gutter="20">
               <Col :md="24" :lg="24">
                      <Col :xs="24" :sm="12" :md="12" :lg="4" :style="{marginBottom: '20px'}">
                          <infor-card
                              id-name="user_created_count"
                              :end-val="renliu"
                              iconType="android-person-add"
                              color="#2d8cf0"
                              intro-text="人流量"
                          ></infor-card>
                      </Col>
                      <Col :xs="24" :sm="12" :md="12" :lg="4" :style="{marginBottom: '20px'}">
                          <infor-card
                              id-name="visit_count"
                              :end-val="keliu"
                              iconType="ios-eye"
                              color="#64d572"
                              :iconSize="50"
                              intro-text="客流量"
                          ></infor-card>
                      </Col>
                      <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="user_created_count3"
                            :end-val="Nowcust"
                            iconType="person"
                            color="#06A7DD"
                            intro-text="当前店内内游客"></infor-card>
                     </Col>                          
                      <Col :xs="24" :sm="12" :md="12" :lg="4" :style="{marginBottom: '20px'}">
                          <infor-card
                              id-name="collection_count"
                              :end-val="newP"
                              iconType="upload"
                              color="#ffd572"
                              intro-text="新顾客"
                          ></infor-card>
                      </Col>
                      <Col :xs="24" :sm="12" :md="12" :lg="4" :style="{marginBottom: '20px'}">
                          <infor-card
                              id-name="transfer_count"
                              :end-val="old"
                              iconType="shuffle"
                              color="#f25e43"
                              intro-text="老顾客"
                          ></infor-card>
                      </Col>
                     <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="aaa"
                            :end-val="time"
                            iconType="clock"
                            color="#88D370"
                            intro-text="平均驻店时长(分钟)">
                            </infor-card>
                    </Col>                     
                   </Col>   
            </Row>
           <Row :gutter="20" class="f-top">
              <Col :md="24" :lg="8"   :style="{marginBottom: '20px'}">
                       <Card>
                            <p slot="title" class="card-title">
                                <Icon type="android-wifi"></Icon>
                                   实时进店人数统计
                            </p>
                           <div class="data-source-row">
                                <PeopleNub :PeopleNubData='PeopleNubData'></PeopleNub>
                            </div>
                     </Card> 
              </Col>    
                     <Col :md="24" :lg="8"  :style="{marginBottom: '20px'}">
                                    <Card>
                                        <p slot="title" class="card-title">
                                            <Icon type="android-map"></Icon>
                                            新老顾客统计
                                        </p>
                                        <div class="data-source-row">
                                            <NewOldPeople :NewOld='NewOld'></NewOldPeople>
                                        </div>
                                   </Card> 
                   </Col>          
                        <Col :md="24" :lg="8"  :style="{marginBottom: '20px'}">
                                    <Card>
                                        <p slot="title" class="card-title">
                                            <Icon type="android-map"></Icon>
                                            停留时长分布
                                        </p>
                                        <div class="data-source-row">
                                            <dataSourcePie :distribution='distribution'></dataSourcePie>
                                        </div>
                                    </Card> 
                        </Col>
              </Row>   
               <Row :gutter="20">
                    <Col :md="12" :lg="6"   :style="{marginBottom: '20px'}">
                           <Card  class="weater" style="height:150px">
                            <p slot="title" class="card-title">
                               <Icon type="ios-cloudy-outline" />
                                今天实时天气
                            </p>  
                                 <div  style="font-size:26px;font-weight: bold;width:60px;float: left;line-height: 3;margin-left:80px">{{city}}</div>
                                <img  style="float:left" :src="fool" />
                              <span>{{text}}</span> 
                              <span class="temperature">{{temperature}}℃</span>
                          </Card>   
                    </Col>    
                    <Col :md="12" :lg="6"   :style="{marginBottom: '20px'}">
                             <Card class="weaterList">
                              <p slot="title" class="card-title">
                               <Icon type="ios-cloudy" />
                               {{weatherTime[0]}}天气预报
                             </p>     
                                    <div style="height:100px;width:100%;display:flex">
                                            <div class="weaterAll">
                                                    <img  :src="code_day[0]" />
                                                    <span>白天:{{text_day[0]}}</span>
                                            </div>
                                            <div class="weaterAll">
                                                    <img   :src="code_night[0]" />
                                                    <span>晚上:{{text_night[0]}}</span>
                                            </div>  
                                            <div class="weaterAll">
                                                <img src='../assets/up.png'/>
                                                <span>最高温度:{{high[0]}}</span>
                                            </div>       
                                            <div class="weaterAll">
                                            <img src='../assets/down.png'/>
                                                <span>最低温度:{{low[0]}}</span>
                                            </div>            
                                    </div>             
                             </Card>      
                    </Col>     
                    <Col :md="12" :lg="6"   :style="{marginBottom: '20px'}">
                             <Card class="weaterList">
                              <p slot="title" class="card-title">
                               <Icon type="ios-cloudy" />
                               {{weatherTime[1]}}天气预报
                             </p>     
                              <div style="height:100px;width:100%;display:flex">
                               <div class="weaterAll">
                                    <img   :src="code_day[1]" />
                                    <span>白天:{{text_day[1]}}</span>
                              </div>
                              <div class="weaterAll">
                                    <img   :src="code_night[1]" />
                                    <span>晚上:{{text_night[1]}}</span>
                              </div>  
                               <div class="weaterAll">
                                <img src='../assets/up.png'/>
                                  <span>最高温度:{{high[1]}}</span>
                              </div>       
                             <div class="weaterAll">
                              <img src='../assets/down.png'/>
                                  <span>最低温度:{{low[1]}}</span>
                            </div>     
                              </div>                             
                             </Card>      
                    </Col>     
                    <Col :md="12" :lg="6"   :style="{marginBottom: '20px'}">
                             <Card class="weaterList">
                              <p slot="title" class="card-title">
                               <Icon type="ios-cloudy" />
                               {{weatherTime[2]}}天气预报
                             </p>    
                              <div style="height:100px;width:100%;display:flex">
                               <div class="weaterAll">
                                    <img   :src="code_day[2]" />
                                    <span>白天:{{text_day[2]}}</span>
                              </div>
                              <div class="weaterAll">
                                    <img   :src="code_night[2]" />
                                    <span>晚上:{{text_night[2]}}</span>
                              </div>  
                               <div class="weaterAll">
                                <img src='../assets/up.png'/>
                                  <span>最高温度:{{high[2]}}</span>
                              </div>       
                             <div class="weaterAll">
                              <img src='../assets/down.png'/>
                                  <span>最低温度:{{low[2]}}</span>
                            </div>        
                            </div>                           
                             </Card>      
                    </Col>                                                                
              </Row>   
               <Row :gutter="20"  class="f-top">
                      <Col :md="24" :lg="12"   :style="{marginBottom: '20px'}">
                        <Card>
                                <p slot="title" class="card-title">
                                <Icon type="ios-cloudy" />
                                        客流量周趋势
                                </p>   
                                <div class="data-source-row">
                                    <historyWeek :WeekData="WeekData"></historyWeek>
                                </div>                         
                        </Card>
                      </Col>
                       <Col :md="24" :lg="12"   :style="{marginBottom: '20px'}">
                        <Card>
                                <p slot="title" class="card-title">
                                <Icon type="ios-cloudy" />
                                        xxxx
                                </p>   
                                <div class="data-source-row">
                                    <Carousel ></Carousel>
                                </div>                         
                        </Card>
                      </Col>                     
               </Row>           
                             
            </div>                     
        </div>
</template>
<style>
.data-source-row {
  height: 230px;
}
.f-top .ivu-card-body {
  padding: 0 16px !important;
}
.weater span{
    display: block;
    float: left;
    font-size: 16px;
    font-weight: 600;
    line-height: 3;
    margin: 0 5px;
    font-weight: bold;
    font-size:26px    
}

.weaterList span {
    text-align:center;
    display:block;
    font-weight:bold;
}
.weater .ivu-card-body,.weaterList .ivu-card-body {
    padding:0px;
}
.weaterAll{
    float:left;
    margin:0 5px;
    text-align:center;
    flex: 1
}
.weaterList {
    line-height:1;
    height:150px
}
.weaterAll img {
    width: 60px;
    height: 60px;
}

</style>
<script>
import api from '../api/API';
import dateUtils from '../util/dateUtils';
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';
import loading from '../components/loading';
var initialDay = dateUtils.dateInit.initDay();
export default {
  data() {
    return {
      presentDevice: '',
      selday: initialDay,
      PeopleNubData: '',
      NewOld: '',
      distribution: '',
      fool:'',
      temperature:'',
      text:'',
      city:'',
      Nowcust:'',//现在人数的数值
      renliu:'',
      keliu:'',
      diannei:'',
      newP:'',
      old:'',
      time:'',
      weatherTime:[],
      text_day:[],//白天天气
      text_night:[],//晚上天气
      high:[],//最高温度
      low:[],//最低温度
      wind_direction:[],//风向
      wind_speed:[],//风速
      wind_scale:[],//风力等级
      code_day:[],//白天天气的数值
      code_night:[]//晚上天气的数值
    };
  },
  mounted() {
        this.getweater();
  },
  methods: {
    deviceChange(val) {
      this.presentDevice = val;
      this.init();
    },
    selDateChange(val) {
      this.selday = val;
      this.init();
    },
    init() {
      var _this = this;
      api.NewDataList.getCustomerHourData(
        this.presentDevice,
        this.selday,
        'keliu,renliu,new_customes,old_customes,into_store',
        function(resp) {
          if (resp.status == 1) {
            _this.PeopleNubData = resp;
            _this.NewOld = resp;
          } else {
            loading.show(resp.status, resp.statusMsg);
          }
        }
      );
      api.NewDataList.getCountTimes(this.presentDevice, this.selday, function(
        resp
      ) {
        if (resp.status == 1) {
          _this.distribution = resp.data;
        } else {
          loading.show(resp.status, resp.statusMsg);
        }
      });
        api.realTimeAndhistory.historyWeek(this.presentDevice, this.selday, function (resp) {
          if (resp.status == 1) {
            _this.WeekData=resp
          } else {
            loading.show(resp.status, resp.statusMsg);
          }
        })   
        api.NewData.getCustomerDayData(this.presentDevice,this.selday,this.selday,'renliu,keliu,zhudian,tiaochu,new_customes,old_customes,avg_time','day',function(resp){   
                if (resp.status == 1) {

            _this.renliu=resp.data.data.renliu[resp.data.data.index[0]];
            _this.keliu =resp.data.data.keliu[resp.data.data.index[0]];
            _this.newP = resp.data.data.new_customes[resp.data.data.index[0]];
            _this.old = resp.data.data.old_customes[resp.data.data.index[0]];    
            _this.time = resp.data.data.avg_time[resp.data.data.index[0]];                    
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
    getweater(){
                var _this =this ;
                api.getweather.weather(function(res){
                        var data = res.now.results[0];
                        var data1 = res.preview.results[0].daily;
                         _this.code = data.now.code;
                         _this.temperature = data.now.temperature;
                        _this.text = data.now.text;  
                        _this.city = data.location.name;   
                        _this.fool = 'weather/'+_this.code+'.png';
                            for(let i in data1){
                                _this.weatherTime.push(data1[i].date);
                                _this.text_day.push(data1[i].text_day);
                                _this.text_night.push(data1[i].text_night);
                                _this.high.push(data1[i].high);
                                _this.low.push(data1[i].low);
                                _this.code_day.push('weather/'+data1[i].code_day+'.png');
                                _this.code_night.push('weather/'+data1[i].code_night+'.png');
                            }         
                })        
    }
  },
  components: {
    user: require('../components/user.vue'),
    storeDateSelector: require('../components/Date/dateAndStoreBanner.vue'),
    breads: require('../components/headBreadcrumb.vue'),
    customDetail: require('../components/customDetail.vue'),
    inforCard: require('../components/inforCard.vue'),
    PeopleNub: require('../components/home/PeopleNub.vue'),
    dataSourcePie: require('../components/home/dataSourcePie.vue'),
    NewOldPeople: require('../components/home/NewOldPeople.vue'),
    historyWeek: require('../components/home/historyWeek.vue'),
    Carousel: require('../components/home/Carousel.vue'),
  },
};
</script>