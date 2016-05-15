$(document).ready(function(){


  $(".jumper").on("click", function( e ) {

      e.preventDefault();

      $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 600;

  });
});

$(document).ready(function(){

    setBindings();

});

function setBindings() {

  $("nav a").click(function(e){
    e.preventDefault();
      var sectionID = e.currentTarget.id + "Section";

      $("html body").animate({
        scrollTop: $("#" + sectionID).offset().top / 1.1
      }, 1000);

  });
}
