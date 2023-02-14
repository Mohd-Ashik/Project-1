// mobile menubar open 
function openMenu(){
    document.getElementById("navbar").style.left = "0px";
}
// mobile menubar close 
function closeMenu(){
    document.getElementById("navbar").style.left = "-280px";
}

// sticky navbar 
window.addEventListener('scroll',function(){
    let navbar=document.getElementById("navbar");
    if(window.pageYOffset >=112.9){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
});
