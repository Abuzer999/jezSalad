const header = document.querySelector( '.header');

window.addEventListener('scroll', () => {
  let scrollsY = window.scrollY;

  if (scrollsY >= 100) {
    header.classList.add('header_fixed')
  } else {
    header.classList.remove('header_fixed')
  }
});

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const aMob = document.querySelectorAll('.lishka');
const body = document.body;

burger.addEventListener('click', () => {
  navigation.classList.toggle('actives');
  body.classList.toggle('hidden')
});

aMob.forEach(e => {
  e.addEventListener('click', () => {
    navigation.classList.remove('actives');
    body.classList.remove('hidden')
  })
});

