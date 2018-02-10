/* -----  Variables  ----- */


var pageWidth = ($(window).width());
    console.log('Window width is ' + pageWidth);
var dataBoxes = {
    box4 : 'on',
    box5 : 'on',
    box6 : 'on',
    box14 : 'on',
    box14Slide : 'on',
    box15 : 'on',
    box15Slide : 'on',
    box16 : 'on',
    box16Slide : 'on',
    box17 : 'on',
    box17Slide : 'on',
    box18 : 'on',
    box18Slide : 'on',
    box19 : 'on',
    box19Slide : 'on'
};
var $box14 = $('#box14');
var $box15 = $('#box15');
var $box16 = $('#box16');
var $box17 = $('#box17');
var $box18 = $('#box18');
var $box19 = $('#box19');
var $box14t16 = $('#box14t16');
var $box17t19 = $('#box17t19');

var $b14Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b14Slide"></div>')
var $b14Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b14Title"><p>Ruby Hangman:</p></div>');
var $b14Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b14Link1"><p><a href="https://github.com/ncud4bloc/Hangman/" target="_blank">Source Code</a></p></div>');
var $b14Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b14Desc"><p>Hangman using command line inputs and displaying the stick-figure and letter guess status. Accesses external dictionary file and includes game-save functionality.</p></div>');

var $b15Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b15Slide"></div>')
var $b15Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b15Title"><p>P51 Motorcycle:</p></div>');
var $b15Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link1"><p><a href="https://github.com/ncud4bloc/My_Frame/" target="_blank">Source Code</a></p></div>');
var $b15Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link2"><p><a href="https://ncud4bloc.github.io/My_Frame/HTML/index.html" target="_blank">View in Browser</a></p></div>');
var $b15Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b15Desc"><p>Responsive motorcycle manufacturer homepage using my own grid-based framework. I thought that this company\'s homepage was a good concept poorly executed, and this is my "fix" (the company has since updated its page).</p></div>');

var $b16Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b16Slide"></div>')
var $b16Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b16Title"><p>Mesa Diner:</p></div>');
var $b16Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b16Link1"><p><a href="https://github.com/ncud4bloc/Diner/" target="_blank">Source Code</a></p></div>');
var $b16Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b16Link2"><p><a href="https://ncud4bloc.github.io/Diner/HTML/index.html" target="_blank">View in Browser</a></p></div>');
var $b16Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b16Desc"><p>DOM manipulation using JavaScript & jQuery.</p></div>');

var $b17Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b17Slide"></div>')
var $b17Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b17Title"><p>Image Slider:</p></div>');
var $b17Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b17Link1"><p><a href="https://github.com/ncud4bloc/ImageSlider/" target="_blank">Source Code</a></p></div>');
var $b17Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b17Link2"><p><a href="https://ncud4bloc.github.io/ImageSlider/HTML/index_STD.html" target="_blank">View in Browser</a></p></div>');
var $b17Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b17Desc"><p>Image slider using jQuery DOM manipulation and effects.</p></div>');

var $b18Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b18Slide"></div>')
var $b18Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b18Title"><p>Google Map:</p></div>');
var $b18Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b18Link1"><p><a href="https://github.com/ncud4bloc/GoogleMaps/" target="_blank">Source Code</a></p></div>');
var $b18Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b18Link2"><p><a href="https://ncud4bloc.github.io/GoogleMaps/HTML/indexGM.html" target="_blank">View in Browser</a></p></div>');
var $b18Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b18Desc"><p>A simple responsive website incorporating the Google Maps API. Enter a location in decimal degrees along with a marker message (how about 40.6892, -74.0445, Lady Liberty for starters?)</p></div>');

var $b19Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b19Slide"></div>')
var $b19Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b19Title"><p>Missile Command:</p></div>');
var $b19Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b19Link1"><p><a href="https://github.com/ncud4bloc/MissileCommand/" target="_blank">Source Code</a></p></div>');
var $b19Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b19Link2"><p><a href="https://ncud4bloc.github.io/MissileCommand/HTML/indexMC.html" target="_blank">View in Browser</a></p></div>');
var $b19Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b19Desc"><p>Web-based Missile Command classic arcade game generated using jQuery and Canvas.</p></div>');


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
        dataBoxes.box14Slide == 'on'
        dataBoxes.box15Slide == 'off'
        dataBoxes.box17Slide == 'off'
        dataBoxes.box18Slide == 'off'
        $box14t16.append($b14Slide);
            $b14Slide.append($b14Title);
            $b14Slide.append($b14Link1);
            $b14Slide.append($b14Desc);
        $b14Slide.css({
            'display': 'block'
        });
        $b14Slide.slideUp(0);
        $b14Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box15'){
        console.log("box15 active");
        dataBoxes.box15Slide = 'on';
        dataBoxes.box14Slide == 'off'
        dataBoxes.box16Slide == 'off'
        dataBoxes.box17Slide == 'off'
        dataBoxes.box18Slide == 'off'
        dataBoxes.box19Slide == 'off'
        $box14t16.append($b15Slide);
            $b15Slide.append($b15Title);
            $b15Slide.append($b15Link1);
            $b15Slide.append($b15Link2);
            $b15Slide.append($b15Desc);
        $b15Slide.css({
            'display': 'block'
        });
        $b15Slide.slideUp(0);
        $b15Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box16'){
        console.log("box16 active");
        dataBoxes.box16Slide = 'on';
        dataBoxes.box15Slide == 'off'
        dataBoxes.box18Slide == 'off'
        dataBoxes.box19Slide == 'off'
        $box14t16.append($b16Slide);
            $b16Slide.append($b16Title);
            $b16Slide.append($b16Link1);
            $b16Slide.append($b16Link2);
            $b16Slide.append($b16Desc);
        $b16Slide.css({
            'display': 'block'
        });
        $b16Slide.slideUp(0);
        $b16Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box17'){
        console.log("box17 active");
        dataBoxes.box17Slide = 'on';
        dataBoxes.box14Slide == 'off'
        dataBoxes.box15Slide == 'off'
        dataBoxes.box18Slide == 'off'
        $box17t19.append($b17Slide);
            $b17Slide.append($b17Title);
            $b17Slide.append($b17Link1);
            $b17Slide.append($b17Link2);
            $b17Slide.append($b17Desc);
        $b17Slide.css({
            'display': 'block'
        });
        $b17Slide.slideUp(0);
        $b17Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box18'){
        console.log("box18 active");
        dataBoxes.box18Slide = 'on';
        dataBoxes.box14Slide == 'off'
        dataBoxes.box15Slide == 'off'
        dataBoxes.box16Slide == 'off'
        dataBoxes.box17Slide == 'off'
        dataBoxes.box19Slide == 'off'
        $box17t19.append($b18Slide);
            $b18Slide.append($b18Title);
            $b18Slide.append($b18Link1);
            $b18Slide.append($b18Link2);
            $b18Slide.append($b18Desc);
        $b18Slide.css({
            'display': 'block'
        });
        $b18Slide.slideUp(0);
        $b18Slide.slideDown(800);
        
    } else if ($('.active').attr('id') == 'box19'){
        console.log("box19 active");
        dataBoxes.box19Slide = 'on';
        dataBoxes.box15Slide == 'off'
        dataBoxes.box16Slide == 'off'
        dataBoxes.box18Slide == 'off'
        $box17t19.append($b19Slide);
            $b19Slide.append($b19Title);
            $b19Slide.append($b19Link1);
            $b19Slide.append($b19Link2);
            $b19Slide.append($b19Desc);
        $b19Slide.css({
            'display': 'block'
        });
        $b19Slide.slideUp(0);
        $b19Slide.slideDown(800);
    }
};

var switchToData = function(){
    console.log("Going to dataBox");
};

var inDataBox = function(){
    console.log("In the slidedown dataBox");
};

var unShowInfo = function(){
    if($('.active').attr('id') == 'box4'){
        console.log("box4 inactive");
    } else if ($('.active').attr('id') == 'box5'){
        console.log("box5 inactive");
    } else if ($('.active').attr('id') == 'box6'){
        console.log("box6 inactive");
        
    } else if (dataBoxes.box14Slide === 'off'){
        console.log("box14 inactive");
        $b14Slide.slideUp(0);
        $b14Slide.css({
            'display': 'none'
        });
        
    } else if (dataBoxes.box15Slide === 'off'){
        console.log("box15 inactive");
        $b15Slide.slideUp(0);
        $b15Slide.css({
            'display': 'none'
        });
         
    } else if (dataBoxes.box16Slide === 'off'){
        console.log("box16 inactive");
        $b16Slide.slideUp(0);
        $b16Slide.css({
            'display': 'none'
        });
        
    } else if (dataBoxes.box17Slide === 'off'){
        console.log("box17 inactive");
        $b17Slide.slideUp(0);
        $b17Slide.css({
            'display': 'none'
        });
        
    } else if (dataBoxes.box18Slide === 'off'){
        console.log("box18 inactive");
        $b18Slide.slideUp(0);
        $b18Slide.css({
            'display': 'none'
        });
        
    } else if (dataBoxes.box19Slide === 'off'){
        console.log("box19 inactive");
        $b19Slide.slideUp(0);
        $b19Slide.css({
            'display': 'none'
        });
    }
    $(this).removeClass('active').addClass('inActive'); //NCC
};



/* -----  Function Calls  ----- */

$(function(){
    
    $('#box4').hover(showInfo,unShowInfo);
    $('#box5').hover(showInfo,unShowInfo);
    $('#box6').hover(showInfo,unShowInfo);
    
    $('#box14').hover(showInfo,switchToData);
    $('#box15').hover(showInfo,switchToData);
    $('#box16').hover(showInfo,switchToData);
    $('#box17').hover(showInfo,switchToData);
    $('#box18').hover(showInfo,switchToData);
    $('#box19').hover(showInfo,switchToData);
    
    $b14Slide.hover(inDataBox,unShowInfo);
    $b15Slide.hover(inDataBox,unShowInfo);
    $b16Slide.hover(inDataBox,unShowInfo);
    $b17Slide.hover(inDataBox,unShowInfo);
    $b18Slide.hover(inDataBox,unShowInfo);
    $b19Slide.hover(inDataBox,unShowInfo);
    
});