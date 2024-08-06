'use client';
import { useLogin } from '@/src/hooks/useLogin';
import { EMAIL_DOMAINS } from '@/src/constants/emailDomains';
import CenteredContainer from '@/src/components/layout/CenteredContainer';

export default function LoginPage() {
    const { email, domain, password, handleEmailChange, handleDomainChange, handlePasswordChange, handleLogin } =
        useLogin();

    return (
        <CenteredContainer>
            <div className='w-full flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-5xl font-bold text-center text-white mb-10 md:mb-64 notosans-kr'>로그인</h1>
                <div
                    className='w-full max-w-md px-8 shadow-lg rounded-3xl py-10 md:py-20 mb-10 md:mb-64 border border-white'
                    style={{
                        backgroundImage: `radial-gradient(circle at center, 
                        rgba(244, 73, 244, 0.25),
                        rgba(121, 118, 232, 0.25),
                        rgba(0, 25, 192, 0.25)
                    )`,
                    }}
                >
                    <div className='mb-4 flex items-center justify-center'>
                        <div className='flex w-full md:bg-[#8B8BA4] rounded-lg'>
                            <input
                                type='text'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='이메일'
                                className='flex-1 w-1/2 h-12 px-4 py-2 notosans-kr  placeholder:text-white rounded-l-lg focus:outline-none focus:ring-2 bg-[#8B8BA4] focus:ring-blue-400 focus:border-transparent text-white'
                            />
                            <select
                                value={domain}
                                onChange={handleDomainChange}
                                className='w-1/2 px-2 py-2 h-12 rounded-r-lg notosans-kr  text-white notosans-kr focus:outline-none focus:ring-2 bg-[#8B8BA4] focus:ring-blue-400 focus:border-transparent'
                            >
                                {EMAIL_DOMAINS.map((domain) => (
                                    <option key={domain} value={domain}>
                                        {domain}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='mb-4 flex justify-center'>
                        <input
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='비밀번호'
                            className='w-full h-12 px-4 py-2 rounded-lg  text-white bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className='w-full h-12 bg-[#7976E8] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 notosans-kr '
                    >
                        로그인
                    </button>
                </div>
            </div>
        </CenteredContainer>
    );
}
