await new Promise(e=>queueMicrotask(e));for(let e of document.body.querySelectorAll("time"))e.textContent=new Date(e.dateTime).toLocaleString(void 0,{hour12:!1});
