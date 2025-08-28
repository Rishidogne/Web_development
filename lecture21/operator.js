//arithmetic operator

// + , -, * , /

// let a=10;
// let b=20;

// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("b/a=",b/a);

//moduls

// let a=10;
// let b=7;
// console.log("a%b=",a%b);


//exponentiation

// let a=2;
// let b=5;

// console.log("a^b=",a**b);


//question 1
// let a=5;
// let b=0;
// let c=-2;
// //console.log((b--)*(++c)); 
// c++;
// let x=b**a;
// --c;
// //console.log(c,x);

// //radhika=0,-1,-1 ,(17,6),(1,9,0.22)
// //prince=0,-1,-1,(18,6),(1,9,0.22)
// //pooja=0,-1,-1,(13,7),(1,9,0.22)

// //question 2
// let p;
//  let q=7;

//  p=--q;
 
//  q=(++p)*2;

//  console.log(--q,p++);
 


//  // question 3

//  let g=9;
//  let f=2;

//  f--;
//  ++g;
// //console.log(f++,--g);

// let v=f/g;
// //console.log(v);



// //1 question
// let age = 16;

// if(age >= 18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }



// //2 question 
// let marks = 72;

// if(marks >= 90){
//     console.log("Grade: A");
// }else if(marks >= 75){
//     console.log("Grade: B");
// }else if(marks >= 50){
//     console.log("Grade: C");
// }else{
//     console.log("Grade: Fail");
// }
// //3 question
// let num1 = 25;
// let num2 = 40;

// if(num1 > num2){
//     console.log("num1 is greater");
// }else if(num2 > num1){
//     console.log("num2 is greater");
// }else{
//     console.log("Both are equal");
// }
// //4 question
// let temperature = 18;

// if(temperature >= 30){
//     console.log("It is Hot");
// }else if(temperature >= 20){
//     console.log("It is Warm");
// }else{
//     console.log("It is Cold");
// }
// //5 question

// let number = 0;

// if(number == 0){
//     console.log("The number is Zero");
// }else if(number % 2 == 0){
//     console.log("The number is Even");
// }else{
//     console.log("The number is Odd");
// }

//ternary operator 

// let maleage=18;
// let femaleage=10;

// (maleage>18)? console.log("adult") : console.log(" not adult");


// //1 question
// let a = 20;
// let b = 6;

// console.log("Sum =", a + b);
// console.log("Difference =", a - b);
// console.log("Product =", a * b);
// console.log("Quotient =", a / b);
// console.log("Remainder =", a % b);

// //2 question
// let x = 15;
// let y = 25;

// if(x > y){
//     console.log("x is greater than y");
// }else if(x < y){
//     console.log("x is smaller than y");
// }else{
//     console.log("x and y are equal");
// }

// //3 question
// let num = 25;

// if(num > 10 && num < 50 && num % 5 == 0){
//     console.log("Number is between 10 and 50 and divisible by 5");
// }else{
//     console.log("Condition not satisfied");
// }

// //4 question
// let value = 10;

// value += 5;   // value = value + 5
// value *= 2;   // value = value * 2
// value -= 3;   // value = value - 3

// console.log("Final value is:", value); //1

// //5 question
// let count = 0;

// count++;   // increase by 1
// console.log("After increment:", count);//1

// count--;   // decrease by 1
// console.log("After decrement:", count);//0

// //6 question
// let number = 7;

// let result = (number % 2 == 0) ? "Even" : "Odd";
// console.log("The number is", result);

//  //7 question
// let n1 = 10; 
// let n2 = 10;
// let n3 = 5;

// if(n1 == n2 && n2 == n3){
//     console.log("All numbers are equal");
// }else if(n1 == n2 || n2 == n3 || n1 == n3){
//     console.log("At least two numbers are equal");
// }else{
//     console.log("All numbers are different");
// }

// //8 question
// let age = 22;

// if(age >= 18 && age <= 35){
//     console.log("Eligible for job");
// }else{
//     console.log("Not eligible");
// }
// //9 question
// let num2 = 20;

// num2 /= 4;   // divide by 4
// num2 += 10;  // add 10

// console.log("Result is:", num2);//15

// //10 question
// let n = -5;

// if(n > 0){
//     console.log("Number is Positive");
// }else if(n < 0){
//     console.log("Number is Negative");
// }else{
//     console.log("Number is Zero");
// }

// if(n % 2 == 0 || n % 5 == 0){
//     console.log("Number is divisible by 2 or 5");
// }else{
//     console.log("Number is not divisible by 2 or 5");
// }

//

//1 question 

let a = 12, b = 45, c = 30;

if(a > b && a > c){
    console.log("a is the largest");
}else if(b > a && b > c){
    console.log("b is the largest");
}else{
    console.log("c is the largest");
}

//2 question
let marks = 28;   // out of 100
let grace = 5;

if(marks >= 35){
    console.log("Pass");
}else if(marks + grace >= 35){
    console.log("Pass with grace marks");
}else{
    console.log("Fail");
}

//bonous question
let amount = 1200;

let discount = (amount >= 1000) ? 0.2 : ((amount >= 500) ? 0.1 : 0);

let finalPrice = amount - (amount * discount);
console.log("Original Amount:", amount);
console.log("Discount Applied:", discount * 100, "%");
console.log("Final Price:", finalPrice);

//radhika == 1200,20%,960
//prince = 
//pooja=1200,240,960


