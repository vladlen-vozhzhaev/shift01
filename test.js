const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.1.16', // localhost или 127.0.0.1
    user: 'root',
    password: '',
    database: 'task_manager',
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");
})

const addTask = (task, callback)=>{
    const sql = "INSERT INTO tasks (title, description) VALUES (?,?)";
    connection.query(sql, [task.title, task.description], callback);
}

const getTasks = (callback)=>{
    connection.query("SELECT * FROM tasks", (err, result)=>{
        console.log(result);
    });
}

const updateTask = (id, completed, callback)=>{
    const sql = "UPDATE tasks SET completed = ? WHERE id = ?";
    connection.query(sql, [completed, id], callback);
}

const deleteTask = (id, callback)=>{
    connection.query("DELETE FROM tasks WHERE id = ?", [id], callback)
}

function passFunc(err, result){
    return result;
}

addTask({title: "test", description: "test_desc"}, passFunc);

// getTasks();

//updateTask(1, 1, passFunc)

// deleteTask(1, passFunc)