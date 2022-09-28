import React, { useState, useEffect } from "react";

import { createStage, checkCollision } from "../src/gameHelpers";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from "./styled/StyledTetris";

//  Custom Hooks
import { useInterval } from "../components/hooks/useInterval";
import { usePlayer } from "../components/hooks/usePlayer";
import { useStage } from "../components/hooks/useStage";
import { useGameStatus } from "../components/hooks/userGameStatus";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [time,setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [time]);

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);

    setDropTime(1000); //시작시 내려오는 속도

    setScore(0);
    setLevel(0);
    setRows(0);
    setTime(0);

  };


  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);

      // Also increase speed
      setDropTime(1000 / (level + 1) + 500);
    }else {
      setTime(time + 1); //내려오면 시간 증가
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true)
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    console.log(keyCode,'keycode');
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000); //시간 빨리 내려오는 곳
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(10);
    drop();
  };

  const move = ({ keyCode }) => {
    console.log(keyCode, 'keycode');
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />

        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`time: ${time}`}/>
            </div>
          )}

          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
