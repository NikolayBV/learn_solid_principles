import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "@mui/material";

const UsersList = () => {
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
    email: string
  }
  return (
    <div className='usersList'>
      {users.map((user: User) =>
        <Card variant="outlined" className='user' key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </Card>
      )}
    </div>
  );
};

export default UsersList;