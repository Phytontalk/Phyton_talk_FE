'use cleint';
import { CookieMap } from '../types/apiHandler';

export const getUserId = (): string | undefined => {
    const cookies = document.cookie.split(';').reduce<CookieMap>((acc, cookie) => {
        const [key, value] = cookie.split('=');
        if (key && value) {
            acc[key.trim()] = value.trim();
        }
        return acc;
    }, {});

    return cookies['user'] ? cookies['user'] : undefined;
};
