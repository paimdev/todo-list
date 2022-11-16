export const TodoEditForm = (todo, renderTodos, clearTodos) => {
  const todoEditForm = document.createElement('form');
  todoEditForm.setAttribute('id', 'todo-edit-form');
  todoEditForm.setAttribute('class', 'todo-edit-form');

  const todoTitle = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('name', 'title');
  todoTitle.setAttribute('placeholder', 'Title');
  todoTitle.setAttribute('value', todo.title);

  const todoDescription = document.createElement('input');
  todoDescription.setAttribute('type', 'text');
  todoDescription.setAttribute('name', 'description');
  todoDescription.setAttribute('placeholder', 'Description');
  todoDescription.setAttribute('value', todo.description);

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('name', 'dueDate');
  todoDueDate.setAttribute('value', todo.dueDate);

  const todoPriority = document.createElement('input');
  todoPriority.setAttribute('type', 'text');
  todoPriority.setAttribute('name', 'priority');
  todoPriority.setAttribute('placeholder', 'Priority');
  todoPriority.setAttribute('value', todo.priority);

  const todoNotes = document.createElement('input');
  todoNotes.setAttribute('type', 'text');
  todoNotes.setAttribute('name', 'notes');
  todoNotes.setAttribute('placeholder', 'Notes');
  todoNotes.setAttribute('value', todo.notes);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerHTML = 'Submit';

  todoEditForm.appendChild(todoTitle);
  todoEditForm.appendChild(todoDescription);
  todoEditForm.appendChild(todoDueDate);
  todoEditForm.appendChild(todoPriority);
  todoEditForm.appendChild(todoNotes);
  todoEditForm.appendChild(submitButton);

  const editTodo = (e) => {
    e.preventDefault();

    const title = todoTitle.value;
    const description = todoDescription.value;
    const dueDate = todoDueDate.value;
    const priority = todoPriority.value;
    const notes = todoNotes.value;

    todo.editTodo(title, description, dueDate, priority, notes);
    todoEditForm.remove();

    clearTodos();
    renderTodos();
  };

  todoEditForm.addEventListener('submit', editTodo);

  return todoEditForm;
};
