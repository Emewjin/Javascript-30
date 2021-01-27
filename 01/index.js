function removeAnimation(e){
    this.classList.remove(PLAYING);
}

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio===null) return;
    audio.play();
    audio.currentTime=0;
}

function playAnimation(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add(PLAYING);
    
}

const PLAYING = "playing";
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removeAnimation));
window.addEventListener("keydown", playAnimation);
window.addEventListener("keydown", playAudio);