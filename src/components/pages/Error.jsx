import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='max-w-screen '>
            <h2> error pages </h2>
            <Link className='text-center p-8 text-red-400' to={'/'}>Home</Link>
        </div>
    );
};

export default Error;