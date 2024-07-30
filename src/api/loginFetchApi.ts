import axiosInstance from './instance';

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/login', { email, password });
        console.log(response);
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
