import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: ''
    })

    const [isSubmit, setIsSubmit] = useState(false);

    const [errors, setErrors] = useState({username: 'Username required', password: 'Password required'});


    const [isClicked, setClicked] = useState({
        username: false,
        password: false
    })   

    const handleChange = event => {

        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value,
            email: values.username + '@gmail.com'
        })

        if (name==='username'){ 
            setClicked({
                username: true,
                password: false
            })
        }
        else if (name==='password'){
            setClicked({
                username: false,
                password: true
            })
        }

        // console.log('useForm UsernameClick: '+isClicked.username);
        // console.log('useForm PasswordClick: '+isClicked.password);

        setErrors(validate(values));
    }

    const handleSubmit = event => {
        event.preventDefault();

        setErrors(validate(values));

        if ((values.username && values.password)){
            setIsSubmit(true);
        }
    }

    const checkEvent = () => { }

    const linkEvent = () => { }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback(values);
        }
    },
        [errors]
    );


    return { handleChange, values, handleSubmit, errors, checkEvent, linkEvent, isClicked };
}

export default useForm;