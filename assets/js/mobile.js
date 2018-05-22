function myMobileMenu() {
    var x = document.getElementById("myNav");
    if (x.className === "navLink") {
        x.className += " responsive";
    } else {
        x.className = "navLink";
    }
}


