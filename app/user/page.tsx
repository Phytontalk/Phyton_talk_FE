'use client';

import React from 'react';
import { useUser } from '@/src/hooks/useUser';
import Image from 'next/image';

const UserProfilePage = () => {
    const { user, editData, handleInputChange, handleSave, loading, error } = useUser();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <div className='container mx-auto p-4'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                <Image
                    src={editData?.avatar || 'http://via.placeholder.com/100.jpg'}
                    alt='User Avatar'
                    width={100}
                    height={100}
                    unoptimized
                />
                <div className='px-6 py-4'>
                    <input className='input' name='name' value={editData?.name || ''} onChange={handleInputChange} />
                    <input className='input' name='sns' value={editData?.sns || ''} onChange={handleInputChange} />
                    <input
                        className='input'
                        name='avatar'
                        value={editData?.avatar || ''}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSave}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
