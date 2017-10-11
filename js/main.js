//Menu-filter
$(".hover_menuJS").click(function(){
    $(".filter_clickMenu").toggleClass('filter_clickMenuJS');
});


$(".left_fixedBlock--menu").click(function(){
   $(".wrap_menu").toggleClass("wrap_menuJS");
   $(".wrap_listMenuJS").toggleClass("listMenuJS_ul");
   $(".wrap_adressMenu-one").toggleClass("adressesMenuJS");
   $(".wrap_adressMenu-two").toggleClass("adressesMenuJS");
   $(".wrapper_fullContent").toggleClass("wrap_fullContentJS");
});


$(".application_messageMenuJS").click(function(){
    $(".wrapper_formMenuJS").toggleClass("anim_formMenuJS");
    $(".wrapper_adressMenu").toggleClass("anim_adressMenuJS");
    $(this).toggleClass("application_messageMenuJS_fontColor");
});