$ = jQuery.noConflict(true);
$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var $popUpGeneralBlock = $('.pop-up-general-block');

    var $overlayPopUpWRP = $('.pop-up-overlay-wrapper');
    var $overlay = $('.overlay-pop-up');
    var $closePopUpBtn = $('.pop-up-general-block-close-btn');

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vhMenu = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vhMenu = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);
    });


    // soft scroll
    $(".scrollTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('active');
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 500 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });


    // scroll header
    $(window).scroll(function() {
        headerChange();
    });
    headerChange();

    function headerChange () {
        if($window.scrollTop() > 100) {
            $header.addClass('header-scroll');
        } else {
            $header.removeClass('header-scroll');
        }
    };


    // slider
    $('.prepod-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-main-arrow'),
        nextArrow: $('.next-main-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                }
            }
        ]

    });

    var $status = $('.pagingInfo');
    var $slickElement = $('.review-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });
    $slickElement.slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-rev-arrow'),
        nextArrow: $('.next-rev-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                }
            }
        ]
    });

   // form checked
    $('.checkbox-check').change(function() {
      if(this.checked) {
          $(this).closest('form').find('.btn-checkbox').removeClass('btn-checkbox-disabled');
      }
      else {
          $(this).closest('form').find('.btn-checkbox').addClass('btn-checkbox-disabled');
      }
    });


    // Collapse
  $('.collaps-list-top').on('click', function () {
    if ($(this).hasClass('active')) {
        $('.collaps-list-body').slideUp();
        $('.collaps-list-top').removeClass('active');
    } else {
      $('.collaps-list-body').slideUp();
      $('.collaps-list-top').removeClass('active');
      $(this).closest('.collaps-list-card').find('.collaps-list-body').slideDown();
      $(this).addClass('active');
    }
  });

    // go back
    $('.back-arrow').click(function(){
        window.history.back();
    });

    // menu
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
        $header.toggleClass('header-scroll');
    });

    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    // masked
    $('.mask-phone').mask('+799999?9999999999', {placeholder: ""});

    // tabs
    $('.switch-level1 li').click(function () {
        $(this).closest('.switch-level1').find('li').removeClass('active');
        $(this).addClass('active');
        var dir = $(this).attr('data-dir');
        var $container = $(this).closest('section').find('.directions');
        $container.removeClass('active');
        $('.directions[data-dir="' + dir + '"]').addClass('active');
    });
    $('.directions-dance-list-js li').click(function () {
        $(this).closest('.directions-dance-list-js').find('li').removeClass('active');
        $(this).addClass('active');
        var dir = $(this).attr('data-dir');
        var $container = $(this).closest('section').find('.directions-dance-content-js');
        $container.removeClass('active');
        $('.directions-dance-content-js[data-dir="' + dir + '"]').addClass('active');
    });
    $('.directions-dance-list-js-1 li').click(function () {
        $(this).closest('.directions-dance-list-js-1').find('li').removeClass('active');
        $(this).addClass('active');
        var dir = $(this).attr('data-dir');
        var $container = $(this).closest('section').find('.directions-dance-content-js-1');
        $container.removeClass('active');
        $('.directions-dance-content-js-1[data-dir="' + dir + '"]').addClass('active');
    });

    $('.week-wrp-js li').click(function () {
        $(this).closest('.week-wrp-js').find('li').removeClass('active');
        $(this).addClass('active');
        var week = $(this).attr('data-week');
        var $container = $(this).closest('.directions').find('.week-tables-js');
        $container.removeClass('active');
        $('.week-tables-js[data-week="' + week + '"]').addClass('active');
    });

    // pop-ups
    function thnx () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#thnx').addClass('active');
    };
    $('.open-pop-up').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#form').addClass('active');
    });
    $('.open-pop-up-menu').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#form').addClass('active');
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('active');
    });


    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });

});
