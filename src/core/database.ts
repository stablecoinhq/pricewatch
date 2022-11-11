import { DataSource } from 'typeorm'
import connectionOption from '../config/ormconfig';
import { Price, OrderBook } from '../entity';

export class Database {
    public connection: DataSource;
    constructor() {
        this.connection = new DataSource({
            ...connectionOption,
            entities: [Price, OrderBook]
        })
    }
    async initialize(): Promise<DataSource> {
        this.connection = await this.connection.initialize();
        return this.connection;
    }
}