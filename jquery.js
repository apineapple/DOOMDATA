function initialize()
{
$(document).ready(function(){
         $("#projectlist").hide();
         $("#songlist").hide();
         $(".modal-description").hide(); //neccisary?
         $("#allpatch").hide();
         
          $("#projects").click(function(){
            $("#songlist").hide();
            $("#songs").css("color", "black");
          if ( $("#projectlist").is(':visible') ){
        $("#logo").show();
         $("#projectlist").hide();
        $("#projects").css("color", "black");
      }
      else{
           $("#logo").hide();
         $("#projectlist").show();
        $("#projects").css("color", "white");
      }
         });

         $("#songs").click(function(){
            $("#projectlist").hide();
            $("#projects").css("color", "black");
          if ( $("#songlist").is(':visible') ){
        $("#logo").show();
         $("#songlist").hide();
        $("#songs").css("color", "black");
      }
      else{
           $("#logo").hide();
         $("#songlist").show();
        $("#songs").css("color", "white");
      }
         });
         
         $(".projectz").click(function(){
         $(".modal-background").show();
         $("#main").hide();
         $("#projectlist").hide();
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
         $("#songs").css("color", "black");
         $("#projects").css("color", "black");
         }).children().click(function(e) {
         return false;
         });
         });
}
$(initialize);
