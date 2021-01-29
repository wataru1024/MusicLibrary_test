$(".im").hover(function(){
  $(".im").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
  $(".here").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
  $(".foryou").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
});
$(".here").hover(function(){
  $(".here").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
  $(".im").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
  $(".foryou").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
});
$(".foryou").hover(function(){
  $(".foryou").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
  $(".here").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
  $(".im").animate({ opacity: 0.2 }, { duration: 10, easing: 'swing'})
});
$(".box-1").hover(function(){
  $(".foryou").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
  $(".here").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
  $(".im").animate({ opacity: 1 }, { duration: 10, easing: 'swing'})
});

var btnOne =document.querySelector('.btn-one');
var opening =document.querySelector('.opening');
var library =document.querySelector('.library');

btnOne.onclick = function () {
  opening.classList.add('goodbye');//goodbyは1秒

  var count = 0;
  var countup = function(){  console.log(count++); }
  var id = setInterval(function(){

    countup();
    if(count > 6){ //3(1.5+1.5)秒後に実行
      clearInterval(id);
      library.classList.remove('open1');
    } else if(count ===3) { //1.5秒後に実行
      opening.style.display = "none";//下に隠れているrigthPartが出てくる
      library.style.height = "100vh";
      library.classList.add('open1'); //1.5秒間のアニメーション
    } 
    
  }, 500);//500ミリ秒ごとに実行
}

// setInterval('showClock1()',1000);
// function showClock1() {
//   var nowTime = new Date();
//   var nowHour = nowTime.getHours();
//   var nowMin  = nowTime.getMinutes();
//   var nowSec  = nowTime.getSeconds();
//   var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
//   document.getElementById("RealtimeClockArea").innerHTML = msg;
// }
// setInterval('showClock1()',1000);