// 1. Students Report
let students = {
    name: "Collins",
    age: 20,
    Grade: "A",
    Subjects: ["computer Science", "Mathematics", "English"]
}
// console.log(students.name);
// console.log(students.Subjects);
console.log(students.name,students.Subjects);


// 2. Online Store Products
let products = {
    name: "Iphone 16 Pro Max",
    price: "14000",
    stock: "50",
    category: "Electronics"
};
function purchase(quantity) {
    if (quantity <= products.stock) {
        products.stock -= quantity;
        console.log(quantity + " purchased. Remaining stock: " + products.stock); 
    } else {
        console.log("Not enough stock available.");
    }

}
purchase(5);
purchase(20);

// Car Rental System
let cars = [
    { brand: "Toyota", model: "Corolla", year: 2025, available: true },
    { brand: "Benz", model: "GLE", year: 2025, available: true },
    { brand: "Ford", model: "Mustang", year: 2025, available: true }
]

function rentCar(modelName) {
    for (let car of cars) {
        if (car.model === modelName && car.available) {
            car.available = false;
            console.log(modelName + " has been rented.");
            return;
        }
    }
    console.log("car not available for rent.")
}
rentCar("GLE")
rentCar("GLE")
rentCar("Corolla")
rentCar("Corolla")
