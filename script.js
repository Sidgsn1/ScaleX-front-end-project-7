let menubtn=document.querySelector(".menubtn")
let closebtn=document.querySelector(".closebtn")
let openmenu=document.querySelector(".openmenu")

menubtn.addEventListener("click",()=>{
    openmenu.style.right="0";
})

closebtn.addEventListener("click",()=>{
    openmenu.style.right="-100%";
})