
<template>
    <div>
        <div id="heatmap_one" class="heatmapList"></div>
    </div>
</template>
<script type="text/javascript">
     	   var heatmap = require('heatmap');
       export default{
            props:{
                TwoFloor:{
                  type:String,
                  require:true
                },
            },
            data(){
                return {
                  sindex:-200+0,
                  numb:0,
                  numData:'',                  
                }
            },
            methods:{
            getNum(n,m){
              var c = m-n+1; 
              return Math.floor(Math.random() * c + n);
            },                
             sf(val,dataval,num){  
                if(this.numb<1){
                  this.numData = num;
                }          
                this.numb = this.numb+1;	    
                          
                var oneVal   = 0;//第一个点最接近
                var twoVal   = parseInt(val['26e83f'].renliu);//第二个点最接近
                var threeVal = parseInt(val['aca8c8'].renliu);//第三个点最接近
                var fourVal  = parseInt(val['a2a8b4'].renliu);//第四个点最接近
                var fiveVal  = parseInt(val['f18c56'].renliu);//第五个点最接近
                var sixVal   = parseInt(val['a22475'].renliu);//第六个点最接近
                var sevenVal = parseInt(val['26e930'].renliu);//第七个点最接近        
                var eightVal = 0
                var nightVal = parseInt(val['a29b77'].renliu);//第九个点最接近        
                var tenVal   = parseInt(val['304d63'].renliu);//第十个点最接近    
                var arr = [] ;
                var arr1 = [];
                arr.push(oneVal,twoVal,threeVal,fourVal,fiveVal,sixVal,sevenVal,eightVal,nightVal,tenVal);
           for(let i in arr){
                  if(arr[i] !=0){
                    arr1.push(arr[i]);
                  }
                } 
                var arr3 = arr1.sort((a,b) => a > b).reverse();
                var index = arr3.indexOf(dataval);
				    		if(index==0){
                  if(arr3[0]<6){
                    return 0;
                  }else{					
                    return this.numData[0];
                  }	
				    		}else if(index ==1 ||index==2){
				    			return this.numData[1];
				    		}else if(index==3 || index ==4){
				    			return this.numData[2];
				    		}else if (index==5 || index ==6) {
				    			return this.numData[3];
				    		}else if (index ==7 || index ==8){
				    			return this.numData[4];
				    		}else if (index ==9 || index ==10){
				    			return this.numData[5];
				    		}else if(index == -1){
				    			return 0
				    		}else {
				    			return this.numData[6]; ;
				    		}        
                }  
            },
            watch:{
            TwoFloor:function(val){  
                var oneVal   =0;//第一个点最接近
                var twoVal   = parseInt(val['26e83f'].renliu);//第二个点最接近
                var threeVal = parseInt(val['aca8c8'].renliu);//第三个点最接近
                var fourVal  = parseInt(val['a2a8b4'].renliu);//第四个点最接近
                var fiveVal  = parseInt(val['f18c56'].renliu);//第五个点最接近
                var sixVal   = parseInt(val['a22475'].renliu);//第六个点最接近
                var sevenVal = parseInt(val['26e930'].renliu);//第七个点最接近        
                var eightVal = 0
                var nightVal = parseInt(val['a29b77'].renliu);//第九个点最接近        
                var tenVal   = parseInt(val['304d63'].renliu);//第十个点最接近   

                var all = oneVal+twoVal+threeVal+fourVal+fiveVal+sixVal+sevenVal+eightVal+nightVal+tenVal ; 
              	var arr =[];
			  				arr.push(this.getNum(60,70),this.getNum(50,60),this.getNum(40,50),this.getNum(30,40),this.getNum(20,30),this.getNum(10,20),this.getNum(0,10));                    
      
      				if(all>6){
								var radius = 40;
								var oneVal_1 = arr[3]
                var sixVal_1 = arr[1];
                 var tenVal_1 =arr[3];
							}else{
								var radius = -10;
								var oneVal_1 = 0;
                var sixVal_1 = 0;
                var tenVal_1 = 0;			
              }
              
                var oneVal_2 = oneVal_1*.9 ;//第二近;
                var oneVal_3 = oneVal_1*.8 ; //第三近;
                var oneVal_4 = oneVal_1*.7 ;//最边缘

                  var twoVal_1 = this.sf(val,twoVal,arr);
                  var twoVal_2 = twoVal_1*.9 ;//第二近;
                  var twoVal_3 = twoVal_1*.8 ; //第三近;
                  var twoVal_4 = twoVal_1*.7 ;//最边缘 

                  var threeVal_1 = this.sf(val,threeVal,arr);
                  var threeVal_2 = threeVal_1*.9 ;//第二近;
                  var threeVal_3 = threeVal_1*.8 ; //第三近;
                  var threeVal_4 = threeVal_1*.7 ;//最边缘  

                  var fourVal_1 = this.sf(val,fourVal,arr);
                  var fourVal_2 = fourVal_1*.9 ;//第二近;
                  var fourVal_3 = fourVal_1*.8 ; //第三近;
                  var fourVal_4 = fourVal_1*.7 ;//最边缘    

                  var fiveVal_1 = this.sf(val,fiveVal,arr);
                  var fiveVal_2 = fiveVal_1*.9 ;//第二近;
                  var fiveVal_3 = fiveVal_1*.8 ; //第三近;
                  var fiveVal_4 = fiveVal_1*.7 ;//最边缘   

                  var sixVal_2 = sixVal_1*.9 ;//第二近;
                  var sixVal_3 = sixVal_1*.8 ; //第三近;
                  var sixVal_4 = sixVal_1*.7 ;//最边缘  

                  var sevenVal_1 = this.sf(val,sevenVal,arr);
                  var sevenVal_2 = sevenVal_1*.9 ;//第二近;
                  var sevenVal_3 = sevenVal_1*.8 ; //第三近;
                  var sevenVal_4 = sevenVal_1*.7 ;//最边缘      

                  var eightVal_1 = this.sf(val,eightVal,arr);
                  var eightVal_2 = eightVal_1*.9 ;//第二近;
                  var eightVal_3 = eightVal_1*.8 ; //第三近;
                  var eightVal_4 = eightVal_1*.7 ;//最边缘     

                  var nightVal_1 = this.sf(val,nightVal,arr);
                  var nightVal_2 = nightVal_1*.9 ;//第二近;
                  var nightVal_3 = nightVal_1*.8 ; //第三近;
                  var nightVal_4 = nightVal_1*.7 ;//最边缘       

                  var tenVal_2 = tenVal_1*.9 ;//第二近;
                  var tenVal_3 = tenVal_1*.8 ; //第三近;
                  var tenVal_4 = tenVal_1*.7 ;//最边缘       
                               
      $(function(){
        var heatmapInstance1 = heatmap.create({  
            container:document.querySelector('#heatmap_one'),
            radius:radius,  
       });
       heatmapInstance1.repaint()
        var dataPoint1= {x:-200+415,y :470,value :oneVal_3};//第一个点
        var dataPoint2= {x:-200+375,y :470,value :oneVal_3};
        var dataPoint3= {x:-200+375,y :510,value :oneVal_3};
        var dataPoint4= {x:-200+415,y :510,value: oneVal_3};
        var dataPoint5= {x:-200+445,y :510,value :oneVal_3};
        var dataPoint6= {x:-200+425,y :430,value :oneVal_3};
        var dataPoint7= {x:-200+375,y :430,value :oneVal_3};
        var dataPoint16= {x:-200+405,y :435,value :oneVal_3}
        var dataPoint110= {x:-200+400,y :400,value :oneVal_3};
        var dataPoint111= {x:-200+430,y :400,value :oneVal_3};
        var dataPoint112= {x:-200+400,y :400,value :oneVal_3};
        var dataPoint113= {x:-200+430,y :400,value :oneVal_3}; 

        var dataPoint127= {x:-200+415,y :590,value :oneVal_3};   
        var dataPoint128= {x:-200+415,y :590,value :oneVal_3};   
        var dataPoint129= {x:-200+415,y :590,value :oneVal_3}; 

        var dataPoint130= {x:-200+385,y :570,value :oneVal_3}; 
        var dataPoint131= {x:-200+455,y :590,value :oneVal_3}; 
        var dataPoint132= {x:-200+495,y :590,value :oneVal_3}; 
        var dataPoint283= {x:-200+535,y :590,value :oneVal_3}; 

        var dataPoint8=  {x:-200+470,y: 620,value:twoVal_3};//第二个点

        var dataPoint10= {x:-200+420,y :620,value:twoVal_3};
        var dataPoint11= {x:-200+405,y: 620,value:twoVal_3};
        var dataPoint12= {x:-200+550,y: 620,value:twoVal_3};

        var dataPoint13=  {x:-200+470,y: 580,value :twoVal_3};
        var dataPoint14=  {x:-200+510,y: 580,value :twoVal_3};
        var dataPoint15=  {x:-200+415,y :580,value :twoVal_3};
        var dataPoint133= {x:-200+405,y :580,value :twoVal_3};

        var dataPoint134= {x:-200+530,y :580,value :twoVal_3};
        var dataPoint275= {x:-200+530,y :600,value :twoVal_3};
        var dataPoint276= {x:-200+530,y :620,value :twoVal_3};

        var dataPoint135= {x:-200+470,y :540,value :twoVal_3}; 
        var dataPoint136= {x:-200+680,y :580,value :twoVal_3}; 
        var dataPoint140= {x:-200+415,y :540,value :twoVal_3}; 
        var dataPoint141= {x:-200+405,y :540,value :twoVal_3}; 
        var dataPoint142= {x:-200+550,y :540,value :twoVal_3}; 

        var dataPoint143= {x:-200+415,y :500,value :twoVal_3}; 
        var dataPoint144= {x:-200+450,y :510,value :twoVal_3}; 

        var dataPoint194 = {x:-200+440,y :540,value :twoVal_3};
        var dataPoint195 = {x:-200+460,y :540,value :twoVal_3};

        var dataPoint196 = {x:-200+415,y :480,value :twoVal_3};
        var dataPoint197 = {x:-200+415,y :460,value :twoVal_3};

        var dataPoint198 = {x:-200+500,y :540,value :twoVal_3};
        var dataPoint199 = {x:-200+680,y :540,value :twoVal_3};
        var dataPoint200 = {x:-200+600,y :540,value :twoVal_3};

        var dataPoint201 = {x:-200+540,y :540,value :twoVal_3};
        var dataPoint202 = {x:-200+580,y :540,value :twoVal_3};
        var dataPoint203 = {x:-200+640,y :540,value :twoVal_3};




        var dataPoint23= {x:-200+ 570,y: 600,value:threeVal_3};//第三个点

        var dataPoint26= {x:-200+ 650,y: 600,value:threeVal_3};


        var dataPoint25= {x:-200+ 630,y: 625,value:threeVal_3};  

        var dataPoint207 = {x:-200+610,y :570,value :threeVal_3};
        var dataPoint208 = {x:-200+640,y :570,value :threeVal_3};
     

        var dataPoint204 = {x:-200+620,y :520,value :threeVal_1};
        var dataPoint205 = {x:-200+640,y :520,value :threeVal_3};
 

         var dataPoint249= {x:-200+680,y :620,value :threeVal_3}; 
         var dataPoint250= {x:-200+680,y :600,value :threeVal_3}; 


        var dataPoint28= {x:-200+ 770,y :680,value :fourVal_3};//4
        var dataPoint29= {x:-200+ 730,y :680,value: fourVal_3};

        var dataPoint284 = {x:-200+ 730,y :500,value: fourVal_3};
        var dataPoint285 = {x:-200+ 750,y :500,value: fourVal_3};
         var dataPoint286 = {x:-200+ 760,y :480,value: fourVal_3};

        var dataPoint31= {x :840,y :680,value :fourVal_3};
        var dataPoint33= {x:-200+ 770,y :640,value :fourVal_3};            
        var dataPoint35= {x:-200+ 810,y: 640,value :fourVal_3};  

        var dataPoint38= {x:-200+ 770,y :610,value :fourVal_3};   
        var dataPoint39= {x:-200+ 730,y :610,value :fourVal_3};  
 
        var dataPoint137= {x:-200+840,y :610,value :fourVal_3};  
  

        var dataPoint152= {x:-200+770,y :580,value :fourVal_3};
    
        var dataPoint154= {x:-200+810,y :580,value :fourVal_3};

        var dataPoint156= {x:-200+870,y :610,value :fourVal_3};
        var dataPoint157= {x:-200+870,y :580,value :fourVal_3};
        var dataPoint158= {x:-200+870,y :640,value :fourVal_3};

        var dataPoint159= {x:-200+870,y :540,value :fourVal_3};
        var dataPoint160= {x:-200+730,y :540,value :fourVal_3};

        var dataPoint162= {x:-200+810,y :540,value :fourVal_3};
        var dataPoint163= {x:-200+840,y :540,value :fourVal_3};

        var dataPoint210= {x:-200+860,y :540,value :fourVal_3}; 
        var dataPoint211= {x:-200+820,y :540,value :fourVal_3};

        var dataPoint212= {x:-200+890,y :540,value :fourVal_3}; 
        var dataPoint213= {x:-200+800,y :540,value :fourVal_3}; 
        var dataPoint214= {x:-200+780,y :540,value :fourVal_3}; 
        var dataPoint215= {x:-200+740,y :540,value :fourVal_3};
        var dataPoint215= {x:-200+740,y :540,value :fourVal_3}; 

        var dataPoint41= {x:-200+ 1000,y:600,value:fiveVal_3};//5
        // var dataPoint42= {x:-200+ 1040,y:600,value:fiveVal_3};
        var dataPoint43= {x:-200+ 960,y:600,value:fiveVal_3};
        var dataPoint44= {x:-200+ 1080,y:600,value:fiveVal_3};

        var dataPoint45= {x:-200+ 920,y:600,value:fiveVal_3};
        var dataPoint46= {x:-200+ 900,y:600,value:fiveVal_3}; 

        var dataPoint47= {x:-200+ 1000,y: 560,value:fiveVal_3};  
        var dataPoint48= {x:-200+ 1040,y: 560,value: fiveVal_3};         
        var dataPoint50= {x:-200+ 1080,y: 560,value: fiveVal_3};  

        var dataPoint164= {x:-200+ 1000,y: 520,value: fiveVal_3};  
        var dataPoint165= {x:-200+ 1040,y: 520,value: fiveVal_3};  
        var dataPoint166= {x:-200+ 960,y: 520,value: fiveVal_3};  

        var dataPoint216 = {x:-200+ 980,y: 520,value: fiveVal_3}; 
        var dataPoint217 = {x:-200+ 1020,y: 520,value: fiveVal_3}; 
        var dataPoint218 = {x:-200+ 1050,y: 530,value: fiveVal_3}; 
        var dataPoint219 = {x:-200+ 940,y: 540,value: fiveVal_3}; 


        var dataPoint169= {x:-200+ 1070,y: 640,value: fiveVal_3};  

        var dataPoint170= {x:-200+ 1030,y: 670,value: fiveVal_3};  
      
      
        var dataPoint53= {x:-200+ 1000,y: 400,value :sixVal_3};//:6  
        var dataPoint54= {x:-200+ 1000,y: 440,value :sixVal_3};    
        var dataPoint55= {x:-200+ 980,y: 470,value :sixVal_3};  
        var dataPoint56= {x:-200+ 1020,y: 480,value :sixVal_3}; 

        var dataPoint57= {x:-200+ 1040,y: 440,value:sixVal_3};        
        var dataPoint58= {x:-200+ 1040,y: 400,value :sixVal_3};    

        var dataPoint251 = {x:-200+ 1040,y: 280,value :sixVal_3};
        var dataPoint252 = {x:-200+ 1040,y: 340,value :sixVal_3};
        var dataPoint253 = {x:-200+ 1040,y: 320,value :sixVal_3};
        var dataPoint254 = {x:-200+ 1040,y: 300,value :sixVal_3};

        // var dataPoint262 = {x:-200+ 1040,y: 440,value :sixVal_4};
        var dataPoint255 = {x:-200+ 1040,y: 420,value :sixVal_3};

        var dataPoint256 = {x:-200+ 1040,y: 220,value :sixVal_3};
        var dataPoint257 = {x:-200+ 1040,y: 200,value :sixVal_3};
        var dataPoint258 = {x:-200+ 1020,y: 200,value :sixVal_3};
        // var dataPoint259 = {x:-200+ 1060,y: 200,value :sixVal_3};
        var dataPoint260 = {x:-200+ 1080,y: 200,value :sixVal_3};
        var dataPoint261 = {x:-200+ 1000,y: 200,value :sixVal_3};

        var dataPoint267 = {x:-200+ 1100,y: 400,value :sixVal_3};
        // var dataPoint263 = {x:-200+ 1080,y: 460,value :sixVal_3};   
        var dataPoint264 = {x:-200+ 1120,y: 480,value :sixVal_3};   
        var dataPoint265 = {x:-200+ 1100,y: 460,value :sixVal_3};   
        var dataPoint266 = {x:-200+ 1100,y: 440,value :sixVal_3};   

        var dataPoint268 = {x:-200+ 1160,y: 260,value :sixVal_3};
        var dataPoint269 = {x:-200+ 1140,y: 340,value :sixVal_3};   
        var dataPoint270 = {x:-200+ 1180,y: 340,value :sixVal_3};   
        var dataPoint271 = {x:-200+ 1160,y: 320,value :sixVal_3};   
        // var dataPoint272 = {x:-200+ 1160,y: 300,value :sixVal_3};   

        var dataPoint273 = {x:-200+ 1120,y: 200,value :sixVal_3};  
        var dataPoint274 = {x:-200+ 1140,y: 200,value :sixVal_3}; 

        var dataPoint59= {x:-200+ 960,y: 400,value: sixVal_3}; 
        var dataPoint60= {x:-200+ 940,y: 400,value: sixVal_3}; 
        var dataPoint61= {x:-200+ 940,y: 440,value: sixVal_3};    
        var dataPoint62= {x:-200+ 960,y: 440,value :sixVal_3}; 

        var dataPoint63= {x :1000,y: 360,value: sixVal_3};   
        var dataPoint64= {x:-200+ 1040,y: 360,value: sixVal_3};   
        var dataPoint65= {x:-200+ 960,y: 360,value: sixVal_3};     

        var dataPoint66= {x:-200+ 820,y: 290,value:sevenVal_3};//:7
        var dataPoint67= {x:-200+ 850,y: 290,value:sevenVal_3};
        var dataPoint70= {x:-200+ 740,y: 290,value: sevenVal_3};
        var dataPoint72= {x:-200+ 930,y: 290,value: sevenVal_3};

        var dataPoint73= {x:-200+ 820,y: 330,value: sevenVal_3};
        var dataPoint75= {x:-200+ 780,y: 330,value :sevenVal_3};
        var dataPoint76= {x:-200+ 900,y: 330,value :sevenVal_3};
        var dataPoint139= {x:-200+ 930,y:330,value :sevenVal_3}; 

       var dataPoint172= {x:-200+ 820,y:370,value :sevenVal_3}; 
       var dataPoint173= {x:-200+ 850,y:370,value :sevenVal_3}; 
       var dataPoint174= {x:-200+ 780,y:370,value :sevenVal_3}; 
       var dataPoint175= {x:-200+ 900,y:370,value :sevenVal_3}; 
       var dataPoint176= {x:-200+ 740,y:370,value :sevenVal_3}; 
       var dataPoint178= {x:-200+ 930,y:370,value :sevenVal_3}; 

      var dataPoint179= {x:-200+ 820,y:400,value :sevenVal_3}; 
      var dataPoint180= {x:-200+ 860,y:400,value :sevenVal_3}; 
      var dataPoint181= {x:-200+ 780,y:400,value :sevenVal_3};   
      var dataPoint182= {x:-200+ 900,y:400,value :sevenVal_3}; 
      var dataPoint183= {x:-200+ 740,y:400,value :sevenVal_3}; 
      var dataPoint185= {x:-200+ 920,y:400,value :sevenVal_3};    

      // var dataPoint224 = {x:-200+ 840,y: 405,value: sevenVal_3}; 
      var dataPoint225 = {x:-200+ 880,y: 405,value: sevenVal_3}; 
      // var dataPoint226 = {x:-200+ 940,y: 405,value: sevenVal_3}; 
      var dataPoint227 = {x:-200+ 800,y: 405,value: sevenVal_3}; 
      var dataPoint228 = {x:-200+ 760,y: 405,value: sevenVal_3}; 

      var dataPoint229 = {x:-200+ 750,y: 440,value: sevenVal_3}; 
      var dataPoint230 = {x:-200+ 760,y: 440,value: sevenVal_3}; 
      var dataPoint231 = {x:-200+ 720,y: 420,value: sevenVal_3}; 

       var dataPoint277= {x:-200+ 870,y: 290,value:sevenVal_3}
       var dataPoint278= {x:-200+ 870,y: 310,value:sevenVal_3}
       var dataPoint279= {x:-200+ 870,y: 330,value:sevenVal_3}

       var dataPoint280= {x:-200+ 870,y: 240,value:sevenVal_3}
       var dataPoint281= {x:-200+ 890,y: 240,value:sevenVal_3}

        var dataPoint77= {x:-200+ 680,y :210,value: eightVal_1};//8
        var dataPoint78= {x:-200+ 720,y :210,value :eightVal_1};
        var dataPoint79= {x:-200+ 640,y :210,value :eightVal_1};
        var dataPoint80= {x:-200+ 640,y :250,value: eightVal_1};
        var dataPoint80= {x:-200+ 720,y :250,value: eightVal_1};
        var dataPoint81= {x:-200+ 640,y :250,value :eightVal_1};

        var dataPoint115= {x:-200+ 680,y: 260,value :eightVal_1};
        var dataPoint116= {x:-200+ 720,y: 270,value :eightVal_1};
        var dataPoint117= {x:-200+ 720,y: 300,value :eightVal_1};
        var dataPoint118= {x:-200+ 680,y: 270,value :eightVal_1};
        var dataPoint119= {x:-200+ 640,y: 270,value :eightVal_1};
        var dataPoint120= {x:-200+ 600,y: 270,value :eightVal_1};

        var dataPoint121= {x:-200+ 600,y: 300,value :eightVal_1};
        var dataPoint122= {x:-200+ 640,y: 300,value :eightVal_1};
        var dataPoint123= {x:-200+ 680,y: 300,value :eightVal_1};
        var dataPoint124= {x:-200+ 750,y: 300,value :eightVal_1};


         var dataPoint83= {x :620,y: 290,value: nightVal_3};//9
         var dataPoint85= {x:-200+ 650,y: 290,value: nightVal_3};
         var dataPoint87= {x:-200+ 560,y: 290,value: nightVal_3};
         var dataPoint88= {x:-200+ 530,y: 290,value: nightVal_3};

         var dataPoint89= {x:-200+ 590,y: 330,value: nightVal_3};
    
         var dataPoint92= {x:-200+ 650,y: 330,value: nightVal_3};
         var dataPoint93= {x:-200+ 560,y: 330,value: nightVal_3};    
    

         var dataPoint95= {x:-200+ 590,y: 390,value: nightVal_3};
         var dataPoint97= {x:-200+ 620,y: 390,value: nightVal_3};
        //  var dataPoint98= {x:-200+ 650,y: 390,value: nightVal_3};
         var dataPoint99= {x:-200+ 560,y: 390,value: nightVal_3}; 
         var dataPoint190= {x:-200+ 530,y:390,value :nightVal_3};

         var dataPoint71= {x:-200+ 710,y: 290,value: nightVal_3};
         var dataPoint126= {x:-200+ 710,y:330,value:nightVal_3};
         var dataPoint177= {x:-200+ 710,y:390,value :nightVal_3}; 
         var dataPoint184= {x:-200+ 710,y:400,value :nightVal_3};

         var dataPoint186= {x:-200+ 590,y:400,value :nightVal_3};
        //  var dataPoint187= {x:-200+ 620,y:400,value :nightVal_3};
        //  var dataPoint188= {x:-200+ 650,y:400,value :nightVal_3};
         var dataPoint189= {x:-200+ 560,y:400,value :nightVal_3};

         var dataPoint237= {x:-200+ 680,y:390,value :nightVal_3};
         var dataPoint239= {x:-200+ 680,y:400,value :nightVal_3};

         var dataPoint245= {x:-200+ 680,y:350,value :nightVal_3};
    
         var dataPoint248= {x:-200+ 680,y:290,value :nightVal_3};
         var dataPoint247= {x:-200+ 680,y:310,value :nightVal_3};
         var dataPoint282= {x:-200+ 680,y:330,value :nightVal_3};
      
         var dataPoint244= {x:-200+ 525,y:390,value :nightVal_3};
      

         var dataPoint100= {x:-200+ 460,y: 370,value :tenVal_1};//10
         var dataPoint101= {x :490,y: 370,value :tenVal_1};
         var dataPoint102= {x:-200+ 520,y: 370,value :tenVal_1};
         var dataPoint103= {x:-200+ 430,y: 370,value :tenVal_1};
        //  var dataPoint104= {x:-200+ 400,y :370,value :tenVal_1};

         var dataPoint105= {x:-200+ 460,y: 330,value :tenVal_1};
         var dataPoint106= {x:-200+ 490,y: 330,value :tenVal_1};
         var dataPoint107= {x:-200+ 520,y: 330,value :tenVal_1};
        //  var dataPoint108= {x:-200+ 430,y: 330,value :tenVal_1};
         var dataPoint109= {x:-200+ 400,y: 330,value :tenVal_1};

        //  var dataPoint112= {x:-200+570,y: 330,value: tenVal_1};   
         var dataPoint113= {x:-200+570,y: 370,value :tenVal_1};   
         var dataPoint114= {x:-200+570,y :400,value: tenVal_1};   

     //   多个数据点的添加方式  
        var dataPoints1 = [dataPoint1,dataPoint2,dataPoint3,dataPoint4,dataPoint5,dataPoint6,dataPoint7,dataPoint8,dataPoint10,
                          dataPoint11,dataPoint12,dataPoint13,dataPoint14,dataPoint15,dataPoint16,
                          dataPoint23,dataPoint25,dataPoint26,dataPoint28,dataPoint29,dataPoint31,
                          dataPoint33,dataPoint35,dataPoint38,dataPoint39,dataPoint41,
                          dataPoint43,dataPoint44,dataPoint45,dataPoint46,dataPoint47,dataPoint48,dataPoint50,
                          dataPoint53,dataPoint54,dataPoint55,dataPoint56,dataPoint57,dataPoint58,dataPoint59,dataPoint60,dataPoint61,
                          dataPoint62,dataPoint63,dataPoint64,dataPoint65,dataPoint66,dataPoint67,dataPoint70,dataPoint71,
                          dataPoint72,dataPoint73,dataPoint75,dataPoint76,dataPoint77,dataPoint78,dataPoint79,dataPoint80,dataPoint81,
                          dataPoint83,dataPoint85,dataPoint87,dataPoint88,dataPoint89,dataPoint134,
                          dataPoint92,dataPoint93,dataPoint95,dataPoint97,dataPoint99,dataPoint100,dataPoint101,dataPoint136,
                          dataPoint102,dataPoint103,dataPoint105,dataPoint106,dataPoint107,dataPoint109,dataPoint110,dataPoint111,
                          dataPoint113,dataPoint114,dataPoint115,dataPoint116,dataPoint117,dataPoint118,dataPoint119,dataPoint120,dataPoint121,
                          dataPoint122,dataPoint123,dataPoint124,dataPoint126,dataPoint127,dataPoint130,dataPoint131,dataPoint132,dataPoint133,
                          dataPoint135,dataPoint137,dataPoint139,dataPoint140,dataPoint141,dataPoint142,dataPoint143,dataPoint144,
                          dataPoint152,dataPoint154,dataPoint156,dataPoint157,dataPoint158,dataPoint159,dataPoint160,
                          dataPoint162,dataPoint163,dataPoint164,dataPoint165,dataPoint166,dataPoint169,dataPoint170,
                          dataPoint172,dataPoint173,dataPoint174,dataPoint175,dataPoint176,dataPoint177,dataPoint178,dataPoint179,dataPoint180,dataPoint181,
                          dataPoint182,dataPoint183,dataPoint184,dataPoint185,dataPoint186,dataPoint189,dataPoint190,
                          dataPoint194,dataPoint195,dataPoint196,dataPoint197,dataPoint198,dataPoint199,dataPoint200,dataPoint201,
                          dataPoint202,dataPoint203,dataPoint204,dataPoint205,dataPoint207,dataPoint208,dataPoint210,dataPoint211,
                          dataPoint212,dataPoint213,dataPoint214,dataPoint215,dataPoint216,dataPoint217,dataPoint218,dataPoint219,dataPoint225,dataPoint227,dataPoint228,dataPoint229,dataPoint230,dataPoint231,
                          dataPoint237,dataPoint239,
                          dataPoint244,dataPoint245,dataPoint247,dataPoint248,dataPoint249,dataPoint250,dataPoint251,
                          dataPoint252,dataPoint253,dataPoint254,dataPoint255,dataPoint256,dataPoint257,dataPoint258,dataPoint260,dataPoint261,
                          dataPoint264,dataPoint265,dataPoint266,dataPoint267,dataPoint268,dataPoint269,dataPoint270,dataPoint271,
                          dataPoint273,dataPoint274,dataPoint275,dataPoint276,dataPoint277,dataPoint278,dataPoint279,dataPoint280,dataPoint281,dataPoint282,
                          dataPoint283,dataPoint284,dataPoint285,dataPoint286
                          ];  
          heatmapInstance1.addData(dataPoints1);       

                })
                  $(function(){
                      // setTimeout(function(){
                          if($('#heatmap_one').children().length>1){
                                $('#heatmap_one').children().eq(0).remove();
                          }
                      // },500)
                  })                
             
          }
        }
        }
</script>