import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';

function CreateUser() {
    const [userName, setUserName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [userId, setUserId] = useState('');

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
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDQ2NDQ3NzgsImV4cCI6MTcwNTE2MzE3OCwianRpIjoiRWR5ZUdlN2ZpdlJyIiwiYXBwbGljYXRpb25faWQiOiIzYTcyMmZjYy0yMzVjLTQ3MmQtOTExMS0wOTZmYzc4N2M5NmIiLCJzdWIiOiIiLCJhY2wiOnsicGF0aHMiOnsiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi91c2Vycy8qKiI6e30sIi8qL2NvbnZlcnNhdGlvbnMvKioiOnt9fX19.ZXIIG0r2V9D-aajlk-PCIiNTNAXPTkYp4PqJb7fPZOsMqrMt9tMrFUfJrAeza7V1IqMn-VOXDDbYEgov1xXz38b0qUhPpjslzaRgQ9CIEyemO_ZmkLWyjcnTs_InO1nOOLv_on9VlSxx1NhB7i2sqX2Qczc0OUBhDFURjqeOjU4xxRbgI2wT4DNZu2j0ddBwXUfVT6yiIEJ4xu64UMMPfg5VaGlNHYmtM4xVMmZr2Q5tDpxSwd53E-fhiDRsaR8aYMsmnMnm-WhIRixjPRM2tbUM1IitZGfWkqQIdf_9ywawciFYatQmTFgasHuRM5l-m2BfAsnZNPEwHeaWDFyLQg'
                    }
                });

            if(res && res?.id) {
                setUserId(res.id);
            }
            //TODO: show success to user 
            
        } catch(e) {
            console.error();

            //TODO: show error to user
        }
    };

    return(
        <form onSubmit={createUser} className='user-form'>
            <label for="username" className='user-field'>
                Username 
                <input type="text" 
                    name="username" 
                    id="username" 
                    pattern="[a-zA-Z0-9_\.]{3,15}" 
                    title="Username can have letters, number _ and . only with minimum 3 and maxiumum 15 characters" 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} />
            </label>
            <label for="displayName" className='user-field'>
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