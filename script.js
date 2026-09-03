const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dots button')];
let current=0,timer;
function show(n){slides[current].classList.remove('active');dots[current].classList.remove('on');current=(n+slides.length)%slides.length;slides[current].classList.add('active');dots[current].classList.add('on')}
function autoplay(){clearInterval(timer);timer=setInterval(()=>show(current+1),6500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);autoplay()}));
autoplay();
window.addEventListener('scroll',()=>document.querySelector('.header').classList.toggle('scrolled',scrollY>30));

// 메인 홈페이지는 일반 진입/재진입 시 항상 첫 화면에서 시작합니다.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
function resetHomeTop() {
  if (!location.hash || location.hash === '#top') {
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }
}
window.addEventListener('pageshow', resetHomeTop);
window.addEventListener('load', resetHomeTop);
// 운송·기사 문의 선택 팝업
const inquiryModal=document.getElementById('inquiryModal');
document.querySelectorAll('.inquiry-open').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();inquiryModal?.classList.add('open');inquiryModal?.setAttribute('aria-hidden','false')}));
inquiryModal?.querySelector('.inquiry-close')?.addEventListener('click',()=>{inquiryModal.classList.remove('open');inquiryModal.setAttribute('aria-hidden','true')});
inquiryModal?.querySelector('.inquiry-backdrop')?.addEventListener('click',()=>{inquiryModal.classList.remove('open');inquiryModal.setAttribute('aria-hidden','true')});
