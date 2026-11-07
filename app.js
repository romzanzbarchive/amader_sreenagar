function openModal(t,x){document.getElementById("mT").textContent=t;document.getElementById("mX").textContent=x;document.getElementById("modal").classList.add("open")}
window.addEventListener("load",()=>{document.getElementById("loader").classList.add("hide");if(window.lucide)lucide.createIcons()});
document.getElementById("menuBtn").onclick=()=>document.getElementById("menu").classList.toggle("open");
document.getElementById("menu").onclick=()=>document.getElementById("menu").classList.remove("open");
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal"||e.target.dataset.x)document.getElementById("modal").classList.remove("open")};
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.getElementById("modal").classList.remove("open")});
document.getElementById("searchBtn").onclick=()=>{const q=document.getElementById("gq");if(q){q.scrollIntoView({behavior:"smooth",block:"center"});q.focus()}else location.href="index.html"};
