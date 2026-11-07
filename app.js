const $=id=>document.getElementById(id),fmt=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n).replace(/\u00a0/g," ");
function num(id){let s=$(id).value.trim();if(!s)return null;let n=Number(s);return Number.isFinite(n)&&n>=0?n:null}
function update(){
 const b=num("buy"),s=num("sell"),q=num("qty"),rate=Number($("taxRate").value),ok=b!==null&&s!==null&&q!==null;
 const bt=b===null?0:b*rate,st=s===null?0:s*rate,c=b===null?0:b+bt,r=s===null?0:s-st,p=r-c,t=p*(q||0);
 $("buyTax").textContent=b===null?"—":fmt(bt);$("buyTotal").textContent=b===null?"—":fmt(c);
 $("sellTax").textContent=s===null?"—":fmt(st);$("sellTotal").textContent=s===null?"—":fmt(r);
 $("per").textContent=b!==null&&s!==null?fmt(p):"Rp 0";$("cost").textContent=ok?fmt(c*q):"—";
 $("revenue").textContent=ok?fmt(r*q):"—";$("total").textContent=ok?fmt(t):"—";
 $("margin").textContent=ok&&c>0?(p/c*100).toLocaleString("id-ID",{maximumFractionDigits:2})+"%":"—";
 const status=$("status");if(b===null||s===null){status.textContent="Masukkan harga";status.className="status neutral"}
 else if(p>0){status.textContent="UNTUNG";status.className="status"}else if(p<0){status.textContent="RUGI";status.className="status loss"}else{status.textContent="IMPAS";status.className="status neutral"}
 $("per").style.color=p<0?"var(--red)":p>0?"var(--green)":"#f3f4f6";$("total").style.color=t<0?"var(--red)":"var(--green)";
}
["buy","sell","qty","taxRate"].forEach(id=>$(id).addEventListener("input",update));
$("reset").addEventListener("click",()=>{$("buy").value="";$("sell").value="";$("qty").value="1";$("taxRate").value="0.10";update()});update();
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.error));