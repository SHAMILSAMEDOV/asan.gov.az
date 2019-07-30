$(document).ready(function(){
    $(".menu").click(function () {
        $(".right-menu").css("right", "0");
    });
    
    $(".close-btn").click(function () {
        $(".right-menu").css("right", "-50%");
    });
});