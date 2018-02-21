/* -----  Variables  ----- */


var pageWidth = ($(window).width());
    console.log('Window width is ' + pageWidth);
var openBox;
var dataBoxes = {
    box4 : 'on',
    box4Slide : 'off',
    box5 : 'on',
    box5Slide : 'off',
    box6 : 'on',
    box6Slide : 'off',
    box14 : 'on',
    box14Slide : 'off',
    box15 : 'on',
    box15Slide : 'off',
    box16 : 'on',
    box16Slide : 'off',
    box17 : 'on',
    box17Slide : 'off',
    box18 : 'on',
    box18Slide : 'off',
    box19 : 'on',
    box19Slide : 'off'
};
var $box4 = $('#box4');
var $box5 = $('#box5');
var $box6 = $('#box6');
var $box14 = $('#box14');
var $box15 = $('#box15');
var $box16 = $('#box16');
var $box17 = $('#box17');
var $box18 = $('#box18');
var $box19 = $('#box19');
var $box14ex = $('#box14ex');
var $box15ex = $('#box15ex');
var $box16ex = $('#box16ex');
var $box14t16 = $('#box14t16');
var $box17ex = $('#box17ex');
var $box18ex = $('#box18ex');
var $box19ex = $('#box19ex');
var $box17t19 = $('#box17t19');

var $b4Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Slide"></div>');
var $b4Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk1"><p><a href="../HTML/page2.html#mySkills" target="_blank">Developer Skillset</a></p></div>');
var $b4Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk2"><p><a href="../HTML/page2.html#myEducation" target="_blank">Education</a></p></div>');
var $b4Lynk3 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk3"><p><a href="../HTML/page2.html#myResume" target="_blank">Professional Background</a></p></div>');

var $b5Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Slide"></div>');
var $b5Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk1"><p><a href="../HTML/page2.html#myPersonalBackground" target="_blank">Background</a></p></div>');
var $b5Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk2"><p><a href="../HTML/page2.html#myFamily" target="_blank">Family</a></p></div>');
var $b5Lynk3 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk3"><p><a href="../HTML/page2.html#myHobbies" target="_blank">Hobbies</a></p></div>');

var $b6Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Slide"></div>');
var $b6Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Lynk1"><p><a href="../HTML/page2.html#myPhone" target="_blank">Phone</a></p></div>');
var $b6Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Lynk2"><p><a href="../HTML/page2.html#myEmail" target="_blank">Email</a></p></div>');
var $b6Lynk3 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Lynk3"><p><a href="../HTML/page2.html#myAddress" target="_blank">Address</a></p></div>');

var $b14Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b14Slide"></div>');
var $b14Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b14Title"><p>Ruby Hangman:</p></div>');
var $b14Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b14Link1"><p><a href="https://github.com/ncud4bloc/Hangman/" target="_blank">Source Code</a></p></div>');
var $b14Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b14Desc"><p>Hangman using command line inputs and displaying the stick-figure and letter guess status. Accesses external dictionary file and includes game-save functionality.</p></div>');

var $b15Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b15Slide"></div>');
var $b15Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b15Title"><p>P51 Motorcycle:</p></div>');
var $b15Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link1"><p><a href="https://github.com/ncud4bloc/My_Frame/" target="_blank">Source Code</a></p></div>');
var $b15Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b15Link2"><p><a href="https://ncud4bloc.github.io/My_Frame/HTML/index.html" target="_blank">View in Browser</a></p></div>');
var $b15Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b15Desc"><p>Responsive motorcycle manufacturer homepage using my own grid-based framework. I thought that this company\'s homepage was a good concept poorly executed, and this is my "fix" (the company has since updated its page).</p></div>');

var $b16Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b16Slide"></div>');
var $b16Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b16Title"><p>Mesa Diner:</p></div>');
var $b16Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b16Link1"><p><a href="https://github.com/ncud4bloc/Diner/" target="_blank">Source Code</a></p></div>');
var $b16Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b16Link2"><p><a href="https://ncud4bloc.github.io/Diner/HTML/index.html" target="_blank">View in Browser</a></p></div>');
var $b16Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b16Desc"><p>DOM manipulation using JavaScript & jQuery.</p></div>');

var $b17Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b17Slide"></div>');
var $b17Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b17Title"><p>Image Slider:</p></div>');
var $b17Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b17Link1"><p><a href="https://github.com/ncud4bloc/ImageSlider/" target="_blank">Source Code</a></p></div>');
var $b17Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b17Link2"><p><a href="https://ncud4bloc.github.io/ImageSlider/HTML/index_STD.html" target="_blank">View in Browser</a></p></div>');
var $b17Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b17Desc"><p>Image slider using jQuery DOM manipulation and effects.</p></div>');

var $b18Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b18Slide"></div>');
var $b18Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b18Title"><p>Google Map:</p></div>');
var $b18Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b18Link1"><p><a href="https://github.com/ncud4bloc/GoogleMaps/" target="_blank">Source Code</a></p></div>');
var $b18Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b18Link2"><p><a href="https://ncud4bloc.github.io/GoogleMaps/HTML/indexGM.html" target="_blank">View in Browser</a></p></div>');
var $b18Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b18Desc"><p>A simple responsive website incorporating the Google Maps API. Enter a location in decimal degrees along with a marker message (how about 40.6892, -74.0445, Lady Liberty for starters?)</p></div>');

var $b19Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b19Slide"></div>');
var $b19Title = $('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 dataPage" id="b19Title"><p>Missile Command:</p></div>');
var $b19Link1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b19Link1"><p><a href="https://github.com/ncud4bloc/MissileCommand/" target="_blank">Source Code</a></p></div>');
var $b19Link2 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 dataPage" id="b19Link2"><p><a href="https://ncud4bloc.github.io/MissileCommand/HTML/indexMC.html" target="_blank">View in Browser</a></p></div>');
var $b19Desc = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataPage" id="b19Desc"><p>Web-based Missile Command classic arcade game generated using jQuery and Canvas.</p></div>');


/* -----  Functions  ----- */


var showInfo = function(){
    $(this).removeClass('inActive').addClass('active');
    if(($('.active').attr('id') == 'box4') && (openBox != 4)){
        console.log("box4 active");
        openBox = 4;
        
        $box4.css({
            'background-color': '#ddd',
        });
        
        dataBoxes.box4Slide = 'on';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box18Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $b4Slide.css({
              'position': 'absolute',
              'width': '100%',
              'left': '2px'
          });
          $b5Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
          $b6Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
            
	    } else if ($(window).width() <= 845){
          $b4Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
          $box5.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
          $box6.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $b4Slide.css({
                'position': 'absolute',
                'width': '100%',
                'left': '2px'
              });
              $b5Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
              $b6Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
	       } else if ($(window).width() <= 845){
              $b4Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
          $box5.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
            $box6.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
           }	
        });
        
        $box4.append($b4Slide);
            $b4Slide.append($b4Lynk1);
            $b4Slide.append($b4Lynk2);
            $b4Slide.append($b4Lynk3);
        
        $b5Slide.slideUp(0);
        $box5.css({
            'background-color': '#04181c'
            /*'padding-right': '0px'*/
        });
        $b5Slide.css({
            'display': 'none'
        });
        
        $b6Slide.slideUp(0);
        $box6.css({
            'background-color': '#04181c'
            /*'padding-right': '0px'*/
        });
        $b6Slide.css({
            'display': 'none'
        });
        
        $b4Slide.css({
            'box-sizing': 'content-box',
            'border-bottom-left-radius': '5px',
            'border-bottom-right-radius': '5px',
            'background-color': '#ddd',
            'margin-left': '-4px',
            'height': 'auto',
            'z-index': '10',
            'padding-right': '4px'
        });
        
        $b4Lynk2.css({
            'margin-top': '-15px'
        });
        
        $b4Lynk3.css({
            'margin-top': '-15px',
            'margin-bottom': '10px'
        });
        
        $b4Slide.slideUp(0);
        $b4Slide.slideDown(500);
        
        
        
    } else if (($('.active').attr('id') == 'box5') && (openBox != 5)){
        console.log("box5 active");
        openBox = 5;
        
        $box5.css({
            'background-color': '#ddd',
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'on';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box18Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $b4Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
          $b5Slide.css({
              'position': 'absolute',
              'width': '100%',
              'left': '2px'
          });
          $b6Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
            
	    } else if ($(window).width() <= 845){
          $b5Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
          $box5.css({
              'text-align': 'center',
              'padding-right': '0px'
          });
            
          $box6.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $b4Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
              $b5Slide.css({
                'position': 'absolute',
                'width': '100%',
                'left': '2px'
              });
              $b6Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
	       } else if ($(window).width() <= 845){
              $b5Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
            $box5.css({
              'text-align': 'center'
            });   
               
            $box6.css({
              'text-align': 'right',
              'padding-right': '30px'
            });
           }	
        });
        
        $box5.append($b5Slide);
            $b5Slide.append($b5Lynk1);
            $b5Slide.append($b5Lynk2);
            $b5Slide.append($b5Lynk3);
        
        $b4Slide.slideUp(0);
        $box4.css({
            'background-color': '#04181c',
            'padding-right': '0px'
        });
        $b4Slide.css({
            'display': 'none'
        });
        
        $b6Slide.slideUp(0);
        $box6.css({
            'background-color': '#04181c'
            /*'padding-right': '0px'*/
        });
        $b6Slide.css({
            'display': 'none'
        });
        
        $b5Slide.css({
            'box-sizing': 'content-box',
            'border-bottom-left-radius': '5px',
            'border-bottom-right-radius': '5px',
            'background-color': '#ddd',
            'margin-left': '-4px',
            'height': 'auto',
            'z-index': '10',
            'padding-right': '4px'
        });
        
        $b5Lynk2.css({
            'margin-top': '-15px'
        });
        
        $b5Lynk3.css({
            'margin-top': '-15px',
            'margin-bottom': '10px'
        });
        
        $b5Slide.slideUp(0);
        $b5Slide.slideDown(500);
        
        
    } else if (($('.active').attr('id') == 'box6') && (openBox != 6)){
        console.log("box6 active");
        openBox = 6;
        
        $box6.css({
            'background-color': '#ddd',
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'on';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box18Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $b4Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
          $b5Slide.css({
              'position': 'absolute',
              'width': '100%'
          });
          $b6Slide.css({
              'position': 'absolute',
              'left': '2px',
              'width': '100%'
          });
            
	    } else if ($(window).width() <= 845){
          $b6Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
          $box5.css({
              'text-align': 'center'
          });
            
          $box6.css({
              'text-align': 'center'
          });
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $b4Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
              $b5Slide.css({
                'position': 'absolute',
                  'width': '100%'
              });
              $b6Slide.css({
                'position': 'absolute',
                'width': '100%',
                'left': '2px'
              });
	       } else if ($(window).width() <= 845){
              $b6Slide.css({
              'position': 'absolute',
              'box-sizing': 'content-box',
              'width': '60%',
              'left': '2px'
          });
            
            $box6.css({
              'text-align': 'center'
            });
           }	
        });
        
        $box6.append($b6Slide);
            $b6Slide.append($b6Lynk1);
            $b6Slide.append($b6Lynk2);
            $b6Slide.append($b6Lynk3);
        
        $b4Slide.slideUp(0);
        $box4.css({
            'background-color': '#04181c',
            'padding-right': '0px'
        });
        $b4Slide.css({
            'display': 'none'
        });
        
        $b5Slide.slideUp(0);
        $box5.css({
            'background-color': '#04181c',
            'padding-right': '0px'
        });
        $b5Slide.css({
            'display': 'none'
        });
        
        $b6Slide.css({
            'box-sizing': 'content-box',
            'border-bottom-left-radius': '5px',
            'border-bottom-right-radius': '5px',
            'background-color': '#ddd',
            'margin-left': '-4px',
            'height': 'auto',
            'z-index': '10',
            'padding-right': '4px'
        });
        
        $b6Lynk2.css({
            'margin-top': '-15px'
        });
        
        $b6Lynk3.css({
            'margin-top': '-15px',
            'margin-bottom': '10px'
        });
        
        $b6Slide.slideUp(0);
        $b6Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box14') && (openBox != 14)){
        console.log("box14 active");
        openBox = 14;
        
        $box14.css({
            'border-bottom': '1px solid #e36a12',
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'on';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box18Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $box14t16.append($b14Slide);
	    } else if ($(window).width() <= 845){
          $box14ex.append($b14Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box14t16.append($b14Slide);
	       } else if ($(window).width() <= 845){
              $box14ex.append($b14Slide);
           }	
        });
        
            $b14Slide.append($b14Title);
            $b14Slide.append($b14Link1);
            $b14Slide.append($b14Desc);
        
        $box4.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b4Slide.slideUp(0);
    
        $b4Slide.css({
            'display': 'none'
        });
        $box5.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b5Slide.slideUp(0);
    
        $b5Slide.css({
            'display': 'none'
        });
        $box6.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b6Slide.slideUp(0);
    
        $b6Slide.css({
            'display': 'none'
        });
        
        $b15Slide.slideUp(0);
        $box15.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b15Slide.css({
            'display': 'none'
        });
        $b16Slide.slideUp(0);
        $box16.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b16Slide.css({
            'display': 'none'
        });
        $b17Slide.slideUp(0);
        $box17.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b17Slide.css({
            'display': 'none'
        });
        $b18Slide.slideUp(0);
        $box18.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b18Slide.css({
            'display': 'none'
        });
        $b19Slide.slideUp(0);
        $box19.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b19Slide.css({
            'display': 'none'
        });
        
        $b14Slide.css({
            'margin-top': '-1px',
            'border-bottom': '2px',
            'border-left': '2px solid #737e80',
            'display': 'block'
        });
        
        $b14Slide.slideUp(0);
        $b14Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box15') && (openBox != 15)){
        console.log("box15 active");
        openBox = 15;
    
        $box15.css({
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'on';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $box14t16.append($b15Slide);
	    } else if ($(window).width() <= 845){
          $box15ex.append($b15Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box14t16.append($b15Slide);
	       } else if ($(window).width() <= 845){
              $box15ex.append($b15Slide);
           }	
        });
        
            $b15Slide.append($b15Title);
            $b15Slide.append($b15Link1);
            $b15Slide.append($b15Link2);
            $b15Slide.append($b15Desc);
        
        $box4.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b4Slide.slideUp(0);
    
        $b4Slide.css({
            'display': 'none'
        });
        $box5.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b5Slide.slideUp(0);
    
        $b5Slide.css({
            'display': 'none'
        });
        $box6.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b6Slide.slideUp(0);
    
        $b6Slide.css({
            'display': 'none'
        });
        
        $b14Slide.slideUp(0);
        $box14.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b14Slide.css({
            'display': 'none'
        });
        $b16Slide.slideUp(0);
        $box16.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b16Slide.css({
            'display': 'none'
        });
        $b17Slide.slideUp(0);
        $box17.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b17Slide.css({
            'display': 'none'
        });
        $b18Slide.slideUp(0);
        $box18.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b18Slide.css({
            'display': 'none'
        });
        $b19Slide.slideUp(0);
        $box19.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b19Slide.css({
            'display': 'none'
        });
        
        $b15Slide.css({
            'display': 'block',
            'border-left': '2px solid #737e80'
        });
        
        $b15Slide.slideUp(0);
        $b15Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box16') && (openBox != 16)){
        console.log("box16 active");
        openBox = 16;
        
        $box16.css({
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'on';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $box14t16.append($b16Slide);
	    } else if ($(window).width() <= 845){
          $box16ex.append($b16Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box14t16.append($b16Slide);
	       } else if ($(window).width() <= 845){
              $box16ex.append($b16Slide);
           }	
        });
        
            $b16Slide.append($b16Title);
            $b16Slide.append($b16Link1);
            $b16Slide.append($b16Link2);
            $b16Slide.append($b16Desc);
        
        $box4.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b4Slide.slideUp(0);
    
        $b4Slide.css({
            'display': 'none'
        });
        $box5.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b5Slide.slideUp(0);
    
        $b5Slide.css({
            'display': 'none'
        });
        $box6.css({
            'background-color': '#04181c',
            'padding-left': '0px'
        });
        $b6Slide.slideUp(0);
    
        $b6Slide.css({
            'display': 'none'
        });
        
        $b14Slide.slideUp(0);
        $box14.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b14Slide.css({
            'display': 'none'
        });
        $b15Slide.slideUp(0);
        $box15.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b15Slide.css({
            'display': 'none'
        });
        $b17Slide.slideUp(0);
        $box17.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b17Slide.css({
            'display': 'none'
        });
        $b18Slide.slideUp(0);
        $box18.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b18Slide.css({
            'display': 'none'
        });
        $b19Slide.slideUp(0);
        $box19.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b19Slide.css({
            'display': 'none'
        });
        
        $b16Slide.css({
            'display': 'block'
        });
        
        $b16Slide.slideUp(0);
        $b16Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box17') && (openBox != 17)){
        console.log("box17 active");
        openBox = 17;
        
        $box17.css({
            'border-bottom': '3px solid #e36a12',
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'on';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $box17t19.append($b17Slide);
	    } else if ($(window).width() <= 845){
          $box17ex.append($b17Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box17t19.append($b17Slide);
	       } else if ($(window).width() <= 845){
              $box17ex.append($b17Slide);
           }	
        });
        
            $b17Slide.append($b17Title);
            $b17Slide.append($b17Link1);
            $b17Slide.append($b17Link2);
            $b17Slide.append($b17Desc);
        
        $b14Slide.slideUp(0);
        $box14.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b14Slide.css({
            'display': 'none'
        });
        $b15Slide.slideUp(0);
        $box15.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b15Slide.css({
            'display': 'none'
        });
        $b16Slide.slideUp(0);
        $box16.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b16Slide.css({
            'display': 'none'
        });
        $b18Slide.slideUp(0);
        $box18.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b18Slide.css({
            'display': 'none'
        });
        $b19Slide.slideUp(0);
        $box19.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b19Slide.css({
            'display': 'none'
        });
        
        $b17Slide.css({
            'margin-top': '-1px',
            'border-bottom': '1px',
            'border-left': '2px solid #737e80',
            'display': 'block'
        });
        
        $b17Slide.slideUp(0);
        $b17Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box18') && (openBox != 18)){
        console.log("box18 active");
        openBox = 18;
        
        $box18.css({
            'border-bottom': '2px solid #e36a12',
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'on';
        dataBoxes.box19Slide = 'off';
        
        if ($(window).width() >= 846){ 
		  $box17t19.append($b18Slide);
	    } else if ($(window).width() <= 845){
          $box18ex.append($b18Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box17t19.append($b18Slide);
	       } else if ($(window).width() <= 845){
              $box18ex.append($b18Slide);
           }	
        });
        
            $b18Slide.append($b18Title);
            $b18Slide.append($b18Link1);
            $b18Slide.append($b18Link2);
            $b18Slide.append($b18Desc);
        
        $b14Slide.slideUp(0);
        $box14.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b14Slide.css({
            'display': 'none'
        });
        $b15Slide.slideUp(0);
        $box15.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b15Slide.css({
            'display': 'none'
        });
        $b16Slide.slideUp(0);
        $box16.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b16Slide.css({
            'display': 'none'
        });
        $b17Slide.slideUp(0);
        $box17.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b17Slide.css({
            'display': 'none'
        });
        $b19Slide.slideUp(0);
        $box19.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b19Slide.css({
            'display': 'none'
        });
        
        $b18Slide.css({
            'display': 'block'
        });
        
        $b18Slide.slideUp(0);
        $b18Slide.slideDown(500);
        
    } else if (($('.active').attr('id') == 'box19') && (openBox != 19)){
        console.log("box19 active");
        openBox = 19;
        
        $box19.css({
            'border-bottom': '2px solid #e36a12',
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        
        dataBoxes.box4Slide = 'off';
        dataBoxes.box5Slide = 'off';
        dataBoxes.box6Slide = 'off';
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'on';
        
        if ($(window).width() >= 846){ 
		  $box17t19.append($b19Slide);
	    } else if ($(window).width() <= 845){
          $box19ex.append($b19Slide);
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      $box17t19.append($b19Slide);
	       } else if ($(window).width() <= 845){
              $box19ex.append($b19Slide);
           }	
        });
    
            $b19Slide.append($b19Title);
            $b19Slide.append($b19Link1);
            $b19Slide.append($b19Link2);
            $b19Slide.append($b19Desc);
        
        $b14Slide.slideUp(0);
        $box14.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b14Slide.css({
            'display': 'none'
        });
        $b15Slide.slideUp(0);
        $box15.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b15Slide.css({
            'display': 'none'
        });
        $b16Slide.slideUp(0);
        $box16.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b16Slide.css({
            'display': 'none'
        });
        $b17Slide.slideUp(0);
        $box17.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b17Slide.css({
            'display': 'none'
        });
        $b18Slide.slideUp(0);
        $box18.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        $b18Slide.css({
            'display': 'none'
        });
        
        $b19Slide.css({
            'display': 'block'
        });
        
        $b19Slide.slideUp(0);
        $b19Slide.slideDown(500);
    }
    
};

var unShowInfo = function(){
    
    openBox = 0;
    
    dataBoxes.box4Slide = 'off';
    dataBoxes.box5Slide = 'off';
    dataBoxes.box6Slide = 'off';
    dataBoxes.box14Slide = 'off';
    dataBoxes.box15Slide = 'off';
    dataBoxes.box16Slide = 'off';
    dataBoxes.box17Slide = 'off';
    dataBoxes.box18Slide = 'off';
    dataBoxes.box19Slide = 'off';
    
    if(($(window).width() <= 845)){
        $box4.css({
            'text-align': 'center',
            'padding-right': '0px'
        });
        $box5.css({
            'text-align': 'center',
            'padding-right': '0px'
        });
        $box6.css({
            'text-align': 'center',
            'padding-right': '0px'
        });
    };
    
    if($('.active').attr('id') == 'box4'){
        console.log("box4 inactive");
    } else if ($('.active').attr('id') == 'box5'){
        console.log("box5 inactive");
    } else if ($('.active').attr('id') == 'box6'){
        console.log("box6 inactive"); 
    } else if (($('.active').attr('id') == 'box14') && (dataBoxes.box14Slide === 'off')){
        console.log("box14 inactive");
    } else if (($('.active').attr('id') == 'box15') && (dataBoxes.box15Slide === 'off')){
        console.log("box15 inactive");
    } else if (($('.active').attr('id') == 'box16') && (dataBoxes.box16Slide === 'off')){
        console.log("box16 inactive");
    } else if (($('.active').attr('id') == 'box17') && (dataBoxes.box17Slide === 'off')){
        console.log("box17 inactive");
    } else if (($('.active').attr('id') == 'box18') && (dataBoxes.box18Slide === 'off')){
        console.log("box18 inactive");  
    } else if (($('.active').attr('id') == 'box19') && (dataBoxes.box19Slide === 'off')){
        console.log("box19 inactive");
    }
    
    $(this).removeClass('active').addClass('inActive');
};

var zeroOB = function(){
    openBox = 0;
    $box4.css({
        'background-color': '#04181c',
        'padding-left': '0px',
        'text-align': 'center'
    });
    $b4Slide.slideUp(0);
    
    $b4Slide.css({
        'display': 'none'
    });
    
    $box5.css({
        'background-color': '#04181c',
        'padding-left': '0px',
        'text-align': 'center'
    });
    
    $b5Slide.slideUp(0);
    
    $b5Slide.css({
        'display': 'none'
    });
    
    $box6.css({
        'background-color': '#04181c',
        'padding-left': '0px',
        'text-align': 'center'
    });
    
    $b6Slide.slideUp(0);
    
    $b6Slide.css({
        'display': 'none'
    });
    
    $b14Slide.slideUp(0);
    $b14Slide.css({
        'display': 'none'
    });
    $b15Slide.slideUp(0);
    $b15Slide.css({
        'display': 'none !important'
    });
    $b16Slide.slideUp(0);
    $b16Slide.css({
        'display': 'none'
    });
    $b17Slide.slideUp(0);
    $b17Slide.css({
        'display': 'none'
    });
    $b18Slide.slideUp(0);
    $b18Slide.css({
        'display': 'none'
    });
    $b19Slide.slideUp(0);
    $b19Slide.css({
        'display': 'none'
    });
    
    $box14.css({
        'background-color': '#737e80',
        'border-bottom': '1px solid #737e80',
        'opacity': '1.0'
    });
    $box15.css({
        'background-color': '#737e80',
        'opacity': '1.0'
    });
    $box16.css({
        'background-color': '#737e80',
        'opacity': '1.0'
    });
    $box17.css({
        'border-bottom': '3px solid #737e80',
        'background-color': '#737e80',
        'opacity': '1.0'
    });
    $box18.css({
        'border-bottom': '2px solid #737e80',
        'background-color': '#737e80',
        'opacity': '1.0'
    });
    $box19.css({
        'border-bottom': '2px solid #737e80',
        'background-color': '#737e80',
        'opacity': '1.0'
    });
};

var nonZeroOB = function(){
    console.log('Slide Downs ready to display');
};


/* -----  Function Calls  ----- */

$(function(){
    
    $('#box1').hover(zeroOB,nonZeroOB);
    $('#box3').hover(zeroOB,nonZeroOB);
    
    $('#box4').hover(showInfo,unShowInfo);
    $('#box5').hover(showInfo,unShowInfo);
    $('#box6').hover(showInfo,unShowInfo);
    
    $('#box7').hover(zeroOB,nonZeroOB);
    
    $('#box14').hover(showInfo,unShowInfo);
    $('#box15').hover(showInfo,unShowInfo);
    $('#box16').hover(showInfo,unShowInfo);
    $('#box17').hover(showInfo,unShowInfo);
    $('#box18').hover(showInfo,unShowInfo);
    $('#box19').hover(showInfo,unShowInfo);
    
    $('#box20').hover(zeroOB,nonZeroOB);
    
    $(window).resize(function(){
        location.reload();
    });
          
});