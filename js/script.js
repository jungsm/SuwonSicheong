var i=0,k=null,repeat;
timer();

function timer(){
  setInterval(function(){
    i++;
    k=i-1;
    if (i==4){
      i=0;
    }
    slide()
  },5000)
}
function slide(){

 $('.box_1 ul li').eq(i).addClass('on');
 $('.box_1 ul li').eq(k).removeClass('on');
}