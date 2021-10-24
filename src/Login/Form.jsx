import { React, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FormStyle.css'
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import InputForgetPwd from './InputForgetPwd';
import Checkbox from '../Components/Checkbox/Checkbox';

import useForm from './useForm';
import Validate from './Validate';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const Form = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors, checkEvent, linkEvent, isClicked } = useForm(submitForm, Validate);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    return (
        <>
            <div className="login-container">

                {/*Testing header*/}
                <h2 data-testid='header'>ACCOUNT LOGIN</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-4">
                        <Input ipType='text' ipName='username' ipClass='form-control' ipValue={values.username} onSelect={handleChange} labelName='USERNAME' />
                        
                        {(errors.username && isClicked.username) ? <span className='nameError'>{errors.username}</span> : (null)}


                        <br />
                    </div>

                    <div className="form-group">
                        <Input ipType={passwordShown ? "text" : "password"} ipName='password' ipClass='form-control' ipValue={values.password} onSelect={handleChange} labelName='PASSWORD' />
                        <i onClick={togglePasswordVisiblity}>{eye}</i>

                        {(errors.password && isClicked.password) ? <span className='passError'>{errors.password}</span> : (null)}

                    </div>

                    <div className="row">
                        <div className="check-box col">
                            {/* <Input ipType='checkbox' ipName='checkbox' ipClass='' onSelect={checkEvent} labelName='' /> */}
                            <Checkbox ipName='checkbox' ipClass='inputCheckbox' onSelect={checkEvent} labelName='Remember me' />
                            {/* <span className='inputCheckbox'>Remember me</span> */}
                        </div>

                        <div className="forget-pwd col">
                            <InputForgetPwd onSelect={linkEvent} />
                        </div>
                    </div>

                    <div className="button-container mt-4">
                        {/* <Button buttonType="submit" buttonText="LOGIN" buttonClass="btn btn-dark" isError={errors} buttonStyle={{ borderRadius: '40px', height: '50px', width: '140px' }} /> */}
                        {/* <Button buttonType="submit" buttonText="LOGIN" buttonClass="btn btn-dark buttonStyle" isError={errors} /> */}
                        <Button data-testid='button' buttonType="submit" buttonText="LOGIN" buttonClass="medium-btn" buttonBgColor='black' buttonTextColor='white' isError={errors} />
                    </div>
                </form>
            </div>
        </>

    )
}

export default Form;