class User{
    consume(){

    }
}
class Tea extends User{
    consume(){
        console.log("I am drinking tea.")
    }
}
class Coffee extends User{
    consume(){
        console.log("I am drinking coffee")
    }
}
class Kitchen{
    making(){

    }
}
class MakingTea extends Kitchen{
    making(){
        console.log("I am making tea.")
        return new Tea();
    }
}
class MakingCoffee extends Kitchen{
    making(){
        console.log("I am making coffee")
        return new Coffee()
    }
}
let drinkingtea = new MakingTea().making();
drinkingtea.consume()

let drinkingcoffee = new MakingCoffee().making();
drinkingcoffee.consume()