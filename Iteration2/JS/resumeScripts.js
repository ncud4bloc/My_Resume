/* -----  Variables  ----- */


var pageWidth = ($(window).width());
    console.log('Window width is ' + pageWidth);

var $box14 = $('#box14');
var $box15 = $('#box15');
var $box16 = $('#box16');
var $box17 = $('#box17');
var $box18 = $('#box18');
var $box19 = $('#box19');


//var $b14Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b14Title"><p>Ruby Hangman:</p></div>');

var $b15Slide = $('<div id="b15Slide"></div>')
var $b15Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b15Title"><p>P51 Motorcycle:</p></div>');
var $b15Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link1"><p><a href="https://github.com/ncud4bloc/My_Frame/" target="_blank">Source Code</a></p></div>');
var $b15Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link2"><p><a href="https://ncud4bloc.github.io/My_Frame/HTML/index.html" target="_blank">View in Browser</a></p></div>');
var $b15Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b15Desc"><p>Responsive motorcycle manufacturer homepage using my own grid-based framework. I thought that this company\'s homepage was a good concept poorly executed, and this is my "fix" (the company has since updated its page).</p></div>');


/*var $b16Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b16Title"><p>Mesa Diner:</p></div>');
var $b17Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b17Title"><p>Air Images:</p></div>');
var $b18Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b18Title"><p>Google Maps:</p></div>');
var $b19Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b19Title"><p>Missile Command:</p></div>');*/


/* -----  Functions  ----- */


var showInfo = function(){
    $(this).removeClass('inActive').addClass('active');
    if($('.active').attr('id') == 'box4'){
        console.log("box4 active");
    } else if ($('.active').attr('id') == 'box5'){
        console.log("box5 active");
    } else if ($('.active').attr('id') == 'box6'){
        console.log("box6 active");
    } else if ($('.active').attr('id') == 'box14'){
        console.log("box14 active");
        
        
    } else if ($('.active').attr('id') == 'box15'){
        console.log("box15 active");
        $box16.append($b15Slide);
            $b15Slide.append($b15Title);
            $b15Slide.append($b15Link1);
            $b15Slide.append($b15Link2);
            $b15Slide.append($b15Desc);
        
        $('.dataPage').css({
            'display': 'block'
        });
        $b15Slide.slideUp(0);
        $b15Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box16'){
        console.log("box16 active");
    } else if ($('.active').attr('id') == 'box17'){
        console.log("box17 active");
    } else if ($('.active').attr('id') == 'box18'){
        console.log("box18 active");
    } else if ($('.active').attr('id') == 'box19'){
        console.log("box19 active");
    }
};

var unShowInfo = function(){
    if($('.active').attr('id') == 'box4'){
        console.log("box4 inactive");
    } else if ($('.active').attr('id') == 'box5'){
        console.log("box5 inactive");
    } else if ($('.active').attr('id') == 'box6'){
        console.log("box6 inactive");
    } else if ($('.active').attr('id') == 'box14'){
        console.log("box14 inactive");
        
        
    } else if ($('.active').attr('id') == 'box15'){
        console.log("box15 inactive");
        
        $b15Slide.slideUp(500);
        /*
        $('.dataPage').css({
            'display': 'none'
        });
        */
        
    } else if ($('.active').attr('id') == 'box16'){
        console.log("box16 inactive");
    } else if ($('.active').attr('id') == 'box17'){
        console.log("box17 inactive");
    } else if ($('.active').attr('id') == 'box18'){
        console.log("box18 inactive");
    } else if ($('.active').attr('id') == 'box19'){
        console.log("box19 inactive");
    }
    $(this).removeClass('active').addClass('inActive'); //NCC
};



/* -----  Function Calls  ----- */

$(function(){
    
    $('#box4').hover(showInfo,unShowInfo);
    $('#box5').hover(showInfo,unShowInfo);
    $('#box6').hover(showInfo,unShowInfo);
    
    $('#box14').hover(showInfo,unShowInfo);
    $('#box15').hover(showInfo,unShowInfo);
    $('#box16').hover(showInfo,unShowInfo);
    $('#box17').hover(showInfo,unShowInfo);
    $('#box18').hover(showInfo,unShowInfo);
    $('#box19').hover(showInfo,unShowInfo);
    
});