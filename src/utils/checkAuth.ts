'use cleint';
import { CookieMap } from '../types/apiHandler';

export const checkAuth = (): boolean => {
    const cookies = document.cookie.split(';').reduce<CookieMap>((acc, cookie) => {
        const [key, value] = cookie.split('=');
        if (key && value) {
            acc[key.trim()] = value.trim();
        }
        return acc;
    }, {});

    console.log('Parsed cookies:', cookies);
    return cookies['user'] ? true : false;
};
