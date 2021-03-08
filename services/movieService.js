const databaseUrl = 'https://my-movies-a2d2f-default-rtdb.firebaseio.com';
const apiKey = 'AIzaSyCLBDc1jMaFB7ykl23VgjAKLyOxGg3PWE8';
import {request} from './requestServices.js';

const api = {
    movies: `${databaseUrl}/movies.json`,
}

export const getAllMovies = async(searchText) => {
        let res = await request(api.movies, 'GET');
        return Object.keys(res).map(key => ({key, ...res[key]})).filter(x => !searchText || searchText == x.title);
}