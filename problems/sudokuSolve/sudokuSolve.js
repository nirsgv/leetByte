function sudokuSolve(board) {

    const getRow = (i,j) => (Math.floor(j / 3)) + (Math.floor(i / 3) * 3);
    const getColumn = (i,j) => (i*3) % 9 + j % 3;

    const addNoDuplicates = ( target, item ) => {
        if ( item && target.indexOf( item ) === -1 ) {
            target.push( item )
        }
        return target;
    };

    const getMissingNum = ( currentNumsArr ) => {
        for ( var i = 1 ; i < 10 ; i++ ) {
            if ( currentNumsArr.indexOf( i ) === -1 ) {
                return i;
            }
        }
    };

    const makeDataBoard = (cellRow,vert,bigArr) => {
        let squareFriends;
        let cellData = cellRow.map((cell,horz, smallArr) => {

            let myNeighbours = [];
            let column = [];
            let squareFriends = [];
            for (var i=0;i<bigArr[horz].length;i++){

                addNoDuplicates(myNeighbours, bigArr[i][horz]); // column neighbours
                addNoDuplicates(myNeighbours, smallArr[i]); // row neighbours
                addNoDuplicates(myNeighbours, bigArr[getRow(vert,i)][getColumn(vert,i)]); // square neighbours
                addNoDuplicates(squareFriends, bigArr[getRow(vert,i)][getColumn(vert,i)]); // square neighbours

            }

            console.log(bigArr[getRow(vert,horz)][getColumn(vert,horz)],vert,horz); // square neighbours
            let missingNumber = false;
            if (myNeighbours.length === 8 && cell === null){

                missingNumber = getMissingNum(myNeighbours);
                console.log('myNeighbours.length === 8 && cell === null' ,myNeighbours,  missingNumber);
            }

            return {
                value: cell,
                myRow: smallArr,
                myColumn: column,
                mySquare: squareFriends,
                sudokuNeighbours: myNeighbours,
                neighboursAmt: myNeighbours.length
            }});
        return cellData;
    };

    let infoBoard = board.map(makeDataBoard);
    console.log(infoBoard);
    console.log(board);

    // let imposiibilitiesMtrix = [], rows = [], columns = [], squares = [], row, column, square, imposiibilityRow;
    //
    //
    // let emptySlots = {};

    // const populate = (board) => {
    //     for(var i=0;i<board.length;i++){
    //         row = [];
    //         column = [];
    //         square = [];
    //         imposiibilityRow = [];
    //         for (var j=0;j<board[i].length;j++){
    //             if(board[i][j]===null){
    //                 emptySlots[i,j]=[i,j]
    //             }
    //             row.push(board[i][j]);
    //             column.push(board[j][i]);
    //             square.push(board[getRow(i,j)][getColumn(i,j)]);
    //         }
    //         rows.push(row);
    //         columns.push(column);
    //         squares.push(square);
    //     }
    // };
    // const verify = (rows,columns,squares) => {
    //     for(var i=0;i<board.length;i++){
    //         for (var j=0;j<board[i].length;j++){
    //             if( rows[i][j] && rows[i].indexOf( rows[i][j], j+1 ) !== -1 ||
    //                 columns[i][j] && columns[i].indexOf( columns[i][j], j+1 ) !== -1 ||
    //                 squares[i][j] && squares[i].indexOf( squares[i][j], j+1 ) !== -1 ) {
    //                 return false
    //             }
    //         }
    //     }
    //     return true;
    // };
    // populate(board);
    // console.log(emptySlots);
    // return verify(rows,columns,squares);
}

console.log(sudokuSolve([
    [9,4,null,null,null,null,null,null,null],
    [7,null,null,5,null,8,2,6,4],
    [null,null,2,3,4,1,9,7,5],
    [null,9,3,2,8,7,6,4,1],
    [null,1,6,9,5,4,7,3,8],
    [null,7,8,1,6,3,5,2,9],
    [null,6,4,7,3,5,1,9,2],
    [null,5,9,4,2,6,3,8,7],
    [null,2,7,8,1,9,4,5,6]
]));

module.exports = sudokuSolve;