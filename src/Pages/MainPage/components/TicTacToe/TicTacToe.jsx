import React from "react";
import classes from "./TicTacToe.module.scss";
import X from "../../../../resources/icon/X";
import O from "../../../../resources/icon/O";

const TicTacToe = ({
    board,
    setBoard,
    player,
    setPlayer,
    winner,
    setWinner,
    setDraw,
}) => {
    const checkWinner = (board) => {
        const possibleWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < possibleWins.length; i++) {
            const [a, b, c] = possibleWins[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return [a, b, c];
            }
        }

        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            return;
        }

        setPlayer(player === "X" ? "O" : "X");
    };

    const renderSquare = (index) => {
        const isWinnerX = winner && winner.includes(index) && player === "X";
        const isWinnerO = winner && winner.includes(index) && player === "O";

        return (
            <div
                className={`${classes.square} ${
                    isWinnerX ? classes["winner-x"] : ""
                } ${isWinnerO ? classes["winner-o"] : ""}`}
                onClick={() => handleClick(index)}
            >
                {board[index] === "X" ? (
                    <X />
                ) : board[index] === "O" ? (
                    <O />
                ) : null}
            </div>
        );
    };

    const renderStatus = () => {
        if (winner) {
            return (
                <div className={classes.msg}>
                    <span>Побеждает: </span> {player === "X" ? <X /> : <O />}
                </div>
            );
        }
        if (board.every((square) => square !== null)) {
            return (
                <div className={classes.msg}>
                    <span>Ничья!</span>
                </div>
            );
        }

        return (
            <div className={classes.msg}>
                <span>Ходит: </span> {player === "X" ? <X /> : <O />}
            </div>
        );
    };

    return (
        <div>
            <div className={classes.board}>
                <div className={classes.row}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className={classes.row}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className={classes.row}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className={classes.status}>{renderStatus()}</div>
        </div>
    );
};

export default TicTacToe;
