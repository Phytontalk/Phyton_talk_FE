import React from 'react';
import { TitleProps } from '@/src/types/componentTypes';

const Title: React.FC<TitleProps> = ({ children, level, className }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={`text-${level + 2}xl font-bold mb-6 text-center ${className}`}>{children}</Tag>;
};

export default Title;
