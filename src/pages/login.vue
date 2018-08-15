<template>
  <div class="content_box" style="text-align: center;margin: 100px auto">

    <Spin fix v-if="code">
      <Icon type="load-c" size=18   class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>

    <span v-else id="login_container"></span>

  </div>
</template>
<style>

</style>


<script>
  import wxLogin from '../static/wxLogin'
  import api from '../api/apinew'
  import config from '../config/index'

  export default{
    data(){
      return {
        code: ''
      }
    },
    mounted: function () {
      this.checkIsBind();
    },

    methods: {
      checkIsBind: function () {
        var code = this.getUrlParam(window.location.href, 'code');
        this.code = code;
        var state = this.getUrlParam(window.location.href, "state");
        state = decodeURIComponent(state);
        var index = state.indexOf('#');
        state = state.substring(0, index);

//        var appid = 'wx02566c94223ef3ea' ? 'wx02566c94223ef3ea' : state; // 测试
        var appid = config.appId ? config.appId : state;// 正式
//        alert(appid)
        if (code) {
//          alert(code)

          this.getOpenIdFromServer(code, appid);
        } else {

//          var obj = new WxLogin({
//            id: "login_container",
//            appid: "wx02566c94223ef3ea",
//            scope: "snsapi_login",
//            redirect_uri: "https://keliupc.mncats365.com/#/login",
//            state: Math.ceil(Math.random() * 1000),
//            style: "black",
//            href: ""
//          });

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
            appid: appid,
            forOEM: 2
          },
          function (res) {
//            alert(res);
            _this.$router.replace('/');
//            _this.$router.go(-2);
//            _this.$router.go(-1);
          },
          function (error) {
          }
        );
      }
    },


    components: {}

  }
</script>
