import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';
import jwt from '../jwt';

function CreateUser({ userName, setUserName, displayName, setDisplayName, userId, setUserId }) {

    const createUser = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(
                'https://api.nexmo.com/v1/users',
                {
                    userName, 
                    displayName
                },
                {
                    headers: {
                        'Authorization': 'Bearer ' + jwt
                    }
                });
            if(res && res?.data?.id) {
                setUserId(res.data.id);
            }
            //TODO: show success to user 
            
        } catch(e) {
            console.error();

            //TODO: show error to user
        }
    };

    return(
        <form onSubmit={createUser} className='user-form'>
            <label htmlFor="username" className='user-field'>
                Username 
                <input type="text" 
                    name="username" 
                    id="username" 
                    pattern="[a-zA-Z0-9_\.]{3,15}" 
                    title="Username can have letters, number _ and . only with minimum 3 and maxiumum 15 characters" 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} />
            </label>
            <label htmlFor="displayName" className='user-field'>
                Display Name 
                <input type="text" 
                    name="displayName" 
                    id="displayName" 
                    pattern='[a-zA-Z0-9 ]{3, 30}' 
                    title="Display name can have letters and spaces only with minimum 3 and maxiumum 30 characters" 
                    value={displayName} 
                    onChange={e => setDisplayName(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateUser;