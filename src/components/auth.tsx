import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {User} from "../types/models";
import {useAppSelector} from "../state/hooks";
import {Link} from "react-router-dom";
import {checkUser} from "../utils/checkUser";

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const users = useAppSelector(state => state.users.users);

    function onChangeLogin(e: React.ChangeEvent<HTMLTextAreaElement>){
        setLogin(e.target.value)
    }
    function onChangePassword(e: React.ChangeEvent<HTMLTextAreaElement>){
        setPassword(e.target.value)
    }

    return (
        <div className='auth'>
            <TextField id="outlined-basic" label="Login" variant="outlined" onChange={onChangeLogin}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={onChangePassword}/>
            <Button onClick={() => {checkUser(login, password, users)}}>Enter</Button>
        </div>
    );
};

export default Auth;