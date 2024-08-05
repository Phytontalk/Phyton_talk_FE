'use client';

import { useQuiz } from '@/src/hooks/useQuiz';
import CenteredContainer from '@/src/components/layout/CenteredContainer';
import Title from '@/src/components/ui/Title';
import { logout } from '@/src/api/loginFetchApi';
import Navbar from '@/src/components/layout/Navbar';

export default function QuizPage() {
    const { questions, currentQuestionIndex, handleNextQuestion } = useQuiz();

    if (questions.length === 0) {
        return <div>로딩 중...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <CenteredContainer>
            <div className='w-full flex flex-col items-center justify-center min-h-screen'>
                <div onClick={logout} className='absolute top-5 right-5 text-red-600 cursor-pointer'>
                    로그아웃
                </div>
                <Title level={2} className={`text-white mb-8 text-6xl`}>
                    오늘의 퀴즈
                </Title>
                <div className='w-full flex flex-col items-center justify-center' style={{ maxWidth: '600px' }}>
                    <p className='text-2xl mb-44 text-white'>{`질문 ${currentQuestionIndex + 1} / 10`}</p>
                    <div className='flex flex-col items-center space-y-8 mb-48'>
                        <div
                            onClick={() => handleNextQuestion(0)}
                            className='w-full cursor-pointer py-8 bg-gradient-to-r text-center px-10 from-[#30459D] via-[#673f81] to-[#874280] text-white font-semibold rounded-lg shadow-lg'
                            style={{
                                fontSize: '1.5rem',
                                width: '100%',
                                maxWidth: '500px',
                                minHeight: '130px',
                                minWidth: '300px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {currentQuestion.question[0]}
                        </div>
                        <span className='text-4xl text-[#9796AE]'>vs</span>
                        <div
                            onClick={() => handleNextQuestion(1)}
                            className='w-full cursor-pointer py-8 bg-gradient-to-r text-center from-[#30459D] via-[#673f81] to-[#874280] text-white font-semibold rounded-lg shadow-lg'
                            style={{
                                fontSize: '1.5rem',
                                width: '100%',
                                maxWidth: '500px',
                                minHeight: '130px',
                                minWidth: '300px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {currentQuestion.question[1]}
                        </div>
                    </div>
                </div>

                <Navbar />
            </div>
        </CenteredContainer>
    );
}
