
var btn1 = document.querySelector("#aboutb")
var btn2 = document.querySelector("#socialb")


btn1.addEventListener("click",function() {
    var about = document.getElementById("about");

    if (about.style.display === "none") {
        about.style.display = "flex";
        about.style.alignItems = "center";
        about.style.justifyContent = "space-around";
    }
    
    else {
        about.style.display = "none";
    }

} )

btn2.addEventListener("click",function() {
    var social = document.getElementById("social");

    if (social.style.display === "none") {
        social.style.display = "flex";
        social.style.alignItems = "center";
        social.style.justifyContent = "space-around";
    }
    
    else {
        social.style.display = "none";
    }

} )