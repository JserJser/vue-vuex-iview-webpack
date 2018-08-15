<template>
    <div style="float:left;"class="full-screen-btn-con">
       <Dropdown trigger="click" @on-click="goshop">          
                <Badge :dot="flog">
                  <Icon type="ios-bell" :size="23"></Icon>
                </Badge>
              <Dropdown-menu slot="list">
                     <Dropdown-item>总设备数：{{all}}</Dropdown-item>
                     <Dropdown-item>总在线数：{{zaixian}}</Dropdown-item>
                     <Dropdown-item>总掉线数：{{down}}</Dropdown-item>  
                     <Dropdown-item>总到期数：{{daoqi}}</Dropdown-item>
              </Dropdown-menu>
   <!-- 添加他人店铺-->             
      </Dropdown>   
    </div>
</template>
<script>
import api from '../../api/API'
      export default{
                data(){
                    return{
                        all:'',
                        down:'',
                        zaixian:'',
                        daoqi:'',
                        flog:false,     
                    }
                },
                mounted(){
                    this.init();
                },
                methods:{
                        init(){
                            var _this = this ;
                            api.devices.getShopDeviceInfo('',function(resp){
                                    if(resp.status==1){
                                        _this.all = resp.data.total.total;
                                        _this.down = resp.data.total.offLine;
                                        _this.zaixian =resp.data.total.onLine;
                                        _this.daoqi = resp.data.total.expired;
                                        if(_this.down>0 || _this.daoqi>0){
                                            _this.flog = true
                                        }
                                    }
                            })
                        },
                        goshop(){

                        }
                }
      }
</script>