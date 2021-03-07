const apiKey = 'AIzaSyCLBDc1jMaFB7ykl23VgjAKLyOxGg3PWE8';
const databaseUrl = 'https://my-movies-a2d2f-default-rtdb.firebaseio.com';
const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
import {request} from './requestServices.js';

export const register = async (email, password) => {
    let res = await request(registerUrl, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}