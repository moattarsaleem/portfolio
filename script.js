let menu=document.getElementById("menu");
let links=document.getElementById("links");


menu.addEventListener("click",function(){
    if(links.classList=="links"){
        links.classList.add("active")
    }else{
        links.classList.remove("active")
    }


})





