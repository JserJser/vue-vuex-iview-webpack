<template>
  <Collapse >
    <Panel name="1">
      总计人流量
       <p slot="content">从当日0点开始出现的人次数</p>
    </Panel>
    <Panel name="2">
      进店客流量
      <p slot="content">
      从当日0点开始的进店人次数</p>
    </Panel>

    <Panel name="3">
      进店跳出量
      <p slot="content">
      进店后停留时间较短，则认为是跳出</p>
    </Panel>

    <Panel name="4">
      现在店内量
      <p slot="content">
      当前一段时间在店内的人数</p>
    </Panel>

    <Panel name="5">
      今日新客量
      <p slot="content">
      以前没有出现的客人，在今天进店的</p>
    </Panel>

    <Panel name="6">
      今日老客量
      <p slot="content">
      以前出现的客人，在今天进店的</p>
    </Panel>

    <Panel name="7">
      进店人数
      <p slot="content">
      一个小时内的累计进店人数</p>
    </Panel>

    <Panel name="8">
      新客人数
      <p slot="content">
      一个小时内的累计新客人数</p>
    </Panel>

    <Panel name="9">
      老客人数
      <p slot="content">
      一个小时内的累计老客人数</p>
    </Panel>


    <Panel name="10">
      驻店量
      <p slot="content">
      进店后停留时间较长，则认为是驻店。驻店量与跳出量之和为进店量</p>
    </Panel>


    <Panel name=11>
      老顾客增长量
      <p slot="content">
      统计期间内第二次出现的顾客的人数</p>
    </Panel>


    <Panel name="12">
      平均驻店时长
      <p slot="content">
      是指所有进店人次的平均驻店时长</p>
    </Panel>



  </Collapse>
</template>
<style>

</style>
<script>

  export default{
    data(){
      return {}
    },
    mounted: function () {

    },
    components: {}
  }
</script>
