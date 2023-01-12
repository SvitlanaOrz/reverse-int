module.exports = function reverse (n) {
   let revNumb = n.toString().split('').reverse().join('');
   return parseFloat(revNumb);
}
