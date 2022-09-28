import React from "react";
import { StyledStartButton } from "./styled/StyleStartButton";
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton
