import { EntityManager } from 'typeorm';
import { Price } from '../entity'
import { Logger } from './logger';


export class FetchPrice {
    private manager: EntityManager;
    private logger;
    constructor(manager: EntityManager) {
        this.manager = manager
        this.logger = Logger.getLogger()
    }
    async fetch() {
        const findResult = await this.manager.find(Price, {})
        this.logger.debug(`result: ${JSON.stringify(findResult)}`)
    }
}