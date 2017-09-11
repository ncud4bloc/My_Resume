/* -----  Functions  ----- */

var nextFrame = function(){
    $('.notShown').hide("fade",1);
    if ($('.shown').attr('id') == 'frame1'){
        $('#frame1').removeClass('shown').addClass('notShown');
        $('#frame2').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame2'){
        $('#frame2').removeClass('shown').addClass('notShown');
        $('#frame3').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame3'){
        $('#frame3').removeClass('shown').addClass('notShown');
        $('#frame4').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame4'){
        $('#frame4').removeClass('shown').addClass('notShown');
        $('#frame5').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame5'){
        $('#frame5').removeClass('shown').addClass('notShown');
        $('#frame6').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame6'){
        $('#frame6').removeClass('shown').addClass('notShown');
        $('#frame7').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame7'){
        $('#frame7').removeClass('shown').addClass('notShown');
        $('#frame1').removeClass('notShown').addClass('shown');
    } else {
        console.log('You forgot to add the new frames!!');
    }
    /*$('.shown').show("fade",500);*/
    $('.shown').slideDown(500);
};

var prevFrame = function(){
    $('.notShown').hide("fade",1);
    if ($('.shown').attr('id') == 'frame1'){
        $('#frame1').removeClass('shown').addClass('notShown');
        $('#frame7').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame7'){
        $('#frame7').removeClass('shown').addClass('notShown');
        $('#frame6').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame6'){
        $('#frame6').removeClass('shown').addClass('notShown');
        $('#frame5').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame5'){
        $('#frame5').removeClass('shown').addClass('notShown');
        $('#frame4').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame4'){
        $('#frame4').removeClass('shown').addClass('notShown');
        $('#frame3').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame3'){
        $('#frame3').removeClass('shown').addClass('notShown');
        $('#frame2').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame2'){
        $('#frame2').removeClass('shown').addClass('notShown');
        $('#frame1').removeClass('notShown').addClass('shown');
    } else {
        console.log('You forgot to add the new frames!!');
    }
    /*$('.shown').show("fade",500);*/
    $('.shown').slideDown(500);
};


/* -----  Function Calls  ----- */

$(function(){
    
    $('#gotoPH').on('click',function(){
        window.location = "https://ncud4bloc.github.io/My_Resume/HTML/contact.html";
    });
    
    $('#gotoLI').on('click',function(){
        window.location = "https://www.linkedin.com/in/neil-cudden-60606011/";
    });
    
    $('#gotoTW').on('click',function(){
        window.location = "https://twitter.com/NeilCudden/";
    });
    
    $('#gotoGH').on('click',function(){
        window.location = "https://github.com/ncud4bloc/";
    });
    
    $('.myIframe').css('height', $('#box1').height()+'px');
    
    $('#lftArrow').on('click',function(){
        prevFrame();
    });
    
    $('#rtArrow').on('click',function(){
        var $rtClick = $('.myIframe');
        nextFrame($rtClick);
    });

});