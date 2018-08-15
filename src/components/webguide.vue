<template>
    <div class="guide">


      <p class="title"> 使用教程 </p>

      <section>
        <p> 首先，非常感谢您购买我司产品"身边数据·知了"，在使用此 Web 网站之前，建议您花两到三分钟时间阅读本使用指导，这份指导会<strong>使您节省大量的时间。</strong></p>
      </section>


      <section>


        <p>1. 如果您是第一次使用该产品，请首先在店铺管理里添加一个您的店铺，这个店铺将作为您的客流数据承载体</p>
        <img style="width: 100%" src="../assets/step1.png" alt="">
        <p>2. 添加店铺完成以后，请给该店铺添加一个用于客流统计的身边数据·知了设备。设备 ID 位于产品外包装。</p>
        <img style="width: 100%" src="../assets/step2.png" alt="">
        <p>3. 给已经配置好的身边数据·知了设备通电，硬件设配配置教程见使用帮助里面的的下载包。</p>
        <img style="width: 100%" src="../assets/step3.png" alt="">

        <p>此时数据就会正常的显示到您的店铺里</p>
      </section>
      <section>

        <p class="title">功能简介</p>
        <p><strong>每日客流页面：</strong>展示店铺在某一天内的所有时段的客流统计</p>
        <p><strong>店铺数据页面：</strong>展示客流转化比例等</p>
        <p><strong>顾客数据页面：</strong>展示具体到店的每一位顾客的 Mac 和手机信息</p>
        <p><strong>数据导出页面：</strong>可以将顾客手机和 mac 信息以 excel 的格式导出</p>
        <p><strong>消费数据页面：</strong>您可以手动导入每一天的销售额</p>
        <p><strong>店铺管理页面：</strong>用于店铺管理，你可以在该页面给设备续期等</p>

      </section>
    </div>
</template>
<style lang="scss" scoped>

  .guide {
    .title {
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: 600;
      color: #5cadff;
    }

    p {
      font-size: 15px;
      line-height: 20px;
    }
    img {
      margin-top: 10px;
      margin-bottom: 29px;
    }

    section{
      margin-bottom: 20px;
    }


  }

</style>
<script>

    export default {
        data() {
            return {}
        },
        mounted: function () {

        },
        methods: {},
        components: {}
    }
</script>
