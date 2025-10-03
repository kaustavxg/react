import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
UserContext

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault();
        setUser({username, password});
        setUsername('');
        setPassword('');
    }

    return (
        <div>

            <h2>Login</h2>
            <input 
                type="text" 
                placeholder='Username'
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                    // setUsername('')
                }}
            />
            {"  "}
            <input 
                type="text" 
                placeholder='Password'    
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    // setPassword('')
                }}
            />
            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    )
}

export default Login