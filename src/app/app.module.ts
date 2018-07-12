import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionComponent } from './question/question.component';

import { SurveyService } from './survey.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    QuestionComponent,
    LoginComponent
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
