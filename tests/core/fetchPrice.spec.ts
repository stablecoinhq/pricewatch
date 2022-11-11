import { FetchPrice, Database } from "../../src/core";
import { DataSource } from "typeorm"

describe('fetch price test', () => {
    let fetchPrice: FetchPrice;
    let connection: DataSource;

    beforeEach(async () => {

        const database = new Database()
        connection = await database.initialize()
        fetchPrice = new FetchPrice(connection.manager)
    })
    afterAll(async () => {
        await connection.destroy()
    })
    it("check price", async () => {
        await fetchPrice.fetch()
    })
})