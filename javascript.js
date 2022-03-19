var projectlistcontents;
         var projectlistlistcontents;
         var projectListListCounter = 0;
         var projectstorelistcontents;
         var projectStoreListCounter = 0;
         var projectListCounter = 0;
         var projectListCounterb = 1;
         var projectListCounterc = 2;
         var projectListCounterd = 3;
         var projectClickCounter = 0;
         var projectversion = 0;
         var totalversions = 0;
         var pversionmatch = 0;
         var pversionlist = "josh"; 
         var projectId = "";
         var songlistcontents;
         var songListCounter = 0;
         var songClickCounter = 0;
         var tracklistCounter = 0;
         var tracklist;
         var songmatcha = 0;
         var songmatchb = 0;
         var songmatchc = 0;
         var songId = "";
         var pimgn = 0;
         var pvimgn = 0;
         var simgn = 0;
         var projects = [
[["MA_DOOM: Son of Yvonne"],  ["album"],  ["07/17/12"],  ["produced it under the moniker DOOM The Metal Fingered Villain"],   ["written by Masta Ace, 'scratched' by Dj Skizz, mixed by Richard 'Filthy Rich' Ahee and Masta Ace, executive produced by Richard 'Filthy Rich' Ahee, Masta Ace, and Robert 'Dj Rob' Alphonse, associate executive produced by Alfred 'Big Benn Klingon' Morgan, with art direction handled by Chimene 'C.C.' Campbell.", "Recorded at ProMixMaster Studios, NYC, released under M3 Records, and manufactured and distributed under Fat Beats Distribution."], ["D Ski's Intro", "Nineteen Seventy Something", "Son of Yvonne", "Da'Pro", "Store Frontin'", "Me and My Gang", "Crush Hour", "Think I Am", "Fresh Fest", "Hoe-Tel Leftovers", "Slow Down", "Home Sweet Home", "Dedication", "I Did It", "In Da Spot", "Outtakes"],    [],   ["https://drive.google.com/uc?export=view&id=17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "https://drive.google.com/uc?export=view&id=1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "https://drive.google.com/uc?export=view&id=16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "https://drive.google.com/uc?export=view&id=1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "https://drive.google.com/uc?export=view&id=1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "https://drive.google.com/uc?export=view&id=11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "https://drive.google.com/uc?export=view&id=1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "https://drive.google.com/uc?export=view&id=1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "https://drive.google.com/uc?export=view&id=17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "https://drive.google.com/uc?export=view&id=1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "https://drive.google.com/uc?export=view&id=1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "https://drive.google.com/uc?export=view&id=1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  ["Cover Art", "CD Cover Art", "CD Cover Art 2", "CD in Casing", "CD Middle Image", "CD Middle Image 2", "CD Middle Image 3", "CD Middle Image 4", "CD Middle Image 5", "CD Back Cover", "CD Back Cover 2", "Vinyl Back Cover"],  [],   [],   ["Images not complete, track 15 missing in some versions"], ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Madvillainy"], ["collaborative album"],   ["03/23/04"],  [],   [],   ["The Illest Villains", "Accordion", "Meat Grinder", "Bistro", "Raid", "America's Most Blunted", "Sickfit", "Rainbows", "Curls", "Do Not Fire!", "Money Folder", "Shadows of Tomorrow", "Operation Lifesaver aka Mint Test", "Figaro", "Hardcore Hustle", "Strange Ways", "Fancy Clown", "Eye", "Supervillain Theme", "All Caps", "Great Day", "Rhinestone Cowboy"],    [],   ["https://drive.google.com/uc?export=view&id=1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["MM..FOOD"], ["album"],  ["11/16/04"],  [],   [],   ["Beef Rap", "Hoe Cakes", "Potholderz", "One Beer", "Deep Fried Frenz", "Poo-Putt Platter", "Fillet-O-Rapper", "Gumbo", "Fig Leaf Bi-Carbonate","Kon Karne", "Guinnesses", "Kon Queso", "Rap Snitch Knishes", "Vomitspit", "Kookies"], [],   ["https://drive.google.com/uc?export=view&id=1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Operation: Doomsday"],  ["album"],  ["10/19/99"],  [],   [],   ["The Time We Faced Doom", "Doomsday", "Rhymes Like Dimes", "The Finest", "Back in the Days", "Go with the Flow", "Tick, Tick...", "Red and Gold", "The Hands of Doom", "Who You Think I Am?", "Doom, Are You Awake?", "Hey!", "Operation: Greenbacks", "The Mic", "The Mystery of Doom", "Dead Bent", "Gas Drawls", "?", "Hero v.s. Villain"], [],   ["https://drive.google.com/uc?export=view&id=114TsRQMswAGB9JLjETNVNW2louXVZKsV"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["BORN LIKE THIS"], ["album"],  ["03/24/09"],  [],   [],   ["SUPERVILLAIN (INTRO)", "GAZZILLION EAR", "BALLSKIN", "YESSIR", "ABSOLUTELY", "RAP AMBUSH", "LIGHTWORKS", "BATTY BOYZ", "ANGELZ", "CELLZ", "STILL DOPE", "MICROWAVE MAYO", "MORE RHYMIN", "THAT'S THAT", "SUPERVILLAINZ", "BUMPY'S MESSAGE", "THANK YA"],  [],   ["https://drive.google.com/uc?export=view&id=1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["THE MOUSE & THE MASK"], ["collaborative album"],   ["10/10/05"],  [],   [],   ["El Chupa Nibre", "Sofa King", "The Mask", "Perfect Hair", "Benzi Box", "Old School Rules", "A.T.H.F. (Aqua Teen Hunger Force)", "Basket Case", "No Names", "Crosshairs", "Mince Meat", "Vats of Urine", "Space Hos", "Bada Bing"],   [],   ["https://drive.google.com/uc?export=view&id=176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Czarface Meets Metal Face"],  ["collaborative album"],   ["03/30/18"],  [],   [],   ["Take Your Medicine", "Meddle with Metal", "Badness of Madness", "Close Talker", "Forever People", "Captain Crunch", "Don't Spoil It", "Phantoms", "Bomb Thrown", "You Masked for It",  "Astral Traveling", "Nautical Depth", "Stun Gun", "MF Czar", "Captain Brunch", "Sleeping Dogs"], [],   ["https://drive.google.com/uc?export=view&id=1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["NEHRUVIANDOOM"],  ["collaborative album"],   ["10/14/07"],  [],   [],   ["Intro", "Om", "Means the Most", "So Alone", "Coming for You", "Darkness", "Caskets", "Great Things", "Disastrous"],   [],   ["https://drive.google.com/uc?export=view&id=1uMV7O5iAkmIwjJhJCvHwdIuXJXIGynrJ"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Take Me To Your Leader"],  ["album"],  ["06/17/03"],  [],   [],   ["Fazers", "Fastlane", "Krazy World", "The Final Hour", "Monster Zero", "Next Levels", "No Snakes Alive", "Anti-Matter", "Take Me To Your Leader", "Lockjaw", "I Wonder", "One Smart N*****", "Fine Print"],   [],   ["https://drive.google.com/uc?export=view&id=19NPt1cOfCBXNyvbY1nzmR2llIFGqq6VF"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Vaudvillle Villain"],   ["album"],  ["09/16/03"],  [],   [],   ["Overture", "Vaudeville Villain", "Lickupon", "The Drop", "Lactose and Lecithin", "A Dead Mouse", "Open Mic Nite, Pt. 1", "Raedawn", "Can I Watch?", "Saliva", "A Modern Day Mugging",  "Open Mic Nite, Pt. 2", "Never Dead", "Popsnot", "Mr. Clean", "G.M.C.", "Untitled A.K.A. Change the Beat"],  [],   ["https://drive.google.com/uc?export=view&id=1VXzgrKiUHgs8giJm11F5C8RwQRR0BC1W"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Key to the Kuffs"],  ["collaborative album"],   ["08/20/12"],  [],   [],   ["Waterlogged", "Guv'nor", "Bite the Thong", "Rhymin Slang", "Dawg Friendly", "Borin Convo", "Snatch That Dough", "Gmo", "Bout the Shoes", "Winter Blues", "Still Kaps", "Retarded Fren", "Viberian Sun, Pt. 2", "Wash Your Hands"],   [],   ["https://drive.google.com/uc?export=view&id=1bmWsCymXpbqBMTAYVkMbVUYj0OgFnhA5"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Super What?"], ["collaborative album"],   ["05/07/21"],  [],   [],   ["The King and Eye", "Czarwyn's Theory of People Getting Loose", "Mando Calrissian", "DOOM Unto Others", "Jason & The Czargonauts", "Break in the Action", "A Name to the Face", "This is Canon Now", "So Strange", "Young World"], [],   ["https://drive.google.com/uc?export=view&id=1wAcBcHhFJEAOnkedhX88XiRq7lgZCiTj"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Mr. Hood"], ["collaborative album"],   ["05/14/91"],  [],   [],   ["Mr. Hood at Piocallee Jewelry / Crackpot", "Who Me? (With an Answer from Dr. Bert)", "Boogie Man!", "Mr. Hood Meets Onyx", "Subrocs Mission", "Humrush", "Figure of Speech", "Bananapeel Blues", "Nitty Gritty", "Trial 'N' Error", "Hard wit No Hoe", "Mr. Hood Gets a Haircut", "808 Man", "Boy Who Cried Wolf", "Peachfuzz", "Preacher Porkchop", "Soulflexin'", "Gasface Refill"],  [],   ["https://drive.google.com/uc?export=view&id=1sSIA-MKbs_uvPtpN1ioXoP4fvbN2FNPO"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Unexpected Guests"], ["compilation album"],  ["05/14/91"],  [],   [],   ["Fly That Knot", "Sniper Elite", "Yikes", "Sorcerers", "Da Supafriendz", "Quite Buttery", "?", "All Outta Ale", "E.N.Y. House", "Bells of DOOM", "My Favorite Ladies", "Street Corners (DOOM Remix)", "Angels", "Fire Wood Drumstykx", "The Unexpected", "Project Jazz", "Black Gold", "I Hear Voices"],   [],   ["https://drive.google.com/uc?export=view&id=1iCeDKxzhXXd8I8IZRF6lQGzQyr2r3wTy"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Expektoration Live"],   ["live album"],   ["09/14/10"],  [],   [],   ["Act 1", "Intermission", "Act 2"], [],   ["https://drive.google.com/uc?export=view&id=1bZRBWvQtGfGTP2CWiB3D-r_3jTGVRMwg"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Live from Planet X"],   ["live album"],   ["03/05/05"],  [],   [],   ["Live from Planet X"], [],   ["https://drive.google.com/uc?export=view&id=1KMqO8mKMwdjy2auaZQ887V8NABEE52aY"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Black Bastards"], ["album"],  ["05/15/00"],  [],   [],   ["Garbage Day #3", "Get-U-Now", "What a N**** Know?", "Sweet Premium Wine", "Plumskinnz (Loose Hoe, God & Cupid)", "Smokin' That S*@%!", "Contact Blitz", "Gimme", "Black Bastards!", "It Sounded Like a Roc!", "Plumskinnz (Oh No I Don't Believe It)", "Constipated Monkey", "F*@# Wit' Ya Head!!", "Suspended Animation"], [],   ["https://drive.google.com/uc?export=view&id=1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Escape from Monsta Island!"], ["collaborative album"],   ["02/18/03"],  [],   [],   ["What's The Name Of This Place?", "M.I.N.Y.A.", "F@#K Y'All N!@@#s", "WitchCraft", "1,2... 1,2", "Scientific Civilization (Skit)", "MIC Line", "Poizon Windz", "Under Pressure", "Became A Monsta", "There's A Legend (Skit)", "Out My Mind", "Warning", "Make It Squash! (Got A Roc)", "Gunz 'N' Swordz", "Sumthin' To Prove", "Live Son Of A B*tch (Skit)", "Comin' At You", "Take Control", "Escape From Monsta Isle"],   [],   ["https://drive.google.com/uc?export=view&id=1Kxql747nyqCs_FJcjcvsMEhmvZFGNO-5"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],
[["Occult Hymn"], ["collaborative EP"],   ["05/30/06"],  [],   [],   ["Skit 1", "El Chupa Nibre Remix", "Perfect Hair II", "Korn Dogz", "Skit 2", "Sofa King Remix", "Space Ho's (Madlib Remix)"], [],   ["https://drive.google.com/uc?export=view&id=1qDy7__nNCY-PJObysMMCQC5bE77Hm9qr"],   ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], []],                                      
         ];
    while (projectversion < projects.length){
            if (typeof projects[projectversion][13][0] !== 'undefined'){
               totalversions++;
            }
            projectversion++;
         }
pversionmatch = (projects.length-totalversions);


         var songs = [
            [["D Ski's Intro"], [], ["07/17/12"], [],   [],   [],   ["https://drive.google.com/uc?export=view&id=17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "https://drive.google.com/uc?export=view&id=1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "https://drive.google.com/uc?export=view&id=16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "https://drive.google.com/uc?export=view&id=1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "https://drive.google.com/uc?export=view&id=1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "https://drive.google.com/uc?export=view&id=11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "https://drive.google.com/uc?export=view&id=1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "https://drive.google.com/uc?export=view&id=1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "https://drive.google.com/uc?export=view&id=17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "https://drive.google.com/uc?export=view&id=1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "https://drive.google.com/uc?export=view&id=1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "https://drive.google.com/uc?export=view&id=1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
            [["Nineteen Seventy Something"], [], ["07/17/12"], [],   [],   [],   ["https://drive.google.com/uc?export=view&id=17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "https://drive.google.com/uc?export=view&id=1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "https://drive.google.com/uc?export=view&id=16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "https://drive.google.com/uc?export=view&id=1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "https://drive.google.com/uc?export=view&id=1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "https://drive.google.com/uc?export=view&id=11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "https://drive.google.com/uc?export=view&id=1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "https://drive.google.com/uc?export=view&id=1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "https://drive.google.com/uc?export=view&id=17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "https://drive.google.com/uc?export=view&id=1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "https://drive.google.com/uc?export=view&id=1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "https://drive.google.com/uc?export=view&id=1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
            [["Son of Yvonne"],  [],   ["07/17/12"],  [],   [],   [],   ["https://drive.google.com/uc?export=view&id=17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "https://drive.google.com/uc?export=view&id=1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "https://drive.google.com/uc?export=view&id=16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "https://drive.google.com/uc?export=view&id=1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "https://drive.google.com/uc?export=view&id=1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "https://drive.google.com/uc?export=view&id=11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "https://drive.google.com/uc?export=view&id=1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "https://drive.google.com/uc?export=view&id=1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "https://drive.google.com/uc?export=view&id=17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "https://drive.google.com/uc?export=view&id=1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "https://drive.google.com/uc?export=view&id=1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "https://drive.google.com/uc?export=view&id=1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
         ];

    while (songmatcha < songs.length){
            songmatchb = 0;
            while (songmatchb < projects.length){
                  songmatchc = 0;
               while (songmatchc < projects[songmatchb][5].length){
                     if (songs[songmatcha][0][0] == projects[songmatchb][5][songmatchc]){
                     projects[songmatchb][5][songmatchc] =  "<span class='songz' id='berry"+songmatcha+songmatchb+songmatchc+"' onclick='songModal(this.id)'>"+projects[songmatchb][5][songmatchc]+"</span>"//this line right here
                     }
                  songmatchc++;
               }
               songmatchb++;
            }
            songmatcha++;
         }
songmatcha = 0;
while (songmatcha < songs.length){
         songmatchb = 0;
            while (songmatchb < projects.length){
                  songmatchc = 0;
               while (songmatchc < projects[songmatchb][5].length){
                     if (projects[songmatchb][5][songmatchc].includes("berry")){}
   else {
      projects[songmatchb][5][songmatchc] = "<span style='color:grey'>"+projects[songmatchb][5][songmatchc]+"</span>";
   }
                  songmatchc++;
               }
               songmatchb++;
            }
            songmatcha++;
}   
         function projectListList(){
            while (projectListListCounter < (projects.length-totalversions)) {
               if (projectListListCounter == (projects.length-totalversions)-1){
                 projectlistlistcontents = projectlistlistcontents + "<div style='margin-bottom: 0px'  class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               else if (projectListListCounter == 0){
                  projectlistlistcontents = "<div style='margin-bottom: 17.5px' class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               else{
                  projectlistlistcontents = projectlistlistcontents+"<div style='margin-bottom: 17.5px' class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               projectListListCounter++;
            }
         /*17.5 for margin-bottom*/
         document.getElementById('listlist').innerHTML = projectlistlistcontents;
         }
          function projectStoreList(){
            while (projectStoreListCounter < (projects.length-totalversions)) {
               if (projectStoreListCounter == (projects.length-totalversions)-1){
                 projectstorelistcontents = projectstorelistcontents + "<div style='margin-bottom: 0px'  class='store-item'><section id='project"+projectStoreListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectStoreListCounter][7][0]+"'><h2>"+projects[projectStoreListCounter][0][0]+"</h2></section></div>";
               }
               else if (projectStoreListCounter == 0){
                  projectstorelistcontents = "<div style='margin-bottom: 17.5px' class='store-item'><section id='project"+projectStoreListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectStoreListCounter][7][0]+"'><h2>"+projects[projectStoreListCounter][0][0]+"</h2></section></div>";
               }
               else{
                  projectstorelistcontents = projectstorelistcontents+"<div style='margin-bottom: 17.5px' class='store-item'><section id='project"+projectStoreListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectStoreListCounter][7][0]+"'><h2>"+projects[projectStoreListCounter][0][0]+"</h2></section></div>";
               }
               projectStoreListCounter++;
            }
         /*17.5 for margin-bottom*/
         document.getElementById('storelist').innerHTML = projectstorelistcontents;
         }
            function projectList(){
             while (projectListCounter < (projects.length-totalversions)) {
         if (projectListCounterd < (projects.length-totalversions) && projectListCounter < (projects.length-totalversions) && projectListCounterb < (projects.length-totalversions) && projectListCounterc < (projects.length-totalversions)) { //all rows except the last one        
          if (projectlistcontents == null){
          projectlistcontents = "<div class='grid-containera'><div class='grid-item' style='margin-right:70px; margin-top: 10px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px; margin-top: 10px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div><div class='grid-item' style='margin-top: 10px;'><section id='project"+projectListCounterc+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterc][7][0]+"'><h2>"+projects[projectListCounterc][0][0]+"</h2></section></div></div>";
         }
         else{
             projectlistcontents = projectlistcontents+"<div class='grid-containera'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div><div class='grid-item'><section id='project"+projectListCounterc+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterc][7][0]+"'><h2>"+projects[projectListCounterc][0][0]+"</h2></section></div></div>";
         }}
         
      //fix!!!!!   
         else if (projectListCounterd >= (projects.length-totalversions) && projectListCounter < (projects.length-totalversions) && projectListCounterb < (projects.length-totalversions) && projectListCounterc < (projects.length-totalversions)){ //the last row if it has 3 images
                
            if(projectlistcontents == null){
                projectlistcontents = "<div class='grid-containerb'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div><div class='grid-item'><section id='project"+projectListCounterc+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterc][7][0]+"'><h2>"+projects[projectListCounterc][0][0]+"</h2></section></div></div>";
             }
            else{
               projectlistcontents = projectlistcontents + "<div class='grid-containera'><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div><div class='grid-item'><section id='project"+projectListCounterc+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterc][7][0]+"'><h2>"+projects[projectListCounterc][0][0]+"</h2></section></div></div>";
            }}
         
           else if (projectListCounterd >= (projects.length-totalversions) && projectListCounter < (projects.length-totalversions) && projectListCounterb < (projects.length-totalversions) && projectListCounterc >= (projects.length-totalversions)){ //the last row if it has 3 images
                
            if(projectlistcontents == null){
                projectlistcontents = "<div class='grid-containerb'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div></div>";
            }
            else{
               projectlistcontents = projectlistcontents + "<div class='grid-containerb'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div><div class='grid-item' style='margin-right:70px;'><section id='project"+projectListCounterb+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounterb][7][0]+"'><h2>"+projects[projectListCounterb][0][0]+"</h2></section></div></div>";
            }}
         
         
            else if (projectListCounterd >= (projects.length-totalversions) && projectListCounter < (projects.length-totalversions) && projectListCounterb >= (projects.length-totalversions) && projectListCounterc >= (projects.length-totalversions)){ //the last row if it has 3 images
                
            if(projectlistcontents == null){
                projectlistcontents = "<div class='grid-containerb'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div></div>";
            }
            else{
               projectlistcontents = projectlistcontents + "<div class='grid-containerb'><div class='grid-item' style='margin-right:70px;' ><section id='project"+projectListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='"+projects[projectListCounter][7][0]+"'><h2>"+projects[projectListCounter][0][0]+"</h2></section></div></div>";
            }}
         
         projectListCounter = projectListCounter+3;
         projectListCounterb= projectListCounterb+3;
         projectListCounterc= projectListCounterc+3;
         projectListCounterd= projectListCounterd+3;
         
         }
         document.getElementById('projectlist').innerHTML = projectlistcontents;
         }

          function songList(){
            while (songListCounter < songs.length) {
               if (songListCounter == songs.length-1){
                 songlistcontents = songlistcontents + "<div style='margin-bottom: 0px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='"+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               else if (songListCounter == 0){
                  songlistcontents = "<div style='margin-bottom: 17.5px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='"+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               else{
                  songlistcontents = songlistcontents + "<div style='margin-bottom: 17.5px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='"+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               songListCounter++;
            }
            document.getElementById('songlist').innerHTML = songlistcontents;
         }
         
         function projectleft(){
            if (projects[projectClickCounter][7][pimgn-1] == null){pimgn = projects[projectClickCounter][7].length-1;}
            else {pimgn=pimgn-1;}
         
            document.getElementById('pimageSlideshow').innerHTML = "<img src='"+projects[projectClickCounter][7][pimgn]+"' class='img' /></a>";
            document.getElementById('pimageCaption').innerHTML = projects[projectClickCounter][8][pimgn];
         }
         function projectright(){
                      if (projects[projectClickCounter][7][pimgn+1] == null){pimgn = 0;}
            else {pimgn=pimgn+1;}
            document.getElementById('pimageSlideshow').innerHTML = "<img src='"+projects[projectClickCounter][7][pimgn]+"' class='img' />";
             document.getElementById('pimageCaption').innerHTML = projects[projectClickCounter][8][pimgn];
         }
         
            function projectModal(clicked_id){
               pversionlist ="";
               pversionmatch = 0;
               if(clicked_id.includes("berry")){
               projectId = document.getElementById(clicked_id).innerHTML;
            }
            else{
               projectId = document.getElementById(clicked_id).childNodes[1].innerHTML;
            }
            projectClickCounter = 0;
               while (projectId != projects[projectClickCounter][0][0]){
                  projectClickCounter++;// the problem
                  if (projectClickCounter >= projects.length) {
                     projectClickCounter = 0;}}

                     while (pversionmatch < projects.length){
                     if (projects[pversionmatch][13][0] == projects[projectClickCounter][0][0]){
                        pversionlist = pversionlist + "<span id='berry"+pversionmatch+"' class='projectz' onclick='projectModal(this.id)'>" + projects[pversionmatch][0][0] + "</span>";
                     }
                     pversionmatch++;
                  }
                  pversionlist = pversionlist.replace('josh', '');
                  if (pversionlist != ""){
                  pversionlist = "<button class='modal-item'>versions<span class='modal-down'>+</span></button><div class='panel listen'><p style='margin-top:0px;'>"+pversionlist+"</p></div>";
               }

                     tracklistCounter = 0;
               while (tracklistCounter < projects[projectClickCounter][5].length){
                  if (tracklistCounter == 0){
                tracklist = "0"+(tracklistCounter+1)+". "+"<span class='tracklistz' style='font-weight: bold;'>"+projects[projectClickCounter][5][tracklistCounter]+"</span><br>"; }
                else if (9>tracklistCounter>0){
                  tracklist =  tracklist+" 0"+(tracklistCounter+1)+". "+"<span class='tracklistz' style='font-weight: bold;'>"+projects[projectClickCounter][5][tracklistCounter]+"</span><br>";}
             else{
                tracklist =  tracklist+(tracklistCounter+1)+". "+"<span class='tracklistz' style='font-weight: bold;'>"+projects[projectClickCounter][5][tracklistCounter]+"</span><br>";}
               tracklistCounter++; }
               var vowel;
               var vowelIndex = "^[aieouAIEOU].*";
               if (projects[projectClickCounter][1][0].charAt(0).match(vowelIndex)){vowel = "an";}
               else { vowel = "a";}

              plistencontents = "caleb";
               if (projects[projectClickCounter][12][0] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][0]+"'>spotify</a></span>";}
               if (projects[projectClickCounter][12][1] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][1]+"'>compact disc</a></span>";}
               if (projects[projectClickCounter][12][2] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][2]+"'>apple</a></span>";}
               if (projects[projectClickCounter][12][3] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][3]+"'>deezer</a></span>";}
               if (projects[projectClickCounter][12][4] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][4]+"'>vinyl</a></span>";}
               if (projects[projectClickCounter][12][5] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][5]+"'>soundcloud</a></span>";}
               if (projects[projectClickCounter][12][6] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][6]+"'>cassette</a></span>";}
               if (projects[projectClickCounter][12][7] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][7]+"'>digital</a></span>";}
              plistencontents = plistencontents.replace('caleb', '');
         
               document.getElementById('modal-content').innerHTML = "<div class='modal-title'>"+projects[projectClickCounter][0][0]+"</div>"+pversionlist+"<button class='modal-item'>description<span class='modal-down'>+</span></button><div class='panel'><p><b>"+projects[projectClickCounter][0][0]+"</b> is "+vowel+" "+projects[projectClickCounter][1][0]+" that released on "+projects[projectClickCounter][2][0]+" with a runtime of "+projects[projectClickCounter][6][0]+". DOOM "+projects[projectClickCounter][3][0]+".<br><br>The project was "+projects[projectClickCounter][4][0]+"<br><br>"+projects[projectClickCounter][4][1]+"</p></div><button class='modal-item'>tracklist<span class='modal-down'>+</span></button><div class='panel'><p>"+tracklist+"</p></div><button class='modal-item'>images<span class='modal-down'>+</span></button><div class='panel' style='font-weight: bold;'><div class='cover'><button type='button' class='btn' onclick='projectleft()'>&#10094;</button><div id='pimageSlideshow'><img src='"+projects[projectClickCounter][7][pimgn]+"' class='img' /></div><button  type='button' class='btn' onclick='projectright()'>&#10095;</button></div><p class='cover-text' id='pimageCaption'>"+projects[projectClickCounter][8][pimgn]+"</p></div><button class='modal-item'>attached media<span class='modal-down'>+</span></button><div class='panel'><p>content</p></div><button class='modal-item'>additional notes<span class='modal-down'>+</span></button><div class='panel'><p>"+projects[projectClickCounter][11][pimgn]+"</p></div><button class='modal-item'>listen<span class='modal-down'>+</span></button><div class='panel listen'><p style='margin-top:0px;'>"+plistencontents+"</p></div>";

               document.getElementById('modal-content').innerHTML = document.getElementById('modal-content').innerHTML.replaceAll('undefined', '<b style="background-color:black;">undefined</b>');
         
               var acc = document.getElementsByClassName("modal-item");
                     var allplus = null;
                    var plus = null;
         for (i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function() {
         
         for (let j = 0; j < acc.length; j++) {
         if(j!=i){     
             acc[j].classList.remove("active");
         acc[j].nextElementSibling.style.maxHeight = null;
         allplus = acc[j].querySelector('.modal-down');
         allplus.innerHTML = "+";
         }
         }
             this.classList.toggle("active");
             var panel = this.nextElementSibling;
            plus = this.querySelector('.modal-down');
         
             if (panel.style.maxHeight) {
               plus.innerHTML = "+";
               panel.style.maxHeight = null;
             } else {
               plus.innerHTML = "-";
               panel.style.maxHeight = panel.scrollHeight + "px";
             } 
           });
         }
            }

        /*  function songleft(){
            if (songs[songClickCounter][5][simgn-1] == null){simgn = songs[songClickCounter][5].length-1;}
            else {simgn=simgn-1;}
         
            document.getElementById('simageSlideshow').innerHTML = "<img src='"+songs[songClickCounter][7][simgn]+"' class='img' /></a>";
            document.getElementById('simageCaption').innerHTML = songs[songClickCounter][6][simgn];
         }
         function songright(){
                      if (songs[songClickCounter][5][simgn+1] == null){simgn = 0;}
            else {simgn=simgn+1;}
            document.getElementById('imageSlideshow').innerHTML = "<img src='"+songs[songClickCounter][7][simgn]+"' class='img' />";
             document.getElementById('imageCaption').innerHTML = songs[songClickCounter][6][simgn];
         }*/

         function songModal(clicked_id){
         if(clicked_id.includes("berry")){
               songId =  document.getElementById(clicked_id).innerHTML;
            }
            else{
               songId = document.getElementById(clicked_id).childNodes[1].innerHTML;
            }
               while (songId != songs[songClickCounter][0][0]){
                  songClickCounter++;
                    if (songClickCounter >= songs.length) {
                     songClickCounter = 0;}
               }

               var vowel;
               var vowelIndex = "^[aieouAIEOU].*";
               if (songs[songClickCounter][2][0].charAt(0).match(vowelIndex)){vowel = "an";}
               else { vowel = "a";}
              slistencontents = "caleb";
               if (songs[songClickCounter][11][0] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][0]+"'>spotify</a></span>";}
               if (songs[songClickCounter][11][1] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][1]+"'>compact disc</a></span>";}
               if (songs[songClickCounter][11][2] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][2]+"'>apple</a></span>";}
               if (songs[songClickCounter][11][3] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][3]+"'>deezer</a></span>";}
               if (songs[songClickCounter][11][4] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][4]+"'>vinyl</a></span>";}
               if (songs[songClickCounter][11][5] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][5]+"'>soundcloud</a></span>";}
               if (songs[songClickCounter][11][6] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][6]+"'>cassette</a></span>";}
               if (songs[songClickCounter][11][7] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][7]+"'>digital</a></span>";}

              slistencontents = slistencontents.replace('caleb', '');
         
               document.getElementById('modal-content').innerHTML = "<div class='modal-title'>"+songs[songClickCounter][0][0]+"</div><button class='modal-item'>description<span class='modal-down'>+</span></button><div class='panel'><p><b>"+songs[songClickCounter][0][0]+"</b> released on "+songs[songClickCounter][2][0]+". DOOM "+songs[songClickCounter][3][0]+".<br><br>The song was "+songs[songClickCounter][4][0]+"<br><br>"+songs[songClickCounter][5][1]+"</p></div><button class='modal-item'>images<span class='modal-down'>+</span></button><div class='panel' style='font-weight: bold;'><div class='cover'><button type='button' class='btn left' onclick='songleft()'>&#10094;</button><div id='imageSlideshow'><img src='"+songs[songClickCounter][6][simgn]+"' class='img' /></div><button type='button' class='btn right' onclick='songright()'>&#10095;</button></div><p class='cover-text' id='imageCaption'>"+songs[songClickCounter][7][simgn]+"</p></div><button class='modal-item'>attached media<span class='modal-down'>+</span></button><div class='panel'><p>content</p></div><button class='modal-item'>additional notes<span class='modal-down'>+</span></button><div class='panel'><p>"+songs[songClickCounter][10][simgn]+"</p></div><button class='modal-item'>listen<span class='modal-down'>+</span></button><div class='panel listen'><p style='margin-top:0px;'>"+slistencontents+"</p></div>";
         
               var acc = document.getElementsByClassName("modal-item");
                     var allplus = null;
                    var plus = null;
         for (i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function() {
         
         for (let j = 0; j < acc.length; j++) {
         if(j!=i){     
             acc[j].classList.remove("active");
         acc[j].nextElementSibling.style.maxHeight = null;
         allplus = acc[j].querySelector('.modal-down');
         allplus.innerHTML = "+";
         }
         }
             this.classList.toggle("active");
             var panel = this.nextElementSibling;
            plus = this.querySelector('.modal-down');
         
             if (panel.style.maxHeight) {
               plus.innerHTML = "+";
               panel.style.maxHeight = null;
             } else {
               plus.innerHTML = "-";
               panel.style.maxHeight = panel.scrollHeight + "px";
             } 
           });
         }
            } 
