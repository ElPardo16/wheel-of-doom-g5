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
//Robinson

//Mardelys

//Bryan

//Angela

//Andres
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
        listNamesGame.push({
            name: inputName.value.toLowerCase(),
            sacrificado: false
        })
        drawArray(listNamesGame)
    }else{
        console.log("repite")
    }
}
function deleteName(element){
    let txtName = element.previousElementSibling.innerHTML
    listNamesGame = listNamesGame.filter(({name}) => name != txtName)
    drawArray(listNamesGame)
}
function sacrifice(victims){
    let ready = false
    let indexRandom = Math.floor(Math.random() * listNamesGame.length)
    while(!ready){
        if(deads < listNamesGame.length){
            if(victims[indexRandom].sacrificado){
                indexRandom = Math.floor(Math.random() * listNamesGame.length)
            }else{
                ready = true
                victims[indexRandom].sacrificado = true
                deads++
            }
        }else{
            ready = true
            console.log("se acabaron")
        }
    }
    drawArray(listNamesGame)
}
function restartGame(){

}
function soundFX(){

}
drawArray(listNamesGame)
setTimeout(() => sacrifice(listNamesGame), 2000)
/* setTimeout(() => sacrifice(listNamesGame), 4000)
setTimeout(() => sacrifice(listNamesGame), 6000)
setTimeout(() => sacrifice(listNamesGame), 12000) */
//btnAdd.addEventListener("click" , addName)