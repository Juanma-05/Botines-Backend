import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Products } from './entities/Products';
import Cart from './entities/Cart';
import { Products1 } from './entities/Products1';
import { Products2 } from './entities/Products2';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'dbsancho',
    entities: [User, Products,Cart, Products1, Products2],
    logging: true,
    synchronize: true,
})

