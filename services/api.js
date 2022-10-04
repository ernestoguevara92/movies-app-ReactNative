import axios from 'axios';
import { QuestionIcon } from 'native-base';
import { API_URL, API_KEY } from './api_config';
import qs from 'qs';

const url = API_URL;
const key = API_KEY;

export const getMovies = async (filter) => {
    try {
        const params = {
            api_key: key
        }

    const popularMovies = axios.create({
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
    console.log('PARAMETERS: ', params);
    console.log('FILTER: ', filter);
    const response = await popularMovies.get(`${url}/movie/${filter}`, { params });
    console.log('RESPONSE:', response.data.results);
    const moviesData = response.data.results;
    return moviesData;

    } catch (error) {
        throw error;
    }
}