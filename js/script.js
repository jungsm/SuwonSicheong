window.onload = function() {
  const kindWraps =  document.querySelector('.kind_wrap');
  const sliders = kindWraps.querySelector('.visual');
  const slideLisa = sliders.querySelectorAll('li')
  const moveButtons = kindWraps.querySelector('.arrow');

  /* ul 넓이 계산해 주기 */
  const liWidths = slideLisa[0].clientWidth;
  const sliderWidths = liWidths * slideLisa.length;
  sliders.style.width = `${sliderWidths}px` ;

  /* 리스너 설치하기 */
  let currentIdx = 0; // 슬라이드 현재 번호
  let translate = 0; // 슬라이드 위치 값
  moveButtons.addEventListener('click', moveSlide);

  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === 'visual_right') {
      if (currentIdx !== slideLisa.length -1) {
        translate -= liWidths;
        sliders.style.transform = `translateX(${translate}px)`;
        currentIdx += 1;
      }
    } else if (event.target.className === 'visual_left') {
        if (currentIdx !== 0) {
          translate += liWidths;
          sliders.style.transform = `translateX(${translate}px)`;
          currentIdx -= 1;
        }
      }
  }

}