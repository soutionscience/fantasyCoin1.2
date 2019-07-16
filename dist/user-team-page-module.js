(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-team-page-module"],{

/***/ "./src/app/DETAILS/user-info/user-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/DETAILS/user-info/user-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/DETAILS/user-info/user-info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/DETAILS/user-info/user-info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RFVEFJTFMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/DETAILS/user-info/user-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DETAILS/user-info/user-info.component.ts ***!
  \**********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/DETAILS/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/DETAILS/user-info/user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/DETAILS/user-team/user-team.component.html":
/*!************************************************************!*\
  !*** ./src/app/DETAILS/user-team/user-team.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pitch\">\n\n\n  <div class=\"columns is-multiline is-centered\">\n    <div class=\"column is-one-quarter\" *ngFor=\"let p of userTeam\">\n    <div class=\"card\">\n        <div class=\"card-image\">\n            <figure class=\"image is-96x96 media-center\">\n                <img [src]= \"'../../assets/images/kits/' + p.team_code + '.png' \"\n                alt=\"\">\n            </figure>\n          </div>\n          <div class=\"card-content\"></div>\n          <footer class=\"card-footer\">\n              <p class=\"name\">{{p.web_name}}</p>\n              </footer>\n            <footer class=\"card-footer\">\n              <p class=\"card-footer-item\">points:</p>\n              <p class=\"card-footer-item points\">{{p.pointsWeek}}</p>\n\n              </footer>\n    </div>\n\n\n\n      <!-- <div class=\"player\">\n     <div class=\"card\">\n       <img [src]= \"'../../assets/images/kits/' + p.team_code + '.png' \"\n       alt=\"\" height=\"50\" width=\"50\"> </div>\n      \n     <div class=\"details\" >\n       \n       <div class=\"columns\">\n          <p class=\"name column \">{{p.web_name}}</p>\n          <p class=\"points column is-one-quarter\">{{p.pointsWeek}}</p>\n       </div>\n     \n      </div>\n\n     </div> -->\n    </div>\n  </div>\n \n </div>\n"

/***/ }),

/***/ "./src/app/DETAILS/user-team/user-team.component.scss":
/*!************************************************************!*\
  !*** ./src/app/DETAILS/user-team/user-team.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name {\n  background: #23d160;\n  color: white;\n  padding: 0px;\n  text-align: center;\n  width: 100%; }\n\n.points {\n  background: blue;\n  color: white;\n  padding: 0px;\n  text-align: center; }\n\n.details {\n  border: #a09e9e solid 1px; }\n\n.card-image {\n  padding: 4px;\n  text-align: center;\n  padding-left: 25%; }\n\n.card-footer-item {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.players {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvREVUQUlMUy91c2VyLXRlYW0vQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxERVRBSUxTXFx1c2VyLXRlYW1cXHVzZXItdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFJSSx5QkFBb0MsRUFBQTs7QUFFeEM7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0RFVEFJTFMvdXNlci10ZWFtL3VzZXItdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1le1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAyMDksIDk2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb2ludHN7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgLy8gbWFyZ2luOiA0cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA0cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IHJnYigxNjAsIDE1OCwgMTU4KSBzb2xpZCAxcHhcclxufVxyXG4uY2FyZC1pbWFnZXtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG59XHJcbi5jYXJkLWZvb3Rlci1pdGVte1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLnBsYXllcnN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/DETAILS/user-team/user-team.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DETAILS/user-team/user-team.component.ts ***!
  \**********************************************************/
/*! exports provided: UserTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTeamComponent", function() { return UserTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserTeamComponent = /** @class */ (function () {
    function UserTeamComponent() {
    }
    UserTeamComponent.prototype.ngOnInit = function () {
        console.log('received ', this.userTeam);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserTeamComponent.prototype, "userTeam", void 0);
    UserTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-team',
            template: __webpack_require__(/*! ./user-team.component.html */ "./src/app/DETAILS/user-team/user-team.component.html"),
            styles: [__webpack_require__(/*! ./user-team.component.scss */ "./src/app/DETAILS/user-team/user-team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserTeamComponent);
    return UserTeamComponent;
}());



/***/ }),

/***/ "./src/app/PAGES/user-team-page/user-team-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/PAGES/user-team-page/user-team-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userPage\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column is-one-quarter\">\n        <div class=\"card\" *ngIf=\"user\">\n          <nav class=\"panel\">\n            <div class=\"panel-heading is-primary\">{{userName}}</div>\n            <div class=\"panel-block info\">\n              <p> <b>Information</b> </p>\n            </div>\n           \n            <div class=\"panel-block\">\n                <p>Fantasy Coins: <b class=\"coins\">{{user.balance}}</b> </p>\n              </div>\n              <div class=\"panel-block\">\n                  <p>TeamPoints: <b class=\"points\">{{user.teamPoints}}</b> </p>\n                </div>\n          </nav>\n        </div>\n        <div class=\"card\" *ngIf=\"user\">\n          <div class=\"league\">\n            <table class=\"table is-bordered\">\n              <thead>\n              <tr class=\"is-selected\">\n                <th>Rank</th>\n                <th>name</th>\n                <th>Points</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n              </tr>\n            </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"myInfo\">\n          <div class=\"columns\" *ngIf=\"user\">\n            <div class=\"column is-half\">\n              <div class=\"c\">\n                <div class=\"content\">\n                    <p>Week's Points</p>\n                    <p class=\" title points\">{{user.teamPoints}}</p>\n                  </div>\n                </div>\n                \n            </div>\n            <div class=\"column is-half\">\n                <div class=\"c\">\n                  <div class=\"content\">\n                      <p>Fantasy Coins</p>\n                      <p class=\" title coins\">{{user.balance}}</p>\n                  </div>\n                 \n                </div>\n              </div>\n          </div>\n        </div>\n        <div class=\"card myTeam\">\n         <div class=\"panel\">\n            <div class=\"panel-heading is-primary\">My Team</div>\n         </div>\n         <div class=\"panel-block\">\n        <app-user-team *ngIf=\"userTeam\" [userTeam] =\"userTeam\"></app-user-team>\n         </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/PAGES/user-team-page/user-team-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/PAGES/user-team-page/user-team-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-heading {\n  background: url('background.png');\n  color: white; }\n\n.info {\n  background: lightgray; }\n\n.coins {\n  color: gold; }\n\n.points {\n  color: red; }\n\n.content {\n  padding-top: 10px;\n  padding-right: 5%;\n  text-align: center;\n  padding-bottom: 10px;\n  background-color: whitesmoke;\n  color: black; }\n\n.myTeam {\n  margin-top: 8px; }\n\n.league {\n  margin-top: 8px;\n  border: #dbdada solid 1px;\n  align-content: center;\n  padding: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVMvdXNlci10ZWFtLXBhZ2UvQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxQQUdFU1xcdXNlci10ZWFtLXBhZ2VcXHVzZXItdGVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQXdEO0VBQ3hELFlBQVksRUFBQTs7QUFHZDtFQUNJLHFCQUFxQixFQUFBOztBQUUzQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiw0QkFBb0M7RUFDcEMsWUFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZix5QkFBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BBR0VTL3VzZXItdGVhbS1wYWdlL3VzZXItdGVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaW5mb3tcclxuICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gIH1cclxuLmNvaW5ze1xyXG4gICAgY29sb3I6IGdvbGQ7XHJcbn1cclxuLnBvaW50c3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICBjb2xvcjogYmxhY2tcclxufVxyXG5cclxuLm15VGVhbXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmxlYWd1ZXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlcjogcmdiKDIxOSwgMjE4LCAyMTgpIHNvbGlkIDFweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/PAGES/user-team-page/user-team-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/PAGES/user-team-page/user-team-page.component.ts ***!
  \******************************************************************/
/*! exports provided: UserTeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTeamPageComponent", function() { return UserTeamPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/api-service.service */ "./src/app/util/api-service.service.ts");





var UserTeamPageComponent = /** @class */ (function () {
    function UserTeamPageComponent(auth, web3, api) {
        this.auth = auth;
        this.web3 = web3;
        this.api = api;
    }
    UserTeamPageComponent.prototype.ngOnInit = function () {
        this.setUserName();
        this.getUser();
    };
    UserTeamPageComponent.prototype.setUserName = function () {
        this.userName = this.auth.getUserName();
        //  console.log('get username ', this.userName)
    };
    UserTeamPageComponent.prototype.getUser = function () {
        var _this = this;
        var address = this.auth.getUserAdress();
        console.log('users ', address);
        this.api.getSpecificResource('users', address)
            .subscribe(function (resp) {
            _this.user = resp;
            _this.setUserTeam(_this.user);
        });
    };
    UserTeamPageComponent.prototype.setUserTeam = function (user) {
        this.userTeam = user.players;
        // console.log('user team ', this.userTeam)
    };
    UserTeamPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-team-page',
            template: __webpack_require__(/*! ./user-team-page.component.html */ "./src/app/PAGES/user-team-page/user-team-page.component.html"),
            styles: [__webpack_require__(/*! ./user-team-page.component.scss */ "./src/app/PAGES/user-team-page/user-team-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _util_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
            _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]])
    ], UserTeamPageComponent);
    return UserTeamPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/user-team-page.module.ts":
/*!******************************************************!*\
  !*** ./src/app/app-routing/user-team-page.module.ts ***!
  \******************************************************/
/*! exports provided: UserTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTeamPageModule", function() { return UserTeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PAGES_user_team_page_user_team_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PAGES/user-team-page/user-team-page.component */ "./src/app/PAGES/user-team-page/user-team-page.component.ts");
/* harmony import */ var _DETAILS_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DETAILS/user-info/user-info.component */ "./src/app/DETAILS/user-info/user-info.component.ts");
/* harmony import */ var _DETAILS_user_team_user_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DETAILS/user-team/user-team.component */ "./src/app/DETAILS/user-team/user-team.component.ts");







var routes = [
    { path: '', component: _PAGES_user_team_page_user_team_page_component__WEBPACK_IMPORTED_MODULE_4__["UserTeamPageComponent"] }
];
var UserTeamPageModule = /** @class */ (function () {
    function UserTeamPageModule() {
    }
    UserTeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_PAGES_user_team_page_user_team_page_component__WEBPACK_IMPORTED_MODULE_4__["UserTeamPageComponent"], _DETAILS_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"], _DETAILS_user_team_user_team_component__WEBPACK_IMPORTED_MODULE_6__["UserTeamComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], UserTeamPageModule);
    return UserTeamPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-team-page-module.js.map