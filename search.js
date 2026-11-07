const SITE_ITEMS=[
{t:"ডিজিটাল কার্ড জেনারেটর",d:"পরিচয়পত্র, রক্তদাতা, প্রবাসী কার্ড",h:"#cards"},
{t:"সার্টিফিকেট জেনারেটর",d:"সম্মাননা, অংশগ্রহণ, স্বেচ্ছাসেবক",h:"#certs"},
{t:"শ্রীনগর তথ্যভান্ডার",d:"ইতিহাস, গ্রাম, দর্শনীয় স্থান",h:"#info"},
{t:"জরুরি যোগাযোগ",d:"থানা, হাসপাতাল, অ্যাম্বুলেন্স, ফায়ার সার্ভিস",h:"#emergency"},
{t:"QR কোড জেনারেটর",d:"টুল",h:"#tools"},{t:"বাংলা পোস্টার মেকার",d:"টুল",h:"#tools"},{t:"ছবি কমপ্রেসার",d:"টুল",h:"#tools"},{t:"বাংলা নাম ডিজাইনার",d:"টুল",h:"#tools"},{t:"ফটো ফ্রেম জেনারেটর",d:"টুল",h:"#tools"}];
function allItems(){const x=[...SITE_ITEMS];DIR_DATA.forEach(d=>x.push({t:d.title,d:"তথ্যভান্ডার · "+d.cat,h:"#info"}));EMG_DATA.forEach(d=>x.push({t:d.name,d:"জরুরি · "+d.cat,h:"#emergency"}));return x}
(function(){const q=document.getElementById("gq");if(!q)return;const r=document.getElementById("sres");
function run(){const k=q.value.trim();if(!k){r.innerHTML="";return}
const L=allItems().filter(i=>(i.t+i.d).includes(k)).slice(0,8);
r.innerHTML=L.length?L.map(i=>`<a class="res" href="${i.h}">${i.t}<br><small>${i.d}</small></a>`).join(""):'<div class="res">কোনো ফলাফল পাওয়া যায়নি।</div>'}
q.oninput=run;document.getElementById("gClear").onclick=()=>{q.value="";run();q.focus()}})();
