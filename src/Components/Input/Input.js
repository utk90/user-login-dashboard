import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
            {/* <label htmlFor={props.ipName}>{props.labelName}</label><br /> */}
            {/*testing label*/}
            <label data-testid='label' htmlFor={props.ipName}>{props.labelName}</label><br />
            <input type={props.ipType} id={props.ipName} data-testid='input' name={props.ipName} className={props.ipClass} onChange={props.onSelect} value={props.ipValue} autoComplete='off'/>
        </>        
    )
}

export default Input;