// Scroll Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
};

// Digital Signature with Confetti
let signed = false;
function signPledge() {
    if(!signed) {
        let count = document.getElementById('count');
        count.innerText = parseInt(count.innerText) + 1;
        document.getElementById('signBtn').innerText = "Verified ✓";
        document.getElementById('signBtn').style.background = "#138808";
        document.getElementById('pledge-stats').innerText = `Thank you! You are now part of ${count.innerText} students committed to integrity.`;
        signed = true;
        confetti();
    } else {
        alert("You have already signed the pledge.");
    }
}

// Confetti Effect
function confetti() {
    const colors = ['#ff9933','#138808','#00aaff','#ff33aa'];
    for(let i=0;i<100;i++){
        const conf = document.createElement('div');
        conf.classList.add('confetti');
        conf.style.left = Math.random()*100+'%';
        conf.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.body.appendChild(conf);
        setTimeout(()=>{conf.remove()},3000);
    }
}

// Dynamic Hero Text
const dynamicTexts = ["Cultural Respect.", "Global Harmony.", "Youth Leadership.", "One Team Nation."];
let index = 0;
const dynamicEl = document.getElementById("dynamic-text");
setInterval(() => {
    index = (index + 1) % dynamicTexts.length;
    dynamicEl.innerText = dynamicTexts[index];
}, 3000);

// Particle Background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x<0||this.x>canvas.width) this.speedX*=-1;
        if(this.y<0||this.y>canvas.height) this.speedY*=-1;
    }
    draw() {
        ctx.fillStyle = 'rgba(19,136,8,0.8)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function initParticles(){
    particlesArray=[];
    for(let i=0;i<150;i++){particlesArray.push(new Particle());}
}
function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{p.update(); p.draw();});
    requestAnimationFrame(animateParticles);
}
window.addEventListener('resize',function(){canvas.width=window.innerWidth; canvas.height=window.innerHeight; initParticles();});
initParticles();
animateParticles();
