// elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// functions
function togglePlay(){
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}

function updateToggle(){
    if (this.paused) {
        // console.log('play');
        toggle.textContent = '►';
    } else {
        // console.log('pause');
        toggle.textContent = '❚❚';
    }
}

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name]=this.value;
    // console.log(this.value);
    // console.log(this.name);
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    // console.log(percent);
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const place = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = place; 
}

function keyMove(e){
    if (e.which === 37 && video.currentTime > 10){
        video.currentTime += parseFloat(skipButtons[0].dataset.skip);
    }
    if (e.which === 39 && video.currentTime < 570){
        video.currentTime += parseFloat(skipButtons[1].dataset.skip);
    }
    if (e.which === 32){
        // console.log('space');
        togglePlay();
    }
 
}

function volumeMove(e){
    if(e.which === 38 || e.which === 40){
        ranges[0].focus();
    }

}


// event listners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggle);
video.addEventListener("pause", updateToggle);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button=> button.addEventListener("click", skip));
ranges.forEach(range=>range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range=>range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", ()=> mousedown = true);
progress.addEventListener("mouseup", ()=> mousedown = false);

window.addEventListener("keydown", keyMove);
window.addEventListener("keydown", volumeMove);