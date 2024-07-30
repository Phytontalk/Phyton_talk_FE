import { useState, useEffect } from 'react';
import { getUserInfo } from '../api/loginFetchApi';
import { User } from '../types/apiHandler';
import { getUserId } from '../utils/getUserId';

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const memberId = getUserId();

        if (!memberId) {
            setError('No user ID found');
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const data = await getUserInfo(memberId);
                console.log(memberId);
                setUser(data);
                setError('');
            } catch (err) {
                console.error('Failed to fetch user:', err);
                setError('404');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
};
