(function(){const el=id=>document.getElementById(id);if(!el("sName"))return;
const T={"সম্মাননা সার্টিফিকেট":"সম্মাননা প্রদানের জন্য","অংশগ্রহণ সার্টিফিকেট":"অংশগ্রহণের জন্য","স্বেচ্ছাসেবক সার্টিফিকেট":"স্বেচ্ছাসেবী কাজের জন্য","শিক্ষামূলক সার্টিফিকেট":"শিক্ষায় কৃতিত্বের জন্য"};
el("sType").innerHTML=Object.keys(T).map(k=>`<option>${k}</option>`).join("");el("sDate").valueAsDate=new Date();
const e=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function draw(){const c=el("cert");c.className="cert "+el("sTpl").value;const d=new Date(el("sDate").value).toLocaleDateString("bn-BD");
c.innerHTML=`<div><h3>${e(el("sTitle").value||el("sType").value)}</h3><p>এই সার্টিফিকেট প্রদান করা হলো</p></div><div class="nm">${e(el("sName").value)||"প্রাপকের নাম"}</div><p>${e(el("sDesc").value)||T[el("sType").value]}</p><div style="display:flex;justify-content:space-between;text-align:right"><span>তারিখ: ${d}</span><span>${e(el("sSign").value)||"স্বাক্ষর"}<br><b>${e(el("sOrg").value)||"আমাদের শ্রীনগর"}</b></span></div><small>অনানুষ্ঠানিক — ইস্যুকারী সংস্থার অনুমোদন ছাড়া অফিসিয়াল নয়।</small>`}
document.querySelectorAll("#certForm input,#certForm select,#certForm textarea").forEach(i=>{i.oninput=draw;i.onchange=draw});
const cv=()=>html2canvas(el("cert"),{scale:3,backgroundColor:"#fff"});
el("sPng").onclick=async()=>{const a=document.createElement("a");a.download="certificate.png";a.href=(await cv()).toDataURL();a.click()};
el("sPdf").onclick=async()=>{const c=await cv();const{jsPDF}=window.jspdf;const p=new jsPDF("l","mm","a4");p.addImage(c.toDataURL("image/png"),"PNG",10,10,277,190);p.save("certificate.pdf")};
draw()})();
