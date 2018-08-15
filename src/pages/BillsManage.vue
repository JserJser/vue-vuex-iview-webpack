<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4"  style="padding: 20px 10px;;text-indent: 4rem;">
          <breads :items="[{name: '管理', to: ''}, {name: '订单管理', to: ''}]"></breads>
        </i-col>


        <i-col :xs="10" :sm="12" :md="16" :lg="18">

        </i-col>

        <i-col :xs="8"  :sm="6" :md="2" :lg="2" style="text-align:center">
          <!-- <user></user> -->
        </i-col>
      </row>
    </div>

    <div class="layout-content">
      <Table :context="self"
             :columns="columns"
             :data="bills">
      </Table>
    </div>

    <!--续期 Modal  -->
    <Modal v-model="renewDeviceModal"
           title="设备续期">

      <div style="text-align: center">
        <qrcode :size=240 :value="renewCode"></qrcode>
        <p style="text-align: center"> 请用微信扫描上方二维码，在微信端完成支付 </p>
      </div>

    </Modal>

  </div>
</template>
<style>

</style>
<script>
  import api from '../api/API'
  import Qrcode from 'v-qrcode'

  export default{
    data(){
      return {
        bills: [],
        self: this,
        renewDeviceModal: false,
        renewCode: '',
        columns: [
          {
            align: 'center',
            title: '设备',
            key: 'deviceId',
          },
          {
            title: '续期时长',
            key: 'renewalTime',
          },
          {
            title: '支付金额',
            key: 'amount',
          },
          {
            title: '下单时间',
            key: 'createTime',
          },
          {
            title: '支付时间',
            key: 'payTime',
          },
          {
            title: '订单号',
            key: 'orderId',
          },
          {
            title: '订单状态',
            key: 'orderType',
           render:(h, params) => {
              return params.row.orderType == 1 ? '未付款' : '已支付'
            }
          },
          {
            title: '操作',
            key: 'action',
            render:(h,params) => {
                if(params.row.orderType == 1){
                  // return `<i-button type="primary" size="small" @click="payBill(${index})"> 支付 </i-button>`;
                  return h('i-button',{
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                  on: {
                    click: () => {
                      this.payBill(params.index)     
                     }
                   }                    
                  },'支付')
                }else {
                    return '';
                }
            }

          }
        ],
      }
    },
    mounted: function () {
      this.getpaylists();
      document.title = '订单管理';
    },

    methods: {
      getpaylists: function () {
        api.pay.getpaylists(resp => {
          if(resp.status==1){
          this.bills = resp.data;
          }else{

          }
        });
      },

      payBill: function (index) {
        var bill = this.bills[index];
        api.pay.getpayparas(bill.id,resp=>{
          if(resp.status==1){
          this.renewCode = resp.data;
          this.renewDeviceModal = true;
          }else{
            
          }
        },error=>{
        })
      }
    },

    components: {
      user: require('../components/user.vue'),
      breads: require('../components/headBreadcrumb.vue'), Qrcode
    }
  }
</script>
