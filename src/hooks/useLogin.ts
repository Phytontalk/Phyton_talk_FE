import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../src/api/loginFetchApi';
import { EMAIL_DOMAINS } from '../constants/emailDomains';

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState(EMAIL_DOMAINS[0]);
    const [password, setPassword] = useState('');
    const navigate = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDomain(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        const fullEmail = `${email}${domain}`;
        if (!EMAIL_DOMAINS.includes(domain)) {
            alert('허용되지 않은 이메일 도메인입니다.');
            return;
        }
        try {
            await login(fullEmail, password);
            alert('로그인이 완료되었습니다.');
            navigate.push('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return {
        email,
        domain,
        password,
        handleEmailChange,
        handleDomainChange,
        handlePasswordChange,
        handleLogin,
    };
};
