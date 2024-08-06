import axiosInstance from './instance';

export const login = async ({ email, password }: { email: string; password: string }) => {
    try {
        const response = await axiosInstance.post('/login', { email, password });
        const memberId = response.data.memberId;
        if (memberId) {
            document.cookie = `user=${memberId}; path=/; max-age=86400;`; // 1일 동안 유효
        }
        //localStorage.setItem('token', response.headers.common['Authorization']);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await axiosInstance.post('/logout');
        document.cookie = `user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        window.location.href = '/';
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

export const getUserInfo = async (memberId: string) => {
    try {
        console.log(memberId);
        const response = await axiosInstance.get(`/member/${memberId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};
