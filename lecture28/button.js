let inputBtn=document.querySelector('button');
inputBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt("Enter the you name :");
    inputBtn.textContent='Click :By'+name;
}