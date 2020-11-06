import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote() {
    this.goal.upvote++;
  }
  downvote() {
    this.goal.downvote++;
  }
  constructor() { }
  ngOnInit(): void {
  }
}
