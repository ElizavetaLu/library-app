import axios from "axios";

const URL = 'https://hapi-books.p.rapidapi.com/'

export const options = endpoint => {
    return {
        method: 'GET',
        url: `${URL}${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    }
}


export const fetchData = async options => await axios.request(options);