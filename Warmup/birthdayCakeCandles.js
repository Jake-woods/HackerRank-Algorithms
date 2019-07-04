// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
   let maxHeight = Math.max.apply(null, ar);
   let count = 0;

   ar.forEach(item => {
      if (item === maxHeight) {
         count++;
      }
   });

   return count;
}