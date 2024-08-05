import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getDailyQuiz } from '../api/quizFetchApi';

type Question = {
    questionId: string;
    question: string[];
};

export const useQuiz = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const navigate = useRouter();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                //const data = await getDailyQuiz();
                const response = await fetch('http://43.202.81.192:8081/quiz/daily');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.questions && data.questions.length > 0) {
                    setQuestions(data);
                } else {
                    console.log('No questions found in the response');
                }
            } catch (error) {
                console.error('Failed to fetch questions', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleNextQuestion = (answer: number) => {
        setAnswers([...answers, answer]);
        if (currentQuestionIndex < questions.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            submitAnswers();
            console.log(answers);
        }
    };

    const submitAnswers = async () => {
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('user='))
            ?.split('=')[1];

        if (token) {
            try {
                const response = await fetch(`http://43.202.81.192:8081/answer/${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ answer: answers }),
                });

                if (response.ok) {
                    alert('게임이 끝났습니다! 답변이 제출되었습니다.');
                    navigate.push('/quiz');
                } else {
                    console.error('Failed to submit answers:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to submit answers:', error);
            }
        }
    };

    return {
        questions,
        currentQuestionIndex,
        handleNextQuestion,
    };
};
