<template>
   <div>
        <div id="heatmap_five" class="heatmapList"></div>     
   </div>
</template>
<script>
 	   var heatmap = require('heatmap');
    export default{
 		    props: {
                jiaoyu:{},
            },           
            data(){
		    	return {
				
		    	}
            },
            methods:{
				getNum(n,m){
					var c = m-n+1; 
					return Math.floor(Math.random() * c + n);
				},      				
		    	sf(val,dataval,num){	 
                  this.numData = num;		  
                        var value_a = 0
                        var value1_a = 0 
                        var value2_a = 0 
                        var value3_a = 0 
                        var value4_a = 0 

                        var value5_a = 0 
                        var value6_a = 0 

                        var value7_a = 0 
                        var value8_a = 0 
                        var value9_a = 0 
                        var value10_a = 0 
                        var value11_a = 0 

                        var value12_a = 0 
                        var value13_a = 0 
                        var value14_a = 0 
                        var value15_a = 0 
                        var value16_a = 0 
                        var value17_a = 0
                        var value18_a = 0 
                        var value19_a = 0  
                        var value20_a = 0 
                        var value21_a = 0 
                        var value22_a = 0 
                        var value23_a = 0 
                        var value24_a = 0 

                        var value25_a = 0 
                        var value26_a = 0 
                        var value27_a = 0 
                        var value28_a = 0 
                        var value29_a = 0 
                        var value30_a =0 
                        var value31_a =0 
                        var value32_a =0
                        var value33_a = 0 
                        var value34_a = 0 
                        var value35_a = 0 

                        var value36_a = 0 
                        var value37_a = 0 
                        var value38_a = 0 
                        var value39_a = 0 
                        var value40_a = 0 
                        var value41_a = 0 
                        var value42_a =0 
                        var value43_a = 0 
                        var value44_a = 0 
                        var value45_a = 0 
   
                        var value46_a = 0
                        var value47_a =0 
                        var value48_a =0
                        var value49_a =0 
                        var value50_a =0
                        var value51_a = 0
                        var value52_a =0 
                        var value53_a =0 
                        var value54_a =0 
                        var value55_a =0 
                        var value56_a =0
                        var value57_a =0 

                        var value58_a =0 
                        var value59_a =0
                        var value60_a =0 
                        var value61_a =0
                        var value62_a =0     
                        for(const i in val){
                          var name  = val[i].device_name;
                          var value = val[i].renliu;
                          switch(name){
                              case '801-咚咚找房-(大黑)':
                              value_a = value;
                              break;
                              case '802-启言英文-(大黑)':
                              value1_a = value;
                              break;
                              case '805-VIPkid-(大黑)':
                              value2_a = value;
                              break;
                              case '808-本牛科技-(大黑)':
                              value3_a = value;
                              break;
                              case '811-BabyQ-(大黑)':
                              value4_a = value;
                              break;
                              case '812-舞台区-(大黑)':
                              value5_a = value;
                              break;          
                              case '813-中广和堂-(大黑)':
                              value6_a = value;
                              break; 
                              case '814-小码王-(大黑)':
                              value7_a = value;
                              break;       
                              case '815-小海马-(大黑)':
                              value8_a = value;
                              break;  
                              case '816-禧月荟-(大黑)':
                              value9_a = value;
                              break;             
                               case '821-小方象-(大黑)':
                              value10_a = value;
                              break;     
                              case '823-杨梅红绘画-(大黑)':
                              value11_a = value;
                              break;  
                              case '824-杨梅红绘画-(大黑)':
                              value12_a = value;
                              break;   
                              case '827-兔加熊-(大黑)':
                              value13_a = value;
                              break;  
                              case '831-可瀚学堂-(大黑)':
                              value14_a = value;
                              break;   
                              case '832-启邦-(大黑)':
                              value15_a = value;
                              break;   
                              case '833-百变-(大黑)':
                              value16_a = value;
                              break;   
                              case '834-多多熊-(大黑)':
                              value17_a = value;
                              break;  
                              case '835-世尔英语-(大黑)':
                              value18_a = value;
                              break;   
                              case '836-五颗星美育-(大黑)':
                              value19_a = value;
                              break;                                                                
                              case '837-美育-(大黑)':
                              value20_a = value;
                              break;     
                              case '838-全美教育-(大黑)':
                              value21_a = value;
                              break;     
                              case '839-小小运动馆-(大黑)':
                              value22_a = value;
                              break; 
                              case '840-天行达阵-(大黑)':
                              value23_a = value;
                              break;     
                              case '841-蓝袜-(大黑)':
                              value24_a = value;
                              break;     
                              case '842-博沃思-(大黑)-(大黑)':
                              value25_a = value;
                              break;   
                               case '843-东方英文书院-(大黑)':
                              value26_a = value;
                              break;   
                              case '844-兑奖区-(大黑)':
                              value27_a = value;
                              break;
                              case '845-Etalk-(大黑)':
                              value28_a = value;
                              break;
                              case '847C-趣旅-(大黑)':
                              value29_a = value;
                              break; 
                              case 'EDU-848-睿智奥尔夫':
                              value30_a = value;
                              break;   
                               case '854-小马快跑-(大黑)':
                              value31_a = value;
                              break;     
                              case '855-骑士体育-(大黑)':
                              value32_a = value;
                              break; 
                               case '856-金点蒙氏-(大黑)':
                              value33_a = value;
                              break;
                              case '857-正一道场-(大黑)':
                              value34_a = value;
                              break;
                               case '858-达内童程童美-(大黑)':
                              value35_a = value;
                              break;  
                              case '859-书戏教育-(大黑)':
                              value36_a = value;
                              break;     
                              case '864-国际击剑-(大黑)':
                              value37_a = value;
                              break;
                               case '865-柴湾馬登中学':
                              value38_a = value;
                              break; 
                              case '866-仕馨-(大黑)':
                              value39_a = value;
                              break;           
                              case '862-伯格曼-(大黑)':
                              value40_a = value;
                              break;    
                              case '通往二楼电梯口-(大黑)':
                              value41_a = value;
                              break;   
                              case '观众出口-8号馆2号门-(大黑)':
                              value42_a = value;
                              break;    
                              case '观众入口-8号馆1号门-(大黑)':
                              value43_a = value;
                              break;  
                              case '展商入口-8号馆4号门-(大黑)':
                              value44_a = value;
                              break;  
                              case '808-本牛科技-(小白)':
                              value45_a = value;
                              break;           
                              case '811-BabyQ-(小白)':
                              value46_a = value;
                              break;   
                              case '821-小方象-(小白)':
                              value47_a = value;
                              break;
                              case '824-杨梅红绘画-(小白)':
                              value48_a = value;
                              break;    
                              case '831-可瀚学堂-(小白)':
                              value49_a = value;
                              break;       
                              case '834-多多熊-(小白)':
                              value50_a = value;
                              break;  
                               case '844-兑奖区-(小白)':
                              value51_a = value;
                              break;        
                              case '847C-趣旅-(小白)':
                              value52_a = value;
                              break;  
                              case '856-金点蒙氏-(小白)':
                              value53_a = value;
                              break;        
                              case '859-书戏教育-(小白)':
                              value54_a = value;
                              break;   
                              case '864-国际击剑-(小白)':
                              value55_a = value;
                              break;      
                              case '862-伯格曼-(小白)':
                              value56_a = value;
                              break;               
                              case '二楼平台出入口-通往二楼电梯口-(小白)':
                              value57_a = value;
                              break;    
                              case '观众出口-8号馆2号门-(小白)':
                              value58_a = value;
                              break;  
                              case '观众入口-8号馆1号门-(小白)':
                              value59_a = value;
                              break;   
                              case '展商入口-8号馆4号门-(小白)':
                              value60_a = value;
                              break;     
                              case '809-三叶草-(大黑)':
                              value61_a = value;
                              break;  
                              case '807-教育地产-(大黑)':
                              value62_a = value;
                              break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                          }
                        }
 	              var arr = [] ;
				    		var arr1 = [];
				    		arr.push(value_a,value1_a,value2_a,value3_a,value4_a,value5_a,value6_a,value7_a,value8_a,value9_a,value10_a,value11_a,value12_a,value13_a,value14_a,value15_a,value16_a,value17_a,value18_a,value19_a,value20_a,value21_a,value22_a,value23_a,value24_a,value25_a,value26_a,value27_a,value28_a,value29_a,value30_a,value31_a,value32_a,value33_a,value34_a,value35_a,value36_a,value37_a,value38_a,value39_a,value40_a,value41_a,value42_a,value43_a,value44_a,value45_a,value46_a,value47_a,value48_a,value49_a,value50_a,value51_a,value52_a,value53_a,value54_a,value55_a,value56_a,value57_a,value58_a,value59_a,value60_a,value61_a,value62_a);
				    		for(let i in arr){
				    			if(arr[i] !=0){
				    				arr1.push(arr[i]);
				    			}
				    		}	
				    		var arr3 = arr1.sort((a,b) => a > b).reverse();
                 var index = arr3.indexOf(dataval); 
                          if(index<=20){
				    			return this.numData[1];
				    		}else if( index<=30 && index>20){
				    			return this.numData[2];
				    		}else if (index<=40 && index>30) {
				    			return this.numData[3];
				    		}else if (index<=50 && index>40){
				    			return this.numData[4];
				    		}else if (index<=70 && index>60){
				    			return this.numData[5];
				    		}else if(index == -1){
				    			return 0
				    		}                                            				    			    			
		    	        }
		    
            },
            watch:{
                jiaoyu(val){
                        var _this = this ;
                        var value_a = 0
                        var value1_a = 0 
                        var value2_a = 0 
                        var value3_a = 0 
                        var value4_a = 0 

                        var value5_a = 0 
                        var value6_a = 0 

                        var value7_a = 0 
                        var value8_a = 0 
                        var value9_a = 0 
                        var value10_a = 0 
                        var value11_a = 0 

                        var value12_a = 0 
                        var value13_a = 0 
                        var value14_a = 0 
                        var value15_a = 0 
                        var value16_a = 0 
                        var value17_a = 0
                        var value18_a = 0 
                        var value19_a = 0  
                        var value20_a = 0 
                        var value21_a = 0 
                        var value22_a = 0 
                        var value23_a = 0 
                        var value24_a = 0 

                        var value25_a = 0 
                        var value26_a = 0 
                        var value27_a = 0 
                        var value28_a = 0 
                        var value29_a = 0 
                        var value30_a =0 
                        var value31_a =0 
                        var value32_a =0
                        var value33_a = 0 
                        var value34_a = 0 
                        var value35_a = 0 

                        var value36_a = 0 
                        var value37_a = 0 
                        var value38_a = 0 
                        var value39_a = 0 
                        var value40_a = 0 
                        var value41_a = 0 
                        var value42_a =0 
                        var value43_a = 0 
                        var value44_a = 0 
                        var value45_a = 0 
   
                        var value46_a = 0
                        var value47_a =0 
                        var value48_a =0
                        var value49_a =0 
                        var value50_a =0
                        var value51_a = 0
                        var value52_a =0 
                        var value53_a =0 
                        var value54_a =0 
                        var value55_a =0 
                        var value56_a =0
                        var value57_a =0 

                        var value58_a =0 
                        var value59_a =0
                        var value60_a =0 
                        var value61_a =0
                        var value62_a =0     
         
                      var allrenliu =0
                        for(const i in val){
                          var name  = val[i].device_name;
                          var value = val[i].renliu;
                          allrenliu += parseFloat(val[i].renliu);
                            switch(name){
                              case '801-咚咚找房-(大黑)':
                              value_a = value;
                              break;
                              case '802-启言英文-(大黑)':
                              value1_a = value;
                              break;
                              case '805-VIPkid-(大黑)':
                              value2_a = value;
                              break;
                              case '808-本牛科技-(大黑)':
                              value3_a = value;
                              break;
                              case '811-BabyQ-(大黑)':
                              value4_a = value;
                              break;
                              case '812-舞台区-(大黑)':
                              value5_a = value;
                              break;          
                              case '813-中广和堂-(大黑)':
                              value6_a = value;
                              break; 
                              case '814-小码王-(大黑)':
                              value7_a = value;
                              break;       
                              case '815-小海马-(大黑)':
                              value8_a = value;
                              break;  
                              case '816-禧月荟-(大黑)':
                              value9_a = value;
                              break;             
                               case '821-小方象-(大黑)':
                              value10_a = value;
                              break;     
                              case '823-杨梅红绘画-(大黑)':
                              value11_a = value;
                              break;  
                              case '824-杨梅红绘画-(大黑)':
                              value12_a = value;
                              break;   
                              case '827-兔加熊-(大黑)':
                              value13_a = value;
                              break;  
                              case '831-可瀚学堂-(大黑)':
                              value14_a = value;
                              break;   
                              case '832-启邦-(大黑)':
                              value15_a = value;
                              break;   
                              case '833-百变-(大黑)':
                              value16_a = value;
                              break;   
                              case '834-多多熊-(大黑)':
                              value17_a = value;
                              break;  
                              case '835-世尔英语-(大黑)':
                              value18_a = value;
                              break;   
                              case '836-五颗星美育-(大黑)':
                              value19_a = value;
                              break;                                                                
                              case '837-美育-(大黑)':
                              value20_a = value;
                              break;     
                              case '838-全美教育-(大黑)':
                              value21_a = value;
                              break;     
                              case '839-小小运动馆-(大黑)':
                              value22_a = value;
                              break; 
                              case '840-天行达阵-(大黑)':
                              value23_a = value;
                              break;     
                              case '841-蓝袜-(大黑)':
                              value24_a = value;
                              break;     
                              case '842-博沃思-(大黑)-(大黑)':
                              value25_a = value;
                              break;   
                               case '843-东方英文书院-(大黑)':
                              value26_a = value;
                              break;   
                              case '844-兑奖区-(大黑)':
                              value27_a = value;
                              break;
                              case '845-Etalk-(大黑)':
                              value28_a = value;
                              break;
                              case '847C-趣旅-(大黑)':
                              value29_a = value;
                              break; 
                              case 'EDU-848-睿智奥尔夫':
                              value30_a = value;
                              break;   
                               case '854-小马快跑-(大黑)':
                              value31_a = value;
                              break;     
                              case '855-骑士体育-(大黑)':
                              value32_a = value;
                              break; 
                               case '856-金点蒙氏-(大黑)':
                              value33_a = value;
                              break;
                              case '857-正一道场-(大黑)':
                              value34_a = value;
                              break;
                               case '858-达内童程童美-(大黑)':
                              value35_a = value;
                              break;  
                              case '859-书戏教育-(大黑)':
                              value36_a = value;
                              break;     
                              case '864-国际击剑-(大黑)':
                              value37_a = value;
                              break;
                               case '865-柴湾馬登中学':
                              value38_a = value;
                              break; 
                              case '866-仕馨-(大黑)':
                              value39_a = value;
                              break;           
                              case '862-伯格曼-(大黑)':
                              value40_a = value;
                              break;    
                              case '通往二楼电梯口-(大黑)':
                              value41_a = value;
                              break;   
                              case '观众出口-8号馆2号门-(大黑)':
                              value42_a = value;
                              break;    
                              case '观众入口-8号馆1号门-(大黑)':
                              value43_a = value;
                              break;  
                              case '展商入口-8号馆4号门-(大黑)':
                              value44_a = value;
                              break;  
                              case '808-本牛科技-(小白)':
                              value45_a = value;
                              break;           
                              case '811-BabyQ-(小白)':
                              value46_a = value;
                              break;   
                              case '821-小方象-(小白)':
                              value47_a = value;
                              break;
                              case '824-杨梅红绘画-(小白)':
                              value48_a = value;
                              break;    
                              case '831-可瀚学堂-(小白)':
                              value49_a = value;
                              break;       
                              case '834-多多熊-(小白)':
                              value50_a = value;
                              break;  
                               case '844-兑奖区-(小白)':
                              value51_a = value;
                              break;        
                              case '847C-趣旅-(小白)':
                              value52_a = value;
                              break;  
                              case '856-金点蒙氏-(小白)':
                              value53_a = value;
                              break;        
                              case '859-书戏教育-(小白)':
                              value54_a = value;
                              break;   
                              case '864-国际击剑-(小白)':
                              value55_a = value;
                              break;      
                              case '862-伯格曼-(小白)':
                              value56_a = value;
                              break;               
                              case '二楼平台出入口-通往二楼电梯口-(小白)':
                              value57_a = value;
                              break;    
                              case '观众出口-8号馆2号门-(小白)':
                              value58_a = value;
                              break;  
                              case '观众入口-8号馆1号门-(小白)':
                              value59_a = value;
                              break;   
                              case '展商入口-8号馆4号门-(小白)':
                              value60_a = value;
                              break;     
                              case '809-三叶草-(大黑)':
                              value61_a = value;
                              break;  
                              case '807-教育地产-(大黑)':
                              value62_a = value;
                              break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                          }
                        }
                         var arr = [];
                        arr.push(_this.getNum)  
					            	arr.push(_this.getNum(95,100),_this.getNum(90,95),_this.getNum(85,90),_this.getNum(80,85),_this.getNum(75,80),_this.getNum(70,75),_this.getNum(60,70));
                        var radius = 0
                        if(allrenliu<1000){
                              radius =-1000;
                        } else{
                              radius = 30 ;
                        } 
                        var valuez  = _this.sf(val,value_a,arr)//
                        var value1 = _this.sf(val,value1_a,arr) //
                        var value2 = _this.sf(val,value2_a,arr) //
                        var value3 = _this.sf(val,value3_a,arr) //
                        var value4 = _this.sf(val,value4_a,arr) //

                        var value5 = _this.sf(val,value5_a,arr) //
                        var value6 = _this.sf(val,value6_a,arr) //

                        var value7= _this.sf(val,value7_a,arr) //
                        var value8 =_this.sf(val,value8_a,arr) //
                        var value9 = _this.sf(val,value9_a,arr) //
                        var value10 = _this.sf(val,value10_a,arr) //
                        var value11 = _this.sf(val,value11_a,arr) //

                        var value12 = _this.sf(val,value12_a,arr) //
                        var value13 = _this.sf(val,value13_a,arr) //
                        var value14 = _this.sf(val,value14_a,arr) //
                        var value15 = _this.sf(val,value15_a,arr) //
                        var value16 = _this.sf(val,value16_a,arr) //
                        var value17 = _this.sf(val,value17_a,arr) //
                        var value18 = _this.sf(val,value18_a,arr) //
                        var value19 = _this.sf(val,value19_a,arr) // 
                        var value20 = _this.sf(val,value20_a,arr) //
                        var value21 = _this.sf(val,value21_a,arr) //
                        var value22 = _this.sf(val,value22_a,arr) //
                        var value23 = _this.sf(val,value23_a,arr) //
                        var value24 = _this.sf(val,value24_a,arr) //

                        var value25 = _this.sf(val,value25_a,arr) //
                        var value26 = _this.sf(val,value26_a,arr) //
                        var value27 = _this.sf(val,value27_a,arr) //
                        var value28 = _this.sf(val,value28_a,arr) //
                        var value29 = _this.sf(val,value29_a,arr) //
                        var value30 = _this.sf(val,value30_a,arr) //
                        var value31 = _this.sf(val,value31_a,arr) //
                        var value32 = _this.sf(val,value32_a,arr)//
                        var value33 = _this.sf(val,value33_a,arr) //
                        var value34 = _this.sf(val,value34_a,arr) //
                        var value35 = _this.sf(val,value35_a,arr) //

                        var value36 = _this.sf(val,value36_a,arr) //
                        var value37 = _this.sf(val,value37_a,arr) //
                        var value38 = _this.sf(val,value38_a,arr) //
                        var value39 = _this.sf(val,value39_a,arr) //
                        var value40 = _this.sf(val,value40_a,arr) //
                        var value41 = _this.sf(val,value41_a,arr) //
                        var value42 = _this.sf(val,value42_a,arr) //
                        var value43 = _this.sf(val,value43_a,arr) //
                        var value44 = _this.sf(val,value44_a,arr) //
                        var value45 = _this.sf(val,value45_a,arr) //
   
                        var value46 = _this.sf(val,value46_a,arr) 
                        var value47 = _this.sf(val,value47_a,arr) //
                        var value48 = _this.sf(val,value48_a,arr)//
                        var value49 = _this.sf(val,value49_a,arr) //
                        var value50 =_this.sf(val,value50_a,arr)//
                        var value51 = _this.sf(val,value51_a,arr)//
                        var value52 =_this.sf(val,value52_a,arr) //
                        var value53 =_this.sf(val,value53_a,arr) //
                        var value54 =_this.sf(val,value54_a,arr) //
                        var value55 =_this.sf(val,value55_a,arr) // 
                        var value56 =_this.sf(val,value56_a,arr)//
                        var value57 =_this.sf(val,value57_a,arr) // 

                        var value58 =_this.sf(val,value58_a,arr) //
                        var value59 =_this.sf(val,value59_a,arr)//
                        var value60 =_this.sf(val,value60_a,arr) //
                        var value61 =_this.sf(val,value61_a,arr)//
                        var value62 =_this.sf(val,value62_a,arr) //    
                        
                        $(function(){
                      	var heatmapInstance = heatmap.create({  
				        container: document.querySelector('#heatmap_five'),
				        radius:radius,//
                        }); 
                          var all = {x:-99999999,y:-9999999999,value:120}      
                          var a = {x:200,y:520,value:valuez}//咚咚找房
                          var a1 = {x:200,y:490,value:valuez}
                          var a2 = {x:160+_this.getNum(0,30),y:490,value:valuez}
                          var a3 = {x:160+_this.getNum(0,30),y:520,value:valuez}
                          ///
                          var a4 = {x:200,y:460,value:value1}//启言
                          var a5 = {x:160,y:460,value:value1}
                          var a6 = {x:175,y:460,value:value1}
                          ///
                          var a7 = {x:200+_this.getNum(0,10),y:410,value:value61}//三叶草
                          var a8 = {x:230+_this.getNum(0,10),y:410,value:value61}
                          var a9 = {x:260,y:410,value:value61}
                          var a10 = {x:280,y:385,value:value61}
                          var a11 = {x:295,y:385,value:value61}
                          var a12 = {x:250+_this.getNum(0,10),y:385,value:value61}
                          var a13 = {x:200+_this.getNum(0,20),y:385,value:value61}
                          var a14 = {x:200+_this.getNum(0,20),y:435,value:value61}
                          var a15 = {x:180,y:420+_this.getNum(0,20),value:value61}
                          var a16 = {x:160,y:425,value:value61,radius:radius-10}
                          var a17 = {x:160,y:405,value:value61}
                          var a18 = {x:185-_this.getNum(0,20),y:380,value:value61}
                          ////
                          var a19 = {x:200+_this.getNum(0,10),y:310,value:value2}//vip
                          var a20 = {x:160,y:310,value:value2}
                          var a21 = {x:160,y:330+_this.getNum(0,20),value:value2}
                          var a22 = {x:180,y:330,value:value2}
                          var a23 = {x:180,y:350,value:value2}
                          var a24 = {x:210,y:350,value:value2}
                          var a25 = {x:190,y:280,value:value2}
                          /////
                          var a26 ={x:160+_this.getNum(0,20),y:215,value:value5}//舞台 
                          var a27 ={x:200,y:215,value:value5}
                          var a28 ={x:230,y:215,value:value5}
                          var a29 ={x:250,y:215,value:value5}
                          var a30 ={x:160,y:235+_this.getNum(0,20),value:value5}
                          var a31 ={x:160,y:265,value:value5}
                          var a32 ={x:160,y:280,value:value5}
                          var a33 ={x:210-_this.getNum(0,10),y:235,value:value5,radius:radius+20}
                          var a34 ={x:230+_this.getNum(0,10),y:245,value:value5}
                          var a35 ={x:255,y:255,value:value5}
                          /////
                          var a36 = {x:255,y:520,value:value62}//教育地产
                          var a37 = {x:230,y:520-_this.getNum(0,30),value:value62}
                          var a38 = {x:255+_this.getNum(0,15),y:490,value:value62}
                          var a39 = {x:285,y:490,value:value62}
                          var a40 = {x:285,y:530-_this.getNum(0,20),value:value62}
                          /////
                          var a41 = {x:255,y:460,value:value3}//本牛科技
                          var a42 = {x:230,y:460,value:value3}
                          var a43 = {x:240,y:490,value:value45}
                          var a44 = {x:255-_this.getNum(0,20),y:435,value:value45}
                          var a45 = {x:275,y:440,value:value3}
                         ///// 
                         var a46 = {x:255,y:360,value:value46}//BabyQ(10)
                         var a47 = {x:230,y:360+_this.getNum(0,20),value:value46}
                         var a48 = {x:280,y:350,value:value46}
                         var a49 = {x:280,y:335,value:value46}
                         var a50 = {x:260-_this.getNum(0,30),y:335,value:value46}
                         /////
                         var a51 = {x:255+_this.getNum(0,20),y:310,value:value4}//BabyQ(11)
                         var a52 = {x:255-_this.getNum(0,20),y:280,value:value4}
                         var a53 = {x:230,y:280+_this.getNum(0,30),value:value4}
                         var a54 = {x:230,y:330,value:value4}
                         var a55 = {x:270,y:280,value:value4}
                         /////
                         var a56 = {x:320-_this.getNum(0,20),y:520,value:value6} //中广
                         var a57 = {x:320,y:490+_this.getNum(0,10),value:value6} 
                         var a58 = {x:370,y:490+_this.getNum(0,10),value:value6} 
                         var a59 = {x:370,y:520,value:value6} 
                         var a60 = {x:345,y:520-_this.getNum(0,20),value:value6}
                         //////
                         var a61 = {x:320,y:460,value:value7} //小码王
                         var a62 = {x:290-_this.getNum(0,20),y:470-_this.getNum(0,20),value:value7}
                         var a63 = {x:350,y:460,value:value7}
                         var a64 = {x:350,y:490-_this.getNum(0,10),value:value7}
                         var a65 = {x:380,y:460,value:value7}
                         //////
                         var a66 = {x:320,y:410,value:value8} //小海马
                         var a67 = {x:290,y:410+_this.getNum(0,20),value:value8}
                         var a68 = {x:310+_this.getNum(0,20),y:435,value:value8}
                         /////
                        var a69 = {x:320,y:360,value:value9} //禧月荟
                        var a70 = {x:320+_this.getNum(0,20),y:385,value:value9}
                        var a71 = {x:290,y:365,value:value9}
                        var a72 = {x:290+_this.getNum(0,20),y:335,value:value9}
                        var a73 = {x:330,y:335,value:value9}
                        var a74 = {x:350+_this.getNum(0,20),y:335,value:value9}
                        var a75 = {x:350+_this.getNum(0,20),y:355,value:value9}
                         /////
                        var a76 = {x:320+_this.getNum(0,20),y:260,value:value11,radius:radius+10} //杨梅
                        var a77 = {x:360,y:260+_this.getNum(0,20),value:value11,radius:radius+10}
                        var a78 = {x:400,y:260-_this.getNum(0,20),value:value11,radius:radius+10}

                        var a79 = {x:320+_this.getNum(0,20),y:220+_this.getNum(0,20),value:value48,radius:radius+10} 
                        var a80 = {x:360+_this.getNum(0,20),y:220+_this.getNum(0,20),value:value48,radius:radius+10}
                        var a81 = {x:400,y:220+_this.getNum(0,20),value:value48,radius:radius+10}     

                        var a82 = {x:320+_this.getNum(0,20),y:300-_this.getNum(0,20),value:value48,radius:radius+10} 
                        var a83 = {x:360,y:300,value:value48,radius:radius+10}
                        var a84 = {x:400-_this.getNum(0,20),y:300-_this.getNum(0,20),value:value48,radius:radius+10}

                        var a85 = {x:285,y:300+_this.getNum(0,20),value:value48}
                        var a86 = {x:285,y:280,value:value11}
                        var a87 = {x:285,y:270-_this.getNum(0,20),value:value12}
                        var a88 = {x:285,y:240,value:value11}
                        var a89 = {x:285-_this.getNum(0,30),y:215,value:value48}
                        ///////
                        var a90 = {x:375,y:405,value:value10}//小方象
                        var a91 = {x:375,y:435-_this.getNum(0,15),value:value10}
                        var a92 = {x:345,y:435-_this.getNum(0,30),value:value47}
                        var a93 = {x:385,y:385,value:value47}
                        var a94 = {x:365-_this.getNum(0,10),y:385,value:value10}
                        var a95 = {x:375+_this.getNum(0,10),y:355,value:value10}
                        ////
                        var b = {x:460,y:510-_this.getNum(0,10),value:value14}//可瀚学堂
                        var b1 = {x:450-_this.getNum(0,20),y:510-_this.getNum(0,10),value:value14}
                        var b2 = {x:420,y:510-_this.getNum(0,10),value:value49}
                        var b3 = {x:395,y:510-_this.getNum(0,10),value:value49}
                        ////
                        var b4 = {x:395,y:460+_this.getNum(0,10),value:value15} //启邦
                        var b5 = {x:435-_this.getNum(0,10),y:460,value:value15} 
                        var b6 = {x:465-_this.getNum(0,10),y:460,value:value15} 
                        var b7 = {x:425+_this.getNum(0,20),y:480,value:value15} 
                        ////
                         var b8 = {x:420,y:410,value:value13} //兔加熊
        
                         var b10 = {x:410,y:440-_this.getNum(0,10),value:value13}
                         var b11= {x:400-_this.getNum(0,10),y:440-_this.getNum(0,10),value:value13}  
                         var b12 = {x:420,y:380+_this.getNum(0,10),value:value13}
                         var b13= {x:400-_this.getNum(0,10),y:380+_this.getNum(0,10),value:value13}                        
                        ////
                         var b14 = {x:460-_this.getNum(0,10),y:410,value:value16} //百变
                         var b15 = {x:460-_this.getNum(0,10),y:380+_this.getNum(0,20),value:value16}
                         var b16 = {x:460-_this.getNum(0,10),y:440-_this.getNum(0,20),value:value16}
                         var b17 = {x:440,y:400+_this.getNum(0,10),value:value16}
                        /////
                         var b18 = {x:460-_this.getNum(0,10),y:360,value:value50} //多多熊
                         var b19 = {x:420,y:360,value:value50} 
                         var b20 = {x:400,y:320+_this.getNum(0,30),value:value50} 
                         var b21 = {x:410,y:335,value:value50} 
                         var b22 = {x:430+_this.getNum(0,10),y:335,value:value50} 
                        //////
                         var b23 = {x:460,y:310,value:value18}  //世尔英语
                         var b24 = {x:440-_this.getNum(0,10),y:310-_this.getNum(0,10),value:value18}
                         var b25 = {x:450+_this.getNum(0,20),y:330,value:value18}
                         //////
                         var b26 =  {x:460-_this.getNum(0,10),y:260-_this.getNum(0,10),value:value19}  //五颗星
                         var b27 =  {x:460,y:230,value:value19}
                         var b28 =  {x:460-_this.getNum(0,10),y:290-_this.getNum(0,10),value:value19}

                         var b29 =  {x:440-_this.getNum(0,10),y:260,value:value19}  
                         var b30 =  {x:440-_this.getNum(0,10),y:230,value:value19}
                         var b31 =  {x:440,y:290-_this.getNum(0,10),value:value19}                
/////////////////////////////////////////////////////////////////////
                          var az = {x:200+310,y:520,value:value20}//美育
                          var a1z = {x:200+310,y:490,value:value20}
                          var a2z = {x:160+310+_this.getNum(0,30),y:490,value:value20}
                          var a3z = {x:160+310+_this.getNum(0,30),y:520,value:value20}
                          ///
                          var a4z = {x:200+340,y:430,value:value21}//全美教育
                          var a5z = {x:160+340,y:430,value:value21}
                          var a6z = {x:175+340,y:430,value:value21}
                          ///
                          var a7z = {x:200+310+_this.getNum(0,10),y:400,value:value28}//eta
                          var a8z = {x:230+310+_this.getNum(0,10),y:400,value:value28}
                          var a9z = {x:260+310,y:400,value:value28}
                          var a10z = {x:280+310,y:375,value:value28}
                          var a11z = {x:295+310,y:375,value:value28}
                          ////
                          var a12z = {x:250+310,y:385,value:value22}//小小运动馆
                          var a13z = {x:200+310,y:385,value:value22}
                          var a14z = {x:200+310,y:435,value:value22}
    
                          var a17z = {x:160+310,y:405,value:value22}
                          var a18z = {x:185+310-_this.getNum(0,20),y:380,value:value22}
                          ////
                          var a19z = {x:200+310+30+_this.getNum(0,10),y:310,value:value23}//天行达阵
                          var a20z = {x:160+310+30,y:310,value:value23}
                          var a21z = {x:160+310+30,y:330+_this.getNum(0,20),value:value23}
                          var a22z = {x:180+310+30,y:330,value:value23}
                          var a23z = {x:180+310+30,y:350,value:value23}
                          var a46z = {x:255+310,y:360,value:value23}
                          var a47z = {x:230+310,y:360+_this.getNum(0,20),value:value23}
                         var a50z = {x:260+310-_this.getNum(0,30),y:335,value:value23}
                          /////
                          var a26z ={x:160+310+30+_this.getNum(0,20),y:215,value:value24}//蓝袜 
                          var a27z ={x:200+310+30,y:215,value:value24}
                          var a28z ={x:230+310+30,y:215,value:value24}
                        ////
                          var a30z ={x:160+310+30,y:235+_this.getNum(0,20),value:value25}//博沃思
                          var a31z ={x:160+310+30,y:265,value:value25}
                          var a32z ={x:160+310+30,y:280,value:value25}
                          var a33z ={x:210+310+30-_this.getNum(0,10),y:235,value:value25,radius:radius+20}

                          /////
                          var a36z = {x:255+310,y:520,value:value26}//东方英文
                          var a37z = {x:230+310,y:520-_this.getNum(0,30),value:value26}
                          var a38z = {x:255+310+_this.getNum(0,15),y:490,value:value26}
                          var a39z = {x:285+310,y:490,value:value26}
                          var a40z = {x:285+310,y:530-_this.getNum(0,20),value:value26}
                          /////
                          var a41z = {x:255+310,y:460,value:value27}//兑奖区
                          var a42z = {x:230+310,y:460,value:value27}
                          var a43z = {x:240+310,y:490,value:value51}
                          var a44z = {x:255+310-_this.getNum(0,20),y:435,value:value51}
                          var a45z = {x:275+310,y:440,value:value27}
                         ///// 
                         var a51z = {x:255+310+_this.getNum(0,20),y:310,value:value29}//趣旅
                         var a52z = {x:255+310-_this.getNum(0,20),y:280,value:value52}
                         var a53z = {x:230+310,y:280+_this.getNum(0,30),value:value29}
                         var a54z = {x:230+310,y:330,value:value52}
                         var a55z = {x:270+310,y:280,value:value29}
                          var a86z = {x:285+310,y:280,value:value29}
                        ///
                        var a87z = {x:285+310,y:270-_this.getNum(0,20),value:value38}//柴湾
                        var a88z = {x:285+310,y:240,value:value38}
                         /////
                         var a56z = {x:320+310-_this.getNum(0,20),y:520,value:value32} //骑士
                         var a57z = {x:320+310,y:490+_this.getNum(0,10),value:value32} 
                         var a58z = {x:370+310,y:490+_this.getNum(0,10),value:value32} 
                         var a59z = {x:370+310,y:520,value:value32} 
                         var a60z = {x:345+310,y:520-_this.getNum(0,20),value:value32}
                         var bz = {x:460+310,y:510-_this.getNum(0,10),value:value32}
                        var b1z = {x:450+310-_this.getNum(0,20),y:510-_this.getNum(0,10),value:value32}
                        var b2z = {x:420+310,y:510-_this.getNum(0,10),value:value32}
                        var b3z = {x:395+310,y:510-_this.getNum(0,10),value:value32}       
                        var b4z = {x:395+310,y:460+_this.getNum(0,10),value:value32}
                        var b5z = {x:435+310-_this.getNum(0,10),y:460,value:value32} 
                        var b6z = {x:465+310-_this.getNum(0,10),y:460,value:value32} 
                        var b7z = {x:425+310+_this.getNum(0,20),y:480,value:value32}                   
                         //////
                         var a66z = {x:320+310,y:410,value:value33} //金点
                         var a67z = {x:290+310,y:410+_this.getNum(0,20),value:value33}
                         var a68z = {x:310+310+_this.getNum(0,20),y:435,value:value33}
                        var a90z = {x:375+310,y:405,value:value53}
                        var a91z = {x:375+310,y:435-_this.getNum(0,15),value:value53}
                        var a92z = {x:345+310,y:435-_this.getNum(0,30),value:value53} 
                          var a61z = {x:320+310,y:460,value:value53} 
                         var a62z = {x:290+310-_this.getNum(0,20),y:470-_this.getNum(0,20),value:value33}
                         var a63z = {x:350+310,y:460,value:value33}
                         var a64z = {x:350+310,y:490-_this.getNum(0,10),value:value33}
                         var a65z = {x:380+310,y:460,value:value33}            
                         var b10z = {x:410+310,y:440-_this.getNum(0,10),value:value33}
                         var b11z= {x:400+310-_this.getNum(0,10),y:440-_this.getNum(0,10),value:value33}              
                         /////
                        var a69z = {x:320+310,y:360,value:value34} //正一
                        var a70z = {x:320+310+_this.getNum(0,20),y:385,value:value34}
                        var a71z = {x:290+310,y:365,value:value34}
                        var a93z = {x:385+310,y:385,value:value34}
                        var a94z = {x:365+310-_this.getNum(0,10),y:385,value:value34}
                        var a95z = {x:375+310+_this.getNum(0,10),y:355,value:value34}    
                        /////
                       var a72z = {x:290+310+_this.getNum(0,20),y:335,value:value35}//达内
                        var a73z = {x:330+310,y:335,value:value35}
                        var a74z = {x:350+310+_this.getNum(0,20),y:335,value:value35}
                        var a75z = {x:350+310+_this.getNum(0,20),y:355,value:value35}  
                        var a85z = {x:285+310,y:300+_this.getNum(0,20),value:value35}         
                         /////
                        var a82z = {x:320+310+_this.getNum(0,20),y:300-_this.getNum(0,20),value:value54,radius:radius+10} //书戏
                        var a83z = {x:360+310,y:300,value:value54,radius:radius+10}
                        var a77z = {x:360+310,y:260+_this.getNum(0,20),value:value36,radius:radius+10}
                        var a84z = {x:400+310-_this.getNum(0,20),y:300-_this.getNum(0,20),value:value36,radius:radius+10}     
                         /////
                        var a76z = {x:320+310+_this.getNum(0,20),y:260,value:value31,radius:radius+10} //小马快跑
                        var a78z = {x:400+310,y:260-_this.getNum(0,20),value:value31,radius:radius+10}
                        var a79z = {x:320+310+_this.getNum(0,20),y:220+_this.getNum(0,20),value:value31,radius:radius+10} 
                        var a80z = {x:360+310+_this.getNum(0,20),y:220+_this.getNum(0,20),value:value31,radius:radius+10}
                        var a81z = {x:400+310,y:220+_this.getNum(0,20),value:value31,radius:radius+10}     

                        ////
                          var b12z = {x:420+310,y:380+_this.getNum(0,10),value:value37}
                          var b13z= {x:400+310-_this.getNum(0,10),y:380+_this.getNum(0,10),value:value37}     
                        var b15z = {x:460+310-_this.getNum(0,10),y:380+_this.getNum(0,20),value:value37}//国际击剑
                        var b8z = {x:420+310,y:410,value:value37} 
                         var b14z = {x:460+310-_this.getNum(0,10),y:410,value:value37}
                         var b16z = {x:460+310-_this.getNum(0,10),y:440-_this.getNum(0,20),value:value37}
                         var b17z = {x:440+310,y:400+_this.getNum(0,10),value:value37} 
                        var b18z = {x:460+310-_this.getNum(0,10),y:360,value:value37} 
                         var b19z = {x:420+310,y:360,value:value37} 
      
                        //////
                         var b23z = {x:460+310,y:310,value:value30}  ////奥尔夫
                        var b20z = {x:400+310,y:320+_this.getNum(0,30),value:value30} 
                         var b21z = {x:410+310,y:335,value:value30} 
                         var b22z = {x:430+310+_this.getNum(0,10),y:335,value:value30}  
                         var b24z = {x:440+310-_this.getNum(0,10),y:310-_this.getNum(0,10),value:value30}
                         var b25z = {x:450+310+_this.getNum(0,20),y:330,value:value30}
                         //////
                         var b26z =  {x:460+310-_this.getNum(0,10),y:260-_this.getNum(0,10),value:value39}  //仕馨
                         var b27z =  {x:460+310,y:230,value:value39}
                         var b28z =  {x:460+310-_this.getNum(0,10),y:290-_this.getNum(0,10),value:value39}
                         var b29z =  {x:440+310-_this.getNum(0,10),y:260,value:value39}  
                         var b30z =  {x:440+310-_this.getNum(0,10),y:230,value:value39}
                         var b31z =  {x:440+310,y:290-_this.getNum(0,10),value:value39}        
                        /////
                        var c = {x:830,y:260-_this.getNum(0,10),value:value40,radius:radius+10}//伯格曼
                        var c1 = {x:830,y:290+_this.getNum(0,10),value:value40,radius:radius+10}
                        var c2 = {x:830+_this.getNum(0,30),y:330+_this.getNum(0,30),value:value56,radius:radius+10}
                        var c3 = {x:830-_this.getNum(0,30),y:400-_this.getNum(0,30),value:value56,radius:radius+10}
                        ////
                        var d = {x:790,y:260,value:value41} //二楼平台出入口
                        var d1 = {x:790,y:290,value:value57}
                        var d2 = {x:810,y:320,value:value41}
                        ////
                        var e = {x:500,y:200,value:value44}  //展商 
                        // var e1 = {x:500,y:260,value:value44} 
                        var e2 = {x:490,y:240,value:value60} 
                        var e4 = {x:470+_this.getNum(0,50),y:220,value:value44} 
                        ////
                        var f = {x:130+_this.getNum(0,10),y:450,value:value42}  //2号门 
                        var f1 = {x:110+_this.getNum(0,10),y:450,value:value58}
                        var f2 = {x:90+_this.getNum(0,10),y:450,value:value58}
                        var f3 = {x:150,y:450+_this.getNum(0,30),value:value42}
                        ////
                        var g = {x:130,y:280,value:value59}  //1号门
                        var g1 = {x:110+_this.getNum(0,10),y:280,value:value43}
                        var g2 = {x:90+_this.getNum(0,10),y:280,value:value59}
                        var g3 = {x:150,y:280+_this.getNum(0,30),value:value43}     
                          var dataPoints = [g,g1,g2,g3,
                                            f,f1,f2,f3,
                                            e,e2,e4,
                                            d,d1,d2,
                                            c,c1,c2,c3,
                                            all,a,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,
                                            a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,
                                            a34,a35,a36,a37,a38,a39,a40,a41,a42,a43,a44,a45,a46,a47,a48,a49,
                                            a50,a51,a52,a53,a54,a55,a56,a57,a58,a59,a60,a61,a62,a63,a64,a65,
                                            a66,a67,a68,a69,a70,a71,a72,a73,a74,a75,a76,a77,a78,a79,a80,a81,
                                            a82,a83,a84,a85,a86,a87,a88,a89,a90,a91,a92,a93,a94,a95,
                                            b,b2,b1,b3,b4,b5,b6,b7,b8,b10,b11,b12,b13,b14,b15,b16,b17,b18,
                                            b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,
                                            az,a1z,a2z,a3z,a4z,a5z,a6z,a7z,a8z,a9z,a10z,a11z,a12z,a13z,a14z,a17z,
                                            a18z,a19z,a20z,a21z,a22z,a23z,a26z,a27z,a28z,a30z,a31z,a32z,a33z,
                                            a36z,a37z,a38z,a39z,a40z,a41z,a42z,a43z,a44z,a45z,a46z,a47z,
                                            a50z,a51z,a52z,a53z,a54z,a55z,a56z,a57z,a58z,a59z,a60z,a61z,a62z,a63z,a64z,a65z,
                                            a66z,a67z,a68z,a69z,a70z,a71z,a72z,a73z,a74z,a75z,a76z,a77z,a78z,a79z,a80z,a81z,
                                            a82z,a83z,a84z,a85z,a86z,a87z,a88z,a90z,a91z,a92z,a93z,a94z,a95z,
                                            bz,b2z,b1z,b3z,b4z,b5z,b6z,b7z,b8z,b10z,b11z,b12z,b13z,b14z,b15z,b16z,b17z,b18z,
                                            b19z,b20z,b21z,b22z,b23z,b24z,b25z,b26z,b27z,b28z,b29z,b30z,b31z,
                                            ]
                            heatmapInstance.addData(dataPoints);   
                        })
                             $(function(){
                                   if($('#heatmap_five').children().length>1){
                                         $('#heatmap_five').children().eq(0).remove();
                                   }
                            })			                     
                }
            }
        }
</script>
