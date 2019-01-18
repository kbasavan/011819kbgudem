import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username :{props.username}</p>
            <p onClick={props.clicked}>{props.description}</p>
        </div>
    );
}

export default useroutput;