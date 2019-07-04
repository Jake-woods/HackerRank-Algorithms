function staircase(n) {
   let spaceCount;
   let hashCount;
   let stairs;

   for (let i = 0; i < n; i++) {
      spaceCount = n - 1 - i;
      hashCount = i + 1;
      stairs = ' '.repeat(spaceCount) + '#'.repeat(hashCount);
      console.log(stairs);
   }
}