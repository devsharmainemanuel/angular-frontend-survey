import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';

import { SurveyService } from '../survey.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  surveys = [];
  options = [];
  form: FormGroup;
  payLoad = '';

  constructor(private dataService: SurveyService) {

  }
  ngOnInit() {

    // get data from the api and store to question-base//
    this.dataService.getQuestions().subscribe(data => {
      this.questions = data;
   //   this.form = this.dataService.toFormGroup(data);

    });
  }

  buildForm() {

    this.form = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(4)  ]),
    });
  }

  onSubmit = function(answer) {
    // display submitted data
    const answers = answer;
    console.log(answers);
    this.dataService.submitSurvey(answer).subscribe(data => {
        console.log(data);
    });
  };

  check(value1) {
    return (value1.filter(item => item.id)).length;
  }
}
