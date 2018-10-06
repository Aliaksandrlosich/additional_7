module.exports = function solveSudoku(matrix) {
    var arr = [];
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (matrix[i][j] == 0) arr.push([i, j]);
        }
    }
    while (nulll(matrix)){
        for (var cell = 0; cell < arr .length; cell++ ) {
             var stop = false;
            var row = arr [cell][0];
            var col = arr [cell][1];
             for(var can = matrix[row][col] ; can <= 9; can++ ){
                if (!stop && proverka(row,col,can,matrix) 
                    && p_square(row,col,can,matrix)) {
                        matrix[row][col] = can;
                        stop = true;
                }
            }
            if (!stop) {
                matrix[row][col] = 0;
                cell-=2;
            }
        }
    }
    return matrix;
};
 
 function nulll(matrix) {
    for(var row = 0; row < 9; row++){
        for(var col = 0; col < 9; col++) {
            if(matrix[row][col] == 0)
                return true;
            }
        }
        return false;
}

 function proverka(row,col, value, matrix) {
    for(var i = 0; i < 9; i++){
        if(matrix[row][i]==value || matrix[i][col]==value){
            return false;
        }
    }
    return true;
}
 function p_square(row, col, can, matrix) {
    col = Math.floor(col / 3) * 3;
    row = Math.floor(row / 3) * 3;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrix[row + i][col + j] == can){
                return false;
            }
        }
    }
    return true
}

 
                    