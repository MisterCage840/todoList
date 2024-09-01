/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nconst task1 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.toDoTask)(\"Make my Bed\", \"\", \"01/01/2024\", \"High\");\n\nconst project1 = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.project)(\"My projects\");\nproject1.addtoDoList(task1);\n\nproject1.printtoDoList();\n\n\n\n\n\n\n// task1.toggleStatus();\n// task1.setDescription(\"Messy Bed\");\n// task1.setProject(\"Home Chores\");\n// task1.setdueDate(\"02/01/2024\");\n// task1.setpriority(\"Low\");\n// project1.printtoDoList();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW1DO0FBQ0U7O0FBRXJDLGNBQWMsa0RBQVE7O0FBRXRCLGlCQUFpQixvREFBTztBQUN4Qjs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b0RvVGFza30gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmNvbnN0IHRhc2sxID0gdG9Eb1Rhc2soXCJNYWtlIG15IEJlZFwiLCBcIlwiLCBcIjAxLzAxLzIwMjRcIiwgXCJIaWdoXCIpO1xuXG5jb25zdCBwcm9qZWN0MSA9IHByb2plY3QoXCJNeSBwcm9qZWN0c1wiKTtcbnByb2plY3QxLmFkZHRvRG9MaXN0KHRhc2sxKTtcblxucHJvamVjdDEucHJpbnR0b0RvTGlzdCgpO1xuXG5cblxuXG5cblxuLy8gdGFzazEudG9nZ2xlU3RhdHVzKCk7XG4vLyB0YXNrMS5zZXREZXNjcmlwdGlvbihcIk1lc3N5IEJlZFwiKTtcbi8vIHRhc2sxLnNldFByb2plY3QoXCJIb21lIENob3Jlc1wiKTtcbi8vIHRhc2sxLnNldGR1ZURhdGUoXCIwMi8wMS8yMDI0XCIpO1xuLy8gdGFzazEuc2V0cHJpb3JpdHkoXCJMb3dcIik7XG4vLyBwcm9qZWN0MS5wcmludHRvRG9MaXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nconst project = function (name){\n    const toDoList = [];\n    const completedtoDoList = [];\n\n    const getName = ()=> name;\n    const setName = (newName) => name = newName;\n    \n    const printtoDoList= () => toDoList.forEach(task => console.log(task.printTask()));\n    const addtoDoList = (toDoTaskObj) => toDoList.push(toDoTaskObj);\n\n    const addtoCompletedtoDoList = (completeTask) => completedtoDoList.push(completeTask);\n    const getcompletedtodoList = () => completedtoDoList.forEach(completeTask => console.log(completeTask.printTask()));\n    \n    return {getName, setName , printtoDoList ,addtoDoList, getcompletedtodoList, addtoCompletedtoDoList};\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanM/ZjU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Eb1Rhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5jb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpe1xuICAgIGNvbnN0IHRvRG9MaXN0ID0gW107XG4gICAgY29uc3QgY29tcGxldGVkdG9Eb0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKT0+IG5hbWU7XG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZTtcbiAgICBcbiAgICBjb25zdCBwcmludHRvRG9MaXN0PSAoKSA9PiB0b0RvTGlzdC5mb3JFYWNoKHRhc2sgPT4gY29uc29sZS5sb2codGFzay5wcmludFRhc2soKSkpO1xuICAgIGNvbnN0IGFkZHRvRG9MaXN0ID0gKHRvRG9UYXNrT2JqKSA9PiB0b0RvTGlzdC5wdXNoKHRvRG9UYXNrT2JqKTtcblxuICAgIGNvbnN0IGFkZHRvQ29tcGxldGVkdG9Eb0xpc3QgPSAoY29tcGxldGVUYXNrKSA9PiBjb21wbGV0ZWR0b0RvTGlzdC5wdXNoKGNvbXBsZXRlVGFzayk7XG4gICAgY29uc3QgZ2V0Y29tcGxldGVkdG9kb0xpc3QgPSAoKSA9PiBjb21wbGV0ZWR0b0RvTGlzdC5mb3JFYWNoKGNvbXBsZXRlVGFzayA9PiBjb25zb2xlLmxvZyhjb21wbGV0ZVRhc2sucHJpbnRUYXNrKCkpKTtcbiAgICBcbiAgICByZXR1cm4ge2dldE5hbWUsIHNldE5hbWUgLCBwcmludHRvRG9MaXN0ICxhZGR0b0RvTGlzdCwgZ2V0Y29tcGxldGVkdG9kb0xpc3QsIGFkZHRvQ29tcGxldGVkdG9Eb0xpc3R9O1xufVxuXG5leHBvcnQge3Byb2plY3R9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDoTask: () => (/* binding */ toDoTask)\n/* harmony export */ });\nconst toDoTask = function (title, description,dueDate, priority, project= \"My projects\", status = \"Not Complete\") {\n    const getTitle = () => title;\n    const setTitle = (newTitle) => title = newTitle; \n\n    const getDescription = () => description;\n    const setDescription = (newDescription) => description = newDescription;\n\n    const getdueDate = () => dueDate;\n    const setdueDate = (newDate) => dueDate = newDate;\n    \n    const getpriority = () => priority;\n    const setpriority = (newPriority) => priority = newPriority;\n\n    const printTask = ()=> \"Title: \"+getTitle() + \", Description: \"+getDescription()+\n        \", due Date: \"+ getdueDate() + \", Priority: \"+getpriority()+ \" , Project: \"+\n        getProject() + \" , Status: \"+getStatus();\n\n    const getProject = () => project;\n    const setProject = (newProject) => project = newProject;\n     \n    const getStatus = () => status;\n    const toggleStatus = () => {\n        status = (status == \"Not Complete\") ? \"Complete\" : \"Not Complete\";\n    }\n\n    return {getTitle, setTitle, getDescription, setDescription, getdueDate, setdueDate, \n            getpriority, setpriority, printTask, getProject, setProject, getStatus,\n            toggleStatus};\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanM/N2MxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvVGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Q9IFwiTXkgcHJvamVjdHNcIiwgc3RhdHVzID0gXCJOb3QgQ29tcGxldGVcIikge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7IFxuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGdldGR1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IHNldGR1ZURhdGUgPSAobmV3RGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgXG4gICAgY29uc3QgZ2V0cHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBzZXRwcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIGNvbnN0IHByaW50VGFzayA9ICgpPT4gXCJUaXRsZTogXCIrZ2V0VGl0bGUoKSArIFwiLCBEZXNjcmlwdGlvbjogXCIrZ2V0RGVzY3JpcHRpb24oKStcbiAgICAgICAgXCIsIGR1ZSBEYXRlOiBcIisgZ2V0ZHVlRGF0ZSgpICsgXCIsIFByaW9yaXR5OiBcIitnZXRwcmlvcml0eSgpKyBcIiAsIFByb2plY3Q6IFwiK1xuICAgICAgICBnZXRQcm9qZWN0KCkgKyBcIiAsIFN0YXR1czogXCIrZ2V0U3RhdHVzKCk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdDtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICBcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBzdGF0dXMgPSAoc3RhdHVzID09IFwiTm90IENvbXBsZXRlXCIpID8gXCJDb21wbGV0ZVwiIDogXCJOb3QgQ29tcGxldGVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXRkdWVEYXRlLCBzZXRkdWVEYXRlLCBcbiAgICAgICAgICAgIGdldHByaW9yaXR5LCBzZXRwcmlvcml0eSwgcHJpbnRUYXNrLCBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0LCBnZXRTdGF0dXMsXG4gICAgICAgICAgICB0b2dnbGVTdGF0dXN9O1xufVxuXG5leHBvcnQge3RvRG9UYXNrfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/task.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;