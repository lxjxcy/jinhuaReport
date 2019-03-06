
 
 
  
  <template>
  	<div>
  		<div class="containers">
  			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
  		</div>
  	</div>	
  </template>
  <script>	
	import echarts from "echarts"
  	export default {
  		name:"vacancy",
  		data() {
  			return {
  				id:"daynum",
  				width:"295px",
  				height:"177px",
  				option:{
  					title : {
  						text: '空置天数占比分析',
  						x:'left',
  						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
  							// fontFamily: 'Arial, Verdana, sans...',
  							fontSize: 16,
  							backgroundColor:"#f0f",
  							fontStyle: 'normal',
  							fontWeight: 'normal',
  							color:"#fff"
  						},
  					},
  					grid: {
  						left: '0',
  						top:"2%"
  						
  						
  					},
  					tooltip: {
  						trigger: 'item',
  						formatter: "{a} <br/>{b}: {c} ({d}%)"
  					},
  					// color:['#62b6ed','#ffb400','#66f084','#ff9e55'],
// 						itemStyle: {
// 			                normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
													{offset: 0, color: '#00c7e0'  },
			//                    {offset: e.percent, color: '#2945b2' },
												{offset: 1, color: '#00e593' },
												], false),
// 			                }
// 			            },
  					series: [
  						{
  							name:'访问来源',
  							type:'pie',
  							itemGap: 60,
  							radius: ['25%', '40%'],
  							center: ['50%', '60%'],//饼图的位置 
  							avoidLabelOverlap: false,
  							label: {
  								formatter:(params)=>{
  									var name=params.name
  									var value=params.percent+"%";
  										var arr = [
  										'{a|'+name+'}',
  										'{b|（'+value+'）}',
  									]
  									return arr.join('\n')
  								},
									textStyle:{
										rich:{
											a:{
												fontSize:12,
												verticalAlign:'top',
												align:'left',
												color:"#00fff9"
											},
											b:{
												fontSize:12,
												align:'center',
												color:"#fff",
											}
										}
									},
  								color:"#00fff9",
  									emphasis: {
  											show: true
  									}
  							},
  									labelLine:{  
  										normal:{  
  												length:5,
													 width:2
  										}  
  								}, 
									itemStyle:{
											borderWidth:5, //设置border的宽度有多大
											borderColor:'#252b35',
									},
  							data:[]
  						}
  					],
  				},			
  			}
  		},
  		mounted(){
  			// this.getlist(1)
  		
  		},
  		methods: {
  			getlist(id){
  				this.$api.getDayRoom(id).then(res=>{
  					var data=[];
  					res.data.forEach((e, i, a)=> {
							if(e.num!=0){
								data.push({
  							value:e.num,
  							name:e.type
  						})
							}
  						
  					})
  					this.option.series[0].data=data;
  					
  				})
  			}
  		},
  	}
  
  </script>
  <style scoped>
  .containers{
  	/* margin-left: 2%; */
  
  }
  	
  </style>