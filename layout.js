var o=document.body.querySelectorAll("time");for(let e of o){let t=new Date(e.dateTime);e.textContent=t.toLocaleString(void 0,{hour12:!1})}
