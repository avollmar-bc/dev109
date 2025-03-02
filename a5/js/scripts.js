var myImages =["images/slideshow-1.jpg", "images/slideshow-2.jpg","images/slideshow-3.jpg","images/slideshow-4.jpg","images/slideshow-5.jpg"];


var captionImages =["Vash and Ed - AI Paintings","Vash chilling by the jam corner","Whose red dot do I have to chase for a drink around here?","Ed killing nerd time vibe","...and Vash killing nerd time vibe"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
setInterval(autoSlide,2000); // Next

//Use arrow keys to navigate slideshow
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            back();
        break;
        case 'ArrowRight':
            next();
        break;
    }
});