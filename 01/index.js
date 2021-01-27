function removeAnimation(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove(PLAYING);
}

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio===null) return;
    audio.play();
    audio.currentTime=0;
}

function pressAnimation(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add(PLAYING);
    
}

const PLAYING = "playing";
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removeAnimation));
window.addEventListener("keydown", pressAnimation);
window.addEventListener("keydown", playAudio);