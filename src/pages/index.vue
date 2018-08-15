<template>
  <div>
    <div class="layout-content">
      <row>
        <i-col span="3"  style="width:8%">

        </i-col>
        <i-col span="21"  style="width:100%">
          <transition name="fade" mode="out-in" >
            <router-view></router-view>
          </transition>
        </i-col>
      </row>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
    
      }
    },
  }
</script>
