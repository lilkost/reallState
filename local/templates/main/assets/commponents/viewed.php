<div class="container">
    <div class="favorites__top">
        <?php
            include '../local/templates/main/assets/commponents/breadCrumbs.php'
        ?>
        <h2 class="_main-title favorites__title">Недавно просмотрено</h2>
    </div>
    <div class="favorites__content">
        <?php
            include '../local/templates/main/assets/commponents/cards/cardList.php';
            include '../local/templates/main/assets/commponents/cards/pagination.php';
        ?>
    </div>
</div>