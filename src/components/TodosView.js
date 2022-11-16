export const TodosView = (project) => {
  const todoList = document.createElement('ul');

  project.todos.map((todo) => {
    const todoItem = document.createElement('li');

    const title = todo.title;
    const dueDate = todo.dueDate;

    const todoTitle = document.createElement('h3');
    const todoDueDate = document.createElement('p');

    todoTitle.innerHTML = title;
    todoDueDate.innerHTML = dueDate;

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDueDate);

    todoList.appendChild(todoItem);
  });

  return todoList;
};
