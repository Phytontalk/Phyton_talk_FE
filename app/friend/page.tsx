'use client';

import React from 'react';
import { useFriend } from '@/src/hooks/useFriend';
import Image from 'next/image';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import Navbar from '@/src/components/layout/Navbar';
import AvatarImage from '@/src/components/ui/AvatarImage';
import { ClipLoader } from 'react-spinners';

const FriendPage = () => {
    const { friends, loading, error } = useFriend();

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <ClipLoader color={'#ffffff'} loading={loading} size={150} />
            </div>
        );
    }
    if (error) return <div>오류: {error}</div>;

    return (
        <CenteredContainer>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <Title level={2} className='text-6xl text-white mb-8 notosans-kr'>
                    오늘의 친구 추천
                </Title>
                <Title level={2} className='text-sm text-white mb-8 font-thin notosans-kr'>
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
                                    <div className='text-left text-white mt-2 text-3xl notosans-kr'>
                                        {friend.type === 'Good'
                                            ? '나와 모두 같은 답을 선택한 친구'
                                            : '나와 모두 다른 답을 선택한 친구'}
                                        <span className='text-sm ml-2 notosans-kr pl-50'>
                                            {friend.birthYear ? `_${friend.birthYear}` : '_00년생'}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`flex items-center pl-16 bg-gradient-to-r from-[#4c73e4] via-[#916cca] to-[#c25697] rounded-xl shadow-lg p-4 mx-4 notosans-kr`}
                                >
                                    <Image src='/asset/instalogo.png' alt='Instagram' width={32} height={32} />
                                    <a
                                        href={`https://instagram.com/${friend.sns}`}
                                        className='text-white pl-4 text-xl notosans-kr'
                                    >
                                        {friend.sns}
                                    </a>
                                </div>
                            </div>
                            {index < friends.length - 1 && (
                                <div className=' w-full items-center my-10 text-center'>
                                    <div className='text-4xl text-[#9796AE]'>OR</div>
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
