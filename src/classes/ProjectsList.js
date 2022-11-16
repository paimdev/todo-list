import { Project } from './Project';

export class ProjectsList {
  constructor() {
    const defaultProject = new Project('default');
    this.projectsList = [defaultProject];
  }

  addProject(project) {
    this.projectsList.push(project);
  }

  getProjects() {
    return this.projectsList;
  }
}
