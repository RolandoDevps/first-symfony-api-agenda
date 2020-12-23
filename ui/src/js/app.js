$(document).load($(window).bind("resize", checkWidthBlocServices));

function checkWidthBlocServices(){
    if (window.matchMedia('(max-width: 768px)').matches)
    {
        $(".wrap-service").addClass("carousel-inner");
        $(".responsive-show").addClass("carousel-item");
    }
    else{
        $(".wrap-service").removeClass("carousel-inner");
        $(".responsive-show").removeClass("carousel-item");
    }
}