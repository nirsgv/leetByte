function sudokuVerify(board) {

    let rows = [], columns = [], squares = [], row, column, square;

    const getRow = (i,j) => (Math.floor(j / 3)) + (Math.floor(i / 3) * 3);

    const getColumn = (i,j) => (i*3) % 9 + j % 3;

    const populate = (board) => {
        for(var i=0;i<board.length;i++){
            row = [];
            column = [];
            square = [];
            for (var j=0;j<board[i].length;j++){
                row.push(board[i][j]);
                column.push(board[j][i]);
                square.push(board[getRow(i,j)][getColumn(i,j)]);
            }
            rows.push(row);
            columns.push(column);
            squares.push(square);
        }
    };

    const verify = (rows,columns,squares) => {
        for(var i=0;i<board.length;i++){
            for (var j=0;j<board[i].length;j++){
                if( rows[i].indexOf( rows[i][j], j+1 ) !== -1 ||
                    columns[i].indexOf( columns[i][j], j+1 ) !== -1 ||
                    squares[i].indexOf( squares[i][j], j+1 ) !== -1 ) {
                    return false
                }
            }
        }
        return true;
    };
    populate(board);
    return verify(rows,columns,squares);
}

// console.log(sudokuVerify([
//     [9,4,5,6,7,2,8,1,3],
//     [7,3,1,5,9,8,2,6,4],
//     [6,8,2,3,4,1,9,7,5],
//     [5,9,3,2,8,7,6,4,1],
//     [2,1,6,9,5,4,7,3,8],
//     [4,7,8,1,6,3,5,2,9],
//     [8,6,4,7,3,5,1,9,2],
//     [1,5,9,4,2,6,3,8,7],
//     [3,2,7,8,1,9,4,5,6]
// ]));

module.exports = sudokuVerify;