import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('price')
export class Price {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column('varchar', { nullable: true })
    baseCurrency: string;

    @Column('varchar')
    quoteCurrency: string;

    @Column('varchar')
    exchange: string;

    @Column('int')
    timestamp: number;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;

    constructor(baseCurrency: string, quoteCurrency: string, exchange: string, timestamp: number) {
        this.baseCurrency = baseCurrency;
        this.quoteCurrency = quoteCurrency;
        this.timestamp = timestamp
        this.exchange = exchange
    }
}