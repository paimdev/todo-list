import { Todo } from '../classes';

export const TodoAddForm = (project, clearProjects, renderProjects) => {
  const todoAddForm = document.createElement('form');
  todoAddForm.setAttribute('id', 'todo-edit-form');
  todoAddForm.setAttribute('class', 'todo-edit-form');

  const todoTitle = document.createElement('input');
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('name', 'title');
  todoTitle.setAttribute('placeholder', 'Title');

  const todoDescription = document.createElement('input');
  todoDescription.setAttribute('type', 'text');
  todoDescription.setAttribute('name', 'description');
  todoDescription.setAttribute('placeholder', 'Description');

  const todoDueDate = document.createElement('input');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.setAttribute('name', 'dueDate');

  const todoPriority = document.createElement('input');
  todoPriority.setAttribute('type', 'text');
  todoPriority.setAttribute('name', 'priority');
  todoPriority.setAttribute('placeholder', 'Priority');

  const todoNotes = document.createElement('input');
  todoNotes.setAttribute('type', 'text');
  todoNotes.setAttribute('name', 'notes');
  todoNotes.setAttribute('placeholder', 'Notes');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerHTML = 'Submit';

  todoAddForm.appendChild(todoTitle);
  todoAddForm.appendChild(todoDescription);
  todoAddForm.appendChild(todoDueDate);
  todoAddForm.appendChild(todoPriority);
  todoAddForm.appendChild(todoNotes);
  todoAddForm.appendChild(submitButton);

  const addTodo = (e) => {
    e.preventDefault();

    const title = todoTitle.value;
    const description = todoDescription.value;
    const dueDate = todoDueDate.value;
    const priority = todoPriority.value;
    const notes = todoNotes.value;

    const createdTodo = new Todo(title, description, dueDate, priority, notes);
    project.addTodo(createdTodo);

    todoAddForm.remove();

    clearProjects();
    renderProjects();
  };

  todoAddForm.addEventListener('submit', addTodo);

  return todoAddForm;
};
