<template>

  <div>
     <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '管理', to: ''}, {name: '联系', to: ''}]"></breads>
        </i-col>

        <i-col :xs="10" :sm="12" :md="16" :lg="18">
        </i-col>

        <i-col :xs="8"  :sm="6" :md="2" :lg="2" style="text-align:center">
          <!-- <user></user> -->
        </i-col>

      </row>
    </div>   
    <div class="layout-content">
    <section class="content-wrapper" >
    <p class="title">客服热线</p>
    <p>0755-23997336</p>
    <p>地址：深圳市福田区益田路皇都广场A座25A06</p>
    <p>邮编：518000</p>
    </section>
    <section class="content-wrapper">
      <p class="title">渠道、市场合作</p>
      <p>联系人：张小姐</p>
      <p>电话：15999581995</p>
      <p>邮箱：qudaoshichang@wetouch.co</p>
    </section>
    <section class="content-wrapper">
      <p class="title">销售咨询</p>
      <p>联系人：丁小姐</p>
      <p>电话：15814063425</p>
      <p>邮箱：xiaoshouzixun@wetouch.co</p>
    </section>
    <section class="content-wrapper">
      <p class="title">技术支持</p>
      <p>反馈邮箱：jishuzhichi@wetouch.co</p>
    </section>
    </div>
  </div>
</template>
<style scoped>
  .content-wrapper{
    padding: 40px 10px;
    border-bottom: 1px dashed lightgrey;
  }

  .title{
    font-size: 20px;
  }

</style>
<script>

  export default{
    data(){
      return {}
    },
    mounted: function () {

    },
    components: {
      user: require('../components/user.vue'),
      breads: require('../components/headBreadcrumb.vue'),
    }
  }
</script>
