(()=>{
const professor=document.querySelector('.team-tier');
if(!professor)return;
const card=document.createElement('article');
card.className='team-member liugang-member';
card.innerHTML=`<a class="member-avatar-wrap liugang-avatar" href="https://materials.sysu.edu.cn/teacher/690" target="_blank" rel="noopener" aria-label="刘钢教授官方主页"><div class="member-avatar"><span class="initial">刘</span></div><div class="member-tags"><span>类脑与智能仿生</span></div></a><div class="member-info"><h3>刘钢</h3><b>教授 · 博士生导师 · 院长助理</b><p>长期从事类脑与智能仿生器件、芯片和集成微系统研究，聚焦神经形态器件、智能视觉与存算一体系统。</p><span class="member-more">中山大学材料学院官方主页 →</span></div>`;
const grid=document.createElement('div');grid.className='team-roster-grid';grid.appendChild(card);
const empty=professor.querySelector('.tier-empty');
if(empty)empty.replaceWith(grid);else professor.appendChild(grid);
})();
