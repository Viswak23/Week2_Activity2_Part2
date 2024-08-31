const Todo = require("./todoLib");

const getAllTodos = (req, res) => {
  const todos = Todo.getAll();
  res.json(todos);
};

const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTask = Todo.addOne(task, completed, dueDate);

  if (newTask) {
    res.json(newTask);
  } else {
    res.status(500).json({ message: "Failed to create task" });
  }
};

const getTodoById = (req, res) => {
  const id = req.params.todoId;
  const task = Todo.findById(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "task not found" });
  }
};

const updateTodo = (req, res) => {
  const id = req.params.todoId;

  const { task, completed, dueDate } = req.body;
  const updateTask = Todo.updateOneById(id, { task, completed, dueDate });

  if (updateTask) {
    res.json(updateTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const deleteTodo = (req, res) => {
  const id = req.params.todoId;
  const deleted = Todo.deleteOneById(id);
  if (deleted) {
    res.json({ message: "task deleted successfully" });
  } else {
    res.status(404).json({ message: "task not found" });
  }
};
module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
