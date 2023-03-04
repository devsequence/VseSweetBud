AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header'),
        $hero = $('.hero');
    if($hero.length > 0){

        if ($this.scrollTop() > $hero.height()) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    }

});

$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});

$('.header-nav a, .footer-nav a').on('click', function (e) {
    e.preventDefault();
    var ths = $(this);
    var thsId = ths.data('id');
    var headerHeight = $('.header').height();
    if ($(ths).data('id')) {
        $('html, body').animate({
            scrollTop: $('#'+thsId).offset().top - 100
        }, 1000);
        $('.header, .header-btn').removeClass('active');
        $('body').removeClass('scroll');
        return false;
    }else{
        $('.popup').addClass('active');
        ths.addClass('active');
    }
});

$(".gallery-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.gallery-nav-prev'),
    nextArrow: $('.gallery-nav-next'),
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 540,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$(".reviews-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews-nav-prev'),
    nextArrow: $('.reviews-nav-next'),
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }
    }]
});


$('.faq-item__title').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next().slideToggle().parents('.faq-item').toggleClass('active');
    return false;
});


$(".work-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.work-nav-prev'),
    nextArrow: $('.work-nav-next'),
    responsive: [{
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 540,
        settings: {
            slidesToShow: 1,
        }
    }]
});

$('.numbers-item__number span').each(function (e) {
    var $this = $(this);
    var $thisPersent = $this.parent().data('progress');
    $this.css('background', ' conic-gradient( rgba(0, 159, 239, 1) '+$thisPersent+'%, rgba(0, 159, 239, .06) '+$thisPersent+'%)')
});
$('.price-table__btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('span').toggleClass('hidden');
    $this.prev().toggleClass('active');
});


function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('body').addClass('scroll');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        // $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parents('.popup').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});
$('.emailForm').on('click', function (e) {

});
