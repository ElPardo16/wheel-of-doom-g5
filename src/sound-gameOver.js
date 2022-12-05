let sounds = new Audio('./src/sounds/game-over-sonido.mp3');
var mute = false
var lastVolume = .5

window.addEventListener("load", _ => {
  sounds.volume = .5
  sounds.play()
})
music.addEventListener('click', _ => {
  mute = !mute
  if(mute){
    music.firstChild.innerHTML = "volume_off"
    vol.classList.add("h")
    sounds.volume = 0
  }else{
    music.firstChild.innerHTML = "volume_up"
    vol.classList.remove("h")
    sounds.volume = lastVolume
  }
})
vol.addEventListener('change', e => {
  sounds.volume, lastVolume = e.currentTarget.value / 100;
  lastVolume = sounds.volume
})