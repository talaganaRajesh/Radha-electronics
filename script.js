const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


/* Header removing and adding on scroll up */ 



var lastscrolltop=0;
header= document.getElementById("header");
window.addEventListener("scroll", function(){
    var scrolltop= window.pageYOffset || document .documentElement.scrolltop;
    if (scrolltop > lastscrolltop){
        header.style.top="-50px"
    }
    else{
        header.style.top="0px"
    }
    lastscrolltop=scrolltop;
})