
let text1 = "Ever since I left the city, you, you, you You and me we just don't get along";


/**
 * Takes sample text and generates a string with removed punctuation and other unecessary characters. Returns a string.
 */
function wordsInArray(text){
    
    let solution = text.replace(/\'/, "").replace(/:/g, "").replace(/,/g, "").replace(/!/g, "").replace(/:/g, "").toLowerCase();
    solution = solution.split(" ");

   return solution;
}

/**
 * Creates and returns an object filled with keys that have a markov chain array as there values from the given string input.
 */
 function generateWordPairs(text){
   let textArray = wordsInArray(text);
   let pairing = {};
   //loops through text array and adds values to keys based on what comes after the key at hand.
   for(let i = 0; i < textArray.length -1; i++){
      const currWord = textArray[i];
      const nextWord = textArray[i + 1];
      //conditional to check if word exists so that it can place value into same array instead of creating another key from it
      if(!pairing[currWord]) pairing[currWord] = [];
      pairing[currWord].push(nextWord);
   }

  return pairing;
 }
/**
 * random index generator for later function use.
 */
 function getRandomWord(maxIndex){
   let rand = Math.floor(Math.random()*maxIndex);
   return rand;
 }

/**
 * writes a line of poetry from selecting words from a keys markov chain (value) at random or by 0 index if there is only one value in chain.
 */
function writeLine(object,n){

  //maintain certain length of words for final poem
  let count = 0;
  let keys = Object.keys(object);
  let size1 = Object.keys(object).length;
    let word = getRandomWord(size1);
  let key1 = keys[word];
  let poemLine = [key1];
  let value1 = "";


//parse through object and pull keys if they exist and adda random word from its markov array after it. Then continue same pattern for each inputted.
for(let i = 0; i < n - 1;i++){
  while(object[key1]== undefined){
    key1 = keys[getRandomWord(size1)];
  }
  value1 = object[key1][Math.floor(Math.random() * (object[key1].length))];
 
  poemLine.push(value1);
  key1 = value1;
}
  return poemLine.toString().replace(/,/g, ' ');
}
/**
 * Takes previous functions and combines them to output a multiple line poem with an additional argument for number of words. If last argument is blank the program will select a random amount of words for each line
 */
function generatePoem(wordList, numLines, numWords){
  let wList = wordList;
  let count = 0;
  let myObj  = wordsInArray(wList);
  myObj = generateWordPairs(wList);
  while(count <= numLines){
    if(numWords > 0){
    console.log(writeLine(myObj, 10));
    }
    else{
      console.log(writeLine(myObj, Math.floor(Math.random()* 12)));
    }
    count++;
  }
}


generatePoem(text1, 10, 10);









