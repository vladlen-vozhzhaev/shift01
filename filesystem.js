const fs = require('fs');

console.log('start');
/*
fs.readFile('example.txt', 'utf-8',(err, data)=>{
    if(err){
        console.error("Ошибка:", err);
        return;
    }
    console.log('Содержимое файла: ', data);
} );
*/

/*try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('Содержимое файла: ', data);
}catch (err){
    console.error("Ошибка: ", err);
}*/

/*fs.writeFile('example.txt', 'Hello', 'utf-8', (err)=>{
    if (err) throw err;
    console.log("Файл записан")
})*/

/*fs.appendFile('example.txt', 'Hello', 'utf-8', (err)=>{
    if (err) throw err;
    console.log("Файл записан")
})*/

/*if (fs.existsSync('example.txt')){
    console.log("Файл example.txt существует")
}*/

/*fs.stat('example.txt', (err, stats)=>{
    if (err) throw err;
    console.log('Размер: ', stats.size, "байт");
    console.log('Файл: ', stats.isFile());
    console.log('Директория: ', stats.isDirectory());
    console.log('Дата создания: ', stats.birthtime);
});*/

/*fs.readdir('.', (err, files)=>{
    if (err) throw err;
    console.log(files);
});*/

fs.mkdir('new-folder', {recursive: true}, (err)=>{
    if (err) throw err;
    console.log("Директория создана");
})

console.log('finish');