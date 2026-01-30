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
  const values = Object.values(obj);
  let result = "";

  for (let i = 0; i < values.length; i++) {

    let [symbol, value] = values[i];

    while (num >= value) {
      result += symbol;
      num -= value;
    }

    if (i + 1 < values.length) {

      let [nextSymbol, nextValue] = values[i + 1];

      if (
        nextValue === 1 ||
        nextValue === 10 ||
        nextValue === 100
      ) {

        let subtractValue = value - nextValue;

        if (num >= subtractValue) {
          result += nextSymbol + symbol;
          num -= subtractValue;
        }
      }
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
