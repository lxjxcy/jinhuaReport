<template>
	<div class="business_analysis">

        <ul class="title">
            <li v-for="(item,index) in list" >
							<span v-if="ifselect==index" class="yesSelect">{{item.community_name}}</span>
						</li>
        </ul>
				<ul>
					<li><occupancy  ref="occupancyChild"></occupancy></li>
				</ul>

		<ul style="position: relative;top:-60px;">
		
				<!-- <ul style="overflow: hidden;padding-top:1%;height:170px;margin-left: 2%;"> -->
					
					<li><income ref="incomeChild"></income></li>
					<li style="display: flex;justify-content: flex-start;">
						<house ref="houseChild"></house>
						<attract ref="attractChild"></attract>
						
					</li>
					<li><gardencustomers ref="customersChild"></gardencustomers></li>

<!-- 					<li style="display: flex;justify-content: flex-start;position: relative;
	top:-55px;">
						<income ref="incomeChild"></income>	
						<gardencustomers></gardencustomers>
					</li> -->
					
								<li style="display: flex;justify-content: flex-start;" >
									<daynum ref="daynumChild"></daynum>
									<vacancy ref="vacancyChild"></vacancy>
									
								</li>
				

			
		</ul> 
		
	</div>
	
</template>

<script>
	import { mapGetters, mapState,mapMutations,mapActions} from 'vuex'
	import occupancy from "./occupancy1.vue"
	import income from "./income.vue"
	import house from "./house.vue"
	import attract from "./attract.vue"
	import vacancy from "./vacancy.vue"
	import daynum from "./daynum.vue"
	import gardencustomers from "./gardencustomers.vue"
	export default {
		name:"business_analysis",
		components:{
			occupancy,
			income,
			gardencustomers,
			house,
			attract,
			vacancy,
			daynum
		},
		data(){
			return{
				list:[],
				ifselect:0,
						
			}
		},
		computed: {
				optionLeft () {
						return {
										// step: 0.3,
										direction: 2,
										limitMoveNum: 2,
// 										 singleWidth: 100,
// 										waitTime: 12000
								}
				}
		 },
		mounted(){
			this.getlists()
			var classindex=0
			setInterval(()=>{
				classindex++;
				// console.log(classindex)
				if(classindex==this.list.length){
					classindex=0
				}
			  this.getclass(classindex)
			},15000)
		},
		methods:{
			//获取所有园区
			getlists(){
				this.$api.getCommunitys().then(res=>{
					this.list=res.data;
					this.setdata(res.data[0].community_id)

			})					
			},
			// ...mapActions(["increment"]),
			getclass(classindex){
				this.ifselect=classindex;
				this.setdata(this.list[classindex].community_id)
			},
			setdata(id){
				this.$refs.occupancyChild.getlist(id)
				this.$refs.incomeChild.getlist(id)
				this.$refs.houseChild.getlist(id)
				this.$refs.attractChild.getlist(id)
				this.$refs.daynumChild.getlist(id)
				this.$refs.vacancyChild.getlist(id)
				this.$refs.customersChild.getlist(id)
				
			}
			
		}
		
	}
</script>

<style  scoped>
	 .seamless-warp2 {
        overflow: hidden;
        height: 40px;
				line-height: 40px;
				font-size: 16px;
        width: 460px;
       /* ul.item {
            width: 580px;
            li {
                float: left;
                margin-right: 10px;
            }
        } */
    }
		.seamless-warp2 ul{
			width: 500px;

		}
		.seamless-warp2 ul li{
			float: left;
			margin-right: 15px;
		}
		
	.business_analysis{
		margin-left:2px;
	}
	.title{
		color:#fff;
		/* width:500px; */
	}

.title{
	overflow: hidden;
	height:80px;
	line-height: 80px;

}
	.title ul{
		display:flex ;
		margin-top:1% ;
		justify-content: flex-start;
		
	}
	.title li span{
		line-height: 40px;
		display: inline-block;
		/* border:2px solid #fff; */
		padding:0 2px;
		margin: 0 2px;
		font-size: 20px;
	}
	.yesSelect{
		/* background: #00FFFF; */
		/* color:#000 */
		color:#00d4e0;
		font-weight: 800;
		border-bottom: 3px solid #00d4e0;
	}
	.noSelect{
		/* background: #0c2771; */
	}
		

</style>
