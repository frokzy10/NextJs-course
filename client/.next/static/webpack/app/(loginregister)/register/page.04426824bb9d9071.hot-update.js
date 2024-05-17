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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Validation_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Validation.module.scss */ \"(app-pages-browser)/./src/app/(loginregister)/Validation.module.scss\");\n/* harmony import */ var _Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_loginregister_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/(loginregister)/validation */ \"(app-pages-browser)/./src/app/(loginregister)/validation.ts\");\n/* harmony import */ var _shared_hooks_reduxHooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/hooks/reduxHooks/reduxHooks */ \"(app-pages-browser)/./src/shared/hooks/reduxHooks/reduxHooks.ts\");\n/* harmony import */ var _entities_Form_model_reducer_FormReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/entities/Form/model/reducer/FormReducer */ \"(app-pages-browser)/./src/entities/Form/model/reducer/FormReducer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst RegisterPage = ()=>{\n    _s();\n    // const [username, setUsername] = useState(\"\");\n    // const [password, setPassword] = useState(\"\");\n    const dispatch = (0,_shared_hooks_reduxHooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    const { username, password, isLoading } = (0,_shared_hooks_reduxHooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__.useTypesSelector)((state)=>state.form);\n    const handleRegister = async (e)=>{\n        e.preventDefault();\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://localhost:6000/register\", {\n                username,\n                password\n            }).then((res)=>console.log(res)).catch((e)=>console.log(e));\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Formik, {\n            initialValues: {\n                username: \"\",\n                password: \"\"\n            },\n            onSubmit: (values, param)=>{\n                let { setSubmitting } = param;\n                dispatch((0,_entities_Form_model_reducer_FormReducer__WEBPACK_IMPORTED_MODULE_7__.setUsernameAction)(values.username));\n                dispatch((0,_entities_Form_model_reducer_FormReducer__WEBPACK_IMPORTED_MODULE_7__.setPasswordAction)(values.password));\n                setSubmitting(false);\n            },\n            children: (param)=>{\n                let { errors, touched } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                    className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formTitle),\n                            children: \"Вход\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().label), {\n                                [(_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorLabel)]: errors.username && touched.username\n                            }),\n                            children: errors.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorLabel),\n                                children: errors.username\n                            }, void 0, false, {\n                                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 47\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Имя пользователя\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().field), {\n                                [(_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorField)]: errors.username && touched.username\n                            }),\n                            name: \"username\",\n                            validate: _app_loginregister_validation__WEBPACK_IMPORTED_MODULE_5__.validateUsername\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().label), {\n                                [(_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorLabel)]: errors.password && touched.password\n                            }),\n                            children: errors.password ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorLabel),\n                                children: errors.password\n                            }, void 0, false, {\n                                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 47\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Ваш пароль\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().field), {\n                                [(_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorField)]: errors.password && errors.password\n                            }),\n                            name: \"password\",\n                            validate: _app_loginregister_validation__WEBPACK_IMPORTED_MODULE_5__.validatePassword\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().submitBtn),\n                            type: \"submit\",\n                            children: \"Отправить\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_Validation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().account),\n                            children: [\n                                \"Нету аккаунта?\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/register\",\n                                    children: \"Создать\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 69\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/nurdinbakytbekov/Desktop/next-js/client/src/app/(loginregister)/register/Register.tsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(RegisterPage, \"XAZNxdrr4k9qmmekJi6bhB62e7M=\", false, function() {\n    return [\n        _shared_hooks_reduxHooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch,\n        _shared_hooks_reduxHooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__.useTypesSelector\n    ];\n});\n_c = RegisterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGxvZ2lucmVnaXN0ZXIpL3JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ3ZCO0FBQ2dCO0FBQ2I7QUFDYztBQUNkO0FBQ3VEO0FBQ0U7QUFDUztBQUUvRixNQUFNYyxlQUFlOztJQUNqQixnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELE1BQU1DLFdBQVdMLG1GQUFjQTtJQUMvQixNQUFNLEVBQUNNLFFBQVEsRUFBQ0MsUUFBUSxFQUFDQyxTQUFTLEVBQUMsR0FBR1AscUZBQWdCQSxDQUFDUSxDQUFBQSxRQUFTQSxNQUFNQyxJQUFJO0lBSTFFLE1BQU1DLGlCQUFpQixPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0EsTUFBTXRCLDZDQUFLQSxDQUFDdUIsSUFBSSxDQUFDLGtDQUFrQztnQkFDL0NSO2dCQUNBQztZQUNKLEdBQ0tRLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsR0FBRyxDQUFDRixNQUN4QkcsS0FBSyxDQUFDUCxDQUFBQSxJQUFLSyxRQUFRQyxHQUFHLENBQUNOO1FBRWhDLEVBQUUsT0FBT0EsR0FBRztZQUNSSyxRQUFRQyxHQUFHLENBQUNOO1FBQ2hCO0lBQ0o7SUFHQSxxQkFDSTtrQkFZSSw0RUFBQ2hCLDBDQUFNQTtZQUNId0IsZUFBZTtnQkFDWGQsVUFBUztnQkFDVEMsVUFBUztZQUNiO1lBQ0FjLFVBQVUsQ0FBQ0M7b0JBQVEsRUFBRUMsYUFBYSxFQUFFO2dCQUNoQ2xCLFNBQVNGLDJGQUFpQkEsQ0FBQ21CLE9BQU9oQixRQUFRO2dCQUMxQ0QsU0FBU0gsMkZBQWlCQSxDQUFDb0IsT0FBT2YsUUFBUTtnQkFDMUNnQixjQUFjO1lBQ2xCO3NCQUVDO29CQUFDLEVBQUNDLE1BQU0sRUFBRUMsT0FBTyxFQUFDO3FDQUNmLDhEQUFDOUIsd0NBQUlBO29CQUFDK0IsV0FBV2xDLDhFQUFpQjs7c0NBQzlCLDhEQUFDb0M7NEJBQUdGLFdBQVdsQywwRUFBYTtzQ0FBRTs7Ozs7O3NDQUM5Qiw4REFBQ3NDOzRCQUFNSixXQUFXakMsaURBQUlBLENBQ2xCRCxzRUFBUyxFQUFFO2dDQUFDLENBQUNBLDJFQUFjLENBQUMsRUFBRWdDLE9BQU9sQixRQUFRLElBQUltQixRQUFRbkIsUUFBUTs0QkFBQTtzQ0FDakVrQixPQUFPbEIsUUFBUSxpQkFBRyw4REFBQzBCO2dDQUFJTixXQUFXbEMsMkVBQWM7MENBQUdnQyxPQUFPbEIsUUFBUTs7Ozs7MERBQ2xFLDhEQUFDMEI7MENBQUk7Ozs7Ozs7Ozs7O3NDQUNULDhEQUFDdEMseUNBQUtBOzRCQUNGZ0MsV0FBV2pDLGlEQUFJQSxDQUNYRCxzRUFBUyxFQUFFO2dDQUFDLENBQUNBLDJFQUFjLENBQUMsRUFBRWdDLE9BQU9sQixRQUFRLElBQUltQixRQUFRbkIsUUFBUTs0QkFBQTs0QkFFckU2QixNQUFLOzRCQUNMQyxVQUFVckMsMkVBQWdCQTs7Ozs7O3NDQUU5Qiw4REFBQytCOzRCQUFNSixXQUFXakMsaURBQUlBLENBQ2xCRCxzRUFBUyxFQUFFO2dDQUFDLENBQUNBLDJFQUFjLENBQUMsRUFBRWdDLE9BQU9qQixRQUFRLElBQUlrQixRQUFRbEIsUUFBUTs0QkFBQTtzQ0FDakVpQixPQUFPakIsUUFBUSxpQkFBRyw4REFBQ3lCO2dDQUFJTixXQUFXbEMsMkVBQWM7MENBQUdnQyxPQUFPakIsUUFBUTs7Ozs7MERBQ2xFLDhEQUFDeUI7MENBQUk7Ozs7Ozs7Ozs7O3NDQUNULDhEQUFDdEMseUNBQUtBOzRCQUNGZ0MsV0FBV2pDLGlEQUFJQSxDQUFDRCxzRUFBUyxFQUFFO2dDQUFDLENBQUNBLDJFQUFjLENBQUMsRUFBRWdDLE9BQU9qQixRQUFRLElBQUlpQixPQUFPakIsUUFBUTs0QkFBQTs0QkFDaEY0QixNQUFLOzRCQUNMQyxVQUFVdEMsMkVBQWdCQTs7Ozs7O3NDQUU5Qiw4REFBQ3VDOzRCQUFPWCxXQUFXbEMsMEVBQWE7NEJBQUUrQyxNQUFLO3NDQUFTOzs7Ozs7c0NBR2hELDhEQUFDQzs0QkFBS2QsV0FBV2xDLHdFQUFXOztnQ0FBRTs4Q0FBYyw4REFBQ0ssaURBQUlBO29DQUFDNkMsTUFBSzs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzRjtHQW5GTXRDOztRQUdlSiwrRUFBY0E7UUFDT0MsaUZBQWdCQTs7O0tBSnBERztBQXFGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhsb2dpbnJlZ2lzdGVyKS9yZWdpc3Rlci9SZWdpc3Rlci50c3g/ZTBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2xzIGZyb21cIi4uL1ZhbGlkYXRpb24ubW9kdWxlLnNjc3NcIlxuaW1wb3J0IGNsc3ggZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHtGaWVsZCwgRm9ybSwgRm9ybWlrfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHt2YWxpZGF0ZVBhc3N3b3JkLCB2YWxpZGF0ZVVzZXJuYW1lfSBmcm9tIFwiQC9hcHAvKGxvZ2lucmVnaXN0ZXIpL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7dXNlQXBwRGlzcGF0Y2gsIHVzZVR5cGVzU2VsZWN0b3J9IGZyb20gXCJAL3NoYXJlZC9ob29rcy9yZWR1eEhvb2tzL3JlZHV4SG9va3NcIjtcbmltcG9ydCB7c2V0UGFzc3dvcmRBY3Rpb24sIHNldFVzZXJuYW1lQWN0aW9ufSBmcm9tIFwiQC9lbnRpdGllcy9Gb3JtL21vZGVsL3JlZHVjZXIvRm9ybVJlZHVjZXJcIjtcblxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgLy8gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3Qge3VzZXJuYW1lLHBhc3N3b3JkLGlzTG9hZGluZ30gPSB1c2VUeXBlc1NlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmZvcm0pXG5cblxuXG4gICAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjYwMDAvcmVnaXN0ZXJcIiwge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxpbnB1dCovfVxuICAgICAgICAgICAgey8qICAgIHR5cGU9XCJ0ZXh0XCIqL31cbiAgICAgICAgICAgIHsvKiAgICB2YWx1ZT17dXNlcm5hbWV9Ki99XG4gICAgICAgICAgICB7LyogICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Ki99XG4gICAgICAgICAgICB7LyovPiovfVxuICAgICAgICAgICAgey8qPGlucHV0Ki99XG4gICAgICAgICAgICB7LyogICAgdHlwZT1cInBhc3N3b3JkXCIqL31cbiAgICAgICAgICAgIHsvKiAgICB2YWx1ZT17cGFzc3dvcmR9Ki99XG4gICAgICAgICAgICB7LyogICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Ki99XG4gICAgICAgICAgICB7LyovPiovfVxuICAgICAgICAgICAgey8qPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWdpc3Rlcn0+UmVnaXN0ZXI8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOlwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOlwiXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VybmFtZUFjdGlvbih2YWx1ZXMudXNlcm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0UGFzc3dvcmRBY3Rpb24odmFsdWVzLnBhc3N3b3JkKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2Nscy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Nscy5mb3JtVGl0bGV9PtCS0YXQvtC0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmxhYmVsLCB7W2Nscy5lcnJvckxhYmVsXTogZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICApfT57ZXJyb3JzLnVzZXJuYW1lID8gPGRpdiBjbGFzc05hbWU9e2Nscy5lcnJvckxhYmVsfT57ZXJyb3JzLnVzZXJuYW1lfTwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9kaXY+fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscy5maWVsZCwge1tjbHMuZXJyb3JGaWVsZF06IGVycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGVVc2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscy5sYWJlbCwge1tjbHMuZXJyb3JMYWJlbF06IGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgKX0+e2Vycm9ycy5wYXNzd29yZCA/IDxkaXYgY2xhc3NOYW1lPXtjbHMuZXJyb3JMYWJlbH0+e2Vycm9ycy5wYXNzd29yZH08L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JLQsNGIINC/0LDRgNC+0LvRjDwvZGl2Pn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNscy5maWVsZCwge1tjbHMuZXJyb3JGaWVsZF06IGVycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbHMuc3VibWl0QnRufSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzLmFjY291bnR9PtCd0LXRgtGDINCw0LrQutCw0YPQvdGC0LA/PExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtC30LTQsNGC0YxcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJjbHMiLCJjbHN4IiwiRmllbGQiLCJGb3JtIiwiRm9ybWlrIiwiTGluayIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0ZVVzZXJuYW1lIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VUeXBlc1NlbGVjdG9yIiwic2V0UGFzc3dvcmRBY3Rpb24iLCJzZXRVc2VybmFtZUFjdGlvbiIsIlJlZ2lzdGVyUGFnZSIsImRpc3BhdGNoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImlzTG9hZGluZyIsInN0YXRlIiwiZm9ybSIsImhhbmRsZVJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwiZXJyb3JzIiwidG91Y2hlZCIsImNsYXNzTmFtZSIsImZvcm1Db250YWluZXIiLCJoMSIsImZvcm1UaXRsZSIsImxhYmVsIiwiZXJyb3JMYWJlbCIsImRpdiIsImZpZWxkIiwiZXJyb3JGaWVsZCIsIm5hbWUiLCJ2YWxpZGF0ZSIsImJ1dHRvbiIsInN1Ym1pdEJ0biIsInR5cGUiLCJzcGFuIiwiYWNjb3VudCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(loginregister)/register/Register.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/shared/hooks/reduxHooks/reduxHooks.ts":
/*!***************************************************!*\
  !*** ./src/shared/hooks/reduxHooks/reduxHooks.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAppDispatch: function() { return /* binding */ useAppDispatch; },\n/* harmony export */   useTypesSelector: function() { return /* binding */ useTypesSelector; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ useAppDispatch,useTypesSelector auto */ \nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useTypesSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQvaG9va3MvcmVkdXhIb29rcy9yZWR1eEhvb2tzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztxRkFDMkU7QUFHcEUsTUFBTUUsaUJBQWlCLElBQU1GLHdEQUFXQSxHQUFtQjtBQUUzRCxNQUFNRyxtQkFBb0RGLG9EQUFXQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvaG9va3MvcmVkdXhIb29rcy9yZWR1eEhvb2tzLnRzP2NhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7VHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1Jvb3RTdGF0ZSwgVXNlQXBwRGlzcGF0Y2h9IGZyb20gXCJAL3Byb3ZpZGVycy9zdG9yZVByb3ZpZGVyL3N0b3JlL3N0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPFVzZUFwcERpc3BhdGNoPigpO1xuXG5leHBvcnQgY29uc3QgdXNlVHlwZXNTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yOyJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VUeXBlc1NlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared/hooks/reduxHooks/reduxHooks.ts\n"));

/***/ })

});