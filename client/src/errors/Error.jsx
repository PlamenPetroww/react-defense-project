

export const emailValidator = (email) => {
    if (email.length === 0) {
        return 'Email is required!';
    } else if (email.length < 6) {
        return 'Email must be at least 6 characters';
    }

    return '';
};

export const passwordValidator = (password) => {
    if(password.length === 0) {
        return 'Password is required';
    } else if (password < 6) {
        return 'Password must be at least 6 charachters';
    } 
    
    return '';
}

export const confirmPasswordValidator = (password, confirmPassword) => {
    
    if (password !== confirmPassword) {
        return "Password don't match";
    }

    return '';
};
