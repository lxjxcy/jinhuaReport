<template>
	<div>
		<div class="income">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>
	
	</div>
	
</template>
<script>	
import util from "../../../../common/js/tool.js"
	export default {
		name:"income",

		data() {
			return {
			id:"income",
			width:"600px",
			height:"200px",
			j:0,
			xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
			option:{
				     title: {
						text: '租金收入（万元）',
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
					legend: {
						data:[],
						
						right: '3%',
						top: '12%',
						// selectedMode:"single",
						// inactiveColor: '#999',
						// selected:{},
						icon: "circle",
						textStyle:{
						color:["#fff"],
						},
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: this.xAxis,
						splitLine: {
							show: false
						}, //去除网格线
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#30dbe3',
								width: '1'
							}
						},
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
			// this.getlist(1)
			// this.moveLine()
		},
		methods: {
			clear(){
				window.clearInterval(this.init)
			},
			 getlist(id){
				 this.clear()
				 this.$api.getBuilding(id).then(res=>{
					 this.savedata(res.data)
					 var arr=[]
						var len=res.data.length;						
						if(len<=1){
							this.savedata(res.data)						
							return;
						}
						for(var i=0;i<len;i++){
							var list=[]
							 list.push(res.data.slice(i,i+1))
							 arr.push(list)
						}						
						this.savedata(arr[0][0])
							var index=0;							
						this.init=window.setInterval(()=>{
							index++;
							if(index==res.data.length){
								index=0
							}

							this.hackReset = false
								this.$nextTick(() => {
								this.hackReset = true
							})
							// console.log(arr[index][0])
							this.savedata(arr[index][0])		
														
						},2000)
					 // this.$store.commit('saveIncome',res.data)
				 })			
			},			
			savedata(data){
				var list=[]
				var color=util.randomColor()
				// var color=['#ff101c','#ff9100','#d03275','#00aad4',"#00bb6e",'#b4b32b']
				this.option.legend.color=[color];
				data.forEach((e, i, a)=> {
					this.option.legend.data[i]=e.typeName;	
					var numdata=[]
					var month=[]
					e.content.forEach((me,mi,ma)=>{
						numdata.push(me.num)
						month.push(me.month+'月')
					})
					this.option.xAxis.data=month;
						list.push({
								name:e.typeName,
								type:'line',
								animation: false,
								// stack: '总量',
								data:numdata,
								

								itemStyle: {//直线颜色
									normal: {										
										color:color ,
										lineStyle: {
											color: color,
											width:2
										}
									}
								},
							
						})
				})
				this.option.series=list
			},
			moveLine(){
				this.timer = setTimeout(()=>{
					let selected = {};
					var legendData=this.option.legend.data;
				
					for(let i=0;i<legendData.length;i++){    // this.legendData是legend中data的值，上面是写死的值，做自动切换时不要写死
					if(this.j==i){
						selected[legendData[i]] = true;
					}else{
						selected[legendData[i]] = false;
					}
					};					
					this.option.legend.selected = selected;    //更改legend里的selected
					this.j += 1;
					if(this.j == legendData.length){
					this.j = 0;
					};
					this.moveLine();
				},3000)
			}
	
		},
		
		
		
	}

</script>
<style scoped>
.income{
	height:210px;
	/* position: relative; */
	
	/* border-left: 2px solid #fff; */
	/* padding-top:3%; */
/* 	padding-left: 2%;
	margin-bottom: 1.2%; */
}
	
</style>