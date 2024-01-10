import React, { useState } from 'react';
import axios from 'axios';
import jwt from '../jwt';

function CreateMember({ convid, setConvid, userId }) {

    const addUserToConv = async (event) => {
        event.preventDefault();

        axios.post(`https://api.nexmo.com/v1/conversations/${convid}/members`,
            {
                state: "joined",
                user: {
                    id: userId,
                },
                channel: {
                    type: "app",
                }
            },
            {
                headers: {
                    "Authorization": 'Bearer ' + jwt
                }

            }
        );
    };

    return(
        <form onSubmit={ addUserToConv } className='user-form'>
            <label htmlFor="convid" className='user-field'>
                Enter conversation id: 
                <input type="text" 
                    name="convid"
                    id="convid"
                    pattern="[a-zA-Z0-9-_]{,50}"
                    title="Conversation ID can have only letters and numbers"
                    required
                    value={convid}
                    onChange={e => setConvid(e.target.value)}
                    />
            </label>
            <button type="submit">
                Join Conversation
            </button>
        </form>
    )
}

export default CreateMember;