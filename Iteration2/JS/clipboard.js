var addNavStyles = function(onBox,offBox1,offBox2,onSlide,offSlide1,offSlide2,onLynk1,onLynk2,onLynk3){
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
            
          offBox1.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
          offBox2.css({
              'text-align': 'right',
              'padding-right': '30px'
          });
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
              offBox1.css({
                'text-align': 'right',
                'padding-right': '30px'
              });
              offBox2.css({
                'text-align': 'right',
                'padding-right': '30px'
              });
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