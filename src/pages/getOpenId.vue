<template>
  <div>
    <!--<cube-spin class="cube"></cube-spin>-->
  </div>
</template>

<script>
  import api from '../api/API'
//  import CubeSpin from '../../node_modules/vue-loading-spinner/src/components/Stretch.vue'

  export default {
    name: 'app',
    created: function () {

    },
    mounted: function () {
      this.checkIsBind();
      document.title = '获取用户信息...'
    },

    beforeRouteEnter(to, from, next){
      next();
    },

    beforeRouteLeave (to, from, next) {
    },
    methods: {

      checkIsBind: function () {
        var code = this.getUrlParam(window.location.href, 'code');

        var state = this.getUrlParam(window.location.href, "state");
        state = decodeURIComponent(state);
        var index = state.indexOf('#');
        state = state.substring(0, index);

        var appid = this.$store.getters.getAppId ? this.$store.getters.getAppId : state;

        if (code) {
//          alert(code)

          this.getOpenIdFromServer(code, appid);
        } else {

          var presentHref = window.location.href;
//          alert(presentHref);

          window.location.href = 'http://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + presentHref + '&response_type=code&scope=snsapi_userinfo&state=' + appid + '#wechat_redirect'

        }
      },

      getUrlParam: function (url, varName) {
        var params = url.substring(url.indexOf('?') + 1, url.length).split("&");
        var paramsLength = params.length;
        for (var i = 0; i < paramsLength; i++) {
          var key = params[i].split("=");
          if (key[0] == varName) {
            return key[1];
          }
        }
        return "";
      },

      getOpenIdFromServer: function (code, appid) {
        var _this = this;
        api.wx.getOpenId({
            code: code,
            appid: appid
          },
          function (res) {
//            alert(res);
            _this.$router.go(-2);
          },

          function (error) {
          }

        );
      }

    }
  }
</script>

<style scoped>
  .cube{
    position: absolute;
    top: 50%;
    left: 50%;
  }

</style>



