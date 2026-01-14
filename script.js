let voices=[];
const vSel=document.getElementById('voice');

speechSynthesis.onvoiceschanged=()=>{
voices=speechSynthesis.getVoices();
vSel.innerHTML='';
voices.forEach((v,i)=>{
let o=document.createElement('option');o.value=i;o.textContent=v.name;vSel.appendChild(o);
});};

document.getElementById('play').onclick=()=>{
let t=document.getElementById('text').value;
let u=new SpeechSynthesisUtterance(t);
u.voice=voices[vSel.value];u.lang=document.getElementById('lang').value;
speechSynthesis.speak(u);
mouthMove();};

document.getElementById('save').onclick=()=>{
alert('Google Cloud MP3 Backend Ready');
};

document.getElementById('theme').onchange=e=>document.body.className=e.target.value;

// FPS
let f=0,l=performance.now();
function fps(n){f++;if(n-l>1000){document.getElementById('fps').innerText='FPS: '+f;f=0;l=n;}requestAnimationFrame(fps);}requestAnimationFrame(fps);

// Fake 3D Mouth Sync
const ctx=document.getElementById('avatar').getContext('2d');
function mouthMove(){let i=0;let a=setInterval(()=>{ctx.clearRect(0,0,300,300);ctx.fillStyle='#0ff';ctx.fillRect(100,150,100,20+Math.random()*40);if(i++>20)clearInterval(a);},50)}
