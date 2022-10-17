import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

export const GameHeading = styled.h1`
  display: flex;
  font-size: 3em;
  color: #a8dadc;
`;

export const BoardWrapper = styled.div`
  width: 60vw;
  min-width: 750px;
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;
`;

export const BoardDisplay = styled.table`
  margin-bottom: 40px;
`;

export const CellWrapper = styled.td`
  height: 40px;
  width: 40px;
  border: 1px solid white;
  vertical-align: middle;
  text-align: center;
  font-family: 'VT323', monospace;
  font-size: 30px;
  position: relative;
`;

// export const HiddenCellDisplay = styled(CellWrapper)`
//   background-color: grey;
//   cursor: ${props => props.onClick ? 'pointer' : 'default'}
//   div {
//     height: 39px;
//     width: 39px;
//     border: 5px outset silver;
//     display: flex;
//     img {
//       margin: auto;
//       height: 80%;
//       width: 80%;
//     }
//   }
// `;

export const HiddenCellDisplay = styled(CellWrapper)`
  background-color: grey;
  cursor: ${props => props.onClick ? 'pointer' : 'default'}
  height: 39px;
  width: 39px;
  border: 5px outset silver;
`;

export const RevealedCellDisplay = styled(CellWrapper)`
  background-color: ${props => props.value === 'explosion' ? 'red' : 'gainsboro'};
  color: '${props => {
    if (props.value === 1) return 'blue';
    else if (props.value === 2) return 'green';
    else if (props.value === 3) return 'red';
    else return 'purple';
  }}'
  img {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    position: absolute;
    height: 40%;
    width: 40%;
    top: 0;
    left: 0;
    z-index: 10;
    display: ${props => props.wrongFlag ? 'block' : 'none'};
  }
  div > img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export const RevealedCellOne = styled(CellWrapper)`
  background-color: gainsboro;
  color: blue;
`;

export const RevealedCellTwo = styled(CellWrapper)`
background-color: gainsboro;
  color: green;
`;

export const RevealedCellThree = styled(CellWrapper)`
  background-color: gainsboro;
  color: red;
`;

export const RevealedCellOther = styled(CellWrapper)`
  background-color: ${props => props.value === '🐰' ? 'red' : 'gainsboro'};
  color: purple;
`;