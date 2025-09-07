//creation of the funtion
// function functioname(para1,para2){
//     //logic and the working of  the funtion
// }


// //basic funtion creation
// function sumOftwonum(){//parameter
//  let num=2;
//  for(let i=1; i<=10; i++){
//     console.log(num*i);
//  }
// }
// // funtion call
// sumOftwonum();//no any argument

// //funtion for print the table
// function sumOftwonum(num){//parameter
//  for(let i=1; i<=10; i++){
//     console.log(num*i);
//  }
// }
// //funtion calling
// sumOftwonum(2);//argument passing
// sumOftwonum(3);

// //funtion of the even number print
// function evennum(first,last){//parameter
//     console.log("this is the even num");
//  for(let i=first; i<=last; i++){
//     if(i%2==0){
//         console.log(i);
//     }
//  }
// }
// //funtion of the odd number print

//  function oddnum(first,last){//parameter
//     console.log("this is the odd num");

//  for(let i=first; i<=last; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
//  }
// }
// //funtion call
// evennum(20,30);//argument passing
// oddnum(20,30);



// //question
// //1
// function add(a, b) {
//   return a + b;
// }

// console.log("Sum =", add(5, 7));

// //2
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log("Factorial =", factorial(5));
// //3
// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log("11 is Prime?", isPrime(11));
// //4
// function getMax(a, b) {
//   return (a > b) ? a : b;
// }

// console.log("Maximum =", getMax(10, 20));

// //5
// function formatString(str, n) {
//   // 1. Trim the string
//   let cleaned = str.trim();//"   Hello World from JS   "=>
//  console.log(cleaned);//Hello World from JS

//   // 2. Replace spaces with underscores
//   cleaned = cleaned.replace(" ", "_");//Hello World from JS
//   console.log(cleaned);///Hello_World from JS
//   // 3. Return first n characters
//   return cleaned.slice(0, n);
// }

// // Example usage:
// console.log(formatString("   Hello World from JS   ", 10)); 
// // Output: "Hello_Worl"



function add(a, b) {
  console.log(p);
  return a + b;
}

// console.log("Sum =", add(5, 7));
// console.log(p);

///arrow function

// let addfuntion = (a,b)=>{
//   return a + b;
//  }

//   console.log(addfuntion(2,5));

//   addfuntion=2;
//   console.log(addfuntion);

  

///count the vobuls in the string 
// function countvob(str){
// let size=str.length;
// let count=0;
// for(let i=0; i<size; i++){
//   if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="i"){
//     count++;
//   }
// }
// return count;
// }
// console.log(countvob("hello world  my student"));
//eooe

// let countvob=(str)=>{
//   let size=str.length;

// for(let i=0; i<size; i++){
//   if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//     console.log(str[i]);
//   }
// }
// }

// countvob("you are in the hello world");//ouaeieeoo //ouaeieeoo


