/*hover effect thank you counter*/
/*global $*/
$(document).ready(function(){
    $('.clickcount').tooltip({title: "Hooray!", trigger: "hover"});
});

/*global spinner:true */

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

