import './validations.css';

export const titleValidator = (title) => {
    if(title.length === 0 ) {
        return 'This field is required!';
    }

    return '';
}