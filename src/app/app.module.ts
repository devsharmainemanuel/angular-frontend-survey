import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionComponent } from './question/question.component';

import { SurveyService } from './survey.service';
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
