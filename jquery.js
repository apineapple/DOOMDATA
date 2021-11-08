function initialize()
{
$(document).ready(function(){
         $("#projectlist").hide();
         $(".modal-description").hide(); //neccisary?
         
         $("#projects").click(function(){
          $("#logo").hide();
         $("#projectlist").show();
        $("#projects").css("color", "white");
         });
         
         $(".projectz").click(function(){
         $(".modal-background").show();
         $("#main").hide();
         $("#projectlist").hide();
         /*$("#songlist").hide();
         $("#interviewlist").hide();*/
         });

         $(".modal-background").click(function(){
         $(".modal-background").hide();
         $("#projectlist").show();
         }).children().click(function(e) {
         return false;
         });
         });
}
$(initialize);
