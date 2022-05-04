const block = document.querySelector('.lesson__block');

// позиция объекта - offsetParent, offsetTop и offsetLeft

// получаем родительский элемент
const elementOffsetParent = block.offsetParent;
// console.log(elementOffsetParent);

// Получаем позицию объекта относительно предка
const elementOffsetLeft = block.offsetLeft; // смещение слева относительно родителя
const elementOffsetTop = block.offsetTop;

// console.log(block.offsetLeft);
// console.log(block.offsetTop);

// размеры объекта - offsetWidth и offsetHeight

const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

// отступы внутренней части объекта от внешней (не включает в себя margin и padding) - clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(block.clientTop);
console.log(block.clientLeft);

// размеры объекта без рамок и полосы прокрутки

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(block.clientWidth); // 500 - 20 - 20 - 17 (ширина скролла) = 443
console.log(block.clientHeight);

// размеры объекта, включающие в себя непрокрученную (которую не видно) часть (в остальном работают как clientWidth и clientHeight)

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

// размеры прокрученной области (не только для чтения)

block.scrollTop = 150;

let btn_8 = document.querySelector('.btn-8');
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

function setScrollBy() {
   block.scrollBy({
      top: 20,
      left: 0,
      behavior: "smooth"
   })
}

btn_8.addEventListener('click', setScrollBy);

console.log(elementScrollLeft);
console.log(elementScrollTop);

// координаты относительно окна браузера

const getItemCoords = document.querySelector('.lesson__item').getBoundingClientRect();
const getItemLeftCoord = getItemCoords.left;

console.log(getItemCoords);
console.log(getItemLeftCoord);

// координаты относительно документа

const getItemTopCoord = getItemCoords.top;

const getItemTopDocumentCoord = getItemTopCoord + pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);

// получение объекта по координатам

console.log(document.elementsFromPoint(100, 100));


// ширина и высота документа, включая прокрученную часть

let scrollWidth = Math.max(
   document.body.scrollWidth, document.documentElement.scrollWidth,
   document.body.offsetWidth, document.documentElement.offsetWidth,
   document.body.clientWidth, document.documentElement.clientWidth
);

let scrollHeight = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight
);

// console.log(scrollWidth);
// console.log(scrollHeight);


// ЗАДАЧИ

// 1. Узнать ширину полосы прокрутки

console.log(window.innerWidth - document.documentElement.clientWidth);

// 2. Заставьте браузер прокрутиться на 100px сверху спустя секунду после открытия страницы

setTimeout(() => {
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
   })
}, 1000);

// 3. Получите координаты любых 3 элементов на странице

console.log(block.getBoundingClientRect());