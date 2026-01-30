function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
  const symbols = [
    ['M',1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['C',100],
    ['XC',90],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1]
  ];

  let result = "";

  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;

}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
