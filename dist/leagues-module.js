(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leagues-module"],{

/***/ "./src/app/DETAILS/user-league/user-league.component.html":
/*!****************************************************************!*\
  !*** ./src/app/DETAILS/user-league/user-league.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-league\">\r\n  <div class=\"box\">\r\n    <p class=\"subtitle\">weekendLeague</p>\r\n   <table class=\"table\">\r\n  <thead>\r\n       <tr>\r\n         <th>#</th>\r\n         <th>Username</th>\r\n         <th>Points</th>\r\n         <!-- <th>teamCost</th> -->\r\n       </tr>\r\n     </thead>\r\n     <tbody>\r\n      \r\n    <tr *ngFor=\"let users of league.teams; let i = index\" [ngClass]=\"{'is-selected': users._id == auth.getUserId()}\">\r\n      <td>{{i+1}}</td>\r\n       <td>{{users.username}}</td>\r\n       <td>{{users.teamPoints}}</td>\r\n    </tr>\r\n     </tbody>\r\n   </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/DETAILS/user-league/user-league.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/DETAILS/user-league/user-league.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RFVEFJTFMvdXNlci1sZWFndWUvdXNlci1sZWFndWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/DETAILS/user-league/user-league.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/DETAILS/user-league/user-league.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLeagueComponent", function() { return UserLeagueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");



var UserLeagueComponent = /** @class */ (function () {
    function UserLeagueComponent(auth) {
        this.auth = auth;
    }
    UserLeagueComponent.prototype.ngOnInit = function () {
        console.log('leagues ', this.league);
        console.log('authSerive ', this.auth.getUserId());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserLeagueComponent.prototype, "league", void 0);
    UserLeagueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-league',
            template: __webpack_require__(/*! ./user-league.component.html */ "./src/app/DETAILS/user-league/user-league.component.html"),
            styles: [__webpack_require__(/*! ./user-league.component.scss */ "./src/app/DETAILS/user-league/user-league.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserLeagueComponent);
    return UserLeagueComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/leagues.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-routing/leagues.module.ts ***!
  \***********************************************/
/*! exports provided: LeaguesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaguesModule", function() { return LeaguesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leagues_leagues_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../leagues/leagues.component */ "./src/app/leagues/leagues.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _DETAILS_user_league_user_league_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DETAILS/user-league/user-league.component */ "./src/app/DETAILS/user-league/user-league.component.ts");






var routes = [
    { path: '', component: _leagues_leagues_component__WEBPACK_IMPORTED_MODULE_3__["LeaguesComponent"] }
];
var LeaguesModule = /** @class */ (function () {
    function LeaguesModule() {
    }
    LeaguesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_leagues_leagues_component__WEBPACK_IMPORTED_MODULE_3__["LeaguesComponent"], _DETAILS_user_league_user_league_component__WEBPACK_IMPORTED_MODULE_5__["UserLeagueComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], LeaguesModule);
    return LeaguesModule;
}());



/***/ }),

/***/ "./src/app/leagues/leagues.component.html":
/*!************************************************!*\
  !*** ./src/app/leagues/leagues.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"leagues\">\r\n   <div class=\"container\" *ngIf=\"showLoading\">\r\n\r\n    <div class=\"column spinner button is-loading is-large\"></div>\r\n   </div>\r\n  <div class=\"container\">\r\n    <div class=\"competitions\">\r\n      \r\n      <div class=\"box\" *ngIf=\"!showLoading\">\r\n         <div class=\"compe\">\r\n          <div class=\" columns\" >\r\n              <table class=\"table  is-fullwidth is-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Competion</th>\r\n                      <th>Prize</th>\r\n                      <th>Players</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody *ngIf=\"noCompetitions\">{{noCompetitions}}</tbody>\r\n                  <tbody  *ngIf=\"!noCompetitions\">\r\n                    <tr *ngFor=\"let c of competitions; let i = index;\">\r\n                      <td>{{c.name}}</td>\r\n                      <td>{{c.prizeMoney}} Fantasy Coins</td>\r\n                      <td>{{c.playerCount}}/{{c.maxPlayers}}</td>\r\n                      <td class=\"field is-grouped\"> <div class=\"control\">\r\n                          <button class=\"button is-primary\" (click)=\"joinCompe(c.etherId)\" [disabled]= \"checkIfJoined(i)\">{{joinButtonText}}</button>\r\n                      </div>\r\n                        <div class=\"control\">\r\n                            <button class=\"button is-link\" *ngIf=\"checkIfJoined(i)\" (click)=\"view(c._id)\">View</button>\r\n                        </div>\r\n                        \r\n                      </td>\r\n                      <td></td>\r\n                    </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n \r\n         \r\n\r\n\r\n\r\n         </div>\r\n      </div>\r\n     \r\n    </div>\r\n    <div class=\"columns\">\r\n      <div class=\"column is-one-quarter\">\r\n          <div class=\"user-league\">\r\n              <app-user-league [league]=\"leagueTeam\" *ngIf=\"leagueTeam\"></app-user-league>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div> "

/***/ }),

/***/ "./src/app/leagues/leagues.component.scss":
/*!************************************************!*\
  !*** ./src/app/leagues/leagues.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leagues {\n  color: black; }\n\n.user-league {\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZ3Vlcy9DOlxcVXNlcnNcXFNvbHV0XFxHb29nbGUgRHJpdmVcXHdvcmsyXFxwcm9qZWN0c1xcZmFudGFzeUNvaW4xLjIvc3JjXFxhcHBcXGxlYWd1ZXNcXGxlYWd1ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxZQUNBLEVBQUE7O0FBQ0E7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sZWFndWVzL2xlYWd1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZ3Vlc3tcclxuY29sb3I6IGJsYWNrXHJcbn1cclxuLnVzZXItbGVhZ3Vle1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/leagues/leagues.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leagues/leagues.component.ts ***!
  \**********************************************/
/*! exports provided: LeaguesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaguesComponent", function() { return LeaguesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util.service */ "./src/app/util/util.service.ts");






var LeaguesComponent = /** @class */ (function () {
    function LeaguesComponent(web3Service, ref, api, auth, util) {
        this.web3Service = web3Service;
        this.ref = ref;
        this.api = api;
        this.auth = auth;
        this.util = util;
        this.gas = '1000000';
    }
    LeaguesComponent.prototype.ngOnInit = function () {
        this.showLoading = false;
        this.dissabled = false;
        this.competitions = [];
        this.initAllCompetitons();
        this.joinButtonText = 'join';
        this.coinBase = this.auth.getUserAdress();
    };
    LeaguesComponent.prototype.initAllCompetitons = function () {
        var _this = this;
        this.showLoading = true;
        this.api.getResource('competitions')
            .subscribe(function (resp) {
            if (resp.length == 0)
                _this.noCompetitions = "Sorry there are no competitions running at the moment, please try again later";
            _this.competitions = resp;
            //  this.leagueTeam=resp[0].teams
            //  console.log('competitions ', this.competitions);
            //  console.log('leagues ', this.leagueTeam)
            _this.showLoading = false;
        });
    };
    LeaguesComponent.prototype.joinCompe = function (index) {
        var _this = this;
        this.showLoading = true;
        this.dissabled = true;
        this.showLoading = false;
        this.api.postUserTeam('competitions', index, 'teams', { "userId": this.auth.getUserId() })
            .subscribe(function (resp) {
            console.log('entered competitions ', resp);
            _this.web3Service.joinCompe(_this.coinBase, _this.gas, index)
                .subscribe(function (resp) { return console.log('successfully joined league ', resp); });
        });
    };
    LeaguesComponent.prototype.checkIfJoined = function (index) {
        if (this.util.isUserInLeague(this.competitions[index].teams, this.auth.getUserAdress())) {
            this.joinButtonText = 'joined';
            return true;
        }
        else {
            return false;
        }
    };
    LeaguesComponent.prototype.view = function (leagueId) {
        var _this = this;
        console.log('league id ', leagueId);
        this.api.getSpecificResource('competitions', leagueId)
            .subscribe(function (resp) {
            console.log('responce ', resp);
            _this.leagueTeam = resp;
        });
    };
    LeaguesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leagues',
            template: __webpack_require__(/*! ./leagues.component.html */ "./src/app/leagues/leagues.component.html"),
            styles: [__webpack_require__(/*! ./leagues.component.scss */ "./src/app/leagues/leagues.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _util_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], LeaguesComponent);
    return LeaguesComponent;
}());



/***/ }),

/***/ "./src/app/util/util.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/util.service.ts ***!
  \**************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service.service */ "./src/app/util/api-service.service.ts");



var UtilService = /** @class */ (function () {
    function UtilService(api) {
        this.api = api;
        this.teams = [];
    }
    //find user is in league
    UtilService.prototype.isUserInLeague = function (teams, userId) {
        if (teams.map(function (item) { return item.address; }).indexOf(userId) > -1) {
            //  console.log('user in league');
            return true;
        }
        else {
            return false;
        }
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], UtilService);
    return UtilService;
}());



/***/ })

}]);
//# sourceMappingURL=leagues-module.js.map