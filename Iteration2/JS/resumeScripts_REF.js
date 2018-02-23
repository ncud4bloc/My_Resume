/* -----  Variables  ----- */


var pageWidth = ($(window).width());
    console.log('Window width is ' + pageWidth);
var openBox;
var dataBoxes = {
    box4Slide : 'off',
    box5Slide : 'off',
    box6Slide : 'off',
    box14Slide : 'off',
    box15Slide : 'off',
    box16Slide : 'off',
    box17Slide : 'off',
    box18Slide : 'off',
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
/*var $b4Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk1"><p><a href="../HTML/page2.html#mySkills" target="_blank">Developer Skillset</a></p></div>');*/
var $b4Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk1"><p>Developer Skillset</p></div>');
var $b4Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk2"><p><a href="../HTML/page2.html#myEducation" target="_blank">Education</a></p></div>');
var $b4Lynk3 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b4Lynk3"><p><a href="../HTML/page2.html#myResume" target="_blank">Professional Background</a></p></div>');

var $b5Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Slide"></div>');
var $b5Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk1"><p><a href="../HTML/page2.html#myPersonalBackground" target="_blank">Background</a></p></div>');
var $b5Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk2"><p><a href="../HTML/page2.html#myFamily" target="_blank">Family</a></p></div>');
var $b5Lynk3 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b5Lynk3"><p><a href="../HTML/page2.html#myHobbies" target="_blank">Hobbies</a></p></div>');

var $b6Slide = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Slide"></div>');
var $b6Lynk1 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Lynk1"><p><a href="../HTML/page2.html#myPhone" target="_blank">Phone</a></p></div>');
var $b6Lynk2 = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dataNav" id="b6Lynk2"><p><a href="mailto:ncudden@sbcglobal.net">Email</a></p></div>');
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
        addNavStyles(1,$box4,$box5,$box6,$b4Slide,$b5Slide,$b6Slide,$b4Lynk1,$b4Lynk2,$b4Lynk3);
    } else if (($('.active').attr('id') == 'box5') && (openBox != 5)){
        console.log("box5 active");
        openBox = 5;
        addNavStyles(2,$box5,$box4,$box6,$b5Slide,$b4Slide,$b6Slide,$b5Lynk1,$b5Lynk2,$b5Lynk3);  
    } else if (($('.active').attr('id') == 'box6') && (openBox != 6)){
        console.log("box6 active");
        openBox = 6;
        addNavStyles(3,$box6,$box4,$box5,$b6Slide,$b4Slide,$b5Slide,$b6Lynk1,$b6Lynk2,$b6Lynk3);
        
    } else if (($('.active').attr('id') == 'box14') && (openBox != 14) && (dataBoxes.box14Slide === 'off')){
        console.log("box14 active");
        openBox = 14;
        dataBoxes.box14Slide = 'on';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        addProjStyles($box14,$box14t16,$b14Slide,$box14ex,$b14Title,$b14Link1,'empty',$b14Desc,$b15Slide,$b16Slide,$b17Slide,$b18Slide,$b19Slide,$box15,$box16,$box17,$box18,$box19);
        
    } else if (($('.active').attr('id') == 'box15') && (openBox != 15) && (dataBoxes.box15Slide === 'off')){
        console.log("box15 active");
        openBox = 15;
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'on';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        addProjStyles($box15,$box14t16,$b15Slide,$box15ex,$b15Title,$b15Link1,$b15Link2,$b15Desc,$b14Slide,$b16Slide,$b17Slide,$b18Slide,$b19Slide,$box14,$box16,$box17,$box18,$box19);
        
    } else if (($('.active').attr('id') == 'box16') && (openBox != 16) && (dataBoxes.box16Slide === 'off')){
        console.log("box16 active");
        openBox = 16;
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'on';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        addProjStyles($box16,$box14t16,$b16Slide,$box16ex,$b16Title,$b16Link1,$b16Link2,$b16Desc,$b14Slide,$b15Slide,$b17Slide,$b18Slide,$b19Slide,$box14,$box15,$box17,$box18,$box19);
      
    } else if (($('.active').attr('id') == 'box17') && (openBox != 17) && (dataBoxes.box17Slide === 'off')){
        console.log("box17 active");
        openBox = 17;
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'on';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'off';
        addProjStyles($box17,$box17t19,$b17Slide,$box17ex,$b17Title,$b17Link1,$b17Link2,$b17Desc,$b14Slide,$b15Slide,$b16Slide,$b18Slide,$b19Slide,$box14,$box15,$box16,$box18,$box19);
        
    } else if (($('.active').attr('id') == 'box18') && (openBox != 18) && (dataBoxes.box18Slide === 'off')){
        console.log("box18 active");
        openBox = 18;
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'on';
        dataBoxes.box19Slide = 'off';
        addProjStyles($box18,$box17t19,$b18Slide,$box18ex,$b18Title,$b18Link1,$b18Link2,$b18Desc,$b14Slide,$b15Slide,$b16Slide,$b17Slide,$b19Slide,$box14,$box15,$box16,$box17,$box19);
        
    } else if (($('.active').attr('id') == 'box19') && (openBox != 19) && (dataBoxes.box19Slide === 'off')){
        console.log("box19 active");
        openBox = 19;
        dataBoxes.box14Slide = 'off';
        dataBoxes.box15Slide = 'off';
        dataBoxes.box16Slide = 'off';
        dataBoxes.box17Slide = 'off';
        dataBoxes.box18Slide = 'off';
        dataBoxes.box19Slide = 'on';
        addProjStyles($box19,$box17t19,$b19Slide,$box19ex,$b19Title,$b19Link1,$b19Link2,$b19Desc,$b14Slide,$b15Slide,$b16Slide,$b17Slide,$b18Slide,$box14,$box15,$box16,$box17,$box18);
        
    }
    
};

var unShowInfo = function(){
    
    openBox = 0;
    
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

var addNavStyles = function(bNum,onBox,offBox1,offBox2,onSlide,offSlide1,offSlide2,onLynk1,onLynk2,onLynk3){
        onBox.css({
            'background-color': '#ddd'
        });
        
        onSlide.css({
            'position': 'absolute',
            'left': '2px'
        })
        
        if ($(window).width() >= 846){ 
		  onSlide.css({
              'width': '100%'
          });
          offSlide1.css({
              'position': 'absolute',
              'width': '100%'
          });
          offSlide2.css({
              'position': 'absolute',
              'width': '100%'
          });
            
	    } else if ($(window).width() <= 845){
          onSlide.css({
              'box-sizing': 'content-box',
              'width': '60%'
          });
             
          if(bNum === 1){
            offBox1.css({
              'text-align': 'right',
              'padding-right': '30px'
            });
            offBox2.css({
              'text-align': 'right',
              'padding-right': '30px'
            });
          } else if (bNum === 2){
            onBox.css({
              'text-align': 'center',
              'padding-right': '0px'
            });
            offBox2.css({
              'text-align': 'right',
              'padding-right': '30px'
            });
          } else if (bNum === 3){
            onBox.css({
              'text-align': 'center',
              'padding-right': '0px'
            });
            offBox2.css({
              'text-align': 'center',
              'padding-right': '0px'
            });
          }
               
        }
        
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      onSlide.css({
                'width': '100%'
              });
              offSlide1.css({
                'position': 'absolute',
                  'width': '100%'
              });
              offSlide2.css({
                'position': 'absolute',
                  'width': '100%'
              });
	       } else if ($(window).width() <= 845){
              onSlide.css({
              'box-sizing': 'content-box',
              'width': '60%'
              });
            
             if(bNum === 1){
                offBox1.css({
                    'text-align': 'right',
                    'padding-right': '30px'
                });
                offBox2.css({
                    'text-align': 'right',
                    'padding-right': '30px'
                });
            } else if (bNum === 2){
                onBox.css({
                    'text-align': 'center',
                    'padding-right': '0px'
                });
                offBox2.css({
                    'text-align': 'right',
                    'padding-right': '30px'
                });
            } else if (bNum === 3){
                onBox.css({
                    'text-align': 'center',
                    'padding-right': '0px'
                });
                offBox2.css({
                    'text-align': 'center',
                    'padding-right': '0px'
                });
            }
               
           }	
        });
        
        onBox.append(onSlide);
            onSlide.append(onLynk1);
            onSlide.append(onLynk2);
            onSlide.append(onLynk3);
        
        offSlide1.slideUp(0);
        offBox1.css({
            'background-color': '#04181c'
        });
        offSlide1.css({
            'display': 'none'
        });
        
        offSlide2.slideUp(0);
        offBox2.css({
            'background-color': '#04181c'
        });
        offSlide2.css({
            'display': 'none'
        });
        
        onSlide.css({
            'box-sizing': 'content-box',
            'border-bottom-left-radius': '5px',
            'border-bottom-right-radius': '5px',
            'background-color': '#ddd',
            'margin-left': '-4px',
            'height': 'auto',
            'z-index': '10',
            'padding-right': '4px'
        });
        
        onLynk2.css({
            'margin-top': '-15px'
        });
        
        onLynk3.css({
            'margin-top': '-15px',
            'margin-bottom': '10px'
        });
        
        onSlide.slideUp(0);
        onSlide.slideDown(500);
        
};

var addProjStyles = function(onBox,onSpan,onSlide,onEX,onTitle,onLink1,onLink2,onDesc,offSlide1,offSlide2,offSlide3,offSlide4,offSlide5,offBox1,offBox2,offBox3,offBox4,offBox5){

        onBox.css({
            'border-bottom': '1px solid #e36a12',
            'background-color': '#e36a12',
            'opacity': '1.0'
        });
        if ($(window).width() >= 846){ 
		  onSpan.append(onSlide);
	    } else if ($(window).width() <= 845){
          onEX.append(onSlide);
        }
        $(window).resize(function(){
	       if ($(window).width() >= 846){ 
		      onSpan.append(onSlide);
	       } else if ($(window).width() <= 845){
              onEX.append(onSlide);
           }	
        });
        
        onSlide.append(onTitle);
        onSlide.append(onLink1);
        if (onLink2 != 'empty'){
            onSlide.append(onLink2);
        }
        onSlide.append(onDesc);
        
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
        offSlide1.slideUp(0);
        offBox1.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        offSlide1.css({
            'display': 'none'
        });
        offSlide2.slideUp(0);
        offBox2.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        offSlide2.css({
            'display': 'none'
        });
        offSlide3.slideUp(0);
        offBox3.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        offSlide3.css({
            'display': 'none'
        });
        offSlide4.slideUp(0);
        offBox4.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        offSlide4.css({
            'display': 'none'
        });
        offSlide5.slideUp(0);
        offBox5.css({
            'background-color': '#737e80',
            'opacity': '0.25'
        });
        offSlide5.css({
            'display': 'none'
        });
        onSlide.css({
            'margin-top': '-1px',
            'border-bottom': '2px',
            'border-left': '2px solid #737e80',
            'display': 'block'
        });
        
        onSlide.slideUp(0);
        onSlide.slideDown(500);
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
    
    /* AJAX Functionality for Detailed Information Div */
    
    $b4Lynk1.on('click',function(){
        console.log('Correctly reading the click');
    // Begin Method 3A: Load HTML Data Using jQuery .load() method
            
        $('#insert').load("HTML/myDetails.html" + ' #mySkill').hide().fadeIn(3000);
        
        $('#mySkill').css({
            'position': 'fixed',
            'opacity': '1.0'
        });    
    // End Method 3A
        
    // Begin Method 3B: Load HTML Data Using jQuery $.ajax() method
        
            /*$.ajax({
                type: "GET",
                url: "HTML/myDetails.html",
                timeout: 2000,
                beforeSend: function(){
                    $('#insert').append('<div id="load">Loading....</div>');
                    console.log('Loading....');
                },
                complete: function(){
                    $('#load').remove();
                    console.log('Loading Complete');
                },
                success: function(data){
                    $('#insert').html($(data).find('#mySkill')).hide().fadeIn(3000);    //jQuery .find() doesn't work
                    //$('#insert').html($(data)).hide().fadeIn(3000);
                    console.log('Data Transfer Successful');        
                },
                error: function(){
                    $('#insert').html('<div id="eMessage">Error.....file did not load correctly</div>');
                    console.log('Error Getting Data');
                }
            });*/
        
    // End Method 3B
    
    });
          
});