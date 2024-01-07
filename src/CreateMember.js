import React, { useState } from 'react';
import axios from 'axios';

function CreateMember() {
    const [userName, setUserName] = useState('');

    const addUserToConv = async () => {

    };

    return(
        <button onClick={addUserToConv} >
            Add User To Conversation
        </button>
    )
}

export default CreateMember;