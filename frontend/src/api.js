import axios from 'axios'

const baseURL = `http://localhost:5000/api`
const token = localStorage.getItem('token')

const API = axios.create({ baseURL, headers: { Authorization: `Bearer ${token}` } });

let resetHead = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}


const actions = {

    getUser: async () => {
        //This will go get our user every time we refresh 
        return await axios.get(`${baseURL}/user`, resetHead())
    },

    getMyItems: async () => {
        return await axios.get(`${baseURL}/myItems`, resetHead())
    },
    getAllItems: async () => {
        return await axios.get(`${baseURL}/allItems`, resetHead())
    },
    addItem: async (item) => {
        return await axios.post(`${baseURL}/addAItem`, item , resetHead())
    },
    // Added by John
    delItem: async (itemId) => {
        return await axios.delete(`${baseURL}/delete/${itemId}`, resetHead())
    },
    //------ is it good??
    logIn: async (data) => {

        localStorage.setItem('googleTokenId', data.tokenId)

        let headerObj = resetHead()
        headerObj.headers['X-Google-Token'] = data.tokenId

        let resFromOurDB = await axios.post(`${baseURL}/logMeIn`, data, headerObj)

        console.log(resFromOurDB)

        window.localStorage.setItem('token', resFromOurDB?.data?.token)



        return resFromOurDB
    }



}

export default actions