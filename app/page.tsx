'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { worker } from '@/mocks/browser';
import { checkAuth } from '@/src/utils/checkAuth';

const LandingPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (process.env.NODE_ENV === 'development' && worker) {
            console.log('Starting MSW');
            worker
                .start()
                .then(() => console.log('MSW started'))
                .catch((err) => console.error('Failed to start MSW', err));
        }

        if (checkAuth()) {
            router.push('/quiz');
        }
    }, [router]);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <h1 className='text-4xl font-bold mb-8'>환영합니다!</h1>
            <div className='flex space-x-4'>
                <Link
                    href='/login'
                    className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                >
                    로그인
                </Link>
                <Link
                    href='/signup'
                    className='px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                >
                    회원가입
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
