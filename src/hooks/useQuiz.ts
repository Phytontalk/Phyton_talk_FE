import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
                const response = await fetch('/question/today');
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error('Failed to fetch questions', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleNextQuestion = (answer: number) => {
        setAnswers([...answers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            submitAnswers();
        }
    };

    const submitAnswers = async () => {
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

        if (token) {
            try {
                const response = await fetch(`/answer/${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ answer: answers }),
                });

                if (response.ok) {
                    alert('게임이 끝났습니다! 답변이 제출되었습니다.');
                    navigate.push('/user');
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
