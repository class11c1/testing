const $=s=>document.querySelector(s);
$("#loginBtn").onclick=()=>{if($("#loginName").value==="admin"&&$("#loginPass").value==="admin"&&$("#loginClass").value.toUpperCase()==="11C1"){localStorage.demoLogin="1";$("#login").classList.add("hidden");$("#app").classList.remove("hidden")}else alert("Demo: admin / admin / 11C1")};
if(localStorage.demoLogin==="1"){$("#login").classList.add("hidden");$("#app").classList.remove("hidden")}
$("#chatFab").onclick=()=>$("#inbox").style.display="block";
$("#openInbox").onclick=()=>$("#inbox").style.display="block";
$("#closeInbox").onclick=()=>$("#inbox").style.display="none";
$("#back").onclick=()=>{$("#conversation").style.display="none";$("#inbox").style.display="block"};
document.querySelectorAll(".choose").forEach(p=>p.onclick=()=>{$("#chatName").innerHTML=p.dataset.name+' <span class="verified">✓</span>';$("#conversation").style.display="block";$("#inbox").style.display="none"});
$("#sendForm").onsubmit=e=>{e.preventDefault();let v=$("#msg").value.trim();if(!v)return;let b=document.createElement("div");b.className="bubble me";b.textContent=v;$("#messages").appendChild(b);$("#msg").value="";$("#messages").scrollTop=$("#messages").scrollHeight};
$("#notifyBtn").onclick=()=>{let t=$("#notice");t.style.display="block";setTimeout(()=>t.style.display="none",3500)};
