import { Car, Engine, Tires } from "./car";

////////////// Example 1 //////////////////
export function simpleCar() {
    //Simple care with 4 cylinders and Flintstone tires.
    let car = new Car (new Engine(), new Tires());
    car.description = 'Simple';
    return car;    
}

/////////////// Example 2 //////////////////
class Engine2 {
    constructor(public cylinders: number) { }
}
export function superCar() {
    //Super car with 12 cylinders and Flintstone tires.
    let bigCylinders = 12;
    let car  = new Car(new Engine2(bigCylinders), new Tires());
    car.description = 'Super';
    return car;
}

///////////////////// Example 3 /////////////
class MockEngine extends Engine { cylinders = 8; }
class MockTires extends Tires { make = 'YokoGoodStone'; }

export function testCar() {
    //Test car with 8 Cylinders and YokoGoodStone tires.
    let car = new Car(new MockEngine(), new MockTires());
    car.description = 'Test';
    return car;
}