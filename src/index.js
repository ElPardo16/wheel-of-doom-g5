//Robinson

//Mardelys

var tl = gsap.timeline();
const $playRuleta = document.querySelector('#play-ruleta');

$playRuleta.addEventListener('click', (e) => {
   e.preventDefault();
   document.value = true;
   for(i = 0;document.value === true;i++) {
      return playRuleta();
   };
});

function playRuleta(){
   tl.to('.ruleta', {
      duration: 1.5,
      rotate : '360deg',
      x: 0,
      repeat: 1,
   },'0')


   tl.to('.cuerpo-ruleta', {
      duration: 1.5,
      rotate : '360deg',
      x: 0,
      y: 0,
      repeat: 1,
      display: 'none',
   },'-=3')
   
   

   tl.to('.hacha',{
      duration : 1,
      rotate : '700deg',
      x: 0,
      y: -450,
      scale: 0.5,
   },'-=0.8')
   
   tl.to('.cuerpo-ruleta2', {
      duration: 1.5,
      rotate : '-10deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'-=0.1')
   tl.to('.cuerpo-ruleta1', {
      duration: 1.5,
      rotate : '10deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'-=1.6')

};

//Bryan

//Angela

//Andres