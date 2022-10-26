let Name=document.querySelector("h3");
Name.addEventListener("click",inputMsg);

function inputMsg(){
    let namee=prompt("enter your name");
    Name.textContent=" "+namee;
}