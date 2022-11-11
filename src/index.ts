import { Scheduler, Logger } from './core';
import * as dotenv from 'dotenv';
dotenv.config();

// validation check, start scheduler
const main = async () => {
    const scheduler = new Scheduler()
    await scheduler.run()
}

main().catch(error => {
    const logger = Logger.getLogger()
    logger.debug(`error in main(): ${error}`)
})