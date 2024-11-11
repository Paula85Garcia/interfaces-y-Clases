// Interface BaseObject con id
interface BaseObject {
  id: string;
}

// Interfaz User, Product y Order que heredan de BaseObject
interface User extends BaseObject {
  username: string;
  email: string;
}

interface Product extends BaseObject {
  name: string;
  price: number;
}

interface Order extends BaseObject {
  userId: string;
  productId: string;
  quantity: number;
}

// Función genérica para imprimir los datos de cualquier objeto que implemente BaseObject
function printBaseObjectData<T extends BaseObject>(obj: T): void {
  console.log(`ID: ${obj.id}`);
  for (let key in obj) {
    if (key !== 'id') {
      console.log(`${key}: ${obj[key as keyof T]}`);
    }
  }
}

// Crear objetos de Usuario, Producto y Pedido
const userObj: User = { id: '1', username: 'john_doe', email: 'john@example.com' };
const productObj: Product = { id: '2', name: 'Laptop', price: 1200 };
const orderObj: Order = { id: '3', userId: '1', productId: '2', quantity: 1 };

// Imprimir los objetos
printBaseObjectData(userObj);
printBaseObjectData(productObj);
printBaseObjectData(orderObj);
