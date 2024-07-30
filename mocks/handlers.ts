import { http, HttpResponse } from 'msw';
import {
    SignupRequestBody,
    LoginRequestBody,
    EmailRequestBody,
    EmailResponseBody,
    QuestionsResponseBody,
    UserInfoResponse,
} from '@/src/types/apiHandler';

export const handlers = [
    http.post<never, SignupRequestBody, { message: string }, '/signup'>('/signup', async ({ request }) => {
        const { name, email, password, sns } = await request.json();

        if (name && email && password && sns) {
            return HttpResponse.json(
                { message: '회원가입이 완료되었습니다.' },
                {
                    status: 200,
                    headers: {
                        Authorization: 'Bearer token',
                    },
                }
            );
        } else {
            return HttpResponse.json(
                { message: '회원가입에 실패하였습니다.' },
                {
                    status: 400,
                }
            );
        }
    }),

    http.post<never, LoginRequestBody, { message: string }, '/login'>('/login', async ({ request }) => {
        const { email, password } = await request.json();
        console.log(email, password);
        if (email && password) {
            return HttpResponse.json(
                { message: '로그인이 완료되었습니다.' },
                {
                    status: 200,
                    headers: {
                        'Set-Cookie': 'token=1234; Path=/;',
                    },
                }
            );
        } else {
            return HttpResponse.json(
                { message: '로그인에 실패하였습니다.' },
                {
                    status: 401,
                }
            );
        }
    }),

    http.post<never, never, never, '/logout'>('/logout', async ({ request }) => {
        return HttpResponse.json(
            { message: '로그아웃 되었습니다.' },
            {
                status: 200,
                headers: {
                    'Set-Cookie': 'token=; Max-Age=0; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
                },
            }
        );
    }),

    http.post<never, EmailRequestBody, EmailResponseBody, '/email'>('/email', async ({ request }) => {
        const { email } = await request.json();
        console.log(1);
        if (email) {
            return HttpResponse.json(
                { code: '1234', message: '이메일 발송에 성공하였습니다.' },
                {
                    status: 200,
                }
            );
        } else {
            return HttpResponse.json(
                { code: 'xxxx', message: '이메일 발송에 실패하였습니다.' },
                {
                    status: 400,
                }
            );
        }
    }),

    http.get<{ memberId: string }, UserInfoResponse, any>('/member/:memberId', async ({ params }) => {
        const { memberId } = params;
        console.log(memberId);
        if (memberId) {
            return HttpResponse.json(
                {
                    name: '이름',
                    email: '123@pusan.ac.kr',
                    sns: 'hello',
                    avatar: 'avatar1',
                },
                { status: 200 }
            );
        } else {
            return HttpResponse.json({ message: 'Error' }, { status: 404 });
        }
    }),

    http.get<never, QuestionsResponseBody>('/question/today', async () => {
        return HttpResponse.json(
            {
                questions: [
                    { questionId: '123', question: ['10억 받고 얼굴 랜덤 돌리기', '그냥 이대로 살기'] },
                    { questionId: '1243', question: ['10억 받고 얼굴 랜덤 돌리기', '그냥 이대로 살기'] },
                    { questionId: '112323', question: ['10억 받고 얼굴 랜덤 돌리기', '그냥 이대로 살기'] },
                    { questionId: '12093', question: ['10억 받고 얼굴 랜덤 돌리기', '그냥 이대로 살기'] },
                ],
            },
            { status: 200 }
        );
    }),

    http.post<{ memberId: string }, any, { message: string }>('/answer/:memberId', async ({ request, params }) => {
        const { answer } = (await request.json()) as { answer: number[] };
        const { memberId } = params;

        if (answer && Array.isArray(answer) && answer.every((num) => typeof num === 'number')) {
            return HttpResponse.json({ message: '답변이 제출되었습니다.' }, { status: 200 });
        } else {
            return HttpResponse.json({ message: '답변 제출에 실패하였습니다.' }, { status: 400 });
        }
    }),
];
