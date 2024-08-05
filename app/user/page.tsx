'use client';

import { useUser } from '@/src/hooks/useUser';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import { useState } from 'react';
import PasswordConfirmModal from '@/src/components/layout/PasswordConfirmModal';
import AvatarImage from '@/src/components/ui/AvatarImage';

const UserProfilePage = () => {
    const { user, loading, error } = useUser();
    const [showModal, setShowModal] = useState(false);

    const handleConfirmPassword = () => {
        window.location.href = '/user/change';
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <CenteredContainer>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='bg-[#1D203E] p-8 text-white w-full max-w-md'>
                    <div className='flex flex-col items-center'>
                        <Title level={2} className='text-7xl text-white mb-8'>
                            마이페이지
                        </Title>
                        <AvatarImage
                            avatarNumber={user.avatar}
                            width={null}
                            height={null}
                            className='rounded-xl mb-24 bg-gradient-to-b from-[#14183F] to-[#2C1E45] pt-4'
                        />
                        <div className='flex flex-col items-center w-full mb-44'>
                            <div className='w-full mb-4'>
                                <label className='block text-white text-sm mb-2' htmlFor='name'>
                                    이름
                                </label>
                                <div className='w-full bg-transparent border-b border-white p-2 text-white text-right'>
                                    {user.name || ''}
                                </div>
                            </div>
                            <div className='w-full mb-4'>
                                <label className='block text-white text-sm mb-2' htmlFor='name'>
                                    이메일
                                </label>
                                <div className='w-full bg-transparent border-b border-white p-2 text-white text-right'>
                                    {user.email || ''}
                                </div>
                            </div>
                            <div className='w-full mb-4'>
                                <label className='block text-white text-sm mb-2' htmlFor='name'>
                                    생년
                                </label>
                                <div className='w-full bg-transparent border-b border-white p-2 text-white text-right'>
                                    {user.birthYear || '2000'}
                                </div>
                            </div>
                            <div className='w-full mb-4'>
                                <label className='block text-white text-sm mb-2' htmlFor='name'>
                                    인스타그램 ID
                                </label>
                                <div className='w-full bg-transparent border-b border-white p-2 text-white text-right'>
                                    {user.sns || ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    {showModal && (
                        <PasswordConfirmModal onClose={() => setShowModal(false)} onConfirm={handleConfirmPassword} />
                    )}
                    <div className='w-full fixed bottom-0 left-0 right-0 flex justify-center bg-[#1D203E]'>
                        <button
                            onClick={() => setShowModal(true)}
                            className='bg-gradient-to-b from-[#31376F] to-[#894BA2] h-20 hover:bg-[#6858c5] py-6 text-white text-center text-2xl font-bold  px-4  w-full max-w-md'
                        >
                            변경하기
                        </button>
                    </div>
                </div>
            </div>
        </CenteredContainer>
    );
};

export default UserProfilePage;
