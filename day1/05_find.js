const heros = [
  { name : 'Superman', age : 45 },
  { name : 'Spiderman', age : 20 },
  { name : 'Batman', age : 45 },
]

const hero = heros.find((hero) => hero.name  === 'Superman')
console.log(hero)  // { name: 'Superman', age: 45 }