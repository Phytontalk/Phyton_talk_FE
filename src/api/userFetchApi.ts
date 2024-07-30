import axiosInstance from './instance';

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

export const updateUser = async (memberId: string, data: { name: string; sns: string; avatar: string }) => {
    try {
        const response = await axiosInstance.put(`/member/${memberId}`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
    }
};
