var menu = document.querySelector("ul");
var hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click" , function(){
    
  menu.classList.toggle('menu');
    
 if( menu.classList.contains('menu')){
        hamburger.src= "assets/hamburger-menu.svg"; 
    } 
    else{
        hamburger.src= "assets/explore.svg";
    }
})
  
