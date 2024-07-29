import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<TitleProps> = ({ children, level }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={`text-${level + 2}xl font-bold mb-6 text-center`}>{children}</Tag>;
};

export default Title;
