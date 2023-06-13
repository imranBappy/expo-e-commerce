const person = [
    { name: 'John', age: 21 },
    { name: 'Peter', age: 31 },
]

const findPerson = person.find((person) => person.name === 'John')
findPerson.age = 22
console.log(person);