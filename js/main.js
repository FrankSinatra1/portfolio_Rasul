//Menu-filter
$(".hover_menuJS").click(function(){
    $(".filter_clickMenu").toggleClass('filter_clickMenuJS');
});

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
});

$(".left_fixedBlock--menu, .hamburger_menuHidden").click(function(){
   $(".wrap_menu").toggleClass("wrap_menuJS");
   $(".wrap_listMenuJS").toggleClass("listMenuJS_ul");
   $(".wrap_adressMenu-one").toggleClass("adressesMenuJS");
   $(".wrap_adressMenu-two").toggleClass("adressesMenuJS");
   $(".wrap_account").toggleClass("accountMenuJS");
   $(".wraper_footer").toggleClass("wrapper_jobsItems__hidden");
});

/*show fucking fullmenu*/
$(".left_fixedBlock--menu").click(function() {
    
        $(".line1").css({
        width: "30px",
        transition: "1.2s .1s",
        opacity: "1",
    });$(".line2").css({
        width: "30px",
        transition: "1.4s .1s",
        opacity: "1",
    });$(".line3").css({
        width: "30px",
        transition: "1.6s .1s",
        opacity: "1",
    });
    
    if ( $(".wrapper_fullContent").hasClass("wrap_fullContentJS") ){
        setTimeout(function(){
            $(".wrapper_fullContent").toggleClass("wrap_fullContentJS");
        },100);
    }else {
            setTimeout(function(){
            $(".wrapper_fullContent").toggleClass("wrap_fullContentJS");
        },1500);
    }

});


$(".application_messageMenuJS").click(function(){
    $(".wrapper_formMenuJS").toggleClass("anim_formMenuJS");
    $(".wrapper_adressMenu").toggleClass("anim_adressMenuJS");
    $(this).toggleClass("application_messageMenuJS_fontColor");
});



$(".wrap_text h1 span").toggleClass('textShow_h1');

$(document).ready(function() {
    
    /*jobs show animation*/
    $(".wrapper_jobsItems a:eq(0)").toggleClass("jobsAnimarionOnLoad_1");
    $(".wrapper_jobsItems a:eq(1)").toggleClass("jobsAnimarionOnLoad_2");
    $(".wrapper_jobsItems a:eq(2)").toggleClass("jobsAnimarionOnLoad_3");
    $(".wrapper_jobsItems a:eq(3)").toggleClass("jobsAnimarionOnLoad_4");
    $(".wrapper_jobsItems a:eq(4)").toggleClass("jobsAnimarionOnLoad_5");
    $(".wrapper_jobsItems a:eq(5)").toggleClass("jobsAnimarionOnLoad_6");
    $(".left_fixedBlock--logo").toggleClass("left_fixedBlock--logoAnim");
    
    $(".wrapper_backgroundText img").css({
        transition: "3s 2s",
        opacity: "1",
    });
    
    
/*hamburger*/

    $(".line1").css({
        width: "30px",
        transition: "1.2s 2.2s",
        opacity: "1",
    });$(".line2").css({
        width: "30px",
        transition: "1.4s 2.4s",
        opacity: "1",
    });$(".line3").css({
        width: "30px",
        transition: "1.6s 2.6s",
        opacity: "1",
    });
    
    
    $(".wrap_text h1 span:eq(0)").css({
        transition: "1.1s 1.9s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(1)").css({
        transition: "1.1s 2s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(2)").css({
        transition: "1.1s 2.1s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(3)").css({
        transition: "1.1s 2.2s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(4)").css({
        transition: "1.1s 2.3s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(5)").css({
        transition: "1.1s 2.4s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(6)").css({
        transition: "1.1s 2.5s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(7)").css({
        transition: "1.1s 2.6s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(8)").css({
        transition: "1.1s 2.7s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(9)").css({
        transition: "1.4s 2.8s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(10)").css({
        transition: "1.1s 2.9s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(11)").css({
        transition: "1.1s 3s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(12)").css({
        transition: "1.1s 3.1s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(13)").css({
        transition: "1.1s 3.2s",
        opacity: "1",
    });$(".wrap_text h1 span:eq(14)").css({
        transition: "1.1s 3.3s",
        opacity: "1",
    });    
    
});







