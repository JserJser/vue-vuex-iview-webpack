<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4"   style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '管理', to: ''}, {name: '店铺管理', to: ''}]"></breads>
        </i-col>
          <i-col :xs="12" :sm="12" :md="12" :lg="14">
            <div class='devicebutton'>
              <Button type="success" @click.native='sbzx'>设备在线情况</Button>
              <Button  @click.native='sbgl'>设备管理设置</Button>
            </div>
          <div v-show='!config'>
            <div class="S-M-refresh">
               <Button icon='refresh' @click="refresh">刷新</Button>
            </div> 
                      
            <i-select class="ShopOrDate" @on-change="onChange" v-model="selStore" placeholder='请选择店铺'>
              <i-option v-for="item in arrSelect" :value="item.id">{{ item.name }}</i-option>
            </i-select>
          </div>     
          <div class="deviceSearch" v-show='config'>
              <Input  class="ShopOrDate" v-model="searchDp" @on-change="handleSearch" icon="search" placeholder="请输入店铺名搜索店铺"  style="margin:0 20px"/>
              <Input  class="ShopOrDate" v-model="searchId"   icon="search" placeholder="请输入序列号搜索设备" />
          </div>       
          </i-col>
        <i-col :xs="6"  :sm="6" :md="6" :lg="6">
             <!-- <div style="text-align:left;float: left;line-height:2">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                添加
                <Icon type="arrow-down-b"></Icon>
              </a>
              <Dropdown-menu slot="list">
                <Dropdown-item @click.native="addMyshop">我的店铺</Dropdown-item>
                <Dropdown-item @click.native="addOtherShopModal=true"> 其他人的店铺</Dropdown-item>
                <Dropdown-item @click.native="addDemoShop"> 演示店铺</Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
          </div>        -->
          <user  style="float:right;margin-right:20px"></user>
        </i-col>
      </row>
    </div>
    <div class="layout-content" v-show='config'>
      <row>
        <i-col span='12'>
          <i-table class='deivcetable' height="720"
                   highlight-row
                   stripe
                   @on-current-change='selectStore'
                   :columns="shopcolumns"
                   :data="data1"      
                 >
          </i-table>
        </i-col>
        <i-col span='12'>
          <div v-show="selectedStore.roleType == 1||selectedStore.roleType == 2">
            <store-detail v-on:deleteSelf="deleteStore"  :store='selectedStore' :searchData='searchId' :searchData1='searchDp'></store-detail>
          </div>
          <div style="text-align: center;margin-top: 140px" v-show="selectedStore.roleType != 1">
            <p> {{selectedStore.roleType ? '您没有管理该店铺的权限' : "请选择左侧店铺，显示店铺详情"}}</p>
          </div>

        </i-col>

      </row>
    </div>

    <!--添加我的店铺-->

    <!-- 添加他人店铺-->

  <div class="device"  v-show='!config'>
      <ul class="bj" v-show="!deviceimg">
          <li class="btna" v-for="item in itemdata" 
                           :style="'left:'+item.axis_x+'%;top:'+item.axis_y+'%'"
                           :type="item.deviceStatus"  
                           :data-clipboard-text="'设备名称:'+item.name+';序列号:'+item.sn+';状态:'+(item.deviceStatus==1?'在线':'离线')+''"
            >
            <div class="test" >
                <span class="bot"></span>
                <span class="top"></span>
                设备名称:{{item.name}}<br />
                序列号：{{item.sn}}<br />
                到期日期:{{item.expiredate}}<br />
                状态:<div class="bjzt"></div><br />
            </div>             
          </li>
      </ul>    
    <!-- <div class="device-no-img" v-show="deviceimg">
      <Icon type="images" ></Icon>
      <div>您暂未提供店铺图片</div>
    </div>     -->
     <img :src="equipment">    
  </div>
<!-- 地图展示设备图 -->
  </div>
</template>
<style>
.ivu-notice {
    z-index: 11111;
}
.devicebutton {
  float:left
}
.S-M-refresh {
  float: left;
  margin:0 20px
}
.zuobiao {
  width: 100%;
  height: 100%;
}
  .inner {
    position: fixed;
    top: 40px;
  }
  .device {
    position: relative;
  }
  .device img {
      /* height: 80rem; */
      width: 100%;
  }

  .device .bj li {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
	/* IE10、Firefox and Opera，IE9以及更早的版本不支持 */
	animation-name:breath;
	/* 动画名称 */
	animation-duration:3s;
	/* 动画时长3秒 */
	animation-timing-function:ease-in-out;
	/* 动画速度曲线：以低速开始和结束 */
	animation-iteration-count:infinite;
	/* 播放次数：无限 */
	/* Safari and Chrome */
	-webkit-animation-name:breath;
	/* 动画名称 */
	-webkit-animation-duration:3s;
	/* 动画时长3秒 */
	-webkit-animation-timing-function:ease-in-out;
	/* 动画速度曲线：以低速开始和结束 */
	-webkit-animation-iteration-count:infinite;
	/* 播放次数：无限 */
	/* opacity:0.1; */
    list-style: none;
  }
 .device .bj li .test{z-index:1111;width:150px; border:5px solid #beceeb; position:relative;background: #beceeb;top: -100px;left: -90px;display: none;opacity:1;}
.test span{width:0; height:0; font-size:0; overflow:hidden; position:absolute;}
.test span.bot{
    border-width:20px; 
    border-style:solid dashed dashed; 
    border-color:#beceeb transparent transparent; 
    left:80px; 
    bottom:-40px;
}
.test span.top{
    border-width:20px; 
    border-style:solid dashed dashed; 
    border-color: transparent transparent; 
    left:80px; 
    bottom:-33px;
}     
.device .bj li:hover .test {
  display: block;
  opacity: 1!important;
}
  .device .bj li:hover {
 animation-name:a;
 opacity: 1!important;
  }
.bjzt {
  display: inline-block;
}
</style>
<script>
  import api from '../api/API'
  import loading from '../components/loading'
  import {mapGetters, mapActions} from 'vuex'
  import Clipboard from 'clipboard'
   
  export default {
    data() {
      return {
        searchDp:'',
        searchId:'',
        data1:[],
        arrSelect:[],
        config:false,
        selStore: '',
        deviceimg:false,
        selfmine: this,
        totalStoresNumber: 0,
        selectedStore: {},
        newShopName: '',
        newShopShareCode: '',
        equipment:'',
        itemdata:'',
        newShopCate: '',
        shopcolumns: [
          {
            type: 'index',
          },
          {
            title: '店铺名称',
            width: 120,
            key: 'name',
          },
          {
            title: '角色',
            key: 'roleType',
            render: (h, params) => {
              var rolemap = {'1': '主管', '2': '管理员', '3': '店员'};
              var type = params.row.roleType ? params.row.roleType.toString() : '';
              return h('div', {
                style: {
                  marginRight: '5px'
                }
              }, rolemap[type]);
            }
          },
          {
            title: '行业',
            key: 'shopType',
            width: 80,
            render: (h, params) => {
              var cates = [
                {key: 1, value: '餐饮'},
                {key: 2, value: '娱乐'},
                {key: 3, value: '服装鞋帽箱包'},
                {key: 4, value: '孕产母婴童装玩具'},
                {key: 5, value: '家电数码手机'},
                {key: 6, value: '美妆洗护保健'},
                {key: 7, value: '珠宝眼镜手表'},
                {key: 8, value: '运动户外'},
                {key: 9, value: '食品生鲜零食'},
                {key: 10, value: '鲜花'},
                {key: 11, value: '宠物'},
                {key: 12, value: '房产装修建材'},
                {key: 13, value: '家居家纺'},
                {key: 14, value: '汽车及其用品'},
                {key: 15, value: '办公'},
                {key: 16, value: '五金电子'},
                {key: 17, value: '百货'},
                {key: 18, value: '教育'},
                {key: 19, value: '其他'}
              ];
              var type = '';
              if (params.row.shopType) {
                type = cates[params.row.shopType - 1].value
              }
              return h('div', [
                h('span', {
                  props: {},
                  style: {
                    marginRight: '5px'
                  },
                }, type),
              ]);
            },
          },
          {
            title: '离线/设备',
            key: 'deviceNum',
            width: 100,
            render: (h, params) => {
              return h('div', [
                h('span', {
                  props: {
                    size: 'small'
                  },
                  style: {
                    color: '#ff6600'
                  },
                }, params.row.offLineCount),

                h('span', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, ' / ' + params.row.deviceNum),
              ]);
            }
          },
          {
            title: '操作',
            key: 'deviceNum',
            render: (h, params) => {    
              return h('div', [
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      var storetodel = this.data1[params.index];
                      this.$Modal.confirm({
                        title: '删除',
                        content: '<p>确定删店铺 <span style="color:red">' + storetodel.name + '</span> 吗?</p>',
                        onOk: () => {
                          api.shopManage.deleteShop(storetodel.id, resp => {
                            this.$Message.success('删除成功');
                            this.$store.dispatch('fetchStores');
                          })
                        },
                        onCancel: () => {
                        }
                      });
                    }
                  }
                }, '删除'),

              ]);
            }
          },
          {
            title: '默认店铺',
            key: 'deviceNum',
            render: (h, params) => {
              var DefId = this.DefId;
              var storesId = this.data1[params.index].id;
              if(DefId == storesId){
                var type = 'error' ;
              }else{
                var type = 'success'
              }              
              return h('div', [
                h('Button', {
                  props: {
                    type: type,
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      var storetodel = this.data1[params.index];
                      this.$Modal.confirm({
                        title: '设置',
                        content: '<p>你确定设置默认店铺为 <span style="color:red">' + storetodel.name + '</span> 吗?</p>',
                        onOk: () => {
                          api.shopManage.setDefShop(storetodel.id, resp =>{
                             this.$Message.success('设置成功,下次登录将显示默认店铺');
                          })
                        },
                        onCancel: () => {
                        }
                      });
                    }
                  }
                }, '设置'),

              ]);
            }
          },                   
        ],
      }
    },
    mounted: function () {  
      if (!this.$store.getters.getStores.length) {
        this.$store.dispatch('fetchStores').then(() => {
              this.init()    
        })
      } else {
              this.init()
      }
      var clipboard1 = new Clipboard('.btna');
      var _this = this; 
      clipboard1.on('success', function(e) {
          _this.$Message.success('复制设备信息成功');
      });      
    },

    computed: mapGetters({
      stores: 'getStores',
    }),

    methods: {
        init(){
            this.data1 =this.Bgtree(this.stores);
            var data =this.Bgtree(this.stores);
            var arr = [];
            var arrL = [];
            for(var i =0;i<data.length;i++){
              if(data[i].thermodynamic_url !=''){
                arr.push(data[i])
              }
            }
             this.arrSelect = arr ; 
             this.selStore = arr[0].id;        
              $(function(){
                $('.deivcetable .ivu-table .ivu-table-body .ivu-table-tbody ').children().eq(0).addClass('ivu-table-row-highlight');
                $('.devicebutton').children().click(function(){
                    $(this).addClass('ivu-btn-success').siblings().removeClass('ivu-btn-success');
                })              
             })   

        },
        search (data, argumentObj) {//搜索框
           this.$Notice.destroy()
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },   
        handleSearch () {
            var data = this.Bgtree(this.stores);
            this.data1 = this.search(data, {name:this.searchDp});
            this.searchId = '';
        },           
      refresh(){
        this.$Message.success('已刷新');
        this.onChange(this.selStore);     
      },
      sbzx(){
          this.config = false;
          this.$Notice.destroy();
          this.searchDp = '';
          this.searchId = '';
      },
      sbgl(){
          this.config = true;
          this.data1 = this.Bgtree(this.stores);
          this.selectedStore = this.stores[0];
      },
      Bgtree(val){
          var arr = [] ;
          for(let i in val){
            arr.push(val[i]);
            var children = val[i].children;
            for(let k in children){
              arr.push(children[k]);
              var childrenList = children[k].children;
              for(let o in childrenList){
                arr.push(childrenList[o]);
              }
            }
          }
          return arr; 
      },
      onChange: function (val) {
        var seldevice;
        for (var i = 0; i < this.arrSelect.length; i++) {
          var device = this.arrSelect[i];
          if (device.id == val) {
            seldevice = device;
            this.equipment = device.thermodynamic_url;
          }
        }
            if( this.equipment==''){
              this.deviceimg = true;
            }else{                   
              this.deviceimg = false;     
              var _this = this; 
              api.devices.queryDevices('', val, function (resp){     
                   if(resp.status==1){
                        var data = resp.data ;
                        _this.itemdata = data ;    
                        $(function(){
                          $('.bj li').each(function(item){
                                  var type = $(this).attr('type');
                                  if(type==1){
                                      $(this).css('background','green');
                                      $(this).children().children('div').text('在线');
                                  }else if(type==2){
                                      $(this).css('background','red')
                                      $(this).children().children('div').text('离线');
                                  }else{
                                      $(this).css('background','#999');
                                      $(this).children().children('div').text('到期');
                                  }
                          });
                        })              
                   }else{
                          loading.showMessage(resp.statusMsg);
                   } 
              })                  
            }        
      },      
      deleteStore:function () {
        this.$store.dispatch('fetchStores')
      },
      selectStore: function (item) {
        this.selectedStore = item;
      },
    },
    watch:{
        stores(val){
         this.init();
        },
    },
    components: {
      user: require('../components/user.vue'),
      breads: require('../components/headBreadcrumb.vue'),
      storeDetail: require('../components/storeDetail.vue'),
    },
  }
</script>
