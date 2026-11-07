// তথ্য ম্যানুয়ালি এখানে যোগ করুন। যাচাই ছাড়া কোনো তথ্য বসাবেন না।
const DIR_CATS=["শ্রীনগরের ইতিহাস","উপজেলার পরিচিতি","ইউনিয়ন পরিচিতি","গ্রামের তালিকা","দর্শনীয় স্থান","শিক্ষাপ্রতিষ্ঠান","হাসপাতাল ও ক্লিনিক","সরকারি অফিস"];
const DIR_ICONS={"শ্রীনগরের ইতিহাস":"landmark","উপজেলার পরিচিতি":"map","ইউনিয়ন পরিচিতি":"map-pin","গ্রামের তালিকা":"home","দর্শনীয় স্থান":"camera","শিক্ষাপ্রতিষ্ঠান":"school","হাসপাতাল ও ক্লিনিক":"hospital","সরকারি অফিস":"building-2"};
const DIR_DATA=DIR_CATS.map((c,i)=>({id:"d"+i,cat:c,title:c,text:"এই তথ্য এখনো যোগ করা হয়নি। assets/js/directory.js ফাইলে যাচাইকৃত তথ্য লিখুন।"}));
(function(){const f=document.getElementById("dirChips");if(!f)return;let cur="সব";
const g=document.getElementById("dirGrid"),q=document.getElementById("dirQ");
function chips(){f.innerHTML=["সব",...DIR_CATS].map(c=>`<button class="chip ${c===cur?'on':''}" data-c="${c}">${c}</button>`).join("");f.querySelectorAll("button").forEach(b=>b.onclick=()=>{cur=b.dataset.c;chips();draw()})}
function draw(){const k=q.value.trim();const L=DIR_DATA.filter(d=>(cur==="সব"||d.cat===cur)&&(d.title+d.text).includes(k));
g.innerHTML=L.length?L.map(d=>`<button class="card" data-id="${d.id}"><i data-lucide="${DIR_ICONS[d.cat]}"></i><h3>${d.title}</h3></button>`).join(""):"<p>কোনো ফলাফল পাওয়া যায়নি।</p>";
g.querySelectorAll(".card").forEach(b=>b.onclick=()=>{const d=DIR_DATA.find(x=>x.id===b.dataset.id);openModal(d.title,d.text)});if(window.lucide)lucide.createIcons()}
q.oninput=draw;chips();draw()})();
