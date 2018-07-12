import { Component, Input, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { SurveyService } from '../survey.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit , AfterViewInit {

  data = {
    companies: [
      {
        company: 'test',
        projects: [
          {
            projectName: 'test',
          }
        ]
      }
    ]
  };

  surveyObject = [];


  myForm: FormGroup;
  questions: QuestionBase<any>[] = [];
  options =  [];
  constructor(private fb: FormBuilder, private dataService: SurveyService) {


  }

  ngOnInit() {

    const arr = [];
    this.dataService.getQuestions().subscribe(data => {
      this.questions = data;


      console.log(this.questions);
      for (let i = 0; i < data.length; i++) {
          arr.push(this.buidlData(data[i]));

      }

      this.myForm = this.fb.group({
        survey_id: [''],
        username: new FormControl('', Validators.required),
        questions: this.fb.array(arr)
      });

    });

  }

  onSubmit() {
    console.log(this.myForm.value);

  //   this.dataService.submitAnswers(this.myForm.value).subscribe(data => {
  //     console.log(data);
  // });
  }


  ngAfterViewInit() {
      console.log(this.myForm);
  }


  buidlData(questions): FormGroup {
this.options.push(questions.options);

const allOptions: FormArray = new FormArray([]);
for (let i = 0; i < questions.options.length; i++) {
  const fg = new FormGroup({});
  fg.addControl(questions.options[i].id, new FormControl(false));
  allOptions.push(fg);
}



    return this.fb.group({
      title: [questions.title],
      type: [questions.question_type],
      options: [questions.options],
      id: [questions.id],
      options_value: allOptions,
      value: ['']
    });

  }
initOptions() {
  return new FormGroup({
    text: new FormControl(),
    id: new FormControl()
  });
}


getValue(id) {
  console.log(id);
}


}
