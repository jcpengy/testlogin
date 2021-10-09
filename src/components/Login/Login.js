import React, { useState } from 'react'; 
import PropTypes from 'prop-types'; 
import "./Login.css"; 

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(credentials)
    })
    .then(data => data.json()); 
}
function Login({ setToken }) {
    const [ username, setUserName ] = useState(); 
    const [ password, setPassword ] = useState(); 

    const handleSubmit = async e => {
        e.preventDefault(); 
        const token = await loginUser({
            username, 
            password
        })
        setToken(token); 
    }
    return (
        <div className="login-wrapper">
            <h1>Log In</h1>
            <form onSubmit={ handleSubmit }>
                <label for="username">
                    <p>Username</p>
                    <input type="text" id="username" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label for="password">
                    <p>Password</p>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    ); 
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login; 