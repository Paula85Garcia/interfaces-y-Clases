// Interface base para vehículos
interface Vehicle {
  model: string;
  year: number;
  color: string;
}

// Interface para autos, hereda de Vehicle
interface Car extends Vehicle {
  numberOfDoors: number;
  isElectric: boolean;
}

// Interface para motocicletas, hereda de Vehicle
interface Motorcycle extends Vehicle {
  hasSideCar: boolean;
}

// Clase que implementa las interfaces
class VehiClass implements Car, Motorcycle {
  model: string;
  year: number;
  color: string;
  numberOfDoors: number;
  isElectric: boolean;
  hasSideCar: boolean;

  constructor(
    model: string,
    year: number,
    color: string,
    numberOfDoors: number,
    isElectric: boolean,
    hasSideCar: boolean
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.numberOfDoors = numberOfDoors;
    this.isElectric = isElectric;
    this.hasSideCar = hasSideCar;
  }

  getCarInfo() {
    return `Car Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Doors: ${this.numberOfDoors}, Electric: ${this.isElectric}`;
  }

  getMotorcycleInfo() {
    return `Motorcycle Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Sidecar: ${this.hasSideCar}`;
  }
}

// Crear un auto y una moto
const carro = new VehiClass('Tesla Model 3', 2023, 'Red', 4, true, false);
const moto = new VehiClass('Harley Davidson', 2021, 'Black', 0, false, true);

console.log(carro.getCarInfo());
console.log(moto.getMotorcycleInfo());
