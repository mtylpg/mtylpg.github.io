$(document).ready(function() {

    $('.navLink').each(function () {
        $(this).on("click", function() { 
            targetHeight = $('#'+$(this).attr("link")).offset().top-50;
            $('body').animate({ scrollTop: targetHeight}, 150);
        });
    });

    var navContainer = $('#navContainer');
    var navFiller = $('#navFiller');

    var skillsbg = $('#skillsbg');
    var contactbg = $('#contactbg');
    var bg1 = $('#bg1');
    var bg2 = $('#bg2');
    var minbgwidth = 1225; // Thresholds for disabling parallax
    var minbgheight = 880;

    var bgList = [skillsbg, contactbg, bg1, bg2];

    checkZoom($(window).width(), $(window).height());
    setBackgrounds($("body").scrollTop())

    $(window).on("scroll", function() {
        offset = $("body").scrollTop();
        
        if (offset > 335){
            navContainer.addClass("floatNav");
            navFiller.addClass("navFill");
        }
        else {
            navContainer.removeClass("floatNav");
            navFiller.removeClass("navFill");
        }

        setBackgrounds(offset);
    });

    $(window).on('resize', function() {
        checkZoom($(window).width(), $(window).height());
    });

    function setBackgrounds(yPos){
        skillsbg.css(
            'background-position','-190px -'+
                (yPos*0.4+0)+'px');
        contactbg.css(
            'background-position','-0px -'+
                (yPos*0.4-300)+'px');
        bg1.css(
            'background-position','0px -'+
                (yPos*0.7+120)+'px');
        bg2.css(
            'background-position','100% '+
                (yPos*0.7)+'px');
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
