import React from 'react';
import { SelectProps } from '@/src/types/componentTypes';

const Select: React.FC<SelectProps> = ({ value, onChange, options, color }) => {
    const focusRingColor = color === 'green' ? 'focus:ring-green-400' : 'focus:ring-blue-400';
    return (
        <select
            value={value}
            onChange={onChange}
            className={`px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingColor} focus:border-transparent`}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label || option.value}
                </option>
            ))}
        </select>
    );
};

export default Select;
