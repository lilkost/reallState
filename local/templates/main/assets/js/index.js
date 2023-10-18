document.addEventListener('DOMContentLoaded', ()=> {
  // toggle active 
  function toggleActive(item) {
    item.classList.toggle('active')
  }
  //default function accordion
  function defAccordion(accordionItem) {
    for (itm2 of accordionItem) {
      itm2.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active')
        } else {
          for (el2 of accordionItem) {
            el2.classList.remove('active');
          }
          this.classList.add('active');
        }
      });
    };
  }
  // slider baner 1
  if(document.querySelector('.bannerSlider__slider')) {
    const bannerSlider = new Swiper('.bannerSlider__slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 500,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  

    });

  }
  // слайдер внутри карточки
  if(document.querySelector('.card__photo-slider')) {
    const cardSlider = new Swiper('.card__photo-slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 500,
      autoplay:{
        delay: 2000
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  }
  // слайдер новостей
  if(document.querySelector('.news__slider')) {
    const newsSlider = new Swiper('.news__slider', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 25,
      loop: false,
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1281:{
          spaceBetween:25
        },
        1045:{
          slidesPerView: 3,
        },
        1044:{
          slidesPerView: 2
        },
        481:{
          slidesPerView: 2
        },
        480:{
          slidesPerView: 1,
        },
        280: {
          slidesPerView:1,
          spaceBetween: 15
        },
      }
    });

    let filterNewsBtns = document.querySelectorAll('.news__filter-btn');
    filterNewsBtns.forEach((e)=> {
      e.addEventListener('click', ()=> {
        window.setInterval(()=> {
          newsSlider.updateProgress();
          newsSlider.updateSize();
          newsSlider.updateSlides();
          newsSlider.update();
        },200)
      })
    })
  }
  // маска на телефон
  if(document.querySelector('#mortgagePhone')) {
    let phone = document.querySelector('#mortgagePhone'); 
    const phoneMask = new IMask(phone, {
      mask: "+{7}(000)000-00-00",
    });
  }
  if(document.querySelector('#phoneBaneerTwo')) {
    let phone = document.querySelector('#phoneBaneerTwo');
    const phoneMask = new IMask(phone, {
      mask: "+{7}(000)000-00-00",
    });
  }
  // кнопка в избранное
  if(document.querySelector('#phoneBaneer')) {
    let phoneBaneer = document.querySelector('#phoneBaneer');
    const phoneBaneerMask = new IMask(phoneBaneer, {
      mask: "+{7}(000)000-00-00",
    });
  }
  // кнопка в вызбранное
  if(document.querySelector('.card__favotites')) {
    let favoritesBtns = document.querySelectorAll('.card__favotites');

    favoritesBtns.forEach((e) => {
      e.addEventListener('click', (btn)=> {
        e.classList.toggle('active');
        btn.preventDefault();
      })
    })
  }
  // открытие акордиона
  if(document.querySelector('.offer__filter-accordion-top')) {
    let accordionTop  = document.querySelectorAll('.offer__filter-accordion-top');
    let accordionBody = document.querySelectorAll('.offer__filter-accordion-body');
    let offerFilter = document.querySelectorAll('.offer__filter-accordion')

    for (itm2 of accordionTop) {
      itm2.addEventListener('click', function () {
          if (this.classList.contains('active')) {
              this.classList.remove('active')

              this.nextElementSibling.classList.remove('active')
          } else {
              for (el2 of accordionTop) {
                  el2.classList.remove('active');
                  el2.nextElementSibling.classList.remove('active')
              }
              this.classList.add('active');
              this.nextElementSibling.classList.add('active');
          }
      });
    };

    window.addEventListener('keydown', (event)=>{
      if(event.keyCode == 27) {
        accordionTop.forEach((e)=> {
          e.classList.remove('active')
        });
        accordionBody.forEach((e)=> {
          e.classList.remove('active')
        })
      }
    });

    //offer__filter-accordion-body-item
    if(offerFilter) {
        offerFilter.forEach(elem => {
            elem.querySelectorAll('.offer__filter-accordion-body-item').forEach(label=> {
                label.addEventListener('click', ()=> {
                    // console.log(label.querySelector('.offer-filter-name').textContent)

                    elem.querySelector('.ui__accordion-name').textContent = label.querySelector('.offer-filter-name').textContent
                })
            })
        })
    }
  }
  // открытие фильтра
  if(document.querySelector('.offer__filter-big')) {
    let btnFilterOpen = document.querySelector('.offer__filter-btn-open');
    let filter = document.querySelector('.offer__filter-big');
    let interPreloader = document.querySelector('.offer__inner')
    btnFilterOpen.addEventListener('click', ()=> {
      toggleActive(filter);
      toggleActive(interPreloader);
      toggleActive(btnFilterOpen);
    });
  }
  // слайдер большой
  if(document.querySelector('.slider-big__slider')){
    let swiper = new Swiper(".slider-big__slider", {
      speed: 600,
      parallax: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
  }
  // slider card line 
  if(document.querySelector('.card-line-slider-big') && document.querySelector('.card-line-slider-min')) {

    let item = document.querySelectorAll('.card.line');
    item.forEach((e) => {
      const cardSliderMin = new Swiper(e.querySelector('.card-line-slider-min'), {
        direction: 'vertical',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 9,
        freeMode: true,
        grabCursor: true,
        breakpoints:{
          993:{
            slidesPerView: 3,
            direction: 'vertical',
          },
          280:{
            slidesPerView: 3,
            direction:'horizontal'
          }
        }
      });
     
      const cardSliderBig = new Swiper(e.querySelector('.card-line-slider-big'), {
        direction: 'vertical',
        loop: false,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 10,
        thumbs: {
          swiper: cardSliderMin,
        },

        breakpoints:{
          993:{
            direction: 'vertical',
          },
          280:{
            direction:'horizontal'
          }
        }
  
      });
    })
  }
  // fitler
  if(document.querySelector('.filter-position-performance__btn')) {
    let btnsPosBLock = document.querySelectorAll('.filter-position-performance__btn');
    let listCol = document.querySelectorAll('.cards__list.col-three');
    let listRow = document.querySelectorAll('.cards__list.row');
    let innerBlur = document.querySelectorAll('.listInnerFilter');
    for (itm of btnsPosBLock) {
        itm.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active')
            } else {
                for (el of btnsPosBLock) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }            
        });
    };
    btnsPosBLock.forEach((itm)=> {
      itm.addEventListener('click', ()=> {
        if(itm.id == 'cardPosLine'){
          // console.log('list')
          listCol.forEach((e)=> {
            e.classList.add('none')
          });
          listRow.forEach((e)=> {
            e.classList.remove('none')
          })
        }
        else if(itm.id == 'cardPosTile'){
          // console.log('col')
          listCol.forEach((e)=> {
            e.classList.remove('none')
          });
          listRow.forEach((e)=> {
            e.classList.add('none')
          })
        }
        innerBlur.forEach((e)=> {
          e.style.filter = 'blur(5px)'
          window.setTimeout(()=> {
            e.style.filter = 'blur(3px)'
          },400);
          window.setTimeout(()=> {
            e.style.filter = 'blur(0px)'
          },600);
        })
      })
    })
  }
  // card btn active 
  if(document.querySelector('.card-top__info-box-top')) {
    let btn = document.querySelector('.card-top__info-box-top button');

    btn.addEventListener('click', ()=> {
      toggleActive(btn);
    });
  }
  // card info slider
  if(document.querySelector('.card-info-sliders')) {

    const cardSliderMin = new Swiper(document.querySelector('.card-info-slider-min'), {
      direction: 'vertical',
      loop: false,
      slidesPerView: 3,
      spaceBetween: 15,
      freeMode: true,
      grabCursor: true,

      breakpoints:{
        671:{
          direction: 'vertical',
        },
        481:{
          direction: 'horizontal',
          slidesPerView: 3,
        },
        480:{
          direction: 'horizontal',
          slidesPerView: 2,
        },
        411:{
          slidesPerView: 2,
        },
        320:{
          direction: 'horizontal',
          slidesPerView: 1,

        }
      }

    });

    const cardSliderBig = new Swiper(document.querySelector('.card-info-slider-big'), {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: cardSliderMin,
      },

    });
  }
  // card accordion 
  if(document.querySelector('.card-info-accordion-item__btn')) {
    let btnAccordion = document.querySelectorAll('.card-info-accordion-item__btn');
    btnAccordion.forEach((e) => {
      e.addEventListener('click', ()=> {
        toggleActive(e.parentElement);
        toggleActive(e);


        if(e.parentElement.classList.contains('active') == true && e.parentElement.querySelector('.card-info-accordion-item__body-box-elem')) {
          e.parentElement.querySelectorAll('.card-info-accordion-item__body-box-elem').forEach((a)=> {
            a.style.display = 'flex';
            window.setTimeout(()=> {
              toggleActive(a);
            }, 200);
          });
        }
        else {
          e.parentElement.querySelectorAll('.card-info-accordion-item__body-box-elem').forEach((a)=> {
            a.classList.remove('active')
            window.setTimeout(()=> {
              a.style.display = 'none';
            }, 200);
          });
        }
      })
    });
  }
  // Слайдер
  if(document.querySelector('.similar-offer-slider')) {
    const swiper = new Swiper('.similar-offer__slider', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,

      speed: 500,
      // autoplay:{
      //   delay: 2000
      // },
      // Navigation arrows
      navigation: {
        nextEl: '.similar-offer-button-next',
        prevEl: '.similar-offer-button-prev',
      },
      breakpoints: {
        993:{
          slidesPerView: 3
        },
        992:{
          slidesPerView: 2,
          spaceBetween: 15
        },
        569:{
          slidesPerView: 2,
          spaceBetween: 15
        },
        280:{
          slidesPerView: 1,
          spaceBetween: 15
        }
      }
    });
  }
  // accordion motrage
  if(document.querySelector('.montrage-accordion__item')) {
      let btns = document.querySelectorAll('.montrage-accordion__item .montrage-accordion__item-btn');

      btns.forEach((e) => {
        e.addEventListener('click', ()=> {
          toggleActive(e.parentElement.parentElement);
          toggleActive(e);
        });
      });
  }
  // header__search.hidden
  if(document.querySelector('.header__search.hidden')) {
      let formButton = document.querySelector('.header__search.hidden button');
      formButton.addEventListener('click', (event)=> {
        toggleActive(formButton.parentElement);
      });
  }
  // burger menu
  if(document.querySelector('.header__button-burger')) {
    let burgerBtn = document.querySelector('.header__button-burger');
    let searchForm = document.querySelectorAll('.header__search');
    let drowpdow = document.querySelector('.header__dropdown-menu');
    let closeDropdown = document.querySelector('.header__dropdown-menu-close');
    let headerAnimate = document.querySelectorAll('.header__anim')


    burgerBtn.addEventListener('click', ()=> {
      toggleActive(burgerBtn);
      drowpdow.classList.add('active');
      document.querySelector('.wrapper').classList.add('active')
      headerAnimate.forEach((e)=> {
        e.classList.add('ops');
      });
      searchForm.forEach(item=> {
        item.classList.add('active')
      })
    });
    closeDropdown.addEventListener('click', ()=> {
      drowpdow.classList.remove('active')
      searchForm.forEach(item=> {
        item.classList.remove('active')
      })
      document.querySelector('.wrapper').classList.remove('active')
      burgerBtn.classList.remove('active')
      headerAnimate.forEach((e)=> {
        e.classList.remove('ops');
      });
    });
  }
  // banner top 
  if(document.querySelector('.banner-top-two__form-item-accordion')){
    let btn = document.querySelectorAll('.banner-top-two__form-item-accordion');
    let btnTabs = document.querySelectorAll('.banner-top-two__tabs-btn');
    let parentBox = document.querySelector('.banner-top-two__tabs');

    for (itm2 of btn) {
      itm2.addEventListener('click', function () {
          if (this.classList.contains('active')) {
              this.classList.remove('active')
          } else {
              for (el2 of btn) {
                  el2.classList.remove('active');
              }
              this.classList.add('active');
          }
      });
    };

    btnTabs.forEach((e)=> {
      e.addEventListener('click', ()=> {
        btn.forEach((a)=> {
          a.classList.remove('active')
        });
        parentBox.classList.add('filter')
        window.setTimeout(()=> {
          parentBox.classList.remove('filter')
        },500);


      });
    })

    addEventListener('keydown', (event)=> {
        if(event.keyCode == 27) {
          btn.forEach((a)=> {
            a.classList.remove('active')
          })
        }
    })
  }
  // input checbox
  if(document.querySelector('.offer__filter-item.border-input-filter')) {
    let inputs = document.querySelectorAll('.offer__filter-item.border-input-filter input[type=checkbox]');
    inputs.forEach((e)=> {
      e.addEventListener('click', ()=> {
       if(e.checked) {
        e.parentElement.classList.add('active')
       }
       else {
        e.parentElement.classList.remove('active')
       }
      })
    });
  }
  // расчет ежемесячного платежа
  function monthlyPayment() {
    // вывод кредита
    let credit = (document.querySelector('#txt_credit')) ? document.querySelector('#txt_credit') : false;
    let procet = (document.querySelector('#txt_procent')) ? document.querySelector('#txt_procent') : false;
    let procentAndCredit = (document.querySelector('#txt_procent_and_credit')) ? document.querySelector('#txt_procent_and_credit') : false;
    let necessaryIncome = (document.querySelector('#txt_necessary_income')) ? document.querySelector('#txt_necessary_income') : false
    let x = 0;
    // Стоимость квартиры

    let s = (document.querySelector('#inp_price_house')) ? Number(document.querySelector('#inp_price_house').value.replaceAll(' ', '')) : 0;
    // Процентная ставка
    let p = (document.querySelector('#inp_percent')) ?  Number(document.querySelector('#inp_percent').value.replaceAll(' ', '')) / 100 : 0;
    // Срок ипотеки
    let n = (document.querySelector('#inp_term')) ? Number(document.querySelector('#inp_term').value.replaceAll(' ', '')) : 0;
    // Платеж в месяц
    let m = (document.querySelector('#inp_mount')) ? Number(document.querySelector('#inp_mount').value.replaceAll(' ', '')) : 0;
    // Собственные средства
    let y = (document.querySelector('#inp_you')) ?  Number(document.querySelector('#inp_you').value.replaceAll(' ', '')) : 0;
    let kreditIpoteka = s - y;
    x = ( (kreditIpoteka * (p/100)) / (1 - Math.pow(1+ (p/100), (-(n*12))))  < 1 ) ? 0 : (kreditIpoteka * (p/100)) / (1 - Math.pow(1+ (p/100), (-(n*12))))
    let getValueHTML = String(x.toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' ₽';


    let labelPrice = (document.querySelector('.mortgage__form-label-price')) ? document.querySelector('.mortgage__form-label-price') : ''
    labelPrice.innerHTML = getValueHTML;
    // кредит
    let cr = (kreditIpoteka < 1) ? 0 : kreditIpoteka
    credit.innerHTML = String(cr.toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' ₽';
    // проценты
    let prr = ((x*(n*12) - s) > 1) ? (x*(n*12) - s) : 0
    procet.innerHTML = String(prr.toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' ₽';
    // проценты и кредиты
    let crPlusPrr = ( (kreditIpoteka + prr) < 1)  ? 0 : (kreditIpoteka + prr)
    // console.log(crPlusPrr)
    procentAndCredit.innerHTML = String(crPlusPrr.toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' ₽';
    // необходимый доход
    let necInc = ( ((x + x/10) + x) < 1 ) ? 0: (x + x/10) + x
    necessaryIncome.innerHTML = String(necInc.toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' ₽';
  }
  let indent = 9.8
  // form input ипотека
  if(document.querySelector('.js-range-slider')) {
    $(".js-range-slider").ionRangeSlider({
      onStart: function (data) {
        let elem = data.input.parent()[0].querySelector('.mortgage__form-count');
        elem.value = data.min;
        elem.style.width =   (elem.value.length >= 1) ? indent * elem.value.length + 'px' : indent + 'px';
        monthlyPayment()
      },
      onChange: function (data) {
        let elem = data.input.parent()[0].querySelector('.mortgage__form-count');
        // elem.value  = data.from
        elem.value = String(data.from).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
        elem.style.width =( String(data.from).length >= 1) ? indent * String(data.from).length + 'px' : indent +'px';
        monthlyPayment()
      },
    });
  }
  //  buttons под input
  if(document.querySelector('.mortgage__form-label')) {
    let inputs = document.querySelectorAll('.mortgage__form-label .mortgage__form-count')
    inputs.forEach(input=> {
      input.addEventListener('input', ()=> {
        input.style.width = (input.value.length >= 1) ? indent * input.value.length  + 'px': indent +'px'
        // console.log(input.value);
        monthlyPayment()
      });
    });
    // buttons value
    let getElemValue = document.querySelectorAll('.mortgage__form-label');
    getElemValue.forEach(elem=> {
      defAccordion(elem.querySelectorAll('.mortgage__form-buttons button'))
      elem.addEventListener('click', event=> {
        if(event.target.tagName === 'BUTTON') {
          // console.log(event.target.value)
          elem.querySelector('.mortgage__form-count').style.width =(event.target.value.length) ? indent * event.target.value.length + 'px' : indent +'px'
          elem.querySelector('.mortgage__form-count').value = String(event.target.value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
          monthlyPayment()
        }
      })
    })

  }
  // маска на ввод в инпут
  if(document.querySelector('.mortgage__form-count')) {
    let inputs = document.querySelectorAll('.mortgage__form-count');

    inputs.forEach(input=> {
        input.value = (String(input.value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "))

      input.addEventListener('change', ()=> {
        input.value = input.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
      })
    })
  }
  // input data вывод в инпут информации
  if(document.querySelector('.ui__label')){
     let labels = document.querySelectorAll('.ui__label');
  }
  let ooo = document.querySelectorAll('input[type="date"]')
  ooo.forEach(input => {
    input.addEventListener('click', ()=>{
      // console.log(input.value)
    });
  })
  // menu header second
  if(document.querySelector('.menu__link_list')){
    let menuItem = document.querySelectorAll('.menu__link_list');
    // console.log(menuItem)
    for (item of menuItem) {
      item.addEventListener('click', function () {
          if (this.classList.contains('active')) {
              this.classList.remove('active')
              this.parentElement.classList.remove('active')
          } else {
              for (item2 of menuItem) {
                  item2.classList.remove('active');
                  item2.parentElement.classList.remove('active')
              }
              this.classList.add('active');
              this.parentElement.classList.add('active')
          }
      });
    };

    window.addEventListener('keyup', (event)=>{
      if(event.keyCode === '27' || event.key === 27 || event.key === 'Escape'){
        menuItem.forEach(item=> {
          item.classList.remove('active')
          item.parentElement.classList.remove('active')
        })
      }
    })
  }
  // расчет высоты фото 
  if(document.querySelector('.banner-top-two__inner')) {
    let heiImg = document.querySelector('.banner-top-two__inner').clientHeight;
    let pic = document.querySelector('.banner-top-two__picture')
    pic.style.height = `${heiImg}px`
    console.log(heiImg)

    window.addEventListener('resize', ()=> {
      heiImg = document.querySelector('.banner-top-two__inner').clientHeight;
      pic.style.height = `${heiImg}px`
    });
  }
  // about-page slider
  if(document.querySelector('.about-page__slider')) {
    const swiper = new Swiper('.about-page__slider', {
      slidesPerView:4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        1201:{
          slidesPerView:4,
        },
        1200: {
          slidesPerView: 3,
        },
        769:{
          slidesPerView: 3,
        },
        768: {
          slidesPerView:2,
        },
        481: {
          slidesPerView:2
        },
        280: {
          slidesPerView:1
        }

      }
    });
  }
})



