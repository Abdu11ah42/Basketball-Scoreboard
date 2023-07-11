let hScore=0, gScore=0
let home=document.getElementById("home")
let guest=document.getElementById("guest")

function addOneH(){
    hScore+=1
    home.textContent=hScore
}

function addTwoH(){
    hScore+=2
    home.textContent=hScore
}

function addThreeH(){
    hScore+=3
    home.textContent=hScore
}

function addOneG(){
    gScore+=1
    guest.textContent=gScore
}

function addTwoG(){
    gScore+=2
    guest.textContent=gScore
}

function addThreeG(){
    gScore+=3
    guest.textContent=gScore
}