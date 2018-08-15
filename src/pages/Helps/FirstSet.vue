<template>
  <div id="helpFirstContainer">
    <h1 class="h_header">为便于您的配置，您应该首先关注“身边数据”公众号</h1>
    <img src="../../assets/qrcode.png">

    <p>1）第一次使用USB为设备上电，LED灯慢闪进入配置模式；
        关于LED灯表示的含义参考下表。</p>

    <table  border='1' id="table_light">
      <thead>
      <tr>
        <th style="width:20%">序号</th>
        <th style="width:30%">现象</th>
        <th style="width:45%">含义</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>常亮</td>
        <td>正常工作</td>
      </tr>
      <tr>
        <td>2</td>
        <td>慢闪（亮800毫秒，灭800毫秒）</td>
        <td>进入配置模式</td>
      </tr>
      <tr>
        <td>3</td>
        <td>快闪（亮150毫秒，灭150毫秒）</td>
        <td>当向服务器发送数据时，快闪，发送成功后常亮；若发送失败，持续快闪直到下一次发送成功；</td>
      </tr>
      <tr>
        <td>4</td>
        <td>常灭</td>
        <td>表示供电不正确或者芯片损坏，需要更换</td>
      </tr>
      </tbody>
    </table>

    <p>2）在配置模式下，设备工作在热点模式，发出WiFi信号，信号名称为：“dtzl_xxxxxx”，其中“xxxxxx”是该设备的产品ID。使用笔记本电脑或者智能手机连接上述SSID，无需密码。如下图所示。</p>
    <img src="../../assets/image006.png">
    <p>3）连接成功后，在浏览器地址栏中输入：“192.168.4.1”， 进入配置页面。浏览器推荐使用Chrome、Firefox。</p>
    <p>4）记录产品ID，以备在微信公众号中添加设备使用。</p>
    <p>5）在“设置参数”页面，设置无线路由器名称及其密码，点击“保存”。</p>
    <img style="width: 100%" src="../../assets/image001.png">
    <p>6）设置成功后，点击“关于产品>重启模块”，即可完成硬件设置。</p>
    <img style="width: 100%" src="../../assets/image002.png">
    <img style="width: 100%" src="../../assets/image003.png">
    <p>7）一、在PC端上，点击店铺管理，在网页右上角点击添加，再选择我的店铺</p>
    <img style="width: 100%" src="../../assets/image004.png">
     <p>填入您的店铺名称以及行业</p>
    <img style="width: 100%" src="../../assets/image005.png">
    <p>8）恭喜，所有的设置完成了！“身边数据”将持续为您搜集客流数据。您稍后可以点击“实时客流”或“数据分析”查看客流数据。</p>


  </div>
</template>
<style scoped>
  #helpFirstContainer{
    padding: 10px;
  }

  img {
    /*width: 100%;*/
  }

  .h_header{
    font-size: 17px;
    font-weight: bold;
  }
  #table_light {
    margin: 10px 0 15px 0;
    border-collapse: collapse;
  }

  #table_light>tbody>tr> td,#table_light>thead>tr>th {
    border: 1px solid #ddd;
    padding: 3px 10px;
  }

  #table_light>tbody>tr>td {
    padding: 5px 10px;
  }

</style>
<script>

  export default{
    data(){
      return{
      }
    },

    mounted:function () {
      document.title = '首次设置';
    },
    components:{

    }
  }
</script>
