let input = document.querySelector("input[type = 'text']");
function createLi(){
    let check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add("checkstyle");
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('line');
    
    span.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("trashCan");
    deleteBtn.innerText = 'X';
    listenDelete(deleteBtn);

    ulk.appendChild(li).append(check,span,deleteBtn);

}
function listenDelete(elem){
    elem.addEventListener("click", ()=>{
        elem.parentElement.remove();
    });
}
let del = document.getElementById("delete");

del.addEventListener("click", () =>{
    ulk.innerHTML = '';
});
input.addEventListener("keypress", (keyPressed)=>{
    if(keyPressed.which == 13){
        createLi();
    }
});
add.addEventListener("click", createLi);

    
