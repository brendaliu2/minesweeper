import { HiddenCellDisplay } from '../styled/styles';

export default function HiddenCell({
  x,
  y,
  revealCell
}) {

  return (
    <HiddenCellDisplay onClick={() => revealCell(x,y)} />
  )
}