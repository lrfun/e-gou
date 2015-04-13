
/**
 *   
 **/
function lunbo(lunboBox,imgBox,imgNum){

    var luanpo=document.getElementById(lunboBox);
    var oimg=document.getElementById(imgBox);
    var imgs=document.getElementById(imgBox).getElementsByTagName('li');
    var nums=document.getElementById(imgNum).getElementsByTagName("a");
    console.log(nums.length)

    var iNow=0;
    var dt=null;
    oimg.style.width=imgs.length*imgs[0].offsetWidth+"px";

    function tab(){
        for(var i=0;i<nums.length;i++){
            nums[i].index=i;
            nums[i].onclick=function(){
                clearInterval(dt);
                iNow=this.index;
                for(var i=0;i<nums.length;i++){
                    nums[i].className="b";        
                }
                this.className="active";
                oimg.style.left=-(imgs[0].offsetWidth*iNow)+"px";    //这边可以加上我前面所写的那个缓动框架           
            }
            nums[i].onmouseout=function(){
               start();
            }
        }
    }

    function start(){
    　　clearInterval(dt);
        dt=setInterval(function(){
            if(iNow>nums.length-2){
                iNow=0;
            }else{
                iNow++;
            }
            for(var k=0;k<nums.length;k++){
                if(iNow==nums[k].index){nums[k].className='active';}else{nums[k].className='';}
            }
            oimg.style.left=-(imgs[0].offsetWidth*iNow)+"px";    //这边可以加上我前面所写的那个缓动框架
        },3000);
        tab();
    }
    start();
}