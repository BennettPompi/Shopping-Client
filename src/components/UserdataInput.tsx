import {useState} from 'react'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom';

interface UserDataInputProps{
    submitHandler: (instance: Axios, username: string, password: string)=> any;
    errorMsg: string;
    errorHandle?: ()=>void;
    buttonText: string;
}
export const UserDataInput = (Props: UserDataInputProps) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000
    })
    return (
        <div className="App-body">
            <label>Username: </label>
            <input
                type='text'
                name='fname'
                placeholder='Username'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            ></input>
            <label>Password: </label>
            <input
                type='password'
                placeholder='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            ></input>
            <button type='submit' className='button' onClick={() => Props.submitHandler(instance, username, password)}>{Props.buttonText}</button>
        </div>
    );
}