import React, {useEffect} from "react";
import Cup from "../../../../resources/icon/Cup";
import MyButton from "../../../../component/MyButton/MyButton";
import classes from "./Modal.module.scss";
import {useNavigate} from "react-router";
import X from "../../../../resources/icon/X";
import O from "../../../../resources/icon/O";

const Modal = ({
    setBoard,
    setPlayer,
    setWinner,
    setTime,
    setDraw,
    setModal,
    board,
    player,
    winner,
}) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (winner !== null) {
            setModal(true);
        }
        if (board.every((square) => square !== null)) {
            setModal(true);
            setDraw(true);
        }
    }, [winner, board, setModal, setDraw]);

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setPlayer("X");
        setWinner(null);
        setTime(0);
        setDraw(false);
        setModal(false);
    };

    const handleExit = () => {
        navigate("list_of_players");
    };

    const renderStatus = () => {
        if (winner) {
            return (
                <>
                    {player === "X" ? <X /> : <O />} <span> победил!</span>
                </>
            );
        }
        if (board.every((square) => square !== null)) {
            return <span>Ничья!</span>;
        }
    };

    return (
        <div className={classes.modal}>
            <Cup />
            <div className={classes.winner}>{renderStatus()}</div>
            <MyButton
                style={{
                    marginBottom: "12px",
                }}
                onClick={handleReset}
            >
                Новая игра
            </MyButton>
            <MyButton
                style={{
                    background: "#F7F7F7",
                    color: "#000",
                }}
                onClick={handleExit}
            >
                Выйти в меню
            </MyButton>
        </div>
    );
};

export default Modal;
