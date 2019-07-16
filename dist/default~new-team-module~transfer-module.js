(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~new-team-module~transfer-module"],{

/***/ "./src/app/app-routing/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/app/app-routing/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _pitch_pitch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pitch/pitch.component */ "./src/app/pitch/pitch.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"], _pitch_pitch_component__WEBPACK_IMPORTED_MODULE_4__["PitchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"], _pitch_pitch_component__WEBPACK_IMPORTED_MODULE_4__["PitchComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/pitch/pitch.component.html":
/*!********************************************!*\
  !*** ./src/app/pitch/pitch.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"choose\">\r\n    <header class=\"card-header myTitle\">\r\n<p class=\"\">Build your team</p>\r\n    </header>\r\n\r\n    <div class=\"headings\">\r\n      <div class=\"columns\">\r\n        <div class=\"column is-one-quarter \">\r\n         <div class=\"money has-text-white\">\r\n           <p>fantasy coins</p>\r\n           <p class=\"coins\"> {{tokenService.getTokenCount()}}</p>\r\n         </div>\r\n        </div>\r\n        <div class=\"column is-one-quarter\">\r\n            <div class=\"money has-text-white\">\r\n                <p>Players Selected</p>\r\n                <div>\r\n                  <span>{{playerData.getUserPlayerSize()}}/11</span>\r\n                  <!-- <p>/11</p> -->\r\n                </div>\r\n                \r\n              </div>\r\n           </div>\r\n           <div class=\"column is-one-quarter \">\r\n              <div class=\"money has-text-white\">\r\n               <button class=\"button\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n           </div>\r\n           <div class=\"column is-one-quarter\">\r\n               <div class=\"box has-background-danger\" >\r\n                 <p class=\"subtitle -3 has-text-white\">100</p>\r\n               </div>\r\n              </div>\r\n\r\n      </div>\r\n    </div>\r\n<div class=\"pitch\">\r\n<div *ngIf=\"!teamPlayers\" class=\"empty\">\r\n  <img src=\"../../assets/images/design/add.png\" alt=\"\" height=\"auto\" width=\"150px\">\r\n</div>\r\n\r\n\r\n <div class=\"columns is-multiline\">\r\n  \r\n   <div class=\"column is-one-quarter is-centered\" *ngFor=\"let p of teamPlayers\">\r\n      <div class=\"card\">\r\n          <header class=\"card-header\">\r\n              <p class=\"card-header-title\">\r\n                {{p.web_name |slice: 0:10}}\r\n              </p>\r\n              <a (click)=\"removePlayer(p)\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                <span class=\"icon\">\r\n                    <i  class=\"material-icons\">\r\n                        cancel</i>\r\n                </span>\r\n              </a>\r\n            </header>\r\n          <div class=\"card-image\">\r\n              <figure class=\"image is-96x96 media-center\">\r\n                  <img [src]= \"'../../assets/images/kits/' + p.team_code + '.png' \"\r\n                  alt=\"\">\r\n              </figure>\r\n            </div>\r\n            <div class=\"card-content\"></div>\r\n            <footer class=\"card-footer\">\r\n                <p class=\"name\">{{p.web_name}}</p>\r\n                </footer>\r\n              <footer class=\"card-footer\">\r\n                <p class=\"card-footer-item lable\">points:</p>\r\n                <p class=\"card-footer-item points\">{{p.pointsWeek}}</p>\r\n                <p class=\"card-footer-item lable\">costs</p>\r\n                <p class=\"card-footer-item coins\">${{p.now_cost}}</p>\r\n  \r\n                </footer>\r\n      </div>\r\n   </div>\r\n  \r\n </div>\r\n\r\n</div>\r\n<div class=\"column\">\r\n    <button \r\n    class=\"button is-large is-fullwidth is-half is-primary\" (click)=\"submit()\"\r\n     [ngClass]=\"{'is-loading': showLoading}\"\r\n     [disabled]=\"!tokenService.enoughTokens() || !playerData.checkTeamsize()\">\r\n\r\n      <span>Submit</span>\r\n    </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pitch/pitch.component.scss":
/*!********************************************!*\
  !*** ./src/app/pitch/pitch.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pitch {\n  padding: 4px;\n  margin: 4px; }\n\n.confirm {\n  margin-top: 4px; }\n\n.myTitle {\n  background-image: url('background.png');\n  color: white;\n  margin-bottom: 8px;\n  padding: 4px; }\n\n.box {\n  height: 50px;\n  margin: 2px;\n  margin-right: 2px; }\n\n.card-image {\n  padding: 4px;\n  text-align: center;\n  padding-left: 25%; }\n\n.card-footer-item {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.players {\n  text-align: center; }\n\n.name {\n  background: #23d160;\n  color: white;\n  padding: 0px;\n  text-align: center;\n  width: 100%; }\n\n.points {\n  background-image: url('background.png');\n  color: white;\n  padding: 0px;\n  text-align: center; }\n\n.details {\n  border: #a09e9e solid 1px; }\n\n.material-icons {\n  color: red; }\n\n.money {\n  background-image: url('background.png');\n  align-content: center;\n  margin-left: 2px;\n  text-align: center;\n  min-height: 50px;\n  padding: 4px; }\n\n.coins {\n  color: gold;\n  background-image: url('background.png'); }\n\n.card-footer-item {\n  min-width: 4px; }\n\n.card-footer {\n  background-image: url('background.png'); }\n\n.lable {\n  background: white;\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl0Y2gvQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxwaXRjaFxccGl0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNFLHVDQUEyRDtFQUMzRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFNZDtFQUVBLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksbUJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHVDQUEyRDtFQUMzRCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUlJLHlCQUFvQyxFQUFBOztBQUV4QztFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLHVDQUEyRDtFQUMzRCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVU7RUFDVix1Q0FBMkQsRUFBQTs7QUFFL0Q7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0EsdUNBQTJELEVBQUE7O0FBRTNEO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BpdGNoL3BpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpdGNoe1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5jb25maXJte1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG5cclxuLm15VGl0bGV7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG59XHJcbi5jb2x1bW4ge1xyXG4gIC8vIHBhZGRpbmc6IDRweDtcclxufVxyXG4uYm94e1xyXG4vLyB3aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5tYXJnaW46IDJweDtcclxubWFyZ2luLXJpZ2h0OjJweDtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2V7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxufVxyXG4uY2FyZC1mb290ZXItaXRlbXtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5wbGF5ZXJze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYW1le1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAyMDksIDk2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb2ludHN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIC8vIG1hcmdpbjogNHB4O1xyXG4gICAgLy8gcGFkZGluZzogNHB4O1xyXG4gICAgLy8gcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiByZ2IoMTYwLCAxNTgsIDE1OCkgc29saWQgMXB4XHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4ubW9uZXl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5jb2luc3tcclxuICAgIGNvbG9yOmdvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcclxufVxyXG4uY2FyZC1mb290ZXItaXRlbXtcclxuICAgIG1pbi13aWR0aDogNHB4O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XHJcbn1cclxuLmxhYmxle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pitch/pitch.component.ts":
/*!******************************************!*\
  !*** ./src/app/pitch/pitch.component.ts ***!
  \******************************************/
/*! exports provided: PitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchComponent", function() { return PitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/remove-player/remove-player.component */ "./src/app/dialogs/remove-player/remove-player.component.ts");
/* harmony import */ var _util_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/data.service */ "./src/app/util/data.service.ts");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/token.service */ "./src/app/util/token.service.ts");









//import { faCoffee } from '@fortawesome/free-solid-svg-core';
var PitchComponent = /** @class */ (function () {
    function PitchComponent(apiService, auth, router, dialog, playerData, tokenService, ref) {
        this.apiService = apiService;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.playerData = playerData;
        this.tokenService = tokenService;
        this.ref = ref;
    }
    PitchComponent.prototype.ngOnInit = function () {
        this.showLoading = false;
        this.incomplete = true;
        //console.log('team players ', this.teamPlayers);
        this.buttonText = '';
        this.playerCount = this.teamPlayers.length;
        this.getTokenCount();
        console.log('token count ', this.tokenCount);
    };
    PitchComponent.prototype.getTokenCount = function () {
        var _this = this;
        var userAddress = this.auth.getUserAdress();
        this.tokenService.getTokenBalance(userAddress)
            .subscribe(function (resp) { return _this.tokenCount = resp; });
        this.ref.detectChanges();
    };
    PitchComponent.prototype.completeTeam = function () {
        this.playerCount = this.teamPlayers.length;
        //this.ref.detectChanges()
        return true;
    };
    PitchComponent.prototype.complete = function () {
        if (this.playerData.getPlayers().length <= 11) {
            this.buttonText = 'incomplete';
            return true;
        }
        else {
            this.buttonText = 'submit';
            this.incomplete = false;
            this.ref.detectChanges();
            return false;
        }
    };
    PitchComponent.prototype.removePlayer = function (g) {
        var _this = this;
        console.log('clicking');
        this.dialog.open(_dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_6__["RemovePlayerComponent"], { width: '350px', height: 'auto', data: {
                player: g
            } }).afterClosed().subscribe(function (p) {
            if (p == 'remove') {
                var index = _this.teamPlayers.indexOf(g);
                //this.teamPlayers.splice(g, 1); //remove player
                _this.tokenService.addTokenCount(g.now_cost);
                _this.playerData.removePlayers(g);
                _this.teamPlayers = _this.playerData.getPlayers();
                console.log(_this.teamPlayers.length);
                _this.ref.detectChanges();
            }
        });
    };
    PitchComponent.prototype.reset = function () {
        this.playerData.reset();
    };
    PitchComponent.prototype.submit = function () {
        var _this = this;
        this.showLoading = true;
        var userId = this.auth.getUserId();
        console.log('user id ', userId);
        var tokenCount = this.tokenService.getTokenCount();
        this.apiService.postUserTeam('users', userId, 'coins', { amount: tokenCount }).subscribe(function (resp) {
            _this.apiService.postUserTeam('users', userId, 'players', _this.teamPlayers).subscribe(function (resp) {
                _this.showLoading = false;
                _this.router.navigate(['/leagues']);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PitchComponent.prototype, "teamPlayers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PitchComponent.prototype, "user", void 0);
    PitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pitch',
            template: __webpack_require__(/*! ./pitch.component.html */ "./src/app/pitch/pitch.component.html"),
            styles: [__webpack_require__(/*! ./pitch.component.scss */ "./src/app/pitch/pitch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _util_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _util_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PitchComponent);
    return PitchComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showLoading\">\r\n\r\n      <!-- <div class=\"column spinner button is-loading is-large\"></div> -->\r\n      <!-- <div class=\"my-loading\"></div> -->\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"teams\">\r\n        <div class=\"container\">\r\n            <div class=\"columns\">\r\n                <div class=\"column is-one-quarter\">\r\n                  <div class=\"card\">\r\n                      <nav class=\"panel\">\r\n                        <div class=\"panel-heading is-primary\"><p> Select Players</p> </div>\r\n                        <div class=\"panel-block\">\r\n                          Choose from a club\r\n                        </div>\r\n                        <div class=\"panel-block\">\r\n                            <div class=\"navbar-item has-dropdown is-hoverable button\">\r\n                                <a class=\"navbar-link \" routerLink='/teams'>\r\n                                 Select Team\r\n                                </a>\r\n                                <div class=\"navbar-dropdown is-boxed\" >\r\n                                    <a *ngFor=\"let t of teams\" class=\"navbar-item\" (click)=\" selectTeam(t.code)\">\r\n                                     <p> {{t.name}}</p>\r\n                                  \r\n                                    </a>\r\n                                  </div>\r\n                              </div>\r\n      \r\n                        </div>\r\n                        <div class=\"goalkeepers\">\r\n                            <div class=\"panel-block heading has-background-warning\">\r\n                                <span>\r\n                                    <div class=\"heading is-warning\">Goal Keepers</div>\r\n                                </span>\r\n      \r\n      \r\n                              </div>\r\n                              <div class=\"panel-block is-small\" >\r\n                                <div *ngIf=\"!SpecialKeepers\" class=\"my-loading\"></div>\r\n                                  <table class=\"table is-striped is-narrow is-hoverable is-fullwidth\">\r\n                                    <tr *ngIf=\"SpecialKeepers\" class=\"is-size-7\">\r\n                                      <th class=\"jersey\"></th>\r\n                                      <th>Name</th>\r\n                                      <th>Points</th>\r\n                                      <th>$</th>\r\n                                    </tr>\r\n                                    <tr class=\"is-hoverable\" [ngClass]=\"data.checkIfAlreadyInTeam(g)? 'is-selected':'not-selected'\"  (click)=\"selectPlayer(g)\" *ngFor=\"let g of SpecialKeepers\">\r\n                                      <td class=\"jersey\"><img [src]= \" '../../assets/images/logos/number/'+ g.team_code + '.png' \"\r\n                                        height=\"auto\" width=\"15\"></td>\r\n                                      <td><p class=\"is-size-7\">{{g.web_name}}</p></td>\r\n                                      <td><p class=\"is-size-7\">${{g.pointsWeek}}</p></td>\r\n                                      <td><p class=\"is-size-7\">{{g.now_cost}}</p></td>\r\n                                    </tr>\r\n                                  </table>\r\n                              </div>\r\n      \r\n                        </div>\r\n                        <div class=\"defenders\">\r\n                            <div class=\"panel-block heading has-background-primary\">\r\n                                <span>\r\n                                    <div class=\"heading\">Defenders</div>\r\n                                </span>\r\n      \r\n      \r\n                              </div>\r\n                              <div class=\"panel-block is-small\" >\r\n                                <div *ngIf=\"!SpecialDefs\" class=\"my-loading\"></div>\r\n                             <table class=\"table is-striped is-narrow is-hoverable is-fullwidth\">\r\n                                <tr *ngIf=\"SpecialDefs\" class=\"is-size-7\">\r\n                                    <th class=\"jersey\"></th>\r\n                                    <th>Name</th>\r\n                                    <th>Points</th>\r\n                                    <th>$</th>\r\n                                  </tr>\r\n                               <tr class=\"is-hoverable\" [ngClass]=\"data.checkIfAlreadyInTeam(d)? 'is-selected':'not-selected'\" (click)=\"selectPlayer(d)\" *ngFor=\"let d of SpecialDefs\">\r\n                                  <td class=\"jersey\"><img [src]= \" '../../assets/images/logos/number/'+ d.team_code + '.png' \"\r\n                                    height=\"auto\" width=\"15\"></td>\r\n                               \r\n                                 <td>{{d.web_name}}</td>\r\n                                 <td>{{d.pointsWeek}}</td>\r\n                                 <td>{{d.now_cost}}</td>\r\n                               </tr>\r\n                             </table>\r\n                         </div>\r\n      \r\n                        </div>\r\n                        <div class=\"mids\">\r\n                            <div class=\"panel-block heading has-background-danger has-text-white\">\r\n                                <span>\r\n                                    <div class=\"heading is-warning\">Midfielders</div>\r\n                                </span>\r\n      \r\n      \r\n                              </div>\r\n                              <div class=\"panel-block is-small\"  >\r\n                                <!-- <div *ngIf=\"!SpecialMids\" class=\"button is-large is-loading  is-danger is-outlined\">Loading</div> -->\r\n                                <div *ngIf=\"!SpecialMids\" class=\"my-loading\"></div>\r\n                             <table class=\"table is-striped is-narrow is-hoverable is-fullwidth\">\r\n                                <tr *ngIf=\"SpecialMids\"  class=\"is-size-7 \">\r\n                                    <th class=\"jersey\"></th>\r\n                                    <th>Name</th>\r\n                                    <th>Points</th>\r\n                                    <th>$</th>\r\n                                  </tr> \r\n                              <tr class=\"is-hoverable\" [ngClass]=\"data.checkIfAlreadyInTeam(d)? 'is-selected':'not-selected'\" (click)=\"selectPlayer(d)\" *ngFor=\"let d of SpecialMids\">\r\n                                 \r\n                                  <td class=\"jersey\"><img [src]= \" '../../assets/images/logos/number/'+ d.team_code + '.png' \"\r\n                                    height=\"auto\" width=\"15\"></td>\r\n                                 <td>{{d.web_name}}</td>\r\n                                 <td>{{d.pointsWeek}}</td>\r\n                                 <td>{{d.now_cost}}</td>\r\n                               </tr>\r\n                             </table>\r\n                         </div>\r\n      \r\n                        </div>\r\n      \r\n      \r\n      \r\n                       </nav>\r\n                       <div class=\"Attackers\">\r\n                          <div class=\"panel-block heading has-background-info has-text-white\">\r\n                              <span>\r\n                                  <div class=\"heading is-warning\">Attackers</div>\r\n                              </span>\r\n      \r\n      \r\n                            </div>\r\n                            <div class=\"panel-block is-small\">\r\n                              <div *ngIf=\"!SpecialMids\" class=\"my-loading\"></div>\r\n                           <table class=\"table is-striped is-narrow is-hoverable is-fullwidth\">\r\n                              <tr *ngIf=\"SpecialAttacks\" class=\"is-size-7\">\r\n                                  <th class=\"jersey\"></th>\r\n                                  <th>Name</th>\r\n                                  <th>Points</th>\r\n                                  <th>$</th>\r\n                                </tr> \r\n                            <tr class=\"is-hoverable\" [ngClass]=\"data.checkIfAlreadyInTeam(d)? 'is-selected':'not-selected'\" (click)=\"selectPlayer(d)\" *ngFor=\"let d of SpecialAttacks\">\r\n                                <td class=\"jersey\"><img [src]= \" '../../assets/images/logos/number/'+ d.team_code + '.png' \"\r\n                                  height=\"auto\" width=\"15\"></td>\r\n                              \r\n                               <td>{{d.web_name}}</td>\r\n                               <td>{{d.pointsWeek}}</td>\r\n                               <td>{{d.now_cost}}</td>\r\n                             </tr>\r\n                           </table>\r\n                       </div>\r\n      \r\n                      </div>\r\n      \r\n      \r\n                  </div>\r\n      \r\n                </div>\r\n      \r\n            \r\n              </div>\r\n      \r\n        </div>\r\n      \r\n      </div>\r\n      "

/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teams {\n  /* // margin-top: 8px; */\n  padding: 8px; }\n\n.bg {\n  background-color: white;\n  border: 0.5px solid grey;\n  border-radius: 0.5%;\n  min-height: 400px;\n  padding: 8px; }\n\n.pitch {\n  /* // background: url('../../assets/images/pitch2.png');\r\n    // height:500px;\r\n    // width: 300px;\r\n    // background-repeat: no-repeat;\r\n    padding: 10px; */ }\n\n.panel-heading {\n  background: url('background.png');\n  color: white; }\n\n.heading {\n  padding: 4px;\n  width: 100%;\n  color: black; }\n\n.myplayers {\n  text-align: center; }\n\n.jersey {\n  background: white; }\n\n.name {\n  text-align: center; }\n\n.points {\n  text-align: center; }\n\n.cost {\n  text-align: center;\n  background-color: red; }\n\ntable {\n  font-size: 0.75em; }\n\n.select {\n  font-size: 0.75em; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9DOlxcVXNlcnNcXFNvbHV0XFxHb29nbGUgRHJpdmVcXHdvcmsyXFxwcm9qZWN0c1xcZmFudGFzeUNvaW4xLjIvc3JjXFxhcHBcXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBSUEsWUFBWSxFQUFBOztBQUtoQjtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0k7Ozs7b0JDSGdCLEVET0M7O0FBRXJCO0VBQ0UsaUNBQXFEO0VBQ3JELFlBQVksRUFBQTs7QUFHZDtFQUVBLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBRUUsaUJBQWdCLEVBQUE7O0FBSWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1ze1xyXG4gICAgLyogLy8gbWFyZ2luLXRvcDogOHB4OyAqL1xyXG5cclxuICAgIC8vaGVpZ2h0OiA0MDBweDtcclxuICAgIC8vIGNvbG9yOnJlZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIFxyXG4gICBcclxuXHJcbn1cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjUlO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcbi5waXRjaHtcclxuICAgIC8qIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9waXRjaDIucG5nJyk7XHJcbiAgICAvLyBoZWlnaHQ6NTAwcHg7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogMTBweDsgKi9cclxufVxyXG4ucGFuZWwtaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ1NztcclxucGFkZGluZzogNHB4O1xyXG53aWR0aDogMTAwJTtcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbi5teXBsYXllcnN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5qZXJzZXl7XHJcblxyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4ubmFtZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG4ucG9pbnRze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29zdHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbnRhYmxle1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG59XHJcbi5zZWxlY3R7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuIiwiLnRlYW1zIHtcbiAgLyogLy8gbWFyZ2luLXRvcDogOHB4OyAqL1xuICBwYWRkaW5nOiA4cHg7IH1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDhweDsgfVxuXG4ucGl0Y2gge1xuICAvKiAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGl0Y2gyLnBuZycpO1xyXG4gICAgLy8gaGVpZ2h0OjUwMHB4O1xyXG4gICAgLy8gd2lkdGg6IDMwMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICovIH1cblxuLnBhbmVsLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCIpO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLmhlYWRpbmcge1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLm15cGxheWVycyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uamVyc2V5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnBvaW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY29zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cblxuLnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/remove-player/remove-player.component */ "./src/app/dialogs/remove-player/remove-player.component.ts");
/* harmony import */ var _util_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/data.service */ "./src/app/util/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/token.service */ "./src/app/util/token.service.ts");



// import { Web3Service } from '../services/web3.service';





var TeamComponent = /** @class */ (function () {
    function TeamComponent(apiService, ref, dialog, data, matSnackBar, tokenService) {
        this.apiService = apiService;
        this.ref = ref;
        this.dialog = dialog;
        this.data = data;
        this.matSnackBar = matSnackBar;
        this.tokenService = tokenService;
        /// this component displays team and sends selected team to server
        this.playerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TeamComponent.prototype.ngOnInit = function () {
        //  console.log('init')
        this.showLoading = true;
        this.getAllPlayers();
        this.getTeams();
        this.teamPlayers = [];
        this.testPlayers = [];
        this.selected = false;
        this.ref.detectChanges();
    };
    TeamComponent.prototype.getAllPlayers = function () {
        var _this = this;
        this.apiService.getResource('players')
            .subscribe(function (resp) {
            _this.allPlayers = resp;
            _this.showLoading = false;
            _this.filterBYPosition(_this.allPlayers);
        }, function (error) {
            console.log('loading error');
        });
    };
    TeamComponent.prototype.selectTeam = function (t) {
        var _this = this;
        this.apiService.getTeams('players', t).subscribe(function (resp) {
            _this.allPlayers = resp;
            _this.filterByTeam(_this.allPlayers);
            _this.ref.detectChanges();
        });
    };
    TeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.apiService.getResource('teams')
            .subscribe(function (resp) { return _this.teams = resp; });
    };
    //filter by position sort and assing to special
    TeamComponent.prototype.filterBYPosition = function (l) {
        this.goalKeepers = this.filterList(l, 1);
        this.defenders = this.filterList(l, 2);
        this.mids = this.filterList(l, 3);
        this.attackers = this.filterList(l, 4);
        this.goalKeepers = this.pointsTotalSort(this.goalKeepers);
        this.defenders = this.pointsTotalSort(this.defenders);
        this.mids = this.pointsTotalSort(this.mids);
        this.attackers = this.pointsTotalSort(this.attackers);
        this.SpecialKeepers = this.goalKeepers.slice(0, 3);
        this.SpecialDefs = this.defenders.slice(0, 6);
        this.SpecialMids = this.mids.slice(0, 6);
        this.SpecialAttacks = this.attackers.slice(0, 6);
    };
    TeamComponent.prototype.filterByTeam = function (l) {
        this.goalKeepers = this.filterList(l, 1);
        this.defenders = this.filterList(l, 2);
        this.mids = this.filterList(l, 3);
        this.attackers = this.filterList(l, 4);
        this.SpecialKeepers = this.pointsTotalSort(this.goalKeepers);
        this.SpecialDefs = this.pointsTotalSort(this.defenders);
        this.SpecialMids = this.pointsTotalSort(this.mids);
        this.SpecialAttacks = this.pointsTotalSort(this.attackers);
    };
    //filter by position
    TeamComponent.prototype.filterList = function (list, id) {
        var myElement = [];
        list.forEach(function (element) {
            if (element.position == id) {
                myElement.push(element);
            }
        });
        return myElement;
    };
    //sort with pointsTotal
    TeamComponent.prototype.pointsTotalSort = function (list) {
        return list.sort(function (a, b) { return b.pointsTotal - a.pointsTotal; });
    };
    TeamComponent.prototype.selectPlayer = function (g) {
        var _this = this;
        var length = this.data.getPlayers();
        if (this.data.getPlayers().length >= 11) {
            console.log('team already full');
            this.setStatus('you have already selected 11 players');
        }
        else {
            if (this.data.checkIfAlreadyInTeam(g)) { //check if player is in team and start dialog to remove
                console.log('checking if already in team ', this.data.checkIfAlreadyInTeam(g));
                this.dialog.open(_dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_4__["RemovePlayerComponent"], { width: '350px', height: 'auto', data: {
                        player: g
                    } }).afterClosed().subscribe(function (p) {
                    if (p == 'remove') {
                        var index = _this.teamPlayers.indexOf(g);
                        //this.teamPlayers.splice(index, 1); //remove player
                        _this.data.removePlayers(g);
                        _this.tokenService.addTokenCount(parseInt(g.now_cost));
                        _this.teamPlayers = _this.data.getPlayers();
                        _this.ref.detectChanges();
                    }
                });
            }
            else {
                console.log('now costs ', g);
                this.playerSelected.emit(g);
                this.tokenService.reduceTokenCount(g.now_cost);
                this.data.addPlayers(g);
                this.teamPlayers = this.data.getPlayers();
                console.log('team players ', this.teamPlayers);
                // this.teamPlayers.push(me)
            }
        }
    };
    TeamComponent.prototype.checkIfPlayerisSelected = function (p) {
        var team = this.data.getPlayers();
        //if(this.teamPlayers.indexOf(p)> -1){
        if (team.indexOf(p) > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    TeamComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 4000 });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamComponent.prototype, "playerSelected", void 0);
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _util_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~new-team-module~transfer-module.js.map