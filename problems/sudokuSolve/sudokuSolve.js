function sudokuSolve(board) {
    let hasNulls = 0;

    const getRow = (i,j) => (Math.floor(j / 3)) + (Math.floor(i / 3) * 3);
    const getColumn = (i,j) => (i*3) % 9 + j % 3;



    const addImpossibility = ( arr, item ) => {

        if ( item && arr.indexOf( item ) === -1 ) {
            arr.push( item )
        }
        if ( arr.length === 8 ) {
            return getMissingFrom1to9( arr )
        }
        return arr;
    };

    const getMissingFrom1to9 = ( cellImpossibilities ) => {
        return [1,2,3,4,5,6,7,8,9].filter((item) => cellImpossibilities.indexOf(item) === -1).shift();
    };

    const makeDataBoard = (cellRow,vert,bigArr) => {
        let cellImpossibilities = [];
        let cells = cellRow.map((cell,horz, smallArr) => {

            // if we have an empty cell with only one option, return the cell with the single option value
            if (cell === null){
                cellImpossibilities = [];
                hasNulls++;
                for (var i=0;i<bigArr[horz].length;i++){
                    addImpossibility(cellImpossibilities, bigArr[i][horz]); // column neighbours
                    addImpossibility(cellImpossibilities, smallArr[i]); // row neighbours
                    addImpossibility(cellImpossibilities, bigArr[getRow(vert,vert)][getColumn(vert,i)]); // square neighbours
                }
                return getMissingFrom1to9(cellImpossibilities);
            }

            return cell;
        });

        return cells;
    };

    let newArr = board.map(makeDataBoard);

    while ( hasNulls > 0 ) {
        return sudokuSolve(newArr);
    }

    console.log( 'sudoku verified: ' + sudokuVerify(newArr) );
    return newArr;
}

console.table(sudokuSolve([
    [null,null,null,null,null,null,null,null,null],
    [7,null,1,5,9,8,2,6,4],
    [6,8,null,3,4,1,9,7,5],
    [5,9,3,2,8,7,6,4,1],
    [2,1,6,9,null,4,7,3,8],
    [4,7,8,1,6,3,5,2,9],
    [8,6,4,7,3,5,1,9,2],
    [1,5,9,4,2,6,3,8,7],
    [3,2,7,8,1,9,4,5,6]
]));

// console.log(sudokuSolve([
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
                if( rows[i][j] && rows[i].indexOf( rows[i][j], j+1 ) !== -1 ||
                    columns[i][j] && columns[i].indexOf( columns[i][j], j+1 ) !== -1 ||
                    squares[i][j] && squares[i].indexOf( squares[i][j], j+1 ) !== -1 ) {
                    return false
                }
            }
        }
        return true;
    };
    populate(board);
    return verify(rows,columns,squares);
}
module.exports = sudokuSolve;