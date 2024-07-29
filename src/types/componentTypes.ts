export interface ButtonProps {
    onClick: () => void;
    color: 'green' | 'blue';
    children: React.ReactNode;
    disabled?: boolean;
    timer?: number;
}

export interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'password';
    placeholder: string;
    color: 'green' | 'blue';
}

interface Option {
    label: string;
    value: string;
}

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    color: 'green' | 'blue';
}

export interface TitleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface CenteredContainerProps {
    children: React.ReactNode;
}
