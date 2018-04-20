/*this is the script for the read more, read less button*/
$(document).ready(function(){
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More"){
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#revealtext").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#revealtext").slideUp();
    }
  });
});
/*this is the end of the read more button script*/

/*----------------------*/

/*this is a script for viewing and hiding the videos on the individual recipe pages*/

$(document).ready(function(){
  $("#videos").click(function() {
    var elem = $("#videos").text();
    if (elem == "View Videos"){
      //Stuff to do when btn is in the read more state
      $("#videos").text("Hide Videos");
      $(".stepvideo").slideUp();
    } else {
      //Stuff to do when btn is in the read less state
      $("#videos").text("View Videos");
      $(".stepvideo").slideDown();
    }
  });
});

/*this is the end of the script for the hide videos, show videos button on the individual recipe pages*/

/*this is the beginning of the script for hiding photos*/

$(document).ready(function(){
  $("#videos").click(function() {
    var elem = $("#videos").text();
    if (elem == "View Videos"){
      //Stuff to do when btn is in the read more state
      $("#videos").text("Hide Videos");
      $(".recipeimage").slideUp();
    } else {
      //Stuff to do when btn is in the read less state
      $("#videos").text("View Videos");
      $(".recipeimage").slideDown();
    }
  });
});

/*this is the end of the script for hiding photos within a recipe*/
