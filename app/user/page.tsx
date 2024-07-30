'use client';

import React from 'react';
import { useUser } from '@/src/hooks/useUser';
import Image from 'next/image';

const UserProfilePage = () => {
    const { user, loading, error } = useUser();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <div className='container mx-auto p-4'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                <Image
                    src={user.avatar || 'http://via.placeholder.com/100.jpg'}
                    alt='User Avatar'
                    width={100}
                    height={100}
                    unoptimized
                />
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{user.name}</div>
                    <p className='text-gray-700 text-base'>Email: {user.email}</p>
                    <p className='text-gray-700 text-base'>SNS: {user.sns}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
