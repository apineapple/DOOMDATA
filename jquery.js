var input = document.getElementById("search");
var searchContents = "charlie";
var searchListContents = "arandomstringnoonewouldevertype";
var searchCounter = 0;

function initialize() {
    $(document).ready(function() {
        $("#projectlist").hide();
        $("#listlist").hide();
        $("#storelist").hide();
        $("#songlist").hide();
        $("#searchlist").hide();
        $(".modal-description").hide(); //neccisary?
        $("#allpatch").hide();
        $(".viewb").hide();
        $("#filter").hide();
        $(".tersion").hide();

        $("#filter").click(function() {
            if ($(".viewb").is(':visible')) {
                $(".viewb").hide();
            } else {
                $(".viewb").show();
            }
        });
        $("#music").click(function() {
            $("#songlist").hide();
            $("#searchlist").hide();
            if ($("#logo").is(':visible')) {
                $("#filter").show();
                $("#logo").hide();
                $("#listlist").show();
                $("#songlist").hide();
                $("#music").css("color", "white");
            } else {
                document.getElementById("type").innerHTML = "type:<span> projects</span>";
                $("#filter").hide();
                $(".viewb").hide();
                $("#logo").show();
                $("#projectlist").hide();
                $("#listlist").hide();
                $("#songlist").hide();
                $("#music").css("color", "black");
            }
        });

        $("#type").click(function() {
            if ($("#listlist").is(':visible') && $("#music").css("color", "white")) {
                $("#songlist").show();
                $("#listlist").hide();
            } else if ($("#songlist").is(':visible') && $("#music").css("color", "white")) {
                $("#songlist").hide();
                $("#listlist").show();
            }
        });

        $("#version").click(function() {
            if ($(".tersion").is(':visible')) {
                $(".tersion").hide();
            }
            else{
                $(".tersion").show();
            }
        });

        $(document).on('click', '.projectz', function() {
            $(".viewb").hide();
            $("#filter").hide();
            $(".modal-background").show();
            $("#main").hide();
            $("#projectlist").hide();
            $("#listlist").hide();
            /*$("#songlist").hide();
            $("#interviewlist").hide();*/
        });

        $(".songz").click(function() {
            $(".viewb").hide();
            $("#filter").hide();
            $(".modal-background").show();
            $("#main").hide();
            $("#songlist").hide();
            /*$("#songlist").hide();
            $("#interviewlist").hide();*/
        });

        $(".modal-background").click(function() {
            $(".modal-background").hide();
             $("#filter").show();
                $("#searchlist").hide();
                $("#logo").hide();
                $("#listlist").show();
                $("#songlist").hide();
                $("#music").css("color", "white");
        }).children().click(function(e) {
            return false;
        });
    });
    $("#search").keypress(function(e) {
        if (e.which === 13) {
            searchListContents = "arandomstringnoonewouldevertype";
            searchCounter = 0;
            searchContents = document.getElementById("search").value;
            //console.clear();
            while (searchCounter < projects.length) {
                if (projects[searchCounter][0][0].toLowerCase().includes(searchContents.toLowerCase()) == true && searchCounter != projects.length - 1) {
                    searchListContents = searchListContents + "<div style='margin-bottom: 17.5px' class='list-item'><section id='blue" + searchCounter + "' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id=" + projects[searchCounter][7][0] + "'><h2>" + projects[searchCounter][0][0] + "</h2></section></div>";
                } else if (projects[searchCounter][0][0].toLowerCase().includes(searchContents.toLowerCase()) == true && searchCounter == projects.length - 1) {
                    searchListContents = searchListContents + "<div style='margin-bottom: 0px' class='list-item'><section id='blue" + searchCounter + "' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id=" + projects[searchCounter][7][0] + "'><h2>" + projects[searchCounter][0][0] + "</h2></section></div>";
                }
                searchCounter++;
            }
            if (searchListContents == "arandomstringnoonewouldevertype") {
                searchListContents = "<div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no results found</h2></div>";
            }
            searchListContents = searchListContents.replace('arandomstringnoonewouldevertype', '');
            document.getElementById('searchlist').innerHTML = searchListContents;

            $("#searchlist").show();
            $("#projectlist").hide();
            $("#listlist").hide();
            $("#storelist").hide();
            $("#songlist").hide();
            $("#logo").hide();
            $(".filter").show();
            $('form#search').submit();
            return false; //<---- Add this line
        }
    });

}
$(initialize);
