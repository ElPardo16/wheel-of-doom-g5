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
   },'-=3')
   
   

   tl.to('.hacha',{
      duration : 0.9,
      rotate : '700deg',
      x: -300,
      y: -250,
      scale: 0.5,
   },'-=0.7')

   tl.to('.cuerpo-ruleta2', {
      duration: 0.4,
      rotate : '-12deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'-=0.1')
   
   tl.to('.cuerpo-ruleta1', {
      duration: 0.4,
      rotate : '15deg',
      x: 0,
      y: 0,
      repeat: 0,
      display: 'block',
   },'-=0.3')
   tl.to('.sangre-ruleta', {
      duration: 0.3,
      rotate : '15deg',
      x:6,
      y: 0,
      repeat: 0,
      display: 'block',
   },'-=0.3')
};

//Bryan

//Angela

//Andres