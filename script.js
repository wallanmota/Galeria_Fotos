let fullImgBox =  document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

let img1 = document.getElementById("img1").addEventListener("click", openImg(this.src));
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");

img2.onclick = openImg(this.src)

let fechar = document.getElementById("fechar").addEventListener('click', closeImg)

function openImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeImg(){
    fullImgBox.style.display = "none";
}

