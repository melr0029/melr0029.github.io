  window.onload = function(){

document.getElementById ("theImage")
  .onclick =function(){
  changeImage();
}
var i =0;

function changeImage(){
    var list = ["chance.jpg","drake.jpg","mx.jpg","nyc.jpg"];
    i++;
    if (i>3){
      i=0;
}
    var newImg =list[i];
    document.getElementById("theImage").src =newImg;

}
}
