const os = require('os');

console.log("Операционная система: ", os.platform());
console.log("Архитектура:", os.arch());
console.log("Кол-во ядер CPU:", os.cpus().length);
console.log("Свободно памяти:", (os.freemem()/1024/1024/1024).toFixed(2), 'GB');