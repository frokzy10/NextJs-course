"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/entities/Form/model/reducer/FormReducer.tsx":
/*!*********************************************************!*\
  !*** ./src/entities/Form/model/reducer/FormReducer.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormActions: function() { return /* binding */ FormActions; },\n/* harmony export */   FormName: function() { return /* binding */ FormName; },\n/* harmony export */   FormReducer: function() { return /* binding */ FormReducer; },\n/* harmony export */   setIsAuthAction: function() { return /* binding */ setIsAuthAction; },\n/* harmony export */   setIsLoadingAction: function() { return /* binding */ setIsLoadingAction; },\n/* harmony export */   setPasswordAction: function() { return /* binding */ setPasswordAction; },\n/* harmony export */   setUsernameAction: function() { return /* binding */ setUsernameAction; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    username: \"\",\n    password: \"\",\n    isLoading: false,\n    isAuth: false\n};\nconst FormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"form\",\n    initialState,\n    reducers: {\n        setUsernameAction: (state, action)=>{\n            state.username = action.payload;\n        },\n        setPasswordAction: (state, action)=>{\n            state.password = action.payload;\n        },\n        setIsLoadingAction: (state, action)=>{\n            state.isLoading = action.payload;\n        },\n        setIsAuthAction: (state, action)=>{\n            state.isAuth = action.payload;\n        }\n    }\n});\nconst { setUsernameAction, setPasswordAction, setIsLoadingAction, setIsAuthAction } = FormSlice.actions;\nconst { name: FormName, reducer: FormReducer, actions: FormActions } = FormSlice;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9Gb3JtL21vZGVsL3JlZHVjZXIvRm9ybVJlZHVjZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzREO0FBRTVELE1BQU1DLGVBQTRCO0lBQzlCQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxRQUFRO0FBQ1o7QUFFQSxNQUFNQyxZQUFZTiw2REFBV0EsQ0FBQztJQUMxQk8sTUFBTTtJQUNOTjtJQUNBTyxVQUFVO1FBQ05DLG1CQUFtQixDQUFDQyxPQUFPQztZQUN2QkQsTUFBTVIsUUFBUSxHQUFHUyxPQUFPQyxPQUFPO1FBQ25DO1FBQ0FDLG1CQUFtQixDQUFDSCxPQUFPQztZQUN2QkQsTUFBTVAsUUFBUSxHQUFHUSxPQUFPQyxPQUFPO1FBQ25DO1FBQ0FFLG9CQUFvQixDQUFDSixPQUFPQztZQUN4QkQsTUFBTU4sU0FBUyxHQUFHTyxPQUFPQyxPQUFPO1FBQ3BDO1FBQ0FHLGlCQUFpQixDQUFDTCxPQUFPQztZQUNyQkQsTUFBTUwsTUFBTSxHQUFHTSxPQUFPQyxPQUFPO1FBQ2pDO0lBQ0o7QUFDSjtBQUNPLE1BQU0sRUFBQ0gsaUJBQWlCLEVBQUVJLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBQ0MsZUFBZSxFQUFDLEdBQUdULFVBQVVVLE9BQU8sQ0FBQztBQUNyRyxNQUFNLEVBQ1RULE1BQU1VLFFBQVEsRUFDZEMsU0FBU0MsV0FBVyxFQUNwQkgsU0FBU0ksV0FBVyxFQUN2QixHQUFHZCxVQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9Gb3JtL21vZGVsL3JlZHVjZXIvRm9ybVJlZHVjZXIudHN4PzMyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRm9ybVNjaGVtYX0gZnJvbSBcIkAvZW50aXRpZXMvRm9ybS9tb2RlbC90eXBlcy9Gb3JtVHlwZXNcIjtcbmltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb259IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSUZvcm1TY2hlbWEgPSB7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0F1dGg6IGZhbHNlXG59XG5cbmNvbnN0IEZvcm1TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImZvcm1cIixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0VXNlcm5hbWVBY3Rpb246IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UGFzc3dvcmRBY3Rpb246IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnBhc3N3b3JkID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SXNMb2FkaW5nQWN0aW9uOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SXNBdXRoQWN0aW9uOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuaXNBdXRoID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuZXhwb3J0IGNvbnN0IHtzZXRVc2VybmFtZUFjdGlvbiwgc2V0UGFzc3dvcmRBY3Rpb24sIHNldElzTG9hZGluZ0FjdGlvbixzZXRJc0F1dGhBY3Rpb259ID0gRm9ybVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgY29uc3Qge1xuICAgIG5hbWU6IEZvcm1OYW1lLFxuICAgIHJlZHVjZXI6IEZvcm1SZWR1Y2VyLFxuICAgIGFjdGlvbnM6IEZvcm1BY3Rpb25zXG59ID0gRm9ybVNsaWNlIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImlzTG9hZGluZyIsImlzQXV0aCIsIkZvcm1TbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFVzZXJuYW1lQWN0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0UGFzc3dvcmRBY3Rpb24iLCJzZXRJc0xvYWRpbmdBY3Rpb24iLCJzZXRJc0F1dGhBY3Rpb24iLCJhY3Rpb25zIiwiRm9ybU5hbWUiLCJyZWR1Y2VyIiwiRm9ybVJlZHVjZXIiLCJGb3JtQWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Form/model/reducer/FormReducer.tsx\n"));

/***/ })

});