import { useState } from "react";

export const useForm = ( initialState = {}) => {
   
    const [formValues, setFormValues] = useState(initialState);

    const reset = () =>{
        setFormValues(initialState);
    }

    const handlerInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    return [formValues, handlerInputChange, reset];

}
