import React from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
    return (
        <>
            {/* <Input ipType='checkbox' ipName='checkbox' onSelect={checkEvent} labelName='' /> */}
            <input type='checkbox' id={props.ipName} data-testid='checkbox' name={props.ipName} onChange={props.onSelect} value={props.ipValue} autoComplete='off'/>
            {/* <span className={props.ipClass}>props.checkboxText</span> */}
            <label data-testid='label' htmlFor={props.ipName} className={props.ipClass}>{props.labelName}</label>
        </>        
    )
}

export default Checkbox;