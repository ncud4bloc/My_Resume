/* -----  Functions  ----- */


var showInfo = function(){
    $(this).removeClass('inActive').addClass('active');
    if($('.active').attr('id') == 'box14'){
        console.log("box14 active");
        $('#box14').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box15'){
        console.log("box15 active");
        $('#box15').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box16'){
        console.log("box16 active");
        $('#box16').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box17'){
        console.log("box17 active");
        $('#box17').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box18'){
        console.log("box18 active");
        $('#box18').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box19'){
        console.log("box19 active");
        $('#box19').removeClass('active').addClass('inActive');
    }
};

var unShowInfo = function(){
    $(this).removeClass('inActive').addClass('active');
    if($('.active').attr('id') == 'box14'){
        console.log("box14 inactive");
        $('#box14').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box15'){
        console.log("box15 inactive");
        $('#box15').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box16'){
        console.log("box16 inactive");
        $('#box16').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box17'){
        console.log("box17 inactive");
        $('#box17').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box18'){
        console.log("box18 inactive");
        $('#box18').removeClass('active').addClass('inActive');
    } else if ($('.active').attr('id') == 'box19'){
        console.log("box19 inactive");
        $('#box19').removeClass('active').addClass('inActive');
    }
};


/* -----  Function Calls  ----- */

$(function(){
    
    //$('.projBox').hover(showInfo,unShowInfo);
    
    $('#box14').hover(showInfo,unShowInfo);
    $('#box15').hover(showInfo,unShowInfo);
    $('#box16').hover(showInfo,unShowInfo);
    $('#box17').hover(showInfo,unShowInfo);
    $('#box18').hover(showInfo,unShowInfo);
    $('#box19').hover(showInfo,unShowInfo);
    

});