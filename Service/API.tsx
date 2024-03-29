import axios from 'axios';


const fethData = async (id : number) => {
    try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=c4563bfba492781f00355dcdf29fe547`)
        // console.log(data.data.list)
        return data.data.list.splice(0 , 16)
    } catch (err) {
        console.error(err)
    }
}
export { fethData }