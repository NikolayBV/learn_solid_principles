import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";


const Header = () => {
    return (
        <div className='header'>
            <h1 className='heading'>Users list</h1>
            <div className='headerMenu'>
                <Button>Create user</Button>
                <Button className='postBtnEdit'>About</Button>
            </div>
        </div>
    );
};

export default Header;