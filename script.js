let input=document.querySelector("input")
let btn=document.querySelector("button")
let list=document.querySelector("#list")
btn.addEventListener("click", eventHandler)

function eventHandler() {
    let data= Input.value;
    if(data=""){
        alert("please enter your task")
        return;
    }

    let li= document.createElement("li");
    li.innerText=data;

    list.appendChild(li);

    input.value=""
    li.addEventListener("click", function(){
        list.removeChild(li)
    })

}