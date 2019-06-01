(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"button\" value=\"aggiorna\">\n<app-lista></app-lista>\n<app-users></app-users>\n<app-test></app-test>\n\n -->\n\n <app-view1></app-view1>\n <app-view2></app-view2>\n <app-view3></app-view3>\n \n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lista/lista.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lista/lista.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let u of utenti\" class=\"col-3 lista \" (click)=\"pushUser(u)\" >\n<p>{{u.id}}</p>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "qwisjdgasjhdgkasgdkgaskdcgqakxgakxcgkqsdg\n\n<div class=\"dettaglio\">\n <p> {{user.name}}</p>\n <p>{{user.surname}}</p>\n <p>{{user.age}}</p>\n <p> {{user.enabled}}</p>\n <input type=\"text\" name=\"nome\" id=\"nome\" [(ngModel)]=\"user.name\">\n <input type=\"button\" (click)=\"delete(user.id)\" value=\"DELETE\">\n <input type=\"button\" (click)=\"add()\" value=\"insert\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view1/view1.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view1/view1.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n<h1>\n  view1\n</h1>\n<p>aggiorna solo premendo il pulsante</p>\n<input type=\"text\" name=\"view1\" id=\"view1\" [(ngModel)]=\"data\" >\n<input type=\"button\" (click)=\"update()\" value=\"AGGIORNA\">\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view2/view2.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view2/view2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\" >\n  <h1>\n    view2\n  </h1>\n  <p>emette il segnale ogni volta che digito una lettera</p>\n  <input type=\"text\" name=\"view2\" id=\"view2\"(keyup)=\"ciccio()\" [(ngModel)]=\"data\" >\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view3/view3.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view3/view3.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\" (click)=\"update(data)\" (change)=\"updateRequest()\" >\n  <h1>\n    view3\n  </h1>\n  <p>aggiorna dopo la pressione del tasto INVIO</p>\n  <input type=\"text\" name=\"view3\" id=\"view3\" [(ngModel)]=\"data\"  >\n  \n  </div>"

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aggiorna.service.ts":
/*!*************************************!*\
  !*** ./src/app/aggiorna.service.ts ***!
  \*************************************/
/*! exports provided: AggiornaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggiornaService", function() { return AggiornaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AggiornaService = /** @class */ (function () {
    function AggiornaService() {
        this.syncRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AggiornaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AggiornaService);
    return AggiornaService;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lista/lista.component */ "./src/app/lista/lista.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view1/view1.component */ "./src/app/view1/view1.component.ts");
/* harmony import */ var _view2_view2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view2/view2.component */ "./src/app/view2/view2.component.ts");
/* harmony import */ var _view3_view3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view3/view3.component */ "./src/app/view3/view3.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["ListaComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"],
                _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__["View1Component"],
                _view2_view2_component__WEBPACK_IMPORTED_MODULE_10__["View2Component"],
                _view3_view3_component__WEBPACK_IMPORTED_MODULE_11__["View3Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lista/lista.component.scss":
/*!********************************************!*\
  !*** ./src/app/lista/lista.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista {\n  cursor: pointer;\n  border: solid 1px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEvQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxzdmlsdXBwb19qc1xcYW5ndWxhclxccHJlRXNhbWUvc3JjXFxhcHBcXGxpc3RhXFxsaXN0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Rhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xyXG59IiwiLmxpc3RhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/lista/lista.component.ts":
/*!******************************************!*\
  !*** ./src/app/lista/lista.component.ts ***!
  \******************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../aggiorna.service */ "./src/app/aggiorna.service.ts");
/* harmony import */ var _transport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../transport.service */ "./src/app/transport.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ListaComponent = /** @class */ (function () {
    function ListaComponent(trhowUser, http, sync) {
        this.trhowUser = trhowUser;
        this.http = http;
        this.sync = sync;
        this.utenti = [];
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sync.syncRequest.subscribe(function (data) {
            _this.reload();
        });
        /*
            this.utenti = new Array();
            this.utenti.push({
              id: 1,
              name: 'giorgio',
              surname: 'bagigio',
              enabled: true,
              age: 16,
            });
    
            this.utenti.push({
              id: 2,
              name: 'gigi',
              surname: 'bet',
              enabled: true,
              age: 311
            });
    
            this.utenti.push({
              id: 3,
              name: 'tony',
              surname: 'capuozzo',
              enabled: true,
              age: 131
            });
         */
        /* this.http.get<Users[]>(environment.apiUrl)
          .subscribe(utenti => {
            this.utenti = utenti;
          });
     */
        this.APIget();
        this.trhowUser.userDeleted.subscribe(function (id) {
            console.log('aggiornando');
            _this.APIget();
        });
    };
    ListaComponent.prototype.pushUser = function (user) {
        console.log('push');
        this.trhowUser.userSelected.emit(user);
    };
    ListaComponent.prototype.reload = function () {
        var _this = this;
        this.trhowUser.userDeleted.subscribe(function (id) {
            _this.APIget();
        });
    };
    ListaComponent.prototype.APIget = function () {
        var _this = this;
        console.log('gettando');
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl)
            .subscribe(function (utenti) {
            _this.utenti = utenti;
            console.log('ecco quanti utenti:   ' + utenti.length);
        });
    };
    ListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__(/*! raw-loader!./lista.component.html */ "./node_modules/raw-loader/index.js!./src/app/lista/lista.component.html"),
            styles: [__webpack_require__(/*! ./lista.component.scss */ "./src/app/lista/lista.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transport_service__WEBPACK_IMPORTED_MODULE_2__["TransportService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _aggiorna_service__WEBPACK_IMPORTED_MODULE_1__["AggiornaService"]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _transport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../transport.service */ "./src/app/transport.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aggiorna.service */ "./src/app/aggiorna.service.ts");




var TestComponent = /** @class */ (function () {
    function TestComponent(myservice, sync) {
        this.myservice = myservice;
        this.sync = sync;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.sync.syncRequest.subscribe(function (n) { console.log('la stringa  passaato è:  ' + n); });
        this.myservice.userSelected.subscribe(function (Utente) {
            console.log('anche io ascolto da test', Utente);
        });
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transport_service__WEBPACK_IMPORTED_MODULE_1__["TransportService"], _aggiorna_service__WEBPACK_IMPORTED_MODULE_3__["AggiornaService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/transport.service.ts":
/*!**************************************!*\
  !*** ./src/app/transport.service.ts ***!
  \**************************************/
/*! exports provided: TransportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportService", function() { return TransportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransportService = /** @class */ (function () {
    function TransportService() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TransportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransportService);
    return TransportService;
}());



/***/ }),

/***/ "./src/app/users.ts":
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxzdmlsdXBwb19qc1xcYW5ndWxhclxccHJlRXNhbWUvc3JjXFxhcHBcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59IiwiLmxpc3RhIHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../aggiorna.service */ "./src/app/aggiorna.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../users */ "./src/app/users.ts");
/* harmony import */ var _transport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../transport.service */ "./src/app/transport.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(getUser, http, sync) {
        this.getUser = getUser;
        this.http = http;
        this.sync = sync;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('io ascolto da users');
        this.getUser.userSelected.subscribe(function (user) {
            console.log('io ascolto da users  ', user);
            _this.user = user;
        });
    };
    UsersComponent.prototype.add = function () {
        var addURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        console.log('inserting');
        // console.log('deleteURL  ', delURL);
        this.http.post(addURL, this.user);
        // this.sync.syncRequest.emit(this.user.id);
        console.log('inserted?');
    };
    UsersComponent.prototype.delete = function (id) {
        var delURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + id;
        console.log('deleting');
        console.log('deleteURL  ', delURL);
        this.http.delete(delURL).subscribe();
        this.getUser.userDeleted.emit(id);
        console.log('deleted');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _users__WEBPACK_IMPORTED_MODULE_3__["Users"])
    ], UsersComponent.prototype, "user", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transport_service__WEBPACK_IMPORTED_MODULE_4__["TransportService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _aggiorna_service__WEBPACK_IMPORTED_MODULE_1__["AggiornaService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/view1/view1.component.scss":
/*!********************************************!*\
  !*** ./src/app/view1/view1.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  border: solid 1px red;\n  margin: 15px;\n  background-color: beige;\n  width: 25%;\n  height: 200px;\n  float: left;\n  /* display: flex;\n     align-items:stretch;\n     flex-wrap: wrap;\n  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldzEvQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxzdmlsdXBwb19qc1xcYW5ndWxhclxccHJlRXNhbWUvc3JjXFxhcHBcXHZpZXcxXFx2aWV3MS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldzEvdmlldzEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBOzs7R0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdmlldzEvdmlldzEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3tcclxuICAgIGJvcmRlciA6IHNvbGlkIDFweCByZWQ7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAqL1xyXG5cclxufSIsIi52aWV3IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgLyogZGlzcGxheTogZmxleDtcbiAgICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcbiAgICAgZmxleC13cmFwOiB3cmFwO1xuICAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view1/view1.component.ts":
/*!******************************************!*\
  !*** ./src/app/view1/view1.component.ts ***!
  \******************************************/
/*! exports provided: View1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View1Component", function() { return View1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../aggiorna.service */ "./src/app/aggiorna.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var View1Component = /** @class */ (function () {
    function View1Component(observer) {
        this.observer = observer;
        this.data = 'test';
    }
    View1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.observer.syncRequest.subscribe(function (d) { _this.data = d; });
    };
    View1Component.prototype.update = function () {
        console.log('entro update view 1');
        this.observer.syncRequest.emit(this.data);
        console.log('esco update view 1');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], View1Component.prototype, "data", void 0);
    View1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view1',
            template: __webpack_require__(/*! raw-loader!./view1.component.html */ "./node_modules/raw-loader/index.js!./src/app/view1/view1.component.html"),
            styles: [__webpack_require__(/*! ./view1.component.scss */ "./src/app/view1/view1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_aggiorna_service__WEBPACK_IMPORTED_MODULE_1__["AggiornaService"]])
    ], View1Component);
    return View1Component;
}());



/***/ }),

/***/ "./src/app/view2/view2.component.scss":
/*!********************************************!*\
  !*** ./src/app/view2/view2.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  border: solid 1px red;\n  margin: 15px;\n  background-color: beige;\n  width: 25%;\n  height: 200px;\n  float: left;\n  /* \n      display: flex;\n      align-items:stretch;\n      flex-wrap: wrap;\n\n   */\n}\n\n#view2 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldzIvQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxzdmlsdXBwb19qc1xcYW5ndWxhclxccHJlRXNhbWUvc3JjXFxhcHBcXHZpZXcyXFx2aWV3Mi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldzIvdmlldzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNKOzs7OztJQUFBO0FDTUE7O0FEQ0E7RUFDSSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC92aWV3Mi92aWV3Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3e1xyXG4gICAgYm9yZGVyIDogc29saWQgMXB4IHJlZDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuLyogXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAqL1xyXG59XHJcbiN2aWV3MntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi52aWV3IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgLyogXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgKi9cbn1cblxuI3ZpZXcyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view2/view2.component.ts":
/*!******************************************!*\
  !*** ./src/app/view2/view2.component.ts ***!
  \******************************************/
/*! exports provided: View2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View2Component", function() { return View2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aggiorna.service */ "./src/app/aggiorna.service.ts");



var View2Component = /** @class */ (function () {
    function View2Component(observer) {
        this.observer = observer;
        this.data = 'vista2';
    }
    View2Component.prototype.ngOnInit = function () {
        this.update();
    };
    View2Component.prototype.update = function () {
        var _this = this;
        this.observer.syncRequest.subscribe(function (d) { _this.data = d; });
    };
    View2Component.prototype.ciccio = function () {
        this.observer.syncRequest.emit(this.data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], View2Component.prototype, "data", void 0);
    View2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view2',
            template: __webpack_require__(/*! raw-loader!./view2.component.html */ "./node_modules/raw-loader/index.js!./src/app/view2/view2.component.html"),
            styles: [__webpack_require__(/*! ./view2.component.scss */ "./src/app/view2/view2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_aggiorna_service__WEBPACK_IMPORTED_MODULE_2__["AggiornaService"]])
    ], View2Component);
    return View2Component;
}());



/***/ }),

/***/ "./src/app/view3/view3.component.scss":
/*!********************************************!*\
  !*** ./src/app/view3/view3.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  border: solid 1px red;\n  margin: 15px;\n  background-color: beige;\n  width: 25%;\n  height: 200px;\n  float: left;\n  /* \n      display: flex;\n      align-items:stretch;\n      flex-wrap: wrap;\n\n   */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldzMvQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxzdmlsdXBwb19qc1xcYW5ndWxhclxccHJlRXNhbWUvc3JjXFxhcHBcXHZpZXczXFx2aWV3My5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldzMvdmlldzMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNKOzs7OztJQUFBO0FDTUEiLCJmaWxlIjoic3JjL2FwcC92aWV3My92aWV3My5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3e1xyXG4gICAgYm9yZGVyIDogc29saWQgMXB4IHJlZDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuLyogXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAqL1xyXG59IiwiLnZpZXcge1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKiBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczpzdHJldGNoO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view3/view3.component.ts":
/*!******************************************!*\
  !*** ./src/app/view3/view3.component.ts ***!
  \******************************************/
/*! exports provided: View3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View3Component", function() { return View3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aggiorna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aggiorna.service */ "./src/app/aggiorna.service.ts");



var View3Component = /** @class */ (function () {
    function View3Component(observer) {
        this.observer = observer;
    }
    View3Component.prototype.ngOnInit = function () {
        this.update();
    };
    View3Component.prototype.update = function () {
        var _this = this;
        this.observer.syncRequest.subscribe(function (d) { _this.data = d; });
    };
    View3Component.prototype.updateRequest = function () {
        this.observer.syncRequest.emit(this.data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], View3Component.prototype, "data", void 0);
    View3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view3',
            template: __webpack_require__(/*! raw-loader!./view3.component.html */ "./node_modules/raw-loader/index.js!./src/app/view3/view3.component.html"),
            styles: [__webpack_require__(/*! ./view3.component.scss */ "./src/app/view3/view3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_aggiorna_service__WEBPACK_IMPORTED_MODULE_2__["AggiornaService"]])
    ], View3Component);
    return View3Component;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiUrl: 'https://its-api.azurewebsites.net/api/users',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\sviluppo_js\angular\preEsame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map