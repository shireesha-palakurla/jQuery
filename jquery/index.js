 // jQuery code
//execute one by one for better results.



// This code changes the color of all <h1> elements to red when the document is ready
// and also demonstrates how to change the color of <h1> elements using jQuery.
 jQuery("h1").css("color","red");



// This code changes the color of all <h1> elements to blue
 $("h1").css("color","blue");



 //ready function
 $(document).ready(function(){
    $("h1").css("color","brown");

 });


 //setting and getting using jquery
$(document).ready(function(){
$("h1").css("color","blue");
var a=$("h1").css("font-size");
console.log(a);
});



