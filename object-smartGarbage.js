const smartGarbage = function (trash, bins) {
  // Your code in here ...
  bins[trash] += 1;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

