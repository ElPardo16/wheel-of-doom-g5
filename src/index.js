//variables globales
var lista = document.getElementById("info")
var inputName = document.getElementById("name")
var btnAdd = document.getElementById("add")
var btnPlay = document.getElementById("play")
var saveListNames = [
    {
        name: "profe juliana",
        sacrificado: false
    },
    {
        name: "profe jimmy",
        sacrificado: false
    }
]
var listNamesGame = [...saveListNames]
var deads = 0;
var animationTime = 2000;
//Robinson

//Mardelys

//Bryan

//Angela

//Andres
function delay(seconds){
    seconds = seconds || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, seconds);
    });
}
function drawArray(names){
    lista.innerHTML = ""
    names.forEach(({name, sacrificado}) => {
        if(!sacrificado){
            lista.innerHTML += `<li><span>${name}</span><a href="javascript:void(0)" onclick="deleteName(this)"><span class="material-symbols-outlined">delete</span></a></li>`
        }else{
            lista.innerHTML += `<li><span class="dead">${name}</span><a href="javascript:void(0)" onclick="deleteName(this)"><span class="material-symbols-outlined">delete</span></a></li>`
        }
    })
}
function addName(){
    if (!listNamesGame.some(({name}) => name == inputName.value.toLowerCase())){
        if(inputName.value != ""){
            listNamesGame.push({
                name: inputName.value.toLowerCase(),
                sacrificado: false
            })
            drawArray(listNamesGame)
        }else{
            console.log("Vacio")
        }
    }else{
        console.log("repite")
    }
}
function deleteName(element){
    let txtName = element.previousElementSibling.innerHTML
    listNamesGame = listNamesGame.filter(({name}) => name != txtName)
    drawArray(listNamesGame)
}
async function sacrifice(victims){
    let ready = false
    let indexRandom = Math.floor(Math.random() * listNamesGame.length)
    while(!ready){
        if(deads < listNamesGame.length){
            if(victims[indexRandom].sacrificado){
                indexRandom = Math.floor(Math.random() * listNamesGame.length)
            }else{
                /* ready = true */
                console.log("1 menos")
                await delay(1000)
                // llamar animacion
                victims[indexRandom].sacrificado = true
                drawArray(victims)
                deads++
            }
        }else{
            ready = true
            //dialogo
            console.log("se acabaron Game over")
            await delay(1000)
            alert("perdio")
            document.location.href = "game-over.html"
        }
        //drawArray(listNamesGame)
    }
}
function animationRandom(){
    // hacer variable indexAnimation y asignar numero random entre 0 y 3
    switch(indexAnimation){
        case 0:
            //hace algo
            // cambiar valor de animationTime al tiempo que dura la anim
            animationTime = 3000
            break;
        case 1:
            //hace algo
            break;
        // terminar
    }
}
function restartGame(){

}
function soundFX(){

}
function playGame(){
    sacrifice(listNamesGame)
    btnPlay.classList.add("disable")
}
drawArray(listNamesGame)
//setTimeout(() => sacrifice(listNamesGame), 2000)
/* setTimeout(() => sacrifice(listNamesGame), 4000)
setTimeout(() => sacrifice(listNamesGame), 6000)
setTimeout(() => sacrifice(listNamesGame), 12000) */
//btnAdd.addEventListener("click" , addName)