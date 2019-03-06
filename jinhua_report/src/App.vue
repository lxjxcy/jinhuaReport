<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			screenWidth: document.body.clientWidth,
			 clientHeight:document.body.clientHeight// 屏幕尺寸
		}
	},
	mounted () {
		
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
					window.clientHeight = document.body.clientHeight
					that.clientHeight = window.clientHeight
        })()
      }
			window.onresize
			console.log(that.screenWidth)
			console.log(that.clientHeight)
			
    }
}
</script>

<style>
	*{
		padding:0;
		margin:0;
	}
	@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.eot');
  src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./font/iconfont.woff') format('woff'),
  url('./font/iconfont.ttf') format('truetype'),
  url('./font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  padding:0;
  margin:0;
	height:100%;

}

ul li{
	list-style: none;
	margin:0;
	padding:0;
}
.l{
	float: left;
}
.r{
	float: right;
}
	
.echartall{
		margin: 3px;
		padding:1px 2px;
		border: 2px solid hsla(0,0%,90%,.2); 
    background: linear-gradient(to left, #fff, #fff) left top no-repeat, 
                linear-gradient(to bottom, #fff, #fff) left top no-repeat, 
                linear-gradient(to left, #fff, #fff) right top no-repeat,
                linear-gradient(to bottom, #fff, #fff) right top no-repeat, 
                linear-gradient(to left, #fff, #fff) left bottom no-repeat,
                linear-gradient(to bottom, #fff, #fff) left bottom no-repeat,
                linear-gradient(to left, #fff, #fff) right bottom no-repeat,
                linear-gradient(to left, #fff, #fff) right bottom no-repeat;
    background-size: 2px 10px, 10px 2px, 2px 10px, 10px 2px;  
}

	td{
		color:#fff
	}
	table{
		color:#fff
	}

</style>
