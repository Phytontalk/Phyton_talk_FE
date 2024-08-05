import axiosInstance from './instance';

export const getDailyQuiz = async () => {
    try {
        const response = await axiosInstance.get('/quiz/daily');
        return response.data;
    } catch (error) {
        console.error('daily quiz error', error);
        throw error;
    }
};
