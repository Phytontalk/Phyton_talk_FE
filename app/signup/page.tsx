'use client';
import { useSignup } from '@/src/hooks/useSignup';
import { EMAIL_DOMAINS } from '@/src/constants/emailDomains';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Input from '@/src/components/ui/Input';
import Button from '@/src/components/ui/Button';

export default function SignupPage() {
    const {
        name,
        email,
        domain,
        sns,
        password,
        verificationCode,
        codeSent,
        codeVerified,
        timer,
        birth,
        handleBirthChange,
        handleNameChange,
        handleEmailChange,
        handleDomainChange,
        handleSnsChange,
        handlePasswordChange,
        handleVerifyCode,
        handleVerificationCodeChange,
        handleSendCode,
        handleSignup,
    } = useSignup();
    return (
        <CenteredContainer>
            <div className='w-full max-w-md flex flex-col items-center justify-center h-screen'>
                <h1 className='text-5xl font-bold text-center text-white mb-20'>회원가입</h1>
                <div
                    className='w-full px-8 shadow-lg rounded-3xl py-20 mb-20 border border-white'
                    style={{
                        backgroundImage: `radial-gradient(circle at center, 
                        rgba(244, 73, 244, 0.25),
                        rgba(121, 118, 232, 0.25),
                        rgba(0, 25, 192, 0.25)
                    )`,
                    }}
                >
                    <div className='mb-4'>
                        <input
                            type='text'
                            value={name}
                            onChange={handleNameChange}
                            placeholder='이름'
                            className='w-full px-4 py-2 h-14 rounded-lg bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        />
                    </div>
                    <div className='mb-4 flex items-center justify-center'>
                        <div className='flex bg-[#8B8BA4] rounded-lg'>
                            <input
                                type='text'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='이메일'
                                className='flex-1 w-1/2 h-14 px-4 py-2 placeholder:text-white rounded-l-lg focus:outline-none focus:ring-2 bg-[#8B8BA4] focus:ring-blue-400 focus:border-transparent'
                            />
                            <select
                                value={domain}
                                onChange={handleDomainChange}
                                className='w-1/2 px-2 py-2 h-14 rounded-r-lg text-white focus:outline-none focus:ring-2 bg-[#8B8BA4] focus:ring-blue-400 focus:border-transparent'
                            >
                                {EMAIL_DOMAINS.map((domain) => (
                                    <option key={domain} value={domain}>
                                        {domain}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleSendCode}
                        className='w-full mb-4 px-4 py-2 h-14 bg-[#7976E8] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                        disabled={codeSent && timer !== 0}
                    >
                        {codeSent && timer ? `다시 보내기 (${timer}s)` : '인증 코드 발송'}
                    </button>
                    {codeSent && (
                        <>
                            <input
                                type='text'
                                value={verificationCode}
                                onChange={handleVerificationCodeChange}
                                placeholder='인증 코드 입력'
                                className='w-full mb-4 px-4 py-2 h-14 rounded-lg bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                            />
                            <button
                                onClick={handleVerifyCode}
                                disabled={codeVerified}
                                className='w-full mb-4 px-4 py-2 h-14 bg-[#7976E8] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                            >
                                인증 확인
                            </button>
                        </>
                    )}
                    <div className='mb-4'>
                        <input
                            type='text'
                            value={sns}
                            onChange={handleSnsChange}
                            placeholder='SNS ID'
                            className='w-full px-4 py-2 h-14 rounded-lg bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            type='text'
                            value={birth}
                            onChange={handleBirthChange}
                            placeholder='태어난 년도 ex) 2006'
                            className='w-full px-4 py-2 h-14 rounded-lg bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='비밀번호'
                            className='w-full px-4 py-2 h-14 rounded-lg bg-[#8B8BA4] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        />
                    </div>
                    <button
                        onClick={handleSignup}
                        className='w-full px-4 py-2 h-14 bg-[#7976E8] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </CenteredContainer>
    );
}
