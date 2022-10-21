a=2
x=1+(a*=2)
console.log(x)

"2">"12"
// console.log(undefined===null)

// alert(alert(1)||2||alert(3))
// ----------------------------------------------------------------
// conversion 
// two type  
// implicit 
// explicit 
// implicit  it allow to convert data type
// --------------------------------------------------------------------
// simple function 
function fun(){
    console.log("this is a simple function")
}
fun();
// -----------------------------------------------------------
// parametarised / argument function 

function name(a,b)
{
    ans= a+b
    console.log("this is a parametarised / argument function ="+ans)
}
name(50,20)
// ---------------------------------------------------------
function multiplication(n,m){
     return n*m
}
let result=multiplication(30,10)
console.log("this is a return function and multiplication of n*m ="+result)
// -----------------------------------------------------------------------------------------
// do while with prompt 
//  let msg="yes";
//  do {
//     msg=prompt("do you want continue yes/No "+msg)
//     console.log("Enter your order "+msg)
//  }while(msg==="yes")
//  ----------------------------------------------------

// practice 
// topic function 
// three types of function 
// 1.declaration 
// a) var = globaly  = it can be reused , redifiend , and change
// b) let = block level = it is redifind and change
// c) const = block level = it is not change
// 2. defination = { }
// 3. condition = there are three types
// a) simple function
// b) parametarised function / argument function 
// c) return function 
// ---------------------------------------------------------------
// 1. simple function 
function functionName(){
    console.log("hello i am a simple function")
}
functionName()
// -----------------------------------------------------------
// argument function / parametarised function 

// let num=50;
// num2=40;
function addition(num,num2){
   total = num+num2
    console.log("addition of two number num+num2 ="+total)
}
addition(50,40);
// ----------------------------------------------------------
// return function 
function ret(num3,num4){
    return num3+num4;
    
}
let value= ret(20,30)
console.log("return value ="+value)
// -------------------------------------------------------
// statement 
// it is a combination of data type , variable,operator 
// there are some types  
// 1. branching                             //looping
// a) if 
// b) if else                                     1)for looop
// c) else if ladder                              2) while loop
// d)switch case                                   3) do while loop 
// e) nested case
// ------------------------------------------------------------------------------
// loops
// for loop

for(num7=1;num7<=10;num7++){
    console.log("this is a for loop-"+num7)
}
// table of 3
for(table=1;table<=20;table++){
    msg=("this is a table")
    console.log("display table of 2 ="+table*3)
}
// -------------------------------------------------------------while 
// while loop 

let div=1;
while(div<=10)
{
    
    console.log("division of two number"+div)
    div++
}
// --------------------------------------------------------
// do while 
 let mod=1;
do {
    console.log(mod)
    mod++
}while(mod<=10)
// ------------------------------------------
// branching 
// if 
let mark=30;
let hindi=40;
if (mark>=35){
    console.log("you are got")
}
if (hindi>=35)
{
    console.log("you are pass with ="+hindi)
}
else {
    console.log("you are failed")
}
// -----------------------------------------------------------
// else if 
// for multiple conditions 
let marks=200;
if(mark>=90&&mark<=100)
{
    console.log("you are pass with A+ grade"+marks)
}
else if (marks>=80){
    console.log("you are pass with A grade"+marks)
}
else if(marks>=60){
    console.log("you are pass with B grade"+marks)
}
else if (marks>=40){
    console.log("you are pass with c grade"+marks)
}
else if(marks>=35){
    console.log("you are pass with D grade"+marks)
}
else{
    console.log("you are fail")
}
//  ----------------------------------------------------
for (p=1 ; p<=40 ; p=p+2)

console.log(p)

