

export default {
	//获取上个月
		 getMonth:function (){
			 var firstdate = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1);
			 	var date=new Date(firstdate);
			 	var month=date.getMonth()+1				
			 	// return year;
// 				var now=new Date()
// 				var month=now.getMonth()+1					
				return month;
		},
		//获取上个月年份
		getYear:function (){
			var firstdate = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1);
				var date=new Date(firstdate);
				var year=date.getFullYear()					
				return year;
		},
		//获取当前年份
		getnowYear:function (){
			
				var date=new Date();
				var year=date.getFullYear()					
				return year;
		},
		//获取随机颜色
		randomColor:function() {
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				var color = 'rgb('+ r + ',' + g + ',' + b + ')';
				return color
		},
		//随机字符
		randomStr: function (flag, min, max) {
			var str = "";
			var index = "";
			var range = min;
			var arr = ['a', 'b',
			 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
			 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
			 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
			 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			 //min,max范围内随机的一个数
			 if(flag) {
				 range = Math.floor(Math.random() * (max - min + 1) + min);
			 }
			 for(var i = 0; i < range; i++) {
				 index = Math.round(Math.random() * (arr.length - 1));
				 str += arr[index];
			 }
			 return str;
		}
};
