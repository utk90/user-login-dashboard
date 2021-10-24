import { React, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import Form from './Form';

const Login = (props) => {
    const data = {
        username: '',
        password: '',
        email: ''
    }

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(data) {
        setIsSubmitted(true);

        // console.log('Username: '+data.username+' Email: '+data.email);

        localStorage.setItem('token', 'userLogged');
        localStorage.setItem('userName', data.username);

        props.history.push({
            pathname: `user/${data.username}`,
            state: { data }
        })
    }


    return (
        <div>
            {/* {console.log('VALUES: '+ data.email)} */}
            {!isSubmitted ? <Form submitForm={submitForm} /> : null}
        </div>
    )
}

export default withRouter(Login);