import React, {useEffect, useState} from 'react';
import UsersList from "./components/usersList";
import Header from "./components/header";
import Footer from "./components/footer";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "./state/hooks";
import {getUsers} from "./state/usersSlice";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./page/users";
import Authorization from "./page/authorization";

//violation of solid principles
//1. The SRP component is responsible for several actions
//2. OCP - if it is necessary to add a new component, the logic will be modified
//4. ISP - the processing of all fields of the user's object that are not currently in use can be considered a violation of this principle
//5. The DIP function of getting an array of users depends on a specific url


function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/' element={<Authorization/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
