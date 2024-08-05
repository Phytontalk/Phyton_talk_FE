import { useState, useEffect } from 'react';
import { getUserInfo, updateUser } from '../api/userFetchApi';
import { User, UserModifiedData } from '../types/apiHandler';
import { getUserId } from '../utils/getUserId';

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [editData, setEditData] = useState<UserModifiedData | null>(null);
    const memberId = getUserId(); // Assume getUserId is synchronous

    useEffect(() => {
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
            } catch (err) {
                console.error('Failed to fetch user:', err);
                setError('404');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [memberId]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (editData) {
            setEditData({ ...editData, [name]: value });
        }
    };

    const handleSave = async () => {
        if (!editData || !user) return;
        try {
            if (memberId) await updateUser(memberId, editData);
            alert('변경되었습니다.');
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Failed to update user');
        }
    };
    const handleAvatarChange = (avatar: string) => {
        handleInputChange({
            target: {
                name: 'avatar',
                value: avatar,
            } as any, // Type assertion to satisfy the expected structure of a synthetic event object
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return { user, editData, handleAvatarChange, handleInputChange, handleSave, loading, error };
};
