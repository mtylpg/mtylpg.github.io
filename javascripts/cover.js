$(document).ready(function() {

    $('.oldLink').on("mouseenter", function() {
        $('#old').css('color','#007dfb');
        $('#old').animate({"margin-top":"-.9em"}, 100, "linear");
        $('#bad').animate({"margin-top":"0em"}, 100, "linear");
    });
    $('.oldContainer').on("mouseleave", function() {
        $('#old').css('color','#444');
        $('#old').animate({"margin-top":"0em"}, 100, "linear");
        $('#bad').animate({"margin-top":".9em"}, 100, "linear");
    });

});