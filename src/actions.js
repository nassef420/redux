

let nextTaskId = 1;

export const addTask = (task) => ({
  type: 'ADD_TASK',
  task: { ...task, id: nextTaskId++ },
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id,
});

export const editTask = (id, description) => ({
  type: 'EDIT_TASK',
  id,
  description,
});