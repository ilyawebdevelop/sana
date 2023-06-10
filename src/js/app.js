import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";

import './components.js';
import AirDatepicker from 'air-datepicker';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


// get courses info to modal popup
let eventsBtnCalledPopup = document.querySelectorAll('.events-item__btn-popup');
let modalHeading = document.querySelector('.modal-event__title');
let modalImage = document.querySelector('.modal-event__image img');
let modalWrapper = document.querySelector('.modal-event__content');

eventsBtnCalledPopup.forEach(el => {
  el.addEventListener('click', () => {
    let modalHide = el.closest('.events-item').querySelector('.events-hide');
    let elImage = el.closest('.events-item').querySelector('.events-item__image img');
    let elTitle = el.closest('.events-item').querySelector('.events-item__title');
    modalHeading.textContent = elTitle.textContent;
    modalImage.src = elImage.src;
    modalWrapper.innerHTML = modalHide.innerHTML;
  });
});

let headerMenuBtn = document.querySelector('.header__menu');
let headerMenu = document.querySelector('.container-menu');

headerMenuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  headerMenuBtn.classList.toggle('active');
});

// Menu show
document.addEventListener('click', function (e) {
  const target = e.target;
  const its_HeaderMenu = target == headerMenu || headerMenu.contains(target);
  const its_headerMenuBtn = target == headerMenuBtn || headerMenuBtn.contains(target);

  if (!its_HeaderMenu && !its_headerMenuBtn) {
    headerMenu.classList.remove('active');
    headerMenuBtn.classList.remove('active');
  }

});

// file-uploading styling chat
$('#chat-message-file').on('change', function (event, files, label) {
  var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '')
  $('.filename').text(file_name);
  $('.filename-wrapper').addClass('active');
  $("#chat-message-file")[0].value = "";
});

let chatMessageInputFile = document.querySelector('#chat-message-file');
let removeBtn = document.querySelector('.filename-delete');
let fileNameWrapper = document.querySelector('.filename-wrapper');
removeBtn?.addEventListener('click', function () {
  chatMessageInputFile.value = '';
  fileNameWrapper.classList.remove('active');
}, false);

// LightGallery
var galleryItems = document.getElementsByClassName('gallery-list');
for (let item of galleryItems) {
  lightGallery(item, {
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false
  })
}

// cabinet-btn-main
let cabinetBtnAllMain = document.querySelectorAll('.cabinet__item-main');
cabinetBtnAllMain.forEach(el => {
  el.addEventListener('click', () => {
    cabinetBtnAllMain.forEach(el=>{ 
      el.classList.remove('active'); 
    });

    el.classList.add('active');
    
  });
});

// file-uploading styling personal modal new field
$('#personal-new-file').on('change', function (event, files, label) {
  var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '')
  $('.personal-new-added').text(file_name);
  $('.personal-form__row_new').addClass('active');
});

const formImage_1 = document.getElementById('personal-change-file');
const formUrlImage_1 = document.querySelector('.photo-item_1');

formImage_1?.addEventListener('change', () => {
  uploadFile(formImage_1.files[0], formImage_1, formUrlImage_1);
});

function uploadFile(file, formImage, formUrlImage) {
  //проверяем тип файла
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Разрешены только изображения');
    formImage.value = '';
    return;
  }
  formImage.value = '';

  if (file.size > 1 * 1024 * 1024) {
    alert('Файл должен быть менее 1 МБ.');
    return;
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    console.log('Отправка');
    formUrlImage.src = `${e.target.result}`;
  };
  reader.onerror = function (e) {
    alert('Ошибка');
    formUrlImage.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// Инициализация слайдера dogovor-slider
const dogovorSlider = document.querySelector('.dogovor-slider');
var mySwiperDogovor = new Swiper(dogovorSlider, {
  slidesPerView: 1,
  spaceBetween: 10,   
  speed: 600, 
  navigation: {   
    prevEl: '.dogovor-slider .nav-arrow-prev',
    nextEl: '.dogovor-slider .nav-arrow-next',
  },
});

// Air datepicker date+time
let servicesInputDate = document.querySelectorAll('.services-form__calendar');
servicesInputDate.forEach(el => {
  new AirDatepicker(el, { 
    multipleDates: false,
    timepicker: true,  
  })
});

// Air datepicker date
let schetchikiInputDate = document.querySelectorAll('.form-input-date');
schetchikiInputDate.forEach(el => {
  new AirDatepicker(el, { 
    multipleDates: false,
    inline: false
  })
});

