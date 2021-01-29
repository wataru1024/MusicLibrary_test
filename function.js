const sText = document.querySelector('.sText');
const dSlider = document.querySelector('#duration_slider');
const musicImg = document.querySelector('.musicImg');
const pCard = document.querySelector('.p-card');
var explanation = document.querySelector('.explanation');
var explanationBox = document.querySelector('.explanationBox');


function judgAndMove () {
  if ( sText.innerHTML === "ENJOY MUSIC") {
    
    sText.innerHTML = "SELECT MUSIC";
    library.classList.remove('closeLB');
    library.classList.add('openLB');
    explanationBox.classList.remove('explanationIn');
    explanationBox.classList.add('explanationOut');
    musicImg.style.display = 'none';
    dSlider.style.display = 'none';
    pCard.style.display = 'none';
    role.style.display = 'block';
    
  } else if ( sText.innerHTML === "SELECT MUSIC" ) {
    
    sText.innerHTML = "ENJOY MUSIC";
    library.classList.remove('openLB');
    library.classList.add('closeLB');
    explanationBox.style.display = "block";
    explanationBox.classList.remove('explanationOut');
    explanationBox.classList.add('explanationIn');
    musicImg.style.display = 'block';//musicImgは最初display:none;になっている
    dSlider.style.display = 'block';//dSliderは最初display:none;になっている
    pCard.style.display = 'block';//pCardは最初display:none;になっている
    role.style.display = 'none';
    
  }
}


console.log(library.classList.contains('openLB') || library.classList.contains('closeLB') === false);
console.log( sText.innerHTML === "SELECT MUSIC");