(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-module"],{

/***/ "./src/app/PAGES/feedback/feedback.component.html":
/*!********************************************************!*\
  !*** ./src/app/PAGES/feedback/feedback.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feedback\">\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"box\">\r\n        <section class=\"hero is-link\">\r\n            <div class=\"hero-body\">\r\n              <div class=\"container\">\r\n                <h1 class=\"title\">\r\n                 Feedback / Comments\r\n                </h1>\r\n                <h2 class=\"subtitle\">\r\n                  Your feedback is very important to us\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    </div>\r\n    <div class=\"columns\">\r\n      <div class=\"column is-half\">\r\n        <div class=\"box myform\">\r\n            <div class=\"spinner button is-loading is-large is-link\" *ngIf=\"showLoading\"></div>\r\n            <div class=\"thank-you\" *ngIf=\"showThankYou\"><p class=\"text\">Thank you for your feedback {{feedback.username}}</p>\r\n            <div class=\"done\">\r\n              <button class=\"button is-link\" (click)=\"done()\">done</button>\r\n            </div></div>\r\n          <form class=\"form\" [formGroup]=\"feedbackForm\" *ngIf=\"showForm\">\r\n              <div class=\"field\">\r\n                  <label class=\"label\">username</label>\r\n                  <div class=\"control\">\r\n                    <input class=\"input\" type=\"text\" placeholder=\"Text input\" formControlName=\"username\">\r\n                  </div>\r\n                </div>\r\n                 <div *ngIf=\"!auth.isLoggedIn\" class=\"field\">\r\n                  <label class=\"label\">Email</label>\r\n                  <div class=\"control has-icons-left has-icons-right\">\r\n                    <input class=\"input\" type=\"email\" placeholder=\"Email input\" formControlName=\"email\">\r\n                    <span class=\"icon is-small is-left\">\r\n                      <i class=\"fas fa-envelope\"></i>\r\n                    </span>\r\n                    <span class=\"icon is-small is-right\">\r\n                      <i class=\"fas fa-exclamation-triangle\"></i>\r\n                    </span>\r\n                  </div>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"field\">\r\n                    <label class=\"label\">Subject</label>\r\n                    <div class=\"control has-icons-left has-icons-right\">\r\n                      <input class=\"input is-success\" type=\"text\" placeholder=\"Text input\" formControlName=\"title\">\r\n                      <span class=\"icon is-small is-left\">\r\n                        <i class=\"fas fa-user\"></i>\r\n                      </span>\r\n                      <span class=\"icon is-small is-right\">\r\n                        <i class=\"fas fa-check\"></i>\r\n                      </span>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                \r\n                <div class=\"field\">\r\n                  <label class=\"label\">Message</label>\r\n                  <div class=\"control\">\r\n                    <textarea class=\"textarea\" placeholder=\"Textarea\" formControlName=\"message\"></textarea>\r\n                  </div>\r\n                </div>\r\n                \r\n                <!-- <div class=\"field\">\r\n                  <div class=\"control\">\r\n                    <label class=\"checkbox\">\r\n                      <input type=\"checkbox\">\r\n                      I agree to the <a href=\"#\">terms and conditions</a>\r\n                    </label>\r\n                  </div>\r\n                </div> -->\r\n              <div class=\"field is-grouped\">\r\n                  <div class=\"control\">\r\n                    <button class=\"button is-link\" (click)=\"submit()\">Submit</button>\r\n                  </div>\r\n                  <!-- <div class=\"control\">\r\n                    <button class=\"button is-text\">Cancel</button>\r\n                  </div> -->\r\n                </div>\r\n\r\n          </form>\r\n          \r\n            </div>\r\n        </div>\r\n        \r\n    \r\n      <div class=\"column\">\r\n        \r\n          <div *ngIf=\"showOffer\" class=\"notification is-danger\">\r\n              <button class=\"delete\" (click) = \"close()\">close</button>\r\n              <strong>Earn</strong> Fantasy coins by giving us feedback!!<br/>\r\n              we are commited to making sure you have the best experience using our platform. <br/>\r\n              During the <strong>Beta</strong> stage we will rewarding our users for giving us contructive\r\n              feedback about their experience using this platform, bugs and features they want added.\r\n\r\n\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/PAGES/feedback/feedback.component.scss":
/*!********************************************************!*\
  !*** ./src/app/PAGES/feedback/feedback.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback {\n  color: black; }\n\n.spinner {\n  width: 100%;\n  min-height: 300px; }\n\n.myform {\n  min-height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVMvZmVlZGJhY2svQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxQQUdFU1xcZmVlZGJhY2tcXGZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUEFHRVMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZGJhY2t7XHJcbiAgICBjb2xvcjogYmxhY2tcclxufVxyXG4uc3Bpbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIC5teWZvcm17XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/PAGES/feedback/feedback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/PAGES/feedback/feedback.component.ts ***!
  \******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/api-service.service */ "./src/app/util/api-service.service.ts");





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(fb, auth, api) {
        this.fb = fb;
        this.auth = auth;
        this.api = api;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.checkIfSngedIn();
        this.showForm = true;
        this.showLoading = false;
        this.showThankYou = false;
        this.showOffer = true;
    };
    FeedbackComponent.prototype.checkIfSngedIn = function () {
        if (this.auth.isLoggedIn) {
            this.username = this.auth.getUserName();
            this.sender = this.auth.getUserId();
            this.createForm();
        }
        else {
            this.username = '';
            this.sender = '';
            this.createForm();
        }
    };
    FeedbackComponent.prototype.createForm = function () {
        this.feedbackForm = this.fb.group({
            username: [this.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            sender: [this.sender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FeedbackComponent.prototype.submit = function () {
        var _this = this;
        this.showForm = false;
        this.showLoading = true;
        this.api.postResource('feedback', this.feedbackForm.value)
            .subscribe(function (resp) {
            _this.feedback = resp;
            _this.showThankYou = true;
            _this.showLoading = false;
        });
    };
    FeedbackComponent.prototype.done = function () {
        this.showForm = true;
        this.showLoading = false;
        this.showThankYou = false;
        this.feedbackForm.reset();
        this.checkIfSngedIn();
    };
    FeedbackComponent.prototype.close = function () {
        this.showOffer = false;
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/PAGES/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/PAGES/feedback/feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/feedback.module.ts":
/*!************************************************!*\
  !*** ./src/app/app-routing/feedback.module.ts ***!
  \************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PAGES_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PAGES/feedback/feedback.component */ "./src/app/PAGES/feedback/feedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var routes = [
    { path: '', component: _PAGES_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"] }
];
var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_PAGES_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ })

}]);
//# sourceMappingURL=feedback-module.js.map