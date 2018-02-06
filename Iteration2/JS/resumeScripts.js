/* -----  Functions  ----- */

function showInfo(){
    console.log("Run showInfo function");
}

function unShowInfo(){
    console.log("Run unShowInfo function");
}


/* -----  Function Calls  ----- */

$(function(){
    
    $('#box13').hover(showInfo,unShowInfo);

});