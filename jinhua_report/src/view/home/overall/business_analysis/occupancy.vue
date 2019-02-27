<template>
	<div class="occupancy">
		 <vue-seamless-scroll :data="list" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
            <li v-for="item in list" >
						<!-- {{str}} -->
							<Charts :id="item.id"   :option="item.option" :height="height" :width="width"/>
						</li>
        </ul>
    </vue-seamless-scroll>
		<!-- <div>sss</div> -->
		<!-- <marquee direction="left" scrollamount="5" scrolldelay="-10" loop="-1"> -->
		
           
		   <!-- <span></span> -->
         <!-- </marquee> -->
		
	</div>
</template>
<script>
	import util from "../../../../common/js/tool.js"
import echarts from "echarts";
	export default {
		name:"occupancy",
		data() {
			return {
				str:util.randomStr(false,5,10),
				lists:[
					{id:1,option:{num:1}},
					{id:2,option:{num:2}}
				],
				list:[
					{id:util.randomStr(false,5,10),option:{
						title : {
							// text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 16,
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
					grid: {
						left: '30%',
						top:"0"	,
						left: '3%',
						right: '4%',
						bottom: '1%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
							{
								name: '',
								type: 'pie',
								radius: ['70%', '90%'],
								center: ["50%", "60%"],//饼图的位置 
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
												value: 20,
												name: "1号楼",
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
												value: 100-20,
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
										radius: ['70%'],
										center: ["50%", "58%"],//饼图的位置 
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
									
								
						}
					
				]
				}},
					{id:util.randomStr(false,5,10),option:{
						title : {
							// text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 16,
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
					grid: {
						left: '30%',
						top:"0"	,
						left: '3%',
						right: '4%',
						bottom: '1%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
							{
								name: '',
								type: 'pie',
								radius: ['70%', '90%'],
								center: ["50%", "60%"],//饼图的位置 
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
												value: 20,
												name: "1号楼",
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
												value: 100-20,
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
										radius: ['70%'],
										center: ["50%", "58%"],//饼图的位置 
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
									
								
						}
					
				]
				}},
					{id:util.randomStr(false,5,10),option:{
						title : {
							// text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 16,
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
					grid: {
						left: '30%',
						top:"0"	,
						left: '3%',
						right: '4%',
						bottom: '1%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
							{
								name: '',
								type: 'pie',
								radius: ['70%', '90%'],
								center: ["50%", "60%"],//饼图的位置 
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
												value: 20,
												name: "1号楼",
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
												value: 100-20,
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
										radius: ['70%'],
										center: ["50%", "58%"],//饼图的位置 
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
									
								
						}
					
				]
				}},
					{id:util.randomStr(false,5,10),option:{
						title : {
							// text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 16,
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
					grid: {
						left: '30%',
						top:"0"	,
						left: '3%',
						right: '4%',
						bottom: '1%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
							{
								name: '',
								type: 'pie',
								radius: ['70%', '90%'],
								center: ["50%", "60%"],//饼图的位置 
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
												value: 20,
												name: "1号楼",
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
												value: 100-20,
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
										radius: ['70%'],
										center: ["50%", "58%"],//饼图的位置 
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
									
								
						}
					
				]
				}}
				],
				id:"occupancys",
				width:"75px",
				init:"",
				hackReset:true,
				height:"180px",				
				option:{
						title : {
							// text: '出租概率',
							x:'left',
							textStyle: {
								fontSize: 16,
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
					grid: {
						left: '30%',
						top:"0"	,
						left: '3%',
						right: '4%',
						bottom: '1%',
						// top:"40%",
					},
					textStyle:{
						color:'#fff',
					},
				series: [
							{
								name: '',
								type: 'pie',
								radius: ['70%', '90%'],
								center: ["50%", "60%"],//饼图的位置 
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
												value: 20,
												name: "1号楼",
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
												value: 100-20,
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
										radius: ['70%'],
										center: ["50%", "58%"],//饼图的位置 
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
									
								
						}
					
				]
				}
				
			}
		},
		 computed: {
                optionLeft () {
                    return {
                            direction: 2,
                            limitMoveNum: 2
                        }
                }
             },
		mounted(){
			// this.str=util.randomStr(false,5,10)
			// this.getlist(1)
		},
		methods: {
			clear(){
				window.clearInterval(this.init)
			},
			getlist(id){
// 				this.clear()
// 				this.$api.getReaBuilding(id).then(res=>{
// 					// if(res.data.length/6)
// 					var arr=[]
// 					var len=res.data.length/6;
// 					
// 					if(len<=1){
// 						this.savedata(res.data)
// 					
// 						return;
// 					}
// 					for(var i=0;i<len;i++){
// 						var list=[]
// 						 list.push(res.data.slice(i*6,(i+1)*6))
// 						 arr.push(list)
// 					}
// 					
// 					this.savedata(arr[0][0])
// 						var index=0;
// 						
// 					this.init=window.setInterval(()=>{
// 						index++;
// 						if(index==arr.length){
// 							index=0
// 						}
// 
// 						this.hackReset = false
// 							this.$nextTick(() => {
// 							this.hackReset = true
// 						})
// 						this.savedata(arr[index][0])		
// 													
// 					},3000)
// 					
// 					
// 					// this.savedata(data)					
// 				
// 				})
			},
			
			savedata(data){
				var needdata=[]
				data.forEach((e,i,a)=>{
					// var centerleft=i*60/100
					var center = 17*i+8;
					needdata.push({
            name: '',
            type: 'pie',
						radius: ['25%', '32%'],
            center: [center + "%", "40%"],//饼图的位置 
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
								radius: ['25%'],
								center: [center-0.5 + "%", "38%"],//饼图的位置 
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
	 .seamless-warp2 {
        overflow: hidden;
        height: 180px;
        width: 380px;
      
    }
	.seamless-warp2 ul{
		width: 580px;

		
	}
 .seamless-warp2 .item li{
	 float: left;
	 margin-right: 5px;
 }

</style>