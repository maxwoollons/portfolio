let toggle = document.getElementById("cb");
let navbar = document.getElementById("navbar");
let parallaxtext = document.getElementById("parallax");
let css = document.getElementById("css");
let html = document.getElementById("html");
let form = document.getElementById("form");


if (localStorage.getItem("tutorial") === "true") {
    document.getElementsByClassName("tutorial")[0].style.display = "none";
    document.getElementsByClassName("tutorial")[1].style.display = "none";
}


let hidetut = () => {
    document.getElementsByClassName("tutorial")[0].style.display = "none";
    document.getElementsByClassName("tutorial")[1].style.display = "none";
    localStorage.setItem("tutorial", "true");

}


if (localStorage.getItem("darkmode") === "true" ? toggle.checked = true : toggle.checked = false) {
    document.body.style.backgroundColor = "#242526";
    document.body.style.color = "white";
    navbar.style.backgroundColor = "#424040";
    form.style.backgroundColor = "#474747";
}


let darkmode = () => { 
    if (toggle.checked) {
        // is darkmode
        localStorage.setItem("darkmode", "true");
        console.log("checked")
        document.body.style.backgroundColor = "#242526";
        document.body.style.color = "white";
        navbar.style.backgroundColor = "#424040";
        localStorage.setItem("tutorial", "true");
        parallaxtext.style.color = "white";
        form.style.backgroundColor = "#474747";
      
        hidetut()

    } else {
        localStorage.setItem("darkmode", "false");
        // is lightmode
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
        navbar.style.backgroundColor = "#666565";
        localStorage.setItem("tutorial", "true");
        parallaxtext.style.color = "white";
        form.style.backgroundColor = "#e0dcdc";

        hidetut()
    }
}

toggle.addEventListener("click",darkmode);

