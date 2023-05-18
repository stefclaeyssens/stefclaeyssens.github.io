var vrijdag = document.getElementById("vrijdag");
var zaterdag = document.getElementById("zaterdag");
var zondag = document.getElementById("zondag");
var maandag = document.getElementById("maandag");
var dinsdag = document.getElementById("dinsdag");

document.getElementById("vrijdag").addEventListener('click', function (event) {
    if(vrijdag.classList.contains("timetable-option-active")) {
        return;
    }
    vrijdag.classList.add("timetable-option-active");
    zaterdag.classList.remove("timetable-option-active");
    zondag.classList.remove("timetable-option-active");
    maandag.classList.remove("timetable-option-active");
    dinsdag.classList.remove("timetable-option-active");

    var vrijdag_artists = document.getElementsByClassName("vrijdag");
    for (var i = 0; i < vrijdag_artists.length; ++i) {
    var item = vrijdag_artists[i];  
    item.style.display = "block"
    }
    var zaterdag_artists = document.getElementsByClassName("zaterdag");
    for (var i = 0; i < zaterdag_artists.length; ++i) {
    var item = zaterdag_artists[i];  
    item.style.display = "none"
    }
    var zondag_artists = document.getElementsByClassName("zondag");
    for (var i = 0; i < zondag_artists.length; ++i) {
    var item = zondag_artists[i];  
    item.style.display = "none"
    }
    var maandag_artists = document.getElementsByClassName("maandag");
    for (var i = 0; i < maandag_artists.length; ++i) {
    var item = maandag_artists[i];  
    item.style.display = "none"
    }
    var dinsdag_artists = document.getElementsByClassName("dinsdag");
    for (var i = 0; i < dinsdag_artists.length; ++i) {
    var item = dinsdag_artists[i];  
    item.style.display = "none"
    }
});

document.getElementById("zaterdag").addEventListener('click', function (event) {
    if(zaterdag.classList.contains("timetable-option-active")) {
        return;
    }
    vrijdag.classList.remove("timetable-option-active");
    zaterdag.classList.add("timetable-option-active");
    zondag.classList.remove("timetable-option-active");
    maandag.classList.remove("timetable-option-active");
    dinsdag.classList.remove("timetable-option-active");

    var vrijdag_artists = document.getElementsByClassName("vrijdag");
    for (var i = 0; i < vrijdag_artists.length; ++i) {
    var item = vrijdag_artists[i];  
    item.style.display = "none"
    }
    var zaterdag_artists = document.getElementsByClassName("zaterdag");
    for (var i = 0; i < zaterdag_artists.length; ++i) {
    var item = zaterdag_artists[i];  
    item.style.display = "block"
    }
    var zondag_artists = document.getElementsByClassName("zondag");
    for (var i = 0; i < zondag_artists.length; ++i) {
    var item = zondag_artists[i];  
    item.style.display = "none"
    }
    var maandag_artists = document.getElementsByClassName("maandag");
    for (var i = 0; i < maandag_artists.length; ++i) {
    var item = maandag_artists[i];  
    item.style.display = "none"
    }
    var dinsdag_artists = document.getElementsByClassName("dinsdag");
    for (var i = 0; i < dinsdag_artists.length; ++i) {
    var item = dinsdag_artists[i];  
    item.style.display = "none"
    }
});

document.getElementById("zondag").addEventListener('click', function (event) {
    if(zondag.classList.contains("timetable-option-active")) {
        return;
    }
    vrijdag.classList.remove("timetable-option-active");
    zaterdag.classList.remove("timetable-option-active");
    zondag.classList.add("timetable-option-active");
    maandag.classList.remove("timetable-option-active");
    dinsdag.classList.remove("timetable-option-active");

    var vrijdag_artists = document.getElementsByClassName("vrijdag");
    for (var i = 0; i < vrijdag_artists.length; ++i) {
    var item = vrijdag_artists[i];  
    item.style.display = "none"
    }
    var zaterdag_artists = document.getElementsByClassName("zaterdag");
    for (var i = 0; i < zaterdag_artists.length; ++i) {
    var item = zaterdag_artists[i];  
    item.style.display = "none"
    }
    var zondag_artists = document.getElementsByClassName("zondag");
    for (var i = 0; i < zondag_artists.length; ++i) {
    var item = zondag_artists[i];  
    item.style.display = "block"
    }
    var maandag_artists = document.getElementsByClassName("maandag");
    for (var i = 0; i < maandag_artists.length; ++i) {
    var item = maandag_artists[i];  
    item.style.display = "none"
    }
    var dinsdag_artists = document.getElementsByClassName("dinsdag");
    for (var i = 0; i < dinsdag_artists.length; ++i) {
    var item = dinsdag_artists[i];  
    item.style.display = "none"
    }
})

document.getElementById("maandag").addEventListener('click', function (event) {
    if(maandag.classList.contains("timetable-option-active")) {
        return;
    }
    vrijdag.classList.remove("timetable-option-active");
    zaterdag.classList.remove("timetable-option-active");
    zondag.classList.remove("timetable-option-active");
    maandag.classList.add("timetable-option-active");
    dinsdag.classList.remove("timetable-option-active");

    var vrijdag_artists = document.getElementsByClassName("vrijdag");
    for (var i = 0; i < vrijdag_artists.length; ++i) {
    var item = vrijdag_artists[i];  
    item.style.display = "none"
    }
    var zaterdag_artists = document.getElementsByClassName("zaterdag");
    for (var i = 0; i < zaterdag_artists.length; ++i) {
    var item = zaterdag_artists[i];  
    item.style.display = "none"
    }
    var zondag_artists = document.getElementsByClassName("zondag");
    for (var i = 0; i < zondag_artists.length; ++i) {
    var item = zondag_artists[i];  
    item.style.display = "none"
    }
    var maandag_artists = document.getElementsByClassName("maandag");
    for (var i = 0; i < maandag_artists.length; ++i) {
    var item = maandag_artists[i];  
    item.style.display = "block"
    }
    var dinsdag_artists = document.getElementsByClassName("dinsdag");
    for (var i = 0; i < dinsdag_artists.length; ++i) {
    var item = dinsdag_artists[i];  
    item.style.display = "none"
    }
})

document.getElementById("dinsdag").addEventListener('click', function (event) {
    if(dinsdag.classList.contains("timetable-option-active")) {
        return;
    }
    vrijdag.classList.remove("timetable-option-active");
    zaterdag.classList.remove("timetable-option-active");
    zondag.classList.remove("timetable-option-active");
    maandag.classList.remove("timetable-option-active");
    dinsdag.classList.add("timetable-option-active");

    var vrijdag_artists = document.getElementsByClassName("vrijdag");
    for (var i = 0; i < vrijdag_artists.length; ++i) {
    var item = vrijdag_artists[i];  
    item.style.display = "none"
    }
    var zaterdag_artists = document.getElementsByClassName("zaterdag");
    for (var i = 0; i < zaterdag_artists.length; ++i) {
    var item = zaterdag_artists[i];  
    item.style.display = "none"
    }
    var zondag_artists = document.getElementsByClassName("zondag");
    for (var i = 0; i < zondag_artists.length; ++i) {
    var item = zondag_artists[i];  
    item.style.display = "none"
    }
    var maandag_artists = document.getElementsByClassName("maandag");
    for (var i = 0; i < maandag_artists.length; ++i) {
    var item = maandag_artists[i];  
    item.style.display = "none"
    }
    var dinsdag_artists = document.getElementsByClassName("dinsdag");
    for (var i = 0; i < dinsdag_artists.length; ++i) {
    var item = dinsdag_artists[i];  
    item.style.display = "block"
    }
})