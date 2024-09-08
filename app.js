let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",()=>{
    let task=input.value;
    let li=document.createElement("li");
    li.innerText= task;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);

    ul.appendChild(li);
    input.value="";
});

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON")
    {
        let par=event.target.parentElement;
        par.remove();
        console.log("Deleted");
    }
})