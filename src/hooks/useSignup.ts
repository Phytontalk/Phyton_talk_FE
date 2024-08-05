import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signup, sendEmailVerification } from '../../src/api/signupFetchApi';
import { EMAIL_DOMAINS } from '@/src/constants/emailDomains';

export const useSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    const [password, setPassword] = useState('');
    const [sns, setSns] = useState('');
    const [birth, setBirth] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [codeVerified, setCodeVerified] = useState(false);
    const [serverCode, setServerCode] = useState('');
    const [timer, setTimer] = useState(60);
    const navigate = useRouter();

    useEffect(() => {
        if (codeSent && !codeVerified) {
            const interval = setInterval(() => {
                console.log(timer);
                setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setTimer(60);
        }
    }, [codeSent, codeVerified, timer]);

    const handleSendCode = async () => {
        const fullEmail = `${email}${domain}`;
        console.log(fullEmail);
        if (domain === '') {
            alert('이메일 도메인을 선택해주세요!');
            return;
        }
        if (!EMAIL_DOMAINS.includes(domain)) {
            alert('허용되지 않은 이메일 도메인입니다.');
            return;
        }
        try {
            const response = await sendEmailVerification(fullEmail);
            if (response.code) {
                setServerCode(response.code);
                setCodeSent(true);
                setTimer(60);
                alert('인증 코드가 발송되었습니다. 1분 내에 확인해주세요.');
            } else {
                alert('인증 코드를 보내는데 실패했습니다.');
            }
        } catch (error) {
            console.error('Email verification error:', error);
        }
    };

    const handleVerifyCode = () => {
        if (verificationCode === serverCode) {
            setCodeVerified(true);
            alert('인증 성공!');
        } else {
            setCodeSent(false);
            alert('인증 실패!');
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => setDomain(e.target.value);
    const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const handleSnsChange = (e: React.ChangeEvent<HTMLInputElement>) => setSns(e.target.value);
    const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setVerificationCode(e.target.value);

    const handleSignup = async () => {
        if (!codeVerified) {
            alert('이메일 인증을 완료해주세요.');
            return;
        }

        const fullEmail = `${email}${domain}`;
        try {
            await signup({ name, email: fullEmail, password, sns, birthDate: birth });
            alert('회원가입이 완료되었습니다.');
            navigate.push('/');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return {
        name,
        email,
        domain,
        password,
        sns,
        verificationCode,
        codeSent,
        codeVerified,
        timer,
        birth,
        handleNameChange,
        handleEmailChange,
        handleDomainChange,
        handlePasswordChange,
        handleSnsChange,
        handleVerificationCodeChange,
        handleSendCode,
        handleVerifyCode,
        handleSignup,
        handleBirthChange,
    };
};
