(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ranking-module"],{

/***/ "./src/app/PAGES/ranking/ranking.component.html":
/*!******************************************************!*\
  !*** ./src/app/PAGES/ranking/ranking.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ranking works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/PAGES/ranking/ranking.component.scss":
/*!******************************************************!*\
  !*** ./src/app/PAGES/ranking/ranking.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/PAGES/ranking/ranking.component.ts":
/*!****************************************************!*\
  !*** ./src/app/PAGES/ranking/ranking.component.ts ***!
  \****************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RankingComponent = /** @class */ (function () {
    function RankingComponent() {
    }
    RankingComponent.prototype.ngOnInit = function () {
    };
    RankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/PAGES/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.scss */ "./src/app/PAGES/ranking/ranking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/ranking.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-routing/ranking.module.ts ***!
  \***********************************************/
/*! exports provided: RankingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingModule", function() { return RankingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _PAGES_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PAGES/ranking/ranking.component */ "./src/app/PAGES/ranking/ranking.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: '', component: _PAGES_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__["RankingComponent"] }
];
var RankingModule = /** @class */ (function () {
    function RankingModule() {
    }
    RankingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_PAGES_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__["RankingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], RankingModule);
    return RankingModule;
}());



/***/ })

}]);
//# sourceMappingURL=ranking-module.js.map