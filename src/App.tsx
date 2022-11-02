import React, {useEffect, useState} from 'react';
import UsersList from "./components/usersList";
import Header from "./components/header";
import Footer from "./components/footer";
import axios from "axios";
import {Card, Button} from "@mui/material";
import {Link} from "react-router-dom";

//violation of solid principles
//1. The SRP component is responsible for several actions
// 2. OCP - if it is necessary to add a new component, the logic will be modified
// 5. The DIP function of getting an array of users depends on a specific url


function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const myUsers = response.data;
            setUsers(myUsers);
        })()
    }, [users])

    interface User {
        id: number,
        name: string,
        email: string,
        address?: {
            "street": string,
            "suite": string,
            "city": string,
            "zipcode": string,
            "geo": {
                "lat": string,
                "lng": string
            }
        },
        phone?: string,
        "website?": string,
        "company"?: {
            "name"?: string,
            "catchPhrase"?: string,
            "bs"?: string
        }
    }

    if(!users|| users.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="App">
        <div className='header'>
            <h1 className='heading'>Users list</h1>
            <div className='headerMenu'>
                <Button>Create user</Button>
                <Button>About</Button>
            </div>
        </div>
        <div className='usersList'>
            {users.map((user: User) =>
                <Card variant="outlined" className={`user ${user.id}`} key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </Card>
            )}
        </div>
        <div className='footer'>
            <p className='heading'>Author</p>
        </div>
    </div>
  );
}

export default App;
