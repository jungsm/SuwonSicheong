let slides=document.querySelector('.slide'),
slide=document.querySelectorAll('.slide ul'),
currentIdx=0,
slideCount=slide.length,
prevBtn=document.querySelector('.prev'),
slideWidth=17,
slideMargin=30,
nextBtn=document.querySelector('.next');

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num){
    slides.style.left=  - num * 280 + 'px';
    currentIdx = num;
}
nextBtn.addEventListener('click',function(){
    if(currentIdx < slideCount - 21){
        moveSlide(currentIdx + 1);
        console.log(currentIdx);
    }else{
        moveSlide(0);
    }
});
prevBtn.addEventListener('click',function(){
    if(currentIdx > - 22){
        moveSlide(currentIdx - 1);
    }else{
        moveSlide(slideCount - 3);
    }
})


