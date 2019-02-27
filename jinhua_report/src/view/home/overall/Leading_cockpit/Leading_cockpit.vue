<template>
	<div class="Leading_cockpit">
		<div class="rental">
			<rentalPrice></rentalPrice>
			<rentalArea></rentalArea>
		</div>
		<div>
			<customers></customers>
			<company></company>
		</div>
	</div>	
</template>
<script>
	import rentalArea from "./rental_area.vue"
	import rentalPrice from "./rental_price.vue"
	import customers from "./customers.vue"
	import company from "./company.vue"
	export default {
		name:"Leading_cockpit",
		components:{
			rentalArea,
			rentalPrice,
			company,
			customers
			// priceContrast
		},
	}
</script>

<style scoped>
	.rental{
		display: flex;
		justify-content: left;
		flex-flow: row
	}
	.Leading_cockpit{
		width:460px;
		
	}

</style>
