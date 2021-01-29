$(window).on('load',function(){
  // $("#js-loader").fadeOut(); これだけでOK

  // codepen用
  function loaderClose(){
    $("#js-loader").fadeOut();
  }
  setTimeout(loaderClose, 1200);
  
});