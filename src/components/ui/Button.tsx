import React from 'react';
import { ButtonProps } from '@/src/types/componentTypes';

const Button: React.FC<ButtonProps> = ({ onClick, color, children, disabled, timer }) => {
    const baseStyle =
        'w-full px-4 py-2 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-75';
    const colorStyle = {
        green: `${
            disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700 focus:ring-green-400'
        }`,
        blue: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-400',
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${colorStyle[color]}`} disabled={disabled}>
            {disabled ? `인증 코드 재발송 (${timer}초)` : children}
        </button>
    );
};

export default Button;
