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

export const getOneMovie = async(id) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');

    return res;
    // let { email } = authService.getData();

    // let likes = Object.values(res.likes || {} );
    // let alreadyLiked = likes.some(x => x.creator == email);

    // return Object.assign(res, {isOwn: res.creator == email, alreadyLiked, likes})
}