import axios from "axios";
import {User} from "../types/models";


export const fetchUsers = async (url: string) => {
    const response = await axios.get<Array<User>>(url);
    return  response.data;
};