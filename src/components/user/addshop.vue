<template>
 <div style="float:left;">
      <Dropdown trigger="click">          
                <Icon type="gear-a" :size="23"></Icon>
              <Dropdown-menu slot="list">
                <Dropdown-item @click.native="addMyshop">我的店铺</Dropdown-item>
                <Dropdown-item @click.native="addOtherShopModal=true"> 其他人的店铺</Dropdown-item>
                <Dropdown-item @click.native="addDemoShop"> 演示店铺</Dropdown-item>
              </Dropdown-menu>
   <!-- 添加他人店铺-->             
     </Dropdown>     
       <Modal
      v-model="addOtherShopModal"
      title="添加分享店铺"
      @on-ok="addOtherShopok">
      <i-form :label-width="80">
        <Form-item label="店铺分享码">
          <Input v-model="newShopShareCode" placeholder="请输入店铺分享码"></Input>
        </Form-item>
      </i-form>
        </Modal>
   <!--添加我的店铺-->
    <Modal v-model="addMyShopModal"  title="添加店铺" @on-ok="addMyShopok" @on-cancel="clearMyShop">
      <i-form :label-width="80">
          <Form-item label="店铺名称">
            <Input v-model="newShopName" placeholder="请输入店铺名称"></Input>
          </Form-item>
                  <Form-item label="上级店铺">
                 <Cascader 
                  style="width:200px;float:left;text-align:center"
                    v-model="FirstShop"
                    :data="FirstShopData" 
                     @on-change="onChangeList"
                    placeholder="请选择店铺或者输入店铺名称"
                    :clearable="false"
                    :load-data="loadData"
                    :render-format="Exhibition"
                    trigger='hover'
                    filterable>
                   </Cascader>
                   </Form-item>
         <FormItem label="店铺地址">
            <i-select  style="width: 130px"  v-model='select_Shen'  @on-change="sheng" placeholder="请选择省">
                <i-option v-for="item in province" :value="item.Aid">{{ item.name }}</i-option>
            </i-select>
             <i-select  style="width: 130px" v-model='select_Shi'  @on-change="shi"  placeholder="请选择市">
                   <i-option v-for="item in city" :value="item.Aid">{{ item.name }}</i-option>
            </i-select>
            <i-select  style="width: 130px" v-model='select_Xian'  placeholder="请选择县">
                  <i-option v-for="item in area" :value="item.Aid">{{ item.name }}</i-option>
            </i-select>     
            <Input style="margin-top:20px"  v-model="detaile_addr" placeholder="详细地址"></Input>              
          </FormItem> 

        <Form-item label="行业">
          <i-select v-model="newShopCate" placeholder="请选择行业">
            <i-option v-for="item in shopcates" :value="item.key" :key="item.key">{{ item.value }}</i-option>
          </i-select>
        </Form-item>

        <p style="text-align:left;font-size:10px"><span style="color:#62b900">注:</span>如果您想添加其他人分享的店铺,请添加'其他人的店铺'
          中添加店铺的分享码.
          分享码请向该店铺的拥有者索要.</p>
      </i-form>
    </Modal>        
</div>   
</template>
<script>
import api from '../../api/API'
import {mapGetters, mapActions} from 'vuex'
      export default{
        data(){
            return{
                addOtherShopModal:false,
                addMyShopModal:false,
                FirstShop:[],  
                FirstShopData:[],  
                province:'',//省
                city:'',//市
                area:'',//县
                select_Xian:'',
                select_Shi:'',
                select_Shen:'',
                detaile_addr:'',//具体地址    
                shopcates: [
                {key: 1, value: '餐饮'},
                {key: 2, value: '娱乐'},
                {key: 3, value: '服装鞋帽箱包'},
                {key: 4, value: '孕产母婴童装玩具'},
                {key: 5, value: '家电数码手机'},
                {key: 6, value: '美妆洗护保健'},
                {key: 7, value: '珠宝眼镜手表'},
                {key: 8, value: '运动户外'},
                {key: 9, value: '食品生鲜零食'},
                {key: 10, value: '鲜花'},
                {key: 11, value: '宠物'},
                {key: 12, value: '房产装修建材'},
                {key: 13, value: '家居家纺'},
                {key: 14, value: '汽车及其用品'},
                {key: 15, value: '办公'},
                {key: 16, value: '五金电子'},
                {key: 17, value: '百货'},
                {key: 18, value: '教育'},
                {key: 19, value: '其他'}
                ],                            
            }
        },
     mounted: function () {  
      if (!this.$store.getters.getStores.length) {
        this.$store.dispatch('fetchStores').then(() => {
              this.init()    
        })
      } else {
              this.init()
      }
    },       
       computed: mapGetters({
         stores: 'getStores',
       }),       
        methods:{
            init(){
                var dataall = JSON.stringify(this.stores);
                var data =JSON.parse(dataall);      
                    for(let i in data){
                        data[i]['value'] = data[i].id;
                        data[i]['label'] = data[i].name;   
                        var children = data[i].children;
                        if(typeof(children) !='undefined'){
                            var data1 =JSON.stringify(data[i]);
                            var data2 =JSON.parse(data1);
                            data2.children = '';
                            children.unshift(data2);
                        }  
                    for(let k in children){
                            children[k]['value'] = children[k].id;
                            children[k]['label'] = children[k].name;
                            children[k].children ='';
                    }      
                }        
                var firstsel = {
                    value:'0',
                    label:'作为一级店铺',
                    name:'作为一级店铺',
                    id:'0'
                }
                    data.unshift(firstsel);
                    this.FirstShopData = data; 
                    this.FirstShop = ['0'];
            },
         addMyshop(){//点击添加按钮
           this.addMyShopModal = true;
           var _this = this ;
            api.shopManage.getAreas('province',0,function(resp){
                 if(resp.status==1){
                   _this.province = resp.data;
                 }
            })
             },
            addDemoShop() {
                api.shopManage.addDemoShop((resp) => {
                this.$store.dispatch('fetchStores')
                this.$Message.success('添加成功');
                });
            },    
            addMyShopok() {//添加店铺
                        if (this.newShopName.length == 0) {
                        this.$Message.warning('请输入店铺名称');
                        return;
                        }
                        if (this.newShopCate.length == 0) {
                        this.$Message.warning('请选择行业');
                        return;
                        }   
                        if (this.select_Shen.length == 0 || this.select_Shi.length == 0 || this.select_Xian.length == 0) {
                        this.$Message.warning('请选择完整地址');
                        return;
                        }              
                        var pid = this.FirstShop;
                        api.shopManage.addShop(this.newShopName,
                                            this.newShopCate,
                                            '',
                                            pid[0],
                                            this.select_Shen,
                                            this.select_Shi,
                                            this.select_Xian,
                                            this.detaile_addr,
                                            (resp) => {
                        this.$Message.success('添加成功');
                        this.$store.dispatch('fetchStores');
                        this.clearMyShop();
                        })
             },  
            addOtherShopok() {
                if (this.newShopShareCode.length == 0) {
                this.$Message.warning('请输入分享码');
                return;
                }
                api.shopManage.addShop('','',this.newShopShareCode,'','','','','', (resp) => {
                  if(resp.status==1){
                      this.$Message.success('添加成功');
                      this.$store.dispatch('fetchStores')
                  }    
                })
            }, 
        onChangeList(val){
         var val = val.pop();
         this.FirstShop = [val];
        },
      Exhibition(labels,selectedData){
           if(labels==''){
             var data = this.stores;
             var def_sid = this.$store.getters.getDefId
             for(let i in data){
                  if(data[i].id ==def_sid){
                       return data[i].name;
                 }     
             }
           }else{
              return labels.pop();
           }
        },
        clearMyShop(val){
              this.newShopName = '';
              this.FirstShop = ['0'];
              this.detaile_addr = '';
              this.newShopCate = '';
              this.select_Xian = '';
              this.select_Shi = '';
              this.select_Shen = '';
        },
        sheng(val){//省选择操作
        var _this =this ;
            api.shopManage.getAreas('city',val,function(resp){
                 if(resp.status==1){
                   _this.city = resp.data;
                   _this.area = [];
                 }
            })
        },
        shi(val){//市选择操作
        var _this =this ;
            api.shopManage.getAreas('area',val,function(resp){
                 if(resp.status==1){
                   _this.area = resp.data;
                 }
            })
        },                                          
        }
      }
</script>