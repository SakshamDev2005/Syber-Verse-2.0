function ff() {
    var f = document.getElementById("social");
    var computedStyle = window.getComputedStyle(f);

    if (computedStyle.display === "none") {
        f.style.display = "flex";
        f.style.alignItems = "center";
        f.style.justifyContent = "space-around";
    }
    
    else {
        f.style.display = "none";
    }

}

function fff() {
    var ff = document.getElementById("about");
    var computedStyle1 = window.getComputedStyle(ff);

    if (computedStyle1.display === "none") {
        ff.style.display = "flex";
        ff.style.alignItems = "center";
        ff.style.justifyContent = "space-around";
        ff.style.color = "white";
    }

    else {
        ff.style.display = "none";
    }

}