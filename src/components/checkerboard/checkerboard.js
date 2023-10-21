import React from "react";
import { useState } from "react";
import _ from "lodash";
import "./chessboard.css";

export const CheckerBoard = ({ size, queenPositions = [] }) => {
  let checkerBoard = [];
  for (let i = 0; i <= size; i++) {
    let newRow = true;
    for (let j = 0; j <= size; j++) {
      let classNames = ["block"];
      if (i == 0) {
        classNames.push("chessColumnNumber");
        checkerBoard.push(
          <div className={classNames.join(" ")}>
            <span className="coin">{j - 1 < 0 ? "" : j - 1}</span>
          </div>
        );
        continue;
      }
      if (newRow) {
        classNames.push("clearRow");
        classNames.push("chessColumnNumber");
        newRow = false;
        checkerBoard.push(
          <div className={classNames.join(" ")}>
            <span className="coin">{i - 1 < 0 ? "" : i - 1}</span>
          </div>
        );
        continue;
      }

      classNames.push(
        (i + j) % 2 === 0 ? "chessColumnWhite" : "chessColumnBlack"
      );
      const pos = { x: i - 1, y: j - 1 };
      checkerBoard.push(
        <div key={`check-${i}${j}`} className={classNames.join(" ")}>
          {_.find(queenPositions, pos) ? (
            <span className="coin">&#x2655;</span>
          ) : (
            <span></span>
          )}
        </div>
      );
    }
  }
  return checkerBoard;
};
