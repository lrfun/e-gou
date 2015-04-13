// JavaScript Document

$("#top").click(function(){
	var height= document.body.scrollTop||document.documentElement.scrollTop;
	document.body.scrollTop=document.documentElement.scrollTop=0;
});