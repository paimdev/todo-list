import { TodosView } from './TodosView';

export const ProjectsView = (projectsList) => {
  const projectsViewContainer = document.createElement('div');
  const projectsListView = document.createElement('div');

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
  });

  projectsViewContainer.appendChild(projectsListView);
  return projectsViewContainer;
};
