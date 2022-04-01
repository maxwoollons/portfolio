let toggle = document.getElementById("cb");
let navbar = document.getElementById("navbar");

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
        hidetut()
    } else {
        localStorage.setItem("darkmode", "false");
        // is lightmode
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
        navbar.style.backgroundColor = "#666565";
        localStorage.setItem("tutorial", "true");
        hidetut()
    }
}

toggle.addEventListener("click",darkmode);

