export class ProjectsList {
  constructor() {
    this.projectsList = [];
  }

  addProject(project) {
    this.projectsList.push(project);
  }

  getProjects() {
    return this.projectsList;
  }
}
