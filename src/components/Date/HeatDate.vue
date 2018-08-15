<template>
  <div>
    <row>

  <div style="text-align:center;margin:0 10px;float:right;width:100%"> 
        <i-col span='4' class="ShopOrDate" style="float:left;margin-right:20px">
            <Cascader :data="shopData"
                       trigger='hover'
                       @on-change="onChange" 
                       :load-data="loadData"
                        filterable
                        v-model="value2" 
                        placeholder="请选择店铺或者输入店铺名称"
                        :render-format="Exhibition"
                        :clearable="false"
                        >
            </Cascader>
        </i-col>
          <i-col span='4' class="ShopOrDate" style="float:left">
            <div class="slecontainer">
              <Date-picker @on-change='selDate' v-model="selectedDate" type="date" placeholder="选择日期"
                         ></Date-picker>
            </div>
          </i-col>  
      </div>
    </row>
  </div>
</template>

<script>
  import api from '../../api/API'
  import loading from '../loading'
  import {mapGetters, mapActions} from 'vuex'

  export default{
    props:{
      SelectedId:{
        type:String,
        require:true
      },    
    },
    data(){
      return {
        selectedDate: new Date(),
        stores:'',
        value2:[], 
        shopData: [],           
      }
    },
    mounted: function () {
        var _this = this ;
        var arrdp = [];
         api.shopManage.queryShop('thermodynamicChart',true,function(resp){
	         if(resp.status==1){
               var a = resp.data;
              a.forEach(function(item){
                  if(item.thermodynamic_url !=''){
                    arrdp.push(item);
                  }
              })
		          _this.stores = arrdp;
              _this.value2  = [arrdp[0].id];   
              var arr = [];
              var arr2 = [];
              var arr3 = [];
              arrdp.forEach(function(item,index){
                if(item.thermodynamic_url !=''){
                   arr.push(item.id);
                   arr2.push(item.name);  
                   arr3.push(item.thermodynamic_url);
                }
              });
              _this.init();
                _this.$emit('No-authority',arr,arr2,arr3); 
                _this.$emit('seldevice',arrdp[0].id)
               
	          }else{
	              _this.$emit('No-authority','');
	          }
         })
     },
    methods: {
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
                      var childrenList = children[k].children;
                      if(typeof(childrenList) !='undefined' && childrenList!=''){
                        let data3 =JSON.stringify(children[k]);
                        let data4 =JSON.parse(data3);
                        data4.children = '';
                        childrenList.unshift(data4);
                      }
                        for(let p in childrenList){
                          childrenList[p]['value'] = childrenList[p].id;
                          childrenList[p]['label'] = childrenList[p].name;
                        }    
              }      
           }
            this.shopData =  data
      },         
      selDate: function (selectedDay) {
        this.$emit('seldate', selectedDay);
      },
      onChange: function (val) {
        var val = val.pop();
        this.value2 = [val];
        this.$emit('seldevice', val)
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
      }

    },
    watch:{
      SelectedId(val){
       this.value2  = [val];
      },
      stores(val){
       this.init();
      }
    }
  }
</script>
