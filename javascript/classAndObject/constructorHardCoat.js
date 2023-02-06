// <!-- constructor hard cot value  -->

class employee {
    constructor(){
        this.firstName='sid',
        this.lastName='potpose',
        this.dob='03/05/1996'
    }
    show(){
        console.log(this.firstName,this.lastName,this.dob)
    }

}
let s1=new employee()
let s2=new employee()
let s3= new employee()

s1.show()
s2.show()
s3.show()