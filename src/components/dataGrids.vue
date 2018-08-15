<template>

    <Row style="margin-top:10px">
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="user_created_count1"
                            :end-val="this.renliu"
                            iconType="ios-people"
                            color="#0066CC"
                            intro-text="人流量">
                            </infor-card>
                    </Col>
                     <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="user_created_count2"
                            :end-val="this.keliu"
                            iconType="person-stalker"
                            color="#0081D2"
                            intro-text="客流量">
                            </infor-card>
                    </Col>
                     <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="user_created_count3"
                            :end-val="this.Nowcust"
                            iconType="person"
                            color="#06A7DD"
                            intro-text="当前店内顾客"></infor-card>
                    </Col>                                      
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="visit_count"
                            :end-val="this.new"
                            iconType="person-add"
                            color="#03DAE4"
                            :iconSize="50"
                            intro-text="新顾客">
                            </infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="collection_count"
                            :end-val="this.old"
                            iconType="android-favorite"
                            color="#00D2A8"
                            intro-text="老顾客">
                            </infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="12" :lg="4">
                        <infor-card
                            id-name="transfer_count"
                            :end-val="this.time"
                            iconType="clock"
                            color="#88D370"
                            intro-text="平均驻店时长(分钟)">
                            </infor-card>
                    </Col>
          </Row>   

    
</template>
<script>
   
  export default {
      data(){
            return{
                renliu:'',
                keliu:'',
                diannei:'',
                new:'',
                old:'',
                time:'',
            }
      },
    props: {
      DataHeaderList: {
        required: true,
      },
      Nowcust:{
        required: true,          
      }
    },
    components: {
         inforCard: require('./inforCard.vue'),
    },
    watch:{
        DataHeaderList(val){
            this.renliu=val.data.renliu[val.data.index[0]];
            this.keliu =val.data.keliu[val.data.index[0]];
            this.new = val.data.new_customes[val.data.index[0]];
            this.old = val.data.old_customes[val.data.index[0]];    
            this.time = val.data.avg_time[val.data.index[0]];
        }
    }
  }

</script>

