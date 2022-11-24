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
//Robinson

//Mardelys

//Bryan

//Angela

//Andres
function drawArray(names){
    lista.innerHTML = ""
    names.forEach(({name}) => lista.innerHTML += `<li><span>${name}</span><a href="javascript:void(0)" onclick="deleteName(this)"><span class="material-symbols-outlined">delete</span></a></li>`)
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
function sacrifice(){
    
}
function restartGame(){

}
function soundFX(){
    
}
drawArray(listNamesGame)
btnAdd.addEventListener("click" , addName)