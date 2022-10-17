/** Creates Board with Mines Planted */
export default function makeBoard(height, width, mineCount) {
  const board = Array.from(new Array(height),
    () => new Array(width).fill(0));

  const locations = createCoordinatesIndex(height, width);
  const mines = chooseMineCoordinates(locations, mineCount);

  const completedBoard = placeMines(board, mines, height, width);

  return completedBoard;
}

/** Creates array of [x,y] coordinates of all points on board */
function createCoordinatesIndex(height, width) {
  const locations = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      locations.push([i, j]);
    }
  }

  return locations;
}

/** Chooses Mine Coordinates */
function chooseMineCoordinates(locations, mineCount) {
  const mines = [];

  while (mines.length <= mineCount) {
    // pick random mine coordinate
    let randomIdx = Math.floor(Math.random() * locations.length);
    let possibleMine = locations[randomIdx];

    //check if already in mines
    if (!mines.includes(possibleMine)) {
      // add random coord to mines arr
      if (randomIdx === locations.length - 1) {
        let location = locations.pop();
        mines.push(location);
      } else {
        let temp = locations[randomIdx];
        locations[randomIdx] = locations.pop();
        mines.push(temp);
      }
    }
  }

  return mines;
}

/** Place Mines on Board */
function placeMines(board, mines, height, width) {
  let directions = [[1, 1], [1, 0], [0, 1], [-1, -1], [-1, 0], [0, -1], [-1, 1], [1, -1]];
  for (let [x, y] of mines) {
    // board[x][y] = 'mine';
    board[x][y] = '🐰';
    for (let [a, b] of directions) {
      const newX = x + a;
      const newY = y + b;
      if (newX < height && newY < width && newX >= 0 && newY >= 0 && isFinite(board[newX][newY])) {
        board[newX][newY]++;
      }
    }
  }
  return board;
}
