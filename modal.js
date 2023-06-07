const artists = [
    {"name": "Les Truttes", "image": "img2023/artist_lestruttes.png", "description": "Wat in 1996 begon als een foute grap is uitgegroeid tot een vaste waarde. Vaak gekopieerd, nooit geëvenaard. Omdat de lat elk jaar hoger moet, pakken \‘Les Truttes\’ dit jaar uit met \‘Goldeneye\’! \r\n\r\nJe moet het zien om te geloven. \’This is not a live band, this is an experience!\’".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Jeroen Delodder", "image": "img2023/artist_jeroendelodder.png", "description": "Vergeet VJ Tony dames, dit jaar hebben we Jeroen Delodder op bezoek. En of \’t een lotterken is. \r\nZijn CV is minstens even indrukwekkend als zijn passie voor muziek. Jeroen Delodder in één woord: goede smaak. F*ck, dat zijn er twee. \r\nMet een DJ-tas vol club classics, rave anthems, vergeten dancefloorfillers én de nieuwe hits van vandaag en morgen maakt de Katte zich nu al op voor het feestje van het jaar. \r\n\r\nNog niet overtuigd? Gewoon zijn naam eens googelen. Doet ‘The Greatest Switch’ een belletje rinkelen?".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Nadiem Shah", "image": "img2023/artist_nadiemshah.png", "description": "De Strafste Nacht wordt dit jaar nog net iets straffer want niemand minder dan Nadiem Shah komt draaien! \r\n\r\nNadine wie? Tsja… Pukkelpop, Rock Werchter, Les Ardentes, Pole Pole, Dour, Lokerse Feesten, Marktrock, Crammerock, Laundry Day, Lotto Arena, Dreamville, Gladiolen, Playground, Student Kick Off,…en nu dus ook op de Katse Feesten. Vooraf draaien de mannen van ZigZag de Strafste Nacht op gang, Sounder mag De Katte naar de gebruikelijke climax voeren. Met klaarkomgarantie!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Jack Vamp \r\n& the castle of creep".replace(/(\r\n|\n|\r)/gm, "<br>"), "image": "img2023/artist_jackvamp.png", "description": "Jack Vamp is niet tuk op grijswaarden. Winnaar van StuBru\’s Nieuwe Lichting en een must-see deze festivalzomer. \r\nSoms lijkt deze band een triootje tussen Prince, Bowie en The Smiths, dan weer tussen Marvin Gaye, The Police en Talking Heads.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Nina Black", "image": "img2023/artist_ninablack.png", "description": "Her name might be black, her musical talent will color your world. We hebben al mindere bio\’s geschreven. \r\n\r\nDeephouse, house, r&b, dancehall, dance, edm,... Nina draait het probleemloos aan elkaar, haar aanstekelijke enthousiasme doet de rest. \r\n\r\nGeen katje om zonder handschoenen aan te pakken, maar daar weet het Comme Chez Chat-publiek ongetwijfeld raad mee.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Willy Organ", "image": "img2023/artist_willyorgan.png", "description": "Willy Organ (niet te verwarren met Billy Corgan) maakt trieste, doch dansbare Nederlandstalige levensliederen. \r\nWim De Craene is zijn grote voorbeeld en hij draagt t-shirts van Slipknot op het podium. Het klopt niet en net daarom klopt het wél. Stilaan een fenomeen! \r\n\r\nBenieuwd wat het Williversum voor De Katte in petto heeft.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Stijn", "image": "img2023/artist_stijn.png", "description": "Sexier gaan de Katse Feesten niet worden. Van Tokyo tot New York, van de Gentse tot de Katse Feesten… Stijn is altijd fijn! \r\n\r\nNog altijd het best bewaarde festivalgeheim van het land.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Flavour Drop", "image": "img2023/artist_flavourdrop.png", "description": "Het fruitigste snoepje uit Meet Katte\’s sjakosse. \r\n\r\nMet een grote passie voor hip hop, dance hall en club edits. Stond eerder al op Rock Werchter, WECANDANCE, Pukkelpop. \r\n\r\nMeet Katte was er ook en besloot meteen om haar favoriete DJ uit te voor een zweterig Kats dansfeestje. \r\nPeet Katte zal het geweten hebben. Doe maar een verse onderbroek aan.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Mother Mercury", "image": "img2023/artist_mothermercury.png", "description": "Een onovertroffen eerbetoon aan de grootste rockband everrrrr…. Om alle misverstanden te vermijden, we hebben het hier niet over Oasis, maar over Queen! \r\n\r\nZo\’n kans om \‘Bohemian Rhapsody\’ en \‘Radio Gaga\’ live mee te brullen krijg je nooit meer. ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Séa", "image": "img2023/artist_sea.png", "description": "Jong vrouwelijk DJ-geweld lanceren? Yes we can! Vraag anders maar eens aan Amber Broos wat een passage op \‘De Katse\’ kan betekenen voor een DJ-carrière. \r\nDit jaar is het aan séa, in het echte leven beter bekend als Valerie Wynants, om de sterren van onze festivalhemel te draaien. \r\n\r\nVan de onovertroffen Boiler in Pukkelpop tot op de Katse plankenvloer. Chicago house, Detroit ghettotech,…say what?".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Fleetmood", "image": "img2023/artist_fleetmood.png", "description": "Niet zomaar een coverband, maar een unieke eigenzinnige ode, met alle warmte van het origineel. \r\n\r\nStandaard in de jukebox: Rhiannon, The Chain, Dreams, Everywhere, Go your own way… ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Joost Van Hyfte | MC", "image": "img2023/artist_joostvanhyfte.jpg", "description": "Daar is \‘em! \r\n\r\nNa vier jaar afwezigheid maakt Joost Van Hyfte zijn comeback als MC van de Kriek Lindemans Stand-Up Comedy Night! \r\nEn of Joosthemzelve er zin in heeft. In zijn zog brengt hij Moshin Abbas, Vincent Voeten en Hans Cools mee.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Seghers", "image": "img2023/artist_seghers.jpg", "description": "Copy-paste van vorig jaar. \r\n\r\nWat je zelf doet, doe je meestal beter. \r\nIn het geval van Seghers klopt dat ook. Toch als het over het afsluiten van onze jaarlijkse vijf dagen durende hoogmis gaat. ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Hans Cools", "image": "img2023/artist_hanscools.png", "description": "Hans Cools is de zoveelste definitie van een West-Vlaming. De Standaard noemt hem liever de rijzende naam binnen de Vlaamse comedy. \r\n\r\nPeet Katte weet dat zo nog niet. Het enige wat klopt in de gazette zijn immers den datum en den prijs. \r\n\r\nKutsjing!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Jan Vervloet", "image": "img2023/artist_janvervloet.jpg", "description": "Jan Vervloet mag dit jaar de afterwork op het terras afsluiten. \r\nJan is de grote baas achter \‘The Hype Records\’ en schrijver van de wereldhit Afflito van Fiocco. \r\n\r\n\‘I\’ve been waiting for too long…\’ \r\nWie de ninetees in full effect beleefd heeft, zal zeker weten over welke hit we het hier hebben. \r\nJan is een graag geziene gast op Tomorrowland, de City Parade en nu dus ook de Katse Feesten. \r\n\r\nHe\’s been waiting for too long… toch om naar De Katte te komen.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Blouse Belge", "image": "img2023/artist_blousebelge.jpg", "description": "Derek - Rony Verbiest - Mario Vermandel - Bruno Deneckere - Marcus Weymaere. \r\nAls namedropping een sport was dan hadden we net het Kats Kampioenschap gewonnen. \r\n\r\nDichter bij de blues gaan we op De Katte niet geraken dit jaar. Met een knipoog naar Charles Bukowski en Arthur Rimbaud. \r\n\r\nGe zijt Kats Kampioen Namedroppen of ge zijt het niet zou peet Katte zaliger zeggen. ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Vincent Voeten", "image": "img2023/artist_vincentvoeten.jpg", "description": "Vincent Voeten won in 2022 Humo\’s Comedy Cup. \r\nOf dat terecht was? Dat laten we je graag zelf ontdekken. \r\n\r\nJa, soms vegen ook copywriters hun voeten aan. \r\nHaha.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Kinderspeeldorp", "image": "img2023/artist_kinderspeeldorp.jpg", "description": "Jong geleerd is ook op de Katse Feesten oud gedaan. \r\nMet het paplepeltje en al. \r\n\r\nOh ja, er zijn ook springkastelen.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Radio Zigzag", "image": "img2023/artist_radiozigzag.jpg", "description": "De Strafste Nacht wordt dit jaar nog net iets straffer want niemand minder dan Nadiem Shah komt draaien! \r\n\r\nVooraf draaien de mannen van ZigZag de Strafste Nacht op gang.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Sounder", "image": "img2023/artist_sounder.jpg", "description": "De Strafste Nacht wordt dit jaar nog net iets straffer want niemand minder dan Nadiem Shah komt draaien! \r\n\r\nSounder mag De Katte naar de gebruikelijke climax voeren. Met klaarkomgarantie!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Guy Verlinde \r\n& the artisans of solace".replace(/(\r\n|\n|\r)/gm, "<br>"), "image": "img2023/artist_guyverlinde.png", "description": "Guy Verlinde domineert al meer dan een decennium de Belgische blues en rootsscene. \r\nHij deelde het podium met grootheden als BB King, John Fogerty, Santana, John Hiat,… \r\n\r\nSpeciaal voor het Katse Feesten-publiek brengt hij The Artisans of Solace mee.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "G.R.M", "image": "img2023/artist_grm.png", "description": "Watch out, there\’s a new cat in town! \r\n\r\nG.R.M. brengt een mix van herkenbare nummers in een DnB en Technojasje. \r\nInstaproof! Check out great.record.machine ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Tuff Guac", "image": "img2023/artist_tuffguac.png", "description": "Dansbare rock \’n roll-sensatie die met hun catchy meezingers binnenkort op Europese tournee vetrekken, maar vooraf eerst De Katte willen veroveren. ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Herr Mann", "image": "img2023/artist_herrman.jpg", "description": "In de Katse canon staat jong talent een kans geven helemaal bovenaan en dus mag Herr Man de 45ste editie openen. \r\n\r\nResident bij Bar Georgie en na 4 augustus een plekje in alle Katse harten.  ".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Mohsin Abbas", "image": "img2023/artist_mohsinabbas.jpg", "description": "Over Moshin Abbas kunnen we kort zijn. Nog nooit van gehoord, maar toch een naam om nooit te vergeten. Zeker als je hem ooit aan het werk gezien hebt. \r\n\r\nGrenzeloze humor in sneltempo.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Tom Massis", "image": "img2023/artist_tommassis.jpg", "description": "Wie ooit al op een Fomo Friday in de Asseneedse Phonograaf terecht kwam, weet waaraan zich te verwachten. Wie nog geen Fomo Friday mocht beleven, raden we gewoon Comme Chez Chat aan. \r\n\r\nOf zoals meet Katte altijd zei: \“Manneken, ge moet de dingen niet altijd moeilijker maken dan ze zijn.\” Ja, meet!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Truck Stop Cutie", "image": "img2023/artist_truckstopcutie.png", "description": "Hold on to your horses De Katte, cause you\’re in for one hell of a ride. Americana en Outlaw Country Music heruitgevonden. \r\n\r\nYihaaaaa, baby!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Yanx", "image": "img2023/artist_yanx.jpg", "description": "Winnaar van de DJ Contest tijdens de legendarische Brugfuif en heerser van onder andere Party Infection, Drop The Baspi en Kasseifeesten. \r\n\r\nDJ Yanx heeft zijn lokale adelbrieven al meer dan verdiend en dat wil hij tijdens Comme Chez Chat maar wat graag bewijzen.".replace(/(\r\n|\n|\r)/gm, "<br>")},
];

var modal = document.getElementById("modal");
var cardholders = document.getElementsByClassName("cardholder");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var modalImage = document.getElementById("modal-image")

document.getElementById("close").addEventListener('click', function (event) {
    modal.classList.add("invisible");
})

for(var i = 0; i < cardholders.length; i++) {
    (function(index) {
        cardholders[index].addEventListener("click", function() {
            modal.classList.remove("invisible");
            modalTitle.innerHTML = artists[index].name;
            modalDescription.innerHTML = artists[index].description;
            modalImage.src = artists[index].image;
       })
    })(i);
  }



// document.getElementsByClassName("cardholder")[0].addEventListener('click', function (event) {

//     modal.classList.remove("invisible");
    
// })


