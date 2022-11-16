import { Project } from '../classes';

export const ProjectAddForm = (projects, clearProjects, renderProjects) => {
  const projectAddForm = document.createElement('form');
  const projectAddInput = document.createElement('input');
  const projectAddSubmit = document.createElement('input');

  projectAddInput.value = 'Project Name';
  projectAddSubmit.type = 'submit';
  projectAddSubmit.value = 'Add Project';

  projectAddForm.appendChild(projectAddInput);
  projectAddForm.appendChild(projectAddSubmit);

  const addProject = (e) => {
    e.preventDefault();
    const projectName = projectAddInput.value;

    const newProject = new Project(projectName);
    projects.addProject(newProject);
    projectAddForm.remove();

    localStorage.setItem('projects', JSON.stringify(projects));

    clearProjects();
    renderProjects();
  };

  projectAddForm.addEventListener('submit', addProject);

  return projectAddForm;
};
