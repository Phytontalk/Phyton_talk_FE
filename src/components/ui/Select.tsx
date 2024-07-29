import React from 'react';

interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    color: 'green' | 'blue';
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, color }) => {
    const focusRingColor = color === 'green' ? 'focus:ring-green-400' : 'focus:ring-blue-400';
    return (
        <select
            value={value}
            onChange={onChange}
            className={`px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingColor} focus:border-transparent`}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
