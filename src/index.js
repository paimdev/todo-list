import { Todo, ProjectsList, Project } from './classes';
import { ProjectsView } from './components/ProjectsView';

if (!localStorage.projects) {
  const mainList = new ProjectsList();

  const initTodo = new Todo(
    'Create new app',
    'this is a sample description',
    '2022-12-11',
    'this is a sample note',
    1,
  );

  const otherTodo = new Todo(
    'Create new app',
    'this is a sample description',
    '2022-12-11',
    'this is a sample note',
    '1',
  );

  const initProject = new Project('Test Project');
  initProject.addTodo(initTodo);
  initProject.addTodo(otherTodo);
  mainList.addProject(initProject);

  const contentContainer = document.getElementById('content');
  contentContainer.appendChild(ProjectsView(mainList));
} else {
  const mainList = new ProjectsList();
  const projects = JSON.parse(localStorage.projects);
  console.log(projects);

  projects.map((project) => {
    const recoveredProject = new Project(project.projectName);

    const todos = project.todos;

    todos.map((todo) => {
      const recoveredTodo = new Todo(
        todo.title,
        todo.description,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.notes,
      );

      recoveredProject.addTodo(recoveredTodo);
    });

    mainList.addProject(recoveredProject);
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(ProjectsView(mainList));
  });
}
