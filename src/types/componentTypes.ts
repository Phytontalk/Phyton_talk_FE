export interface ButtonProps {
    onClick: () => void;
    color: 'green' | 'blue';
    children: React.ReactNode;
    disabled?: boolean;
    timer?: number;
    className: string;
}

export interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'password';
    placeholder: string;
    color: 'green' | 'blue';
    className: string;
}

interface Option {
    label: string;
    value: string;
}

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className: string;
    options: Option[];
    color: 'green' | 'blue';
}

export interface TitleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className: string;
}

export interface CenteredContainerProps {
    children: React.ReactNode;
}
