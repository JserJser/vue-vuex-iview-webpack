<template>
  <div>


    <i-form :label-width="80">

      <div style="padding:0px 8px">
        <Table :context="self" height="400" :columns="columns"
               :data="devicesSearch"></Table>
      </div>

      <br>
      <Form-item label="操作">
        <Button type="ghost" @click.native="addDeviceModal=true">添加设备</Button>
        <Button type="ghost" @click.native="AdminInfo=true">查看该店铺下的管理员</Button>
        <Button type="ghost" @click.native="ignoreMacsModal=true">查看该店铺下忽略的 Mac</Button>
        <Button type="ghost" @click.native='deleteStore'>删除店铺</Button>
        <!-- <Button type="ghost" @click.native='clearTitle'>清除提示</Button> -->
      </Form-item>


      <Form-item label="店铺名称">
        <i-input v-model="store.name" placeholder="请输入">
          <i-button slot="append" @click="changeNameOk" icon="checkmark"></i-button>
        </i-input>
      </Form-item>


      <Form-item label="行业">
        <i-select v-model="newShopCate" @on-change="selcate" :disabled='newShopCate?true:false' placeholder="请选择行业">
          <i-option v-for="item in shopcates" :value="item.key" :key="item.key">
          {{ item.value }}</i-option>
        </i-select>
      </Form-item>


      <Form-item label="人流范围">
        <Slider v-model="renliu.range" @on-input="renliuRangeChanging" @on-change='renliuRangeChange'
                show-input></Slider>
        当前人流:{{renliu.numberOfRange}}

      </Form-item>


      <Form-item label="客流范围">
        <Slider v-model="keliu.range" @on-input="keliuRangeChanging" @on-change='keliuRangeChange' show-input></Slider>
        当前客流:{{keliu.numberOfRange}}
      </Form-item>


      <Form-item label="营业时间">
        <Time-picker @on-ok="setWorkTimeOk" confirm :value="workTimeRange" @on-change="timerangeChange" type="timerange"
                     placement="bottom-end"
                     format="HH:mm" placeholder="选择时间" style="width: 168px"></Time-picker>
      </Form-item>


      <Form-item label="设置分享码"  :label-width="100">
      </Form-item>
    <Form  ref="formCustom" :model="formCustom" :rules="ruleInline"  :label-width="100">
        <FormItem label="分享码名称" prop="fxname">
            <Input type="text" v-model="formCustom.fxname"  placeholder="请输入分享码名称" style="width: 200px"></Input>
        </FormItem>
         <FormItem label="分享码类型" prop="fxtype">
            <i-select v-model="formCustom.fxtype" placeholder="选择分享码类型"  style="width: 200px">
                <i-option value="2">管理员</i-option>
                <i-option value="3">普通用户</i-option>
            </i-select>
          </FormItem> 
        <FormItem label="分享次数" prop="fxnub">
            <Input type="text" v-model="formCustom.fxnub"  placeholder="请输入分享的次数" style="width: 200px"></Input>
        </FormItem>           
        <FormItem>
            <Button type="primary" @click="handleSubmit">确定</Button>
  
        </FormItem>
    </Form>

 <Form-item label="获取分享码"  :label-width="100"></Form-item>  

    <Form  ref="formCustom" :model="formCustomList"   :label-width="100">
        <FormItem label="分享码名称" prop="fxname">
            <Input type="text" v-model="formCustomList.fxname"  placeholder="请输入分享码名称" style="width: 200px"></Input>
        </FormItem>
         <FormItem label="分享码类型" prop="fxtype">
            <i-select v-model="formCustomList.fxtype" placeholder="选择分享码类型"  style="width: 200px">
                <i-option value="2">管理员</i-option>
                <i-option value="3">普通用户</i-option>
            </i-select>
          </FormItem>          
        <FormItem>
            <Button type="primary" @click="handleSubmitList">确定</Button>
         <div v-if="isShare">
             <ul  v-for='itme in getfxm'>
                <li>
                  <span>分享码名称:{{itme.code_name}}    ；</span>
                  <span>分享码类型：{{itme.code_type ==2 ?'管理员' :'普通人员'}}    ；</span>
                  <span>分享次数:{{itme.share_limit}}     ；</span>
                  <span>已分享次数:{{itme.has_shared}}     ；</span> 
                  分享码:<span style='color:red' class="btn" data-clipboard-action="copy" data-clipboard-target="#managerShareCode"
                  id="managerShareCode">{{itme.share_code}}</span>
                 </li>
            </ul>
          <br>
        </div>     
        </FormItem>
    </Form>
    </i-form>
    <!--查看该店铺下的管理员-->

    <Modal
      v-model="AdminInfo"
      title="查看该店铺下的管理员"
       width="600"
      @on-visible-change="Admin">
      <i-table 
               height="300"
              
               :columns="Admincolumns"
               :data="AdminData"
               ></i-table>
    </Modal>    
    <!--忽略的 MAc Modal-->
    <Modal
      v-model="ignoreMacsModal"
      title="该店铺下忽略的 mac">
      <i-table :context="self"
               height="300"
               :columns="ignoremaccolumns"
               :data="ignoreMacs"></i-table>
    </Modal>
    <!--修改 -->
    <Modal
      v-model="update"
      title="修改设备"
      @on-ok="updataDelDevice">

      <i-form :label-width="120">
        <Form-item label="更改后的名称(位置)">
          <Input v-model="updataDeviceName" placeholder="请输入更改后的名称(位置)"></Input>
        </Form-item>

        <Form-item label="更改后的序列号">
            <Input  v-model="updateDeviceSN" placeholder="请输入更改后的序列号"></Input>
        </Form-item>
      </i-form>
    </Modal>
    <!--添加设备 Modal-->
    <Modal
      v-model="addDeviceModal"
      title="添加设备"
      @on-ok="addDeviceOk">

      <i-form :label-width="80">
        <Form-item label="设备名称">
          <Input v-model="newDeviceName" placeholder="请输入设备名称"></Input>
        </Form-item>

        <Form-item label="ID">

          <Tooltip style="width: 100%" content="设备 ID 位于产品外包装" placement="bottom-start">
            <Input style="width: 410px" v-model="newDeviceSN" placeholder="请输入设备 ID"></Input>
          </Tooltip>

        </Form-item>
      </i-form>
    </Modal>
    <!--续期 Modal  -->
    <Modal v-model="renewDeviceModal"
           title="设备续期"
           @on-ok="createBillOk"
           :loading="renewLoading"
    >

      <div style="text-align: center">
        <!--<qrcode size=250       :value="renewCode"></qrcode>-->
        <!--请用微信扫描上方二维码，在微信端完成支付-->

        <!--<Select v-model="model1" style="width:200px">-->
        <!--<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
        <!--</Select>-->

        <div v-if="!billcreated">
          <Radio-group v-model="priceIndex">
            <Radio label="0">10元/一个月</Radio>
            <Radio label="1">30元/3个月</Radio>
            <Radio label="2">60元/6个月</Radio>
            <Radio label="3">100元/12个月</Radio>
          </Radio-group>
        </div>

        <div v-if="billcreated">
          <qrcode :size='paysize' :value="renewCode"></qrcode>
          请用微信扫描上方二维码完成支付。
        </div>

      </div>
    </Modal>

  </div>
</template>

<style>
  .red {
    color: red
  }

  .warn {
    color: #ff6600
  }
  .ivu-table-body {
    padding-bottom: 2rem;
  }
</style>

<script type="text/ecmascript-6">

  import api from '../api/API'
  import apinew from '../api/apinew'
  import Clipboard from 'clipboard'
  import loading from './loading'
  import Qrcode from 'v-qrcode'

  import config from '../config/index'

  export default {
    data() {
      return {
        devices: [],
        devicesSearch:[],
        renliu: {},
        keliu: {},
        renewCode: '',
        newShopCate: this.store.shopType,
        newDeviceName: '',
        updataDeviceName:'',
        newDeviceSN: '',
        updateDeviceSN:'',
        addDeviceModal: false,
        update:false,
        updataIndex:'',
        delId:[],
        paysize:240,
        isShare:false,
        ignoreMacs: [],
        blur:'',
        workTimeRange: [this.store.openTime, this.store.closeTime],
        shopcates: [
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
        ],
        formCustom: {
            fxname: '',
            fxtype: '',
            fxnub:'',
        },
        formCustomList: {
            fxname: '',
            fxtype: '',
        },        
        getfxm:'',
         ruleInline: {
                    fxname: [
                        { required: true, message: '请输入你的分享码名称', trigger: 'blur' }
                    ],
                    fxtype:[
                        { required: true, message: '请选择分享码类型', trigger: 'blur' }
                    ],
                    fxnub:[
                        { required: true, message: '请输入分享次数', trigger: 'blur' }
                    ],  
                },
        self: this,
        columns: [
          {
            type: 'index',
            width: 40,
            align: 'center',
            title: '设备',

          },
          {
            title: '位置',
            width: 110,
            key: 'name',

          },
          {
            title: '序列号',
            key: 'sn',
            width: 120,

          },
          {
            title: '有效期',
            key: 'expiredate',
            width: 120,
          },

          {
            title: '状态',
            key: 'deviceStatus',
            render:(h, params) => {
              var color = params.row.deviceStatus == 2 ? 'red' : params.row.deviceStatus == 3 ? 'warn' : 'black'
              return h('div', {
                style: {
                  color: color
                }
              }, params.row.deviceStatus == 2 ? '离线' : params.row.deviceStatus == 3 ? '到期' : '在线')
            }
          },
          {
            title: '操作',
            width: 300,
            key: 'action',
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
                    click: (e) => {
                      this.update=true;
                      this.UpData(params.index);
                      this.updataDeviceName = params.row.name;
                      this.updateDeviceSN = params.row.sn;
                    }
                  }
                }, '修改'),                
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.renewdevice(params.index)
                    }
                  }
                }, '续期'),

                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.confimDelDevice(params.index)
                    }
                  }
                }, '删除'),
              ]);
            }
          }
        ],
        firstselStore: true,// 获取firstselStore
        ignoreMacsModal: false,
        ignoremaccolumns: [
          {
            type: 'index',
            width: 90,

          },
          {
            title: 'Mac 地址',
            width: 150,
            key: 'mac',

          },
          {
            title: '备注',
            width: 120,
            key: 'remark',
          },
          {
            title: '操作',
            key: 'shopType',
            width: 120,
          }
        ],
    AdminInfo:false,
    Admincolumns:[
          {
            title: '管理员名字',
            key: 'nickname',
            width:150
          },
          {
            title: '角色类型',  
            width:100,
            key: 'role_type',
              render:(h, params) => {
               return h('div', {
              }, params.row.role_type == 2 ? '管理员' : params.row.role_type == 3 ? '普通用户' : '拥有者')
            }         
          },
          {
            title: '备注',
            key: 'remark',
            render:(h,params)=>{         
              return h('div',[
                h('Input',{
                  props:{
                   value:params.row.remark,
                   placeholder:'请输入备注再点击确认'
                  },
                  style:{
                    width:'80%'
                  },
                  on:{
                    'on-blur':(e)=>{
                      this.blur= e.target.value;
                    }
                  }
                 }),
                h('Button',{
                   props:{
                     slot:'append',
                     icon:'checkmark'
                   }, 
                   on:{
                     click:()=>{
                       var _this =this;
                        api.shopManage.setAdmin(_this.store.id,params.row.uid,_this.blur,params.row.role_type,function(resp){
                                if(resp.status==1){
                                     _this.$Message.success('设置备注成功');
                                }
                        })
                     }
                   }
                 }),
              ])
           }
          },

    ],
    AdminData:[],       
        renewDeviceModal: false,
        priceIndex: 0,
        billcreated: false,
        renewLoading: true,
        toRenewDevice: {},
        prices: [
          {
            length: 1,
            price: config.edition == 2 ? 200 : 10,
            discountPrice: config.edition == 2 ? 200 : 10
          },
          {
            length: 3,
            price: config.edition == 2 ? 500 : 30,
            discountPrice: config.edition == 2 ? 500 : 30
          },
          {
            length: 6,
            price: config.edition == 2 ? 800 : 60,
            discountPrice: config.edition == 2 ? 800 : 60
          },
          {
            length: 12,
            price: config.edition == 2 ? 1200 : 100,
            discountPrice: config.edition == 2 ? 1200 : 100
          }],

      }
    },
    components: {Qrcode},
    props: {
      store: {},
      searchData:{},
      searchData1:{},
    },
    mounted: function () {
      var clipboard = new Clipboard('.btn');
      var _this = this;
      clipboard.on('success', function (e) {
        _this.$Message.success('分享码已复制到剪贴板');
      });
    },

    methods: {
        Admin(val){
          var _this =this ;
              if(val){
                api.shopManage.getShopAdmin(_this.store.id,function(resp){
                  _this.AdminData = resp.data;
                })
              }
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
      handleSubmitList(){
            var value  = this.formCustomList;
            var _this = this ;
            api.devices.getShareCode(_this.store.id,_this.formCustomList.fxtype,_this.formCustomList.fxname,function(resp){
                if(resp.status==1){
                      _this.getfxm = resp.data;
                      _this.isShare = true;
                      _this.$Message.success('获取分享码成功');
                }else{
                      _this.$Message.error(resp.statusMsg);
                } 
            })            
      },
      handleSubmit(){
        var value  = this.formCustom ; 
        var _this = this ;
          if(_this.formCustom.fxtype !='' &&_this.formCustom.fxnub !='' && _this.formCustom.fxname !='' ){
            api.devices.setShareCode(_this.store.id,this.formCustom.fxtype,_this.formCustom.fxnub,_this.formCustom.fxname,function(resp){
                  if(resp.status==1){
                        _this.$Message.success('设置成功');
                  }else{
                        _this.$Message.error(resp.statusMsg);
                  }
            })            
            
          }else{
              this.$Message.error('您设置的分享码信息尚未填全，请填全再提交');
          }
 
      
      },
      createBillOk: function (value) {
        var price = this.prices[this.priceIndex];
        var length = price.length;
        var payprice = price.discountPrice;
        var _this = this;
        api.pay.createOrder(payprice * 100, '为' + this.toRenewDevice.sn + '购买' + length + '个月有效期', this.toRenewDevice.sn, length, function (resp) {
           
          if (resp.status == 1) {
             
            _this.payBill(resp.data);
          } else {
              
          }
        }, function (error) {
        });
      },

      payBill: function (billid) {
        api.pay.getpayparas(billid, resp => {
           
           if (resp.status == 1) {
               
              this.renewCode = resp.data;
              this.billcreated = true;
           }else{
               
           }
        }, error => {
        })
      },

      timerangeChange: function (values) {
        this.workTimeRange = values;
      },

      setWorkTimeOk: function (value) {
        apinew.shop.setWorktime(
          {
            sid: this.store.id,
            openTime: this.workTimeRange[0],
            closeTime: this.workTimeRange[1]
          }, resp => {
            this.$Message.success('修改成功');
          }, error => {
            this.$Message.error('修改失败');
          });
      },

      selcate: function (cate) {
        if (!this.firstselStore) {
          api.shopManage.updateShop(this.store.id, this.store.name, cate, resp => {
            this.$Message.success('修改成功');
          })
        }
        this.firstselStore = false;
      },

      changeNameOk: function () {
        api.shopManage.updateShop(this.store.id, this.store.name, this.newShopCate, resp => {
          this.$Message.success('修改成功');
        })
      },

      renliuRangeChange: function (val) {
        this.setRenliuRange();
      },
      keliuRangeChange: function () {
        this.setKeliuRange();
      },
      renliuRangeChanging: function (val) {
      },
      keliuRangeChanging: function (val) {
      },

      renewdevice: function (index) {
        var device = this.devices[index];
        this.toRenewDevice = device;
        this.billcreated = false;
        this.renewDeviceModal = true;
      },


      addDeviceOk: function () {
        api.devices.addDevice(this.newDeviceSN, this.newDeviceName, this.store.id, '', resp => {
            
            if(resp.status ==1){
                 
              this.$Message.success('添加设备成功')
              this.getDevices();
            }else{
                
            }
        })
      },
      UpData:function(index){
         var device = this.devices[index];
         this.updataIndex = device.id;
      },
      updataDelDevice: function () {
        api.devices.updateDevice(this.updateDeviceSN, this.updataDeviceName, this.store.id,this.updataIndex, resp => {
          this.$Message.success('修改设备成功')
          this.getDevices();
        })
      },

      confimDelDevice: function (index) {
        var device = this.devices[index];
        this.$Modal.confirm({
          title: '删除',
          content: '<p>确定删除该设备吗</p>',
          onOk: () => {
            this.deleteDeviceConfirm(device.sn, index)
          },
          onCancel: () => {
          }
        });
      },
      deleteStore: function () {
        this.$Modal.confirm({
          title: '删除',
          content: '<p>确定删店铺 <span style="color:red">' + this.store.name + '</span> 吗?</p>',
          onOk: () => {
            this.deleteStoreConfirm()
          },
          onCancel: () => {
          }
        });
      },

      deleIgnorMac: function (val) {
        var mac = this.ignoreMacs[val];
        api.macManage.addOrDelIgnoreMac(this.store.id, mac.mac, mac.remark, '0', resp => {
          this.$Message.success('删除成功');
          this.ignoreMacs.splice(val, 1);
        })
      },
      time (wz,id,zt) {//通知提醒
          this.$Notice.error({
              title: '设备异常警告',
              duration: 0,
              render: h => {
                  return h('div', [
                      h('span',{            
                      },'位置:'),
                      h('span',{
                        style: {
                          color: 'red',
                          margin: '0 5px'
                        },
                      },wz),
                      h('span',{
                      },'id:'),
                      h('span',{
                        style: {
                          color: 'red',
                            margin: '0 5px'
                        },
                      },id),   
                      h('br',{
                      },''),                            
                      h('span',{
                        style: {
                          display:'inline-block',
                              marginTop: '5px'
                        },                              
                      },'设备状态已'),   
                        h('span',{
                        style: {
                          color: 'red',
                          display:'inline-block',
                            margin: '5px 5px'
                        },
                      },zt),   
                      h('Button',{
                          style:{
                                padding: '.3rem',
                                display:'block',
                          },
                          on: {
                            click: () => {
                                  this.$Notice.destroy()
                            }
                          }                                
                      },'清除所有警告')                                                                             
                  ])
              }
          });
      },
      getDevices: function () {
        var _this = this;
        api.devices.queryDevices('', this.store.id, function (resp) {//店铺设备提示
              if(resp.status ==1){
                  var data = resp.data ;
                  var i = 0
                  _this.$Notice.destroy()
                  for(var i=0; i<data.length;i++){
                    _this.delId.push(data[i]);
                    var deviceStatus = data[i].deviceStatus ; 
                    if(deviceStatus ==2){
                         _this.time(data[i].name,data[i].sn,'离线');
                    }else if(deviceStatus ==3){
                        _this.time(data[i].name,data[i].sn,'到期');
                    }
                  }
                  _this.devices = resp.data;
                  _this.devicesSearch = resp.data;        
                  // _this.$emit('deleteSelf');     
              }else{
                    _this.devicesSearch = [];
              }
          },
          function (error) {
            _this.devices = [];
          }
        )
      },

      getRanges: function () {
        var _this = this;
        api.devices.getRanges('', this.store.id, function (resp) {          
          if(resp.status ==1){
          _this.renliu = resp.data.renliu
          _this.keliu = resp.data.keliu     
          }
        })
      },

      getIgnoreMacs: function () {
        api.macManage.getAllIgnoreMac(this.store.id, resp => { 
          if(resp.status ==1){
          this.ignoreMacs = resp.data;
          }
        })
      },

      deleteDeviceConfirm: function (sn, index) {
        api.devices.deleteDevice(this.devices[index].id, this.store.id, resp => {
            
          if(resp.status ==1){
          this.$Message.success('删除成功');
          this.devices.splice(index, 1);
            
          }else{
             
          }
        })
      },

      deleteStoreConfirm: function () {
        api.shopManage.deleteShop(this.store.id, resp => {
            
          if(resp.status ==1){
          this.$Message.success('删除成功');
          this.$emit('deleteSelf');
            
          }else{
              
          }          
        })
      },
      setRenliuRange: function () {
        if (this.keliu.range > this.renliu.range) {
          loading.show('-1', '人流范围需要大于客流范围');
          return;
        }
        api.devices.setRanges('', this.store.id, this.renliu.range, '', resp => {
            this.$Message.success('更新成功');
          }
        )
      },

      setKeliuRange: function () {
        if (this.keliu.range > this.renliu.range) {
          loading.show('-1', '客流范围需要小于人流范围');
          return;
        }
        api.devices.setRanges('', this.store.id, '', this.keliu.range, resp => {
          this.$Message.success('更新成功');
        })
      },


    },
    watch: {
      store: function (val) {
        this.getDevices();
        this.getRanges();
        this.getIgnoreMacs();
     //   this.isShare = this.store.isShare == 1 ? true : false;
        this.firstselStore = true;
        this.newShopCate = this.store.shopType ? Number(this.store.shopType) : '';
        if(this.store.openTime==null || this.store.closeTime==null){
           this.workTimeRange = ['00:00','00:00'];
        }else{
          this.workTimeRange = [this.store.openTime, this.store.closeTime];
        }
      },
      searchData(val){
          var data = this.devices ;
          this.devicesSearch =  this.search(data, {sn:val});
      },
      searchData1(val){

         this.devicesSearch = [];
      }
    },
  }
</script>
