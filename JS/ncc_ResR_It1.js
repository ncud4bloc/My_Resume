/* -----  Functions  ----- */

var nextFrame = function(){
    $('.notShown').hide("fade",1);
    if ($('.shown').attr('id') == 'frame1'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Myframe_snip2.jpg)'    
        });
        $('#frame1').removeClass('shown').addClass('notShown');
        $('#frame2').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame2'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Diner_snip2.jpg)'    
        });
        $('#frame2').removeClass('shown').addClass('notShown');
        $('#frame3').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame3'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Newsweek_snip.jpg)'    
        });
        $('#frame3').removeClass('shown').addClass('notShown');
        $('#frame4').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame4'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Calculator_snip.jpg)'    
        });
        $('#frame4').removeClass('shown').addClass('notShown');
        $('#frame5').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame5'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Ttt_snip2.jpg)'    
        });
        $('#frame5').removeClass('shown').addClass('notShown');
        $('#frame6').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame6'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Minesweeper_snip2.jpg)'    
        });
        $('#frame6').removeClass('shown').addClass('notShown');
        $('#frame7').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame7'){
        $('#box1').css({
            'background-image': 'url(IMAGES/MissileCommand_snip1.jpg)'    
        });
        $('#frame7').removeClass('shown').addClass('notShown');
        $('#frame1').removeClass('notShown').addClass('shown');
    } else {
        console.log('You forgot to add the new frames!!');
    }
    $('.shown').slideDown(500);
};

var prevFrame = function(){
    $('.notShown').hide("fade",1);
    if ($('.shown').attr('id') == 'frame1'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Myframe_snip2.jpg)'    
        });
        $('#frame1').removeClass('shown').addClass('notShown');
        $('#frame7').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame7'){
        $('#box1').css({
            'background-image': 'url(IMAGES/MissileCommand_snip1.jpg)'    
        });
        $('#frame7').removeClass('shown').addClass('notShown');
        $('#frame6').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame6'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Minesweeper_snip2.jpg)'    
        });
        $('#frame6').removeClass('shown').addClass('notShown');
        $('#frame5').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame5'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Ttt_snip2.jpg)'    
        });
        $('#frame5').removeClass('shown').addClass('notShown');
        $('#frame4').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame4'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Calculator_snip.jpg)'    
        });
        $('#frame4').removeClass('shown').addClass('notShown');
        $('#frame3').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame3'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Newsweek_snip.jpg)'    
        });
        $('#frame3').removeClass('shown').addClass('notShown');
        $('#frame2').removeClass('notShown').addClass('shown');
    } else if ($('.shown').attr('id') == 'frame2'){
        $('#box1').css({
            'background-image': 'url(IMAGES/Diner_snip2.jpg)'    
        });
        $('#frame2').removeClass('shown').addClass('notShown');
        $('#frame1').removeClass('notShown').addClass('shown');
    } else {
        console.log('You forgot to add the new frames!!');
    }
    $('.shown').slideDown(500);
};


/* -----  Function Calls  ----- */

$(function(){
    
    $('#gotoPH').on('click',function(){
        window.location = "index_It1.html/#myContact";
    });
    
    $('#gotoPH2').on('click',function(){
        window.location = "contactR.html";
    });
    
    $('.myIframe').css('height', $('#box1').height()+'px');
    
    $('#lftArrow').on('click',function(){
        prevFrame();
    });
    
    $('#rtArrow').on('click',function(){
        nextFrame();
    });

});