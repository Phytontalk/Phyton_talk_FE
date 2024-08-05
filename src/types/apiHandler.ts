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

export type UserInfoResponse = { name: string; email: string; sns: string; avatar: string };
export type ErrorResponse = { message: string };

export type CookieMap = { [key: string]: string };

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
    sns: string;
    birthDate: string;
}

export interface User {
    name: string;
    email: string;
    sns: string;
    avatar: number;
    birthYear: string;
}

export interface UserModifiedData {
    name: string;
    sns: string;
    avatar: number;
}

export interface Friend {
    friendId: string;
    name: string;
    sns: string;
    avatar: number;
    type: string;
    birthYear: string;
}
