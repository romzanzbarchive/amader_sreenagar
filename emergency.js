// নম্বর যাচাই করে বসান। খালি থাকলে "নম্বর যোগ করা হয়নি" দেখাবে।
const EMG_CATS=["থানা","হাসপাতাল","অ্যাম্বুলেন্স","ফায়ার সার্ভিস","গুরুত্বপূর্ণ যোগাযোগ"];
const EMG_ICONS={"থানা":"shield","হাসপাতাল":"hospital","অ্যাম্বুলেন্স":"ambulance","ফায়ার সার্ভিস":"flame","গুরুত্বপূর্ণ যোগাযোগ":"phone"};
const EMG_DATA=[{cat:"গুরুত্বপূর্ণ যোগাযোগ",name:"জাতীয় জরুরি সেবা",phone:"999"},...EMG_CATS.filter(c=>c!=="গুরুত্বপূর্ণ যোগাযোগ").map(c=>({cat:c,name:c+" (স্থানীয়)",phone:""}))];
(function(){const f=document.getElementById("emgChips");if(!f)return;let cur="সব";const g=document.getElementById("emgGrid"),q=document.getElementById("emgQ");
function chips(){f.innerHTML=["সব",...EMG_CATS].map(c=>`<button class="chip ${c===cur?'on':''}" data-c="${c}">${c}</button>`).join("");f.querySelectorAll("button").forEach(b=>b.onclick=()=>{cur=b.dataset.c;chips();draw()})}
function draw(){const k=q.value.trim();const L=EMG_DATA.filter(d=>(cur==="সব"||d.cat===cur)&&(d.name+d.cat).includes(k));
g.innerHTML=L.length?L.map(d=>`<div class="card"><i data-lucide="${EMG_ICONS[d.cat]}"></i><h3>${d.name}</h3><p>${d.phone||"নম্বর যোগ করা হয়নি"}</p>${d.phone?`<a class="btn" href="tel:${d.phone}">কল করুন</a>`:""}</div>`).join(""):"<p>কোনো ফলাফল নেই।</p>";if(window.lucide)lucide.createIcons()}
q.oninput=draw;chips();draw()})();
