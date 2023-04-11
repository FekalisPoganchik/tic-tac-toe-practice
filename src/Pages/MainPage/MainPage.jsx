import React, {useState} from "react";
import classes from "./MainPage.module.scss";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Timer from "./components/Timer/Timer";
import MyModal from "../../component/MyModal/MyModal";
import Modal from "./components/Modal/Modal";

const MainPage = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [time, setTime] = useState(0);
    const [draw, setDraw] = useState(false);
    const [modal, setModal] = useState(false);
    return (
        <div className={classes.main_page}>
            <div className={classes.left}></div>
            <div className={classes.center}>
                <Timer
                    time={time}
                    setTime={setTime}
                    winner={winner}
                    draw={draw}
                />

                <TicTacToe
                    board={board}
                    setBoard={setBoard}
                    player={player}
                    setPlayer={setPlayer}
                    winner={winner}
                    setWinner={setWinner}
                    setDraw={setDraw}
                />
                <MyModal modal={modal} setModal={setModal}>
                    <Modal
                        setBoard={setBoard}
                        setPlayer={setPlayer}
                        setWinner={setWinner}
                        setTime={setTime}
                        setDraw={setDraw}
                        setModal={setModal}
                        board={board}
                        player={player}
                        winner={winner}
                    />
                </MyModal>
            </div>
            <div className={classes.right}></div>
        </div>
    );
};

export default MainPage;
