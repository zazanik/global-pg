//hamburger
$(".hamburger").click(function() {
    $("#navigation").addClass("navHamburger");
    $(this).css("visibility","hidden");
    $(".cross").css("visibility","visible");
});

$(".cross").click(function(){
    $("#navigation").removeClass("navHamburger");
    $(this).css("visibility","hidden");
    $(".hamburger").css("visibility","visible");
});

//lang

$(".lang ul").click(function(){
    $(".lang ul").toggleClass("active");
   $(".lang ul li:nth-child(n+2)").stop().slideToggle();
});

//close menu
$(document).click(function(event) {
    if (($(event.target).closest(".hamburger").length) || ($(event.target).closest(".hamburger").length)) return;
    $('#navigation').removeClass('navHamburger');
    $(".cross").css("visibility","hidden");
    $(".hamburger").css("visibility","visible");
    event.stopPropagation();
});
//phone button
$(".phone").click(function(){
    $(".phone-tel").toggleClass("active");
});

//slider in main page
$(document).ready(function () {
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
});

//tabs

$(document).ready(function() {
    $(".tab-item").not(":first").hide();
    $(".tab").click(function () {
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0);
});

$(".tab").click(function(){
    $(".tab").removeClass("active");
    $(this).toggleClass("active");
});
//
//tabs for side-bar
//$(document).ready(function() {
//    $(".tab-item-side-bar").not(":first").hide();
//    $(".tab").click(function () {
//        $(".tab-item-side-bar").hide().eq($(this).index()).fadeIn()
//    }).eq(0);
//});
//
//$(".tab").click(function(){
//    $(".tab").removeClass("active");
//    $(this).toggleClass("active");
//});

//tabs for catalog-obek
$(document).ready(function() {
    $(".tab-item-obj").not(":first").hide();
    $(".tab").click(function () {
        $(".tab-item-obj").hide().eq($(this).index()).fadeIn()
    }).eq(0);
});

$(".tab").click(function(){
    $(".tab").removeClass("active");
    $(this).toggleClass("active");
});



// Checkbox
// Отслеживаем событие клика по диву с классом check
$(function() {
    $('.checkbox-cont').find('.checkbox-div').click(function () {
        // Пишем условие: если вложенный в див чекбокс отмечен
        if ($(this).find('input').is(':checked')) {
            // то снимаем активность с дива
            $(this).removeClass('add_email_checked');
            // и удаляем атрибут checked (делаем чекбокс не отмеченным)
            $(this).find('input').removeAttr('checked');

            // если же чекбокс не отмечен, то
        } else {
            // добавляем класс активности диву
            $(this).addClass('add_email_checked');
            // добавляем атрибут checked чекбоксу
            $(this).find('input').attr('checked', true);
        }
    });
});

//Меню при нажатии на оренду или продажу
$(".comp-side-bar .tabs .re").click(function(){
   $(".swiming-towns-cont .rent").toggleClass("active");
   $(".swiming-towns-cont .sale").removeClass("active");
});
$(".comp-side-bar .tabs .sa").click(function(){
    $(".swiming-towns-cont .sale").toggleClass("active");
    $(".swiming-towns-cont .rent").removeClass("active");
});

//hover effect

$(".form-hover").click(function(){
    $(".form-cont").toggleClass("active");
});

//fancybox

$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});
