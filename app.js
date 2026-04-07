const express = require('express');
const app = express();

let tasks = [];
let nextId = 1;

app.use(express.json());
app.use(express.static('public'));
app.get("/api/tasks", (req, res)=>{
   res.json(tasks);
})

app.get("/api/tasks/:id", (req, res)=>{
   const task = tasks.find(t=>t.id === parseInt(req.params.id));
   if (!task) {
      return res.status(404).json({error: "Task not found"});
   }
   res.json(task);
})

app.post('/api/tasks', (req, res)=>{
   const {title, description} = req.body;
   if (!title){
      return res.status(400).json({error: "Title is required"});
   }

   const newTask = {
      id: nextId++,
      title,
      description: description,
      completed: false,
      createAt: new Date().toISOString()
   }

   tasks.push(newTask);
   res.status(201).json(newTask);
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