import * as Yup from "yup";

const errormessages = {
    "required": "This field is required.",
}

export const saveFormValidation = () => {
    return {
        schema: Yup.object().shape({
            title: Yup.string().required(errormessages.required)
        })
    }
}