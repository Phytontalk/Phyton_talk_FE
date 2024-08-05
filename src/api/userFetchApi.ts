import axiosInstance from './instance';

export const getUserInfo = async (memberId: string) => {
    try {
        const response = await axiosInstance.get(`/member/${memberId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};

export const updateUser = async (memberId: string, data: { name: string; sns: string; avatar: number }) => {
    try {
        const response = await axiosInstance.put(`/member/${memberId}`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
    }
};

export const getPassword = async (memberId: string, password: string) => {
    try {
        const response = await axiosInstance.post(`/member/${memberId}/password`, { password });
        return response.status === 200;
    } catch (error) {
        console.error('Error fetching password:', error);
        throw error;
    }
};

export const updatePassword = async (memberId: string, password: string) => {
    try {
        const response = await axiosInstance.put(`/member/${memberId}/password`, { password });
        return response.data;
    } catch (error) {
        console.error('Failed to update password:', error);
        throw error;
    }
};

export const deleteUser = async (memberId: string) => {
    try {
        const response = await axiosInstance.delete(`/member/${memberId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to delete user:', error);
        throw error;
    }
};

export const getFriendRecommendations = async (memberId: string) => {
    try {
        const response = await axiosInstance.get(`/friend/${memberId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching friend recommendations:', error);
        throw error;
    }
};
