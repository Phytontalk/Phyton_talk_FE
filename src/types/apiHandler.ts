export type SignupRequestBody = {
    name: string;
    email: string;
    password: string;
    sns: string;
};

export type LoginRequestBody = {
    email: string;
    password: string;
};

export type EmailRequestBody = {
    email: string;
};

export type EmailResponseBody = {
    message: string;
    code: string;
};

export type QuestionsResponseBody = {
    questions: Array<{ questionId: string; question: string[] }>;
};

export type AnswerRequestBody = {
    answer: number[];
    memberId: string;
};

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
    sns: string;
}