
<template>
    <div>
        <div id="heatmap_three" class="heatmapList"></div>
    </div>
</template>
<script type="text/javascript">
 	   var heatmap = require('heatmap');
       export default{
            props:{
                FourFloor:{
                  type:String,
                  require:true
                },
            },
            data(){
                return {

                }
            },
            mounted(){
 
            },
            watch:{
            FourFloor:function(val){
    //             $(function(){
    //       if(val>1){
    //         $('#heatmap_three').children().eq(0).remove()
    //       }
    //    var heatmapInstance = heatmap.create({  
    //     container: document.querySelector('#heatmap_three'),
    //     radius:40,
    //     });  

    //     var dataPoint1= {x: 380,y: 520,value: 0};//第一个点
    //     var dataPoint2= {x: 420,y: 520,value: 0};
    //     var dataPoint3= {x: 440,y: 520,value: 0};
    //     var dataPoint4= {x: 340,y: 520,value: 0};
    //     var dataPoint5= {x: 320,y: 520,value: 0};

    //     var dataPoint6= {x: 380,y: 550,value: 0};
    //     var dataPoint7= {x: 480,y: 550,value: 0};
    //     var dataPoint8= {x: 440,y: 550,value: 0};
    //     var dataPoint9= {x: 340,y: 550,value: 0};
    //     var dataPoint11= {x: 420,y: 550,value: 0};
    //     var dataPoint12= {x: 380,y: 480,value: 0};
    //     var dataPoint13= {x: 420,y: 480,value: 0};
    //     // var dataPoint14= {x: 440,y: 480,value: 30};
    //     var dataPoint15= {x: 340,y: 480,value: 0};
    //     var dataPoint16= {x: 320,y: 480,value: 0};
    //     var dataPoint66= {x:320,y: 570,value: 0};        
    //     var dataPoint67= {x:360,y: 570,value: 0};   
    //     var dataPoint68= {x:400,y: 570,value: 0};
    //     var dataPoint69= {x:440,y: 570,value: 0};
    //     var dataPoint70= {x:480,y: 570,value: 0};
    //     // var dataPoint71= {x:500,y: 560,value: 30};
    //     //////////////////////////////////////////////////
    //     var dataPoint17= {x:630,y: 480,value: 0};//第2个点
    //     var dataPoint18= {x:670,y: 480,value: 0};

    //     var dataPoint19= {x:630,y: 520,value: 0};
    //     var dataPoint20= {x:670,y: 520,value: 0};
    //     var dataPoint21= {x:600,y: 520,value: 0};

    //     var dataPoint22= {x:630,y: 440,value: 0};
    //     var dataPoint23= {x:670,y: 440,value: 0};

    //     var dataPoint72= {x:580,y: 540,value: 0};
    //     var dataPoint73= {x:540,y: 540,value: 0};
    //     var dataPoint74= {x:500,y: 540,value: 0};
    //     var dataPoint75= {x:520,y: 570,value: 0};
    //     var dataPoint76= {x:560,y: 570,value: 0};
    //     var dataPoint77= {x:600,y: 570,value: 0};
    //     var dataPoint78= {x:640,y: 560,value: 0}; 
    //     var dataPoint80= {x:660,y: 540,value: 0}; 

    //     var dataPoint24= {x: 610,y: 360,value: 0};//第三个点
    //     var dataPoint25= {x: 620,y: 390,value: 0};
    //     var dataPoint26= {x: 620,y: 410,value: 0};
    //     var dataPoint27= {x: 660,y: 390,value: 0};
    //     var dataPoint28= {x: 660,y: 410,value: 0};
    //     var dataPoint29= {x: 650,y: 360,value: 0};
    //     var dataPoint30= {x: 650,y: 320,value: 0};
    //     var dataPoint31= {x: 610,y: 320,value: 0};
    //     var dataPoint32= {x: 570,y: 320,value: 0};
    //     var dataPoint33= {x: 570,y: 360,value: 0};
    //     var dataPoint34= {x: 580,y: 370,value: 0};

    //     var dataPoint81= {x: 530,y: 370,value: 0};
    //     var dataPoint82= {x: 500,y: 370,value: 0};
    //     var dataPoint83= {x: 460,y: 370,value: 0};
    //     var dataPoint84= {x: 490,y: 330,value: 0};
    //     var dataPoint85= {x: 530,y: 330,value: 0};

    //     var dataPoint35= {x: 690,y: 200,value: 0};//第四个点
    //     var dataPoint36= {x: 690,y: 240,value: 0}
    //     var dataPoint37= {x: 720,y: 200,value: 0}
    //     var dataPoint38= {x: 720,y: 240,value: 0}
    //     var dataPoint39= {x: 660,y: 240,value: 0}
    //     var dataPoint40= {x: 660,y: 200,value: 0}
    //     var dataPoint41= {x: 640,y: 200,value: 0}
    //     var dataPoint42= {x: 640,y: 240,value: 0}

    //     var dataPoint43= {x: 740,y: 200,value: 0}
    //     var dataPoint44= {x: 740,y: 240,value: 0}
    //     var dataPoint45= {x: 710,y: 280,value: 0}
    //     var dataPoint46= {x: 740,y: 280,value: 0}
    //     var dataPoint47= {x: 690,y: 280,value: 0}
    //     var dataPoint48= {x: 660,y: 280,value: 0}
    //     var dataPoint49= {x: 630,y: 280,value: 0}


    //     var dataPoint50= {x: 390,y: 390,value:0}//第五个点
    //     var dataPoint51= {x: 350,y: 390,value:0}
    //     var dataPoint52= {x: 330,y: 390,value:0}
    //     var dataPoint53= {x: 430,y: 390,value:0}
    //     var dataPoint54= {x: 440,y: 390,value:0}

    //     var dataPoint55= {x: 390,y: 430,value:0}
    //     var dataPoint56= {x: 350,y: 430,value:0}
    //     var dataPoint57= {x: 330,y: 430,value:0}
    //     var dataPoint58= {x: 430,y: 430,value:0}
    //     var dataPoint59= {x: 420,y: 470,value:0}
    //     var dataPoint60= {x: 390,y: 470,value:0}

    //     var dataPoint61= {x: 390,y: 350,value:0}
    //     var dataPoint62= {x: 350,y: 350,value:0}
    //     var dataPoint63= {x: 330,y: 350,value:0}
    //     var dataPoint64= {x: 430,y: 350,value:0}
    //     var dataPoint65= {x: 450,y: 350,value:0}
    //     //多个数据点的添加方式  
    //     var dataPoints = [dataPoint1,dataPoint2,dataPoint3,dataPoint4,dataPoint5,dataPoint6,dataPoint7,dataPoint8,dataPoint9,dataPoint11,dataPoint12,dataPoint13,dataPoint15,dataPoint16,dataPoint17,dataPoint18,dataPoint19,dataPoint20,dataPoint21,dataPoint22,dataPoint23,dataPoint24,dataPoint25,dataPoint26,dataPoint27,dataPoint28,dataPoint29,dataPoint30,dataPoint31,dataPoint32,dataPoint33,dataPoint34,dataPoint35,dataPoint36,dataPoint37,dataPoint38,dataPoint39,dataPoint40,dataPoint41,dataPoint42,dataPoint43,dataPoint44,dataPoint45,dataPoint46,dataPoint47,dataPoint48,dataPoint49,dataPoint50,dataPoint51,dataPoint52,dataPoint53,dataPoint54,dataPoint55,dataPoint56,dataPoint57,dataPoint58,dataPoint59,dataPoint60,dataPoint61,dataPoint62,dataPoint63,dataPoint64,dataPoint65,dataPoint66,dataPoint67,dataPoint68,dataPoint69,dataPoint70,dataPoint72,dataPoint73,dataPoint74,dataPoint75,dataPoint76,dataPoint77,dataPoint78,dataPoint80,dataPoint81,dataPoint82,dataPoint83,dataPoint84,dataPoint85];  
    //     heatmapInstance.addData(dataPoints);  
    //             })
          }
        }
        }
</script>