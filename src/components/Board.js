import { useState } from 'react';
import { BoardDisplay, CellWrapper } from '../styled/styles';
import HiddenCell from "./HiddenCell";
import RevealedCell from "./RevealedCell";

/** Board
 *
 * Prop:
 * - height (num)
 * - width (num)
 * - mineCount (num)
 * - gameId (num)
 *
 * State:
 *
 *
 * Bunsweeper -> Board ->
 */
export default function Board({
  board,
  newDisplayBoard,
  gameId
}) {
  console.log('board', board);

  const [displayBoard, setDisplayBoard] = useState(newDisplayBoard);
  const [gameOver, setGameOver] = useState(false);
  const [flagMode, setFlagMode] = useState(false);
  const [flaggedCells, setFlaggedCells] = useState(new Set());

  function revealCell(x, y) {
    if (board[x][y] === '🐰') {
      setGameOver(true);
    } else {
      const newDisplayBoard = [...displayBoard];
      newDisplayBoard[x][y] = true;
      const searchDisplayBoard = searchArea(x, y, newDisplayBoard);
      setDisplayBoard(searchDisplayBoard);
    }
  }

  function searchArea(x, y, newDisplayBoard) {

    function _revealSpot(x, y) {
      newDisplayBoard[x][y] = true;

      if (board[x][y] > 0) return;

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (board[i] && isFinite(board[i][j]) && newDisplayBoard[i][j] === false) {
            _revealSpot(i, j);
          }
        }
      }
    }
    _revealSpot(x, y);

    return newDisplayBoard;
  }

  function toggleFlag(x, y) {
    const newFlaggedCells = new Set(JSON.parse(
      JSON.stringify(Array.from(flaggedCells))
    ));

    newFlaggedCells.has([x, y]) ? newFlaggedCells.delete([x, y]) : newFlaggedCells.add([x, y]);

    setFlaggedCells(newFlaggedCells);
  }

  return (
    <>
      <button onClick={() => setFlagMode(f => !f)}>{flagMode ? "Flags Off" : "Flags On"}</button>
      {gameOver ?
        <>
          <h2>You Lost!</h2>
          <BoardDisplay>
            <tbody>
              {board.map((row, x) => <tr key={x}>
                {row.map((col, y) => <RevealedCell key={`${x},${y}`} value={board[x][y]}>
                  {col}
                </RevealedCell>)}
              </tr>)}
            </tbody>
          </BoardDisplay>
        </>
        :
        <>
          <h2>Keep Playing!</h2>
          <BoardDisplay>
            <tbody>
              {displayBoard.map((row, x) => <tr key={x}>
                {row.map((col, y) =>
                  col ? <RevealedCell
                    key={`${x},${y}`}
                    value={board[x][y]}
                  >
                    {board[x][y]}
                  </RevealedCell>
                    :
                    <HiddenCell
                      key={`${x},${y}`}
                      x={x}
                      y={y}
                      revealCell={revealCell}
                      flagMode={flagMode}
                      toggleFlag={toggleFlag}
                      flaggedCells={flaggedCells}
                    />
                )}
              </tr>)}
            </tbody>
          </BoardDisplay>
        </>
      }
    </>
  );
}