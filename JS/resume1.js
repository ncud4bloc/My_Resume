var $content = $('#content');
var $title = $('<div id="ncc"><h2>Neil C Cudden</h2></div>');
var $linkBox = $('<div id="linkBox"></div>');
var $gotoFB = $('<div class="goto" id="gotoFB"></div>');
var $gotoLI = $('<div class="goto" id="gotoLI"></div>');
var $gotoTW = $('<div class="goto" id="gotoTW"></div>');
var $gotoGH = $('<div class="goto" id="gotoGH"></div>');
var $gotoEM = $('<a class="goto" id="gotoEM" href="mailto:ncudden@sbcglobal.net"></a>');
/*var $scrollButtons = $('<div id="scrollButtons"></div>');
var $button1 = $('<div class="button" id="button1"></div>');
var $button2 = $('<div class="button" id="button2"></div>');
var $button3 = $('<div class="button" id="button3"></div>');
var $button4 = $('<div class="button" id="button4"></div>');
var $button5 = $('<div class="button" id="button5"></div>');
var $button6 = $('<div class="button" id="button6"></div>');
var $gameBoard = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="gameBoard"></div>');*/

$content.append($title);
$content.append($linkBox);
    $linkBox.append($gotoFB);
    $linkBox.append($gotoLI);
    $linkBox.append($gotoTW);
    $linkBox.append($gotoGH);
    $linkBox.append($gotoEM);
/*$content.append($scrollButtons);
$scrollButtons.append($button1);
$scrollButtons.append($button2);
$scrollButtons.append($button3);
$scrollButtons.append($button4);
$scrollButtons.append($button5);*/

/* -----  CSS  ----- */

$('body').css({
    'width': '100%',
    'background-color': '#7b7b81'
});

$content.css({
    'width': '100%',
    'height': '1424px',
    'background-image': 'url(../IMAGES/issa3C.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'border': '3px ridge #548ec6'
});

$title.css({
    /*'position': 'relative',*/
    'width': '40%',
    'margin': '-35px 10px 10px 0',
    'float': 'left',
    'padding-top': '40px',
    'padding-left': '100px',
    'text-align': 'left',
    'font-family': '"Poiret One", cursive',
    'color': '#c41c1c',
    'font-size': '36px',
    'font-weight': '900'
});

$linkBox.css({
    'position': 'relative',
    'float': 'left',
    'width': '265px',
    'height': '60px',
    'margin': '55px 50px 10px 50px',
    'background-color': '#fff',
    'border-radius': '10px',
    'border': '2px solid #000'
});

$('.goto').css({
    /*'display': 'inline-block',*/
    'position': 'relative',
    'float': 'left',
    'width': '40px',
    'height': '40px',
    'margin': '9px 0 9px 10px',
    'border-radius': '8px',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'cursor': 'pointer',
    'background-size': 'cover'
});

$('#gotoFB').css({
    'background-image': 'url(../IMAGES/fb_gray_icon.png)'
});

$('#gotoLI').css({
    'background-image': 'url(../IMAGES/li_gray_icon.png)'
});

$('#gotoTW').css({
    'background-image': 'url(../IMAGES/tw_gray_icon.png)'
});

$('#gotoGH').css({
    'background-image': 'url(../IMAGES/gh_gray_icon.jpg)'
});

$('#gotoEM').css({
    'background-image': 'url(../IMAGES/icon_emailC.png)'
});

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

$button2.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button3.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button4.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});

$button5.css({
    'position': 'relative',
    'margin-top': '17px',
    'margin-left': '34px',
    'margin-right': '34px',
    'width': '10px',
    'height': '10px',
    'background-color': '#fff',
    'border': '2px solid #7b7b81',
    'border-radius': '5px',
    'float': 'left'
});
*/

/* -----  Functions  ----- */

var moveRt =function(){
    setButtonCol();
    if($('.picture').attr('id') == 'goto1'){
        $goto.removeAttr('id');
        $goto.attr('id','goto2');
        $('#goto2').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)'
        });
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'goto2'){
        $goto.removeAttr('id');
        $goto.attr('id','goto3');
        $('#goto3').css({
            'background-image': 'url(../IMAGES/B29.jpg)'
        });
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'goto3'){
        $goto.removeAttr('id');
        $goto.attr('id','goto4');
        $('#goto4').css({
            'background-image': 'url(../IMAGES/F18A.jpg)'
        });
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'goto4'){
        $goto.removeAttr('id');
        $goto.attr('id','goto5');
        $('#goto5').css({
            'background-image': 'url(../IMAGES/V22.jpg)'
        });
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    } else {
        $goto.removeAttr('id');
        $goto.attr('id','goto1');
        $('#goto1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('#button1').css({
            'background-color': '#7b7b81'
        });
    }
    /*$('.picture').hide("slide",{direction: "right"},1000);*/
    /*$('.picture').show("slide",{direction: "left"},1000);*/
    $('.picture').hide("fade",1);
    $('.picture').show("fade",1000);
};

var moveLft =function(){
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
    } else if ($('.picture').attr('id') == 'goto4'){
        $goto.removeAttr('id');
        $goto.attr('id','goto3');
        $('#goto3').css({
            'background-image': 'url(../IMAGES/B29.jpg)'
        });
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'goto3'){
        $goto.removeAttr('id');
        $goto.attr('id','goto2');
        $('#goto2').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)'
        });
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'goto2'){
        $goto.removeAttr('id');
        $goto.attr('id','goto1');
        $('#goto1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('#button1').css({
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
    /*$('.picture').hide("slide",{direction: "left"},1000);
    $('.picture').show("slide",{direction: "right"},1000);*/
    $('.picture').hide("fade",1);
    $('.picture').show("fade",1000);
};

var setButtonCol =function(){
    $('.button').css({
            'background-color': '#fff'
        });
};

var scrollEm = function(){
    setInterval(moveRt,10000);
};

/* -----  Function Calls  ----- */

$(function(){
    
    
    $('#gotoFB').on('click',function(){
        /*window.open("https://www.facebook.com/neil.cudden");*/
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