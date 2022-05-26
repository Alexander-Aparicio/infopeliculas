import axios from "axios"

const getMusic = async() => {
    try {

        // const res = await axios.get(`https://api.deezer.com/search/?q=album:"${keyword}" track:"${keyword}"`).then((res)=> res.data )
 
        const res = await axios.get('https://api.deezer.com/search?q=eminem')
        console.log(res)
        return res
        
    } catch (error) {
        console.error(error)
    }
}

export default getMusic