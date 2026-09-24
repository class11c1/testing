const $=s=>document.querySelector(s);
const inbox=$("#inbox"),conversation=$("#conversation"),typing=$("#typing"),input=$("#messageInput"),messages=$("#messages");
$("#chatFab").onclick=()=>inbox.style.display="block";
$("#closeInbox").onclick=()=>inbox.style.display="none";
$("#backToInbox").onclick=()=>{conversation.style.display="none";inbox.style.display="block"};
$("#openComposer").onclick=()=>$("#composerModal").style.display="flex";
$("#addNote").onclick=()=>$("#noteModal").style.display="flex";
$("#accountBtn").onclick=()=>$("#accountModal").style.display="flex";
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>$("#"+b.dataset.close).style.display="none");

document.querySelectorAll(".person").forEach(p=>p.onclick=()=>{
  $("#chatName").textContent=p.dataset.name;
  $("#chatStatus").textContent=p.dataset.online;
  conversation.style.display="block";inbox.style.display="none";input.disabled=false;input.placeholder="Nhập tin nhắn...";blockState=false;
});

let timer,blockState=false;
$("#blockBtn").onclick=()=>{
  blockState=!blockState;
  input.disabled=blockState;
  input.placeholder=blockState?"Bạn đã chặn người này":"Nhập tin nhắn...";
  typing.style.display="none";
  $("#blockBtn").textContent=blockState?"🚫":"🚫";
};

input.oninput=()=>{
  if(blockState||!input.value.trim()){typing.style.display="none";return}
  typing.style.display="block";clearTimeout(timer);timer=setTimeout(()=>typing.style.display="none",1800);
};

$("#messageForm").onsubmit=e=>{
  e.preventDefault();if(blockState||!input.value.trim())return;
  const b=document.createElement("div");b.className="bubble me";b.textContent=input.value.trim();messages.appendChild(b);input.value="";typing.style.display="none";messages.scrollTop=messages.scrollHeight;
  setTimeout(()=>{if(blockState)return;const r=document.createElement("div");r.className="bubble";r.textContent="Ok 😄";messages.appendChild(r);messages.scrollTop=messages.scrollHeight},900);
};
