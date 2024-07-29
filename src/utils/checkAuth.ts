type CookieMap = { [key: string]: string };

export const checkAuth = (): boolean => {
    const cookies = document.cookie.split(';').reduce<CookieMap>((acc, cookie) => {
        const [key, value] = cookie.split('=');
        if (key && value) {
            acc[key.trim()] = value.trim();
        }
        console.log(acc);
        return acc;
    }, {});

    console.log('Parsed cookies:', cookies);
    return cookies['token'] === 'Bearer token';
};
