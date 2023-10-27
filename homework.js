class hamster{
    constructor(owner, h_name, price){
        this.owner = owner;
        this.h_name = h_name;
        this.price = price;
    }
    get wheelRun(){
        console.log("squeak squeak");
    }
    get eatFood(){
        console.log("nibble nibble");
    }
    get getPrice(){
        return this.value();
    }
   value(){
        return this.price;
    }
}


const Hampter = new hamster("", "Hampter", 15);
// console.log(Hampter.wheelRun);

//height is measured in cm for ease of coding, and weight is in lbs

class person {
    constructor(name, age, height, weight, mood, hamster, bankAccount){ 
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamster
        this.bankAccount = bankAccount
    };
    get Name(){
        return this.name
    };
    get Age(){
        return this.age + " years old"
    };
    get Weight(){
        return this.weight + " lbs"
    }
    get greet(){
        return "Hi my name is " + this.name
    };
    get eat(){
        return (this.weight = this.weight + 3)+ " lbs" 
    };
    get excercise(){
        return (this.weight = this.weight - 3) + " lbs"
    };
    get ageUp(){
        return console.log(this.Age + 1 + " years old"), console.log(this.height + 3 + " cm"), console.log(this.mood - 5 + " Mood Points"), console.log(this.bankAccount + 10 + " dollars")
    };
    get buyHamster(){
        // function (){
        // }
        return (this.bankAccount = this.bankAccount - 10) + (this.mood = this.mood + 10)
    };
}
// const Human = new person ("Katie", 20, 165, 145, 0, 0, 50)
// console.log(Human.excercise)

const Timmy = new person ("Timmy", 5, 10, 109, 43, 0, 0, 0)
console.log(Timmy)
console.log(Hampter.owner);
