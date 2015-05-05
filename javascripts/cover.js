$(document).ready(function() {

    $('.navLink').each(function () {
        $(this).on("click", function() {
            targetHeight = $('#'+$(this).attr("link")).offset().top-50;
            $('body').animate({ scrollTop: targetHeight}, 150);
        });
    });

    var navLoc = $('#navContainer').position().top;
    var floatNav = $('#floatNav');
    var floatHidden = true;

    var skillsbg = $('#skillsbg');
    var contactbg = $('#contactbg');
    var bg1 = $('#bg1');
    var bg2 = $('#bg2');
    var minbgwidth = 1225; // Thresholds for disabling parallax
    var minbgheight = 880;

    var bgList = [skillsbg, contactbg, bg1, bg2];

    //checkZoom($(window).width(), $(window).height());
    //setBackgrounds($("body").scrollTop())

    var scrollTimeout;

    $(window).scroll(function () {
        if (scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 10);
    });

    scrollHandler = function () {
        // Check your page position
        var offset = $("body").scrollTop();

        if (offset > navLoc){
            if(floatHidden){
                floatNav.addClass("visible");
                floatNav.animate({top: '0'}, 150);
                floatHidden = false;
            }
        } else {
            if(!floatHidden){

                floatNav.animate({top: '-50'}, 100, function(){
                    floatNav.removeClass("visible");
                });
                floatHidden = true;
            }
        }

        // setBackgrounds(offset);
    };


    function setBackgrounds(yPos){

        $(skillsbg).animate(
            {'background-position-y': -1*(yPos*0.4+0)},
            10,
            'linear');
        $(contactbg).animate(
            {'background-position-y': (0-1)*(yPos*0.4-300)},
            10,
            'linear');
        $(bg1).animate(
            {'background-position-y': (0-1)*(yPos*0.7+120)},
            10,
            'linear');
        $(bg2).animate(
            {'background-position-y': (yPos*0.7)},
            10,
            'linear');
    }

    function checkZoom(width, height){
        if(width < minbgwidth || height < minbgheight){
            for(i=0, len=bgList.length; i < len; i++){
                bgList[i].addClass("restricted");
            }
        }
        else{
            for(i=0, len=bgList.length; i < len; i++){
                bgList[i].removeClass("restricted");
            }
        }
    }
});
