<template>
	<div>
		 <div id="heatmap_a" class="heatmapList"></div>   
	</div>
</template>
<script type="text/javascript">
	    
 	   var heatmap = require('heatmap');
 	   export default{
		    props: {
			        oneFloor:{
			          type:String,
			          require:true
			        },		 
		    },
		    data(){
		    	return {
					sindex:0,
					numData:'',
		    	}
		    },
		    mounted(){

		    },
		    methods:{
				getNum(n,m){
					var c = m-n+1; 
					return Math.floor(Math.random() * c + n);
				},      				
		    	sf(val,dataval,num){	 
							// if(this.numb<1){
							
								this.numData = num;
						//	}
				    		var oneVal   = parseInt(val['7018de'].renliu);//第一个点最接近
				    		var twoVal   = parseInt(val['66ca61'].renliu);//第二个点最接近
				    		var threeVal = parseInt(val['98a01d'].renliu);//第三个点最接近
				    		var fourVal  = parseInt(val['a2cc9d'].renliu);//第四个点最接近
				    		var fiveVal  = parseInt(val['8e70de'].renliu);//第五个点最接近
				    		var sixVal   = parseInt(val['30187e'].renliu);//第六个点最接近
				    		var sevenVal = parseInt(val['8e70de'].renliu);//第七个点最接近			   
				    		var eightVal = parseInt(val['8e70de'].renliu);//第八个点最接近
				    		var nightVal = parseInt(val['980082'].renliu);//第九个点最接近
				    		var tenVal   = parseInt(val['9853a0'].renliu);//第十个点最接近
				    		var eleven   = parseInt(val['a22eda'].renliu);//第十一个点最接近			 
				    		var arr = [] ;
				    		var arr1 = [];
				    		arr.push(oneVal,twoVal,threeVal,fourVal,fiveVal,sixVal,sevenVal,eightVal,nightVal,tenVal,eleven);
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
		    	oneFloor(val){		
				            // var a = this.sindex; 
				            //   a++;//防止canvas堆叠
				            //  this.sindex = a ; 		    					    		
				    		var oneVal   = parseInt(val['7018de'].renliu);//第一个点最接近
				    		var twoVal   = parseInt(val['66ca61'].renliu);//第二个点最接近
				    		var threeVal = parseInt(val['98a01d'].renliu);//第三个点最接近
				    		var fourVal  = parseInt(val['a2cc9d'].renliu);//第四个点最接近
				    		var fiveVal  = parseInt(val['8e70de'].renliu);//第五个点最接近
				    		var sixVal   = parseInt(val['30187e'].renliu);//第六个点最接近
				    		var sevenVal = parseInt(val['8e70de'].renliu);//第七个点最接近			   
				    		var eightVal = parseInt(val['8e70de'].renliu);//第八个点最接近
				    		var nightVal = parseInt(val['980082'].renliu);//第九个点最接近
				    		var tenVal   = parseInt(val['9853a0'].renliu);//第十个点最接近
				    		var eleven   = parseInt(val['a22eda'].renliu);//第十一个点最接近		

					     	var all = oneVal+twoVal+threeVal+fourVal+fiveVal+sixVal+sevenVal+eightVal+nightVal+tenVal+eleven ; 
							var arr =[];
							
							arr.push(this.getNum(60,70),this.getNum(50,60),this.getNum(40,50),this.getNum(30,40),this.getNum(20,30),this.getNum(10,20),this.getNum(0,10));
							if(all>6){
								var radius = 40;
								var fourVal_1 = arr[2] ;//this.sf(val,fourVal);
								var sevenVal_1 =  arr[2];//this.sf(val,sevenVal)
								var eightVal_1 = arr[3];//this.sf(val,eightVal)
							}else{
								var radius = -10;
								var fourVal_1 =null ;//this.sf(val,fourVal);
								var sevenVal_1 =null;//this.sf(val,sevenVal)
								var eightVal_1 =null;//this.sf(val,eightVal)								
							}
				        								
					     	var oneVal_1 = this.sf(val,oneVal,arr);
					    	var oneVal_2 = oneVal_1*.9 ;//第二近;
					    	var oneVal_3 = oneVal_1*.8 ; //第三近;
					    	var oneVal_4 = oneVal_1*.7 ;//最边缘

				         	var twoVal_1 = this.sf(val,twoVal,arr);
				        	var twoVal_2 = twoVal_1*.9 ;//第二近;
				        	var twoVal_3 = twoVal_1*.8 ; //第三近;
				        	var twoVal_4 = twoVal_1*.7 ;//最边缘	

				        	var threeVal_1 =this.sf(val,threeVal,arr);
				        	var threeVal_2 = threeVal_1*.9 ;//第二近;
				        	var threeVal_3 = threeVal_1*.8 ; //第三近;
							var threeVal_4 = threeVal_1*.7 ;//最边缘  
							
				        	var fourVal_2 = fourVal_1*.9 ;//第二近;
				        	var fourVal_3 = fourVal_1*.8 ; //第三近;
				        	var fourVal_4 = fourVal_1*.7 ;//最边缘    

				        	var fiveVal_1 = this.sf(val,fiveVal,arr);
				        	var fiveVal_2 = fiveVal_1*.9 ;//第二近;
				        	var fiveVal_3 = fiveVal_1*.8 ; //第三近;
				        	var fiveVal_4 = fiveVal_1*.7 ;//最边缘   

				        	var sixVal_1 = this.sf(val,sixVal,arr);
				        	var sixVal_2 = sixVal_1*.9 ;//第二近;
				        	var sixVal_3 = sixVal_1*.8 ; //第三近;
				        	var sixVal_4 = sixVal_1*.7 ;//最边缘  

				        	
				        	var sevenVal_2 = sevenVal_1*.9 ;//第二近;
				        	var sevenVal_3 = sevenVal_1*.8 ; //第三近;
				        	var sevenVal_4 = sevenVal_1*.7 ;//最边缘      

				        	
				        	var eightVal_2 = eightVal_1*.9 ;//第二近;
				        	var eightVal_3 = eightVal_1*.8 ; //第三近;
				        	var eightVal_4 = eightVal_1*.7 ;//最边缘     

				        	var nightVal_1 = this.sf(val,nightVal,arr);
				        	var nightVal_2 = nightVal_1*.9 ;//第二近;
				        	var nightVal_3 = nightVal_1*.8 ; //第三近;
				        	var nightVal_4 = nightVal_1*.7 ;//最边缘       

				         	var tenVal_1 = this.sf(val,tenVal,arr);
				        	var tenVal_2 = tenVal_1*.9 ;//第二近;
				        	var tenVal_3 = tenVal_1*.8 ; //第三近;
				        	var tenVal_4 = tenVal_1*.7 ;//最边缘    

				            var eleven_1 = this.sf(val,eleven,arr);
				        	var eleven_2 = eleven_1*.9 ;//第二近;
				        	var eleven_3 = eleven_1*.8 ; //第三近;
				        	var eleven_4 = eleven_1*.7 ;//最边缘          	   

				      $(function(){
				       var heatmapInstance = heatmap.create({  
				        container: document.querySelector('#heatmap_a'),
				        radius:radius,
				        });  

						// var dataPoint1= {x:-200+ 260,y: 430,value: oneVal_4};
						var dataPoint2= {x:-200+ 250,y: 470,value: oneVal_4};
						var dataPoint3= {x:-200+ 290,y: 430,value: oneVal_4};//一点中心
						var dataPoint78= {x:-200+ 250,y: 510,value: oneVal_4};
						// var dataPoint4= {x:-200+ 260,y: 550,value: oneVal_4};
						// var dataPoint5= {x:-200+ 290,y: 470,value: oneVal_4};
						var dataPoint6= {x:-200+ 290,y: 510,value: oneVal_4};

						var dataPoint7= {x:-200+ 330,y: 430,value: oneVal_4};
						var dataPoint8= {x:-200+ 330,y: 470,value: oneVal_3};
						var dataPoint9= {x:-200+ 330,y: 510,value: oneVal_4}; 

						// var dataPoint79= {x:-200+ 370,y: 430,value: oneVal_4};
						var dataPoint80= {x:-200+ 370,y: 470,value: oneVal_4};


						var dataPoint81= {x:-200+ 250,y: 390,value: oneVal_4};
						var dataPoint82= {x:-200+ 290,y: 400,value: oneVal_4};
						var dataPoint83= {x:-200+ 330,y: 390,value: oneVal_4};
						var dataPoint84= {x:-200+ 370,y: 400,value: oneVal_4};
						var dataPoint85= {x:-200+ 290,y: 550,value: oneVal_4};	

						var dataPoint214= {x:-200+ 330,y: 550,value: oneVal_3};	
						var dataPoint215= {x:-200+ 350,y: 540,value: oneVal_3};	
						var dataPoint216= {x:-200+ 370,y: 530,value: oneVal_3};			


						var dataPoint224= {x:-200+ 380,y: 500,value:oneVal_3};	
					//	var dataPoint226= {x:-200+ 400,y: 500,value:oneVal_3};
						
						var dataPoint233= {x:-200+ 410,y: 460,value:oneVal_3};
						var dataPoint213= {x:-200+ 410,y: 430,value:oneVal_3};

						var dataPoint225= {x:-200+ 290,y: 590,value:oneVal_3};
						var dataPoint227= {x:-200+ 300,y: 590,value:oneVal_3};

						var dataPoint228= {x:-200+ 280,y: 610,value:oneVal_3};
						var dataPoint229= {x:-200+ 280,y: 630,value:oneVal_3};
						var dataPoint230= {x:-200+ 280,y: 650,value:oneVal_3};

						var dataPoint231= {x:-200+ 250,y: 610,value:oneVal_3};
						var dataPoint232= {x:-200+ 250,y: 630,value:oneVal_3};
						

						var dataPoint10= {x:-200+ 490,y: 600,value: twoVal_4};//第二个点
						var dataPoint11= {x:-200+ 490,y: 560,value: twoVal_4};
						var dataPoint12= {x:-200+ 500,y: 520,value: twoVal_4};

						var dataPoint13= {x:-200+ 450,y: 560,value: twoVal_4};
						var dataPoint14= {x:-200+ 410,y: 560,value: twoVal_4};

						var dataPoint15= {x:-200+ 450,y: 590,value: twoVal_4};

						var dataPoint16= {x:-200+ 460,y: 520,value: twoVal_4};
					

						var dataPoint162= {x:-200+ 490,y: 470,value:twoVal_4};
						var dataPoint164= {x:-200+ 520,y: 470,value:twoVal_4};
						var dataPoint292= {x:-200+ 450,y: 470,value:twoVal_4};

						var dataPoint234= {x:-200+ 525,y: 660,value:twoVal_4};
						var dataPoint235= {x:-200+ 525,y: 620,value:twoVal_4};
						var dataPoint236= {x:-200+ 525,y: 580,value:twoVal_4};
						var dataPoint237= {x:-200+ 545,y: 560,value:twoVal_4};

					    var dataPoint365={x:-200+ 555,y: 600,value: twoVal_4}
						var dataPoint240= {x:-200+ 480,y: 520,value:twoVal_3};

						var dataPoint241= {x:-200+ 440,y: 500,value:twoVal_3};
						var dataPoint243= {x:-200+ 440,y: 520,value:twoVal_3};


// ////////////////////////////////////////////////////////////////////////////////////////
						var dataPoint19= {x:-200+ 620,y: 560,value: threeVal_4};
						var dataPoint20= {x:-200+ 580,y: 560,value: threeVal_3};
						// var dataPoint21= {x:-200+ 660,y: 560,value: threeVal_4};

						var dataPoint24= {x:-200+ 620,y: 590,value: threeVal_3};//第三个点
						// var dataPoint25= {x:-200+ 590,y: 610,value: threeVal_3};
						var dataPoint26= {x:-200+ 650,y: 600,value: threeVal_3};
	
						var dataPoint88= {x:-200+ 560,y: 500,value: threeVal_3};
						var dataPoint89= {x:-200+ 690,y: 560,value: threeVal_3};
						// var dataPoint90= {x:-200+ 690,y: 600,value: threeVal_3};
						var dataPoint168= {x:-200+ 580,y: 470,value: threeVal_3};
						var dataPoint169= {x:-200+ 620,y: 470,value: threeVal_3};
						var dataPoint170= {x:-200+ 660,y: 470,value: threeVal_3};
						var dataPoint172= {x:-200+ 620,y: 470,value: threeVal_3};

						var dataPoint244= {x:-200+ 600,y: 520,value: threeVal_3};
						var dataPoint245= {x:-200+ 580,y: 520,value: threeVal_3};
						var dataPoint246= {x:-200+ 660,y: 520,value: threeVal_3};
						var dataPoint287= {x:-200+ 620,y: 520,value:threeVal_3};
						var dataPoint248= {x:-200+ 640,y: 520,value:threeVal_3};				

						var dataPoint288= {x:-200+ 560,y: 520,value:threeVal_4};	
						var dataPoint289= {x:-200+ 520,y: 520,value:threeVal_4};	

						// var dataPoint290= {x:-200+ 700,y: 520,value:threeVal_4};	
						var dataPoint291= {x:-200+ 720,y: 500,value:threeVal_4};	
 
						 var dataPoint366 = {x:-200+ 710,y: 540,value: threeVal_4};
						//  var dataPoint367 = {x:-200+ 710,y: 560,value: threeVal_4};
						 var dataPoint368 = {x:-200+ 710,y: 580,value: threeVal_4};
						 var dataPoint369 = {x:-200+ 710,y: 600,value: threeVal_4};

						

						// var dataPoint27= {x:-200+ 890,y: 580,value: fourVal_3};
			//			var dataPoint28= {x:-200+ 930,y: 580,value: fourVal_3};
						var dataPoint29= {x:-200+ 970,y: 580,value: fourVal_4};//第四个点
						var dataPoint30= {x:-200+ 850,y: 580,value: fourVal_3}
						// var dataPoint31= {x:-200+ 810,y: 580,value: fourVal_4};

						var dataPoint32= {x:-200+ 890,y: 540,value: fourVal_3};
						var dataPoint33= {x:-200+ 930,y: 540,value: fourVal_3}
						// var dataPoint34= {x:-200+ 970,y: 540,value: fourVal_4};
						var dataPoint91= {x:-200+ 850,y: 540,value: fourVal_3};
						var dataPoint92= {x:-200+ 810,y: 540,value: fourVal_4};

					//	var dataPoint93= {x:-200+ 890,y: 500,value: fourVal_4};
						// var dataPoint94= {x:-200+ 930,y: 500,value: fourVal_4};
						var dataPoint176= {x:-200+ 960,y: 510,value: fourVal_4};
						var dataPoint177= {x:-200+ 850,y: 500,value: fourVal_4};


						// var dataPoint179= {x:-200+ 890,y: 620,value: fourVal_4};
						// var dataPoint180= {x:-200+ 930,y: 620,value: fourVal_4};
						// var dataPoint181= {x:-200+ 850,y: 620,value: fourVal_4};
						var dataPoint182= {x:-200+ 820,y: 610,value: fourVal_4};
						var dataPoint183= {x:-200+ 960,y: 610,value: fourVal_4};
						
						var dataPoint355 = {x:-200+ 1000,y: 620,value: fourVal_4};
						var dataPoint356 = {x:-200+ 1000,y: 580,value: fourVal_4};
						var dataPoint357 = {x:-200+ 1000,y: 540,value: fourVal_4};
						var dataPoint358 = {x:-200+ 1000,y: 500,value: fourVal_4};

						// var dataPoint359 = {x:-200+ 780,y: 620,value: fourVal_4};
						// var dataPoint360 = {x:-200+ 780,y: 580,value: fourVal_4};	
						var dataPoint361 = {x:-200+ 780,y: 540,value: fourVal_4};		
					
						var dataPoint362 = {x:-200+ 740,y: 620,value: fourVal_4};
						// var dataPoint363 = {x:-200+ 740,y: 580,value: fourVal_4};	
						var dataPoint364 = {x:-200+ 740,y: 540,value: fourVal_4};		
						
						var dataPoint370 = {x:-200+ 850,y: 480,value: fourVal_4};
						var dataPoint371 = {x:-200+ 890,y: 480,value: fourVal_4};
						var dataPoint372 = {x:-200+ 930,y: 480,value: fourVal_4};
						// var dataPoint373 = {x:-200+ 960,y: 480,value: fourVal_4};
						var dataPoint374 = {x:-200+ 1000,y: 480,value: fourVal_4};

						var dataPoint375 = {x:-200+ 850,y: 460,value: fourVal_4};
						var dataPoint376 = {x:-200+ 890,y: 460,value: fourVal_4};
						var dataPoint377 = {x:-200+ 930,y: 460,value: fourVal_4};
						var dataPoint378 = {x:-200+ 960,y: 460,value: fourVal_4};
						var dataPoint379 = {x:-200+ 1000,y: 460,value: fourVal_4};						

						var dataPoint95= {x:-200+ 980,y: 540,value: fiveVal_2};//第5个点
						var dataPoint96= {x:-200+ 1020,y: 540,value: fiveVal_2};
						var dataPoint97= {x:-200+ 940,y: 540,value: fiveVal_2};

						var dataPoint98= {x:-200+ 980,y: 580,value: fiveVal_2};
						var dataPoint99= {x:-200+ 1020,y: 580,value: fiveVal_2};
						var dataPoint100= {x:-200+ 940,y: 580,value: fiveVal_2}

						var dataPoint101= {x:-200+ 920,y: 540,value: fiveVal_3};
						var dataPoint102= {x:-200+ 920,y: 580,value: fiveVal_3};
						var dataPoint103= {x:-200+ 920,y: 520,value: fiveVal_3};
						var dataPoint104= {x:-200+ 980,y: 500,value: fiveVal_2};
						var dataPoint105= {x:-200+ 960,y: 520,value: fiveVal_3};
						var dataPoint106= {x:-200+ 1020,y: 520,value: fiveVal_4};
						var dataPoint107= {x:-200+ 970,y: 480,value: fiveVal_3};
						var dataPoint108= {x:-200+ 1020,y: 480,value: fiveVal_4};
						var dataPoint109= {x:-200+ 990,y: 480,value: fiveVal_3};
						var dataPoint110= {x:-200+ 1050,y: 480,value: fiveVal_4};
						var dataPoint111= {x:-200+ 1050,y: 550,value: fiveVal_2};
						var dataPoint112= {x:-200+ 1050,y: 520,value: fiveVal_4};
						var dataPoint113= {x:-200+ 1050,y: 580,value: fiveVal_4};

						var dataPoint187= {x:-200+ 940,y: 480,value: fiveVal_2};
						var dataPoint188= {x:-200+ 900,y: 480,value: fiveVal_2};
						var dataPoint189= {x:-200+ 920,y: 480,value: fiveVal_2};

						var dataPoint272= {x:-200+ 980,y: 460,value: fiveVal_2};
						var dataPoint273= {x:-200+ 1020,y: 500,value: fiveVal_2};
						var dataPoint274= {x:-200+ 1050,y: 500,value: fiveVal_2};

						var dataPoint35= {x:-200+ 1160,y: 520,value: sixVal_3};//第6个点
						// var dataPoint36= {x:-200+ 1140,y: 540,value: sixVal_4};
						// var dataPoint37= {x:-200+ 1220,y: 540,value: sixVal_4};
						// var dataPoint38= {x:-200+ 1180,y: 490,value: sixVal_4};
						var dataPoint39= {x:-200+ 1180,y: 530,value: sixVal_4};

						// var dataPoint40= {x:-200+ 1220,y: 500,value: sixVal_4};

						var dataPoint41= {x:-200+ 1200,y: 580,value: sixVal_4};
						var dataPoint42= {x:-200+ 1130,y: 580,value: sixVal_4};

						var dataPoint250= {x:-200+ 1160,y: 580,value: sixVal_4};

						var dataPoint251= {x:-200+ 1140,y: 530,value: sixVal_4};
					
						var dataPoint253= {x:-200+ 1100,y: 530,value: sixVal_4};

						var dataPoint254= {x:-200+ 1190,y: 540,value: sixVal_4};

						var dataPoint114= {x:-200+ 1100,y: 540,value: sixVal_4};
						// var dataPoint115= {x:-200+ 1110,y: 580,value: sixVal_4};
						// var dataPoint116= {x:-200+ 1120,y: 500,value: sixVal_4};
						var dataPoint117= {x:-200+ 1130,y: 500,value: sixVal_4};

						var dataPoint190= {x:-200+ 1050,y: 490,value: sixVal_3};

						var dataPoint118= {x:-200+ 1060,y: 540,value: sixVal_4};
						var dataPoint119= {x:-200+ 1070,y: 570,value: sixVal_4};
						var dataPoint120= {x:-200+ 1060,y: 500,value: sixVal_4};

						var dataPoint121= {x:-200+ 1180,y: 460,value: sixVal_4};
						var dataPoint122= {x:-200+ 1140,y: 460,value: sixVal_4};
						var dataPoint123= {x:-200+ 1210,y: 460,value: sixVal_4};

						var dataPoint293= {x:-200+ 1070,y: 500,value: sixVal_4};
						var dataPoint294= {x:-200+ 1080,y: 510,value: sixVal_4};
						var dataPoint295= {x:-200+ 1090,y: 520,value: sixVal_4};

						//////////////////////////////////////////////////
						var dataPoint44= {x:-200+ 1120,y: 230,value: sevenVal_2};//第7个点
						var dataPoint45= {x:-200+ 1080,y: 230,value: sevenVal_2};
						var dataPoint46= {x:-200+ 1160,y: 230,value: sevenVal_2};
						var dataPoint47= {x:-200+ 1120,y: 270,value: sevenVal_3};
						var dataPoint48= {x:-200+ 1080,y: 270,value: sevenVal_3};
						var dataPoint49= {x:-200+ 1160,y: 270,value: sevenVal_3};

						var dataPoint312 ={x:-200+ 1100,y: 240,value: sevenVal_2};
						var dataPoint313 ={x:-200+ 1140,y: 240,value: sevenVal_2};
						var dataPoint314 ={x:-200+ 1040,y: 240,value: sevenVal_2};

						var dataPoint315= {x:-200+ 1030,y: 280,value: sevenVal_2};
						var dataPoint316= {x:-200+ 1030,y: 300,value: sevenVal_2};
						var dataPoint317= {x:-200+ 1030,y: 320,value: sevenVal_2};
						var dataPoint318= {x:-200+ 1030,y: 340,value: sevenVal_2};
						var dataPoint319= {x:-200+ 1030,y: 360,value: sevenVal_2};

					    var dataPoint320= {x:-200+ 1030,y: 390,value: sevenVal_4};
						var dataPoint321= {x:-200+ 1030,y: 430,value: sevenVal_4};
						var dataPoint322= {x:-200+ 1030,y: 470,value: sevenVal_4};
						var dataPoint323= {x:-200+ 1030,y: 510,value: sevenVal_4};
						var dataPoint324= {x:-200+ 1030,y: 550,value: sevenVal_4};

						var dataPoint325= {x:-200+ 1060,y: 390,value: sevenVal_4};
						var dataPoint326= {x:-200+ 1060,y: 430,value: sevenVal_4};

						var dataPoint124= {x:-200+ 1170,y: 300,value: sevenVal_3};
						var dataPoint125= {x:-200+ 1130,y: 300,value: sevenVal_3};
						var dataPoint126= {x:-200+ 1130,y: 190,value: sevenVal_2};
						var dataPoint127= {x:-200+ 1020,y: 230,value: sevenVal_2};
						var dataPoint128= {x:-200+ 1060,y: 230,value: sevenVal_2};

						var dataPoint296 ={x:-200+ 1110,y: 330,value: sevenVal_3};
						var dataPoint297 ={x:-200+ 1190,y: 330,value: sevenVal_4};
						// var dataPoint298 ={x:-200+ 1150,y: 330,value: sevenVal_3};

						var dataPoint299 ={x:-200+ 1110,y: 360,value: sevenVal_4};
						var dataPoint300 ={x:-200+ 1190,y: 360,value: sevenVal_4};
						var dataPoint301 ={x:-200+ 1150,y: 360,value: sevenVal_3};
				
						// var dataPoint302 ={x:-200+ 1110,y: 390,value: sevenVal_4};
						// var dataPoint303 ={x:-200+ 1190,y: 390,value: sevenVal_3};
						var dataPoint304 ={x:-200+ 1150,y: 390,value: sevenVal_3};
						
						var dataPoint305 ={x:-200+ 1110,y: 420,value: sevenVal_3};
						// var dataPoint306 ={x:-200+ 1190,y: 420,value: sevenVal_4};
						var dataPoint307 ={x:-200+ 1150,y: 420,value: sevenVal_4};

						// var dataPoint308 ={x:-200+ 1100,y: 440,value: sevenVal_4};
						var dataPoint309 ={x:-200+ 1060,y: 440,value: sevenVal_4};

						var dataPoint310 ={x:-200+ 1100,y: 470,value: sevenVal_4};
						// var dataPoint311 ={x:-200+ 1060,y: 470,value: sevenVal_4};


						var dataPoint50= {x:-200+ 870,y: 310,value: eightVal_2};//第8个点
						var dataPoint51= {x:-200+ 870,y: 350,value: eightVal_3};
						// var dataPoint52= {x:-200+ 870,y: 390,value: eightVal_3};
						var dataPoint53= {x:-200+ 870,y: 270,value: eightVal_3};

						var dataPoint54= {x:-200+ 830,y: 330,value: eightVal_3};
						var dataPoint55= {x:-200+ 830,y: 370,value: eightVal_3};			
						var dataPoint57= {x:-200+ 830,y: 290,value:eightVal_3};

						var dataPoint130= {x:-200+ 920,y: 330,value: eightVal_3};
						var dataPoint131= {x:-200+ 920,y: 370,value: eightVal_3};
						var dataPoint193= {x:-200+ 920,y: 290,value: eightVal_3};

					    var dataPoint56= {x:-200+ 810,y: 330,value: eightVal_3};
					    var dataPoint132= {x:-200+ 810,y: 370,value: eightVal_3};
						var dataPoint194= {x:-200+ 810,y: 290,value: eightVal_3};

						var dataPoint327= {x:-200+ 960,y: 330,value: eightVal_3}
						var dataPoint328= {x:-200+ 960,y: 370,value: eightVal_3}
						var dataPoint329= {x:-200+ 960,y: 310,value: eightVal_3}
						var dataPoint330= {x:-200+ 960,y: 290,value: eightVal_3}

						var dataPoint331= {x:-200+ 990,y: 330,value: eightVal_4}
						// var dataPoint332= {x:-200+ 990,y: 370,value: eightVal_4}
						// var dataPoint333= {x:-200+ 990,y: 310,value: eightVal_4}
						// var dataPoint334= {x:-200+ 990,y: 290,value: eightVal_4}

						// var dataPoint335= {x:-200+ 990,y: 260,value: 999}
						// // var dataPoint336= {x:-200+ 960,y: 260,value: eightVal_4}
						// var dataPoint337= {x:-200+ 920,y: 260,value: eightVal_4}

						var dataPoint338= {x:-200+ 990,y: 410,value: eightVal_3}
						var dataPoint339= {x:-200+ 960,y: 410,value: eightVal_3}
						var dataPoint340= {x:-200+ 920,y: 410,value: eightVal_3}
						var dataPoint341= {x:-200+ 880,y: 410,value: eightVal_3}
						var dataPoint342= {x:-200+ 840,y: 410,value: eightVal_3}
				

						var dataPoint344= {x:-200+ 990,y: 420,value: eightVal_3}
						var dataPoint345= {x:-200+ 960,y: 420,value: eightVal_3}
						var dataPoint346= {x:-200+ 920,y: 420,value: eightVal_3}
						var dataPoint347= {x:-200+ 880,y: 420,value: eightVal_3}
						var dataPoint348= {x:-200+ 840,y: 420,value: eightVal_3}
			


						var dataPoint58= {x:-200+ 770,y: 480,value: nightVal_3};//第9个点
						var dataPoint59= {x:-200+ 810,y: 480,value: nightVal_4};
						var dataPoint60= {x:-200+ 730,y: 480,value: nightVal_4};

						var dataPoint61= {x:-200+ 780,y: 510,value: nightVal_4};
						var dataPoint62= {x:-200+ 820,y: 510,value: nightVal_4};
						var dataPoint63= {x:-200+ 740,y: 510,value: nightVal_4};

						var dataPoint64= {x:-200+ 770,y: 450,value: nightVal_4};
						var dataPoint65= {x:-200+ 810,y: 450,value: nightVal_4};
						var dataPoint133= {x:-200+730,y: 450,value: nightVal_4};

						var dataPoint134= {x:-200+ 770,y: 410,value: nightVal_4};
						var dataPoint137= {x:-200+ 730,y: 410,value: nightVal_4};

						var dataPoint135= {x:-200+ 690,y: 465,value: nightVal_4};
						var dataPoint136= {x:-200+ 690,y: 495,value: nightVal_4};
						var dataPoint138= {x:-200+ 690,y: 435,value: nightVal_4};

						var dataPoint139= {x:-200+ 810,y: 400,value: nightVal_4};

						var dataPoint210= {x:-200+ 840,y: 450,value:nightVal_4};
						var dataPoint211= {x:-200+ 840,y: 480,value:nightVal_2};
						var dataPoint212= {x:-200+ 840,y: 495,value:nightVal_4};


						var dataPoint255= {x:-200+ 790,y: 450,value: nightVal_4};
						var dataPoint256= {x:-200+ 750,y: 450,value: nightVal_4};

				/////////////////////////////////////////////////////
						var dataPoint66= {x:-200+ 640,y: 300,value: tenVal_3};
						var dataPoint67= {x:-200+ 600,y: 310,value: tenVal_3};//第10个点
						// var dataPoint68= {x:-200+ 540,y: 300,value: tenVal_3};
						// var dataPoint69= {x:-200+ 680,y: 310,value: tenVal_3};
						var dataPoint70= {x:-200+ 510,y: 300,value: tenVal_3};

						// var dataPoint71= {x:-200+ 640,y: 340,value: tenVal_3};
						var dataPoint140= {x:-200+ 600,y: 340,value: tenVal_3};
						var dataPoint141= {x:-200+ 540,y: 340,value: tenVal_3};
						var dataPoint142= {x:-200+ 680,y: 340,value: tenVal_3};
						var dataPoint143= {x:-200+ 510,y: 340,value: tenVal_3};

						// var dataPoint144= {x:-200+ 640,y: 380,value: tenVal_3};
						var dataPoint145= {x:-200+ 600,y: 380,value: tenVal_3};
						// var dataPoint146= {x:-200+ 540,y: 380,value: tenVal_4};
						var dataPoint147= {x:-200+ 680,y: 380,value: tenVal_3};

						var dataPoint349 ={x:-200+ 720,y: 300,value: tenVal_3};
						var dataPoint350 ={x:-200+ 760,y: 320,value: tenVal_3};
						var dataPoint351 ={x:-200+ 800,y: 300,value: tenVal_3};
					
						// var dataPoint352 ={x:-200+ 720,y: 340,value: tenVal_3};
						var dataPoint353 ={x:-200+ 750,y: 360,value: tenVal_3};
						var dataPoint354 ={x:-200+ 780,y: 340,value: tenVal_3};

						// var dataPoint257= {x:-200+ 620,y: 390,value: tenVal_4};
						// var dataPoint258= {x:-200+ 580,y: 390,value: tenVal_4};
						var dataPoint259= {x:-200+ 660,y: 390,value: tenVal_4};

						var dataPoint260= {x:-200+ 700,y: 390,value: tenVal_4};
						

						var dataPoint262= {x:-200+ 620,y: 410,value: tenVal_4};
						var dataPoint263= {x:-200+ 580,y: 410,value: tenVal_4};
						var dataPoint264= {x:-200+ 660,y: 410,value: tenVal_4};

						var dataPoint265= {x:-200+ 700,y: 410,value: tenVal_4};

						var dataPoint266= {x:-200+ 780,y: 410,value: tenVal_4};		
						var dataPoint261= {x:-200+ 790,y: 390,value: tenVal_4};

						var dataPoint267= {x:-200+ 620,y: 440,value: tenVal_4};
						var dataPoint268= {x:-200+ 580,y: 440,value: tenVal_4};
						var dataPoint269= {x:-200+ 660,y: 440,value: tenVal_4};
						var dataPoint270= {x:-200+ 700,y: 440,value: tenVal_4};
						var dataPoint271= {x:-200+ 720,y: 440,value: tenVal_4};											


					
						var dataPoint73= {x:-200+ 470,y: 300,value: eleven_4};//第11个点
					

						var dataPoint75= {x:-200+ 430,y: 340,value: eleven_4};
					
				
						var dataPoint150= {x:-200+ 430,y: 380,value: eleven_4};
						
			
						var dataPoint153= {x:-200+ 400,y: 380,value: eleven_4};


						var dataPoint275 = {x:-200+ 450,y: 380,value: eleven_4};
						var dataPoint276 = {x:-200+ 490,y: 380,value: eleven_4};
						var dataPoint277 = {x:-200+ 520,y: 380,value: eleven_4};
						var dataPoint278 = {x:-200+ 560,y: 380,value: eleven_4};
					
						var dataPoint279 = {x:-200+ 450,y: 420,value: eleven_4};
						var dataPoint280 = {x:-200+ 490,y: 420,value: eleven_3};
						var dataPoint281 = {x:-200+ 520,y: 420,value: eleven_3};
						var dataPoint282 = {x:-200+ 560,y: 420,value: eleven_3};	

						var dataPoint283 = {x:-200+ 460,y: 430,value: eleven_3};
						var dataPoint284 = {x:-200+ 500,y: 430,value: eleven_3};
						var dataPoint285 = {x:-200+ 530,y: 430,value: eleven_3};
						var dataPoint286 = {x:-200+ 570,y: 430,value: eleven_3};	

				//多个数据点的添加方式  
				var dataPoints = [dataPoint2,dataPoint3,dataPoint6,dataPoint7,dataPoint8,dataPoint9,dataPoint10,
				                  dataPoint11,dataPoint12,dataPoint13,dataPoint14,dataPoint15,dataPoint16,dataPoint19,dataPoint20,
				                  dataPoint24,dataPoint26,dataPoint29,dataPoint30,
				                  dataPoint32,dataPoint33,dataPoint35,dataPoint39,dataPoint41,
				                  dataPoint42,dataPoint44,dataPoint45,dataPoint46,dataPoint47,dataPoint48,dataPoint49,dataPoint50,dataPoint51,
				                  dataPoint53,dataPoint54,dataPoint55,dataPoint56,dataPoint57,dataPoint58,dataPoint59,dataPoint60,dataPoint61,
				                  dataPoint62,dataPoint63,dataPoint64,dataPoint65,dataPoint66,dataPoint67,dataPoint70,
				                  dataPoint73,dataPoint75,dataPoint78,dataPoint80,dataPoint81,
				                  dataPoint82,dataPoint83,dataPoint84,dataPoint85,dataPoint88,dataPoint89,dataPoint91,dataPoint231,dataPoint232,
				                  dataPoint92,dataPoint95,dataPoint96,dataPoint97,dataPoint98,dataPoint99,dataPoint100,dataPoint101,
				                  dataPoint102,dataPoint103,dataPoint104,dataPoint105,dataPoint106,dataPoint107,dataPoint108,dataPoint109,dataPoint110,dataPoint111,
				                  dataPoint112,dataPoint113,dataPoint114,dataPoint117,dataPoint118,dataPoint119,dataPoint120,dataPoint121,
				                  dataPoint122,dataPoint123,dataPoint124,dataPoint125,dataPoint126,dataPoint127,dataPoint128,dataPoint130,dataPoint131,
				                  dataPoint132,dataPoint133,dataPoint134,dataPoint135,dataPoint137,dataPoint136,dataPoint138,dataPoint139,dataPoint140,dataPoint141,
				                  dataPoint142,dataPoint143,dataPoint145,dataPoint147,dataPoint150,dataPoint213,
								dataPoint153,dataPoint162,dataPoint164,dataPoint168,dataPoint170,dataPoint225,dataPoint227,dataPoint228,dataPoint229,dataPoint230,
								  dataPoint172,dataPoint176,dataPoint177,dataPoint182,dataPoint183,
								  dataPoint187,dataPoint188,dataPoint189,dataPoint190,dataPoint193,dataPoint194,dataPoint210,dataPoint211,dataPoint233,
								  dataPoint212,dataPoint214,dataPoint215,dataPoint216,dataPoint224,dataPoint234,dataPoint235,dataPoint236,dataPoint237,dataPoint240,dataPoint241,
								  dataPoint243,dataPoint244,dataPoint245,dataPoint246,dataPoint248,dataPoint250,dataPoint251,
								  dataPoint253,dataPoint254,dataPoint255,dataPoint256,dataPoint259,dataPoint260,dataPoint261,
								  dataPoint262,dataPoint263,dataPoint264,dataPoint265,dataPoint266,dataPoint267,dataPoint268,dataPoint269,dataPoint270,dataPoint271,
								  dataPoint272,dataPoint273,dataPoint274,dataPoint275,dataPoint276,dataPoint277,dataPoint278,dataPoint279,dataPoint280,dataPoint281,
								  dataPoint283,dataPoint284,dataPoint285,dataPoint286,dataPoint287,dataPoint288,dataPoint289,dataPoint291,dataPoint292,
								  dataPoint293,dataPoint294,dataPoint295,dataPoint296,dataPoint297,dataPoint299,dataPoint300,dataPoint301,
								  dataPoint304,dataPoint305,dataPoint307,dataPoint309,dataPoint310,dataPoint312,dataPoint313,dataPoint314,
								  dataPoint315,dataPoint316,dataPoint317,dataPoint318,dataPoint319,dataPoint320,dataPoint321,dataPoint322,dataPoint323,dataPoint324,dataPoint325,dataPoint326,
								  dataPoint327,dataPoint328,dataPoint329,dataPoint330,dataPoint331,dataPoint338,
								  dataPoint339,dataPoint340,dataPoint341,dataPoint342,dataPoint344,dataPoint345,dataPoint346,dataPoint347,dataPoint348,dataPoint349,dataPoint350,dataPoint351,
								 dataPoint353,dataPoint354,dataPoint355,dataPoint356,dataPoint357,dataPoint358,dataPoint361,dataPoint362,
								 dataPoint364,dataPoint365,dataPoint366,dataPoint368,dataPoint369,dataPoint370,dataPoint371,dataPoint372,
								 dataPoint374,dataPoint375,dataPoint376,dataPoint377,dataPoint378,dataPoint379
								  ];  
				                  heatmapInstance.addData(dataPoints);   
					  })
                            $(function(){
                                // setTimeout(function(){
                                   if($('#heatmap_a').children().length>1){
                                         $('#heatmap_a').children().eq(0).remove();
                                   }
                                // },500)
                            })					  
		    	}
		    }

 	    }
</script>