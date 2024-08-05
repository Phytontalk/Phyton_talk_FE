'use client';
import { useState } from 'react';
import Image from 'next/image';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import AvatarChangeModal from '@/src/components/layout/AvatarChangeModal';
import { useUser } from '@/src/hooks/useUser';
import AvatarImage from '@/src/components/ui/AvatarImage';

const UserProfilePage = () => {
    const { editData, handleInputChange, handleSave, loading, error } = useUser();
    const [showModal, setShowModal] = useState(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <CenteredContainer>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='bg-[#1D203E] p-8 text-white w-full max-w-md'>
                    <div className='flex flex-col items-center'>
                        <Title level={2} className='text-6xl text-white mb-8'>
                            마이페이지
                        </Title>
                        <div className='relative mb-24'>
                            <AvatarImage
                                avatarNumber={editData?.avatar || 1}
                                width={null}
                                height={null}
                                className='rounded-xl'
                            />
                            <div className='absolute right-2 top-2 cursor-pointer' onClick={() => setShowModal(true)}>
                                <Image src='/asset/edit.png' alt='Edit' width={20} height={20} />
                            </div>
                        </div>
                        <div>
                            {Object.entries(editData || {}).map(([key, value]) =>
                                key != 'avatar' ? (
                                    <div key={key} className='w-full mb-4'>
                                        <label className='block text-white text-sm mb-2' htmlFor='name'>
                                            {key}
                                        </label>
                                        <input
                                            key={key}
                                            name={key}
                                            value={value}
                                            onChange={handleInputChange}
                                            className='mb-4 p-2 w-full text-white bg-transparent border-b border-white'
                                        />
                                    </div>
                                ) : (
                                    ''
                                )
                            )}
                        </div>
                        <div className='w-full fixed bottom-0 left-0 right-0 flex justify-center bg-[#1D203E]'>
                            <button
                                onClick={handleSave}
                                className='bg-gradient-to-b from-[#31376F] to-[#894BA2] h-20 hover:bg-[#6858c5] py-6 text-white text-center text-2xl font-bold  px-4  w-full max-w-md'
                            >
                                변경하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <AvatarChangeModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSelectAvatar={(avatar) => handleInputChange({ target: { name: 'avatar', value: avatar } })}
                />
            )}
        </CenteredContainer>
    );
};

export default UserProfilePage;
