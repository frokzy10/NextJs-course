"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(loginregister)/register/page",{

/***/ "(app-pages-browser)/./src/app/(loginregister)/register/Register.tsx":
/*!*******************************************************!*\
  !*** ./src/app/(loginregister)/register/Register.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/test-utils */ \"(app-pages-browser)/./node_modules/react-dom/test-utils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst RegisterPage = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://localhost:6000/register\", {\n            username,\n            password\n        }).then((res)=>console.log(res)).then((e)=>console.log(e));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setUsername(e.target.value),\n                value: username,\n                type: \"text\",\n                name: \"username\"\n            }, void 0, false, {\n                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setPassword(e.target.value),\n                value: password,\n                type: \"text\",\n                name: \"password\"\n            }, void 0, false, {\n                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                children: \"handleSubmit\"\n            }, void 0, false, {\n                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RegisterPage, \"eV65LzuG77rFchDnjG9caglsNPo=\");\n_c = RegisterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGxvZ2lucmVnaXN0ZXIpL3JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzQztBQU1aO0FBRW9CO0FBRzlDLE1BQU1JLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN4QyxNQUFNLENBQUNNLFVBQVNDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDeEMsTUFBTVEsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQlQsNkNBQUtBLENBQUNVLElBQUksQ0FBQyxtQ0FBa0M7WUFBQ1A7WUFBU0U7UUFBUSxHQUMxRE0sSUFBSSxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxHQUFHLENBQUNGLE1BQ3hCRCxJQUFJLENBQUNILENBQUFBLElBQUtLLFFBQVFDLEdBQUcsQ0FBQ047SUFDL0I7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNPO2dCQUFNQyxVQUFVLENBQUNSLElBQUlKLFlBQVlJLEVBQUVTLE1BQU0sQ0FBQ0MsS0FBSztnQkFBR0EsT0FBT2Y7Z0JBQVVnQixNQUFLO2dCQUFPQyxNQUFLOzs7Ozs7MEJBQ3JGLDhEQUFDTDtnQkFBTUMsVUFBVSxDQUFDUixJQUFJRixZQUFZRSxFQUFFUyxNQUFNLENBQUNDLEtBQUs7Z0JBQUdBLE9BQU9iO2dCQUFVYyxNQUFLO2dCQUFPQyxNQUFLOzs7Ozs7MEJBQ3JGLDhEQUFDQztnQkFBT0MsU0FBU2Y7MEJBQWM7Ozs7Ozs7O0FBOEMzQztHQTVETUw7S0FBQUE7QUE4RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8obG9naW5yZWdpc3RlcikvcmVnaXN0ZXIvUmVnaXN0ZXIudHN4P2UwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNscyBmcm9tIFwiLi4vVmFsaWRhdGlvbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IHZhbGlkYXRlUGFzc3dvcmQsIHZhbGlkYXRlVXNlcm5hbWUgfSBmcm9tIFwiQC9hcHAvKGxvZ2lucmVnaXN0ZXIpL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge0lWYWx1ZXNUeXBlc30gZnJvbSBcIkAvYXBwLyhsb2dpbnJlZ2lzdGVyKS90eXBlc1wiO1xuaW1wb3J0IHtTaW11bGF0ZX0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCI7XG5pbXBvcnQgaW5wdXQgPSBTaW11bGF0ZS5pbnB1dDtcblxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOmFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwczovL2xvY2FsaG9zdDo2MDAwL3JlZ2lzdGVyXCIse3VzZXJuYW1lLHBhc3N3b3JkfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgLnRoZW4oZSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt1c2VybmFtZX0gdHlwZT1cInRleHRcIiBuYW1lPSd1c2VybmFtZScvPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3Bhc3N3b3JkfSB0eXBlPVwidGV4dFwiIG5hbWU9J3Bhc3N3b3JkJy8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+aGFuZGxlU3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgICAvLyA8Rm9ybWlrXG4gICAgICAgIC8vICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIC8vICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIC8vICAgICB9fVxuICAgICAgICAvLyAgICAgb25TdWJtaXQ9eyh2YWx1ZXMseyByZXNldEZvcm0gfSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICAvLyAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpO1xuICAgICAgICAvLyAgICAgfX1cbiAgICAgICAgLy8gPlxuICAgICAgICAvLyAgICAgeyh7IGVycm9ycywgdG91Y2hlZCB9KSA9PiAoXG4gICAgICAgIC8vICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtjbHMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Nscy5mb3JtVGl0bGV9PtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gxPlxuICAgICAgICAvLyAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2xzLmxhYmVsLCB7W2Nscy5lcnJvckxhYmVsXTogZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICAgICl9PntlcnJvcnMudXNlcm5hbWUgPyA8ZGl2IGNsYXNzTmFtZT17Y2xzLmVycm9yTGFiZWx9PntlcnJvcnMudXNlcm5hbWV9PC9kaXY+IDpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvZGl2Pn08L2xhYmVsPlxuICAgICAgICAvLyAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjbHMuZmllbGQsIHtbY2xzLmVycm9yRmllbGRdOiBlcnJvcnMudXNlcm5hbWUgJiYgdG91Y2hlZC51c2VybmFtZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICl9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlVXNlcm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjbHMubGFiZWwsIHtbY2xzLmVycm9yTGFiZWxdOiBlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZH1cbiAgICAgICAgLy8gICAgICAgICAgICAgKX0+e2Vycm9ycy5wYXNzd29yZCA/IDxkaXYgY2xhc3NOYW1lPXtjbHMuZXJyb3JMYWJlbH0+e2Vycm9ycy5wYXNzd29yZH08L2Rpdj4gOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj7QktCw0Ygg0L/QsNGA0L7Qu9GMPC9kaXY+fTwvbGFiZWw+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNscy5maWVsZCwge1tjbHMuZXJyb3JGaWVsZF06IGVycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9KX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlUGFzc3dvcmR9XG4gICAgICAgIC8vICAgICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbHMuc3VibWl0QnRufSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0YxcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzLmFjY291bnR9PtCV0YHRgtGMINCw0LrQutCw0YPQvdGCPzxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgICA8L0Zvcm0+XG4gICAgICAgIC8vICAgICApfVxuICAgICAgICAvLyA8L0Zvcm1paz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlNpbXVsYXRlIiwiUmVnaXN0ZXJQYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(loginregister)/register/Register.tsx\n"));

/***/ })

});