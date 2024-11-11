// Interface Database
interface Database {
  connect(): void;  // Conectar a la base de datos
  find(query: string): string;  // Buscar datos con una consulta
  update(query: string): string;  // Actualizar datos con una consulta
}

// Clase que implementa la interfaz Database para MySQL
class MySQLDatabase implements Database {
  connect() {
    console.log("Connecting to MySQL database...");  // Simula la conexión
  }

  find(query: string) {
    return `MySQL Find Result for: ${query}`;  // Simula el resultado de una consulta
  }

  update(query: string) {
    return `MySQL Update Result for: ${query}`;  // Simula la actualización de datos
  }
}

// Clase que implementa la interfaz Database para SQLite
class SQLiteDatabase implements Database {
  connect() {
    console.log("Connecting to SQLite database...");  // Simula la conexión
  }

  find(query: string) {
    return `SQLite Find Result for: ${query}`;  // Simula el resultado de una consulta
  }

  update(query: string) {
    return `SQLite Update Result for: ${query}`;  // Simula la actualización de datos
  }
}

// Crear instancias de bases de datos y ejecutar métodos
const mysqlDB = new MySQLDatabase();
mysqlDB.connect();  // Conectar a MySQL
console.log(mysqlDB.find('SELECT * FROM users'));  // Ejecutar una consulta de búsqueda
console.log(mysqlDB.update('UPDATE users SET name = "John" WHERE id = 1'));  // Ejecutar una actualización

const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();  // Conectar a SQLite
console.log(sqliteDB.find('SELECT * FROM products'));  // Ejecutar una consulta de búsqueda
console.log(sqliteDB.update('UPDATE products SET price = 1500 WHERE id = 2'));  // Ejecutar una actualización
