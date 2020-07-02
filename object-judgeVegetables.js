const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
  // let supplier = vegetables.reduce((best, current) => {
  //   return best[metric] > current[metric] ? best : current;
  // })
  let supplier = vegetables.filter(i => {
    return i[metric] === Math.max(...vegetables.map(i => i[metric]));
  })

  return supplier[0].submitter;

}
console.log(judgeVegetable(vegetables, metric));