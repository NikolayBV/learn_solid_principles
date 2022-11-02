import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>
            <h1 className='heading'>Users list</h1>
            <div className='headerMenu'>
                <button>Create user</button>
                <button
                    className='postBtnEdit'
                ><Link to={`/about`}>About</Link></button>
            </div>
        </div>
    );
};

export default Header;