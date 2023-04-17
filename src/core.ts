export class Core {
  constructor(public id: number, public projectName: String) {}

  updateProjectName(newProjectName: String) {
    this.projectName = newProjectName;
  }
}

class Test {
  constructor() {}
}
