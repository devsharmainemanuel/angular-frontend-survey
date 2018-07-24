(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-dark navbar-static-top\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Survey\n  </a>\n</nav>\n<div class=\"container\">\n  <!-- <app-survey></app-survey> -->\n  <!-- <app-question></app-question> -->\n  <app-login></app-login>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Survey';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey.service */ "./src/app/survey.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _survey_survey_component__WEBPACK_IMPORTED_MODULE_5__["SurveyComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/dashboard\"></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLink=\"/deals\" routerLinkActive=\"active\">Deals</a>\n      </li>\n      <li>\n        <a routerLink=\"/special\" routerLinkActive=\"active\">Private Deals</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>\n        <a>Log In</a>\n      </li>\n      <li>\n        <a>Log Out</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"col-sm-12\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"clearfix mt-5\"></div>\r\n<div class=\"row\">\r\n  <div *ngIf=\"myForm != undefined\" class=\"col-md-12\">\r\n    <form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\r\n     <div class=\"card-header\">\r\n            Name: <input  type=\"text\" class=\"form-control\" formControlName=\"username\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div *ngFor=\"let question of questions\">\r\n            {{question.title}}\r\n\r\n            <div formArrayName=\"quest\">\r\n                <input type=\"text\" formControlName=\"question.id\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"clearfix mt-2\"></div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-xs btn-primary\">Save</button>\r\n\r\n\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ "./src/app/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.data = {
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
        this.surveyObject = [];
        this.questions = [];
        this.options = [];
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var arr = [];
        this.dataService.getQuestions().subscribe(function (data) {
            _this.questions = data;
            console.log(_this.questions);
            for (var i = 0; i < data.length; i++) {
                arr.push(_this.buidlData(data[i]));
            }
            _this.myForm = _this.fb.group({
                survey_id: [''],
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                quest: _this.fb.array([]),
                question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            });
        });
    };
    QuestionComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
        //   this.dataService.submitAnswers(this.myForm.value).subscribe(data => {
        //     console.log(data);
        // });
    };
    Object.defineProperty(QuestionComponent.prototype, "quest", {
        get: function () {
            return this.myForm.get('quest');
        },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.ngAfterViewInit = function () {
        console.log(this.myForm);
    };
    QuestionComponent.prototype.buidlData = function (questions) {
        this.options.push(questions.options);
        var allOptions = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        for (var i = 0; i < questions.options.length; i++) {
            console.log(questions.options[i]);
            var fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            fg.addControl(questions.options[i].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false));
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
    };
    QuestionComponent.prototype.initOptions = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    QuestionComponent.prototype.getValue = function (id) {
        console.log(id);
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/survey.service.ts":
/*!***********************************!*\
  !*** ./src/app/survey.service.ts ***!
  \***********************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.base_url = 'http://laravel-backend-survey.loc/api';
    }
    SurveyService.prototype.getQuestions = function () {
        return this.http.get(this.base_url + '/questions');
    };
    SurveyService.prototype.submitSurvey = function (data) {
        var surveys = {
            'answers': data
        };
        console.log(surveys);
        return this.http.post(this.base_url + '/survey/submit', surveys);
    };
    SurveyService.prototype.submitAnswers = function (data) {
        console.log(data);
        return this.http.post(this.base_url + '/survey/submit', data);
    };
    SurveyService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            //console.log(group[question.id]);
            group[question.id] = question.id ? new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.id || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/survey/survey.component.css":
/*!*********************************************!*\
  !*** ./src/app/survey/survey.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/survey/survey.component.html":
/*!**********************************************!*\
  !*** ./src/app/survey/survey.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix mt-5\"></div>\n<div class=\"row\">\n  <div class=\"col-md-12 \">\n\n    <form #answer=\"ngForm\" (ngSubmit)=\"onSubmit(answer.value)\" >\n      <div class=\"card-header\">\n        Name: <input  type=\"text\" class=\"form-control\" name=\"username\" ngModel>\n\n      </div>\n\n\n\n      <div class=\"card mt-2\" *ngFor=\"let question of questions\">\n        <div class=\"card-header\">\n          {{ question.title }}\n\n        </div>\n        <div class=\"card-body\">\n\n          <input *ngIf=\"question.question_type == 'fillintheblank'\" type=\"text\" class=\"form-control\" name=\"{{question.id}}\" ngModel>\n\n          <textarea *ngIf=\"question.question_type == 'textarea'\" type=\"text\" class=\"form-control\" name=\"{{question.id}}\" ngModel></textarea>\n          <!-- SINGLE CORRECT -->\n          <div class=\"row\"  *ngIf=\"question.question_type == 'single'\">\n              <div class=\"col-md-6\" *ngFor=\"let option of question.options; let i = index\">\n                  <div ngModelGroup=\"{{question.id}}\">\n                    <input type=\"radio\" name=\"{{option.id}}\" ngModel> {{ option.text }}\n                  </div>\n\n                </div>\n          </div>\n          <!-- END SINGLE CORRECT -->\n\n\n          <!-- RATINGS -->\n          <div class=\"row\"  *ngIf=\"question.question_type == 'ratings'\">\n            <div class=\"col-md-2 col-md-offset-1\">\n\n              <input type=\"radio\" value=\"1\"  required name=\"{{question.id}}\" ngModel> 1\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"radio\" value=\"2\"  required name=\"{{question.id}}\" ngModel> 2\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"radio\" value=\"3\"  required name=\"{{question.id}}\" ngModel> 3\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"radio\" value=\"4\"  required name=\"{{question.id}}\" ngModel> 4\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"radio\" value=\"5\"  required name=\"{{question.id}}\" ngModel> 5\n            </div>\n          </div>\n          <!-- END RATINGS -->\n\n          <!-- MULTIPLE CORRECT -->\n          <div class=\"row\"  *ngIf=\"question.question_type == 'multiple'\">\n            <div class=\"col-md-12\" *ngFor=\"let option of question.options; let i = index\">\n              <div ngModelGroup=\"{{question.id}}\">\n                <input type=\"checkbox\" name=\"{{option.id}}\" ngModel> {{ option.text }}\n              </div>\n\n            </div>\n\n          </div>\n          <!-- END MULTIPLE CORRECT -->\n\n        </div>\n      </div>\n      <div class=\"clearfix mt-2\"></div>\n\n      <button type=\"submit\" class=\"btn btn-xs btn-primary\">Save</button>\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ "./src/app/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(dataService) {
        this.dataService = dataService;
        this.questions = [];
        this.surveys = [];
        this.options = [];
        this.payLoad = '';
        this.onSubmit = function (answer) {
            // display submitted data
            var answers = answer;
            console.log(answers);
            // this.dataService.submitSurvey(answer).subscribe(data => {
            //     console.log(data);
            // });
        };
    }
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get data from the api and store to question-base//
        this.dataService.getQuestions().subscribe(function (data) {
            _this.questions = data;
            //   this.form = this.dataService.toFormGroup(data);
        });
    };
    SurveyComponent.prototype.buildForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
            ]),
        });
    };
    SurveyComponent.prototype.check = function (value1) {
        return (value1.filter(function (item) { return item.id; })).length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SurveyComponent.prototype, "questions", void 0);
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/survey/survey.component.html"),
            styles: [__webpack_require__(/*! ./survey.component.css */ "./src/app/survey/survey.component.css")],
        }),
        __metadata("design:paramtypes", [_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\angular-frontend-survey\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map