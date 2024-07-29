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
            <div onClick={logout} className='absolute top-5 right-5 text-red-600 cursor-pointer'>
                로그아웃
            </div>
            <Title level={2}>퀴즈</Title>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl mb-4'>{`질문 ${currentQuestionIndex + 1}`}</p>
                <div className='flex items-center justify-center space-x-12'>
                    <Button onClick={() => handleNextQuestion(0)} color='green'>
                        {currentQuestion.question[0]}
                    </Button>
                    <span className='text-2xl text-gray-500'>vs</span>
                    <Button onClick={() => handleNextQuestion(1)} color='blue'>
                        {currentQuestion.question[1]}
                    </Button>
                </div>
            </div>
            <p className='text-center mt-4'>현재 {currentQuestionIndex + 1}번째 문제</p>
        </CenteredContainer>
    );
}
