import React from 'react';
import {Link} from 'react-router-dom';

export const Error = () => {
    return (
        <div>
            <p style={{textAlign: 'center', margin: '10% auto', fontSize: '6vw'}}>HTTP 404 : Page not found</p>
            <p style={{textAlign: 'center', fontSize: '5vw'}}><Link to='/login' style={{color: 'gray'}}>Go back to login</Link></p>
        </div>
    )
}
