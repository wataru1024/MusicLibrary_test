


m1.style.backgroundImage = "url(library/bgi-3.jpg)";
m2.style.backgroundImage = "url(library/bgi-5.jpg)";
m3.style.backgroundImage = "url(library/bgi-2.jpg)";
m4.style.backgroundImage = "url(library/bgi-4.jpg)";



var body = document.querySelector('body');

var date = document.querySelector('.date');
var title = document.querySelector('.title');
var lyrics = document.querySelector('.lyrics');
// const musicImg = document.querySelector('.musicImg');
const role = document.querySelector('.role');

//本当はMusicDatas.lengthにしたい

for (let i=0; i<3; i++) {
  let m =document.querySelector('#'+array[i]);
  
  m.onclick = function () {
    date.textContent = MusicDatas[i].date;
    title.textContent = MusicDatas[i].title;
    lyrics.textContent = MusicDatas[i].lyrics;
    music.src = MusicDatas[i].src;
    // musicImg.src = MusicDatas[i].img;
    role.innerHTML = "<h1>「夕焼け」</h1><h2>Writer/Vocal</h2><h1>Kitai shinano</h1><h2>Music Image Is Maked by</h2><h1>Karen Takizawa</h1><h2>present to</h2><h1>Riki Saksaki</h1><h2>Composer</h2><h1>Wataru Nakamura</h1><h1>Tikako kanno</h1>"
    body.style.backgroundImage = "url(library/bgi-8.jpg)";
      judgAndMove ();
    music.loop = true;
    music.play();
  }
  m.addEventListener("mouseover", function() {

  });
}



m1.addEventListener("mouseover", function() {
  role.innerHTML = "<h1>「夕焼け」</h1><h2>Writer/Vocal</h2><h1>Kitai shinano</h1><h2>Music Image Is Maked by</h2><h1>Karen Takizawa</h1><h2>present to</h2><h1>Riki Saksaki</h1><h2>Composer</h2><h1>Wataru Nakamura</h1><h1>Tikako kanno</h1>"
});


//libraryBoxが開いているときはhoverした時にroleを変更して
//libraryBoxが閉じている時は選択されている曲のroleを表示する様にしないといけない
m2.addEventListener("mouseover", function() {
  role.innerHTML = '<h1 class="title2">「あちゃやけ（朝焼け）」</h1><h2>Writer/Vocal</h2><h1>Masaki Sekiguti</h1><h2>Music Image Is Maked by</h2><h1>Joma Kimura</h1><h2>Composer</h2><h1>Wataru Nakamura</h1>'
});

m3.addEventListener("mouseover", function() {
  role.innerHTML = '<h1 class="title2">「melt」</h1><h2>Writer/Vocal/Composer</h2><h1>WataruNakamura</h1><h2>Music Image Is Maked by</h2><h1>Someone</h1>'
});


