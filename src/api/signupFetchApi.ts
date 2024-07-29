import axiosInstance from './instance';
import { SignupPayload } from '../types/apiHandler';

export const signup = async ({ name, email, password, sns }: SignupPayload) => {
    try {
        const response = await axiosInstance.post('/signup', { name, email, password, sns });
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};

export const sendEmailVerification = async (email: string) => {
    try {
        const response = await axiosInstance.post('/email', { email });
        return response.data;
    } catch (error) {
        console.error('Email verification error:', error);
        throw error;
    }
};
