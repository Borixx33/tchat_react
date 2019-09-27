import React from 'react';
import io from 'socket.io-client';

export const CTx = React.createContext();


const initState = {
    general:[ ],
}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [action.payload.topic]: [
                    ...state[action.payload.topic],
                    { from, msg }
                ]
            }
        default:
            return state
    }
}
let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}



export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
        })
    }

    const user = 'aaron'

    return(
        <CTx.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTx.Provider>
    )
}