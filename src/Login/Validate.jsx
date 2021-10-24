export default function Validate(values) {
    
    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

    let errors = {};

    if (values.username.length < 5){
        errors.username = 'Username should be greater than 5 characters';
    }
    else if (!/^([A-z]+)$/.test(values.username)){
        errors.username = 'Username should have only alphabets';
    }

    if (values.password.length < 6){
        errors.password = 'Password should be greater than 6 characters';
    }

    return errors;
}
