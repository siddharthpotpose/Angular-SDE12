// for loop
// for (mum=1;num<=10;num=num+2) 
for (num = 1; num <= 10; num++) {
    console.log("table of 25 =" + num * 25)
}
// ---------------------------------------------------
// while loop
// let num3="yes"
// while(num3==="yes"){
//     num3=prompt("do you want continue yes/no")
//     document.write(num3)
//     // num1=num1+2
// }
// ----------------------------------------------------
// do while loop 
// let num2=1;
// do{
//     console.log(num2)
//     num2++
// }while(num2<=10) 
// ------------------------------------------- 
// branching 
// if 
// if else 
// else if ladder 
// switch case 

// if 
let mark = 80;
if (mark <= 70) {
    console.log("you are pass")
}
else {
    console.log("you are failed")
}
// ----------------------------------------------
// else if ladder 

let temp = 15;
if (temp <= 0) {
    console.log("its very cold")
}
else if (temp >= 0 && temp <= 10) {
    console.log("its cold")
}
else if (temp >= 11 && temp <= 20) {
    console.log("its hot")
}
// --------------------------------------------
//  switch case 

let day = 5;
switch (day) {
    case 1:
        console.log("monday")
        break;

    case 2:
        console.log("tuesday")
    case 3:
        console.log("wednesday")
        break;

    case 4:
        console.log("thursday")
    case 5:
        console.log("friday")
        break;

    case 6:
        console.log("saturday")
        case 7:
        console.log("sunday")

    default:
        break;
}