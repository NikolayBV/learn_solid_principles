import React, {useEffect} from 'react';
import {useAppDispatch} from "../state/hooks";
import {getUsers} from "../state/usersSlice";
import Header from "../components/header";
import UsersList from "../components/usersList";
import Footer from "../components/footer";

const Users = () => {

    return (
        <div className="App">
            <Header/>
            <UsersList/>
            <Footer/>
        </div>
    );
};

export default Users;