<template>
	<!-- :style ="note" -->
  <div id="home" class="img1 note" >
	<header class="echartall">
		  <headerComp></headerComp>		 
	  </header>
	  <main>
		 <router-view/>
	  </main>  
  </div>
</template>
<script>
	import headerComp from "../headercomp.vue"
export default {
  name: 'home',
	components:{
		headerComp
	},
	data() {
		return {
			note: {
				backgroundImage: "url(" + require("../../assets/back2.jpg") + ") ",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				// backgroundColor:"#fff"
			},
		}
	}

	
}
</script>

<style scoped>
	#home{
		/* height:100%; */
/* 		display: flex;
		flex-direction:column;	 */
		height:1080px;
		width:1920px;
		overflow-x:hidden;
		background: #000036;
		overflow-y:hidden
	}
	header{
		position: fixed;
		top:0;
		right:0;
		width:200px;
		height:80px;
	}
	main{
		flex: 1;
		/* background: #42B983; */
	}
</style>
