document.addEventListener("DOMContentLoaded", () => {
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  intro.classList.add("hide");
  setTimeout(()=>{
    intro.style.display="none";
    main.style.display="flex";
    if(music) music.play();
  },1000);
});

let cards=document.querySelectorAll('.card');
let current=0;

function update(){
cards.forEach((c,i)=>{
  c.classList.remove('active','prev','next');
  if(i===current) c.classList.add('active');
  else if(i===(current-1+cards.length)%cards.length) c.classList.add('prev');
  else if(i===(current+1)%cards.length) c.classList.add('next');
});
}

function next(){ current=(current+1)%cards.length; update(); }
function prev(){ current=(current-1+cards.length)%cards.length; update(); }

let startX=0;
let slider=document.getElementById("slider");

slider.addEventListener("mousedown", e=>{ startX=e.clientX; });
slider.addEventListener("mouseup", e=>{ let diff=e.clientX-startX; if(diff>50) prev(); if(diff<-50) next(); });
slider.addEventListener("touchstart", e=>{ startX=e.touches[0].clientX; });
slider.addEventListener("touchend", e=>{ let diff=e.changedTouches[0].clientX-startX; if(diff>50) prev(); if(diff<-50) next(); });

update();
setInterval(next,4000);

let canvas=document.getElementById("hearts");
let ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let hearts=[];

function createHeart(){ return {x:Math.random()*canvas.width, y:-10, size:Math.random()*6+4, speed:Math.random()*2+1}; }
function drawHeart(x,y){ ctx.beginPath(); ctx.moveTo(x,y); ctx.bezierCurveTo(x-5,y-5,x-10,y+5,x,y+10); ctx.bezierCurveTo(x+10,y+5,x+5,y-5,x,y); ctx.fillStyle="red"; ctx.fill(); }
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(Math.random()<0.1) hearts.push(createHeart());
  for(let i=0;i<hearts.length;i++){
    let h=hearts[i];
    h.y+=h.speed;
    drawHeart(h.x,h.y);
    if(h.y>canvas.height) hearts.splice(i,1);
  }
  requestAnimationFrame(animate);
}
animate();
});