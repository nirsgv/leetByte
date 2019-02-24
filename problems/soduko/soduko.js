function verifySoduko(solvedBoard) {

    for(var i=0;i<solvedBoard.length;i++){

        for (var j=0;j<solvedBoard[i].length;j++){
            if (solvedBoard[i].indexOf( solvedBoard[i][j], j )){
                return false;
            }
        }

    }


    return true;
}

console.log(verifySoduko([
    [9,4,5,6,7,2,8,1,3],
    [7,3,1,5,9,8,2,6,4],
    [6,8,2,3,4,1,9,7,5],
    [5,9,3,2,8,7,6,4,1],
    [2,1,6,9,5,4,7,3,8],
    [4,7,8,1,6,3,5,2,9],
    [8,6,4,7,3,5,1,9,2],
    [1,5,9,4,2,6,3,8,7],
    [3,2,7,8,1,9,4,5,6]
]));

module.exports = verifySoduko;