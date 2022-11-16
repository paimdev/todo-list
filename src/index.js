import { Todo, ProjectsList, Project } from './classes';

const mainList = new ProjectsList();

const initTodo = new Todo('test', 'test', 'test', 'test', 'test');
const initProject = new Project('testProject');
initProject.addTodo(initTodo);
mainList.addProject(initProject);

console.log(mainList.getProjects());
