export class Goal {
    splice(index: any, arg1: number) {
      throw new Error('Method not implemented.');
    }
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string){
      this.showDescription=false;
    }
}
