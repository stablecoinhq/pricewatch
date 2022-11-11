import { FetchPrice, Database, Logger } from '.';
import { providers } from 'ethers'
import { Vat__factory } from '../types/factories/Vat__factory'
import { exchanges } from 'ccxt'

export class Scheduler {
    async run() {
        const database = new Database()
        const connection = await database.initialize()
        const logger = Logger.getLogger()

        const provider = new providers.JsonRpcProvider(
            `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY!}`
        )
        const address = '0x1b1FE236166eD0Ac829fa230afE38E61bC281C5e'
        const vat = Vat__factory.connect(address, provider)
        const Line = await vat.Line()

        logger.debug(`latest Line value: ${Line.toString()}`)
        logger.debug(`first exchange: ${exchanges[0]}`)

        const fetchPrice = new FetchPrice(connection.manager)
        await fetchPrice.fetch()

        // shutdown for dev
        await connection.destroy()
    }
}