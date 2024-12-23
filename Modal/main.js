// class를 추가,제거함으로 팝업 창을 구현함.
const modal = document.querySelector('#Modal');
const modalOpen = document.querySelector('#Open-button');
const modalClose = document.querySelector('#Close-button');

modalOpen.addEventListener('click', function () {
  modal.classList.add('on');
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('on');
});
