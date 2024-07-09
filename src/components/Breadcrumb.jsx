// src/components/Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(x => x);

    return (
        <nav className="text-orange-500 ">
            <Link to="/" className="hover:underline hover:text-white">Home</Link>
            {paths.map((path, index) => {
                const to = `/${paths.slice(0, index + 1).join('/')}`;
                return (
                    <span key={to}>
                        {' / '}
                        <Link to={to} className="hover:underline capitalize hover:text-white">{path}</Link>
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
