// Adding and removing classes using jQuery
// This code adds a class to an element when a button is clicked and removes it when another
$(document).ready(function(){
    
    $(".btn1").click(function(){
        $("h1").addClass("poor");
    });

    $(".btn2").click(function(){
        $("h1").removeClass("poor");
    });
 
var b=$("h2").hasClass("JOOR");
console.log(b); // This will log true or false based on whether the class is present
});
