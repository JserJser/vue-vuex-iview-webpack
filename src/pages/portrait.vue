<template>
<div>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '数据', to: ''}, {name: '用户画像', to: ''}]"></breads>
        </i-col>
        <i-col :xs="12" :sm="12" :md="12" :lg="14">
          <portrait-Date @seldevice="deviceChange" @seldate="selDateChange" v-on:T-portrait ='Jurisdiction'></portrait-Date>
        </i-col>
        <i-col :xs="6"  :sm="6" :md="6" :lg="6">
          <user  style="float:right;margin-right:20px"></user>
        </i-col>
      </row>
      <i-col >
        
      </i-col>
    </div>
  </div>  
  <div v-show="true">
      <i-col span="24" class="cheack" v-show="cheackblog">
            <div class="CheackList">
                 <i-col span="23" class="CheackChoice">
                      <div class="Cheacktype">
                        <div>性别</div>
                        <CheckboxGroup v-model="Gender" class="CheckGender">
                            <Checkbox name="wp" label="0">男</Checkbox>
                            <Checkbox name="wp" label="1">女</Checkbox>
                        </CheckboxGroup>
                      </div>
                      <div class="Cheacktype">
                        <div>年龄</div>
                        <CheckboxGroup v-model="Agebin"  class="CheckAgebin">
                            <Checkbox name="wp" label="5">45岁以上</Checkbox>
                            <Checkbox name="wp" label="6">35-44岁</Checkbox>
                            <Checkbox name="wp" label="7">25-34岁</Checkbox>
                            <Checkbox name="wp" label="8">18-24岁</Checkbox>
                            <Checkbox name="wp" label="9">18岁以下</Checkbox>
                        </CheckboxGroup>
                      </div> 
                      <div class="Cheacktype">
                        <div>学历</div>
                        <CheckboxGroup v-model="Edu"  class="CheckEdu">
                            <Checkbox name="wp" label="3">高中以下</Checkbox>
                            <Checkbox name="wp" label="4">本科及专科</Checkbox>
                            <Checkbox name="wp" label="5">硕士及以上</Checkbox>
                        </CheckboxGroup>
                      </div>  
                       <div class="Cheacktype">
                        <div>收入</div>
                        <CheckboxGroup  v-model="Income"  class="CheckIncome">
                            <Checkbox name="wp" label="3">小于3K</Checkbox>
                            <Checkbox name="wp" label="4">3-5k</Checkbox>
                            <Checkbox name="wp" label="5">5-10k</Checkbox>
                            <Checkbox name="wp" label="6">10-20k</Checkbox>
                            <Checkbox name="wp" label="7">20k以上</Checkbox>                            
                        </CheckboxGroup>
                      </div>    
                       <div class="Cheacktype">
                        <div>小孩</div>
                        <CheckboxGroup  v-model="Kids"   class="CheckKids">
                            <Checkbox name="wp" label="2">无小孩</Checkbox>
                            <Checkbox name="wp" label="3">0-3岁(婴幼儿)</Checkbox>
                            <Checkbox name="wp" label="4">4-6岁(学龄前)</Checkbox>
                            <Checkbox name="wp" label="5">7-12岁(小学生)</Checkbox>
                            <Checkbox name="wp" label="6">13-17岁(初、高中生)</Checkbox>                            
                        </CheckboxGroup>
                      </div>                                                                                      
                 </i-col>
                 <i-col span="1" class="CheackConfirm">
                      <div @click="Enter">确定</div>
                      <div @click="Allcheck">全选</div>
                      <div @click="Reset">重置</div>
                      <div @click="cheackblog=false">收起</div>
                 </i-col>                 
            </div>
      </i-col>
      <i-col span="24" class="CloseCheack" v-show="!cheackblog">
          <div>
          <i-col span="23" class="zkkb">
                <div></div>
          </i-col>
          <i-col span="1" class="zkCheack">
               <div @click="cheackblog=true">展开</div>
          </i-col>
          </div> 
      </i-col>
</div>      
      <i-col span="21"  style="width:100%;margin-top:50px;background:#fff">
          <transition name="fade" mode="out-in" >
            <router-view :ListData='ListData' :option='option'></router-view>
          </transition>        
      <!-- <div class="ivu-col ivu-col-span-24 Heatbg demo" v-show='!show' >
          <h2>用户画像demo页面</h2>
          <h3>如想开通，请联系我们</h3>
      </div>         -->
    </i-col>
</div>
</template>
<style type="text/css">
  .ivu-menu-light {
    background: #f5f7f9!important;
  }
  .portraitActive{
    background: #4DC07C!important;
    color: #fff!important;
  }
  .cheack {
    width: 100%;
    height: 140px;
    position: relative;
    top: 53px;
    padding: 0 10px;
    background: #fff;
  }
  .CheackList {
    width: 100%;
    height: 100%;
  }
  .CheackConfirm ,.CheackChoice {
      height: 100%;
  }
  .CheackChoice {
    background: rgb(245, 247, 249);
    padding:  10px 20px;
  }
  .CheackConfirm  div{
    text-align:center;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
  }
  .CheackConfirm  div:nth-child(1){
    background: #008c8c;
    height:50px;
    line-height: 50px;
  }
  .CheackConfirm  div:nth-child(2){
    background: #4DC07C;
     height: 30px;
     line-height: 30px;
  }    
  .CheackConfirm  div:nth-child(3){
    background: #999;
     height: 30px;
     line-height: 30px;
  }  
  .CheackConfirm  div:nth-child(4){
    background: #ccc;
     height: 30px;
     line-height: 30px;
  }    
  .BMap_cpyCtrl {  
      display: none;  
  }  
  .anchorBL {  
      display: none;  
  }  
 .cheack .CheackList .Cheacktype {
    display: inline-block;padding-right: 40px;padding-top:15px;
  }  
  .ivu-checkbox-group-item {
    color: #999
  }
  .CloseCheack {
    width: 100%;
    height: 30px;
    position: relative;
    top: 53px;     
  }
  .CloseCheack >div {
    height: 100%;
    background: rgb(245, 247, 249);    
    margin: 0 10px;    
  }
  .zkkb {
    width: 100%;
    height: 100%;
  }
  .zkCheack {
    width: 100%;
    height: 100%;
    background: #CCC;
    line-height: 30px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    z-index:1111;
  }
</style>
<script type="text/javascript">
	   import dateUtils from '../util/dateUtils'
  	   export default {
  	   		data(){
  	   			return{
  	   	   	  	 selectedDay: dateUtils.dateInit.initDay(),
                 key:'',
                 ListData:[],
                 start_date:'',
                 start_end:'',
                 flog:false, 
                 show:true,
                 flog_T:0,
                 cheackblog:true,
                 cheackall:false,
                 gender:'',
                 agebin:'',
                 edu:'',
                 kids:'',
                 income:'',
                 Gender:[],
                 Agebin:[],
                 Edu:[],
                 Kids:[],
                 Income:[],       
                 option:[],       
  	   			}
           },
           mounted(){   

           },
  	   		methods:{ 
             Allcheck(){       
                  this.Gender = [0,1];
                  this.Agebin=[5,6,7,8,9];
                  this.Edu=[3,4,5];
                  this.Kids=[3,4,5,6,7];
                  this.Income=[2,3,4,5,6];                 
                  $(function(){
                      $('.CheackChoice .Cheacktype .ivu-checkbox-group').each(function(){
                           $(this).children().addClass('ivu-checkbox-wrapper-checked');
                           $(this).children().children().addClass('ivu-checkbox-checked');
                      })            
                  })
             },
             Reset(){                 
                  this.Gender = [];  
                  this.Agebin=[];
                  this.Edu=[];
                  this.Kids=[];
                  this.Income=[];                   
                  var _this = this ;
                  $(function(){ 
                      $('.CheackChoice .Cheacktype .ivu-checkbox-group').each(function(){
                           $(this).children().removeClass('ivu-checkbox-wrapper-checked');
                           $(this).children().children().removeClass('ivu-checkbox-checked');
                      })    
                      var data = $('.CheackChoice .ivu-checkbox-wrapper .ivu-checkbox').children('input');
                 })
             },
              Enter(){//确定筛选
                var _this = this ;
                $(function(){
                    _this.gender =  _this.CheakData('CheckGender');
                    _this.agebin =  _this.CheakData('CheckAgebin');   
                    _this.edu    =  _this.CheakData('CheckEdu');
                    _this.income   =  _this.CheakData('CheckIncome');    
                    _this.kids =  _this.CheakData('CheckKids');    
                    _this.option=[];
                    _this.option.push(_this.gender,_this.agebin,_this.edu,_this.kids,_this.income);                              
                })
             },
             CheakData(id){
                    var element = $('.'+id+' .ivu-checkbox-wrapper .ivu-checkbox ').children('input');
                    var Data ='';
                    for(var i =0 ;i<element.length;i++){
                        if(element[i].checked){  
                              Data +=$(element[i]).val()+',';       
                          }
                    }    
                    return Data
             },
             Jurisdiction(val){
                  if(val == 1){      
                        this.show =true;
                  }else{
                        this.show = false;   
                  }
             },
			     selDateChange: function (selDay){
              this.gender =  this.CheakData('CheckGender');
              this.agebin =  this.CheakData('CheckAgebin');   
              this.edu    =  this.CheakData('CheckEdu');
              this.kids   =  this.CheakData('CheckIncome');    
              this.income =  this.CheakData('CheckKids');                        
              this.selectedDay = selDay;         
              this.start_date = selDay[0];
              this.start_end = selDay[1]
              var arr = [selDay[0],selDay[1]];    
              sessionStorage.setItem('portraitDate',JSON.stringify(arr));
              if(this.flog != false){
              this.ListData=[];
              this.Reset();
              this.option=[];
              this.option.push(this.gender,this.agebin,this.edu,this.kids,this.income);     
              this.ListData.push(this.key,selDay[0],selDay[1]) ;            
              }
			      },
		   	  deviceChange: function (store){
 
                this.ListData=[];
                this.key = store;
                var start_date = this.selectedDay[0];
                var start_end = this.selectedDay[1]; 
                this.ListData.push(this.key,start_date,start_end);
                this.flog = true; 
                this.Reset();
                    this.gender =  this.CheakData('CheckGender');
                    this.agebin =  this.CheakData('CheckAgebin');   
                    this.edu    =  this.CheakData('CheckEdu');
                    this.kids   =  this.CheakData('CheckIncome');    
                    this.income =  this.CheakData('CheckKids');  
                    this.option=[];
                    this.option.push(this.gender,this.agebin,this.edu,this.kids,this.income);                   
			      },       
  	   		},
  	   		components:{
		        user: require('../components/user.vue'),
		        portraitDate: require('../components/Date/portraitDate.vue'),
            breads: require('../components/headBreadcrumb.vue'),	  
            Score: require('./portrait/Score.vue'),	  			
            Appinfo: require('./portrait/Appinfo.vue'),
            ComeGo:require('./portrait/ComeGo.vue'),
            Live:require('./portrait/Live.vue'),
            TArea:require('./portrait/Area.vue'),
  	   		}

  	   }
</script>