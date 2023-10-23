import "bootstrap/dist/css/bootstrap.css";
import { CheckerBoard } from "./components/checkerboard/checkerboard";
import MiniatureChessboard from "./components/minichecker/MiniatureChessboard";
import { nqueen } from "./utilities/nqueen";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(8); // Default board size
  const [result, setResult] = useState("");
  const [queenPos, setQueenPos] = useState([]);
  const [solutions, setSolutions] = useState([]);

  const handleQueenPlacement = (row, col) => {
    // Clone the current queen positions
    const newQueenPos = [...queenPos];

    // Check if there's already a queen at this position, remove it
    const existingIndex = newQueenPos.findIndex((pos) => pos.row === row && pos.col === col);
    if (existingIndex !== -1) {
      newQueenPos.splice(existingIndex, 1);
    } else {
      // Place a queen at the selected position
      newQueenPos.push({ row, col });
    }

    setQueenPos(newQueenPos);
  };

  const resetBoard = () => {
    // Clear queen positions and solutions
    setQueenPos([]);
    setSolutions([]);
    setResult("");
  };
  

  const findQueens = async () => {
    setResult("");
    const solution = await nqueen(count, queenPos, 0, setQueenPos);
    if (solution.solved) {
      const newSolutions = [...solutions];
      newSolutions.push([...solution.queenPos]);
      setSolutions(newSolutions);
      setResult("Solved");
    } else {
      setResult("Cannot find safe positions for all the queens!");
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 chessBoardArea">
            <div className="row">
              <div className="col-md-12">
                <CheckerBoard size={count} queenPositions={queenPos} onQueenPlacement={handleQueenPlacement} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 result-box">
                {result}
                  <ul className="miniature-chessboards">
                    {solutions.map((solution, index) => (
                      <li key={index}>
                        <MiniatureChessboard queenPositions={solution} size={count} />
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 chessBoardArea">
            <div className="row">
              <div className="col-md-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">👑</div>
                  </div>
                  <input
                    className="form-control"
                    type="number"
                    min="2"
                    placeholder="Enter Board Size"
                    max="10"
                    value={count}
                    onChange={(enteredNumber) => {
                      setCount(parseInt(enteredNumber.target.value, 10));
                    }}
                  />
                </div>
                <div className="buttons">                  
                  <button className="placeQueensBtn" onClick={findQueens}>
                      Find Queens
                  </button> 
                  <button className="placeQueensBtn" onClick={resetBoard}>
                      Reset Board
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
