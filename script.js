let score = 0;

let time = 10;

let gameRunning = false;

let breads = ["🥐","🍞","🥖","🧁","🍩","🍪","🥨"];

let target = document.getElementById("target");

let scoreDisplay = document.getElementById("score");

let timeDisplay = document.getElementById("time");

function randomPosition(){

let gameArea = document.getElementById("gameArea");

let x = Math.random() * 420;

let y = Math.random() * 320;

target.style.left = x + "px";

target.style.top = y + "px";

}

function changeBread(){

let randomBread = breads[Math.floor(Math.random()*breads.length)];

target.innerHTML = randomBread;

randomPosition();

}

target.onclick = function(){

if(gameRunning == false) return;

let bread = target.innerHTML;

if(bread == "🍞"){

score += 10;

}else{

score += 1;

}

scoreDisplay.innerHTML = score;

changeBread();

}

function startGame(){

score = 0;

time = 10;

gameRunning = true;

scoreDisplay.innerHTML = score;

timeDisplay.innerHTML = time;

let breadInterval = setInterval(function(){

if(gameRunning){

changeBread();

}

},500);


let timer = setInterval(function(){

time--;

timeDisplay.innerHTML = time;

if(time <= 0){

gameRunning = false;

clearInterval(timer);

clearInterval(breadInterval);

alert("게임 종료! 점수 : " + score);

}

},1000);

}