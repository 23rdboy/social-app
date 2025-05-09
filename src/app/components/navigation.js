import React from 'react';

import Link from 'next/link';
const Navigation = () => {
    return (
        <div className ="flex gap-4 p-4 bg-gray-200 ">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link> 
        
        </div>
    );
};

export default Navigation;