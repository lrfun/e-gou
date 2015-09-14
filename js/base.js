$(function(){


	//子菜单部分！
 	$("#Menu").hide();
 	
	$(".shopclass_show > dl").mouseover(function(){ 
		$(this).addClass('cur').siblings('dl').removeClass('cur');
		$("#Menu").show();
		//说明：此处使用ajax动态拉取列表内容
	});

	$("#Menu").mouseover(function(){ 
		$("#Menu").show();
	});

	$("#Menu").mouseout(function(){ 
		$("#Menu").hide(); 
	});


	//搜索button
	$(".searhBut").click(function(){
		 window.open("./shop_select.html");
	})
	
});







