//Robinson

//Mardelys

const btnplay = document.getElementById('#play-ruleta');
const animacioRuleta = document.getElementById('#animacion-ruleta');
class ANIMACION{
   constructor(animacioRuleta){
   this.canPlay = false;
}
}


function rotacionRuleta(){
   gsap.to('.ruleta', {
   duration: 1,
   rotate : '360deg',
   x: 0,

})

}

function rotacionHacha(){
    gsap.to('.hacha',{
   duration : 1,
   rotate : '700deg',
   x: -100,
   y: -350,
   scale: 0.5,
})
}
   
   

btnplay.addEventListener("click", (e) => {
   rotacionRuleta()
})construc
//Bryan

//Angela

//Andres