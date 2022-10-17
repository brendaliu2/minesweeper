import { RevealedCellOne, RevealedCellTwo, RevealedCellThree, RevealedCellOther } from '../styled/styles';

export default function RevealedCell({ value }) {

  if (value === 1) {
    return (
      <RevealedCellOne>
        {value}
      </RevealedCellOne>
    );
  } else if (value === 2) {
    return (
      <RevealedCellTwo>
        {value}
      </RevealedCellTwo>
    );
  } else if (value === 3) {
    return (
      <RevealedCellThree>
        {value}
      </RevealedCellThree>
    );
  } else {
    return (
      <RevealedCellOther>
        {value ? value : ''}
      </RevealedCellOther>
    );
  }
}