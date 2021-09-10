let fullImgBox =  document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

let img1 = document.getElementById("img1").addEventListener('click', openImg);
let img2 = document.getElementById("img2").addEventListener('click', openImg);
let img3 = document.getElementById("img3").addEventListener('click', openImg);
let img4 = document.getElementById("img4").addEventListener('click', openImg);
let img5 = document.getElementById("img5").addEventListener('click', openImg);
let img6 = document.getElementById("img6").addEventListener('click', openImg);
let img7 = document.getElementById("img7").addEventListener('click', openImg);
let img8 = document.getElementById("img8").addEventListener('click', openImg);


let fechar = document.getElementById("fechar").addEventListener('click', closeImg)

function openImg(){
    fullImgBox.style.display = "flex";
    fullImg.src = this.src;
    console.log('clicou')
}

function closeImg(){
    fullImgBox.style.display = "none";
    console.log('fechou')
    
}

