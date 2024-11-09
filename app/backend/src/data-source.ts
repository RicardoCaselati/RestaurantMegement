import { DataSource } from "typeorm";
import { EstoqueIngrediente } from "./database/model/Ingredientes.model";
import { ShoppingList } from "./database/model/ShoppingList.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "123456",
  database: "RestaurantMegement",
  synchronize: true,
  logging: true,
  entities: [EstoqueIngrediente, ShoppingList],
  migrations: [],
  subscribers: [],
});
