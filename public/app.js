const API_URL = "/api/tasks";
loadTasks();
// Загрухка задач с сервера
async function loadTasks(){
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTask(tasks);
}

function renderTask(tasks){
    const container = document.getElementById('taskList');
    if (tasks.length === 0){
        container.innerHTML = `
            <div class="text-center text-muted py-5">
                <p>Нет задач. Добавьте первую задачу!</p>
            </div>
        `;
        return;
    }
    container.innerHTML = tasks.map(task => `
        <div class="card mb-2">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">      
                    <div class="form-check form-switch">
                        <input type="checkbox" class="form-check-input" role="switch" checked onchange="">
                    </div>
                    <h6>${task.title}</h6>
                </div>
                ${task.description}
                <div class="ms-4 mt-1">
                    <small>
                        ${new Date(task.createAt).toLocaleDateString('ru-RU')}
                    </small>
                </div>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-primary" onclick="editTask(${task.id}})">[редактировать]</button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">[удалить]</button>
            </div>
        </div>
    `).join('');
}

function editTask(taskId){
    // Редактируем
}

function deleteTask(taskId){

}

document.getElementById('taskForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const title = document.getElementById('taskName').value;
    const description = document.getElementById('taskDescription').value;
    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, description})
        })
        if (response.ok){
            await loadTasks();
        }else{
            const error = await response.json();
            console.log(error.error);
        }
    }catch (error){
        console.log(error)
    }

});