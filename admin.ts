// Interfaz base para un usuario
interface User {
    username: string;
    email: string;
  }
  
  // Interfaz Admin que extiende de User
  interface Admin extends User {
    role: string;
  }
  
  // Función que imprime los datos de un usuario, acepta tanto User como Admin
  function printUserData(user: User | Admin) {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    if ('role' in user) {
      console.log(`Role: ${user.role}`);
    }
  }
  
  // Crear un usuario y un administrador
  const user: User = { username: 'john_doe', email: 'john@example.com' };
  const admin: Admin = { username: 'admin1', email: 'admin@example.com', role: 'Administrator' };
  
  printUserData(user);
  printUserData(admin);
  