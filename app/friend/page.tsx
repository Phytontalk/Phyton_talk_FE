'use client';

import React from 'react';
import { useFriend } from '@/src/hooks/useFriend';
import Image from 'next/image';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import Navbar from '@/src/components/layout/Navbar';
import AvatarImage from '@/src/components/ui/AvatarImage';

const FriendPage = () => {
    const { friends, loading, error } = useFriend();

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;

    return (
        <CenteredContainer>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <Title level={2} className='text-6xl text-white mb-8'>
                    오늘의 친구 추천
                </Title>
                <Title level={2} className='text-sm text-white mb-8 font-thin'>
                    * 내일이 되면 사라져요
                </Title>
                <div className='py-4 mb-24'>
                    {friends.map((friend, index) => (
                        <>
                            <div key={friend.friendId} className='w-full max-w-md mb-10'>
                                <div
                                    className={`w-full max-w-md mb-10 ${
                                        index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                                    } flex items-center justify-center`}
                                >
                                    <AvatarImage
                                        avatarNumber={friend.avatar}
                                        width={200}
                                        height={200}
                                        className='rounded-full'
                                    />
                                    <div className='text-left text-white mt-2 text-3xl'>
                                        {friend.type === 'Good'
                                            ? '나와 모두 같은 답을 선택한 친구'
                                            : '나와 모두 다른 답을 선택한 친구'}
                                        <span className='text-sm ml-2'>
                                            {friend.birthYear ? friend.birthYear : '__00년생'}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`flex items-center pl-16 bg-gradient-to-r from-[#4c73e4] via-[#916cca] to-[#c25697] rounded-xl shadow-lg p-4 mx-4`}
                                >
                                    <Image src='/asset/instalogo.png' alt='Instagram' width={32} height={32} />
                                    <a href={`https://instagram.com/${friend.sns}`} className='text-white pl-4 text-xl'>
                                        {friend.sns}
                                    </a>
                                </div>
                            </div>
                            {index < friends.length - 1 && (
                                <div className=' w-full items-center my-10'>
                                    <div className='text-4xl text-[#9796AE]'>or</div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
                <Navbar />
            </div>
        </CenteredContainer>
    );
};

export default FriendPage;
