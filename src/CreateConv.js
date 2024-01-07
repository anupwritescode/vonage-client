import React, { useState } from 'react';
import axios from 'axios';

function CreateConv() {
    const [convName, setConvName] = useState('');
    const [convDisplayName, setConvDisplayName] = useState('');
    const [convId, setConvId] = useState('');

    const createConv= async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(
                'https://api.nexmo.com/v0.3/conversations',
                {
                    name: convName, 
                    display_name: convDisplayName
                },
                {
                    headers: {
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDQ2NDQ3NzgsImV4cCI6MTcwNTE2MzE3OCwianRpIjoiRWR5ZUdlN2ZpdlJyIiwiYXBwbGljYXRpb25faWQiOiIzYTcyMmZjYy0yMzVjLTQ3MmQtOTExMS0wOTZmYzc4N2M5NmIiLCJzdWIiOiIiLCJhY2wiOnsicGF0aHMiOnsiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi91c2Vycy8qKiI6e30sIi8qL2NvbnZlcnNhdGlvbnMvKioiOnt9fX19.ZXIIG0r2V9D-aajlk-PCIiNTNAXPTkYp4PqJb7fPZOsMqrMt9tMrFUfJrAeza7V1IqMn-VOXDDbYEgov1xXz38b0qUhPpjslzaRgQ9CIEyemO_ZmkLWyjcnTs_InO1nOOLv_on9VlSxx1NhB7i2sqX2Qczc0OUBhDFURjqeOjU4xxRbgI2wT4DNZu2j0ddBwXUfVT6yiIEJ4xu64UMMPfg5VaGlNHYmtM4xVMmZr2Q5tDpxSwd53E-fhiDRsaR8aYMsmnMnm-WhIRixjPRM2tbUM1IitZGfWkqQIdf_9ywawciFYatQmTFgasHuRM5l-m2BfAsnZNPEwHeaWDFyLQg'
                    }
                });

            if(res && res?.id) {
                setConvId(res.id);
            }
            //TODO: show success to user 
            
        } catch(e) {
            console.error();

            //TODO: show error to user
        }
    };

    return(
        <form onSubmit={createConv} className='user-form'>
            <label for="convname" className='user-field'>
                Conversation Name
                <input type="text" 
                    name="convname" 
                    id="convname" 
                    pattern="[a-zA-Z0-9_\.]{3,50}" 
                    title="Conversation names can have letters, number _ and . only with minimum 3 and maxiumum 50 characters" 
                    value={convName} 
                    onChange={e => setConvName(e.target.value)} />
            </label>
            <label for="convDisplayName" className='user-field'>
                Conversation Display Name 
                <input type="text" 
                    name="convDisplayName" 
                    id="convDisplayName" 
                    pattern='[a-zA-Z0-9 ]{3, 30}' 
                    title="Conversation display names can have letters and spaces only with minimum 3 and maxiumum 30 characters" 
                    value={convDisplayName} 
                    onChange={e => setConvDisplayName(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateConv;