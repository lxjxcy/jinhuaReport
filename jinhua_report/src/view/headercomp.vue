<template>
  <div style="text-align: center;font-size: 18px;line-height: 30px;">
		<div>{{dataTime}}</div>
		<div>{{dataweek}}</div>
		   
  </div>
</template>
<script>
export default {
  name: 'headercomp',
	data(){
		return{
			 nowdate: new Date()
		}
	},
	mounted(){
		 var that = this;                    
		 that.time = setInterval(function() {
				that.nowdate = new Date();//修改数据date
		}, 1000);
	},
	computed: {
			dataTime() {
			  let nowtime = moment(this.nowdate).format("YYYY-MM-DD HH:mm:ss");
				return nowtime
			},
			dataweek(){
				// var vv='2015-02-07';
				var vNowDate=moment(new moment(this.nowdate).format("YYYY-MM-DD"));//.add('month',0).add('days',-1);
				var vWeekOfDay=moment(vNowDate).format("dddd");//算出这周的周几
				return vWeekOfDay
			}
			 
			
	},
	methods:{
	
      
	}
}
</script>

<style scoped>

	
	
	


</style>
