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
          <i-col span='4' class="ShopOrDate"  style="float:left">
                <div class="slecontainer">
                  <Date-picker @on-change='selDate' v-model="selectedDate" type="date" placeholder="选择日期"
                              class="ShopOrDate" :clearable="false"></Date-picker>
                </div>
        </i-col>          
      </div>
    </row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return {
        selStore: '',
        selectedDate: new Date(),
        value2:[sessionStorage.getItem('def_sid')], 
        shopData: [],      
        cos:'',
        bgtime:false,
        flog:false,
      }
    },
    mounted: function () {
      if (!this.$store.getters.getStores.length) {
        // this.$store.dispatch('fetchStores',).then(() => {
        //    this.init();
        // })
       }else{
             this.init();
      }
    },
    computed: mapGetters({
      stores: 'getStores',
    }),
    methods: {
      init(){
           var def_sid = sessionStorage.getItem('def_sid');
           if(def_sid==null){
              def_sid = this.$store.getters.getDefId
           }
           this.$emit('seldevice', def_sid);
           this.shopManssge();
           this.value2=[def_sid];
      },
      shopManssge(){
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
        this.$emit('seldate', selectedDay)
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
      stores(val){
        //  this.shopManssge();
        this.init();
      }
    }
  }
</script>
