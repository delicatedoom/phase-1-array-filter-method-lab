const drivers = [
    {
      name: 'Danny',
      hometown: 'Frankfurt' },
    {
      name: 'Marc',
      hometown: 'Missoula' } ,
    {
      name: 'Elise',
      hometown: 'Seattle' },
    {
      name: 'Troy',
      hometown: 'Los Angeles' },
    {
      name: 'Danny',
      hometown: 'Pheonix' }
  ];

function findMatching(array, name){
    return array.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, letters){
    let string = letters.length
    return array.filter(person => (person.slice(0, string)) === letters)
}

function matchName(array, whoIsIt){
    return array.filter(element => element.name === whoIsIt)
}
