const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dots button')];
let current=0,timer;
function show(n){slides[current].classList.remove('active');dots[current].classList.remove('on');current=(n+slides.length)%slides.length;slides[current].classList.add('active');dots[current].classList.add('on')}
function autoplay(){clearInterval(timer);timer=setInterval(()=>show(current+1),6500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);autoplay()}));
autoplay();
window.addEventListener('scroll',()=>document.querySelector('.header').classList.toggle('scrolled',scrollY>30));
