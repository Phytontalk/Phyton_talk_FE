import React from 'react';
import { InputProps } from '@/src/types/componentTypes';

const Input: React.FC<InputProps> = ({ value, onChange, type, placeholder, color }) => {
    const focusRingColor = color === 'green' ? 'focus:ring-green-400' : 'focus:ring-blue-400';
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingColor} focus:border-transparent`}
        />
    );
};

export default Input;
