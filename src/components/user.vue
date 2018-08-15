<template>
  <div>
    <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
    <addshop></addshop>
    <equipment></equipment>
    <Dropdown trigger="click"  placement="bottom-end">
      <a href="javascript:void(0)">
        <img class="headicon" :src="user.headimgurl" alt="">
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item disabled>{{ user.nickname}}</Dropdown-item>
        <Dropdown-item  @click.native="logout">注销</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>

  </div>
</template>

<style scoped>
  .headicon {
    vertical-align: middle;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .username {
    text-align: center;
  }
  .full-screen-btn-con {
    display: inline-block;
    width: 50px;
    float: left;
    text-align: center;
    cursor: pointer;
}


</style>

<script>

  import {mapGetters, mapActions}  from 'vuex'
  import api from '../api/apinew'
  import config from '../config/index'

  export default{
    data(){
      return {
        isFullScreen:false,
      }
    },
    computed: mapGetters({
      user: 'getUserwx'
    }),

    mounted: function () {
      if (!this.$store.getters.getUserwx.length) {
        this.$store.dispatch('fetchUser').then(() => {
        })
      } else {
      }
    },

    methods: {
      logout: () => {
        sessionStorage.removeItem("def_sid");
        api.user.logout({}, resp => {
          window.location.href = config.baseURL + 'login.html';
        })
      },
    fullscreenChange (isFullScreen) {
                // console.log(isFullScreen);
   }
    },

    components: {
       fullScreen:require('./user/fullscreen.vue'),
       addshop:require('./user/addshop.vue'),
       equipment:require('./user/equipment.vue'),
    }
  }
</script>
