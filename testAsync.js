const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '127.0.1.16', // localhost или 127.0.0.1
    user: 'root',
    password: '',
    database: 'task_manager',
    waitForConnections: true,
    connectionLimit: 10
});

async function getTasks(){
    const rows = await pool.query("SELECT * FROM tasks");
    return rows;
}

getTasks().then(result=>{
    console.log(result);
})