(()=>{var t=document.body.querySelector("header > button"),o=document.body.querySelectorAll("time");for(let e of o)e.innerText=new Date(e.dateTime).toLocaleString();t?.addEventListener("click",()=>document.body.classList.toggle("col2"));})();
