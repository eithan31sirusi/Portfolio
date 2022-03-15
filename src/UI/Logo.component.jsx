import React from 'react'


import './Logo.css'

const Logo = (props) => {
    return (
        <div className='logo_container'>
            <p>{props.children}</p>
        </div>
    );
};

export default Logo;