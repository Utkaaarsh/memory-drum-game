var colorButton = ["crash", "kick", "snare", "tom1"];

var gamepattern =[];
var userChoosenColor=[];
var level1= 0;
var start = false;
var d= [];
function nextsequence(){

userClickedPattern= [];
$("h1").text('level '+ level1);
$("h2").text("Your score : " + 4*level1);
level1++;
var n = Math.random()*4;
var randomnumber = Math.floor(n);
var choosenColor= colorButton[randomnumber];
gamepattern.push(choosenColor);
$("#"+choosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(choosenColor);

}

function checkAnswer(currentLevel) {
  if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamepattern.length){
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

$(".btn").click(function(event){
    userChoosenColor = event.target.id ;
    userClickedPattern.push(userChoosenColor);

   playsound(userChoosenColor);
   animatePress(userChoosenColor);

   
   checkAnswer(userClickedPattern.length - 1);
});

$("body").keypress( function(event){
  // if((event.key) === 'f'){
  if(!start ){
  d = 'yu';
  $("h1").text("level"+ level1);
  console.log(event.key);
  nextsequence();
  start = true;
   }
//  }
});


$("body").keypress(function(event){
  if((event.key) === 'w'){
userChoosenColor = 'crash';
console.log(userChoosenColor);
userClickedPattern.push(userChoosenColor);
 playsound(userChoosenColor);
 animatePress(userChoosenColor);
 checkAnswer(userClickedPattern.length - 1);
  }else if((event.key)=== 'a'){
    userChoosenColor = 'kick';
    console.log(userChoosenColor);
userClickedPattern.push(userChoosenColor);
 playsound(userChoosenColor);
 animatePress(userChoosenColor);
 checkAnswer(userClickedPattern.length - 1);
  }else if((event.key) === 's'){
    userChoosenColor = 'snare';
    console.log(userChoosenColor);
userClickedPattern.push(userChoosenColor);
 playsound(userChoosenColor);
 animatePress(userChoosenColor);
 checkAnswer(userClickedPattern.length - 1);
  }else if((event.key) === 'd'){
    userChoosenColor = 'tom1';
    console.log(userChoosenColor);
userClickedPattern.push(userChoosenColor);
 playsound(userChoosenColor);
 animatePress(userChoosenColor);
 checkAnswer(userClickedPattern.length - 1);
  }

})

function playsound(name){
  var audio = new Audio("./sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
        $("#" + currentColor).addClass("pressed");
        setTimeout(function () {
          $("#" + currentColor).removeClass("pressed");
        }, 100);
}



function startOver() {
  level1 = 0;
  gamepattern = [];
  start = false;
}