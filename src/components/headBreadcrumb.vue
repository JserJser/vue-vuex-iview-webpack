<template>
  <div>

    <Breadcrumb>
      <Breadcrumb-item v-for="item in items" :href="item.to">{{item.name}}</Breadcrumb-item>
    </Breadcrumb>

  </div>
</template>
<style>

</style>
<script>

  export default{
    data(){
      return {

      }
    },

    props: {
      items:{
           type:Array,
           required: true
      }
    },

    mounted: function () {
      
    },
    watch:{

    }
  }
</script>
