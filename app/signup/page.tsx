'use client';

import { useSignup } from '@/src/hooks/useSignup';
import { EMAIL_DOMAINS } from '@/src/constants/emailDomains';
import Input from '@/src/components/ui/Input';
import Select from '@/src/components/ui/Select';
import Button from '@/src/components/ui/Button';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';

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
        handleNameChange,
        handleEmailChange,
        handleDomainChange,
        handleSnsChange,
        handlePasswordChange,
        handleVerificationCodeChange,
        handleSendCode,
        handleVerifyCode,
        handleSignup,
    } = useSignup();

    return (
        <CenteredContainer>
            <Title level={2}>회원가입</Title>
            <Input type='text' value={name} onChange={handleNameChange} placeholder='이름' color='green' />
            <div className='mb-4 flex items-center space-x-2'>
                <Input type='text' value={email} onChange={handleEmailChange} placeholder='이메일' color='green' />
                <Select value={domain} onChange={handleDomainChange} options={EMAIL_DOMAINS} color='green' />
            </div>
            <Input type='text' value={sns} onChange={handleSnsChange} placeholder='SNS' color='green' />
            <Button onClick={handleSendCode} disabled={codeSent} timer={timer} color='green'>
                {codeSent ? '인증 코드 재발송' : '인증 코드 발송'}
            </Button>
            {codeSent && !codeVerified && (
                <>
                    <Input
                        type='text'
                        value={verificationCode}
                        onChange={handleVerificationCodeChange}
                        placeholder='인증 코드 입력'
                        color='green'
                    />
                    <Button onClick={handleVerifyCode} color='blue'>
                        인증 확인
                    </Button>
                </>
            )}
            <Input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='비밀번호'
                color='green'
            />
            <Button onClick={handleSignup} color='green'>
                회원가입
            </Button>
        </CenteredContainer>
    );
}
