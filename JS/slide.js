var $content = $('#content');
var $title = $('<div id="logo"><h2>Airplane Image Carousel</h2></div>');
var $photoBox = $('<div id="photoBox"></div>');
var $photo = $('<div class="picture photoClass canSee" id="photo1"></div>');
var $arrows = $('<div id="arrows"></div>');
var $lftArrow = $('<div id="lftArrow"></div>');
var $rtArrow = $('<div id="rtArrow"></div>');
var $scrollButtons = $('<div id="scrollButtons"></div>');
var $button1 = $('<div class="button" id="button1"></div>');
var $button2 = $('<div class="button" id="button2"></div>');
var $button3 = $('<div class="button" id="button3"></div>');
var $button4 = $('<div class="button" id="button4"></div>');
var $button5 = $('<div class="button" id="button5"></div>');
var $button6 = $('<div class="button" id="button6"></div>');

$content.append($title);
$content.append($photoBox);
$photoBox.append($photo);
$photo.append($arrows);
$arrows.append($lftArrow);
$arrows.append($rtArrow);

$content.append($scrollButtons);
$scrollButtons.append($button1);
$scrollButtons.append($button2);
$scrollButtons.append($button3);
$scrollButtons.append($button4);
$scrollButtons.append($button5);

/* -----  CSS  ----- */

$content.css({
    'width': '100%',
    'height': '680px',
    'background-image': 'url(../IMAGES/airport.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'border': '3px solid #454040'
});

$title.css({
    'position': 'relative',
    'width': '60%',
    'margin': '-35px auto 10px auto',
    'padding-top': '20px',
    'text-align': 'center',
    'font-family': '"Poiret One", cursive',
    'font-size': '28px',
    'font-weight': '900'
});

$photoBox.css({
    'position': 'relative',
    'width': '610px',
    'height': '460px',
    'margin': '20px auto 10px auto',
    'border-radius': '10px',
    'border': '5px solid #7b7b81'
});

$('.canSee').css({
    'display': 'inline-block'
});

$('.noSee').css({
    'display': 'none'
});

$('.photoClass').css({
    /*'display': 'inline-block',*/
    'position': 'relative',
    'width': '600px',
    'height': '450px',
    'border-radius': '5px',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$arrows.css({
    'position': 'relative',
    'width': '100%',
    'height': '30px',
    'margin-top': '215px'
});

$lftArrow.css({
    'position': 'relative',
    'width': '30px',
    'height': '30px',
    'margin-left': '10px',
    'background-image': 'url(../IMAGES/lftArrow.png)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'float': 'left'
});

$rtArrow.css({
    'position': 'relative',
    'width': '30px',
    'height': '30px',
    'margin-right': '10px',
    'background-image': 'url(../IMAGES/rtArrow.png)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'float': 'right'
});

$('#photo1').css({
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

/* -----  Functions  ----- */

var moveRt =function(){
    setButtonCol();
    if($('.picture').attr('id') == 'photo1'){
        $photo.removeAttr('id');
        $photo.attr('id','photo2');
        $('#photo2').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)'
        });
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo2'){
        $photo.removeAttr('id');
        $photo.attr('id','photo3');
        $('#photo3').css({
            'background-image': 'url(../IMAGES/B29.jpg)'
        });
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo3'){
        $photo.removeAttr('id');
        $photo.attr('id','photo4');
        $('#photo4').css({
            'background-image': 'url(../IMAGES/F18A.jpg)'
        });
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo4'){
        $photo.removeAttr('id');
        $photo.attr('id','photo5');
        $('#photo5').css({
            'background-image': 'url(../IMAGES/V22.jpg)'
        });
        $('#button5').css({
            'background-color': '#7b7b81'
        });
    } else {
        $photo.removeAttr('id');
        $photo.attr('id','photo1');
        $('#photo1').css({
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
    if($('.picture').attr('id') == 'photo5'){
        $photo.removeAttr('id');
        $photo.attr('id','photo4');
        $('#photo4').css({
            'background-image': 'url(../IMAGES/F18A.jpg)'
        });
        $('#button4').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo4'){
        $photo.removeAttr('id');
        $photo.attr('id','photo3');
        $('#photo3').css({
            'background-image': 'url(../IMAGES/B29.jpg)'
        });
        $('#button3').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo3'){
        $photo.removeAttr('id');
        $photo.attr('id','photo2');
        $('#photo2').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)'
        });
        $('#button2').css({
            'background-color': '#7b7b81'
        });
    } else if ($('.picture').attr('id') == 'photo2'){
        $photo.removeAttr('id');
        $photo.attr('id','photo1');
        $('#photo1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('#button1').css({
            'background-color': '#7b7b81'
        });
    } else {
        $photo.removeAttr('id');
        $photo.attr('id','photo5');
        $('#photo5').css({
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
    
    scrollEm();
   
    $('#rtArrow').on('click',function(){
        moveRt(); 
    });
    
    $('#lftArrow').on('click',function(){
        moveLft(); 
    });
    
    $('#button1').on('click',function(){
        setButtonCol();
        $('#button1').css({
            'background-color': '#7b7b81'
        });
        $photo.removeClass('canSee').addClass('noSee');
        $photo.removeAttr('id');
        $photo.attr('id','photo1');
        $('#photo1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $photo.removeClass('noSee').addClass('canSee');
    });
    
    $('#button2').on('click',function(){
        setButtonCol();
        $('#button2').css({
            'background-color': '#7b7b81'
        });
        $photo.removeClass('canSee').addClass('noSee');
        $photo.removeAttr('id');
        $photo.attr('id','photo2');
        $('#photo2').css({
            'background-image': 'url(../IMAGES/supercobra.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $photo.removeClass('noSee').addClass('canSee');
    });
    
    $('#button3').on('click',function(){
        setButtonCol();
        $('#button3').css({
            'background-color': '#7b7b81'
        });
        $photo.removeClass('canSee').addClass('noSee');
        $photo.removeAttr('id');
        $photo.attr('id','photo3');
        $('#photo3').css({
            'background-image': 'url(../IMAGES/B29.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $photo.removeClass('noSee').addClass('canSee');
    });
    
    $('#button4').on('click',function(){
        setButtonCol();
        $('#button4').css({
            'background-color': '#7b7b81'
        });
        $photo.removeClass('canSee').addClass('noSee');
        $photo.removeAttr('id');
        $photo.attr('id','photo4');
        $('#photo4').css({
            'background-image': 'url(../IMAGES/F18A.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $photo.removeClass('noSee').addClass('canSee');
    });
    
    $('#button5').on('click',function(){
        setButtonCol();
        $('#button5').css({
            'background-color': '#7b7b81'
        });
        $photo.removeClass('canSee').addClass('noSee');
        $photo.removeAttr('id');
        $photo.attr('id','photo5');
        $('#photo5').css({
            'background-image': 'url(../IMAGES/V22.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $photo.removeClass('noSee').addClass('canSee');
    });
    
});