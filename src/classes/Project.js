import { ProjectsList } from './ProjectsList';

export class Project {
  constructor(projectName, todos = []) {
    this.projectName = projectName;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodoById(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
