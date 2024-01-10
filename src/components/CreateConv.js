import React, { useState } from 'react';
import axios from 'axios';
import jwt from '../jwt';

function CreateConv({convName, setConvName, convDisplayName, setConvDisplayName, convId, setConvId}) {

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
                        'Authorization': 'Bearer ' + jwt
                    }
                });

            if(res && res?.data?.id) {
                setConvId(res?.data?.id);
            }
            //TODO: show success to user 
            
        } catch(e) {
            console.error();

            //TODO: show error to user
        }
    };

    return(
        <form onSubmit={createConv} className='user-form'>
            <label htmlFor="convname" className='user-field'>
                Conversation Name
                <input type="text" 
                    name="convname" 
                    id="convname" 
                    pattern="[a-zA-Z0-9_\.]{3,50}" 
                    title="Conversation names can have letters, number _ and . only with minimum 3 and maxiumum 50 characters" 
                    value={convName} 
                    onChange={e => setConvName(e.target.value)} />
            </label>
            <label htmlFor="convDisplayName" className='user-field'>
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