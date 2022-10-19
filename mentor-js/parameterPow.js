// function pow(x,n)
// {
//     return x=x**n
// }
// pow(70,3)
// console.log("return the pow ="+x)
// --------------------------------------------
function pow(x,n) {
    let num=x;
    for (let i=1;i<n;i++)
    {
        num *=x;
    }
    console.log(num)
}
pow(3,3)
// -----------------------------------