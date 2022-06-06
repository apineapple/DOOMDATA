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
[["MA_DOOM: Son of Yvonne"],  ["album"],  ["07/17/12"],  ["produced it under the moniker DOOM The Metal Fingered Villain"],   ["Written by Masta Ace, 'scratched' by Dj Skizz, mixed by Richard 'Filthy Rich' Ahee and Masta Ace, executive produced by Richard 'Filthy Rich' Ahee, Masta Ace, and Robert 'Dj Rob' Alphonse, associate executive produced by Alfred 'Big Benn Klingon' Morgan, with art direction handled by Chimene 'C.C.' Campbell.", "Recorded at ProMixMaster Studios, NYC, released under M3 Records, and manufactured and distributed under Fat Beats Distribution."], ["D Ski's Intro", "Nineteen Seventy Something", "Son of Yvonne", "Da'Pro", "Store Frontin'", "Me and My Gang", "Crush Hour", "Think I Am", "Fresh Fest", "Hoe-Tel Leftovers", "Slow Down", "Home Sweet Home", "Dedication", "I Did It", "In Da Spot", "Outtakes"],   ["39:37"],  ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  ["Cover Art", "CD Cover Art", "CD Cover Art 2", "CD in Casing", "CD Middle Image", "CD Middle Image 2", "CD Middle Image 3", "CD Middle Image 4", "CD Middle Image 5", "CD Back Cover", "CD Back Cover 2", "Vinyl Back Cover"],  [],   [],   ["Images not complete, track 15 missing in some versions"], ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   ["Masta Ace"]],
[["Madvillainy"], ["collaborative album"],   ["03/23/04"],  [],   [],   ["The Illest Villains", "Accordion", "Meat Grinder", "Bistro", "Raid", "America's Most Blunted", "Sickfit", "Rainbows", "Curls", "Do Not Fire!", "Money Folder", "Shadows of Tomorrow", "Operation Lifesaver aka Mint Test", "Figaro", "Hardcore Hustle", "Strange Ways", "Fancy Clown", "Eye", "Supervillain Theme", "All Caps", "Great Day", "Rhinestone Cowboy"],    [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["MM..FOOD"], ["album"],  ["11/16/04"],  [],   [],   ["Beef Rap", "Hoe Cakes", "Potholderz", "One Beer", "Deep Fried Frenz", "Poo-Putt Platter", "Fillet-O-Rapper", "Gumbo", "Fig Leaf Bi-Carbonate", "Kon Karne", "Guinnesses", "Kon Queso", "Rap Snitch Knishes", "Vomitspit", "Kookies"],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Operation: Doomsday"],  ["album"],  ["10/19/99"],  [],   [],   ["The Time We Faced Doom", "Doomsday", "Rhymes Like Dimes", "The Finest", "Back in the Days", "Go with the Flow", "Tick, Tick...", "Red and Gold", "The Hands of Doom", "Who You Think I Am?", "Doom, Are You Awake?", "Hey!", "Operation: Greenbacks", "The Mic", "The Mystery of Doom", "Dead Bent", "Gas Drawls", "?", "Hero v.s. Villain"], [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["BORN LIKE THIS"], ["album"],  ["03/24/09"],  ["rapped under the moniker DOOM, executive produced it as Daniel Dumile, and mixed it as Danielle Dumile as a member of 3 Kingz (comprised of Daniel Dumile, Terrence Cash, Morgan Garcia)"],   ["Executive Produced by Daniel and Jasmine Dumile, mixed by 3 Kingz (comprised of Daniel Dumile, Terrence Cash, Morgan Garcia), mastered by Morgan Garcia, with art direction handled by EHQuestionmark."], ["SUPERVILLAIN (INTRO)", "GAZZILLION EAR", "BALLSKIN", "YESSIR", "ABSOLUTELY", "RAP AMBUSH", "LIGHTWORKS", "BATTY BOYZ", "ANGELZ", "CELLZ", "STILL DOPE", "MICROWAVE MAYO", "MORE RHYMIN", "THAT'S THAT", "SUPERVILLAINZ", "BUMPY'S MESSAGE", "THANK YA"],  ["40:34"],  ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], ["Cover Art"], [],   [],   ["If anyone is able to recover doombornlikethis.com please let me know."], ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   ["DOOM"]],
[["THE MOUSE THE MASK"],   ["collaborative album"],   ["10/10/05"],  [],   [],   ["El Chupa Nibre", "Sofa King", "The Mask", "Perfect Hair", "Benzi Box", "Old School Rules", "A.T.H.F. (Aqua Teen Hunger Force)", "Basket Case", "No Names", "Crosshairs", "Mince Meat", "Vats of Urine", "Space Hos", "Bada Bing"],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Czarface Meets Metal Face"],  ["collaborative album"],   ["03/30/18"],  [],   [],   ["Take Your Medicine", "Meddle with Metal", "Badness of Madness", "Close Talker", "Forever People", "Captain Crunch", "Don't Spoil It", "Phantoms", "Bomb Thrown", "You Masked for It",  "Astral Traveling", "Nautical Depth", "Stun Gun", "MF Czar", "Captain Brunch", "Sleeping Dogs"], [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["NEHRUVIANDOOM"],  ["collaborative album"],   ["10/14/07"],  [],   [],   ["Intro", "Om", "Means the Most", "So Alone", "Coming for You", "Darkness", "Caskets", "Great Things", "Disastrous"],   [],   ["1uMV7O5iAkmIwjJhJCvHwdIuXJXIGynrJ"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Take Me To Your Leader"],  ["album"],  ["06/17/03"],  [],   [],   ["Fazers", "Fastlane", "Krazy World", "The Final Hour", "Monster Zero", "Next Levels", "No Snakes Alive", "Anti-Matter", "Take Me To Your Leader", "Lockjaw", "I Wonder", "One Smart N*****", "Fine Print"],   [],   ["19NPt1cOfCBXNyvbY1nzmR2llIFGqq6VF"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Vaudvillle Villain"],   ["album"],  ["09/16/03"],  [],   [],   ["Overture", "Vaudeville Villain", "Lickupon", "The Drop", "Lactose and Lecithin", "A Dead Mouse", "Open Mic Nite, Pt. 1", "Raedawn", "Can I Watch?", "Saliva", "A Modern Day Mugging",  "Open Mic Nite, Pt. 2", "Never Dead", "Popsnot", "Mr. Clean", "G.M.C.", "Untitled A.K.A. Change the Beat"],  [],   ["1VXzgrKiUHgs8giJm11F5C8RwQRR0BC1W"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Key to the Kuffs"],  ["collaborative album"],   ["08/20/12"],  [],   [],   ["Waterlogged", "Guv'nor", "Bite the Thong", "Rhymin Slang", "Dawg Friendly", "Borin Convo", "Snatch That Dough", "Gmo", "Bout the Shoes", "Winter Blues", "Still Kaps", "Retarded Fren", "Viberian Sun, Pt. 2", "Wash Your Hands"],   [],   ["1bmWsCymXpbqBMTAYVkMbVUYj0OgFnhA5"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Super What?"], ["collaborative album"],   ["05/07/21"],  [],   [],   ["The King and Eye", "Czarwyn's Theory of People Getting Loose", "Mando Calrissian", "DOOM Unto Others", "Jason & The Czargonauts", "Break in the Action", "A Name to the Face", "This is Canon Now", "So Strange", "Young World"], [],   ["1wAcBcHhFJEAOnkedhX88XiRq7lgZCiTj"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Mr. Hood"], ["collaborative album"],   ["05/14/91"],  [],   [],   ["Mr. Hood at Piocallee Jewelry / Crackpot", "Who Me? (With an Answer from Dr. Bert)", "Boogie Man!", "Mr. Hood Meets Onyx", "Subrocs Mission", "Humrush", "Figure of Speech", "Bananapeel Blues", "Nitty Gritty", "Trial 'N' Error", "Hard wit No Hoe", "Mr. Hood Gets a Haircut", "808 Man", "Boy Who Cried Wolf", "Peachfuzz", "Preacher Porkchop", "Soulflexin'", "Gasface Refill"],  [],   ["1sSIA-MKbs_uvPtpN1ioXoP4fvbN2FNPO"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Venomous Villain"],  ["collaborative album"],   ["08/03/04"],  [],   [],   ["Viktomizer", "Back End", "Fall Back/Titty Fat", "DOOM on Vik", "R.A.P. G.A.M.E.", "Dope Skiller", "Haberdashery (Interlude)", "Ode to Road Rage", "Bloody Chain", "Strange New Day (Interlude)", "Pop Quiz (Bonus Extra Gredi Remix)"], [],   ["1Ktou7_AIGKS8hm63rJwkmxclsGPddBu1"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Unexpected Guests"], ["compilation album"],  ["05/14/91"],  [],   [],   ["Fly That Knot", "Sniper Elite", "Yikes", "Sorcerers", "Da Supafriendz", "Quite Buttery", "?", "All Outta Ale", "E.N.Y. House", "Bells of DOOM", "My Favorite Ladies", "Street Corners (DOOM Remix)", "Angels", "Fire Wood Drumstykx", "The Unexpected", "Project Jazz", "Black Gold", "I Hear Voices"],   [],   ["1iCeDKxzhXXd8I8IZRF6lQGzQyr2r3wTy"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Expektoration Live"],   ["live album"],   ["09/14/10"],  [],   [],   ["Act 1", "Intermission", "Act 2"], [],   ["1bZRBWvQtGfGTP2CWiB3D-r_3jTGVRMwg"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Live from Planet X"],   ["live album"],   ["03/05/05"],  [],   [],   ["Live from Planet X"], [],   ["1KMqO8mKMwdjy2auaZQ887V8NABEE52aY"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Who Is This Man?"],  ["album"],  ["11/14/08"],  [],   [],   [],   [],   ["17ur9AuwoH-E5BvGl0zDfSeZxF4QwRofw"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Black Bastards"], ["collaborative album"],   ["05/15/00"],  [],   [],   ["Garbage Day #3", "Get-U-Now", "What a N**** Know?", "Sweet Premium Wine", "Plumskinnz (Loose Hoe, God & Cupid)", "Smokin' That S*@%!", "Contact Blitz", "Gimme", "Black Bastards!", "It Sounded Like a Roc!", "Plumskinnz (Oh No I Don't Believe It)", "Constipated Monkey", "F*@# Wit' Ya Head!!", "Suspended Animation"], [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Escape from Monsta Island!"], ["collaborative album"],   ["02/18/03"],  [],   [],   ["What's The Name Of This Place?", "M.I.N.Y.A.", "F@#K Y'All N!@@#s", "WitchCraft", "1,2... 1,2", "Scientific Civilization (Skit)", "MIC Line", "Poizon Windz", "Under Pressure", "Became A Monsta", "There's A Legend (Skit)", "Out My Mind", "Warning", "Make It Squash! (Got A Roc)", "Gunz 'N' Swordz", "Sumthin' To Prove", "Live Son Of A B*tch (Skit)", "Comin' At You", "Take Control", "Escape From Monsta Isle"],   [],   ["1Kxql747nyqCs_FJcjcvsMEhmvZFGNO-5"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Occult Hymn"], ["collaborative EP"],   ["05/30/06"],  [],   [],   ["Skit 1", "El Chupa Nibre Remix", "Perfect Hair II", "Korn Dogz", "Skit 2", "Sofa King Remix", "Space Ho's (Madlib Remix)"], [],   ["1qDy7__nNCY-PJObysMMCQC5bE77Hm9qr"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["MF"], ["collaborative EP"],   ["11/28/00"],  [],   [],   ["Doomsday (Remix)", "No Snakes Alive", "The Original (Remix)", "Brake Em Off", "Dedicated", "The Original", "Doomsday (Remix) (Instrumental)", "No Snakes Alive (Instrumental)", "Impostas (Instrumental)", "The Original (Remix) (Instrumental)", "Break Em Off (Instrumental)", "Dedicated (Instrumental)", "The Original (Instrumental)"],  [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["WestSide DOOM"],  ["collaborative EP"],   ["10/13/17"],  [],   [],   ["Gorilla Monsoon", "2 Stings"], [],   ["1wgArzVKShW0UmfD65lmuw8rqioEEWVT0"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 1"],   ["instrumental album"], ["??/??/01"],  [],   [],   ["Saffron", "Arrow Root", "Zatar", "Fenugreek", "Sumac Berries", "Coriander", "Shallots", "Charnsuka", "Monosodium Glutamate"],  [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 2"],   ["instrumental album"], ["01/01/02"],  [],   [],   ["Red #40", "Nettle Leaves", "Mullein", "Mugwort", "All Spice", "Lovage", "Eucalyptis", "Mryrrh"], [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 3"],   ["instrumental album"], ["??/??/02"],  [],   [],   ["Agrimony", "Arabic Gum", "Benzoin Gum", "Bergamot Wild", "Calamus Root", "Dragon's Blood Resin", "Elder Blossoms", "Styrax Gum"], [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 4"],   ["instrumental album"], ["09/23/03"],  [],   [],   ["Blood Root", "Star Anis", "Lemon Grass", "Four Thieves Vinegar", "Galangal Root", "Spikenard", "Cinquefoil", "Hyssop"],  [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 5 &amp; 6"], ["instrumental album"], ["03/23/04"],  [],   [],   ["Pennyroyal", "Lavender Buds", "White Willow Bark", "Orange Blossoms", "Coffin Nails", "Kava Kava Root", "Valerian Root", "Jasmine Blossoms", "Black Snake Root", "Horehound", "Dragon's Blood", "Myrtyle Leaf", "Patchouly Leaves"], [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 7 &amp; 8"], ["instrumental album"], ["09/21/04"],  [],   [],   ["Safed Musli", "Emblica Officinalis", "Licorice", "Sarsaparilla", "Fo Ti", "Camphor", "High John", "Mandrake", "Devil's Shoestring", "Wormwood", "Cedar", "Buckeyes", "Chrysanthemum Flowers"],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Special Herbs, Vol. 9 &amp; 0"], ["instrumental album"], ["07/12/05"],  [],   [],   ["Vinca Rosea", "Burdock Root", "Vervain", "Bergamot", "Podina", "Untitled (Meditation)", "Coltsfoot", "Orris Foot Powder", "Passion Flower", "Yellow Dock", "Datura Stramonium", "Coco Leaf", "Peach Extract"],  [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Man's Worst Enemy"], ["EP"],  ["04/21/18"],  [],   [],   ["Man's Worst Enemy Theme", "Meddle with Metal (7l's Nytym Mix)", "Rottstyler Theme", "Antidote (Omega Czar Mix)"],  [],   ["1eslmwVRmVEkNb4rnw5Jh74OF0tBLsyxp"], ["Cover Art"], [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["The Missing Notebook Rhymes"],   ["incomplete compilation album"],   [],   [],   [],   [],   [],   ["1qbCmzrzS-5L4vvjxgGHh7R5oY2fypRgu"], [],   [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["ELEVATORS: Act I &amp; II"],  ["album"],  ["03/16/18"],  [],   [],   ["Act I: Ascension", "Driftin", "No Idea", "The Game of Life", "Get Away", "Up,Up &amp; Away", "Act II: Free Falling", "Taserz", "Again &amp; Again", "Potassium", "Rollercoasting", "Rooftops"],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Mm..Leftovers"],  ["promotional album"],  [],   [],   [],   [],   [],   ["1RQau10CiTgcfpw4FWDpTl5TwAwz1qdAa"], [],   [],   [],   [],   ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], [],   []],
[["Madvillainy 2: The Madlib Remix"],  ["remix album"],  ["09/15/08"],  [],   [],   ["Pow! (Intro)", "No Brain", "Pearls", "Light of the Past", "Boulder Holder", "Borrowed Time", "Space Ho's Coast to Coast", "Invazion (Interlude)", "Drainos", "Fire In The Hole", "Heat Niner", "Monkey Suit", "Fluid (Instrumental)", "Can't Reform Em", "Redd Spot (Interlude)", "Running Around with Another", "Butter King Jewels", "Sermon", "3.214", "Confucius Spot", "Never Go Pop", "Savage Beast", "Cold One", "Cold One (Reprise)"],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], ["Cover Art", "CD Cover Art", "CD Cover Art 2", "CD in Casing", "CD Middle Image", "CD Middle Image 2", "CD Middle Image 3", "CD Middle Image 4", "CD Middle Image 5", "CD Back Cover", "CD Back Cover 2", "Vinyl Back Cover"],  [],   [],   ["Images not complete, track 15 missing in some versions"], ["spotify", "cd", "apple", "deezer", "vinyl", "soundcloud", "cassette", "digital"], ["Madvillainy"],  []],
];

projects = projects.sort();
               //projects.push(projects.splice(projectversion, 1)[0]);

         var songs = [
[["D Ski's Intro"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Nineteen Seventy Something"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Son of Yvonne"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Da'Pro"],   [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Store Frontin'"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Me and My Gang"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Crush Hour"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Think I Am"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Fresh Fest"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Hoe-Tel Leftovers"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Slow Down"],   [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Home Sweet Home"],   [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Dedication"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["I Did It"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["In Da Spot"],  [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["Outtakes"], [],   ["07/17/12"],  [],   [],   [],   ["17UNY8y6Go4Bprj3NBNkD9Jh_X6TVPGN5", "1zHIEOfMDZYUPY-JPeIuUmBVGpNTTpbgA", "16sxOZ9DrhWTzA79QoHsImpH2oUGWgDb7", "1DJAyGdqRXwSPd3irKb2tlGGA9-FeB59k", "1hTF5G5FMtRVafW5tn5-mNjK3HY6iig9J", "11ZbJ8GUl79LaIqjzqUNujo8D-hrF68x6", "1Tg2KCiM3ztP2XbMlYwIUvKObzMUjGXiH", "1vmvlghuDwuBjHdECjdTkQ2doIkQjfn-1", "17enE0CtsXVX5ddjptvH6YWH4oxlGPuha", "1javBQS_XOrm22In0roSi1Cn8Bu4MChOH", "1U5DcmrnrD4Bj9O4bjQ69S2J58lGSQOTg", "1QN0NcvMxutMYfow69Ybj28ZLliGTxqqU"],  [],   [],   [],   [],   []],
[["The Illest Villains"],  [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Accordion"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Meat Grinder"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Bistro"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Raid"],  [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["America's Most Blunted"],  [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Sickfit"],  [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Rainbows"], [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Curls"], [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Do Not Fire!"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Money Folder"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Shadows of Tomorrow"],  [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Operation Lifesaver aka Mint Test"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Figaro"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Hardcore Hustle"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Strange Ways"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Fancy Clown"], [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Eye"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Supervillain Theme"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["All Caps"], [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Great Day"],   [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Rhinestone Cowboy"], [],   ["03/23/04"],  [],   [],   [],   ["1U-IcqT8Ki81e5r-inpX_XVx82TBpUa9D"], [],   [],   [],   [],   []],
[["Beef Rap"], [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Hoe Cakes"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Potholderz"],  [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["One Beer"], [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Deep Fried Frenz"],  [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Poo-Putt Platter"],  [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Fillet-O-Rapper"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Gumbo"], [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Fig Leaf Bi-Carbonate"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Kon Karne"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Guinnesses"],  [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Kon Queso"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Rap Snitch Knishes"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Vomitspit"],   [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["Kookies"],  [],   ["11/16/04"],  [],   [],   [],   ["1J2dBv-iQPyIZQbhXOwfJ656iA69TMtLb"], [],   [],   [],   [],   []],
[["The Time We Faced Doom"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Doomsday"], [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Rhymes Like Dimes"], [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["The Finest"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Back in the Days"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Go with the Flow"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Tick, Tick..."],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Red and Gold"],   [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["The Hands of Doom"], [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Who You Think I Am?"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Doom, Are You Awake?"], [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Hey!"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Operation: Greenbacks"],   [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["The Mic"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["The Mystery of Doom"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Dead Bent"],   [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Gas Drawls"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["?"],  [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["Hero v.s. Villain"], [],   ["10/19/99"],  [],   [],   [],   ["114TsRQMswAGB9JLjETNVNW2louXVZKsV"], [],   [],   [],   [],   []],
[["SUPERVILLAIN (INTRO)"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["GAZZILLION EAR"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["BALLSKIN"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["YESSIR"],   [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["ABSOLUTELY"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["RAP AMBUSH"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["LIGHTWORKS"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["BATTY BOYZ"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["ANGELZ"],   [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["CELLZ"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["STILL DOPE"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["MICROWAVE MAYO"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["MORE RHYMIN"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["THAT'S THAT"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["SUPERVILLAINZ"],  [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["BUMPY'S MESSAGE"],   [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["THANK YA"], [],   ["03/24/09"],  [],   [],   [],   ["1VoPGW_qZPXk1egGiDbAbtwyjd-5Aqp1h"], [],   [],   [],   [],   []],
[["El Chupa Nibre"], [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Sofa King"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["The Mask"], [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Perfect Hair"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Benzi Box"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Old School Rules"],  [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["A.T.H.F. (Aqua Teen Hunger Force)"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Basket Case"], [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["No Names"], [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Crosshairs"],  [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Mince Meat"],  [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Vats of Urine"],  [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Space Hos"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Bada Bing"],   [],   ["10/10/05"],  [],   [],   [],   ["176n8WU1B57Y9fKYZYP3AvLjTnV3EhpxQ"], [],   [],   [],   [],   []],
[["Doomsday (Remix)"],  [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["No Snakes Alive"],   [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["The Original (Remix)"], [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["Doomsday (Remix) (Instrumental)"],  [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["No Snakes Alive (Instrumental)"],   [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["Impostas (Instrumental)"], [],   ["11/28/00"],  [],   [],   [],   ["1rdIuf3Te6dWVEFoUVYaVFlkgB-0Hm0KN"], [],   [],   [],   [],   []],
[["Gorilla Monsoon"],   [],   ["10/13/17"],  [],   [],   [],   ["1wgArzVKShW0UmfD65lmuw8rqioEEWVT0"], [],   [],   [],   [],   []],
[["2 Stings"], [],   ["10/13/17"],  [],   [],   [],   ["1wgArzVKShW0UmfD65lmuw8rqioEEWVT0"], [],   [],   [],   [],   []],
[["Saffron"],  [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Arrow Root"],  [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Zatar"], [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Fenugreek"],   [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Sumac Berries"],  [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Coriander"],   [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Shallots"], [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Charnsuka"],   [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Monosodium Glutamate"], [],   ["??/??/01"],  [],   [],   [],   ["1rEfNERVbuRh53hK5eHFOZwYmxGPVH4wY"], [],   [],   [],   [],   []],
[["Red #40"],  [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Nettle Leaves"],  [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Mullein"],  [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Mugwort"],  [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["All Spice"],   [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Lovage"],   [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Eucalyptis"],  [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Mryrrh"],   [],   ["01/01/02"],  [],   [],   [],   ["1bqbj4vx27f6aOJlkIDLrJ3hm3K5S-x6-"], [],   [],   [],   [],   []],
[["Agrimony"], [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Arabic Gum"],  [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Benzoin Gum"], [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Bergamot Wild"],  [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Calamus Root"],   [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Dragon's Blood Resin"], [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Elder Blossoms"], [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Styrax Gum"],  [],   ["??/??/02"],  [],   [],   [],   ["1oobT_IPaXkSCaLg4zMSv_hGHaUK3JIXc"], [],   [],   [],   [],   []],
[["Blood Root"],  [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Star Anis"],   [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Lemon Grass"], [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Four Thieves Vinegar"], [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Galangal Root"],  [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Spikenard"],   [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Cinquefoil"],  [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Hyssop"],   [],   ["09/23/03"],  [],   [],   [],   ["1eVHS7z5Hv81vhKb3RlU0wYdRZHDln76D"], [],   [],   [],   [],   []],
[["Pennyroyal"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Lavender Buds"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["White Willow Bark"], [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Orange Blossoms"],   [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Coffin Nails"],   [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Kava Kava Root"], [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Valerian Root"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Jasmine Blossoms"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Black Snake Root"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Horehound"],   [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Dragon's Blood"], [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Myrtyle Leaf"],   [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Patchouly Leaves"],  [],   ["03/23/04"],  [],   [],   [],   ["19AzbjcM1roOmA4GxVsjiP6VkVrLXyA_g"], [],   [],   [],   [],   []],
[["Safed Musli"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Emblica Officinalis"],  [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Licorice"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Sarsaparilla"],   [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Fo Ti"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Camphor"],  [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["High John"],   [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Mandrake"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Devil's Shoestring"],   [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Wormwood"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Cedar"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Buckeyes"], [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Chrysanthemum Flowers"],   [],   ["09/21/04"],  [],   [],   [],   ["1XFuQlDgH02bOWJwGu2xyPIxgAl_qiL9s"], [],   [],   [],   [],   []],
[["Vinca Rosea"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Burdock Root"],   [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Vervain"],  [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Bergamot"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Podina"],   [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Untitled (Meditation)"],   [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Coltsfoot"],   [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Orris Foot Powder"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Passion Flower"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Yellow Dock"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Datura Stramonium"], [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Coco Leaf"],   [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Peach Extract"],  [],   ["07/12/05"],  [],   [],   [],   ["1FIVAfTZbRmajw4DX3on4_w3caCVhVQ1j"], [],   [],   [],   [],   []],
[["Man's Worst Enemy Theme"], [],   ["04/21/18"],  [],   [],   [],   ["1eslmwVRmVEkNb4rnw5Jh74OF0tBLsyxp"], [],   [],   [],   [],   []],
[["Meddle with Metal (7l's Nytym Mix)"],  [],   ["04/21/18"],  [],   [],   [],   ["1eslmwVRmVEkNb4rnw5Jh74OF0tBLsyxp"], [],   [],   [],   [],   []],
[["Rottstyler Theme"],  [],   ["04/21/18"],  [],   [],   [],   ["1eslmwVRmVEkNb4rnw5Jh74OF0tBLsyxp"], [],   [],   [],   [],   []],
[["Antidote (Omega Czar Mix)"],  [],   ["04/21/18"],  [],   [],   [],   ["1eslmwVRmVEkNb4rnw5Jh74OF0tBLsyxp"], [],   [],   [],   [],   []],
[["Garbage Day #3"], [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Get-U-Now"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["What a N**** Know?"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Sweet Premium Wine"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Plumskinnz (Loose Hoe, God & Cupid)"], [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Smokin' That S*@%!"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Contact Blitz"],  [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Gimme"], [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Black Bastards!"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["It Sounded Like a Roc!"],  [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Plumskinnz (Oh No I Don't Believe It)"],  [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Constipated Monkey"],   [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["F*@# Wit' Ya Head!!"],  [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Suspended Animation"],  [],   ["05/15/00"],  [],   [],   [],   ["1pu958mIqBQv9xpmOaj-M5pBTkMBIbSau"], [],   [],   [],   [],   []],
[["Take Your Medicine"],   [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Meddle with Metal"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Badness of Madness"],   [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Close Talker"],   [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Forever People"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Captain Crunch"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Don't Spoil It"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Phantoms"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Bomb Thrown"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["You Masked for It"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Astral Traveling"],  [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Nautical Depth"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Stun Gun"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["MF Czar"],  [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Captain Brunch"], [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Sleeping Dogs"],  [],   ["03/30/18"],  [],   [],   [],   ["1IDkQPbTO28nC0irxJIMYpusnWbjbwgl3"], [],   [],   [],   [],   []],
[["Pow! (Intro)"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["No Brain"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Pearls"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Light of the Past"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Boulder Holder"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Borrowed Time"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Space Ho's Coast to Coast"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Invazion (Interlude)"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Drainos"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Fire In The Hole"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Heat Niner"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Monkey Suit"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Fluid (Instrumental)"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Can't Reform Em"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Redd Spot Interlude"],  [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Running Around with Another"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Butter King Jewels"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Sermon"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["3.214"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Confucius Spot"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Never Go Pop"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Savage Beast"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Cold One"], [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Cold One (Reprise)"],   [],   ["09/15/08"],  [],   [],   [],   ["148AISQai34mhk7n0Ln_dTOaoHGvaZty9"], [],   [],   [],   [],   []],
[["Act II: Free Falling"], [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
[["Taserz"],   [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
[["Again &amp; Again"], [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
[["Potassium"],   [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
[["Rollercoasting"], [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
[["Rooftops"], [],   ["03/16/18"],  [],   [],   [],   ["1LxAmSLk8XBv7WyFN6Y1dR7Dy5yZcbAJU"], [],   [],   [],   [],   []],
];
songs = songs.sort();

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
            while (projectListListCounter < (projects.length)) {
               if (projectListListCounter == (projects.length)-1){
                  if (typeof projects[projectListListCounter][13][0] !== 'undefined'){
                  projectlistlistcontents = projectlistlistcontents + "<div style='margin-bottom: 0px'  class='list-item tersion'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
                  }
                  else{
                 projectlistlistcontents = projectlistlistcontents + "<div style='margin-bottom: 0px'  class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               }
               else if (projectListListCounter == 0){
                  if (typeof projects[projectListListCounter][13][0] !== 'undefined'){
                  projectlistlistcontents = "<div style='margin-bottom: 17.5px' class='list-item tersion'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
                  }
                  else{
                  projectlistlistcontents = "<div style='margin-bottom: 17.5px' class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               }
               else{
                  if (typeof projects[projectListListCounter][13][0] !== 'undefined'){
                  projectlistlistcontents = projectlistlistcontents+"<div style='margin-bottom: 17.5px' class='list-item tersion'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
                  }
                  else{
                  projectlistlistcontents = projectlistlistcontents+"<div style='margin-bottom: 17.5px' class='list-item'><section id='project"+projectListListCounter+"' class='projectz' onclick='projectModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+projects[projectListListCounter][7][0]+"'><h2>"+projects[projectListListCounter][0][0]+"</h2></section></div>";
               }
               }
               projectListListCounter++;
            }
         /*17.5 for margin-bottom*/
         document.getElementById('listlist').innerHTML = projectlistlistcontents;
         }
         /* function projectStoreList(){
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
         /*17.5 for margin-bottom
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
*/
          function songList(){
            while (songListCounter < songs.length) {
               if (songListCounter == songs.length-1){
                 songlistcontents = songlistcontents + "<div style='margin-bottom: 0px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               else if (songListCounter == 0){
                  songlistcontents = "<div style='margin-bottom: 17.5px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               else{
                  songlistcontents = songlistcontents + "<div style='margin-bottom: 17.5px'  class='list-item'><section id='song"+songListCounter+"' class='songz' onclick='songModal(this.id)'><img src='https://drive.google.com/uc?export=view&id="+songs[songListCounter][6][0]+"'><h2>"+songs[songListCounter][0][0]+"</h2></section></div>";
               }
               songListCounter++;
            }
            document.getElementById('songlist').innerHTML = songlistcontents;
         }
         
         function projectleft(){
            if (projects[projectClickCounter][7][pimgn-1] == null){pimgn = projects[projectClickCounter][7].length-1;}
            else {pimgn=pimgn-1;}
         
            document.getElementById('pimageSlideshow').innerHTML = "<img src='https://drive.google.com/uc?export=view&id="+projects[projectClickCounter][7][pimgn]+"' class='img' /></a>";
            document.getElementById('pimageCaption').innerHTML = projects[projectClickCounter][8][pimgn];
         }

         function projectright(){
                      if (projects[projectClickCounter][7][pimgn+1] == null){pimgn = 0;}
            else {pimgn=pimgn+1;}
            document.getElementById('pimageSlideshow').innerHTML = "<img src='https://drive.google.com/uc?export=view&id="+projects[projectClickCounter][7][pimgn]+"' class='img' />";
             document.getElementById('pimageCaption').innerHTML = projects[projectClickCounter][8][pimgn];
         }

          function projectModal(clicked_id){
            console.log('in projectModal, clicked_id', clicked_id)
            pimgn = 0;
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
               if (projects[projectClickCounter][12][1] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][1]+"'>cd</a></span>";}
               if (projects[projectClickCounter][12][2] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][2]+"'>apple</a></span>";}
               if (projects[projectClickCounter][12][3] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][3]+"'>deezer</a></span>";}
               if (projects[projectClickCounter][12][4] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][4]+"'>vinyl</a></span>";}
               if (projects[projectClickCounter][12][5] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][5]+"'>soundcloud</a></span>";}
               if (projects[projectClickCounter][12][6] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][6]+"'>cassette</a></span>";}
               if (projects[projectClickCounter][12][7] != null ){plistencontents = plistencontents + "<span><a href='"+projects[projectClickCounter][12][7]+"'>digital</a></span>";}
              plistencontents = plistencontents.replace('caleb', '');
         
               document.getElementById('modal-content').innerHTML = "<div class='modal-title'>"+projects[projectClickCounter][0][0]+"</div>"+pversionlist+"<button class='modal-item'>description<span class='modal-down'>+</span></button><div class='panel'><p><b>"+projects[projectClickCounter][0][0]+"</b> is "+vowel+" "+projects[projectClickCounter][1][0]+" by "+projects[projectClickCounter][14][0]+" that initially released on "+projects[projectClickCounter][2][0]+" with a runtime of "+projects[projectClickCounter][6][0]+". DOOM "+projects[projectClickCounter][3][0]+"<br><br> "+projects[projectClickCounter][4][0]+"<br><br>"+projects[projectClickCounter][4][1]+"</p></div><button class='modal-item'>tracklist<span class='modal-down'>+</span></button><div class='panel'><p>"+tracklist+"<br>Total Length: <b>"+projects[projectClickCounter][6][0]+"</b></p></div><button class='modal-item'>images<span class='modal-down'>+</span></button><div class='panel' style='font-weight: bold;'><div class='cover'><button type='button' class='btn' onclick='projectleft()'>&#10094;</button><div id='pimageSlideshow'><img src='https://drive.google.com/uc?export=view&id="+projects[projectClickCounter][7][pimgn]+"' class='img' /></div><button  type='button' class='btn' onclick='projectright()'>&#10095;</button></div><p class='cover-text' id='pimageCaption'>"+projects[projectClickCounter][8][pimgn]+"</p></div><button class='modal-item'>attached media<span class='modal-down'>+</span></button><div class='panel'><p>content</p></div><button class='modal-item'>listen<span class='modal-down'>+</span></button><div class='panel listen'><p style='margin-top:0px;'>"+plistencontents+"</p></div><button class='modal-item'>additional notes<span class='modal-down'>+</span></button><div class='panel'><p>"+projects[projectClickCounter][11][pimgn]+"</p></div><button class='modal-item'>sources<span class='modal-down'>+</span></button><div class='panel'><p style='margin-top:0px;'></p></div>";

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
               if (songs[songClickCounter][11][1] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][1]+"'>cd</a></span>";}
               if (songs[songClickCounter][11][2] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][2]+"'>apple</a></span>";}
               if (songs[songClickCounter][11][3] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][3]+"'>deezer</a></span>";}
               if (songs[songClickCounter][11][4] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][4]+"'>vinyl</a></span>";}
               if (songs[songClickCounter][11][5] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][5]+"'>soundcloud</a></span>";}
               if (songs[songClickCounter][11][6] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][6]+"'>cassette</a></span>";}
               if (songs[songClickCounter][11][7] != null ){slistencontents = slistencontents + "<span><a href='"+songs[songClickCounter][11][7]+"'>digital</a></span>";}

              slistencontents = slistencontents.replace('caleb', '');
         
               document.getElementById('modal-content').innerHTML = "<div class='modal-title'>"+songs[songClickCounter][0][0]+"</div><button class='modal-item'>description<span class='modal-down'>+</span></button><div class='panel'><p><b>"+songs[songClickCounter][0][0]+"</b> released on "+songs[songClickCounter][2][0]+". DOOM "+songs[songClickCounter][3][0]+".<br><br>The song was "+songs[songClickCounter][4][0]+"<br><br>"+songs[songClickCounter][5][1]+"</p></div><button class='modal-item'>images<span class='modal-down'>+</span></button><div class='panel' style='font-weight: bold;'><div class='cover'><button type='button' class='btn left' onclick='songleft()'>&#10094;</button><div id='imageSlideshow'><img src='https://drive.google.com/uc?export=view&id="+songs[songClickCounter][6][simgn]+"' class='img' /></div><button type='button' class='btn right' onclick='songright()'>&#10095;</button></div><p class='cover-text' id='imageCaption'>"+songs[songClickCounter][7][simgn]+"</p></div><button class='modal-item'>attached media<span class='modal-down'>+</span></button><div class='panel'><p>content</p></div><button class='modal-item'>additional notes<span class='modal-down'>+</span></button><div class='panel'><p>"+songs[songClickCounter][10][simgn]+"</p></div><button class='modal-item'>listen<span class='modal-down'>+</span></button><div class='panel listen'><p style='margin-top:0px;'>"+slistencontents+"</p></div>";
         
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
            function typ(){
            if (document.getElementById("type").innerHTML == "type:<span> songs</span>"){
               document.getElementById("sort").innerHTML == "sort:<span> a to z</span>";//doesnt work in this file
               document.getElementById("type").innerHTML = "type:<span> projects</span>";
            }
            else{
               document.getElementById("type").innerHTML = "type:<span> songs</span>";
            }
         }
          function sort(){
            if (document.getElementById("sort").innerHTML == "sort:<span> a to z</span>" && document.getElementById("type").innerHTML != "type:<span> songs</span>"){
               document.getElementById("sort").innerHTML = "sort:<span> new to old</span>";
            }
            else if (document.getElementById("sort").innerHTML == "sort:<span> a to z</span>" && document.getElementById("type").innerHTML == "type:<span> songs</span>"){
               document.getElementById("sort").innerHTML = "sort:<span> by project</span>";
            }
             else if (document.getElementById("sort").innerHTML == "sort:<span> by project</span>"){
               document.getElementById("sort").innerHTML = "sort:<span> new to old</span>";
            }
            else if (document.getElementById("sort").innerHTML == "sort:<span> new to old</span>"){
               document.getElementById("sort").innerHTML = "sort:<span> old to new</span>";
            }
            else if (document.getElementById("sort").innerHTML == "sort:<span> old to new</span>"){
               document.getElementById("sort").innerHTML = "sort:<span> a to z</span>";
            }

         }
         function version(){
            if (document.getElementById("version").innerHTML == "versions:<span> visable</span>"){
               document.getElementById("version").innerHTML = "versions:<span> hidden</span>";
            }
            else {
               document.getElementById("version").innerHTML = "versions:<span> visable</span>";
            }
         }
