const apiKey = 'AIzaSyCLBDc1jMaFB7ykl23VgjAKLyOxGg3PWE8';


const api = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
}
import {request} from './requestServices.js';

export const register = async (email, password) => {
    let res = await request(api.register, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}

export const login = async (email, password) => {
    let res = await request(api.login, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}

export const getUserData = () => {
    try{
        let data = JSON.parse(localStorage.getItem('auth'));
        return {
            isAuthenticated: Boolean(data.idToken),
            email: data.email
        };
    } catch (error){
        return {
            isAuthenticated: false,
            email: '',
        };
    }
}

export const logout = () => {
    localStorage.setItem('auth', '');
}