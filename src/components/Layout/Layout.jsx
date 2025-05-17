import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <div className='flex lg:flex-row flex-col'>
                <div className="2xl:!w-[22%] lg:!w-1/3 w-full ">
                    <Sidebar />
                </div>
                <main className={"transition-all duration-300 2xl:!w-[78%] lg:!w-2/3 w-full"} >
                    <div className="p-4">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;