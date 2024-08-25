const addBtn= document.getElementById("add");
const showBtn=document.getElementById("show");
const closeBtn=document.getElementById("formClose");
const formCon=document.getElementById("formContainer");
addBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
})
closeBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
})




