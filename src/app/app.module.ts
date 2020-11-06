import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
// import { DateCountPipe } from './date-count.pipe';
// import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    DateCountPipe,
    GoalFormComponent,
    DateCountPipe,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }