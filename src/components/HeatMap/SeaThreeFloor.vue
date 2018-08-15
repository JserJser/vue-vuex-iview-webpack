
<template>
    <div>
        <div id="heatmap_two" class="heatmapList"></div>
    </div>
</template>
<script type="text/javascript">
 	   var heatmap = require('heatmap');
       export default{
            props:{
                ThreeFloor:{
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
            ThreeFloor:function(val){
    //             $(function(){
    //   if(val>1){
    //     $('#heatmap_two').children().eq(0).remove()
    //   }
    //   var heatmapInstance1 = heatmap.create({  
    //         container: document.querySelector('#heatmap_two'),
    //         radius:40,  
    //   });
    //    heatmapInstance1.repaint()
    //     var dataPoint1= {x:415,y :470,value :0};//第一个点
    //     var dataPoint2= {x:375,y :470,value :0};
    //     var dataPoint3= {x:375,y :510,value :0};
    //     var dataPoint4= {x:415,y :510,value: 0};
    //     var dataPoint5= {x:445,y :510,value :0};
    //     var dataPoint6= {x:425,y :430,value :0};
    //     var dataPoint7= {x:375,y :430,value :0};
    //     var dataPoint16= {x:405,y :435,value :0}
    //     var dataPoint110= {x:400,y :400,value :0};
    //     var dataPoint111= {x:430,y :400,value :0};
    //     var dataPoint112= {x:400,y :400,value :0};
    //     var dataPoint113= {x:430,y :400,value :0}; 

    //     var dataPoint127= {x:415,y :590,value :0};   
    //     var dataPoint128= {x:415,y :590,value :0};   
    //     var dataPoint129= {x:415,y :590,value :0}; 

    //     var dataPoint130= {x:385,y :570,value :0}; 
    //     var dataPoint131= {x:455,y :590,value :0}; 
    //     var dataPoint132= {x:495,y :590,value :0}; 
    //     var dataPoint133= {x:535,y :590,value :0}; 

    //     var dataPoint8= {x:460,y: 530,value: 0};//第二个点
    //     var dataPoint9= {x: 420,y :540,value: 0};
    //     var dataPoint10= {x: 500,y :540,value :0};
    //     var dataPoint11= {x :500,y: 570,value :0};
    //     var dataPoint12= {x :420,y: 570,value: 0};
    //     var dataPoint13= {x :460,y: 570,value :0};
    //     var dataPoint14= {x: 390,y: 550,value :0};
    //     var dataPoint15= {x :490,y :525,value :0};
    //     var dataPoint133= {x:555,y :590,value :0}; 
    //     var dataPoint134= {x:595,y :590,value :0}; 
    //     var dataPoint135= {x:635,y :590,value :0}; 
    //     var dataPoint136= {x:675,y :590,value :0}; 


    //     var dataPoint17= {x :620,y: 530,value: 0};//第三个点
    //     var dataPoint18= {x :580,y: 530,value :0};
    //     var dataPoint19= {x: 540,y: 530,value: 0};
    //     var dataPoint20= {x: 540,y: 570,value: 0};
    //     var dataPoint21= {x: 580,y: 570,value :0};
    //     var dataPoint23= {x: 620,y: 570,value: 0};
    //     var dataPoint24= {x: 660,y: 575,value :0};
    //     var dataPoint25= {x: 660,y: 545,value: 0};
    //     var dataPoint26= {x: 700,y: 575,value :0};
    //     var dataPoint27= {x: 700,y: 545,value :0};        
      

    //     var dataPoint28= {x: 790,y :550,value :0};//第三个点
    //     var dataPoint29= {x: 750,y :550,value: 0};
    //     var dataPoint30= {x :750,y :590,value :0};
    //     var dataPoint31= {x :790,y :590,value :0};
    //     var dataPoint32= {x: 730,y: 570,value :0}; //下部
    //     var dataPoint33= {x: 745,y :515,value :0};     
    //     var dataPoint34= {x: 760,y: 515,value :0};      
    //     // var dataPoint35= {x: 720,y: 525,value :30};  
    //     var dataPoint36= {x: 830,y :545,value :0};  
    //     var dataPoint37= {x: 830,y: 565,value :0}; 
    //     var dataPoint38= {x: 830,y: 590,value :0};   
    //     var dataPoint39= {x: 860,y :590,value :0};  
    //     var dataPoint40= {x: 860,y :560,value :0};   
    //     // var dataPoint137= {x:720,y :490,value :90};  
    //     var dataPoint138= {x:760,y :490,value :0}; 

    //     var dataPoint41= {x: 980,y :530,value: 0};//第四个点
    //     var dataPoint42= {x: 940,y: 550,value: 0};
    //     var dataPoint43= {x :900,y :550,value :0};
    //     var dataPoint44= {x: 900,y :590,value :0};
    //     var dataPoint45= {x: 940,y :590,value :0};
    //     var dataPoint46= {x: 980,y: 590,value: 0}; 
    //     var dataPoint47= {x: 980,y: 570,value :0};  
    //     var dataPoint48= {x: 1020,y: 570,value: 0};    
    //     var dataPoint49= {x: 1020,y: 530,value: 0};        
    //     var dataPoint50= {x: 1020,y: 550,value: 0};            
    //     var dataPoint51= {x: 1020,y: 500,value: 0};      
    //     var dataPoint52= {x: 980,y: 500,value: 0};    

        
      
    //     var dataPoint53= {x: 1000,y: 400,value :0};//:第五个点  
    //     var dataPoint54= {x: 1000,y: 440,value :0};    
    //     var dataPoint55= {x: 980,y: 470,value :0};  
    //     var dataPoint56= {x: 1020,y: 480,value :0}; 

    //     var dataPoint57= {x: 1040,y: 440,value: 0};        
    //     var dataPoint58= {x: 1040,y: 400,value :0};       
    //     var dataPoint59= {x: 960,y: 400,value: 0}; 
    //     var dataPoint60= {x: 940,y: 400,value: 0}; 
    //     var dataPoint61= {x: 940,y: 440,value: 0};    
    //     var dataPoint62= {x: 960,y: 440,value :0}; 

    //     var dataPoint63= {x :1000,y: 360,value: 0};   
    //     var dataPoint64= {x: 1040,y: 360,value: 0};   
    //     var dataPoint65= {x: 960,y: 360,value: 0};     

    //     var dataPoint66= {x: 830,y: 400,value :0};//:第六个点
    //     var dataPoint67= {x :870,y: 400,value: 0};
    //     var dataPoint68= {x: 900,y :400,value: 0};
    //     var dataPoint69= {x: 790,y: 400,value: 0};   
    //     var dataPoint70= {x: 750,y: 400,value :0};
    //     var dataPoint71= {x: 750,y: 360,value :0};
    //     var dataPoint72= {x: 790,y: 360,value: 0};
    //     var dataPoint73= {x: 830,y: 360,value: 0};
    //     var dataPoint74= {x: 870,y: 360,value :0};
    //     var dataPoint75= {x: 900,y: 360,value :0};
    //     var dataPoint76= {x: 930,y: 360,value :0};
    //      var dataPoint125= {x: 720,y: 440,value :0};
    //     var dataPoint126= {x: 750,y: 440,value :0};
    //      var dataPoint139= {x:760,y:480,value :0}; 

    //     var dataPoint77= {x: 680,y :210,value: 0};//第七个点
    //     var dataPoint78= {x: 720,y :210,value :0};
    //     var dataPoint79= {x: 640,y :210,value :0};
    //     var dataPoint80= {x: 640,y :250,value: 0};
    //     var dataPoint80= {x: 720,y :250,value: 0};
    //     var dataPoint81= {x: 640,y :250,value :0};

    //     var dataPoint115= {x: 680,y: 260,value :0};
    //      var dataPoint116= {x: 720,y: 270,value :0};
    //     var dataPoint117= {x: 720,y: 300,value :0};
    //     var dataPoint118= {x: 680,y: 270,value :0};
    //     var dataPoint119= {x: 640,y: 270,value :0};
    //     var dataPoint120= {x: 600,y: 270,value :0};

    //     var dataPoint121= {x: 600,y: 300,value :0};
    //     var dataPoint122= {x: 640,y: 300,value :0};
    //     var dataPoint123= {x: 680,y: 300,value :0};
    //     var dataPoint124= {x: 750,y: 300,value :0};

    //      var dataPoint82= {x :645,y :370,value: 0};//第八个点
    //      var dataPoint83= {x :685,y: 370,value: 0};
    //      // var dataPoint84= {x: 695,y: 370,value: 30};
    //      var dataPoint85= {x: 735,y: 370,value: 0};
    //      // var dataPoint86= {x: 615,y :370,value: 30};
    //      var dataPoint87= {x: 595,y: 370,value: 0};

    //      // var dataPoint88= {x: 645,y: 410,value: 30};
    //      // var dataPoint89= {x: 685,y: 400,value: 30};
    //      // var dataPoint90= {x: 695,y: 400,value: 30};
    //      // var dataPoint91= {x: 735,y :400,value: 30};
    //      // var dataPoint92= {x: 615,y: 400,value :30};
    //      // var dataPoint93= {x: 595,y: 400,value: 30};    
    //      var dataPoint88= {x: 705,y: 400,value: 0};
    //      var dataPoint94= {x: 645,y: 330,value: 0};
    //      var dataPoint95= {x :685,y: 340,value: 0};
    //      // var dataPoint96= {x: 695,y: 340,value: 30};
    //      var dataPoint97= {x: 735,y: 340,value: 0};
    //      var dataPoint98= {x: 615,y: 340,value: 0};
    //      var dataPoint99= {x: 595,y: 340,value: 0}; 

    //      var dataPoint100= {x: 460,y: 370,value :0};//第九个点
    //      var dataPoint101= {x :490,y: 370,value :0};
    //      var dataPoint102= {x: 520,y: 370,value :0};
    //      var dataPoint103= {x: 430,y: 370,value :0};
    //      var dataPoint104= {x: 400,y :370,value :0};

    //      var dataPoint105= {x: 460,y: 330,value :0};
    //      var dataPoint106= {x: 490,y: 330,value :0};
    //      var dataPoint107= {x: 520,y: 330,value :0};
    //      var dataPoint108= {x: 430,y: 330,value :0};
    //      var dataPoint109= {x: 400,y: 330,value :0};

    //      var dataPoint112= {x:560,y: 330,value: 0};   
    //   var dataPoint113= {x:560,y: 370,value :0};   
    //       // var dataPoint114= {x:560,y :400,value: 30};   

    //  //   多个数据点的添加方式  
    //     var dataPoints1 = [dataPoint1,dataPoint2,dataPoint3,dataPoint4,dataPoint5,dataPoint6,dataPoint7,dataPoint8,dataPoint9,dataPoint10,
    //                       dataPoint11,dataPoint12,dataPoint13,dataPoint14,dataPoint15,dataPoint16,dataPoint17,dataPoint18,dataPoint19,dataPoint20,
    //                       dataPoint21,dataPoint23,dataPoint24,dataPoint25,dataPoint26,dataPoint27,dataPoint28,dataPoint29,dataPoint30,dataPoint31,
    //                       dataPoint32,dataPoint33,dataPoint34,dataPoint36,dataPoint37,dataPoint38,dataPoint39,dataPoint40,dataPoint41,
    //                       dataPoint42,dataPoint43,dataPoint44,dataPoint45,dataPoint46,dataPoint47,dataPoint48,dataPoint49,dataPoint50,dataPoint51,
    //                       dataPoint52,dataPoint53,dataPoint54,dataPoint55,dataPoint56,dataPoint57,dataPoint58,dataPoint59,dataPoint60,dataPoint61,
    //                       dataPoint62,dataPoint63,dataPoint64,dataPoint65,dataPoint66,dataPoint67,dataPoint68,dataPoint69,dataPoint70,dataPoint71,
    //                       dataPoint72,dataPoint73,dataPoint74,dataPoint75,dataPoint76,dataPoint77,dataPoint78,dataPoint79,dataPoint80,dataPoint81,
    //                       dataPoint82,dataPoint83,dataPoint85,dataPoint87,dataPoint88,dataPoint94,dataPoint95,dataPoint97,dataPoint98,dataPoint99,dataPoint100,dataPoint101,
    //                       dataPoint102,dataPoint103,dataPoint104,dataPoint105,dataPoint106,dataPoint107,dataPoint108,dataPoint109,dataPoint110,dataPoint111,dataPoint112,dataPoint113,dataPoint115,dataPoint116,dataPoint117,dataPoint118,dataPoint119,dataPoint120,dataPoint121,dataPoint122,dataPoint123,dataPoint124,dataPoint125,dataPoint126,dataPoint127,dataPoint130,dataPoint131,dataPoint132,dataPoint133,dataPoint134,dataPoint135,dataPoint136,dataPoint138,dataPoint139];  
    //       heatmapInstance1.addData(dataPoints1);            
   
    //             })
          }
        }
        }
</script>