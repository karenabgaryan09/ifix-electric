import React from "react";
import Joi from "joi";

export default function useValidation() {

    const validateContact = (obj) => {
        const contactSchema = new Joi.object({
            name:  Joi.string().min(3).required(),
            lastName:  Joi.string().min(3).allow('').optional(),
            email:  Joi.string().min(3).email({ tlds: { allow: false } }).required(),
            phone:  Joi.string().min(5).allow('').optional(),
            service:  Joi.string().min(5).allow('').optional(),
            message:  Joi.string().min(3).required(),
        }).options({ abortEarly: false })
        return contactSchema.validate(obj);
    };

    return {validateContact}
}
