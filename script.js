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
  const base = Object.values(obj);
  const values = [];

  for (let i = 0; i < base.length; i++) {
    values.push(base[i]);
  }

  for (let i = 0; i < base.length - 1; i++) {

    let [bigSymbol, bigValue] = base[i];
    let [smallSymbol, smallValue] = base[i + 1];

    // Roman rule: subtract only from powers of 10
    if (smallValue === 1 || smallValue === 10 || smallValue === 100) {
      values.push([smallSymbol + bigSymbol, bigValue - smallValue]);
    }
  }

  values.sort((a, b) => b[1] - a[1]);

  let result = "";

  for (let [symbol, value] of values) {
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
