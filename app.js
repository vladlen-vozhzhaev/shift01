const express = require('express');
const mysql = require('mysql2/promise')
const TaskModel = require('./models/taskModel');

const app = express();
const pool = mysql.createPool({
   host: '127.0.1.16', // localhost или 127.0.0.1
   user: 'root',
   password: '',
   database: 'task_manager',
   waitForConnections: true,
   connectionLimit: 10
});
let tasks = [];
let nextId = 1;

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next)=>{
   console.log('Вызван посредник (middleware)');
   next();
});
let count = 0;
function rateCounter(req, res, next){
   count++;
   console.log(count);
   next();
}

app.get("/api/tasks", rateCounter ,(req, res)=>{
   res.json(tasks);
})

app.get("/api/tasks/:id", (req, res)=>{
   const task = tasks.find(t=>t.id === parseInt(req.params.id));
   if (!task) {
      return res.status(404).json({error: "Task not found"});
   }
   res.json(task);
})

app.post('/api/tasks', async (req, res)=>{
   const {title, description} = req.body;
   if (!title){
      return res.status(400).json({error: "Title is required"});
   }
   try{
      const newTask = await TaskModel.create(title, description);
      res.status(201).json(newTask);
   }catch (e){
      res.status(500).json({error: e.message});
   }
});

app.delete('/api/tasks/:id', (req, res)=>{
   const id = parseInt(req.params.id);
   const taskIndex = tasks.findIndex(t=> t.id === id);
   if(taskIndex === -1){
      return res.status(404).json({error: "Task not found"});
   }
   tasks.splice(taskIndex, 1);
   res.status(204).send();

});



app.listen(3000);