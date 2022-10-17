import { GameHeading, GameWrapper } from '../styled/styles';
import Board from './Board';
import makeBoard from "../utils/makeBoard";
import makeDisplayBoard from "../utils/makeDisplayBoard";

/** Bunsweeper - Minesweeper Clone
 *
 * Prop: none
 *
 * State:
 *
 * Bunsweeper -> Board
 */
export default function Bunsweeper() {
  const defaultDimensions = {
    height: 5,
    width: 5,
    mineCount: 3,
    gameId: 0,
  };

  const { height, width, mineCount } = defaultDimensions;

  const board = makeBoard(height, width, mineCount);
  const displayBoard = makeDisplayBoard(height, width, mineCount);

  return (
    <GameWrapper>
      <GameHeading>Welcome to Bunsweeper</GameHeading>

      <Board
        board={board}
        newDisplayBoard={displayBoard}
        gameId={defaultDimensions.gameId}
      />

    </GameWrapper>
  );
}