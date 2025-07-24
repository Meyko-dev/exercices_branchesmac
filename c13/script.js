const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow

console.log(typeof data)

//data.find((data) => data.ranking === 4);

console.log(data[0])

console.log(data.length)

for (let i = 0; i < data.length; i++) {
  if (data[i].ranking === 4) {
    console.log(data[i]);
  }
}

function middleAge(data){
    let sumAge = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].age) {
            sumAge += data[i].age;
        }
    } return sumAge / data.length;
}
console.log(middleAge(data));