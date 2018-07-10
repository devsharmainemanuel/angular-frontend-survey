import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';


import { SurveyService } from '../survey.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  surveyForm: FormGroup;
  @Input() questions: QuestionBase<any>[] = [];



  ngOnInit() {
    this.dataService.getQuestions().subscribe(data => {
      this.questions = data;
     console.log(this.questions);
    });
    this.createForm(this.questions);
  }


  constructor(private dataService: SurveyService, private formBuilder: FormBuilder) {

  }

  public createForm(questions) {
    const arr = [];


    for (let i = 0; i < questions.length; i++) {
      arr.push(this.buildSurvey(questions[i]));
    }

    this.surveyForm = this.formBuilder.group({
      answers: [],
      questions: this.formBuilder.array(arr)
    });
  }

  onSubmit() {
    console.log(this.surveyForm.value);
  }


  buildSurvey(questions): FormGroup {
    return this.formBuilder.group({
      questions: [questions.id],
      value: ['']
    });
  }
}
