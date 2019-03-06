<template>
		<div class="gardencustomers">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>		
</template>
<script>
	import echarts from "echarts"
	export default {
		name:"gardencustomers",
		data() {
			return {
			id:"gardencustomers",
			width:"600px",
			height:"200px",	
			option:{
					 title: {
						text: '进驻客户数量',
						x:'left',
						textStyle: {
							fontSize: 16,
							backgroundColor:"#f0f",
							fontStyle: 'normal',
							fontWeight: 'normal',
							color:"#fff"
						},						
					},
					legend: {
						data:[],
						right: '3%',
						top: '15%',
						textStyle:{
						color:[],
						},
					},
					grid: {
						left: '3%',
						right: '4%',
						top: '37%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: [],
						splitLine: {
							show: false
						}, //去除网格线
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#fff',
								width: '1'
							}
						},
						// axisLabel:{interval: 2}
					},
					textStyle:{
						color:'#fff',
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: false
						}, //去除网格线
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#30dbe3',
								width: '0'
							}
						},
					},
					series: []
				}
			}
		},
		mounted(){
			// this.getlist()
			
		},
		methods: {
			getlist(id){
				this.$api.getParkCusomer(id).then(res=>{
					
					console.log(res)
					var list=[]
					var color=['#be5769','#666666','#00fff9'];
					var type=["line","line","bar"]
					this.option.legend.color=color;
					console.log(res.data[0].typeName)
						res.data.forEach((e, i, a)=> {
							this.option.legend.data[i]=e.clientType;
							
							var numdata=[]
							var month=[]
							e.content.forEach((me,mi,ma)=>{
								numdata.push(me.num)
								month.push(me.month+'月')
							})
							this.option.xAxis.data=month;
								list.push({
										name:e.clientType,
										type:type[i],
										// stack: '总量',
										x:20,
										barWidth : 8,//柱图宽度
										data:numdata,
										itemStyle: {//直线颜色
											normal: {
												color: new echarts.graphic.LinearGradient(
													0, 0, 0, 1,
													[
														{offset: 0, color: '#33b7b7'},
														{offset: 0.5, color: '#38bbb9'},
														{offset: 1, color: '#00fff9'}
													]
												),
												// color: color[i],
												lineStyle: {
													color: color[i],
													width:2
												}
											}
										},
									
								})
						})
						this.option.series=list
				})
			}
		}

		
	}
</script>

<style scoped>
	.gardencustomers{
		/* width:600px; */
		height:210px;
		/* padding: 2% 0; */
	}
</style>
