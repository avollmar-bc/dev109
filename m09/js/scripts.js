var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var colorChoice = document.getElementById("colorChoice").value;
    var sizeChoice = document.getElementById("sizeSlider").value;
    var dot = document.createElement("div");
    dot.style.height = sizeChoice + "px";
    dot.style.width = sizeChoice + "px";
    dot.className = "dot " + colorChoice;
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });