import type { Metadata } from 'next';
import './globals.css';
import { Lemon } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Phyton Talk',
    description: '우리 학교에서 가장 잘맞는 친구 찾기',
};

const lemon = Lemon({
    weight: ['400'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={lemon.className}>{children}</body>
        </html>
    );
}
