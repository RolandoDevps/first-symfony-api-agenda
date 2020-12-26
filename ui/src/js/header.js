//start js header
$(document).load($(window).bind("resize", checkWidth));

function checkWidth(){
    if($(".menu-icon").css("display") == "none") $(".wrap-side-bar").css("display","none");
    if (window.matchMedia('(max-width: 350px)').matches)
    {
        $(".header-right").removeClass("col-4");
        $(".header-right").addClass("col-7");
        $(".space-between").removeClass("col-7");
        $(".space-between").addClass("col-4");
    }
    // else{
    //     $(".header-right").addClass("col-4");
    //     $(".header-right").removeClass("col-7");
    //     $(".space-between").addClass("col-7");
    //     $(".space-between").removeClass("col-4");
    // }
}

//js control the sideNavBar
$("#openNav").on("click", function() {
    $(".wrap-side-bar").css("display","block");
});
var mySidebar = $("#mySidebar");
var openNav = $("#openNav");
$(window).on("click",function(event) {
    if (mySidebar !== event.target && !(mySidebar.has(event.target).length) && openNav != event.target && !(openNav.has(event.target).length)) {
        if($(".wrap-side-bar").is(":visible")){
            $(".wrap-side-bar").css("display","none");
        }
    }
});
//end

/*** Déja ok ***/
// function openFormSearch(){
//     var isShow = $(".menu-mobile-display-none").css("display");;
//     $("#toggle-search").on("click", function(){
//         $(".toggle-display-none").css("display", "none");
//         $(".toggle-display-flex").css("display", "flex");
//     })
//     $(".close-search-form").on("click", function(){
//         if(isShow != "none") $(".header-center").css("display", "block");
//         $(".header-right").css("display", "flex");
//         $(".toggle-display-flex").css("display", "none");
//     })
// }
// openFormSearch()

/*** Déja ok ***/
// window.onscroll = function() {myFunction()};
//     var wrapper_header= document.getElementById("wrapper_header");
//     var sticky = 420;
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         wrapper_header.classList.add("sticky");
//     } else {
//         wrapper_header.classList.remove("sticky");
//     }
// }
//end js header