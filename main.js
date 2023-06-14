var color = ["green","red","yellow","blue"];
var randomColorhistory = [];
var randomclickhistory = [];
var level = 0;
$(document).keypress(function(){
    $("h1").text("level "+level);
    randomColor();
})
$(".btn").click(function(){
    var n = $(this).attr('id');
    $("#"+n).fadeOut(100).fadeIn(100);
    sound(n);
    randomclickhistory.push(n);
    checkans(randomclickhistory.length-1);
})
function checkans(p){
    if(randomColorhistory[p] === randomclickhistory[p]){
        if(randomColorhistory.length === randomclickhistory.length){
            setTimeout(function(){
                randomColor();
            },1000)
        }
    }else{
        $("h1").text("gameover");
        sound("wrong");
        restart();
        
      


    }
}
function randomColor(){
    randomclickhistory = [];
    level++;
    $("h1").text("level "+level);
    var r = color[Math.floor(Math.random()*4)] ;
    $("#"+r).fadeOut(100).fadeIn(100);
    sound(r);
    randomColorhistory.push(r);
    
}

function sound(r){
    var audio = new Audio(r+".mp3");
    audio.play();
}
function restart(){
    level = 0;
    randomColorhistory = [];
}
