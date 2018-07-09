import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionBase } from 'src/app/question-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response, Headers } from '@angular/http';



interface MyData {
  obj: any[];
}
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }
  public base_url = 'http://surveytest.loc/api';


  getQuestions() {
    return this.http.get<QuestionBase<any>[]>(this.base_url + '/questions');
  }


  submitSurvey(data) {

    const surveys = {
      'answers': data
    };
    console.log(surveys);
    return this.http.post(this.base_url + '/survey/submit', surveys);
  }





  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {

//console.log(group[question.id]);

      group[question.survey_id] = question.survey_id ? new FormControl(question.id || '', Validators.required)
      : new FormControl(question.id || '');
    });
    return new FormGroup(group);
  }
}