var myImages =["images/slideshow-1.jpg", "images/slideshow-2.jpg","images/slideshow-3.jpg","images/slideshow-4.jpg","images/slideshow-5.jpg"];


var captionImages =["Cat 1","Cat 2","Cat 3","Cat 4","Cat 5"];

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

//Use arrow keys to navigate slideshow
document.onkeydown = function(event) {
    switch (event.keycode) {
        case 37:
            back;
        break;
        case 39:
            next;
        break;
    }
};