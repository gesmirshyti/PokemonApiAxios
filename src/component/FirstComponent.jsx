import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const {setUser}= props;
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        setUser(newUser)
        console.log("Welcome", newUser);
        setEmail("")
        setPassword("")
        setUsername("")
    };
    
    return(
        <form >
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => {setUsername(e.target.value); console.log(e.target.value)} } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" onClick={createUser} value="Create User" />
            <p> {username }{email} {password} </p>
        </form>
    );
};
    
export default UserForm;