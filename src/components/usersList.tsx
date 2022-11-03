import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "@mui/material";
import {User} from '../types/models'
import {useAppSelector} from "../state/hooks";

const UsersList = () => {

  const users = useAppSelector(state => state.users.users);

  if(!users || users.length === 0) return <h1>Loading...</h1>;

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