let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];
/**
 *  This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.
 */
function getRow(grid, rowIndex){
  let griddy = grid;
  let rowIdx = rowIndex;
  let solution = "";
  //loop parses row values given the index and log each row value in "solution" one by one using var "i" and braking out of loop when it reaches the end.
  for(let i = 0;i<= griddy.length - 1; i++){
    solution = solution + (griddy[rowIdx][i]);
  }

  return solution;
}
/**
 * This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.
 */
function getColumn(grid, columnIndex){
  let griddy = grid;
  let colIdx = columnIndex;
  let solution = "";
  //Similar loop to the one used in getRow above. Rather than row it goes through the column.  
  for(let i = 0;i<= griddy.length - 1; i++){
    solution = solution + (griddy[i][colIdx]);
  }

  return solution;
}

/**
 *This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid. 
 */
function getSection(grid,x,y){
let row = 0;
let col = 0;
let solution = [];
//if else statement to find define which row we are gonna be on for the section
if(y > 0){
if(y == 1){
  row = 3;
}
else{
  row = 6;
}
}
else{
row = 0;
}
//temp value to store initial row for later code in getSection()
temp = row;
//end of row definition

//start of column definition (same process as row defintion)
if(x > 0){
if(x == 1){
  col = 3;
}
else{
  col = 6;
}
}
else{
col = 0;
}
//end of column definition
//Three for loops to go through each row of values and grab all our values for designated section
for(let i = col; i <= (col + 2); i++){
solution.push(grid[row][i]);
}
for(let i = col; i <= (col + 2); i++){
solution.push(grid[row + 1][i]);
}
for(let i = col; i <= (col + 2); i++){
solution.push(grid[row + 2][i]);
}


return solution;



}


/**
 * function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats)
 */
function includes1to9(arr){
  let check = 0;
  let solution = false;
  let dupe = false;
  let count = 0;
  //for loop that add each number to check if equal to 45(1+2+3...+9 = 45) which then changes the boolean solution if true
  for(let i = 0; i < arr.length; i++){
    check = check + (arr[i]);
    temp = arr[i];
    //second for loop to count if number has multiple occurunces in the code
    for(let t = 0; t < arr.length; t++){
      if(arr[t] == temp){
        count++;
        if(count == 2){
          dupe = true;
        }
      }
    }
    count = 0;
  }
  //if there are no duplicates and it totals out to be 45 return true
  if(check == 45 && dupe == false){
    solution = true;
  }
  return solution;
 
}
function sudokuIsValid(puzzle){
  let rowCheck = true;
  let colCheck = true;
  let secCheck = true;
  let solution = false;
  let temp = [];
  //checks to make sure rows have 1 to 9
  for(let i = 0; i < 9; i++){
   temp = getRow(puzzle,i);
    if(includes1to9(temp) === false){
      rowCheck = false;
    }
  }
  //checks to make sure columns have 1 to 9
    for(let t = 0; t < 9; t++){
     temp = getColumn(puzzle,t);
    if((includes1to9(temp)) === false){
      colCheck = false;
    }
  }
  // checks to make sure sections have 1 to 9
    for(let j = 0; j < 3; j++){
      temp = getSection(puzzle,0,j);
    if((includes1to9(temp)) === false){
      secCheck = false;
    }
  }
      for(let k = 0; k < 3; k++){
          temp = getSection(puzzle,1,k);
    if((includes1to9(temp)) === false){
      secCheck = false;
    }
  }
      for(let l = 0; l < 3; l++){
       temp = getSection(puzzle,2,l);
    if((includes1to9(temp)) === false){
      secCheck = false;
    }
  }
  //checks to make sure all of these are true so that the puzzle is solved
  if(rowCheck === true && colCheck === true && secCheck === true){
    solution = true;
  }
  return solution;

}
sudokuIsValid(puzzle);
// => true




// let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 8,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];

// sudokuIsValid(p8zzle);




