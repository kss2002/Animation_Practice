// 스크롤 이벤트 및 애니메이션 삽입

let mainText = document.querySelector('h1');

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  if (value > 300) {
    mainText.style.animation = 'disappear 1s ease-out forwards';
  } else {
    mainText.style.animation = 'move 1s ease-out';
  }
});
