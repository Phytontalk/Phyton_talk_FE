'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { worker } from '@/mocks/browser';
import { checkAuth } from '@/src/utils/checkAuth';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';

const LandingPage = () => {
    const router = useRouter();

    useEffect(() => {
        /*if (process.env.NODE_ENV === 'development' && worker) {
            console.log('Starting MSW');
            worker
                .start()
                .then(() => console.log('MSW started'))
                .catch((err) => console.error('Failed to start MSW', err));
        }*/

        if (checkAuth()) {
            router.push('/quiz');
        }
    }, [router]);

    return (
        <CenteredContainer>
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className='w-full max-w-xs flex flex-col items-center'>
                    <div className='relative  mb-4'>
                        <span className='text-gray-500 absolute inset-0 flex items-center text-[250px] justify-center z-0'>
                            ?
                        </span>
                        <span className='text-white relative z-10 text-9xl'>QnF</span>
                    </div>
                    <Title level={2} className='notosans-kr  text-xl text-white text-center mt-10 mb-48'>
                        우리 학교에서 <br />
                        가장 잘맞는 친구 찾기
                    </Title>
                    <div className='space-y-4 mt-8'>
                        <Link
                            href='/login'
                            className='w-64 flex notosans-kr justify-center items-center px-6 py-3 bg-[#7976E8] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#6858c5] focus:outline-none focus:ring-2 focus:ring-[#7976E8] focus:ring-opacity-75'
                        >
                            로그인
                        </Link>
                        <Link
                            href='/signup'
                            className='w-64 flex notosans-kr justify-center items-center px-6 py-3 bg-[#7976E8] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#6858c5] focus:outline-none focus:ring-2 focus:ring-[#7976E8] focus:ring-opacity-75'
                        >
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </CenteredContainer>
    );
};

export default LandingPage;
