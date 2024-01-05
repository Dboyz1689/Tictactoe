console.log("nigga?")

let mbtn = document.getElementById("modes")
let modepane = document.getElementById("btnha")
let normal = document.getElementById("normal")
let compound = document.getElementById("compound")
let mode = 0
let c = document.getElementById("btnh")

mbtn.addEventListener("click", (e) => {
    if (mode == 0) {
        modepane.style.display = "block"
        modepane.style.animationName = "min"
        mbtn.style.backgroundColor= "white"
        mbtn.style.color= "rgb(218, 149, 58)"
        mode = 1
    }else{
        modepane.style.animationName = "mout"
        modepane.style.display = "none"
        mode = 0
        mbtn.style.color= "black"
        mbtn.style.backgroundColor= "rgb(235, 182, 113)"
    }
})

normal.addEventListener("click", (e) => {
    normal.style.backgroundColor= "white"
    normal.style.color= "rgb(218, 149, 58)"
    compound.style.color= "black"
    compound.style.backgroundColor= "rgb(235, 182, 113)"
    c.innerHTML = '<a href="home.html" id="c" class="c"><div class="btnhs" id="play">Play</div></a><div class="btnhs" id="modes">Modes</div>'
})

compound.addEventListener("click", (e) => {
    compound.style.backgroundColor= "white"
    compound.style.color= "rgb(218, 149, 58)"
    normal.style.color= "black"
    normal.style.backgroundColor= "rgb(235, 182, 113)"
    c.innerHTML = '<a href="compound.html" id="c" class="c"><div class="btnhs" id="play">Play</div></a><div class="btnhs" id="modes">Modes</div>'
})