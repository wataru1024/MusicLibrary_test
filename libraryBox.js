var library = document.querySelector('.library');
var libraryTrigger = document.querySelector('.library-trigger');

libraryTrigger.addEventListener("click",function() {
  judgAndMove ();
})


var array = [];
for (let i = 1; i < 11; i++) {
  array.push("m"+i);
  // console.log(array);
}
// for (let i = 0; i<10; i++) {
//   let m =document.querySelector('#'+array[i]);
//   console.log(array[i]);
// }

function reset () {
  for (let i=0; i<10; i++) {
    let m =document.querySelector('#'+array[i]);
    m.classList.remove('focus');
    m.classList.remove('gray');
  }
}
function reset2 () {
  for (let i=0; i<10; i++) {
    let m =document.querySelector('#'+array[i]);
    m.classList.remove('selected');
  }
}

function focusSistem () {
  for (let i=0; i<10; i++) {
    let m =document.querySelector('#'+array[i]);
    m.addEventListener("mouseover",function(event) {  //m1がhoverされた時に
      reset();                                        //とりあえず全部リセットしてから
      for (let j=0 ; j<10; j++) {                     // 同じだったらfocusをつけてjループは次に行く
        let mPointed =document.querySelector('#'+array[j]);
        if (m === mPointed) {
          mPointed.classList.add('focus');
          continue;
        }
        mPointed.classList.add('gray');
      }
    },false);
  }
}

function noFocusSistem () {
  var musics =document.querySelector('.musics');
  musics.addEventListener("mouseout", function(event){reset()} ,false);
}

function activeSistem () {
  for (let i=0; i<10; i++) {
    let m =document.querySelector('#'+array[i]);
    m.addEventListener("click", function() {
      reset2();
      m.classList.add('selected');
    })
  }
}

noFocusSistem ();
focusSistem();
activeSistem ();

// m1.addEventListener("mouseover", function (event) {
//   // マウスオーバー時の処理
//   reset();
//   m1.classList.add('focus');
//   m2.classList.add('gray');
//   m3.classList.add('gray');
//   m4.classList.add('gray');
// }, false);

// m2.addEventListener("mouseover", function (event) {
//   reset();
//   // マウスオーバー時の処理
//   m2.classList.add('focus');
//   m1.classList.add('gray');
//   m3.classList.add('gray');
//   m4.classList.add('gray');
// }, false);

// m3.addEventListener("mouseover", function (event) {
//   reset();
//   // マウスオーバー時の処理
//   m3.classList.add('focus');
//   m1.classList.add('gray');
//   m2.classList.add('gray');
//   m4.classList.add('gray');
// }, false);

// m4.addEventListener("mouseover", function (event) {
//   reset();
//   // マウスオーバー時の処理
//   m4.classList.add('focus');
//   m1.classList.add('gray');
//   m2.classList.add('gray');
//   m3.classList.add('gray');
// }, false);

