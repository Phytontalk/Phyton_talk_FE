// src/hooks/useUser.ts
import { useState, useEffect } from 'react';
import { getUserInfo, updateUser } from '../api/userFetchApi';
import { User, UserModifiedData } from '../types/apiHandler';
import { getUserId } from '../utils/getUserId';

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [editData, setEditData] = useState<UserModifiedData | null>(null);

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
                setUser(data);
                setEditData({ name: data.name, sns: data.sns, avatar: data.avatar });
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editData) {
            setEditData({ ...editData, [e.target.name]: e.target.value });
        }
    };

    const handleSave = async () => {
        if (!editData || !user) return;
        try {
            await updateUser(user.id, editData);
            alert('User updated successfully');
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Failed to update user');
        }
    };

    return { user, editData, handleInputChange, handleSave, loading, error };
};
