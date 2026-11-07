(function(){const el=id=>document.getElementById(id);if(!el("cName"))return;
const T={photo:"ডিজিটাল ফটো কার্ড",id:"সাধারণ পরিচয়পত্র",blood:"রক্তদাতা কার্ড",expat:"প্রবাসী কার্ড",vol:"স্বেচ্ছাসেবক কার্ড",stu:"শিক্ষার্থী কার্ড",qr:"QR পরিচয় কার্ড"};
el("cType").innerHTML=Object.entries(T).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
let photo="";el("cPhoto").onchange=e=>{const r=new FileReader();r.onload=()=>{photo=r.result;draw()};if(e.target.files[0])r.readAsDataURL(e.target.files[0])};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function draw(){const t=el("cType").value,card=el("card");card.className="idc "+el("cTpl").value;
const ex=t==="blood"?`<br><small>রক্তের গ্রুপ: ${esc(el("cExtra").value)||"—"}</small>`:"";
card.innerHTML=`<small>আমাদের শ্রীনগর</small><h4>${esc(el("cTitle").value)||T[t]}</h4><div class="row">${photo?`<img class="ph" src="${photo}" alt="ছবি">`:`<div class="ph"></div>`}<div><b>${esc(el("cName").value)||"আপনার নাম"}</b><br><small>${esc(el("cAddr").value)||"ঠিকানা"}</small><br><small>${esc(el("cPhone").value)}</small>${ex}</div></div><div id="qrbox" class="qr"></div>`;
if(window.QRCode&&(t==="qr"||el("cQR").checked))new QRCode(el("qrbox"),{text:`${el("cName").value}|${el("cAddr").value}|${el("cPhone").value}`,width:72,height:72});else el("qrbox").remove()}
document.querySelectorAll("#cardForm input,#cardForm select").forEach(i=>{i.oninput=draw;i.onchange=draw});
const png=()=>html2canvas(el("card"),{scale:3,backgroundColor:null,useCORS:true});
el("cDown").onclick=async()=>{const c=await png();const a=document.createElement("a");a.download="card.png";a.href=c.toDataURL();a.click()};
el("cShare").onclick=async()=>{const c=await png();c.toBlob(b=>{const f=new File([b],"card.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:"আমাদের শ্রীনগর"});else alert("এই ডিভাইসে শেয়ার সাপোর্ট নেই। PNG ডাউনলোড করে শেয়ার করুন।")})};
draw()})();
