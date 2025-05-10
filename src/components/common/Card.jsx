import React from 'react';

const Card = ({ children, className }) => {
    return (
        <div className={`
      bg-white dark:bg-gray-800 rounded-2xl  border border-[#0E253C1A] dark:border-gray-700 ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;