import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

interface UserDataInputProps{
    submitTarget: string;
    resultTarget: string;
    errorMsg: string;
    errorHandle?: ()=>void;
}
export const UserDataInput = (Props: UserDataInputProps) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState(false);
    
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    })
    const navigate = useNavigate();
    const errorHandle = (Props.errorHandle) ? (Props.errorHandle) : (()=>{});

    const submitHandler = () =>{
        instance.post(Props.submitTarget,
    {
        username: username,
        password: password
    }).then((response)=>{
            if (response.status === 200){
                console.log("submission successful");
                return navigate(Props.resultTarget);
            }
        }).catch((error)=>{
            console.log(error);
            setError(true);
            errorHandle();
        })
    }
    return (
        <>
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
            <button type='submit' className='button' onClick={submitHandler}>Login</button>
            <p className='err-msg'>{error && Props.errorMsg}</p>
        </>
    );
}