<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col span="5">
          <breads :items="[{name: '数据', to: ''}, {name: '数据导出', to: ''}]"></breads>
        </i-col>


        <i-col span="18">

        </i-col>

        <i-col span="1">
          <user></user>
        </i-col>

      </row>
    </div>


    <div class="layout-content">
      <i-form :label-width="80">
        <Form-item label="店铺名">
          <i-select @on-change="onChange" v-model="selStore" placeholder='请选择店铺' style="width:200px">
            <i-option v-for="item in stores" :value="item.id">{{ item.name }}</i-option>
          </i-select>
        </Form-item>


        <Form-item label="日期">
          <Date-picker format="yyyy-MM-dd" @on-change='selDate' v-model="selectedDate" type="date" placeholder="选择日期"
                       style="width: 200px"></Date-picker>
        </Form-item>


        <Form-item label="是否包含 MAC 信息">
          <Checkbox v-model="isNeedMac"></Checkbox>
        </Form-item>


        <Form-item label="">
          <Button type="ghost">
            <a :href="baseURL + 'export/download?sid=' + selStore + '&date=' + selectedDate + '&isNeedMac=' + isNeedMacBoolen"
                                  target="_blank">下载</a>
          </Button>
        </Form-item>

      </i-form>
    </div>

  </div>
</template>
<style>
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import dateUtils from '../util/dateUtils'
  import netconfig from '../api/config'
  var initialDay = dateUtils.dateInit.initDay();
  export default{
    data(){
      return {
        selStore: '',
        selectedDate: initialDay,
        baseURL: netconfig.baseURL,
        isNeedMac:true
      }
    },

    mounted: function () {
      if (!this.$store.getters.getStores.length) {
        this.$store.dispatch('fetchStores').then(() => {
          this.selStore = this.stores[0].id;
        })
      } else {
        this.selStore = this.stores[0].id;
      }
    },

    methods: {
      selDate: function (selDate) {
        this.selectedDate = selDate;
      },

      download: function () {
      }
    },

    computed:{ ...mapGetters({
      stores: 'getStores'
    }),
      isNeedMacBoolen:function () {
        return this.isNeedMac?1:0
      }
    },

    components: {
      user: require('../components/user.vue'),
      breads: require('../components/headBreadcrumb.vue'),
    }
  }

</script>
