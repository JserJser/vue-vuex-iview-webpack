<template v-if="custome.length">

  <i-form :label-width="80">
    <div style="padding:0px 8px">
      <i-table height="500" :columns="columns3"
               :data="custome.inTimes"></i-table>
    </div>
    <br>
    <Form-item label="操作">
      <Button type="ghost" @click.native="cancelCollect"> 取消统计 </Button>
    </Form-item>


    <Form-item label="Mac 地址">
      {{custome.mac}}
    </Form-item>

    <Form-item label="品牌">
      {{custome.longBrand}}
    </Form-item>

    <Form ref="formCustom" :model="formCustom" :rules="ruleInline" :label-width="80">
        <FormItem label="MAC" prop="passwd">
            <Input type="text" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="备注" prop="passwdCheck">
            <Input type="text" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <Form-item label="推送">
            <i-switch v-model="isPushOn" @on-change="changePush"></i-switch>
        </Form-item>        
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">确定</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </i-form>
</template>
<script>
  import api from '../api/API'
  import loading from './loading'
  export default {

    data () {
     const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入你得MAC'));
                }
            };      
      return {
        isPushOn: this.custome.isPushOn == 1 ? true : false,
        YnPush:'',
        formCustom: {
            passwd: '',
            passwdCheck: '',
        },
         ruleInline: {
                    passwd: [
                        { required: true, message: '请输入你的MAC', trigger: 'blur' }
                    ],
  
                },        
        columns3: [
          {
            title: '顾客',
            type: 'index',
            width: 80,
          },
          {
            title: '进入时间',
            width: 200,
            key: 'inTime'
          },
          {
            title: '停留时长',
            key: 'stayTimeLength',
                render: (h, params) => {
              return h('span',params.row.stayTimeLength + '分钟')
            }
          },
          {
            title: '参考距离',
            key: 'distance',
                  render: (h, params) => {
                   return h('span',Number(params.row.distance).toFixed(2) + '米')
            }
          },
        ],
      }
    },

    props: {
      custome: ''
    },
    watch: {
      custome: function () {
        this.isPushOn = this.custome.isPushOn == 1 ? true : false
      }
    },

    methods: {
            handleSubmit (name) {
                  var _this = this ;
                _this.$refs[name].validate((valid) => {
                    if (valid) {
                      if(_this.YnPush==true){
                        var ys = 1 ;
                        _this.getTui(ys);
                      }else{
                        var ys = 0 ; 
                        _this.getTui(ys);
                      }              
                    } else {
                        _this.$Message.error('请输入完整信息');
                    }
                })
            },
            getTui(ys){
            var _this = this ;
            api.macManage.updatePushStatus(
            _this.formCustom.passwd,
            ys,
            _this.formCustom.passwdCheck,
            function (resp) {
                   
                if(resp.status==1){
                       ;
                        if(ys==1){
                          _this.$Message.success('更新推送成功!');
                        }else{
                          _this.$Message.success('已取消推送!');
                        }
                }else{   
                  oading.showloading(false);
                  if(ys==1){           
                      _this.$Message.error('推送失败!');
                  }else{
                      _this.$Message.error('取消推送失败!')
                  } 
                  }                 
                });       
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },     
      cancelCollect: function () {
        this.$Modal.confirm({
          title: '取消统计',
          content: '<p>确定取消统计 <span style="color:red">' + this.custome.mac + '</span> 吗?</p>',
          onOk: () => {
            this.cancelConfirm()
          },
          onCancel: () => {
          }
        });
      },
      changePush: function (value) {
        this.YnPush = value;
        if(value ==true){
           if(this.formCustom.passwd==''){
              this.$Message.error('请输入您手机的MAC');
           }
        }
      },
      cancelConfirm: function () {
        api.macManage.addOrDelIgnoreMac(this.custome.presentSid, this.custome.mac, '', 1, resp => {
          this.$Message.success('添加忽略成功');
        })
      },

    }

  }
</script>
