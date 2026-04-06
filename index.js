/*const args = process.argv.splice(2)
const name = args[0] || process.env.USERNAME || 'Гость';

console.log(`Привет ${name}`);
console.log(`Аргументы:`, args);*/

console.log('start');

setTimeout(()=>{
    console.log('Прошло 2 секунды');
}, 2000);

let count = 0;
const interval = setInterval(()=>{
    count++;
    console.log(`Тик ${count}`);
    if (count === 5 ) clearInterval(interval);
}, 1000);

console.log('Finish');