import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Programming is not about what you know; it is about what you can figure out.', '-Mark Doe', 'Ange', new Date(2018,8,3), 0, 0),
    new Goal(2, 'May the code be with you all!', '-Ruth Nikita', 'Ange', new Date(2020,2,12), 0, 0),
  ];
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].goal}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  preNum:number;
  lastNum:number;
  counter:number;

  HighestUpvote(){

    this.preNum = 0
    this.lastNum = 0
    for(this.counter=0 ; this.counter < this.goals.length; this.counter++) {
      this.lastNum = this.goals[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }
  ngOnInit(): void {
  }
}
