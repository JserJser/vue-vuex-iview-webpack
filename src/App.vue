<style scoped>

  .layout-logo-left {
    padding: 8px;
    text-align: center;
    position: fixed;
    z-index: 11111;
  }

  .layout-logo-left img{
    /* height: 44px; */
    /* width: 100%; */
  }

  .ivu-menu-light {
    background: #f5f7f9;
    height: 100%;
    
  }
.ivu-menu-item {
color: #5B5B5B;
}
  .fixmenu {
    position: fixed;
    left: 0;
    top: 0;
    width: 160px;
    height: 100%;
    z-index: 3333;
    transition: width .3s;
    /* overflow: auto; */
  }
  .main-content {
    width: 100%;
    padding-left: 160px;
    min-width: 1000px;
  }
	.triangle {
		position:fixed;
		top: 7px;
		left:160px;
    z-index: 22222;
    transition: left .3s;
	}

</style>
<template>
  <div style="position:relative;width:100%;height:100%">
        <div class="layout-logo-left">
            <img class="logo" v-show="Arrow" src='./assets/logo_03.png'>
            <img class="logo-list" v-show="!Arrow" src='./assets/logo_02.png'>
      </div>   
      <div class="fixmenu" :class="{overflowauto:Arrow}"  :style="{width: !Arrow?'60px':'190px'}">
        <Menu theme="light" width="auto" id="gd" :open-names="['11']" :active-name="namekey" @on-select="select">
          <div style="width:100%;height:61px;"></div>
         <div v-show="Arrow" >
            <Menu-group title="数据统计">
                <router-link  to="/home" >
                  <Menu-item name='9' class="home">
                    <Icon type="stats-bars"></Icon>
                    首页
                  </Menu-item>
                </router-link>              
                <router-link  to="/index/Daykeliu" >
                  <Menu-item name='1' class="Daykeliu">
                    <Icon type="stats-bars"></Icon>
                    每日客流
                  </Menu-item>
                </router-link>

                <router-link  to="/index/StoreDayCharts">
                  <Menu-item name='3' class='StoreDayCharts'>
                    <Icon type="android-download"></Icon>
                    数据分析
                  </Menu-item>
                </router-link>        
                   
                <router-link to='/index/DayKeliuList'>
                  <Menu-item name='2' class='DayKeliuList'>
                    <Icon type="person-stalker"></Icon>
                    顾客数据
                  </Menu-item>
                </router-link>

                <Submenu name='11'>
                      <template slot="title">
                          <Icon type="clipboard"></Icon>
                        用户画像
                      </template>
                      <router-link to='/portrait/Score'>
                      <MenuItem name="11-1" class='Score'>标准画像</MenuItem>
                      </router-link>

                        <router-link to='/portrait/Appinfo'>
                      <MenuItem name="11-2" class='Appinfo'>媒体触达</MenuItem>
                      </router-link>

                      <router-link to='/portrait/ComeGo'>
                      <MenuItem name="11-3" class='ComeGo'>来源去向</MenuItem>
                      </router-link>

                      <router-link to='/portrait/Live'>
                      <MenuItem name="11-4" class='Live'>常驻地区</MenuItem>
                      </router-link>

                      <router-link to='/portrait/Area'>
                      <MenuItem name="11-5" class='Area'>全国客流来源去向</MenuItem>
                      </router-link>
                </Submenu >

                  <router-link to='/HeatChart'>
                    <Menu-item name='4'  class='HeatChart'>
                      <Icon type="fireball" ></Icon>
                      热力图
                    </Menu-item>
                  </router-link>
<!--             <router-link to='/DataExports'>
              <Menu-item name='3' >
                <Icon type="android-download"></Icon>
                数据导出
              </Menu-item>
            </router-link>


            <router-link to='/DataInports'>
              <Menu-item name='4'>
                <Icon type="android-upload"></Icon>
                消费数据
              </Menu-item>
            </router-link> -->     
                     </Menu-group>

                    <Menu-group title="店铺管理">

                      <router-link to='/StoresManage'>
                        <Menu-item name='5'  class='StoresManage'>
                          <Icon type="ios-cart"></Icon>
                          店铺管理
                        </Menu-item>
                      </router-link>

                      <router-link to='/BillsManage'>
                        <Menu-item name='6' class='BillsManage'>
                          <Icon type="cash"></Icon>
                          查看订单
                        </Menu-item>
                      </router-link>

                    </Menu-group>

                <Menu-group  title="帮助">

                  <router-link to='/Helps/WebGuide'>
                    <Menu-item name='7' class='WebGuide'>
                      <Icon type="heart"></Icon>
                      使用帮助
                    </Menu-item>
                  </router-link>

                  <router-link to='/Contacts'>
                  <Menu-item name='8' class='Contacts'>
                    <Icon type="heart"></Icon>
                    联系我们
                  </Menu-item>
                  </router-link>
                </Menu-group>
          </div>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
          <div  style="text-align:center;" v-show="!Arrow">
            <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="stats-bars" :size="20"></Icon> 
                  </Button>
                  <DropdownMenu slot="list">
                    <router-link  to="/home" >
                        <DropdownItem name='9'  class="home">
                        <Icon type="stats-bars"></Icon>
                          <span style="padding-left:10px;">
                                首页
                          </span> 
                        </DropdownItem>
                    </router-link> 
                  </DropdownMenu>                         
            </Dropdown>   


            <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="stats-bars" :size="20"></Icon> 
                  </Button>
                  <DropdownMenu slot="list">
                    <router-link  to="/index/Daykeliu" >
                        <DropdownItem name='1'  class="Daykeliu">
                        <Icon type="stats-bars"></Icon>
                          <span style="padding-left:10px;">
                                每日客流
                          </span> 
                        </DropdownItem>
                    </router-link> 
                  </DropdownMenu>                         
            </Dropdown>   

             <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="android-download" :size="20"></Icon> 
                  </Button>
                  <DropdownMenu slot="list">
                     <router-link  to="/index/StoreDayCharts">
                        <DropdownItem  name='3' class="StoreDayCharts">
                        <Icon type="android-download"></Icon>
                          <span style="padding-left:10px;">                   
                                数据分析
                          </span>         
                          </DropdownItem>
                       </router-link> 
                  </DropdownMenu>                         
             </Dropdown>        

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="person-stalker" :size="20"></Icon> 
                  </Button>
                  <DropdownMenu slot="list">
                        <router-link  to="/index/DayKeliuList">
                          <DropdownItem  name='2'  class="DayKeliuList">
                          <Icon type="person-stalker"></Icon>
                            <span style="padding-left:10px;">                    
                                  顾客数据   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown>   

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="clipboard" :size="20"></Icon>
                  </Button>
                  <DropdownMenu slot="list" >
                     <router-link to='/portrait/Score'>
                              <DropdownItem name='11-1' class="Score">
                                  <Icon type="clipboard"></Icon>
                                    <span style="padding-left:10px;">
                                          标准画像
                                    </span>                         
                            </DropdownItem>
                        </router-link> 
                        <router-link to='/portrait/Appinfo'>
                            <DropdownItem name='11-2' class="Appinfo">
                                  <Icon type="clipboard"></Icon>
                                    <span style="padding-left:10px;">
                                          媒体触达      
                                    </span>             
                            </DropdownItem>   
                        </router-link>   
                        <router-link to='/portrait/ComeGo'>                          
                          <DropdownItem name='11-3' class="ComeGo">
                                <Icon type="clipboard"></Icon>                       
                                  <span style="padding-left:10px;">
                                        来源去向
                                  </span> 
                          </DropdownItem> 
                       </router-link>     
                        <router-link to='/portrait/Live'>    
                          <DropdownItem name='11-4' class="Live">
                                  <Icon type="clipboard"></Icon>
                                    <span style="padding-left:10px;">
                                          常驻地区
                                    </span> 
                            </DropdownItem>   
                        </router-link>  
                        <router-link to='/portrait/Area'>
                            <DropdownItem name='11-5' class="Area">  
                                  <Icon type="clipboard"></Icon>
                                    <span style="padding-left:10px;">                       
                                          全国客流来源去向
                                    </span> 
                            </DropdownItem>   
                       </router-link>                                                                                  
                  </DropdownMenu>                                       
             </Dropdown>    

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="fireball" :size="20"></Icon> 
                  </Button>
                       <DropdownMenu slot="list">
                          <router-link to='/HeatChart'>
                          <DropdownItem  name='4'  class="HeatChart">
                          <Icon type="fireball" ></Icon>
                            <span style="padding-left:10px;">                    
                                  热力图   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown>          

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="ios-cart" :size="20"></Icon> 
                  </Button>
                       <DropdownMenu slot="list">
                          <router-link to='/StoresManage'>
                          <DropdownItem  name='5' class="StoresManage">
                          <Icon type="ios-cart"></Icon>
                            <span style="padding-left:10px;">                    
                                  店铺管理   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown>    

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="cash" :size="20"></Icon> 
                  </Button>
                       <DropdownMenu slot="list">
                          <router-link to='/BillsManage'>
                          <DropdownItem  name='6' class="BillsManage">
                          <Icon type="cash"></Icon>
                            <span style="padding-left:10px;">                    
                                  查看订单   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown> 

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="heart" :size="20"></Icon> 
                  </Button>
                       <DropdownMenu slot="list">
                          <router-link to='/Helps/WebGuide'>
                          <DropdownItem  name='7' class="WebGuide">
                          <Icon type="heart"></Icon>
                            <span style="padding-left:10px;">                    
                                  使用帮助   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown>   

              <Dropdown  placement="right-start" @on-click="getNameKey">
                  <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                       <Icon type="heart" :size="20"></Icon> 
                  </Button>
                       <DropdownMenu slot="list">
                          <router-link to='/Contacts'>
                          <DropdownItem  name='8' class="Contacts">
                          <Icon type="heart"></Icon>
                            <span style="padding-left:10px;">                    
                                  联系我们   
                            </span> 
                          </DropdownItem>
                      </router-link>
                  </DropdownMenu>                         
             </Dropdown>                

          </div>
        </Menu>
      </div>
              <div :class="main-content" :style="{paddingLeft: !Arrow?'60px':'190px'}">
                <keep-alive>
                  <router-view ></router-view>
                </keep-alive>
              </div>
                  <div class="navicon-con triangle"  :style="{left:!this.Arrow?'60px':'190px'}">
                    <Button :style="{transform: 'rotateZ(' + (!this.Arrow ? '-90' : '0') + 'deg)'}" type="text" @click="Telescopic">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>   
  </div>
</template>
<script>
  import 'style/style.css'
  import { setTimeout } from 'timers';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data(){
        return{
          Arrow:true,
          namekey:'',
        }
    },
    mounted(){
       var _this = this ;
       var name = window.location.hash.split('/').pop();
       _this.$Notice.destroy();
       _this.$Modal.remove();
       sessionStorage.setItem('Arrow',true);
            var title =  document.title;
            document.title = title;
          $(function(){ 
            $('.ivu-menu-item-group ul a li').removeClass('ivu-menu-item-active');
            $('.'+name+'').addClass('ivu-menu-item-active');
            $('.fixmenu ul a li').click(function(){
                _this.$Notice.destroy();
                var title = $(this).text();
                document.title = '身边数据 '+title;
                $('.ivu-menu-item-group ul a li').removeClass('ivu-menu-item-active');
                $(this).parent().siblings().children().removeClass('ivu-menu-item-active');
            })
          })
    },
    methods:{
      getNameKey(val){
        this.namekey = val;
      },
      select(val){
       
      },
        Telescopic(){
             this.Arrow = !this.Arrow;
             sessionStorage.setItem('Arrow',this.Arrow);
             if(this.Arrow){
                  $('.Heatbg').css('margin-top','100px');
                  $('.layout-breadcrumb').css('padding-left','170px');
             }else{
                   $('.Heatbg').css('margin-top','0');
                  $('.layout-breadcrumb').css('padding-left','70px');
             }                        
        }
    },

  }
</script>
