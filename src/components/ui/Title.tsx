import React from 'react';
import { TitleProps } from '@/src/types/componentTypes';

const Title: React.FC<TitleProps> = ({ children, level }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={`text-${level + 2}xl font-bold mb-6 text-center`}>{children}</Tag>;
};

export default Title;
