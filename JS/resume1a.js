

/*
$('#goto1').css({
    'background-image': 'url(../IMAGES/F5E.jpg)'
});

$scrollButtons.css({
    'position': 'relative',
    'margin': '-5px auto 10px auto',
    'width': '400px',
    'height': '50px',
    'background-color': '#3c3c41',
    'border': '3px solid #7b7b81',
    'border-radius': '25px'
});

$button1.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#7b7b81',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

*/

/* -----  Functions  ----- */



/*var moveLft =function(){
    setButtonCol();
    if($('.picture').attr('id') == 'goto5'){
        $goto.removeAttr('id');
        $goto.attr('id','goto4');
        $('#goto4').css({
            'background-image': 'url(../IMAGES/F18A.jpg)'
        });
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    
    } else {
        $goto.removeAttr('id');
        $goto.attr('id','goto5');
        $('#goto5').css({
            'background-image': 'url(../IMAGES/V22.jpg)'
        });
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    }
   
    $('.picture').hide("fade",1);
    $('.picture').show("fade",1000);
};

var setButtonCol =function(){
    $('.button').css({
            'background-color': '#fff'
        });
};*/



/* -----  Function Calls  ----- */

$(function(){
    
    $('#gotoFB').on('click',function(){
        window.location = "https://www.facebook.com/neil.cudden/";
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
    /*$('.myIframe').css('height', $(window).height()+'px');*/

    /*
    $('#button1').on('click',function(){
        setButtonCol();
        $('#button1').css({
            'background-color': '#7b7b81'
        });
        $goto.removeClass('canSee').addClass('noSee');
        $goto.removeAttr('id');
        $goto.attr('id','goto1');
        $('#goto1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $goto.removeClass('noSee').addClass('canSee');
    });
    */
    
});