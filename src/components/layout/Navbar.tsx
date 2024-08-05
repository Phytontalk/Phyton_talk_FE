import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className='fixed bottom-0 left-0 right-0 '>
            <div
                className='flex justify-between items-center p-4 px-10 mx-auto bg-gradient-to-r from-[#31376F] to-[#894BA2]'
                style={{ maxWidth: '600px' }}
            >
                <Link href='/friend'>
                    <Image src='/asset/recommend.png' alt='Recommend' width={50} height={50} />
                </Link>
                <Link href='/quiz'>
                    <Image src='/asset/quiz.png' alt='Quiz' width={50} height={50} />
                </Link>
                <Link href='/user'>
                    <Image src='/asset/mypage.png' alt='My Page' width={50} height={50} />
                </Link>
            </div>
        </div>
    );
}
