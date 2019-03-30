const sudoku = require('./sudokuSolve2');

test('Be a function', () => {
    expect(typeof(sudoku.solveSudoku)).toBe('function');
});

test('Return correct star rating', () => {
    expect(sudoku.solveSudoku([
        [1,0,0,4,8,9,0,0,6],
        [7,3,0,0,0,0,0,4,0],
        [0,0,0,0,0,1,2,9,5],
        [0,0,7,1,2,0,6,0,0],
        [5,0,0,7,0,3,0,0,8],
        [0,0,6,0,9,5,7,0,0],
        [9,1,4,6,0,0,0,0,0],
        [0,2,0,0,0,0,0,3,7],
        [8,0,0,5,1,2,0,0,4]])).toEqual(
        [ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
            [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
            [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
            [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
            [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
            [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
            [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
            [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
            [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ] ]

    );
});