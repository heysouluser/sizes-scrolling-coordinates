let mainElement = document.documentElement;

// ширина и высота окна
let mainElementWidth = mainElement.clientWidth;
let mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

// ширина и высота окна с полосой прокрутки

let windowWidth = window.innerWidth;
let windowHeigth = window.innerHeight;

console.log(windowWidth);
console.log(windowHeigth);

// управление прокруткой страницы

let btn_1 = document.querySelector('.btn-1');
let btn_2 = document.querySelector('.btn-2');
let btn_3 = document.querySelector('.btn-3');
let btn_4 = document.querySelector('.btn-4');
let btn_5 = document.querySelector('.btn-5');
let btn_6 = document.querySelector('.btn-6');
let btn_7 = document.querySelector('.btn-7');

// scrollBy()
function setScrollBy() {
   window.scrollBy(0, 50);
   let windowScrollTop = window.pageYOffset;
   console.log(Math.round(windowScrollTop));
}

// scrollTo()
function setScrollTo() {
   window.scrollTo(0, 50);
   let windowScrollTop2 = window.pageYOffset;
   console.log(Math.round(windowScrollTop2));
}

function setScrollToOptions() {
   window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth"
   });
}
// Опции не работают в сафари (до сих пор?)

btn_1.addEventListener('click', setScrollBy);
btn_2.addEventListener('click', setScrollTo);
btn_3.addEventListener('click', setScrollToOptions);

// scrollIntoView()

function setScrollIntoView(top) {
   const divSIView = document.querySelector('.scroll-into-view');
   divSIView.scrollIntoView(top);
}

function setScrollIntoViewOptions() {
   const divSIView = document.querySelector('.scroll-into-view');
   divSIView.scrollIntoView({
      // "start", "center", "end" или "nearest". По умолчанию "center"
      block: "center",
      // "start", "center", "end" или "nearest". По умолчанию "nearest"
      inline: "nearest",
      // "auto" или "smooth". По умолчанию "auto"
      behavior: "smooth"
   })
}
// Опции не работают в сафари (до сих пор?)

btn_4.addEventListener('click', () => { setScrollIntoView(true); });
btn_5.addEventListener('click', () => { setScrollIntoView(false); });
btn_6.addEventListener('click', setScrollIntoViewOptions);

// Запретить прокрутку

function setEnableDisableScroll() {
   document.body.classList.toggle('scroll-lock');
}

btn_7.addEventListener('click', setEnableDisableScroll);

