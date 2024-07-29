import React from 'react';

interface CenteredContainerProps {
    children: React.ReactNode;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-8'>{children}</div>
        </div>
    );
};

export default CenteredContainer;
