import React from 'react';
import { CenteredContainerProps } from '@/src/types/componentTypes';

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
    return <div className='flex items-center justify-center min-h-screen bg-[#1D203E]'>{children}</div>;
};

export default CenteredContainer;
