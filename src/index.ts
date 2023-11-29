import "reflect-metadata";
import app from './app';
import { AppDataSource } from './database';

async function main() {
    try {
        await AppDataSource.initialize();
        console.log('Database connected')
        app.listen(8080);
        console.log('Server is listening on port', 8080);
    } catch (error) {
        console.error(error);
    }
}


main();


