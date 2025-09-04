//creation of the funtion
// function functioname(para1,para2){
//     //logic and the working of  the funtion
// }


//basic funtion creation
function sumOftwonum(){//parameter
 let num=2;
 for(let i=1; i<=10; i++){
    console.log(num*i);
 }
}
// funtion call
sumOftwonum();//no any argument

//funtion for print the table
function sumOftwonum(num){//parameter
 for(let i=1; i<=10; i++){
    console.log(num*i);
 }
}
//funtion calling
sumOftwonum(2);//argument passing
sumOftwonum(3);

//funtion of the even number print
function evennum(first,last){//parameter
    console.log("this is the even num");
 for(let i=first; i<=last; i++){
    if(i%2==0){
        console.log(i);
    }
 }
}
//funtion of the odd number print

 function oddnum(first,last){//parameter
    console.log("this is the odd num");

 for(let i=first; i<=last; i++){
    if(i%2!=0){
        console.log(i);
    }
 }
}
//funtion call
evennum(20,30);//argument passing
oddnum(20,30);


