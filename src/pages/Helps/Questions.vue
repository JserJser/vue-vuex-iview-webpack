<template>
  <div>
    <Collapse>

      <Panel :name="index.toString()" v-for="(questions, index) in questions">
        {{questions.question}}
         <p slot="content">{{questions.answers}}</p>
      </Panel>

      <Panel name='4'>
        如何查看设备 MAC 地址?

        <div slot="content">
          <Collapse accordion v-model="value4">

            <Panel name="4-1">
              iPhone查看方法
               <p slot="content">
              手机解锁后，轻触【设置】-【通用】-【关于手机】，找到【无线局域网地址】即为iPhone的MAC地址。</p>
            </Panel>

            <Panel name="4-2">
              Android查看方法
              <p slot="content">
              手机解锁后，轻触【设置】-【关于手机】-【状态信息】，找到【MAC地址】既是（有的手机上是【WLAN MAC地址】）。</p>
            </Panel>

            <Panel name="4-3">
              Windows查看方法
              <p slot="content">
              系统解锁后，点击组合键【win + R】，输入命令“cmd”并回车，在弹出的命令行窗口中输入“ipconfig /all”命令并回车，
                     在输出的信息中，查找“物理地址”，即为MAC地址。<br>
              由于电脑可能存在多个网卡及其MAC地址，仅Wi-Fi网卡的MAC地址才会发射Wi-Fi信号并被本设备检测到，因此需要进一步在
              其中找出哪些MAC地址是Wi-Fi网卡的。前面写有“无限局域网适配器”的项目，为Wi-Fi网卡，其下的“物理地址”为其MAC地址。</p>
            </Panel>

            <Panel name="4-4">
              Apple Mac os查看方法
              <p slot="content">
              系统解锁后，点击【系统偏好设置】- 【网络】-【Wi-Fi】-【高级】-【硬件】，找到【MAC地址】既是。</p>
            </Panel>

            <Panel name="4-5">
              Linux查看方法
              <p slot="content"> 系统解锁后，进入【终端】，输入命令“ifconfig”并回车, 找到“ether”，后面所跟着的信息即是MAC地址。<br>
              由于Linux系统内置命令差异的原因，如果上述命令不起作用，尝试输入命令“ip addr”并回车，找到“link/ether”，后面所跟着的信息即是MAC地址。<br>
              Linux电脑可能会有多个网卡及其MAC地址，仅Wi-Fi网卡的MAC地址才会发射Wi-Fi信号并被本设备检测到，因此需要进一步在
                  其中找出哪些MAC地址是Wi-Fi网卡的。一般情况下，网卡名称为“wlan0”或类似“wlan+数字”形式的，为Wi-Fi网卡。</p>
            </Panel>

          </Collapse>

        </div>
      </Panel>
    </Collapse>
  </div>
</template>
<style>

</style>
<script>

  export default{
    data(){
      return {
        questions: [
          {question: '我为什么看不到数据？', answers: ' 要查看数据，需要购买我们的硬件设备，并在【设备管理】中添加。如果您还没有购买并且希望试用，可以添加演示设备查看数据。'},
          {
            question: '我已经安装了硬件设备，还是看不到数据怎么办？',
            answers: "1. 硬件设备没有通电。请确认设备已经通过USB供电，供电口允许的最大电流要不低于300mA。  2. 上传数据所连接的WiFi热点的名称或者密码没有设置正确。如果在身边数据·知了的设备附近，用手机查看WiFi（WLAN）热点，发现名称叫“dtzl_XXXXXX”(XXXXXX为设备ID)的热点，则此条原因成立，请重新设置上传数据所连接的WiFi热点的名称与密码。 3. 如果您确认上传数据所连接的WiFi热点的名称与密码都设置正确了，但用手机查看WiFi热点，还是能发现名称叫“dtzl_XXXXXX”的热点，说明设置的上传数据的WiFi热点不够稳定，连接时断时续，导致身边数据·知了的设备自动回到了配置模式，请更换稳定的WiFi热点来上传数据。  4. 设备ID填写错误。请注意，所有字母都是小写的，所以“0”是数字“0”，不是大写字母“O”。请让设备进入配置模式，重新查看一下。"

          }, {
            question: '以前数据统计是正常的，为什么忽然没有数据了？',
            answers: "    1. 请检查身边数据·知了硬件设备供电是否正常。 \n 2. 请确认最近是否有人修改了无线WiFi热点的名称或者密码，如果有，请重新配置身边数据·知了设备的WiFi上网的热点名称和密码。 3. 请在身边数据公众号菜单的“更多-店铺管理”中，检查相应店铺的人流范围和客流范围设置是否被修改为很小的数值（例如：1或接近1），如果有，请重新设置人流和客流范围，如分别设置为默认值100和50。 4. 如果设备仍然是离线状态，请联系客服处理。 "

          }, {
            question: 'WiFi 范围与距离的关系',
            answers: "由于WIFI强度受到人体，家具，门窗墙体，发射功率，天线类型等多种外界因素影响，此图仅供参考。"

          }]
      }
    },
    mounted: function () {

    },
    components: {}
  }
</script>
