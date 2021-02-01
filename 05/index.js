const panels = document.querySelectorAll(".panel");
const OPEN = "open";
const OPENACTIVE = "open-active";

function toggleOpen(){
     this.classList.toggle(OPEN);
}
function toggleActive(e){
    console.log(e.propertyName);
    if (e.propertyName === 'font-size'){
        this.classList.toggle(OPENACTIVE);
    }
}
panels.forEach(panel=>panel.addEventListener("click", toggleOpen));
panels.forEach(panel=>panel.addEventListener("transitionend", toggleActive));
