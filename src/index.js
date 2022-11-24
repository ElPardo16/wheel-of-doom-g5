//Robinson

//Mardelys

const btnplay = document.getElementById('#play-ruleta');



function rotacionRuleta(){
   gsap.to('.ruleta', {
   duration: 2,
   rotate : '130deg',
   x: 0,
   
})

};

function rotacionHacha(){
    gsap.to('.hacha',{
   duration : 0.5,
   rotate : '700deg',
   x: -100,
   y: -350,
   transition: -6,
   scale: 0.5,
   ease: Back.easeIn,
})
};
   

//Bryan

//Angela

//Andres