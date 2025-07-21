'use client';

import { useState } from "react";

const Register = () => {
    const [username, setUserName] = useState("");
    const [age, setAge] = useState("");

    const registerUser = async () => {
        try {
            let response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, age }),
            });

            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h3>Register User</h3>
            <input 
                type='text' 
                value={username} 
                placeholder='Enter your Name' 
                onChange={(e) => setUserName(e.target.value)} 
            /><br/><br/>
            <input 
                type='text' 
                value={age} 
                placeholder='Enter your Age' 
                onChange={(e) => setAge(e.target.value)} 
            /><br/><br/>
            <button onClick={registerUser}>Submit</button>
        </>
    );
};

export default Register;
