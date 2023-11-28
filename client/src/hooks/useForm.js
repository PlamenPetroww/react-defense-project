import { useState } from "react";

export default function useForm (submitHandler, initialValues) {
    const [values, setValues] = useState({/* tuk imah predi slojen initialValues, no mpri register mi izlizashe v consolata i go mahnah */});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}