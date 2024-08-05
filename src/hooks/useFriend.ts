import { useState, useEffect } from 'react';
import { getFriendRecommendations } from '../api/userFetchApi';
import { getUserId } from '../utils/getUserId';
import { Friend } from '../types/apiHandler';

export const useFriend = () => {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [memberId, setMemberId] = useState<string | undefined>(undefined);

    useEffect(() => {
        const id = getUserId();
        if (id) {
            setMemberId(id);
        } else {
            setError('Not Found User Id');
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!memberId) return;

        setLoading(true);
        getFriendRecommendations(memberId)
            .then((response) => {
                setFriends(response.friends);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [memberId]);

    return { friends, loading, error };
};
