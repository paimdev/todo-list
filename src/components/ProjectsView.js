import { TodosView } from './TodosView';
import { TodoAddForm } from './TodoAddForm';
import { ProjectAddForm } from './ProjectAddForm';

export const ProjectsView = (projectsList) => {
  const projectsViewContainer = document.createElement('div');
  const projectsListView = document.createElement('div');

  const clearProjects = () => {
    projectsListView.innerHTML = '';
  };

  const renderProjects = () => {
    const projects = projectsList.getProjects();
    projects.map((project) => {
      const projectItemContainer = document.createElement('div');
      const projectItemName = document.createElement('h2');

      const projectTodosContainer = document.createElement('div');
      projectTodosContainer.appendChild(TodosView(project));

      projectItemName.innerHTML = project.projectName;

      projectItemContainer.appendChild(projectItemName);
      projectItemContainer.appendChild(projectTodosContainer);
      projectsListView.appendChild(projectItemContainer);

      const addTodoButton = document.createElement('button');
      addTodoButton.innerHTML = 'Add Todo';
      projectItemContainer.appendChild(addTodoButton);

      const clearProject = () => {
        projectItemContainer.innerHTML = '';
      };

      const addTodo = () => {
        projectItemContainer.appendChild(
          TodoAddForm(project, clearProjects, renderProjects),
        );
      };

      addTodoButton.addEventListener('click', addTodo);

      localStorage.projects = JSON.stringify(projectsList.getProjects());
    });
  };

  renderProjects();
  projectsViewContainer.appendChild(projectsListView);

  const addProjectButton = document.createElement('button');
  addProjectButton.innerHTML = 'Add Project';

  const addProject = () => {
    projectsViewContainer.appendChild(
      ProjectAddForm(projectsList, clearProjects, renderProjects),
    );
  };

  addProjectButton.addEventListener('click', addProject);

  projectsViewContainer.appendChild(addProjectButton);

  return projectsViewContainer;
};
