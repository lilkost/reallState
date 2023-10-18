<section class="mortgage --bg-gray">
    <div class="container">
        <div class="mortgage__top">
            <h2 class="motrage__title _main-title">Ипотека</h2>
            <div class="mortgage__buttons">
                <button class="mortgage__btn active">Помощь при оформлении</button>
                <button class="mortgage__btn">Обмен квартиры</button>
            </div>
        </div>
        <div class="mortgage__box">
            <ul class="mortgage__box-list">
                <li class="mortgage__box-item">
                    <div class="mortgage__box-item--left">
                        <picture>
                            <img src="../local/templates/main/assets/images/bank/sber.svg" alt="">
                        </picture>
                        <div class="mortgage__box-item-name">
                            <p>Сбербанк</p>
                            <span>Господдержка</span>
                        </div>
                    
                    </div>
                    <div class="mortgage__box-item--right">
                    <div class="mortgage__box-item-bid">
                            <p>от 6,5 %</p>
                            <span>Ставка</span>
                        </div>
                    </div>
                </li>
                <li class="mortgage__box-item">
                    <div class="mortgage__box-item--left">
                        <picture>
                            <img src="../local/templates/main/assets/images/bank/alfa.svg" alt="">
                        </picture>
                        <div class="mortgage__box-item-name">
                            <p>Альфабанк</p>
                            <span>Мат.капитал</span>
                        </div>
                    
                    </div>
                    <div class="mortgage__box-item--right">
                    <div class="mortgage__box-item-bid">
                            <p>от 6,9 %</p>
                            <span>Ставка</span>
                        </div>
                    </div>
                </li>
                <li class="mortgage__box-item">
                    <div class="mortgage__box-item--left">
                        <picture>
                            <img src="../local/templates/main/assets/images/bank/prom.svg" alt="">
                        </picture>
                        <div class="mortgage__box-item-name">
                            <p>Промсвязьбанк</p>
                            <span>Мат.капитал</span>
                        </div>
                    
                    </div>
                    <div class="mortgage__box-item--right">
                    <div class="mortgage__box-item-bid">
                            <p>от 6,9 %</p>
                            <span>Ставка</span>
                        </div>
                    </div>
                </li>
                <li class="mortgage__box-item mortgage__box-item--btn">
                    <a href="../verstka/montrage.php">Узнать подробнее</a>
                </li>
            </ul>
            <form action="" class="mortgage__form">
                <fieldset class="mortgage__form-box">
                    <label for="" class="mortgage__form-label">
                        <span>Собственные средства</span>
                        <div class="mortgage__count-container">
                            <input class="mortgage__form-count" type="text" id="inp_you">
                            <p>
                                ₽
                            </p>
                        </div>
                        <input type="range" class="js-range-slider"
                               data-min="1" data-max="10000000"
                               data-from="1"
                        />
                    </label>
                    <label for="" class="mortgage__form-label">
                        <span>Срок ипотеки</span>
                        <div class="mortgage__count-container">
                            <input class="mortgage__form-count" type="text" id="inp_term">
                            <p>
                                лет
                            </p>
                        </div>
                        <input type="range" class="js-range-slider"
                               data-min="1" data-max="30"
                               data-from="1"
                        />
                    </label>
                    <label for="" class="mortgage__form-label">
                        <span>Платеж в месяц</span>
                        <div class="mortgage__count-container">
                            <input class="mortgage__form-count" type="text" id="inp_mount">
                            <p>
                                ₽
                            </p>
                        </div>
                        <input  type="range" class="js-range-slider"
                                data-min="1" data-max="200000"
                                data-from="1"
                        />
                        </label>
                    <label for="" class="mortgage__form-label">
                        <span>Стоимость квартиры</span>
                        <div class="mortgage__count-container">
                            <input class="mortgage__form-count" type="text" id="inp_price_house">
                            <p>
                                ₽
                            </p>
                        </div>
                        <input type="range" class="js-range-slider"
                               data-min="5000000" data-max="150000000"
                               data-from="1"
                        />
                    </label>
                </fieldset>
                <fieldset class="mortgage__form-box">
                    <div class="mortgage__form-application">
                        <h5>Оставьте заявку, и мы свяжемся с Вами </h5>
                        <p>Все расчёты являются приблизительными. Для получения точной информации обращайтесь в офис продаж.</p>
                    </div>
                    <label for="" class="mortgage__form-label-tel">
                        <input type="tel" id="mortgagePhone" placeholder="+7 9ххх ххх хх хх">
                        <button class="mortgage__form-submit btn-middle" type="submit">Отправить</button>
                    </label>
                </fieldset>
            </form>