let buttonbtn=document.querySelector('button');
buttonbtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('enter the user name');
    buttonbtn.textContent='Button clicked By:'+name;
}