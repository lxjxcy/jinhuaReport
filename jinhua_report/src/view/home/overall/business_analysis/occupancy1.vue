<template>
	<div class="occupancy">
		<!-- <marquee direction="left" scrollamount="5" scrolldelay="-10" loop="-1"> -->
           <Charts :id="id" v-if="hackReset" :option="option" :height="height" :width="width"/>
		   <!-- <span></span> -->
         <!-- </marquee> -->
		
	</div>
</template>
<script>	
import echarts from "echarts";
	export default {
		name:"occupancy",
		data() {
			return {
				id:"occupancys",
				width:"610px",
				init:"",
				hackReset:true,
				height:"230px",
				
				option:{
						title : {
							text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 20,
								backgroundColor:"#f0f",
								fontStyle: 'normal',
								fontWeight: 'normal',
								color:"#fff"
							},
					},
					// color:['#BBDEFB',"#eee"],
					tooltip : {
						trigger: 'item',
					},
// 					legend: {
// 						data:['云溪楼'],
// 						left: '0%',
// 						top: '15%',
// 						icon: "circle",
// 						textStyle:{
// 						color:['#fff'],
// 						},
// 					},
					
					grid: {
						left: '0',
						top:"2%"	,
						left: '3%',
						right: '4%',
						bottom: '0%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
					
				]
				},
				
			}
		},
		mounted(){
			// this.getlist(1)
		},
		methods: {
			clear(){
				window.clearInterval(this.init)
			},
			getlist(id){
				this.clear()
				
				this.$api.getReaBuilding(id).then(res=>{
					this.hackReset = false
						this.$nextTick(() => {
						this.hackReset = true
					})
					
					// if(res.data.length/6)
					var arr=[]
					var len=res.data.length/6;
				
					
					if(len<=1){
						this.savedata(res.data)
					
						return;
					}
				
					for(var i=0;i<len;i++){
						var list=[]
						 list.push(res.data.slice(i*6,(i+1)*6))
						 arr.push(list)
					}
					console.log(arr)
					
				
					
					this.savedata(arr[0][0])
					
						var index=0;
					
					this.init=window.setInterval(()=>{
						index++;
						
						if(index==arr.length){
							index=0
						}

						this.hackReset = false
							this.$nextTick(() => {
							this.hackReset = true
						})
						this.savedata(arr[index][0])	
							
													
					},3000)
					
					
					// this.savedata(data)					
				
				})
			},
			
			savedata(data){
				var needdata=[]
				data.forEach((e,i,a)=>{
					// var centerleft=i*60/100
					var center = 17*i+8;
					needdata.push({
            name: '',
            type: 'pie',
						radius: ['30%', '40%'],
            center: [center + "%", "50%"],//饼图的位置 
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: { //  饼图图形上的文本标签
                normal: { // normal 是图形在默认状态下的样式
                    show: true,
                    position: 'center',
                    color: '#fff',
                    fontSize: 14,
										
                    // fontWeight: '100',
                    formatter: '{b}\n{c}%' // {b}:数据名； {c}：数据值； {d}：百分比
                }
            },
            data: [{
                    value: (e.percent*100).toFixed(0),
                    name: e.buildingName,
						itemStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
													{offset: 0, color: '#98d0db'  },
			//                    {offset: e.percent, color: '#2945b2' },
												{offset: 1, color: '#2945b2' },
												], false)
			                }
			            },
                    label:{
                        normal:{
                            show:true
                        }
                    }
                 },
                {
                    value: 100-(e.percent*100).toFixed(0),
                    name: '',
									itemStyle: {
			                normal: {
			                    color:"#313131"
			                }
			            },
										label: {
                        normal: {
                        show: false
                        }
                    }
                }
            ]
					},
							{
								name: '',
								type: 'pie',
								radius: ['33%'],
								center: [center-0.5 + "%", "49%"],//饼图的位置 
								avoidLabelOverlap: false,
								hoverAnimation:false,
								label: { //  饼图图形上的文本标签
										normal: { // normal 是图形在默认状态下的样式
												show: true,
												position: 'center',
												color: '#fff',
												fontSize: 14,
												
												// fontWeight: '100',
												formatter: '{b}\n{c}%' // {b}:数据名； {c}：数据值； {d}：百分比
										}
								},
								data: [
										{
												value: 100,
												name: '',
											itemStyle: {
					                normal: {
					                    color:"#000"
					                }
					            },
												label: {
														normal: {
														show: false
														}
												}
										}
								]
							},)
						
				})
				this.option.series=needdata;
				
				
			}
		},
	}

</script>
<style scoped>
	.occupancy{
		/* width:460px; */
		overflow:scroll;
		
		/* padding:2%; */
	}
	.occupancy::-webkit-scrollbar {
	    display: none;
	}
	
</style>