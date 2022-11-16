import { ProjectsList } from '../classes';

export const ProjectsView = (projectsList) => {
  const projectsViewContainer = document.createElement('div');
  const projectsListView = document.createElement('ul');

  const projects = projectsList.getProjects();
  projects.map((project) => {
    const projectItem = document.createElement('li');
    projectItem.innerHTML = project.projectName;

    projectsListView.appendChild(projectItem);
  });

  projectsViewContainer.appendChild(projectsListView);
  return projectsViewContainer;
};
