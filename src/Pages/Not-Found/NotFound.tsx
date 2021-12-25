import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <h2>Sorry, we didn't find anything.</h2>
            <Link to='home'><button>Go Home</button></Link>
        </div>
    );
};

export default NotFound;