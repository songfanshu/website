(() => {
  const viewport = document.getElementById('viewport');
  const panels = [...document.querySelectorAll('.panel')];
  const navLinks = [...document.querySelectorAll('#nav a')];
  const dots = document.getElementById('dots');
  const progress = document.getElementById('progress');
  let index = 0, locked = false, touchX = 0;

  panels.forEach((p,i)=>{
    const b=document.createElement('button'); b.setAttribute('aria-label',p.id); b.onclick=()=>go(i); dots.appendChild(b);
  });
  const dotEls=[...dots.children];
  function go(i){
    index=Math.max(0,Math.min(panels.length-1,i));
    viewport.style.transform=`translateX(-${index*100}vw)`;
    navLinks.forEach((a,j)=>a.classList.toggle('active',j===index));
    dotEls.forEach((b,j)=>b.classList.toggle('active',j===index));
    progress.style.width=`${((index+1)/panels.length)*100}%`;
    history.replaceState(null,'','#'+panels[index].id);
  }
  function step(dir){ if(locked)return; locked=true; go(index+dir); setTimeout(()=>locked=false,720); }
  navLinks.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();go(i)}));
  window.addEventListener('wheel',e=>{if(window.innerWidth<=900)return; if(Math.abs(e.deltaY)<3)return; e.preventDefault(); step(e.deltaY>0?1:-1)},{passive:false});
  window.addEventListener('keydown',e=>{
    if(['ArrowRight','PageDown','ArrowDown'].includes(e.key)){e.preventDefault();step(1)}
    if(['ArrowLeft','PageUp','ArrowUp'].includes(e.key)){e.preventDefault();step(-1)}
    if(e.key==='Home'){e.preventDefault();go(0)}
    if(e.key==='End'){e.preventDefault();go(panels.length-1)}
  });
  viewport.addEventListener('touchstart',e=>touchX=e.touches[0].clientX,{passive:true});
  viewport.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>50)step(dx<0?1:-1)},{passive:true});
  const hash=location.hash.slice(1), found=panels.findIndex(p=>p.id===hash); go(found>=0?found:0);
})();
