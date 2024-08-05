import React, { useState } from 'react';
import { getPassword } from '@/src/api/userFetchApi';
import { getUserId } from '@/src/utils/getUserId';

interface PasswordConfirmModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const PasswordConfirmModal: React.FC<PasswordConfirmModalProps> = ({ onClose, onConfirm }) => {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handlePasswordCheck = async () => {
        try {
            const memberId = getUserId();
            if (memberId) {
                const passwordCorrect = await getPassword(memberId, password);
                if (passwordCorrect) {
                    onConfirm();
                } else {
                    setError('비밀번호가 잘못되었습니다.');
                }
            } else {
                setError('사용자 ID를 찾을 수 없습니다.');
            }
        } catch (error) {
            setError('비밀번호가 잘못되었습니다.');
            console.error('Password check error:', error);
        }
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-[#1D203E] p-8 text-white w-full max-w-md rounded-lg'>
                <h2 className='text-xl mb-4'>비밀번호를 입력하세요</h2>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-transparent border-b border-white p-2 text-white'
                    placeholder='비밀번호'
                />
                {error && <p className='text-red-500 mt-2'>{error}</p>}
                <button
                    onClick={handlePasswordCheck}
                    className='mt-4 bg-[#7976E8] hover:bg-[#6858c5] text-white font-bold py-2 px-4 rounded'
                >
                    확인
                </button>
                <button
                    onClick={onClose}
                    className='mt-4 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded'
                >
                    취소
                </button>
            </div>
        </div>
    );
};

export default PasswordConfirmModal;
