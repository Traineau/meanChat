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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <p [innerHtml]=\"myStatus\"></p>\n  <nav>\n    <a routerLink=\"/\" >Home</a>\n    <a routerLink=\"/login\">Login</a>\n    <a routerLink=\"/register\">Register</a>\n    <a routerLink=\"/chat\">Chat</a>\n    <a (click)=\"logOut()\">Déconnexion</a>\n  </nav>\n</header>\n  <main>\n    <router-outlet></router-outlet>\n  </main>"

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
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

// Imports


// Définition
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.myTitle = 'NodeJs Chat';
        this.myStatus = authService.isLoggedIn() ? 'Connecté' : 'Deconnecté';
    }
    AppComponent.prototype.logOut = function () {
        console.log("Deconexion");
        // Delete cookie with authService's function
        this.authService.logOut();
        // Redirection
        window.location.href = '/';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // Export
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/test/test.component */ "./src/app/partials/test/test.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/pages/chat-page/chat-page.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _partials_test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisterPageComponent"],
                _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_12__["ChatPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/pages/chat-page/chat-page.component.ts");





//
/*
Definition
*/
var routes = [
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    },
    {
        path: 'register',
        component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPageComponent"]
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    }, {
        path: 'chat',
        component: _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_4__["ChatPageComponent"],
    }
];
//
/*
Export
*/
var AppRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { enableTracing: true });
//


/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcGFnZS9jaGF0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.ts ***!
  \********************************************************/
/*! exports provided: ChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function() { return ChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatPageComponent = /** @class */ (function () {
    function ChatPageComponent() {
    }
    ChatPageComponent.prototype.ngOnInit = function () {
    };
    ChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-page',
            template: __webpack_require__(/*! ./chat-page.component.html */ "./src/app/pages/chat-page/chat-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-page.component.css */ "./src/app/pages/chat-page/chat-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatPageComponent);
    return ChatPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome on this nodeJs Chat</h1>\n<p>This chat was made with node, Angular and couchDB</p>\n<p>You'll have first to register/login to acceed to the chat</p>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Data-binding CTRL => VUE : [...]\n-->\n\n<base href=\"/\">\n\n<h1 [innerHtml]=\"myTitle\"></h1>\n\n<p>Login page</p>\n\n<form (submit)=\"loginUser()\">\n  <input type=\"email\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"loginData.email\">\n  <input type=\"password\" name=password placeholder=\"password\" [(ngModel)]=\"loginData.password\">\n  <button type=\"submit\">Login</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService) {
        this.authService = authService;
        this.loginData = {
            email: undefined,
            password: undefined
        };
    }
    LoginPageComponent.prototype.loginUser = function () {
        this.authService
            .login(this.loginData)
            .then(function () { return window.location.href = '/'; })
            .catch(function (apiResponse) { return console.error(apiResponse); });
    };
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Data-binding CTRL => VUE : [...]\n-->\n\n<base href=\"/\">\n\n<h1 [innerHtml]=\"myTitle\"></h1>\n\n<p>Register page</p>\n\n<!--\n  Data-binding VUE => CTRL : (...)\n  -->\n\n<form action=\"\" (submit)=\"formSubmit()\">\n<!--\n    Data-binding CTRL <=> VUE : [(...)]\n  -->\n  <input type=\"text\" name=\"name\" placeholder=\"name\" [(ngModel)]=\"formData.name\">\n  <input type=\"email\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"formData.email\">\n  <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"formData.password\">\n  <button type=\"submit\">Register</button>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(authService) {
        this.authService = authService;
        this.formData = {
            email: undefined,
            name: undefined,
            password: undefined
        };
    }
    RegisterPageComponent.prototype.formSubmit = function () {
        if (!this.formData.name || !this.formData.email || !this.formData.password) {
            alert("Veuillez remplir tous les champs");
        }
        else {
            this.authService.register(this.formData)
                .then(function (apiResponse) { return console.log(apiResponse); })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        }
    };
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/partials/test/test.component.css":
/*!**************************************************!*\
  !*** ./src/app/partials/test/test.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/partials/test/test.component.html":
/*!***************************************************!*\
  !*** ./src/app/partials/test/test.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/partials/test/test.component.ts":
/*!*************************************************!*\
  !*** ./src/app/partials/test/test.component.ts ***!
  \*************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/partials/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/partials/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        // variables
        this.apiUrl = 'http://localhost:9876/api/auth';
    }
    AuthService.prototype.register = function (data) {
        // Configurer le header de la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // Créer la requête
        return this.http.post("http://localhost:9876/api/user", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (data) {
        // Configurer le header de la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // Créer la requête
        return this.http.post(this.apiUrl + "/login", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    // Get the API response
    AuthService.prototype.getData = function (res) {
        return res || {};
    };
    // Get the APi error
    AuthService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    // Delete the hetic-blog cookie
    AuthService.prototype.logOut = function () {
        this._cookieService.remove('hetic-blog');
    };
    // Check the hetic-blog cookie to see if the user is logged in
    AuthService.prototype.isLoggedIn = function () {
        return this._cookieService.get('hetic-blog') ? true : false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthService);
    return AuthService;
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
    production: false
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

module.exports = __webpack_require__(/*! E:\Dev_tr\MEAN\ANGclient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map