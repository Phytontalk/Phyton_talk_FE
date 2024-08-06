'use cleint';
import { CookieMap } from '../types/apiHandler';

export const getUserId = (): string | undefined => {
    const cookies = document.cookie.split(';').reduce<CookieMap>((acc, cookie) => {
        const [key, value] = cookie.split('=');
        console.log(key, value);
        if (key && value) {
            acc[key.trim()] = value.trim();
        }
        console.log(acc);
        return acc;
    }, {});

    return cookies['user'] ? cookies['user'] : undefined;
};
