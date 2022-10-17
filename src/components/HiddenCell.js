import { HiddenCellDisplay } from '../styled/styles';

export default function HiddenCell({
  x,
  y,
  revealCell,
  flagMode,
  toggleFlag,
  flaggedCells
}) {
  const value = flaggedCells.has([x,y]) ? '🥕' : '';
  function handleClick() {
    flagMode ? toggleFlag(x,y) : revealCell(x,y)
  }




  return (
    <HiddenCellDisplay onClick={handleClick}>{value}</HiddenCellDisplay>
  );
}