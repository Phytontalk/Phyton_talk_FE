'use client';

import { useQuiz } from '@/src/hooks/useQuiz';
import Button from '@/src/components/ui/Button';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import { logout } from '@/src/api/loginFetchApi';

export default function QuizPage() {
    const { questions, currentQuestionIndex, handleNextQuestion } = useQuiz();

    if (questions.length === 0) {
        return <div>로딩 중...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <CenteredContainer>
            <div onClick={logout} style={{ cursor: 'pointer', color: 'red', marginBottom: '20px' }}>
                로그아웃
            </div>
            <Title level={2}>퀴즈</Title>
            <div className='mb-4'>
                <p className='text-xl mb-4'>{`질문 ${currentQuestionIndex + 1}: ${currentQuestion.question[0]} vs ${
                    currentQuestion.question[1]
                }`}</p>
                <Button onClick={() => handleNextQuestion(0)} color='green'>
                    {currentQuestion.question[0]}
                </Button>
                <Button onClick={() => handleNextQuestion(1)} color='blue'>
                    {currentQuestion.question[1]}
                </Button>
            </div>
            <p className='text-center'>현재 {currentQuestionIndex + 1}번째 문제</p>
        </CenteredContainer>
    );
}
