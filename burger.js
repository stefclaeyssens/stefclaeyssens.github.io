document.getElementById("menu").addEventListener('click', function (event) {
    var burger = document.getElementById("burger");
    var closedimage = document.getElementById("menu-closed-icon");
    var closedtext = document.getElementById("menu-closed-text");
    var openimage = document.getElementById("menu-opened-icon");
    var opentext = document.getElementById("menu-opened-text");
    if(burger.classList.contains("active")){
        burger.classList.remove("active");
        burger.style.transform = "translateY(-100%)";
        closedimage.classList.remove("invisible");
        closedtext.classList.remove("invisible");
        openimage.classList.add("invisible");
        opentext.classList.add("invisible");
        return;
    }
    burger.classList.add("active");
    burger.style.transform = "translateY(0%)";
    closedimage.classList.add("invisible");
    closedtext.classList.add("invisible");
    openimage.classList.remove("invisible");
    opentext.classList.remove("invisible");
});

