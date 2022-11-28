let sounds = new Audio('./src/sounds/fondo 1 .mp3');
let $soundNote = document.querySelector('')
window.onload = function startSound(){
  sounds.play();
};
$playRuleta.addEventListener('click', (e) => {
   e.preventDefault();
  sounds.pause();
});