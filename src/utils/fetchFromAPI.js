import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

//put the options object to use in this function which only accepts a url as the only parameter:
//This function allows us to call this API, pass some dynamic URL, and call 
//it within any component in our application
export const fetchFromAPI = async (url) => {
    //passing in the BASE_URL we took from RapidAPI, and inputting the url this function takes in:
    //data something like: /BASE_URL/getChannel or /BASE_URL/getVideos
    const { data } = await axios.get(`${BASE_URL}/${url}`,
    options);
    //passing the options object as the second and last parameter in the axios.get method

    return data;
}