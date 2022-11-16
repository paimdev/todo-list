import { Todo, ProjectsList, Project } from './classes';
import { ProjectsView } from './components/ProjectsView';

export const mainList = new ProjectsList();

const initTodo = new Todo('test', 'test', 'test', 'test', 'test');
const initProject = new Project('testProject');
initProject.addTodo(initTodo);
mainList.addProject(initProject);

const contentContainer = document.getElementById('content');
contentContainer.appendChild(ProjectsView(mainList));

console.log(mainList.getProjects());
