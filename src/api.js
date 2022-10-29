import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://hapi-books.p.rapidapi.com/month/2022/10',
  headers: {
    'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
};

export const req = axios.request(options).then(response => response.data)
.catch(error => {
	console.error(error);
});
