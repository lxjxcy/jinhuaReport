<template>
	<div class="overall">
		<div >
			<ul class="out-work">		
				<LeadingCockpit></LeadingCockpit>
				<rentalYear></rentalYear>
				
				<businessAnalysis></businessAnalysis>
				<!-- <li class="l"><parent></parent></li> -->
				<!-- <li><rentalMonth></rentalMonth></li> -->
				<!-- <li><presence></presence></li> -->
				<!-- <li><rentalYear></rentalYear></li>
				<li><businessAnalysis></businessAnalysis></li> -->
			</ul>
		</div>
	</div>
</template>
<script>
	import LeadingCockpit from "./Leading_cockpit/Leading_cockpit.vue"
	import rentalYear from "./Leading_cockpit/rentalYear/rental_year.vue"
// 	import presence from "./Leading_cockpit/presence/presence.vue"
	import businessAnalysis from "./business_analysis/business_analysis.vue"
	// import parent from "./parent.vue"
	export default {
		name:"overall",
		components:{
// 			parent,
// 			rentalMonth,
			rentalYear,
// 			presence,
		LeadingCockpit,
			businessAnalysis
		},
		

	}

</script>
<style scoped>
/* li{
	margin: 5px;
} */
	.out-work{
		display: flex;
		justify-content:left;	
	}





</style>