function reverse (n) {
  return n.toString().split('').reverse().map(x => !isNaN(parseInt(x)) ? x : '').join('');
}

module.exports = reverse;
