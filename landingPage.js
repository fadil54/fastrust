//? Gambar berjalan

const changeBubble = function(jenisImg){
    const firstBubble = document.querySelector(".first-bubble");
    const secondBubble = document.querySelector(".second-bubble");
    const thirdBubble = document.querySelector(".third-bubble");

    if(jenisImg === "gimbot"){
        firstBubble.classList.toggle("opacity");
        thirdBubble.classList.toggle("opacity");
    }else if(jenisImg === "kaset"){
        secondBubble.classList.toggle("opacity");
        firstBubble.classList.toggle("opacity");
    }else{
        thirdBubble.classList.toggle("opacity");
        secondBubble.classList.toggle("opacity");
    }
}

let jenis = "kaset";
const changeImage = function(){
    const gimbot = document.querySelector(".gimbot");
    const kaset = document.querySelector(".kaset");
    const imac = document.querySelector(".imac");  

    if(jenis === "gimbot"){
        gimbot.classList.toggle("hidden");
        imac.classList.toggle("hidden");
        changeBubble(jenis);
        jenis = "kaset";
    }else if(jenis === "kaset"){
        kaset.classList.toggle("hidden");
        gimbot.classList.toggle("hidden");
        changeBubble(jenis);
        jenis = "imac";
    }else{
        imac.classList.toggle("hidden");
        kaset.classList.toggle("hidden");
        changeBubble(jenis);
        jenis = "gimbot";
    }
}

setInterval(changeImage,5000);

//? Dropdown
    function openCloseDropDown(menuIcon,xIcon){
        const umum = document.querySelector(".umum");
        menuIcon.classList.toggle("media-hidden");
        xIcon.classList.toggle("hidden");
        umum.classList.toggle("media-hidden");
    }
const menuIcon = document.querySelector(".buttons .menu");
const xIcon = document.querySelector(".x");
menuIcon.addEventListener("click",function(){
    openCloseDropDown(menuIcon,xIcon);
});
xIcon.addEventListener("click",function(){
    openCloseDropDown(menuIcon,xIcon);
});

