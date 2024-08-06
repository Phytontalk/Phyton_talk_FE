import React, { useState } from 'react';
import Image from 'next/image';

type AvatarModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelectAvatar: (avatar: number) => void;
};

const AvatarChangeModal: React.FC<AvatarModalProps> = ({ isOpen, onClose, onSelectAvatar }) => {
    if (!isOpen) return null;

    const avatars = ['/asset/1.png', '/asset/2.png', '/asset/3.png', '/asset/4.png', '/asset/5.png', '/asset/6.png'];

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-[#1D203E] rounded-lg p-4'>
                <div className='grid grid-cols-2 gap-4'>
                    {avatars.map((avatar, index) => (
                        <div key={index} className='cursor-pointer p-2 hover:scale-110 transition-transform'>
                            <Image
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                width={100}
                                height={100}
                                className='rounded-full'
                                onClick={() => {
                                    onSelectAvatar(index + 1);
                                    onClose();
                                }}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={onClose} className='mt-4 bg-red-500 text-white py-2 px-4 rounded'>
                    Close
                </button>
            </div>
        </div>
    );
};

export default AvatarChangeModal;
