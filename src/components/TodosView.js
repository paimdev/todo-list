import { TodoEditForm } from './TodoEditForm';

export const TodosView = (project) => {
  const todoList = document.createElement('ul');

  const clearTodos = () => {
    todoList.innerHTML = '';
  };

  const renderTodos = () => {
    project.todos.map((todo) => {
      const todoItem = document.createElement('li');

      const id = todo.id;
      todoItem.id = id;

      const title = todo.title;
      const dueDate = todo.dueDate;

      const todoTitle = document.createElement('h3');
      const todoDueDate = document.createElement('p');

      todoTitle.innerHTML = title;
      todoDueDate.innerHTML = dueDate;

      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDueDate);

      todoList.appendChild(todoItem);

      const showExtraInfo = () => {
        console.log(todo);

        const description = todo.description;
        const priority = todo.priority;
        const notes = todo.notes;

        const todoDescription = document.createElement('p');
        todoDescription.innerHTML = description;

        const todoPriority = document.createElement('p');
        todoPriority.innerHTML = priority;

        const todoNotes = document.createElement('p');
        todoNotes.innerHTML = notes;

        todoItem.appendChild(todoDescription);
        todoItem.appendChild(todoPriority);
        todoItem.appendChild(todoNotes);

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        todoItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        todoItem.appendChild(deleteButton);

        const removeTodo = () => {
          project.removeTodoById(id);
          clearTodos();
          renderTodos();
        };

        const editTodo = () => {
          removeTodoInfo(todoItem);
          todoItem.appendChild(TodoEditForm(todo, renderTodos, clearTodos));
        };

        editButton.addEventListener('click', editTodo);
        deleteButton.addEventListener('click', removeTodo);

        removeListeners();
      };

      const removeListeners = () => {
        todoItem.removeEventListener('click', showExtraInfo);
      };

      todoItem.addEventListener('click', showExtraInfo);
    });
  };

  renderTodos();

  const removeTodoInfo = (todoItem) => {
    todoItem.innerHTML = '';
  };

  return todoList;
};
