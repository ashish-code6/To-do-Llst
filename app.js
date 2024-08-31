const inputbox=document.querySelector('#input-text');
const listcontainer=document.querySelector('#list-container');

let addTask=()=>{
    if(inputbox.value===''){
        alert(" Just Add Your task...")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
            span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value=''
    savedata();
    
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});

// to save data in local Storage
function savedata(){
    localStorage.setItem('data',listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem('data');
}
showdata();


