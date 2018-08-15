<template>
  <div>
    <div class="layout-breadcrumb">
      <row type="flex" align="middle">

        <i-col :xs="6" :sm="6" :md="6" :lg="4" style="padding: 20px 10px;text-indent: 4rem;">
          <breads :items="[{name: '管理', to: ''}, {name: '帮助', to: ''}]"></breads>
        </i-col>

        <i-col :xs="10" :sm="12" :md="16" :lg="18">
        </i-col>

        <i-col :xs="8"  :sm="6" :md="2" :lg="2" style="text-align:center">
          <!-- <user></user> -->
        </i-col>

      </row>
    </div>


    <div class="layout-content">
      <row>
        <i-col span="3">
          <Menu style="width:100%;height: 900px" theme="light" active-name="1">

            <router-link to="/Helps/WebGuide">
              <Menu-item name="1">
              <Icon type="flag"></Icon>
                使用指南
              </Menu-item>
            </router-link>


            <router-link to="/Helps/FirstSet">
              <Menu-item name="3">
                <Icon type="wrench"></Icon>
                配置工具
              </Menu-item>
            </router-link>

<!-- 
            <router-link to="/Helps/AgainSet">
              <Menu-item name="4">
                <Icon type="heart"></Icon>
                再次配置
              </Menu-item>
            </router-link> -->

            <router-link to="/Helps/Definitions">
              <Menu-item name="7">
                <Icon type="document-text"></Icon>
                数据释义
              </Menu-item>
            </router-link>

            <router-link to="/Helps/Questions">
              <Menu-item name="2">
                <Icon type="chatbubbles"></Icon>
                常见问题
              </Menu-item>
            </router-link>


            <router-link to="/Helps/Suggest">
              <Menu-item name="5">
                <Icon type="heart"></Icon>
                反馈建议
              </Menu-item>
            </router-link>

<!--               <Menu-item name="6" >
                <Icon type="heart"></Icon>
                <a href="http://v.youku.com/v_show/id_XMjY0NDgwNDQyOA==.html"> 视频帮助</a>
              </Menu-item> -->
          </Menu>
        </i-col>

        <i-col span="21" style="padding: 8px">
          <transition name="fade" mode="out-in" >
            <router-view></router-view>
          </transition>
        </i-col>


      </row>
    </div>
  </div>
</template>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition:all .2s ease
  }

  .fade-enter, .fade-leave-active {
    opacity:0
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
