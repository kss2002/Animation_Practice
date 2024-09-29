const element = document.querySelector('#element_beta');
const effect = new TypeIt(element, {
  strings:
    'This very long effect will be cancelled as soon as the user clicks in it!',
});

element.addEventListener('focus', () => {
  effect.reset();
});

element.addEventListener('blur', (e) => {
  if (!e.target.value.length) {
    effect.go();
  }
});

effect.go();

new TypeIt('#element', {
  speed: 50,
  startDelay: 900,
})
  .type('the mot versti', { delay: 100 })
  .move(-8, { delay: 100 })
  .type('s', { delay: 400 })
  .move(null, { to: 'START', instant: false, delay: 300 })
  .move(1, { delay: 200 })
  .delete(1)
  .type('T', { delay: 225 })
  .pause(200)
  .move(2, { instant: true })
  .pause(200)
  .move(5, { instant: true })
  .move(5, { delay: 200 })
  .type('a', { delay: 350 })
  .move(null, { to: 'END' })
  .type('le typing utlity')
  .move(-4, { delay: 150 })
  .type('i')
  .move(null, { to: 'END' })
  .go();

const instance = new TypeIt('#text_input', {
  strings: 'Hello!',
}).go();

document.querySelector('#myButton').addEventListener('click', (e) => {
  instance.reset();
  instance.go();
});
