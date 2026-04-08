const pool = require('../db/database');

class TaskModel{

    static async getById(id){
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        return rows[0];
    }
    static async create(title, description){
        const [result] = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        return this.getById(result.insertId);
    }
}

module.exports = TaskModel