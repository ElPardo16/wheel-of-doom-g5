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

var tl = gsap.timeline();
const $playRuleta = document.querySelector('#play-ruleta');

$playRuleta.addEventListener('click', (e) => {
   e.preventDefault();
   document.value = true;
   for(i = 0;document.value === true;i++) {
      tl.restart(false,false)
      return playRuleta();
   };
});

function playRuleta(){
   tl.to('.ruleta', {
      duration: 1,
      rotate : '360deg',
      x: 0,
      repeat: 2,
   },'0')


   tl.to('.cuerpo-ruleta', {
      duration: 1,
      rotate : '360deg',
      x: 0,
      y: 0,
      repeat: 2,
      display: 'none',
   },'0')
   
   

   tl.to('.hacha',{
      duration : 0.9,
      rotate : '700deg',
      x: '-60%',
      y: '-30%',
      scale: 0.5,
   },'+2')
   tl.from('.hacha',{
      duration : 0.9,
      rotate : '0deg',
      x: '0%',
      y: '10%',
      scale: 1,
   },'+3.5')

   tl.to('.cuerpo-ruleta2', {
      duration: 0.4,
      rotate : '-12deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'+3')
   
   tl.to('.cuerpo-ruleta1', {
      duration: 0.4,
      rotate : '15deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'+3')
   tl.to('.sangre-ruleta', {
      duration: 0.3,
      rotate : '15deg',
      x:6,
      y: 0,
      repeat: 0,
      display: 'block',
   },'+3')
};

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
function sacrifice(){
    
}
function restartGame(){

}
function soundFX(){

}
drawArray(listNamesGame)
//btnAdd.addEventListener("click" , addName)