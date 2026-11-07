(function(){const el=id=>document.getElementById(id);if(!el("qText"))return;
const dl=(c,n)=>{const a=document.createElement("a");a.download=n;a.href=c.toDataURL();a.click()};
el("qGen").onclick=()=>{el("qOut").innerHTML="";if(el("qText").value)new QRCode(el("qOut"),{text:el("qText").value,width:200,height:200})};
el("qDl").onclick=()=>{const c=el("qOut").querySelector("canvas");if(!c)return alert("আগে QR তৈরি করুন");dl(c,"qr.png")};
const pc=el("pCanvas"),px=pc.getContext("2d");
function poster(){const g=px.createLinearGradient(0,0,600,600);g.addColorStop(0,el("pC1").value);g.addColorStop(1,el("pC2").value);px.fillStyle=g;px.fillRect(0,0,600,600);px.strokeStyle="#c9a227";px.lineWidth=8;px.strokeRect(20,20,560,560);px.fillStyle="#fff";px.textAlign="center";px.font="700 54px 'Baloo Da 2'";px.fillText(el("pT").value,300,290,520);px.font="28px 'Hind Siliguri'";px.fillText(el("pS").value,300,340,520);px.font="18px 'Hind Siliguri'";px.fillText("আমাদের শ্রীনগর",300,555)}
["pT","pS","pC1","pC2"].forEach(i=>el(i).oninput=poster);poster();document.fonts&&document.fonts.ready.then(poster);
el("pDl").onclick=()=>dl(pc,"poster.png");
let img=null;el("iFile").onchange=e=>{const f=e.target.files[0];if(!f)return;img=new Image();img.onload=cmp;img.src=URL.createObjectURL(f)};el("iQ").oninput=cmp;
function cmp(){if(!img)return;const c=document.createElement("canvas");const s=Math.min(1,1600/img.width);c.width=img.width*s;c.height=img.height*s;c.getContext("2d").drawImage(img,0,0,c.width,c.height);c.toBlob(b=>{el("iInfo").textContent="নতুন আকার: "+(b.size/1024).toFixed(0)+" KB";el("iDl").href=URL.createObjectURL(b)},"image/jpeg",el("iQ").value/100)}
const nc=el("nCanvas"),nx=nc.getContext("2d");
function nm(){nx.fillStyle=el("nBg").value;nx.fillRect(0,0,600,200);nx.textAlign="center";nx.font="700 "+el("nSz").value+"px 'Baloo Da 2'";nx.shadowColor="#000a";nx.shadowBlur=10;nx.fillStyle=el("nCol").value;nx.fillText(el("nTxt").value||"আপনার নাম",300,125,560)}
["nTxt","nBg","nCol","nSz"].forEach(i=>el(i).oninput=nm);nm();el("nDl").onclick=()=>dl(nc,"name.png");
const fc=el("fCanvas"),fx=fc.getContext("2d");let fi=null;
el("fFile").onchange=e=>{const f=e.target.files[0];if(!f)return;fi=new Image();fi.onload=fr;fi.src=URL.createObjectURL(f)};el("fCol").oninput=fr;el("fW").oninput=fr;
function fr(){fx.fillStyle=el("fCol").value;fx.fillRect(0,0,500,500);if(fi){const w=+el("fW").value,z=500-2*w;const s=Math.max(z/fi.width,z/fi.height);fx.save();fx.beginPath();fx.rect(w,w,z,z);fx.clip();fx.drawImage(fi,250-fi.width*s/2,250-fi.height*s/2,fi.width*s,fi.height*s);fx.restore()}fx.fillStyle="#fff";fx.font="16px 'Hind Siliguri'";fx.textAlign="center";fx.fillText("আমাদের শ্রীনগর",250,490)}
fr();el("fDl").onclick=()=>dl(fc,"frame.png");
})();
