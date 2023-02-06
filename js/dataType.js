
// string : there are three ways to defind string
//
let firstName=`siddharth`
let middleName='rahul'
let lastName="potpose"  
console.log(firstName)
console.log(middleName)
console.log(lastName)
// ===============================================
// number
let mobileNumber=8485896373;
console.log('mobile no. '+mobileNumber)
// ======================================================
// boolean : it is a conditional and present true or false
let iAmSiddharth=(true)
console.log(iAmSiddharth)
// ===============================================
// undefind 
let number=undefined;           
console.log(number)
// =============================
let num1=null;
console.log(num1)
// ================================
// -----------------------------------------------------------------

// non premative / user defind
// 1) object 
// 2) arrey 
// ===================================================
// 1) object - we are store multiple data type

let mobile={
'brand':"one plus",
'number':8485896373,
'ram':"8gb",
'rom':"12gb",
battery : 5000,
 
}
console.log(mobile)

// -----------------------------------------

let student =
{
  name: "siddharth potpose",
  rollNo: 47,
  collageName:"TIME",
  DOB:"03-05-1996",
  subject:"html css js algo",
  address:"nagpur",

} 
console.log(student.name)
console.log(student.rollNo)
console.log(student.DOB)
console.log(student.address)

// --------------------------------------------------
//  arrey 

let fruits =[10,20,30,40,50,];
//    fruits[3]=90;


// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])
// console.log(fruits[5])
// console.log(fruits[6]) 

for(index=2;index<=fruits.length-1;index++){
    console.log(fruits[index])
}


    