var music = new Audio();


function init() {
  music.preload = "auto";
  // music.src = "library/campfire.mp3";
  music.load();
  music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  }, false);
}
function play() {
  music.loop = true;
  music.play();
}
function stop() {
  music.pause();
  // music.currentTime = 0;
}


init();



var triangle = document.querySelector('.triangle');
var square = document.querySelector('.square');

triangle.onclick = function () {
  // if (sText.innerHTML === "ENJOY MUSIC") {
  //   judgAndMove ();
  // }
}
square.onclick = function () {
  if (sText.innerHTML === "ENJOY MUSIC") {
    judgAndMove ();
  }
}


let slider = document.querySelector('#duration_slider');
let timer;
let autoplay = 0;
// function load the music
function load_music(){
	clearInterval(timer);
	reset_slider();
  music.load();
	timer = setInterval(range_slider ,500);
}
load_music();

function reset_slider(){
  slider.value = 0;
}
// change slider position 
function change_duration(){
	slider_position = music.duration * (slider.value / 100);
	music.currentTime = slider_position;
}

// update slider position
function range_slider(){
	let position = 0;  
  if(!isNaN(music.duration)){
    position = music.currentTime * (100 / music.duration);
    slider.value =  position;
  }
}

const spendTime = document.querySelector('.spendTime');

