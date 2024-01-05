console.log("nigga?")



let s1 = document.getElementById("space1")
let s2 = document.getElementById("space2")
let s3 = document.getElementById("space3")
let s4 = document.getElementById("space4")
let s5 = document.getElementById("space5")
let s6 = document.getElementById("space6")
let s7 = document.getElementById("space7")
let s8 = document.getElementById("space8")
let s9 = document.getElementById("space9")
let st1 = document.getElementById("space1").innerText
let st2 = document.getElementById("space2").innerText
let st3 = document.getElementById("space3").innerText
let st4 = document.getElementById("space4").innerText
let st5 = document.getElementById("space5").innerText
let st6 = document.getElementById("space6").innerText
let st7 = document.getElementById("space7").innerText
let st8 = document.getElementById("space8").innerText
let st9 = document.getElementById("space9").innerText
let x1 = document.getElementById("x1")
let x2 = document.getElementById("x2")
let x3 = document.getElementById("x3")
let x4 = document.getElementById("x4")
let x5 = document.getElementById("x5")
let x6 = document.getElementById("x6")
let x7 = document.getElementById("x7")
let x8 = document.getElementById("x8")
let x9 = document.getElementById("x9")
let o1 = document.getElementById("o1")
let o2 = document.getElementById("o2")
let o3 = document.getElementById("o3")
let o4 = document.getElementById("o4")
let o5 = document.getElementById("o5")
let o6 = document.getElementById("o6")
let o7 = document.getElementById("o7")
let o8 = document.getElementById("o8")
let o9 = document.getElementById("o9")
let h1 = document.getElementById("hline1")
let h2 = document.getElementById("hline2")
let h3 = document.getElementById("hline3")
let v1 = document.getElementById("vline1")
let v2 = document.getElementById("vline2")
let v3 = document.getElementById("vline3")
let sl1 = document.getElementById("s1")
let sl2 = document.getElementById("s2")
let cplay = "x"
let win = 0
let pos = [ , , , , , , , , , ]
let btn = document.getElementById("btn")
let winner = document.getElementById("winner")
let xwin = document.getElementById("xwin")
let ywin = document.getElementById("ywin")
let draw = document.getElementById("draw")
let b = document.getElementById("b")
let c = document.getElementById("c")


btn.addEventListener("click", (e) => {
    restart()
        
})

btn.addEventListener("mouseover", (e) => {
    btn.innerText = "Restart"
    document.getElementById("header").style.animationName = ""
})






elisten()

function elisten() {
    s1.addEventListener("click", (e) => {
        if (document.getElementById("space1").innerText == "" && win == 0) {
            if (cplay == "x" && st1 == "") {
            x1.style.display = "block"
            cplay = "o"
            pos[0] = 0
            }else{
                if (cplay == "o" && st1 == "") {
                    o1.style.display = "block"
                    cplay = "x"
                    pos[0] = 1
                } 
            }
        }
        check()
    })
    s2.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space2").innerText == "" && win == 0) {
            x2.style.display = "block"
            cplay = "o"
            pos[1] = 0
            } else {
                if (cplay == "o" && document.getElementById("space2").innerText == "" && win == 0) {
                o2.style.display = "block"
                cplay = "x"
                pos[1] = 1
            }
        }
        check()
    })
    s3.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space3").innerText == "" && win == 0) {
            x3.style.display = "block"
            cplay = "o"
            pos[2] = 0
        }else {
            if (cplay == "o" && document.getElementById("space3").innerText == "" && win == 0) {
            o3.style.display = "block"
            cplay = "x"
            pos[2] = 1
        } 
        }
        check()
    })
    s4.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space4").innerText == "" && win == 0) {
            x4.style.display = "block"
            cplay = "o"
            pos[3] = 0
        } else {
            if (cplay == "o" && document.getElementById("space4").innerText == "" && win == 0) {
            o4.style.display = "block"
            cplay = "x"
            pos[3] = 1
        }
        }
        check()
    })
    s5.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space5").innerText == "" && win == 0) {
            x5.style.display = "block"
            cplay = "o"
            pos[4] = 0
        }else {
            if (cplay == "o" && document.getElementById("space5").innerText == "" && win == 0) {
            o5.style.display = "block"
            cplay = "x"
            pos[4] = 1
        } 
        }
        check()
    })
    s6.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space6").innerText == "" && win == 0) {
            x6.style.display = "block"
            cplay = "o"
            pos[5] = 0
        }else {
            if (cplay == "o" && document.getElementById("space6").innerText == "" && win == 0) {
            o6.style.display = "block"
            cplay = "x"
            pos[5] = 1
            } 
            else{
    
            }
        }
        check()
    })
    s7.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space7").innerText == "" && win == 0) {
            x7.style.display = "block"
            cplay = "o"
            pos[6] = 0
        } else {
            if (cplay == "o" && document.getElementById("space7").innerText == "" && win == 0) {
            o7.style.display = "block"
            cplay = "x"
            pos[6] = 1
        }
        }
        check()
    })
    s8.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space8").innerText == "" && win == 0) {
            x8.style.display = "block"
            cplay = "o"
            pos[7] = 0
        } else {
            if (cplay == "o" && document.getElementById("space8").innerText == "" && win == 0) {
            o8.style.display = "block"
            cplay = "x"
            pos[7] = 1
        }
        }
        check()
    })
    s9.addEventListener("click", (e) => {
        if (cplay == "x" && document.getElementById("space9").innerText == "" && win == 0) {
            x9.style.display = "block"
            cplay = "o"
            pos[8] = 0
        }else {
            if (cplay == "o" && document.getElementById("space9").innerText == "" && win == 0) {
            o9.style.display = "block"
            cplay = "x"
            pos[8] = 1
        } 
        }
        check()
    })
}

 function check() {
    //vertical
    if (pos[0] == pos[3] && pos[3] == pos[6]) {
        if (pos[0] != undefined) {
             v1.style.display = "block"
             if (pos[0] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
        }  
    }if (pos[1] == pos[4] && pos[4] == pos[7]) {
        if (pos[1] != undefined) {
            v2.style.display = "block"
            if (pos[1] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }if (pos[2] == pos[5] && pos[5] == pos[8]) {
        if (pos[2] != undefined) {
            v3.style.display = "block"
            if (pos[2] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }
    else{
        if (pos[0] != undefined && pos[1] != undefined && pos[2] != undefined && pos[3] != undefined && pos[4] != undefined && pos[5] != undefined && pos[6] != undefined && pos[7] != undefined && pos[8] != undefined) {
            drawer()
       }
    }
    //horizontal
    if (pos[0] == pos[1] && pos[1] == pos[2]) {
        if (pos[0] != undefined) {
            h1.style.display = "block"
            if (pos[0] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }
    console.log(pos[0], pos[1], pos[2])

    if (pos[3] == pos[4] && pos[4] == pos[5]) {
        if (pos[3] != undefined) {
            h2.style.display = "block"
            if (pos[3] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }
    console.log(pos[3], pos[4], pos[5])

    if (pos[6] == pos[7] && pos[7] == pos[8]) {
        if (pos[6] != undefined) {
            h3.style.display = "block"
            if (pos[6] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }
    console.log(pos[6], pos[7], pos[8])
    //slant
    if (pos[0] == pos[4] && pos[4] == pos[8]) {
        if (pos[0] != undefined) {
            sl2.style.display = "block"
            if (pos[0] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }

    if (pos[2] == pos[4] && pos[4] == pos[6]) {
        if (pos[4] != undefined) {
            sl1.style.display = "block"
            if (pos[2] == "0") {
                winner.style.animationName = ""
                xwinner()
             } else {
                winner.style.animationName = ""
                ywinner()
             }
       }
    }

 }

function xwinner() {
    ywin.style.display = "none"
    draw.style.display = "none"
    win = 1
    winner.style.animationName = ""
    xwin.style.display = "block"
    winner.style.animationName = "winner"
}

function ywinner() {
    win = 1
    xwin.style.display = "none"
    draw.style.display = "none"
    winner.style.animationName = ""
    ywin.style.display = "block"
    winner.style.animationName = "winner"
}

function drawer() {
    win = 1
    xwin.style.display = "none"
    ywin.style.display = "none"
    winner.style.animationName = ""
    draw.style.display = "block"
    winner.style.animationName = "winner"
}


function restart() {
    document.getElementById("header").style.animationName = "restart"
    cplay = "x"
    win = 0
    pos = [ , , , , , , , , , ]
    x1.style.display = "none"
    x2.style.display = "none"
    x3.style.display = "none"
    x4.style.display = "none"
    x5.style.display = "none"
    x6.style.display = "none"
    x7.style.display = "none"
    x8.style.display = "none"
    x9.style.display = "none"
    o1.style.display = "none"
    o2.style.display = "none"
    o3.style.display = "none"
    o4.style.display = "none"
    o5.style.display = "none"
    o6.style.display = "none"
    o7.style.display = "none"
    o8.style.display = "none"
    o9.style.display = "none"
    v1.style.display = "none"
    v2.style.display = "none"
    v3.style.display = "none"
    h1.style.display = "none"
    h2.style.display = "none"
    h3.style.display = "none"
    sl1.style.display = "none"
    sl2.style.display = "none"
}

function restart1() {
    cplay = "x"
    win = 0
    pos = [ , , , , , , , , , ]
    x1.style.display = "none"
    x2.style.display = "none"
    x3.style.display = "none"
    x4.style.display = "none"
    x5.style.display = "none"
    x6.style.display = "none"
    x7.style.display = "none"
    x8.style.display = "none"
    x9.style.display = "none"
    o1.style.display = "none"
    o2.style.display = "none"
    o3.style.display = "none"
    o4.style.display = "none"
    o5.style.display = "none"
    o6.style.display = "none"
    o7.style.display = "none"
    o8.style.display = "none"
    o9.style.display = "none"
    v1.style.display = "none"
    v2.style.display = "none"
    v3.style.display = "none"
    h1.style.display = "none"
    h2.style.display = "none"
    h3.style.display = "none"
    sl1.style.display = "none"
    sl2.style.display = "none"
}


 winner.addEventListener("animationend", (e) => {
    winner.style.animationName = ""
    restart1()
    })
