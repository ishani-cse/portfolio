// Navbar, animations, scroll reveal, links wiring
(function(){
 const clean=u=>u.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");
 document.querySelectorAll("[data-link]").forEach(a=>{
  const k=a.dataset.link,v=k==="resume"?(CONFIG.resume||window.RESUME_DATA):CONFIG[k];
  if(v){a.href=k==="email"?"mailto:"+v:v; if(/^https?:/.test(v)&&k!=="resume"){a.target="_blank";a.rel="noopener";}}
  else a.addEventListener("click",e=>e.preventDefault());
  const s=a.querySelector("[data-show]"); if(s) s.textContent=v?(k==="email"?v:clean(v)):s.dataset.empty;
 });
 ["interniq","saferoute","gesture"].forEach(k=>{
  const box=document.querySelector('.shot[data-img="'+k+'"]');
  const src=CONFIG.images[k]||(window.PROJECT_IMAGES||{})[k]; if(!src||!box) return;
  box.querySelectorAll(".ph,.bar").forEach(n=>n.remove());
  const im=new Image(); im.src=src; im.alt=k+" project thumbnail"; box.classList.add("has-img"); box.appendChild(im);
 });
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

 /* hero name letter animation */
 const h1=document.querySelector(".s-hero h1");
 h1.setAttribute("aria-label",h1.textContent);
 h1.innerHTML=[...h1.textContent].map((c,i)=>'<span class="ch" aria-hidden="true" style="--i:'+i+'">'+c+'</span>').join("");

 /* mobile menu */
 const nav=document.getElementById("topnav");
 document.getElementById("burger").onclick=()=>nav.classList.toggle("open");
 document.querySelectorAll(".tn-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

 /* nav scroll (works even in sandboxed previews) */
 document.querySelectorAll('a[href^="#"]').forEach(a=>{
  const id=a.getAttribute("href"); if(id.length<2) return;
  a.addEventListener("click",e=>{
   const t=id==="#home"?null:document.querySelector(id);
   e.preventDefault();
   scrollTo({top:t?t.getBoundingClientRect().top+scrollY-64:0,behavior:reduce?"auto":"smooth"});
  });
 });

 /* scroll progress */
 const bar=document.getElementById("bar");
 addEventListener("scroll",()=>{const h=document.documentElement;bar.style.transform="scaleX("+(h.scrollTop/(h.scrollHeight-h.clientHeight||1))+")";},{passive:true});

 /* active nav link */
 const links=[...document.querySelectorAll(".tn-links a[href^='#']")];
 const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id));}),{rootMargin:"-45% 0px -50% 0px"});
 ["about","life","skills","projects","contact"].forEach(id=>{const el=document.getElementById(id);if(el)so.observe(el);});

 /* scroll reveal */
 if(reduce) return;
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
 const R=(sel,d=0,step=0,cls="")=>document.querySelectorAll(sel).forEach((el,i)=>{el.classList.add("rv");if(cls)el.classList.add(cls);el.style.setProperty("--d",(d+i*step)+"ms");io.observe(el);});
 R(".s-about .label");R(".s-about .badge",100,0,"fl");
 R(".s-about .hi",100);R(".s-about h1",200);R(".s-about .bar",300);R(".s-about .lead",400);R(".s-about .head",500);
 R(".s-about .list li",600,130);R(".s-about .quote",1150);
 R(".s-skills .head");R(".s-skills .row",150,220);
 R(".s-projects .label");R(".s-projects h2",100);
 document.querySelectorAll(".s-projects .item").forEach((it,i)=>{
  const s=it.querySelector(".shot"),t=it.querySelector(":scope > div:not(.shot)");
  s.classList.add("rv",i%2?"fr":"fl");io.observe(s);
  t.classList.add("rv");t.style.setProperty("--d","200ms");io.observe(t);
 });
 R(".s-contact .label");R(".s-contact h2",100);R(".s-contact .ctext",200,100);R(".s-contact .cbtn",450);R(".s-contact .chand",600);R(".s-contact .ctitle");R(".s-contact .cc",150,120);
})();
