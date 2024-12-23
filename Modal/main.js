// class를 추가,제거함으로 팝업 창을 구현함.
const modal = document.querySelector('#Modal');
const modalOpen = document.querySelector('#Open-button');
const modalClose = document.querySelector('#Close-button');
const modalOpen__beta = document.querySelector('#Open-button-beta');

modalOpen__beta.addEventListener('click', function () {
  modal.classList.add('on');
});

modalOpen.addEventListener('click', function () {
  modal.classList.add('on');
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('on');
});
