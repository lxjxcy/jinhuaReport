<template>
	<div class="rental_year">
		<div class="all_price">
				<h2>年度租金收入</h2>
				<p class="p1">￥{{total}}万元</p>
				<!-- <ul>
					<li v-for="item in content">
						<p class="p2">{{item.communityName}}</p>
						<p>{{item.num}}元</p>
					</li>
				</ul> -->
				<vue-seamless-scroll :data="content" :class-option="optionLeft" class="seamless-warp2">
					<ul class="item">
						<li v-for="item in content" >
							<p class="p2">{{item.communityName}}</p>
							<p>{{item.nums}}</p>
						</li>
					</ul>
				</vue-seamless-scroll>
				<div class="time">
					<workpiece ref="workChild"></workpiece>
				</div>
				<div>
					<xiashaMap></xiashaMap>
					<priceContrast></priceContrast>
					<!-- <chinaMap ></chinaMap> -->
				</div>
					
			
		</div>
		
	</div>
	
</template>

<script>
	import workpiece from "./workpiece.vue"
	import chinaMap from "./chinaMap.vue"
	import xiashaMap from "./xiashaMap.vue"
	import priceContrast from "./price_contrast.vue"
	export default {
		name:"rental_year",
		components:{
			chinaMap,
			xiashaMap,
			workpiece,
			priceContrast
		},
		data(){
			return{
				total:0,
				content:[],
				percent:"",
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
			this.getlist()
		},
		methods: {
			getlist() {
				this.$api.getRentYear().then(res=>{
					this.total=res.data.total;
					var content=res.data.content;
					content.forEach((e,i,a)=>{
						a[i]['nums']=e.num+"万元"
						// a['areas'][i]=				
					})
					this.content=content
					this.percent=res.data.percent
					this.$refs.workChild.getpercent(this.percent)
					// console.log(this.percent)
					
				})
			}
		},
	}
</script>

<style scoped>
	.rental_year{
		/* border-right: 2px solid #fff; */
		width:700px;
		height:100%;
		
	}
	.seamless-warp2 {
	        overflow: hidden;
	        height: 100px;
	        width: 680px;
	      
	  }
		.seamless-warp2 ul{
			width: 680px;
			margin-top: 40px;
	
			
		}
	 .seamless-warp2 .item li{
		 float: left;
		 margin-right: 40px;
		 height:150px;
	 }
	
	h2{
		line-height: 50px;
		font-size: 26px;
	}
	.all_price{
		/* padding:4px; */
		position: relative;
		color:#fff;
	}
	.p1{
		line-height: 70px;
		font-size: 40px;
		color: #fff;
		font-weight: 400;
		text-align: center;
	}
/* 	ul{
		display: flex;
		margin-top: 20px;
		justify-content: space-around;
	} */
	li p{
		text-align: center;
		font-size: 20px;
		line-height: 30px;
	}
	li .p2{
		color: aqua;
		font-style:italic
	}
	li .p2:hover{
		font-style:italic
	}
	.time{
		position: absolute;
		top:-26px;
		right:-13px;
	}

</style>
