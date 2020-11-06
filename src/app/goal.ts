export class Goal {
  showDescription: boolean;
          constructor(
              public id: number,
              public goal: string,
              public author: string,
              public publisher: string,
              public completeDate: Date,
              public upvote:number,
              public downvote:number
              )
              {
               this.showDescription=false;
          }
      }
  
  