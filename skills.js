// Skills section: yahan apni skills edit karo + marquee animation
(function(){
  // ====== EDIT YOUR SKILLS HERE (from resume): [name, description, icon text, icon bg, icon color] ======
  const row1 = [
    ["C","Programming Language","C","#e3ebf7","#3b6ea5"],
    ["C++","OOP & Problem Solving","C++","#dbe7fb","#2b5fb8"],
    ["Python","AI & Scripting","Py","#fdf3c8","#3b6ea5"],
    ["JavaScript","Core Web Language","JS","#fdf3c8","#a6800a"],
    ["HTML & CSS","Structure & Styling","&lt;/&gt;","#fde7d9","#d9541e"],
    ["React.js","UI Component Library","⚛","#d9f3fa","#1a8fb0"],
    ["Tailwind CSS","Utility-First CSS","≋","#d9f3fa","#1a8fb0"],
    ["Bootstrap","Responsive UI Framework","B","#e6e0fa","#5b3fb5"],
    ["Vite","Fast Frontend Tooling","⚡","#f1e6fb","#8a3fd1"],
    ["Firebase","Auth & Cloud Backend","🔥","#fde7d9","#e0531b"],
  ];
  const row2 = [
    ["Node.js","Server-Side Runtime","⬢","#e3f1dc","#3c8a2e"],
    ["Express.js","Backend Framework","»","#ece6d8","#333"],
    ["REST APIs","API Development","⇄","#fde0d0","#e0531b"],
    ["MongoDB","NoSQL Database","🍃","#dff1e5","#2f9e5b"],
    ["MySQL","Relational Database","▤","#dbe7fb","#3b6ea5"],
    ["Git & GitHub","Version Control","●","#fde3da","#d9541e"],
    ["OpenCV","Computer Vision","◉","#dff1e5","#2f9e5b"],
    ["MediaPipe","Hand Tracking","✋","#e6e0fa","#5b3fb5"],
    ["DSA & OOPS","Problem Solving","▥","#e6e0fa","#5b3fb5"],
    ["CS Core","OS · DBMS · Networks","⌘","#ece6d8","#333"],
  ];

  const build = (track, items) => {
    // items twice => seamless loop (we reset when half the width has scrolled)
    const html = [...items, ...items].map(([n,d,i,bg,c]) =>
      `<div class="card"><div class="ico" style="background:${bg};color:${c}">${i}</div><b>${n}</b><small>${d}</small></div>`).join("");
    track.innerHTML = html;
  };
  const tracks = [...document.querySelectorAll(".track")];
  build(tracks[0], row1);
  build(tracks[1], row2);

  // ====== Animation ======
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let dir = 1, paused = false, last = performance.now();
  const state = tracks.map(t => ({ el:t, x:0, speed:+t.dataset.speed }));

  document.querySelectorAll(".row").forEach(r => {
    r.addEventListener("mouseenter", () => paused = true);
    r.addEventListener("mouseleave", () => paused = false);
  });
  document.querySelectorAll(".arrow").forEach(b =>
    b.addEventListener("click", () => dir = +b.dataset.dir));

  function tick(now) {
    const dt = (now - last) / 1000; last = now;
    if (!paused && !reduce) {
      state.forEach(s => {
        const half = s.el.scrollWidth / 2;       // width of one full set
        s.x -= s.speed * dir * dt;               // row1 goes left, row2 goes right
        if (s.x <= -half) s.x += half;           // wrap around
        if (s.x > 0) s.x -= half;
        s.el.style.transform = `translateX(${s.x}px)`;
      });
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
