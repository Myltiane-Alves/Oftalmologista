import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL,
  timeout: 3000,
  headers: {
    "Content-type": "application/json",
  }
})
