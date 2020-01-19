$(function () {

    $(".style-scrollbar").mCustomScrollbar({
        scrollInertia: 300
    });

    $('.button').on('click', function () {
        // popup open
        $('.overlay').fadeIn(500);
        $('.popup').animate({
            right: '0px'
        }, 500);

        // product add card
        let product = $(this).closest('.product');
        let name = $(product).find('.product__name-link').text();
        let img = $(product).find('.product__img-image').attr("src");
        let price = $(product).find('.price__new-number').text();
        let quantity = $(product).find('.quantity__number').text();

        let template = document.querySelector('#template');
        let clone = template.content.cloneNode(true);

        clone.querySelector('.popup-product__name-link').textContent = name;
        clone.querySelector('.popup-product__qta-number').textContent = quantity;
        clone.querySelector('.popup-product__img-image').setAttribute("src", img);
        clone.querySelector('.popup-product').dataset.price = price;
        clone.querySelector('.popup-product__price-number').textContent = +price * +quantity;

        document.querySelector('.popup-products .popup-container').appendChild(clone);
        sum();
    });

    $('.popup-title, .overlay').on('click', function () {
        // popup close
        $('.overlay').fadeOut(500);
        $('.popup').animate({
            right: '-470px'
        }, 500);
    });
    // quantity list
    $('.quantity__selected').on('click', function () {
        let _this = $(this);
        listToggle(_this, '.quantity');
    });

    $('.product__list-item').on('click', function () {
        let x = $(this).text();
        $(this).closest('.quantity').find('.quantity__number').text(x);
    });

    $('.product__list').mouseout(function (e) {
        if (e.relatedTarget.closest('.product__list')) {
            return;
        } else {
            $(this).closest('.product__list').slideUp(500);
        }
    });

    // popup

    $('.popup-container').on('click', function (e) {
        if (e.target.matches('.popup-product__delete')) {
            $(e.target).closest('.popup-product').remove();
            sum();
        }
        if (e.target.closest('.popup-product__qta')) {
            listToggle(e.target, '.popup-product__qta');
        }
        if (e.target.matches('.popup__list-item')) {
            let x = $(e.target).text();
            let product = $(e.target).closest('.popup-product');
            let price = $(product).data("price");
            $(e.target).closest('.popup-product__qta').find('.popup-product__qta-number').text(x);
            $(product).find('.popup-product__price-number').text(+x * +price);
            $('.popup-sum__price-number').text();
            sum();
        }
    });

    function sum() {
        let sum = 0;
        $('.popup-product__price-number').each(function (indx, element) {
            sum += Number($(element).text());
        });
        $('.popup-sum__price-number').text(sum);
    }

    function listToggle(th, pr) {
        $(th).closest(pr).find('.list').stop().slideToggle(500);
    }

});