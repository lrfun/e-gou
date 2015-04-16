// JavaScript Document

window.onload=function(){
	//获取页面可视区高度
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	
	$("#top").hide();
	//滚动条滚动时触发
	window.onscroll=function(){
		var height= document.body.scrollTop||document.documentElement.scrollTop;

		if (height>=clientHeight){
			$("#top").show();

		}
		else{
			$("#top").hide();
		}

	}

	$("#top").click(function(){

		timer=setInterval(function(){

			//获取滚动条距顶部距离
			var height= document.body.scrollTop||document.documentElement.scrollTop;
			var ispeed=height/4
			document.body.scrollTop=document.documentElement.scrollTop=height-ispeed;

			//判断距顶部距离为0时清除函数
			if(height==0){
				clearInterval(timer);
			}
		},30)
		
});
}

