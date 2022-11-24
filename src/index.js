//Robinson

//Mardelys

var $playRuleta = document.getElementById('#play-ruleta');
var tl = gsap.timeline();


function playRuleta(){
      for(i=0; $playRuleta === true; i++){
      tl.to('.ruleta', {
         duration: 1,
         rotate : '360deg',
         x: 0,
         repeat: 1,
      },'0')
   
      tl.to('.cuerpo-ruleta', {
         duration: 1,
         rotate : '360deg',
         x: 0,
         repeat: 1,
      },'-=2')
   
      tl.to('.hacha',{
         duration : 1,
         rotate : '700deg',
         x: 5,
         y: -450,
         scale: 0.5,
      },'-=1')
      tl.from('.hacha',{
         duration: 0.5,
         ease: 'linear',
         x:0,
         y:-10,
         scale:2,
      },'-=2')
   }

};



//Bryan

//Angela

//Andres