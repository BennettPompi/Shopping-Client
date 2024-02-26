import { UserDataInput } from "./UserdataInput";

export const Register = () => {

    const errMsg =  'Username already taken. Please try another.';
    
    return (<>
        <h1>Register</h1>
        <UserDataInput submitTarget={'/register'} resultTarget="../login" errorMsg={errMsg}/>
    </>)
}