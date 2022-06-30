var input = document.getElementById("search");
var searchContents = "charlie";
var searchListContents = "arandomstringnoonewouldevertype";
var searchCounter = 0;

function initialize() {
    $(document).ready(function() {
        $("#myModal").hide();
        $("#projectlist").hide();
        $("#listlist").hide();
        $("#storelist").hide();
        $("#songlist").hide();
        $("#searchlist").hide();
        $(".modal-description").hide(); //neccisary?
        $("#allpatch").hide();
        $(".viewb").hide();
        $(".tersion").hide();

        $('#music,#logo').click(function() {
            if ($("#listlist").is(':hidden') && $("#searchlist").is(':hidden')) {
                $("#songlist").hide();
                $("#logo").hide();
                $("#listlist").show();
                $("#songlist").hide();
                $("#music").css("color", "white");
                $("#about").css("color", "black");
                $("#myModal").hide();
                $(".viewb").show();
            } else {
                document.getElementById("type").innerHTML = "type:<span> projects</span>";
                $(".viewb").hide();
                $("#logo").show();
                $("#projectlist").hide();
                $("#listlist").hide();
                $("#songlist").hide();
                $("#music").css("color", "black");
                document.getElementById("search").value = "";
            }
            $("#searchlist").hide();
        });

        $("#about").click(function() {
            if ($("#myModal").is(':hidden')) {
                $("#myModal").show();
                $("#about").css("color", "white");
                document.getElementById("type").innerHTML = "type:<span> projects</span>";
                $(".viewb").hide();
                $("#projectlist").hide();
                $("#listlist").hide();
                $("#songlist").hide();
                $("#music").css("color", "black");
                $("#logo").hide();
                $("#searchlist").hide();
                document.getElementById("search").value = "";
            }
            else {
                $("#about").css("color", "black");
                $("#myModal").hide();
                $("#logo").show();
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
        if ($("#searchlist").is(':visible')){
                if (document.getElementById('type').innerHTML.indexOf("projects") != -1) {
                $("#songsearchcontainer").hide();
                $("#projectsearchcontainer").show();
            }
            else{
                $("#songsearchcontainer").show();
                $("#projectsearchcontainer").hide();
            }
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
            $(".modal-background").show();
            $("#main").hide();
            $("#projectlist").hide();
            $("#listlist").hide();
            /*$("#songlist").hide();
            $("#interviewlist").hide();*/
        });

        $(document).on('click', '.songz', function() {
            $(".viewb").hide();
            $(".modal-background").show();
            $("#main").hide();
            $("#songlist").hide();
            /*$("#songlist").hide();
            $("#interviewlist").hide();*/
        });

        $(".modal-background").click(function() {
            $(".modal-background").hide();
             $(".viewb").show();
                $("#searchlist").hide();
                $("#logo").hide();
                $("#music").css("color", "white");
                if (document.getElementById('type').innerHTML.indexOf("projects") != -1) {
                $("#listlist").show();
                $("#songlist").hide();
                }
                else{
                $("#listlist").hide();
                $("#songlist").show();
                }
        }).children().click(function(e) {
            return false;
        });
    });
    $("#search").keypress(function(e) {
        if (e.which === 13) {
            searchListContents = "<div id='projectsearchcontainer'>arandomstringnoonewouldevertype";
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
            searchListContents = searchListContents + "</div><div id ='songsearchcontainer'>";
            searchCounter = 0;
            while (searchCounter < songs.length) {
                if (songs[searchCounter][0][0].toLowerCase().includes(searchContents.toLowerCase()) == true && searchCounter != songs.length - 1) {
                    searchListContents = searchListContents + "<div style='margin-bottom: 17.5px' class='list-item'><section id='blue" + searchCounter + "' class='songz' onclick='songModal(this.id)'><img src='https://drive.google.com/uc?export=view&id=" + songs[searchCounter][6][0] + "'><h2>" + songs[searchCounter][0][0] + "</h2></section></div>";
                } else if (songs[searchCounter][0][0].toLowerCase().includes(searchContents.toLowerCase()) == true && searchCounter == songs.length - 1) {
                    searchListContents = searchListContents + "<div style='margin-bottom: 0px' class='list-item'><section id='blue" + searchCounter + "' class='songz' onclick='songModal(this.id)'><img src='https://drive.google.com/uc?export=view&id=" + songs[searchCounter][6][0] + "'><h2>" + songs[searchCounter][0][0] + "</h2></section></div>";
                }
                searchCounter++;
            }
            searchListContents = searchListContents + "</div>";
            if (searchListContents == "<div id='projectsearchcontainer'>arandomstringnoonewouldevertype</div><div id ='songsearchcontainer'></div>") {
                searchListContents = "<div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no results found</h2></div>";
            }
            searchListContents = searchListContents.replace('arandomstringnoonewouldevertype', '');
            document.getElementById('searchlist').innerHTML = searchListContents;
            if (document.getElementById('searchlist').innerHTML.indexOf('<div id="projectsearchcontainer"></div>') != -1){
                searchListContents = searchListContents.replace("<div id='projectsearchcontainer'></div>", "<div id='projectsearchcontainer'><div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no projects found</h2></div></div>");
            document.getElementById('searchlist').innerHTML = searchListContents;
                }
            else if (document.getElementById('searchlist').innerHTML.indexOf('<div id="songsearchcontainer"></div>') != -1){
                    searchListContents = searchListContents.replace("<div id ='songsearchcontainer'></div>", "<div id ='songsearchcontainer'><div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no songs found</h2></div></div>");
                    document.getElementById('searchlist').innerHTML = searchListContents;
                }

             if (document.getElementById('type').innerHTML.indexOf("projects") != -1 && searchListContents != "<div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no results found</h2></div>") {  
                    $("#songsearchcontainer").hide();
            }
            else if (document.getElementById('type').innerHTML.indexOf("songs") != -1 && searchListContents != "<div style='height: 425px; line-height: 425px; text-align: center; background-color: white;'><h2>no results found</h2></div>"){
                $("#projectsearchcontainer").hide();
            }
            $("#music").css("color", "white");
            $("#searchlist").show();
            $("#projectlist").hide();
            $("#myModal").hide();
            $(".viewb").show();
            $("#listlist").hide();
            $("#storelist").hide();
            $("#songlist").hide();
            $("#logo").hide();
            $('form#search').submit();
            return false; //<---- Add this line
        }
    });

}
$(initialize);
