import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: { maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': 'f654f4065amsh68b336e2641efa1p12ca33jsnb1a6c797210e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data;
}