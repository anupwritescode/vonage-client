import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import jwt from '../jwt';

function ListConvs({ convList, setConvList }) {

    const convs = useEffect(() => {

        const getConvs = async () => {
            const res = await axios.get('https://api.nexmo.com/v1/conversations', {
                headers: {
                    "Authorization": "Bearer " + jwt
                }
            })
            if(res && res.data && res?.data?._embedded?.conversations.length) {
                const s = res?.data?._embedded?.conversations;
                setConvList([...s]);
            }    
        };
        getConvs();
        
        console.log(convList);
    }, []);

    return(
        <article>
            <ul>
                {
                    convList.map((conv) => {
                        return(
                            <li key={conv.id}>
                                Conversation Id: {conv.id}, Conversation Name: {conv.name}
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    );
}

export default ListConvs;