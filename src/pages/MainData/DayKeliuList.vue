<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '数据', to: ''}, {name: '顾客数据', to: ''}]"></breads>
        </i-col>
        <i-col :xs="10" :sm="10" :md="9" :lg="7">
          <store-date-selector @seldevice="deviceChange" @seldate="selDateChange"></store-date-selector>
        </i-col>
        <i-col :xs="4" :sm="3" :md="3" :lg="7">
          <i-select @on-change="onChangeCate" v-model="selCate" placeholder='请选类别'  class="ShopOrDate">
            <i-option v-for="item in cateDatas" :value="item.key">{{ item.value }}</i-option>
          </i-select>
        </i-col>
        <i-col :xs="4"  :sm="5" :md="6" :lg="6">
          <user  style="float:right;margin-right:20px"></user>
        </i-col>

      </row>
    </div>

    <div>
      <row>

        <i-col span='12'>
          <Table  height="1000" stripe highlight-row @on-current-change='selectCustom' :columns="columns3"
                   :data="customs"></Table >
          <br>
          <Page :page-size='pagesize'     v-model="page" @on-change='pageChange' :total='totalCustomeNumber'
                show-elevator></Page>
        </i-col>

        <i-col span='12'>

          <div v-if="selectedCustom">
            <custom-detail :custome='selectedCustom'></custom-detail>
          </div>

          <div style="text-align: center;margin-top: 140px" v-else>
            <p> 请在左侧选择顾客，以查看详情 </p>
          </div>

        </i-col>

      </row>
    </div>

  </div>
</template>
<style>

  .outter {
    height: 1000px;
    position: relative;
  }

  .inner {
    position: fixed;
    top: 60px;
  }
  .ivu-table td,.ivu-table th {
    text-align: center!important;
  }
</style>
<script>
  import api from '../../api/API'
  import dateUtils from '../../util/dateUtils'
  import loading from '../../components/loading'

  var cateDatas = [
    {key: 'keliu', value: '客流'},
    {key: 'renliu', value: '人流'},
    {
      key: 'tiaochu',
      value: '跳出'
    },
    {key: 'diannei', value: '店内'},
    {key: 'xinguke', value: '新顾客'},
    {key: 'laoguke', value: '老顾客'}];

  var mapsChinese = {
    'keliu': '客流',
    'renliu': '人流',
    'tiaochu': '跳出',
    'diannei': '店内',
    'xinguke': '新顾客',
    'laoguke': '老顾客'
  };

  export default{
    data(){
      return {
        columns3: [
          {
            type:'index',
          },
          {
            title: 'MAC地址',
            width: 150,
            key:'mac'
          },
          {
            title: '品牌',
            key:'brand'
          },

          {
            title: '最后一次进入时间',
            key:'inTime',
            width: 150,
            render: (h, params) => {
              return h('span',params.row.inTime.substring(16, 0))
            }
          },
          {
            title: '共计停留次数',
            key:'inTimes',
            render: (h, params) => {
              return h('span',params.row.inTimes.length);
            }
          },
          {
            title: '推送',
            key:'isPushOn',
            width: 150,
             render: (h, params) => {
              return h('span',params.row.isPushOn ? '是' : '否')
            },
          },
          {
            title: '备注',
            key:'remark'
          },
        ],
        customs: [],
        presentstore: {},
        totalCustomeNumber: 0,
        page: 1,
        cateDatas: cateDatas,
        selCate: 'renliu',
        selectedDay: dateUtils.dateInit.initDay(),
        selectedCustom: '',
        pagesize:20,
        db_flog:0
      }
    },

    mounted: function () {
      document.title = '身边数据·顾客数据';
    },
    methods: {

      selDateChange: function (selDay) {
        this.selectedDay = selDay;
        //        复位
        this.customs = [];
        this.page = 1;
        this.totalCustomeNumber = 0;
        this.cateDatas = cateDatas
        this.getCustomesFromNet(1, this.selectedDay, this.selCate);
      },

      deviceChange: function (store) {
        this.presentstore = store;
        //        复位
        this.customs = [];
        this.page = 1;
        this.totalCustomeNumber = 0;
        this.cateDatas = cateDatas
        this.getCustomesFromNet(1, this.selectedDay, this.selCate);
      },
      onChangeCate: function (cate) {
        this.selCate = cate;
        //        复位
        this.customs = [];
        this.page = 1;
        this.totalCustomeNumber = 0;
        if(this.db_flog ==0){
          this.db_flog = 1;
        }else{
          this.getCustomesFromNet(1, this.selectedDay, this.selCate);
        }
      },
      pageChange: function (page) {
        this.page = page;
        this.customs = [];
        this.getCustomesFromNet(page, this.selectedDay, this.selCate);
      },

      selectCustom: function (item) {
        item.presentSid = this.presentstore;
        this.selectedCustom = item;
      },

      getCustomesFromNet: function (num, date, cate) {
        var _this = this;
        this.selectedCustom = ''
        api.realTimeAndhistory.realTimeCustomesData(this.presentstore, date, num, cate, function (resp) {   
            if(resp.status ==1){
                  _this.totalCustomeNumber = Number(resp.cateNum);
                  for (var i = 0; i < resp.data.length; i++) {
                    var acustome = resp.data[i];
                    _this.customs.push(acustome);
                  }
                  _this.cateDatas.forEach(function (item, index, array) {
                    if (item.key == cate) {
                      item.value = mapsChinese[item.key] + ' ' + resp.cateNum + ' ';// 手动把 map 里的文字加上人数.
                    }
                  })
                      
            }else{
                      
            }

        })
      },
    },


    components: {
      user: require('../../components/user.vue'),
      storeDateSelector: require('../../components/Date/dateAndStoreBanner.vue'),
      breads: require('../../components/headBreadcrumb.vue'),
      customDetail: require('../../components/customDetail.vue'),
    }
  }
</script>
