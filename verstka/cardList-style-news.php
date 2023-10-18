<?php
$title = 'Карточки новости';

    include '../local/templates/main/assets/header.php';
    ?>
    <section class="cardList-style --bg-gray ">
        <div class="container">
            <h1 class="_main-title">
                Стили карточек новостей
            </h1>
            <ul class="cards__list col-three mar-bot">
                <li class="swiper-slide news__item">
                    <a href="">
                    <div class="news__category">Акции</div>
                        <picture>
                            <img src="../local/templates/main/assets/images/newsSLide.png" alt="">
                        </picture>
                        <time>3 июня 2022</time>
                        <h4>
                            Скидка 2% на готовые квартиры ЖК “Добрый”
                        </h4>
                        <p>
                        Зачем использовать переуступку и как это работает<br> подзаголовок в 2 строки и дальше многоточие
                        </p>
                    </a>
                </li>
                <li class="swiper-slide news__item news__item-style-one">
                    <a href="">
                    <div class="news__category">Акции</div>
                        <picture>
                            <img src="../local/templates/main/assets/images/newsSLide.png" alt="">
                        </picture>
                        <h4>
                            Скидка 2% на готовые квартиры ЖК “Добрый”
                        </h4>
                        <p>
                        Зачем использовать переуступку и как это работает<br> подзаголовок в 2 строки и дальше многоточие
                        </p>
                        <time>3 июня 2022</time>
                    </a>
                </li>
                <li class="swiper-slide news__item news__item-style-two">
                    <div class="news__category">Акции</div>
                        <picture>
                            <img src="../local/templates/main/assets/images/newsSLide.png" alt="">
                        </picture>
                        <h4>
                            Скидка 2% на готовые квартиры ЖК “Добрый”
                        </h4>
                        <p>
                            Зачем использовать переуступку и как это работает<br> подзаголовок в 2 строки и дальше многоточие
                        </p>
                    <a href="" class="news__item-link">
                        Читать далее
                    </a>
                </li>
            </ul>

        </div>
    </section>
    <?php
    include '../local/templates/main/assets/footer.php';
?>