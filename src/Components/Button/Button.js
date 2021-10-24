import React from 'react';
import './Button.css';

const Button =  (props) => {
  return (
    // <button type={props.buttonType} data-testid='button' className={props.buttonClass} style={{backgroundColor: props.buttonBgColor, color: props.buttonTextColor}} disabled={props.isError.username || props.isError.password}>
    <button onClick={props.clickEvent} type={props.buttonType} data-testid='button' className={props.buttonClass} style={{backgroundColor: props.buttonBgColor, color: props.buttonTextColor}} disabled={props.isError.username || props.isError.password}>
      {props.buttonText}
    </button>
  );
};

export default Button;