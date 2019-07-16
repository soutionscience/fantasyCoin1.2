(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-module"],{

/***/ "./src/app/DETAILS/selector/selector.component.html":
/*!**********************************************************!*\
  !*** ./src/app/DETAILS/selector/selector.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  selector works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/DETAILS/selector/selector.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/DETAILS/selector/selector.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RFVEFJTFMvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/DETAILS/selector/selector.component.ts":
/*!********************************************************!*\
  !*** ./src/app/DETAILS/selector/selector.component.ts ***!
  \********************************************************/
/*! exports provided: SelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorComponent", function() { return SelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectorComponent = /** @class */ (function () {
    function SelectorComponent() {
    }
    SelectorComponent.prototype.ngOnInit = function () {
    };
    SelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selector',
            template: __webpack_require__(/*! ./selector.component.html */ "./src/app/DETAILS/selector/selector.component.html"),
            styles: [__webpack_require__(/*! ./selector.component.scss */ "./src/app/DETAILS/selector/selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectorComponent);
    return SelectorComponent;
}());



/***/ }),

/***/ "./src/app/PAGES/transfer/transfer.component.html":
/*!********************************************************!*\
  !*** ./src/app/PAGES/transfer/transfer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"transfer\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"columns\">\r\n      <div class=\"column is-one-quarter\">\r\n       <app-team></app-team>\r\n      </div>\r\n      <div class=\"column\">\r\n        <div class=\"box\">\r\n          <div class=\"columns\">\r\n            <div class=\"column is-one-quarter\">\r\n              <div class=\"money has-text-white\" *ngIf=\"user\">\r\n                <p>Fantasy Coins</p>\r\n                {{tokenService.getTokenCount()}}\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-one-quarter\">\r\n                <div class=\"money has-text-white\">\r\n                  <p>Players Selected</p>\r\n              <p>{{data.getUserPlayerSize()}}/11</p>\r\n  \r\n                </div>\r\n              </div>\r\n              <div class=\"column is-one-quarter\">\r\n                  <div class=\"money has-text-white\" *ngIf=\"user\">\r\n                    <p>Team Value</p>\r\n                   {{user.teamValue}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"column is-one-quarter\">\r\n                    <div class=\"money reset has-text-white\">\r\n                      \r\n                      <button class=\"button\"> reset</button>\r\n                    </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!userTeam\" >\r\n            <div class=\"column spinner button is-loading is-large\"></div>\r\n        </div>\r\n\r\n        <div class=\"box\" *ngIf=\"userTeam\">\r\n         \r\n            <div class=\"pitch\">\r\n            \r\n              <div class=\"columns is-multiline is-centered\">\r\n                  <div class=\"column is-one-quarter\" *ngFor=\"let p of userTeam\">\r\n                  <div class=\"card\" (click)=\"removePlayer(p)\">\r\n                      <header class=\"card-header\">\r\n                          <p class=\"card-header-title\">\r\n                            {{p.web_name |slice: 0:6}}\r\n                          </p>\r\n                          <a (click)=\"removePlayer(p)\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                            <span class=\"icon\">\r\n                                <i  class=\"material-icons\">\r\n                                    cancel</i>\r\n                            </span>\r\n                          </a>\r\n                        </header>\r\n                      <div class=\"card-image\">\r\n                          <figure class=\"image is-96x96 media-center\">\r\n                              <img [src]= \"'../../assets/images/kits/' + p.team_code + '.png' \"\r\n                              alt=\"\">\r\n                          </figure>\r\n                        </div>\r\n                        <div class=\"card-content\"></div>\r\n                        <footer class=\"card-footer\">\r\n                            <p class=\"name\">{{p.web_name}}</p>\r\n                            </footer>\r\n                          <footer class=\"card-footer\">\r\n                              <p class=\"card-footer-item lable\">points:</p>\r\n                              <p class=\"card-footer-item points\">{{p.pointsWeek}}</p>\r\n                              <p class=\"card-footer-item lable\">costs</p>\r\n                              <p class=\"card-footer-item coins\">${{p.now_cost}}</p>\r\n              \r\n                            </footer>\r\n                  </div>\r\n              \r\n              \r\n              \r\n               \r\n                  </div>\r\n                </div>\r\n               \r\n               </div>\r\n        \r\n      </div>\r\n      <div class=\"column\">\r\n          <button \r\n          class=\"button is-large is-fullwidth is-half is-primary\" (click)=\"submit()\"\r\n           [ngClass]=\"{'is-loading': showLoading}\"\r\n           [disabled]=\"!tokenService.enoughTokens() || !data.checkTeamsize() || !data.checkIfTransfers()\">\r\n      \r\n            <span>Submit</span>\r\n          </button>\r\n      \r\n      \r\n</div>\r\n    </div>\r\n   \r\n    </div>\r\n\r\n  </div>\r\n \r\n</div>"

/***/ }),

/***/ "./src/app/PAGES/transfer/transfer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/PAGES/transfer/transfer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transfer {\n  color: black; }\n\n.name {\n  background: #23d160;\n  color: white;\n  padding: 0px;\n  text-align: center;\n  width: 100%; }\n\n.points {\n  color: white;\n  padding: 0px;\n  text-align: center; }\n\n.details {\n  border: #a09e9e solid 1px; }\n\n.card-image {\n  padding: 4px;\n  text-align: center;\n  padding-left: 25%; }\n\n.card-footer-item {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.players {\n  text-align: center; }\n\n.coins {\n  color: gold; }\n\n.card-footer-item {\n  min-width: 4px; }\n\n.card-footer {\n  background-image: url('background.png'); }\n\n.lable {\n  background: white;\n  color: black;\n  font-weight: bold; }\n\n.money {\n  background-image: url('background.png');\n  align-content: center;\n  margin-left: 2px;\n  text-align: center;\n  min-height: 60px;\n  padding: 4px; }\n\n.reset {\n  padding-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVMvdHJhbnNmZXIvQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxQQUdFU1xcdHJhbnNmZXJcXHRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksbUJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUVJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBSUkseUJBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLHVDQUE4RCxFQUFBOztBQUVsRTtFQUNJLGlCQUFpQjtFQUNqQixZQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUNBQThEO0VBQzlELHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QQUdFUy90cmFuc2Zlci90cmFuc2Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2ZlcntcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcbi5uYW1le1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCAyMDksIDk2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb2ludHN7XHJcbiAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgLy8gbWFyZ2luOiA0cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA0cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IHJnYigxNjAsIDE1OCwgMTU4KSBzb2xpZCAxcHhcclxufVxyXG4uY2FyZC1pbWFnZXtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG59XHJcbi5jYXJkLWZvb3Rlci1pdGVte1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLnBsYXllcnN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvaW5ze1xyXG4gICAgY29sb3I6Z29sZDtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJylcclxufVxyXG4uY2FyZC1mb290ZXItaXRlbXtcclxuICAgIG1pbi13aWR0aDogNHB4O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpXHJcbn1cclxuLmxhYmxle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubW9uZXl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5yZXNldHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/PAGES/transfer/transfer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/PAGES/transfer/transfer.component.ts ***!
  \******************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _util_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.service */ "./src/app/util/data.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/remove-player/remove-player.component */ "./src/app/dialogs/remove-player/remove-player.component.ts");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/token.service */ "./src/app/util/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var TransferComponent = /** @class */ (function () {
    function TransferComponent(api, data, auth, dialog, ref, tokenService, router) {
        this.api = api;
        this.data = data;
        this.auth = auth;
        this.dialog = dialog;
        this.ref = ref;
        this.tokenService = tokenService;
        this.router = router;
    }
    TransferComponent.prototype.ngOnInit = function () {
        this.userId = this.auth.getUserAdress();
        this.getUserTeam(this.userId);
        this.showLoading = false;
    };
    TransferComponent.prototype.getUserTeam = function (id) {
        var _this = this;
        this.api.getUserTeam('users', id, 'players')
            .subscribe(function (resp) {
            _this.data.setUserTeam(resp);
            _this.userTeam = _this.data.getPlayers();
            _this.api.getSpecificResource('users', id)
                .subscribe(function (resp) { return _this.user = resp; });
        });
    };
    TransferComponent.prototype.removePlayer = function (g) {
        var _this = this;
        this.dialog.open(_dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_6__["RemovePlayerComponent"], { width: '350px', height: 'auto', data: {
                player: g
            } }).afterClosed().subscribe(function (p) {
            if (p == 'remove') {
                var index = _this.userTeam.indexOf(g);
                _this.data.removePlayers(g);
                _this.tokenService.addTokenCount(parseInt(g.now_cost));
                _this.userTeam = _this.data.getPlayers();
                _this.ref.detectChanges();
            }
        });
    };
    TransferComponent.prototype.submit = function () {
        var _this = this;
        this.showLoading = true;
        var userId = this.auth.getUserId();
        console.log('user id ', userId);
        var tokenCount = this.tokenService.getTokenCount();
        this.api.postUserTeam('users', userId, 'coins', { amount: tokenCount }).subscribe(function (resp) {
            _this.api.postUserTeam('users', userId, 'players', _this.userTeam).subscribe(function (resp) {
                _this.showLoading = false;
                _this.router.navigate(['/leagues']);
            });
        });
    };
    TransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.component.html */ "./src/app/PAGES/transfer/transfer.component.html"),
            styles: [__webpack_require__(/*! ./transfer.component.scss */ "./src/app/PAGES/transfer/transfer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _util_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/transfer.module.ts":
/*!************************************************!*\
  !*** ./src/app/app-routing/transfer.module.ts ***!
  \************************************************/
/*! exports provided: TransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferModule", function() { return TransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _PAGES_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PAGES/transfer/transfer.component */ "./src/app/PAGES/transfer/transfer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _DETAILS_selector_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DETAILS/selector/selector.component */ "./src/app/DETAILS/selector/selector.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.module */ "./src/app/app-routing/shared.module.ts");







var routes = [
    { path: '', component: _PAGES_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_3__["TransferComponent"] }
];
var TransferModule = /** @class */ (function () {
    function TransferModule() {
    }
    TransferModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_PAGES_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_3__["TransferComponent"], _DETAILS_selector_selector_component__WEBPACK_IMPORTED_MODULE_5__["SelectorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], TransferModule);
    return TransferModule;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-module.js.map