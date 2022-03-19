function initialize()
{
$(document).ready(function(){
         $("#projectlist").hide();
         $("#listlist").hide();
         $("#storelist").hide();
         $("#songlist").hide();
         $("#searchlist").hide();
         $(".modal-description").hide(); //neccisary?
         $("#allpatch").hide();
         $("#viewb").hide();

         $("#search").keypress(function (e) {
  if (e.which == 13) {
   $("#searchlist").show();
     $("#projectlist").hide();
         $("#listlist").hide();
         $("#storelist").hide();
         $("#songlist").hide();
         $("#logo").hide(); 
    $('form#search').submit();
    return false;    //<---- Add this line
  }
});

          $("#projects").click(function(){
            $("#songlist").hide();
            $("#searchlist").hide();
            $("#songs").css("color", "black");
          if ( $("#projectlist").is(':visible') || $("#listlist").is(':visible')){
        $("#logo").show();
         $("#projectlist").hide();
         $("#listlist").hide();
        $("#projects").css("color", "black");
        $("#viewb").hide();
      }
      else{
            $("#viewb").hide();
           $("#logo").hide();
         $("#listlist").show();
        $("#projects").css("color", "white");
      }
         });

       $("#viewb").click(function(){
         if ( $("#listlist").is(':visible') && $("#projects").css("color", "white")){
               $("#projectlist").show();
              $("#listlist").hide();
         }
         else if ($("#projectlist").is(':visible') && $("#projects").css("color", "white")) {
              $("#projectlist").hide();
              $("#listlist").show();
         }
         });

         $("#songs").click(function(){
            $("#searchlist").hide();
            $("#projectlist").hide();
            $("#listlist").hide();
            $("#projects").css("color", "black");
          if ( $("#songlist").is(':visible') ){
      $("#viewb").hide();
        $("#logo").show();
         $("#songlist").hide();
        $("#songs").css("color", "black");
      }
      else{
         $("#viewb").hide();
           $("#logo").hide();
         $("#songlist").show();
        $("#songs").css("color", "white");
      }
         });
         
         $(".projectz").click(function(){
         $(".modal-background").show();
         $("#main").hide();
         $("#projectlist").hide();
         $("#listlist").hide();
         /*$("#songlist").hide();
         $("#interviewlist").hide();*/
         });

         $(".songz").click(function(){
         $(".modal-background").show();
         $("#main").hide();
         $("#songlist").hide();
         /*$("#songlist").hide();
         $("#interviewlist").hide();*/
         });

         $(".modal-background").click(function(){
         $(".modal-background").hide();
         $("#logo").show();
         $("#searchlist").hide();
         $("#viewb").hide();
         $("#songs").css("color", "black");
         $("#projects").css("color", "black");
         }).children().click(function(e) {
         return false;
         });
         });
}
$(initialize);
