'use client';

import React from 'react';
import { useFriend } from '@/src/hooks/useFriend';
import Image from 'next/image';

const FriendPage = () => {
    const { friends, loading, error } = useFriend();

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;

    return (
        <div className='container mx-auto p-4'>
            {friends.map((friend) => (
                <div key={friend.friendId} className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                    <Image src={friend.avatar} alt={`${friend.name}의 아바타`} width={100} height={100} unoptimized />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{friend.name}</div>
                        <p className='text-gray-700 text-base'>{friend.sns}</p>
                        <p>Type: {friend.type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendPage;
