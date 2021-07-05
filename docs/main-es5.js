(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (self["webpackChunkangular_landing"] = self["webpackChunkangular_landing"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _link_list_link_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./link-list/link-list.component */
      6806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: 'link-list-item',
        component: _link_list_link_list_component__WEBPACK_IMPORTED_MODULE_0__.LinkListComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _defineProperty(_AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      });

      _defineProperty(_AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      }));

      _defineProperty(_AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      }));

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./item/item.component */
      295);

      function AppComponent_app_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item", 2);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", item_r1.name)("url", item_r1.url);
        }
      }

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        _defineProperty(this, "title", 'angular-landing');

        _defineProperty(this, "linksList", [{
          name: 'Spotify',
          url: 'https://open.spotify.com/album/3e0WoCXPhUWgx7Uwxw6AKo'
        }, {
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/trinity-single/1570768047'
        }, {
          name: 'Yandex Music',
          url: 'https://music.yandex.ru/album/16025760'
        }, {
          name: 'Pandora',
          url: 'https://pandora.app.link/PGCogOktfhb'
        }, {
          name: 'Deezer',
          url: 'https://deezer.page.link/AaKTRi4rpWxSdnuc8'
        }, {
          name: 'Youtube Music',
          url: 'https://music.youtube.com/playlist?list=OLAK5uy_lPgs04Fb2GiYD2bzft4CdjCorWkoEAYgA&feature=share'
        }, {
          name: 'Vkontakte',
          url: 'https://vk.com/music/album/-2000776812_11776812_a2932fc3ea2827674c'
        }, {
          name: 'Soundcloud',
          url: 'https://soundcloud.com/risky4real/sets/trinity'
        }, {
          name: 'Bandcamp',
          url: 'https://risk4real.bandcamp.com/album/trinity'
        }, {
          name: 'Lyrics on Genius',
          url: 'https://genius.com/albums/Risky4real/Trinity'
        }]);
      };
      /***/


      _defineProperty(_AppComponent, "\u0275fac", function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      });

      _defineProperty(_AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 1,
        consts: [["src", "./assets/R4R-trinity_recoded.png", "alt", "album artwork", 1, "cover"], [3, "name", "url", 4, "ngFor", "ngForOf"], [3, "name", "url"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trinity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Risky4real");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_app_item_7_Template, 1, 2, "app-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " The web site is made free of any tracking ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.linksList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _item_item_component__WEBPACK_IMPORTED_MODULE_0__.ItemComponent],
        styles: ["main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 90vw;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 0.3em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n  color: beige;\r\n}\r\n\r\n.cover[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.3em;\r\n}\r\n\r\n@media (min-width: 960px) {\r\n  main[_ngcontent-%COMP%]{\r\n    width: 20vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDAuM2VtO1xyXG59XHJcblxyXG5oMSwgaDIsIGZvb3RlciB7XHJcbiAgY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG4uY292ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICBtYWlue1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      }));
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./item/item.component */
      295);
      /* harmony import */


      var _link_list_link_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./link-list/link-list.component */
      6806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _defineProperty(_AppModule, "\u0275fac", function AppModule_Factory(t) {
        return new (t || _AppModule)();
      });

      _defineProperty(_AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      }));

      _defineProperty(_AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]]
      }));

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _item_item_component__WEBPACK_IMPORTED_MODULE_2__.ItemComponent, _link_list_link_list_component__WEBPACK_IMPORTED_MODULE_3__.LinkListComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
        });
      })();
      /***/

    },

    /***/
    295:
    /*!****************************************!*\
      !*** ./src/app/item/item.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemComponent": function ItemComponent() {
          return (
            /* binding */
            _ItemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ItemComponent = function _ItemComponent() {
        _classCallCheck(this, _ItemComponent);

        _defineProperty(this, "name", '');

        _defineProperty(this, "url", '');
      };
      /***/


      _defineProperty(_ItemComponent, "\u0275fac", function ItemComponent_Factory(t) {
        return new (t || _ItemComponent)();
      });

      _defineProperty(_ItemComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ItemComponent,
        selectors: [["app-item"]],
        inputs: {
          name: "name",
          url: "url"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "item", 3, "href"]],
        template: function ItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
          }
        },
        styles: ["a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: flex;\r\n  margin: 0.3em 0;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  background-color: #F0D619;\r\n  border-style: solid;\r\n  border-width: thin;\r\n  padding: 0.5em 0;\r\n  transition-duration: 0.2ms;\r\n  width: 100%;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n  background-color: aquamarine;\r\n  color: #131B1D;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:active {\r\n  background-color: aqua;\r\n  color: #818a91;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEIiLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwLjNlbSAwO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRDYxOTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMm1zO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICBjb2xvcjogIzEzMUIxRDtcclxufVxyXG4uaXRlbTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgY29sb3I6ICM4MThhOTE7XHJcbn1cclxuIl19 */"]
      }));
    },

    /***/
    6806:
    /*!**************************************************!*\
      !*** ./src/app/link-list/link-list.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LinkListComponent": function LinkListComponent() {
          return (
            /* binding */
            _LinkListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _LinkListComponent = /*#__PURE__*/function () {
        function _LinkListComponent() {
          _classCallCheck(this, _LinkListComponent);
        }

        _createClass(_LinkListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LinkListComponent;
      }();
      /***/


      _defineProperty(_LinkListComponent, "\u0275fac", function LinkListComponent_Factory(t) {
        return new (t || _LinkListComponent)();
      });

      _defineProperty(_LinkListComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LinkListComponent,
        selectors: [["app-link-list"]],
        decls: 2,
        vars: 0,
        template: function LinkListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "link-list works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      }));
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map