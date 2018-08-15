<template>
  <div>
    <Input v-model="message" type="textarea" :rows="6" placeholder="请输入..."></Input>
     <div style="text-align: right;margin-top: 20px">
       <Button @click.native="submit" type="primary">提交</Button>
     </div>
  </div>
</template>
<style>

</style>
<script>
  import apinew from '../../api/apinew'
  export default{
    data(){
      return {
        message:''
      }
    },
    mounted: function () {

    },
    methods: {
      submit:function () {
        apinew.addvice.addAdvice({message: this.message},
          resp => {
            if(resp.status==1){
            this.$Message.success('提交成功，感谢您的意见与建议。');
            this.message = '';
            }
          },
          error => {
          })
      }
    },
    components: {}
  }
</script>
