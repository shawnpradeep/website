const canvas = document.getElementById("life");
const generationDisplay = document.getElementById("generationCount");
const ctx = canvas.getContext("2d");
const resolution = 1;
const rows = canvas.height / resolution;
const cols = canvas.width / resolution;
let grid = createRandomGrid();
let pause = false;

let generation = 0;
const speed = 50;

function createRandomGrid() {
  const grid = new Array(cols)
    .fill(null)
    .map(() =>
      new Array(rows).fill(null).map(() => (Math.random() > 0.5 ? 1 : 0))
    );
  return grid;
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * resolution;
      const y = j * resolution;
      if (grid[i][j] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, resolution, resolution);
      }
    }
  }
}

function update() {
  const nextGeneration = new Array(cols)
    .fill(null)
    .map(() => new Array(rows).fill(null));

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const state = grid[i][j];
      const neighbors = countNeighbors(i, j);

      if (state === 0 && neighbors === 3) {
        nextGeneration[i][j] = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGeneration[i][j] = 0;
      } else {
        nextGeneration[i][j] = state;
      }
    }
  }
  grid = nextGeneration;
  generationDisplay.innerHTML = "" + generation;
  generation++;
}

function countNeighbors(x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const col = (x + i + cols) % cols;
      const row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function animate() {
  drawGrid();
  if (!pause) update();
  setTimeout(animate, speed);
}

function handleKeyPress(event) {
  if (event.key === "R" || event.key === "r") {
    grid = createRandomGrid();
    generation = 0;
  }

  if (event.key === "P" || event.key === "p") pause = !pause;
}

document.addEventListener("keydown", handleKeyPress);

animate();
