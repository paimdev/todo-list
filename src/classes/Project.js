export class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}
