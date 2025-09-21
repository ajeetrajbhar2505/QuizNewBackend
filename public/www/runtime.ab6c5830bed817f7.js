/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"default-node_modules_ionic_core_components_animation_js":"c5917f1370e045c7","node_modules_ionic_core_components_ios_transition_js":"f48d5ab5a62b1b1a","node_modules_ionic_core_components_md_transition_js":"5b52e7346b523cb4","common":"f2602e7902bcef4d","node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js":"dac105e4465c6886","node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js":"c590276d719adb87","node_modules_ionic_core_dist_esm_ion-alert_entry_js":"86a01c5005855b24","node_modules_ionic_core_dist_esm_ion-app_8_entry_js":"ef78099e04a66e02","node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js":"c82186c954450030","node_modules_ionic_core_dist_esm_ion-back-button_entry_js":"569cf944b8b4af9d","node_modules_ionic_core_dist_esm_ion-backdrop_entry_js":"3361c0b0adcca8a9","node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js":"2872af4811e3fb1e","node_modules_ionic_core_dist_esm_ion-button_2_entry_js":"096e5e12a188cc26","node_modules_ionic_core_dist_esm_ion-card_5_entry_js":"5890a7ac931ff77a","node_modules_ionic_core_dist_esm_ion-checkbox_entry_js":"f61a553e3259a469","node_modules_ionic_core_dist_esm_ion-chip_entry_js":"7cbd6822e284bc84","node_modules_ionic_core_dist_esm_ion-col_3_entry_js":"dac1c48285bdce90","default-node_modules_ionic_core_dist_esm_data-CKHMWxfe_js":"3e07ae6f8a9afaa0","node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js":"d103b6fdd6f6534a","node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js":"024f497a830e9bae","node_modules_ionic_core_dist_esm_ion-fab_3_entry_js":"b282849bd374b9fb","node_modules_ionic_core_dist_esm_ion-img_entry_js":"09b44293a6be4de7","node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js":"a96c77eb1dd21e78","node_modules_ionic_core_dist_esm_ion-input-otp_entry_js":"099287edcfe0f15e","node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js":"ddaa75c3a40dd957","default-node_modules_ionic_core_dist_esm_input_utils-be4gBvVY_js-node_modules_ionic_core_dist-a8d71f":"e8d5ce2d082b29ce","node_modules_ionic_core_dist_esm_ion-input_entry_js":"7232052a3ed8f32c","node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js":"e1eff4d7e2a2cd60","node_modules_ionic_core_dist_esm_ion-item_8_entry_js":"52cc750b47a7e138","node_modules_ionic_core_dist_esm_ion-loading_entry_js":"ce3c12eeae55885a","node_modules_ionic_core_dist_esm_ion-menu_3_entry_js":"277d13cd943ee759","node_modules_ionic_core_dist_esm_ion-modal_entry_js":"c064ad9eb51c5c92","node_modules_ionic_core_dist_esm_ion-nav_2_entry_js":"ac2866a791906bd9","node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js":"b1f170f30a8a68b3","node_modules_ionic_core_dist_esm_ion-picker-column_entry_js":"d6c299f0af6b2a58","node_modules_ionic_core_dist_esm_ion-picker_entry_js":"10771446b12f806e","node_modules_ionic_core_dist_esm_ion-popover_entry_js":"67cfff838338cea5","node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js":"420a0e67b57dd692","node_modules_ionic_core_dist_esm_ion-radio_2_entry_js":"157da7b5d5234e8e","node_modules_ionic_core_dist_esm_ion-range_entry_js":"8ac7a11a75ebfc7a","node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js":"76695cde1af50e79","node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js":"49e936b94db248bd","node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js":"d67fd8d7122a02db","node_modules_ionic_core_dist_esm_ion-route_4_entry_js":"f1523e40ae14ec13","node_modules_ionic_core_dist_esm_ion-searchbar_entry_js":"1879f2ce633ee68a","node_modules_ionic_core_dist_esm_ion-segment-content_entry_js":"6855114c9a4ff447","node_modules_ionic_core_dist_esm_ion-segment-view_entry_js":"aa908a3b79de3220","node_modules_ionic_core_dist_esm_ion-segment_2_entry_js":"b85fd453f66b168e","node_modules_ionic_core_dist_esm_ion-select-modal_entry_js":"3cb686b859e89492","node_modules_ionic_core_dist_esm_ion-select_3_entry_js":"75eb0d9b2760e221","node_modules_ionic_core_dist_esm_ion-spinner_entry_js":"aea7139a73276cbd","node_modules_ionic_core_dist_esm_ion-split-pane_entry_js":"29e88002d1530db4","node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js":"21a613319f74d355","node_modules_ionic_core_dist_esm_ion-tab_2_entry_js":"71193bbedd800166","node_modules_ionic_core_dist_esm_ion-text_entry_js":"9ba46c9f6fdeb844","node_modules_ionic_core_dist_esm_ion-textarea_entry_js":"9e9bda2b19539429","node_modules_ionic_core_dist_esm_ion-toast_entry_js":"6f051547fde62ece","node_modules_ionic_core_dist_esm_ion-toggle_entry_js":"e015dfa967df2f4d","node_modules_capacitor_share_dist_esm_web_js":"0bec0cb152c79f04","node_modules_capacitor_app_dist_esm_web_js":"689a5d45f40e766e","node_modules_capacitor-admob-ads_dist_esm_web_js":"d672eb89525211a3","node_modules_ionic_core_dist_esm_index-C6WeRr09_js":"2d6ca779197dbe60","node_modules_ionic_core_dist_esm_status-tap-pATNXEtr_js":"96c99537ab7bb4f8","node_modules_ionic_core_dist_esm_input-shims-C4KDnhxb_js":"90e510e6a2036d56"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 				script.type = "module";
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = __webpack_require__.tu(url);
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"runtime": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("runtime" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=runtime.ab6c5830bed817f7.js.map