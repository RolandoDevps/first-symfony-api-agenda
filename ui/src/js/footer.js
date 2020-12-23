function openFooterMenu(idelement){
    // $("ul[class='footer-menu-item']").css("display", "none");
    if (window.matchMedia('(max-width: 575px)').matches){
        $("ul[data-menu="+idelement+"]").toggle();
        $("#"+idelement).toggleClass("open-widget");
    }
}
if (window.matchMedia('(min-width: 576px)').matches){
    $(".footer-menu-item").show();
}