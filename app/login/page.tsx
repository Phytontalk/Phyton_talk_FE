'use client';

import { useLogin } from '@/src/hooks/useLogin';
import { EMAIL_DOMAINS } from '@/src/constants/emailDomains';
import Input from '@/src/components/ui/Input';
import Select from '@/src/components/ui/Select';
import Button from '@/src/components/ui/Button';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';

export default function LoginPage() {
    const { email, domain, password, handleEmailChange, handleDomainChange, handlePasswordChange, handleLogin } =
        useLogin();

    return (
        <CenteredContainer>
            <Title level={2}>로그인</Title>
            <div className='mb-4'>
                <Input type='text' value={email} onChange={handleEmailChange} placeholder='이메일' color='blue' />
                <Select value={domain} onChange={handleDomainChange} options={EMAIL_DOMAINS} color='blue' />
                <Input
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='비밀번호'
                    color='blue'
                />
                <Button onClick={handleLogin} color='blue'>
                    로그인
                </Button>
            </div>
        </CenteredContainer>
    );
}
