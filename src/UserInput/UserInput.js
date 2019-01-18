import React from 'react';

const userinput = (props) => {
    return (
        <p>{props.name} <input type='text' onChange={props.changed} value={props.username}></input></p>
    );
}

export default userinput;