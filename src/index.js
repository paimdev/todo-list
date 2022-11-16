import { Todo, ProjectsList, Project } from './classes';
import { ProjectsView } from './components/ProjectsView';

export const mainList = new ProjectsList();

const initTodo = new Todo(
  'Create new app',
  'test',
  '2022-12-11',
  'test',
  'test',
);
const initProject = new Project('testProject');
initProject.addTodo(initTodo);
mainList.addProject(initProject);

const contentContainer = document.getElementById('content');
contentContainer.appendChild(ProjectsView(mainList));

console.log(mainList.getProjects());
