let sudoku = (function () {


    const _getEmptyPositionIndexes = function(board) {
        // Create an array to save the positions
        var emptyPositions = [];

        // Check every square in the puzzle for a zero
        for(var i = 0; i < board.length; i++) {
            for(var j = 0; j < board[i].length; j++) {
                // If a zero is found, so that position
                if(board[i][j] === 0) {
                    emptyPositions.push([i, j]);
                }
            }
        }

        // Return the positions
        return emptyPositions;
    };

    const _checkRow = function(board, row, value) {
        // Iterate through every value in the row
        for(var i = 0; i < board[row].length; i++) {
            // If a match is found, return false
            if(board[row][i] === value) {
                return false;
            }
        }
        // If no match was found, return true
        return true;
    };

    const _checkColumn = function(board, column, value) {
        // Iterate through each value in the column
        for(var i = 0; i < board.length; i++) {
            // If a match is found, return false
            if(board[i][column] === value) {
                return false;
            }
        }
        // If no match was found, return true
        return true;
    };

    const _checkSquare = function( board, column, row, value ) {

        var columnLeftMost = Math.floor(column / 3) * 3,
            rowTopMost = Math.floor(row / 3) * 3;

        for ( var i = rowTopMost; i < rowTopMost + 3; i++ ) {
            for ( var j = columnLeftMost; j < columnLeftMost + 3; j++ ) {
                // Return false is a match is found
                if ( board[i][j] === value ) {
                    return false;
                }
            }
        }
        // If no match was found, return true
        return true;
    };

    const _checkValue = function(boardData) {
        return _checkRow(boardData.board, boardData.row, boardData.value) &&
            _checkColumn(boardData.board, boardData.column, boardData.value) &&
            _checkSquare(boardData.board, boardData.column, boardData.row, boardData.value)
    };

    const _solvePuzzle = function( board, emptyPositions ) {
        console.log( 'solvePuzzle was called!' );
        var i,
            emptyRowIndex,
            emptyColumnIndex,
            zeroToNineRange,
            validValueWasFound,
            boardData;

        for( i = 0; i < emptyPositions.length; ) {
            emptyRowIndex = emptyPositions[i][0];
            emptyColumnIndex = emptyPositions[i][1];
            // Always from 1 to 9
            zeroToNineRange = board[emptyRowIndex][emptyColumnIndex] + 1;
            // Was a valid number found?
            validValueWasFound = false;
            // Keep trying new values until either the limit
            // was reached or a valid value was found
            while(
                !validValueWasFound &&
                zeroToNineRange <= 9
                ) {

                boardData = {
                    board: board,
                    column: emptyColumnIndex,
                    row: emptyRowIndex,
                    value: zeroToNineRange
                };

                if( _checkValue(boardData) ) {
                    validValueWasFound = true;
                    board[emptyRowIndex][emptyColumnIndex] = zeroToNineRange;
                    // go to next zero item
                    i++;
                    //console.log('' + i + ' found');
                }
                // Otherwise, try the next value
                else {
                    zeroToNineRange++;
                    //console.log('zeroToNineRange' + zeroToNineRange);
                }
            }
            // If no valid value was found and the limit was
            // reached, move back to the previous position
            if( !validValueWasFound ) {
                board[emptyRowIndex][emptyColumnIndex] = 0;
                //console.log('' + i + ' not found');
                // go to previous zero item
                i--;
            }
        }

        // return the solution
        return board;
    };

    const solveSudoku = function( board ) {
        return _solvePuzzle( board, _getEmptyPositionIndexes( board ) );
    };

    return { solveSudoku }


})();

// console.time();
// console.table(
//     sudoku.solveSudoku([
//         [0,9,0,0,0,0,0,0,6],
//         [0,0,0,9,6,0,4,8,5],
//         [0,0,0,5,8,1,0,0,0],
//         [0,0,4,0,0,0,0,0,0],
//         [5,1,7,2,0,0,9,0,0],
//         [6,0,2,0,0,0,3,7,0],
//         [1,0,0,8,0,4,0,2,0],
//         [7,0,6,0,0,0,8,1,0],
//         [3,0,0,0,9,0,0,0,0]
//     ])
// );
// console.timeEnd();

console.time();
console.log(
    sudoku.solveSudoku([
        [1,0,0,4,8,9,0,0,6],
        [7,3,0,0,0,0,0,4,0],
        [0,0,0,0,0,1,2,9,5],
        [0,0,7,1,2,0,6,0,0],
        [5,0,0,7,0,3,0,0,8],
        [0,0,6,0,9,5,7,0,0],
        [9,1,4,6,0,0,0,0,0],
        [0,2,0,0,0,0,0,3,7],
        [8,0,0,5,1,2,0,0,4]])
);
console.timeEnd();
module.exports = sudoku;