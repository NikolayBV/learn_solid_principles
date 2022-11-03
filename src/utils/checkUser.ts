import {User} from "../types/models";

export function checkUser(log: string, pass: string, arrUsers: Array<User>){
    let auth = false;
    arrUsers.map((user: User) => {
        if(user.name === log && user.username === pass){
            auth = true;
        }
    })
    if(auth){
        alert(`Hello, ${log}!`);
        window.location.href = 'http://localhost:3000/users';
        auth = false;
    }
    else{
        alert('Invalid user!');
    }
}