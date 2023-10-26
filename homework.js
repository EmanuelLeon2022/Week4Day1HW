class hamster{
    constructor(owner, name, price){
        this.owner = owner;
        this.name = name;
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


const Hampter = new hamster("Michelle", "Hampter", 15);
console.log(Hampter.owner);