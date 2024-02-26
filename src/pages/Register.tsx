import { useState } from "react";
import { UserDataInput } from "../components/UserdataInput";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const errMsg =  'Username already taken. Please try another.';
    const [error, setError] = useState(false);
    const submitHandler = (instance: Axios, username: string, password: string) =>{
        instance.post('/register',
    {
        username: username,
        password: password
    }).then((response)=>{
            if (response.status === 200){
                console.log("submission successful");
                navigate('../login');
            }
        }).catch((error)=>{
            console.log(error);
            setError(true);
            
        })
    }
    return (<div className="Login">
        <h1>Register</h1>
        <UserDataInput buttonText="Register" submitHandler={submitHandler} errorMsg={errMsg}/>
        {error && <p className='err-msg'>{errMsg}</p>}
    </div>)
}