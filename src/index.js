import { Todo, ProjectsList, Project } from './classes';
import { ProjectsView } from './components/ProjectsView';

export const mainList = new ProjectsList();

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

console.log(mainList.getProjects());
