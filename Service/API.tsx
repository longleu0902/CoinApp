import axios from 'axios';


const fethDataCoin = async (limit : number) => {
    try {
        const data = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`, {
            headers: {
                'X-CMC_PRO_API_KEY': "ef557797-9503-4f8e-b369-6b5efc8a02ae",
            }
        })
        // console.log("check api", data.data)
        // console.log("check api",typeof data.data)

        return data.data
    } catch (err) {
        console.error(err)
    }
}
const fethDataCoinIcon = async (id : number) => {
    try {
        const data = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`, {
            headers: {
                'X-CMC_PRO_API_KEY': "ef557797-9503-4f8e-b369-6b5efc8a02ae",
            }
        })
        // console.log("check api", data.data.data[`${id}`]["logo"])

        return data.data.data[`${id}`]["logo"]
    } catch (err) {
        console.error(err)
    }
}

const getDataCoin = async (symbol : string) => {
    try {
        const data = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`, {
            headers: {
                'X-CMC_PRO_API_KEY': "ef557797-9503-4f8e-b369-6b5efc8a02ae",
            }
        })
        // console.log("check api", data.data.data[`${symbol}`]["quote"]["USD"]["price"])

        return {
            id : data.data.data[`${symbol}`]["id"],
            price : data.data.data[`${symbol}`]["quote"]["USD"]["price"]
        }
    } catch (err) {
        console.error(err)
    }
}
export { fethDataCoin , fethDataCoinIcon , getDataCoin}