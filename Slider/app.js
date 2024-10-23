let imageArray = [
    "./2.png",
    "./3.png",
    "./4.png",
    "./5.png",
    "./6.png",
    "./7.png",
    "./8.png",
];
  
let img2 = document.getElementById("img2");
let i = 0;
  
function rightIcon() {
    if (i >= imageArray.length - 1) {
      i = -1;
    }
    i++;
    img2.src = imageArray[i];
}
  
function leftIcon() {
    if (i <= 0) {
      i = imageArray.length;
    }
    i--;
    img2.src = imageArray[i];
}