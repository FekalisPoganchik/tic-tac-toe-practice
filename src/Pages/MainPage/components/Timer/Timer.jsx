import React, {useEffect} from "react";
import classes from "./Timer.module.scss";

const Timer = ({time, setTime, winner, draw}) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return (
            <div className={classes.wrap}>
                {formattedMinutes}:{formattedSeconds}
            </div>
        );
    };

    useEffect(() => {
        let intervalId;
        if (draw) {
            return () => clearInterval(intervalId);
        }

        if (!winner) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [setTime, winner, draw]);

    return <div className={classes.timer}>{formatTime(time)}</div>;
};

export default Timer;
