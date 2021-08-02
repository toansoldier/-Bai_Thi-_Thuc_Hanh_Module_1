class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return "Name Is: " + this.getName() + " & Weight Is: " + this.getWeight();
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
alert(objAnimal1.toString());

let objAnimal2 = new Animal("Mickey", 15.7);
objAnimal2.setName("Mouse");
alert(objAnimal2.toString()); // dòng lệnh này đề không yêu cầu;