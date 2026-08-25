const nav=document.querySelector(".nav");
const menuBtn=document.querySelector(".menu-btn");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const progress=document.querySelector(".progress");
const glow=document.querySelector(".cursor-glow");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+"%";
});
window.addEventListener("mousemove",e=>{
  if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";}
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});
