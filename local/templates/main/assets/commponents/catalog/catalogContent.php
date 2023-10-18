<section class="catalog --bg-gray">
    <div class="container">
        <?php 
            include '../local/templates/main/assets/commponents/breadCrumbs.php';
        ?>
        <h2 class="catalog__title _main-title-big">Каталог</h2>
        <div class="offer__inner">
            <?php 
                include '../local/templates/main/assets/commponents/formFIlter.php'
            ?>
        </div>
        <?php 
            include '../local/templates/main/assets/commponents/cards/catalogFilter.php';
        ?>
            <div class="listInnerFilter">
                <?php
                    include '../local/templates/main/assets/commponents/cards/cardList.php';
                    include '../local/templates/main/assets/commponents/cards/cardListLine.php';
                ?>
            </div>
        <?php
            include '../local/templates/main/assets/commponents/baners/banerTwo.php';
        ?>
            <div class="listInnerFilter">
                <?php
                    // include '../local/templates/main/assets/commponents/cards/cardList.php';
                    include '../local/templates/main/assets/commponents/cards/cardListLine.php';
                ?>
            </div>
        <?php
            include '../local/templates/main/assets/commponents/cards/cardList.php';
            include '../local/templates/main/assets/commponents/cards/cardListLine.php';
            include '../local/templates/main/assets/commponents/cards/pagination.php';
        ?>
    </div>
</section>