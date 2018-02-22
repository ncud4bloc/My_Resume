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