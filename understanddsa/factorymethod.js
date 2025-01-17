class FullName{
    constructor(first,last){
        this.first=first;
        this.last = last;
    }
    toString(){
        return "First Name is " + this.first +", " + "Last Name is " + this.last
    }
}
class Dog{
    static dogName(){
        return new FullName("Tommy","The Dog")
    }
}
class Computer{
    static madeby(){
        return new FullName("Intel"," Pink show")
    }
}

let fullname = new FullName("Meer","Afzal")

console.log(fullname.toString())
console.log(Dog.dogName().toString())
console.log(Computer.madeby().toString())