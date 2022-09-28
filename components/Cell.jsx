import React from "react"
import { StyledCell} from "./styled/StyleCell"
import { TETROMINOS } from "../src/tetrominos"

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
)

export default Cell
