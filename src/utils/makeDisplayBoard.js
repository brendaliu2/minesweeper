/** Creates Display Board
 * false: hidden
 * true: show value
 */
export default function makeBoard(height, width, mineCount) {
  const displayBoard = Array.from(new Array(height),
    () => new Array(width).fill(false));

  return displayBoard;
}