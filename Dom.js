    
     // External function .addEventListener And .removeEventListener

document.querySelector("#header").addEventListener("mouseleave",abc);

document.querySelector("#header").addEventListener("click",xyz);



function abc(){
    document.querySelector("#header").style.background = "green";
}
function xyz(){
    document.querySelector("#header").removeEventListener("mouseleave",abc);
}


 // Internal function .addEventListener And ?

 document.querySelector("#content").addEventListener("mouseleave",function(){
    document.querySelector("#content").style.background = "orange";
});