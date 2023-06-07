const artists = [
    {"name": "Les Truttes", "image": "img2023/artist_lestruttes.png", "description": "Wat in 1996 begon als een foute grap is uitgegroeid tot een vaste waarde. Vaak gekopieerd, nooit geëvenaard. Omdat de lat elk jaar hoger moet, pakken \‘Les Truttes\’ dit jaar uit met \‘Goldeneye\’! \r\n\r\nJe moet het zien om te geloven. \’This is not a live band, this is an experience!\’".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Jeroen Delodder", "image": "img2023/artist_jeroendelodder.png", "description": "Vergeet VJ Tony dames, dit jaar hebben we Jeroen Delodder op bezoek. En of \’t een lotterken is. \r\nZijn CV is minstens even indrukwekkend als zijn passie voor muziek. Jeroen Delodder in één woord: goede smaak. F*ck, dat zijn er twee. \r\nMet een DJ-tas vol club classics, rave anthems, vergeten dancefloorfillers én de nieuwe hits van vandaag en morgen maakt de Katte zich nu al op voor het feestje van het jaar. \r\n\r\nNog niet overtuigd? Gewoon zijn naam eens googelen. Doet ‘The Greatest Switch’ een belletje rinkelen?".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Nadiem Shah", "image": "img2023/artist_nadiemshah.png", "description": "De Strafste Nacht wordt dit jaar nog net iets straffer want niemand minder dan Nadiem Shah komt draaien! \r\n\r\nNadine wie? Tsja… Pukkelpop, Rock Werchter, Les Ardentes, Pole Pole, Dour, Lokerse Feesten, Marktrock, Crammerock, Laundry Day, Lotto Arena, Dreamville, Gladiolen, Playground, Student Kick Off,…en nu dus ook op de Katse Feesten. Vooraf draaien de mannen van ZigZag de Strafste Nacht op gang, Sounder mag De Katte naar de gebruikelijke climax voeren. Met klaarkomgarantie!".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Jack Vamp \r\n& the castle of creep".replace(/(\r\n|\n|\r)/gm, "<br>"), "image": "img2023/artist_jackvamp.png", "description": "Jack Vamp is niet tuk op grijswaarden. Winnaar van StuBru\’s Nieuwe Lichting en een must-see deze festivalzomer. \r\nSoms lijkt deze band een triootje tussen Prince, Bowie en The Smiths, dan weer tussen Marvin Gaye, The Police en Talking Heads.".replace(/(\r\n|\n|\r)/gm, "<br>")},
    {"name": "Nina Black", "image": "img2023/artist_ninablack.png", "description": "lorem ipsum"},
    {"name": "Willy Organ", "image": "img2023/artist_willyorgan.png", "description": "lorem\nipsum"},
    {"name": "Stijn", "image": "img2023/artist_stijn.png", "description": "lorem\nipsum"},
    {"name": "Flavour Drop", "image": "img2023/artist_flavourdrop.png", "description": "lorem\nipsum"},
    {"name": "Mother Mercury", "image": "img2023/artist_mothermercury.png", "description": "lorem ipsum"},
    {"name": "Séa", "image": "img2023/artist_sea.png", "description": "lorem ipsum"},
    {"name": "Fleetmood", "image": "img2023/artist_fleetmood.png", "description": "lorem\nipsum"},
    {"name": "Joost Van Hyfte | MC", "image": "img2023/artist_joostvanhyfte.jpg", "description": "lorem\nipsum"},
    {"name": "Seghers", "image": "img2023/artist_seghers.jpg", "description": "lorem\nipsum"},
    {"name": "Hans Cools", "image": "img2023/artist_hanscools.png", "description": "lorem ipsum"},
    {"name": "Jan Vervloet", "image": "img2023/artist_janvervloet.jpg", "description": "lorem ipsum"},
    {"name": "Blouse Belge", "image": "img2023/artist_blousebelge.jpg", "description": "lorem\nipsum"},
    {"name": "Vincent Voeten", "image": "img2023/artist_vincentvoeten.jpg", "description": "lorem\nipsum"},
    {"name": "Kinderspeeldorp", "image": "img2023/artist_kinderspeeldorp.jpg", "description": "lorem\nipsum"},
    {"name": "Radio Zigzag", "image": "img2023/artist_radiozigzag.jpg", "description": "lorem ipsum"},
    {"name": "Sounder", "image": "img2023/artist_sounder.jpg", "description": "lorem ipsum"},
    {"name": "Guy Verlinde & the artisans of solace", "image": "img2023/artist_guyverlinde.png", "description": "lorem\nipsum"},
    {"name": "G.R.M", "image": "img2023/artist_grm.png", "description": "lorem\nipsum"},
    {"name": "Tuff Guac", "image": "img2023/artist_tuffguac.png", "description": "lorem\nipsum"},
    {"name": "Herr Mann", "image": "img2023/artist_herrman.jpg", "description": "lorem ipsum"},
    {"name": "Mohsin Abbas", "image": "img2023/artist_mohsinabbas.jpg", "description": "lorem ipsum"},
    {"name": "Tom Massis", "image": "img2023/artist_tommassis.jpg", "description": "lorem\nipsum"},
    {"name": "Truck Stop Cutie", "image": "img2023/artist_truckstopcutie.png", "description": "lorem\nipsum"},
    {"name": "Yanx", "image": "img2023/artist_yanx.jpg", "description": "lorem\nipsum"},
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


