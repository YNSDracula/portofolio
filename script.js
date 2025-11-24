// Smooth scroll untuk semua link dengan hash
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Animasi naik bar secara stagger
window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach((bar, i) => {
    const pct = bar.getAttribute('data-percent') || 0;
    setTimeout(() => {
      bar.style.height = pct + '%';
      bar.style.boxShadow = `0 4px 12px rgba(255,69,0,0.5)`;
    }, i * 150);
  });
});
// JS: generate banyak dot neon
const colors = ["#ff4500", "#00ffff", "#ff00ff", "#00ff7f", "#ffd700"];
const neonBg = document.getElementById("neon-bg");
const totalDots = 80; // bisa ditambah untuk lebih ramai

for(let i=0; i<totalDots; i++){
  const dot = document.createElement("div");
  dot.classList.add("neon-dot");
  const size = Math.random()*6 + 4; // 4px - 10px
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  dot.style.top = `${Math.random()*100}%`;
  dot.style.left = `${Math.random()*100}%`;
  dot.style.animationDuration = `${Math.random()*8 + 4}s`; // 4-12s
  neonBg.appendChild(dot);
}


/* Animasi batang & Intersection Observer untuk project cards */
window.addEventListener('load', () => {
  // animate bars
  document.querySelectorAll('.bar-fill').forEach((el, i) => {
    const pct = el.getAttribute('data-percent') || 0;
    setTimeout(()=> { el.style.height = pct + '%'; }, 300 + (i*160));
  });

  // project cards appear
  const cards = document.querySelectorAll('.project-card');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add('show');
    });
  }, { threshold: 0.12 });
  cards.forEach(c=>obs.observe(c));
});

/* Toggle kontak panel */
function toggleContact(){
  const panel = document.getElementById('contactPanel');
  panel.classList.toggle('open');
  if(panel.classList.contains('open')){
    setTimeout(()=> panel.scrollIntoView({behavior:'smooth', block:'center'}), 250);
  }
}

/* HOBI PANEL: toggle + animate cards (fade-up) */
function toggleHobi(){
  const panel = document.getElementById('hobiPanel');
  const grid = document.getElementById('hobiGrid');
  const cards = grid.querySelectorAll('.hobi-card');

  const opening = !panel.classList.contains('open');
  panel.classList.toggle('open');

  if(opening){
    // small delay then animate cards sequentially
    cards.forEach((c, i) => {
      c.classList.remove('show');
      setTimeout(()=> c.classList.add('show'), 120 + i*90);
    });
    // scroll to panel for better UX
    setTimeout(()=> panel.scrollIntoView({behavior:'smooth', block:'center'}), 200);
  } else {
    // hide cards
    cards.forEach(c => c.classList.remove('show'));
  }
}

/* Smooth scroll for navbar links */
document.querySelectorAll('nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
  });
});