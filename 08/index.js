const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

context.strokeStyle="black";
context.lineJoin="round";
context.lineCap="round";
context.lineWidth =50;

//flag들
let direction = true;
let isDrawing = false;
//클릭중일때 트루로 할것

let lastX = 0;
let lastY = 0;
//색상설정
let hue = 0;

function draw(e){
  if(!isDrawing) return; //마우스다운 이벤트가 아닐때는 발생하지 않도록 제어
  console.log(e);  
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  //시작점
  context.moveTo(lastX, lastY);
  //끝나는점
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX;
    // lastY = e.offsetY;
  hue++
  if (context.lineWidth >= 100 || context.lineWidth <= 1){
      direction = !direction;
      //direction=false라고 안 하는 이유?
  }
  if (direction){
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
};

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
// canvas.addEventListener("mouseout", () => isDrawing = false);


//delete버튼
const reset = document.querySelector(".reset");

function resetAll(){
  window.location.reload();
}

function init(){
    reset.addEventListener("click", resetAll);
}

init();