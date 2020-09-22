import React from 'react';
import './Button.css';

const ButtonComponent = props => {
    return (
        <div>
            <button className="btn" onClick = { () => props.onSubmit(props.value)}> {props.value} </button>
        </div>
    )
}
export default ButtonComponent;
