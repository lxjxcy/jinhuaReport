<template>
	
	<div :style="{height:'320px',width:'480'}" ref="myxiasha"></div>
	
</template>

<script>
	import echarts from "echarts"
	import jinhuajson from "@/assets/map.json"
	export default {
		name:"xiashaMap",
		data(){
			return{
				geoCoordMap:{
					'亚泰科技园':[119.6492416192,29.0820044046],
					'双溪基地':[119.6391300000,29.0874600000],
					'创新大厦':[119.6435500000,29.0800400000],
					'网络经济中心':[119.5715000000,29.0862400000],
					'仙华基地':[119.6220400000,29.0470400000],	
				},
// 				datalist:[
// 					 [{name: '网络经济中心', value: 100},],
// 					 [ {name: '创新大厦', value: 300},],
// 					 [{name: '创新大厦', value: 300},],
// 					 [{name: '网络经济中心', value: 100},],
// 					 [{name: '网络经济中心', value: 100},]
// 				]
				data: [
				 {name: '网络经济中心', value: 100},		 
				 {name: '创新大厦', value: 300},
				 {name: '亚泰科技园', value: 500},
				 {name: '仙华基地', value: 800},
				{name: '双溪基地', value: 1000},
				],
			}
		},
		// mixins:["jinhua"],
		mounted(){
			this.getMap()
		},
		methods:{
			convertData(data){
				console.log(data)
				var res = [];
				for (var i = 0; i < data.length; i++) {
						var geoCoord = this.geoCoordMap[data[i].name];
						if (geoCoord) {
								res.push({
										// name: data[i].name,
										value: geoCoord.concat(data[i].value)
								});
						}
				}
				return res;
		},
			getMap(){		
				// this.axios.get("../../../../../../static/jinhua.json").then(res=>{
					echarts.registerMap('金华', jinhuajson);
					let myxiasha = echarts.init(this.$refs.myxiasha);
					var series=[]
					var color= ['#ff3333', 'orange', 'yellow','lime','aqua']
						for(var i=0;i<this.data.length;i++){
							var list=[];
							list.push(this.data[i])
							console.log(list)
							series.push({
								name: list[0].name,
								type: 'effectScatter',
								coordinateSystem: 'geo',
								data: this.convertData(list.sort((a, b)=> {
										return b.value - a.value;
								})),
// 								data: this.convertData(this.data.sort((a, b)=> {
// 										return b.value - a.value;
// 								})),
								symbolSize: function (val) {
										return 10 ;
								},
								showEffectOn: 'render',
								rippleEffect: {
									period:3,   //动画时间，值越小速度越快
										brushType: 'stroke', //波纹绘制方式 stroke, fill
										// scale:    //波纹圆环最大限制，值越大波纹越大
								},
								hoverAnimation: true,
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: color[i],
											shadowBlur: 10,
											shadowColor: '#333'
										}
									},
									zlevel: 1
							})
							
						}
					myxiasha.setOption({
						// backgroundColor: '#404a59',
						title: {
								text: '',							
								left: 'left',
								textStyle: {
										color: '#fff'
								}
						},
						tooltip : {
								trigger: 'item'
						},
						legend: {
							orient: 'horizontal',
							right: 'right',
							bottom:'bottom',
							formatter: (name)=>{
							var data=this.data
							var total = 0;
							var target;
							for (var i = 0;i < data.length; i++) {
							total += parseInt(data[i].value);
							if (data[i].name == name) {
								target = data[i].value;
								}
							}
							return name + '  |  ' + parseInt(target)
							},
							// data:['网络经济中心','创新大厦',],
							textStyle: {
								color: '#fff'
							},
							selectedMode: 'multiple'
						},
// 						legend: {
// 							orient: 'vertical',
// 							y: 'bottom',
// 							x:'right',
// 							data:['pm2.5',"ssss"],
// 							textStyle: {
// 								color: '#fff'
// 							}
// 						},
						grid: {
							left: '10%',
							top:"4%"	
						},
						visualMap: { //图例值控制
							min : 0,
							max : 1000,
							calculable : true,
							color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
							textStyle:{
								color:'#fff'
							}
						},
						
						geo: {
							map: '金华',
							label: {
								emphasis: {
									show: true
								}
							},
							roam: true,
							zoom: 1.3,
							itemStyle: {
								normal: {
									areaColor: '#323c48',
									borderColor: '#111'
								},
								emphasis: {
									areaColor: '#2a333d'
								}
							}
						},
						series:series
// 						series : [
// 							{
// 								name: 'Top 10',
// 								type: 'effectScatter',
// 								coordinateSystem: 'geo',
// 								data: this.convertData(this.data.sort((a, b)=> {
// 										return b.value - a.value;
// 								})),
// // 								data: this.convertData(this.data.sort((a, b)=> {
// // 										return b.value - a.value;
// // 								})),
// 								symbolSize: function (val) {
// 										return 10 ;
// 								},
// 								showEffectOn: 'render',
// 								rippleEffect: {
// 									period:3,   //动画时间，值越小速度越快
// 										brushType: 'stroke', //波纹绘制方式 stroke, fill
// 										// scale:    //波纹圆环最大限制，值越大波纹越大
// 								},
// 								hoverAnimation: true,
// 									label: {
// 										normal: {
// 											formatter: '{b}',
// 											position: 'right',
// 											show: true
// 										}
// 									},
// 									itemStyle: {
// 										normal: {
// 											color: '#f0f',
// 											shadowBlur: 10,
// 											shadowColor: '#333'
// 										}
// 									},
// 									zlevel: 1
// 							},
// 						]
					})
					
				// })

				 
				
				
			}
		}
		
	}
</script>

<style>

</style>
