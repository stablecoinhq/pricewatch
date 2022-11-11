import { providers } from "ethers"
import { Vat__factory } from '../types/ethers-contracts/factories/Vat__factory'
import { exchanges } from "ccxt"
import dotenv from "dotenv"

dotenv.config();

const main = async () => {
    const RPC_HOST = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY!}`
    const provider = new providers.JsonRpcProvider(RPC_HOST)
    const address = "0x1b1FE236166eD0Ac829fa230afE38E61bC281C5e"
    const vat = Vat__factory.connect(address, provider)
    const Line = await vat.Line()
    console.log(Line.toString())
    console.log(exchanges)
}

main().catch(error => {
    console.log(error)
})