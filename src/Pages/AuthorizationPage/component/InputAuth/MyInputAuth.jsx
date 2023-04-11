import React from "react";
import classes from "./MyInputAuth.module.scss";
import { Field, ErrorMessage } from "formik";

const MyInputAuth = ({ label, name }) => {
    return (
        <div className={classes.MyInputAuth}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} type={name} />
            <ErrorMessage
                className={classes.error}
                name={name}
                component="div"
            />
        </div>
    );
};

export default MyInputAuth;
