import Image from 'next/image';
interface AvatarImageProps {
    avatarNumber: number;
    className: string;
    width: number | null;
    height: number | null;
}
const AvatarImage = ({ avatarNumber, className, width, height }: AvatarImageProps) => {
    const imagePath = avatarNumber >= 1 && avatarNumber <= 6 ? `/asset/${avatarNumber}.png` : '/asset/1.png';

    return (
        <Image
            src={imagePath}
            alt='Avatar'
            width={width ? width : 150}
            height={height ? height : 150}
            className={className}
            unoptimized
        />
    );
};

export default AvatarImage;
