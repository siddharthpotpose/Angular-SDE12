// constructor -> pass value by parameter 
 class employee {
    constructor(a,b,c){
        this.firstName=a,
        this.lastName=b,
        this.dob=c
    }
    show(){
        console.log(this.firstName,this.lastName,this.dob)
    }
 }
 let s1=new employee('sid','potpose','03-05-1996')
 let s2= new employee('nagesh','c','00-00-00')

 s1.show()
 s2.show()