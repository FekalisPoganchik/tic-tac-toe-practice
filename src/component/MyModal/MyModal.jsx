import React from "react";
import classes from "./MyModal.module.scss";

const MyModal = ({children, modal}) => {
    const rootClasses = [classes.myModal];
    if (modal) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(" ")}>
            <div
                className={classes.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
