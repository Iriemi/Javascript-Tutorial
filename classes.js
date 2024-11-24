// Syntax for defining a class
class NameOfClass {

}

// Class with a contructor
class ClassWithAConstructor {
    // Contructors are used to define properties of a class
    constructor(parameter1, parameter2, parameter3) {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
        this.parameter3 = parameter3
    }
}

// Defining methods in a class
class ClassWithMethods {
    greeting() {
        return 'Hello, How are you doing today?'
    }
}

// Full class
class Car {
    constructor(model, brand, color, year) {
        this.model = model
        this.brand = brand
        this.color = color
        this.year = year
    }

    drive() {
        return 'Car is driving'
    }

    stop() {
        return 'Car has stopped'
    }

    start() {
        return 'Car has started'
    }

    getCarBrand() {
        return this.brand
    }

    getCarModel() {
        return this.model
    }
}

// Instantiating a class
let car = new Car('Camry', 'Toyota', 'Silver', '2013')

car.start()
car.drive()
car.stop()
car.getCarBrand()
car.getCarModel()