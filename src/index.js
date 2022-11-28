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

gsap.from('.cuerpos',{
    duration: 2.5, ease: "elastic.out(1, 0.3)", x: 500
})

gsap.to("#sierra_girar", { rotation: 1800, duration: 4, ease: "none" });

gsap.to("#img_hacha", {
    x: -240, 
    y: -200, 
    duration: 1,
    delay: 1,
});

gsap.to("#img_hacha",{
    rotation: -750,
    duration: 1,
    ease: "none",
    delay: 1,
});

gsap.to(".cuerpo_dospartes",{
    ease: "power4.out",
    y:180,
    delay: 2.5,
});

gsap.to(".parte_1_cuerpo",{
    rotation: 45,
    duration: 1,
    delay: 3,
});

gsap.to(".parte_2_cuerpo",{
    rotation: -45,
    duration: 1,
    delay: 3,
});


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

