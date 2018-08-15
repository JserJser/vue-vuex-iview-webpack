<template>
  <div class="padding8 ">

    <div v-if="isOld" class="content">
      <a
        href="http://wetouch-co-files.oss-cn-shenzhen.aliyuncs.com/wetouch_config.zip">
        配置工具下载

        <Icon type="android-download"></Icon>
      </a>
      <p>老款硬件请参考 <a @click="showOld"> 老款配置步骤 </a></p>
    </div>


    <div id="helpAgainContainer" v-else>
      <p>返回 <a @click="showOld"> 新款配置步骤 </a></p>

      <p>拆开设备的外壳，在设备通电的状态下，长按S2按钮3秒钟左右，进入配置模式，进入配置模式后，请参考“首次配置”进行配置。请在5分钟内完成配置，设备将在5分钟后自动重启。</p>
    </div>
  </div>
</template>
<style>

  #helpAgainContainer {
    padding: 10px;
  }
  .content{
    text-align: center;
    margin-top: 100px;
  }
</style>
<script>
  export default{
    data(){
      return {
        isOld: true
      }
    },
    mounted: function () {
      document.title = '再次设置';
    },
    methods: {
      showOld: function () {
        this.isOld = !this.isOld
      }
    },
    components: {}

  }
</script>
