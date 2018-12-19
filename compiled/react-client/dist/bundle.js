/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./react-client/src/index.jsx");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./react-client/src/index.jsx":
  /*!************************************!*\
    !*** ./react-client/src/index.jsx ***!
    \************************************/
  /*! no static exports found */
  /***/function (module, exports) {

    eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find module '@babel/core'\\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:603:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:529:25)\\n    at Module.require (internal/modules/cjs/loader.js:658:17)\\n    at require (/Users/talal/HackReactor/fec/checkout/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at Object.<anonymous> (/Users/talal/HackReactor/fec/checkout/node_modules/babel-loader/lib/index.js:10:11)\\n    at Module._compile (/Users/talal/HackReactor/fec/checkout/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:733:10)\\n    at Module.load (internal/modules/cjs/loader.js:620:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:552:3)\\n    at Module.require (internal/modules/cjs/loader.js:658:17)\\n    at require (/Users/talal/HackReactor/fec/checkout/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at loadLoader (/Users/talal/HackReactor/fec/checkout/node_modules/loader-runner/lib/loadLoader.js:13:17)\\n    at iteratePitchingLoaders (/Users/talal/HackReactor/fec/checkout/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/Users/talal/HackReactor/fec/checkout/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModule.js:280:3)\\n    at NormalModule.build (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModule.js:427:15)\\n    at Compilation.buildModule (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/Compilation.js:633:10)\\n    at moduleFactory.create (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/Compilation.js:1019:12)\\n    at factory (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModuleFactory.js:405:6)\\n    at hooks.afterResolve.callAsync (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/talal/HackReactor/fec/checkout/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/talal/HackReactor/fec/checkout/node_modules/tapable/lib/Hook.js:154:20)\\n    at resolver (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModuleFactory.js:138:29)\\n    at process.nextTick (/Users/talal/HackReactor/fec/checkout/node_modules/webpack/lib/NormalModuleFactory.js:342:9)\\n    at process.internalTickCallback (internal/process/next_tick.js:70:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/index.jsx\n");

    /***/
  }

  /******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlYWN0LWNsaWVudC9kaXN0L2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZXZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUyxDQUFDLFVBQVNBLE9BQVQsRUFBa0I7QUFBRTtBQUM5QixVQUQ0QixDQUNsQjtBQUNWLFVBQVUsSUFBSUMsbUJBQW1CLEVBQXZCO0FBQ1Y7QUFDQSxVQUo0QixDQUlsQjtBQUNWLFVBQVUsU0FBU0MsbUJBQVQsQ0FBNkJDLFFBQTdCLEVBQXVDO0FBQ2pEO0FBQ0EsWUFGaUQsQ0FFdEM7QUFDWCxZQUFXLElBQUdGLGlCQUFpQkUsUUFBakIsQ0FBSCxFQUErQjtBQUMxQyxjQUFZLE9BQU9GLGlCQUFpQkUsUUFBakIsRUFBMkJDLE9BQWxDO0FBQ1o7QUFBWTtBQUNaLFlBTmlELENBTXRDO0FBQ1gsWUFBVyxJQUFJQyxTQUFTSixpQkFBaUJFLFFBQWpCLElBQTZCO0FBQ3JELGNBQVlHLEdBQUdILFFBRHNDO0FBRXJELGNBQVlJLEdBQUcsS0FGc0M7QUFHckQsY0FBWUgsU0FBUztBQUNyQixjQUpxRCxFQUExQztBQUtYO0FBQ0EsWUFiaUQsQ0FhdEM7QUFDWCxZQUFXSixRQUFRRyxRQUFSLEVBQWtC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LG9CQUFvQjRCLENBQXBCLEdBQXdCLFVBQVN6QixNQUFULEVBQWlCO0FBQ25ELFlBQVcsSUFBSVEsU0FBU1IsVUFBVUEsT0FBT29CLFVBQWpCO0FBQ3hCLFlBQVksU0FBU00sVUFBVCxHQUFzQjtBQUFFLGFBQU8xQixPQUFPLFNBQVAsQ0FBUDtBQUEyQixLQUR2QztBQUV4QixZQUFZLFNBQVMyQixnQkFBVCxHQUE0QjtBQUFFLGFBQU8zQixNQUFQO0FBQWdCLEtBRi9DO0FBR1gsWUFBV0gsb0JBQW9CUyxDQUFwQixDQUFzQkUsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUNBLE1BQW5DO0FBQ1gsWUFBVyxPQUFPQSxNQUFQO0FBQ1g7QUFBVyxHQU5EO0FBT1Y7QUFDQSxVQTNFNEIsQ0EyRWxCO0FBQ1YsVUFBVVgsb0JBQW9CWSxDQUFwQixHQUF3QixVQUFTbUIsTUFBVCxFQUFpQkMsUUFBakIsRUFBMkI7QUFBRSxXQUFPbkIsT0FBT29CLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDNUIsSUFBaEMsQ0FBcUN5QixNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBUDtBQUFnRSxHQUFySDtBQUNWO0FBQ0EsVUE5RTRCLENBOEVsQjtBQUNWLFVBQVVoQyxvQkFBb0JtQyxDQUFwQixHQUF3QixFQUF4QjtBQUNWO0FBQ0E7QUFDQSxVQWxGNEIsQ0FrRmxCO0FBQ1YsVUFBVSxPQUFPbkMsb0JBQW9CQSxvQkFBb0JvQyxDQUFwQixHQUF3Qiw4QkFBNUMsQ0FBUDtBQUNWO0FBQVUsQ0FwRkQ7QUFxRlQ7QUFDQSxRQUFVOztBQUVWLE9BQU07QUFDTjs7O0FBR0E7QUFDQSxPQUFPLFVBQVNqQyxNQUFULEVBQWlCRCxPQUFqQixFQUEwQjs7QUFFakNtQyxTQUFLLG9zR0FBTDs7QUFFQTtBQUFPOztBQUVQLFVBYlUsRUF0RkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcmVhY3QtY2xpZW50L3NyYy9pbmRleC5qc3hcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9yZWFjdC1jbGllbnQvc3JjL2luZGV4LmpzeFwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcmVhY3QtY2xpZW50L3NyYy9pbmRleC5qc3ggKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwidGhyb3cgbmV3IEVycm9yKFxcXCJNb2R1bGUgYnVpbGQgZmFpbGVkIChmcm9tIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMpOlxcXFxuRXJyb3I6IENhbm5vdCBmaW5kIG1vZHVsZSAnQGJhYmVsL2NvcmUnXFxcXG4gYmFiZWwtbG9hZGVyQDggcmVxdWlyZXMgQmFiZWwgNy54ICh0aGUgcGFja2FnZSAnQGJhYmVsL2NvcmUnKS4gSWYgeW91J2QgbGlrZSB0byB1c2UgQmFiZWwgNi54ICgnYmFiZWwtY29yZScpLCB5b3Ugc2hvdWxkIGluc3RhbGwgJ2JhYmVsLWxvYWRlckA3Jy5cXFxcbiAgICBhdCBGdW5jdGlvbi5Nb2R1bGUuX3Jlc29sdmVGaWxlbmFtZSAoaW50ZXJuYWwvbW9kdWxlcy9janMvbG9hZGVyLmpzOjYwMzoxNSlcXFxcbiAgICBhdCBGdW5jdGlvbi5Nb2R1bGUuX2xvYWQgKGludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlci5qczo1Mjk6MjUpXFxcXG4gICAgYXQgTW9kdWxlLnJlcXVpcmUgKGludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlci5qczo2NTg6MTcpXFxcXG4gICAgYXQgcmVxdWlyZSAoL1VzZXJzL3RhbGFsL0hhY2tSZWFjdG9yL2ZlYy9jaGVja291dC9ub2RlX21vZHVsZXMvdjgtY29tcGlsZS1jYWNoZS92OC1jb21waWxlLWNhY2hlLmpzOjE1OToyMClcXFxcbiAgICBhdCBPYmplY3QuPGFub255bW91cz4gKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM6MTA6MTEpXFxcXG4gICAgYXQgTW9kdWxlLl9jb21waWxlICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy92OC1jb21waWxlLWNhY2hlL3Y4LWNvbXBpbGUtY2FjaGUuanM6MTc4OjMwKVxcXFxuICAgIGF0IE9iamVjdC5Nb2R1bGUuX2V4dGVuc2lvbnMuLmpzIChpbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXIuanM6NzMzOjEwKVxcXFxuICAgIGF0IE1vZHVsZS5sb2FkIChpbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXIuanM6NjIwOjMyKVxcXFxuICAgIGF0IHRyeU1vZHVsZUxvYWQgKGludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlci5qczo1NjA6MTIpXFxcXG4gICAgYXQgRnVuY3Rpb24uTW9kdWxlLl9sb2FkIChpbnRlcm5hbC9tb2R1bGVzL2Nqcy9sb2FkZXIuanM6NTUyOjMpXFxcXG4gICAgYXQgTW9kdWxlLnJlcXVpcmUgKGludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlci5qczo2NTg6MTcpXFxcXG4gICAgYXQgcmVxdWlyZSAoL1VzZXJzL3RhbGFsL0hhY2tSZWFjdG9yL2ZlYy9jaGVja291dC9ub2RlX21vZHVsZXMvdjgtY29tcGlsZS1jYWNoZS92OC1jb21waWxlLWNhY2hlLmpzOjE1OToyMClcXFxcbiAgICBhdCBsb2FkTG9hZGVyICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy9sb2FkZXItcnVubmVyL2xpYi9sb2FkTG9hZGVyLmpzOjEzOjE3KVxcXFxuICAgIGF0IGl0ZXJhdGVQaXRjaGluZ0xvYWRlcnMgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL2xvYWRlci1ydW5uZXIvbGliL0xvYWRlclJ1bm5lci5qczoxNjk6MilcXFxcbiAgICBhdCBydW5Mb2FkZXJzICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy9sb2FkZXItcnVubmVyL2xpYi9Mb2FkZXJSdW5uZXIuanM6MzYyOjIpXFxcXG4gICAgYXQgTm9ybWFsTW9kdWxlLmRvQnVpbGQgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL05vcm1hbE1vZHVsZS5qczoyODA6MylcXFxcbiAgICBhdCBOb3JtYWxNb2R1bGUuYnVpbGQgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL05vcm1hbE1vZHVsZS5qczo0Mjc6MTUpXFxcXG4gICAgYXQgQ29tcGlsYXRpb24uYnVpbGRNb2R1bGUgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL0NvbXBpbGF0aW9uLmpzOjYzMzoxMClcXFxcbiAgICBhdCBtb2R1bGVGYWN0b3J5LmNyZWF0ZSAoL1VzZXJzL3RhbGFsL0hhY2tSZWFjdG9yL2ZlYy9jaGVja291dC9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvQ29tcGlsYXRpb24uanM6MTAxOToxMilcXFxcbiAgICBhdCBmYWN0b3J5ICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9Ob3JtYWxNb2R1bGVGYWN0b3J5LmpzOjQwNTo2KVxcXFxuICAgIGF0IGhvb2tzLmFmdGVyUmVzb2x2ZS5jYWxsQXN5bmMgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL05vcm1hbE1vZHVsZUZhY3RvcnkuanM6MTU1OjEzKVxcXFxuICAgIGF0IEFzeW5jU2VyaWVzV2F0ZXJmYWxsSG9vay5ldmFsIFthcyBjYWxsQXN5bmNdIChldmFsIGF0IGNyZWF0ZSAoL1VzZXJzL3RhbGFsL0hhY2tSZWFjdG9yL2ZlYy9jaGVja291dC9ub2RlX21vZHVsZXMvdGFwYWJsZS9saWIvSG9va0NvZGVGYWN0b3J5LmpzOjMyOjEwKSwgPGFub255bW91cz46NjoxKVxcXFxuICAgIGF0IEFzeW5jU2VyaWVzV2F0ZXJmYWxsSG9vay5sYXp5Q29tcGlsZUhvb2sgKC9Vc2Vycy90YWxhbC9IYWNrUmVhY3Rvci9mZWMvY2hlY2tvdXQvbm9kZV9tb2R1bGVzL3RhcGFibGUvbGliL0hvb2suanM6MTU0OjIwKVxcXFxuICAgIGF0IHJlc29sdmVyICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9Ob3JtYWxNb2R1bGVGYWN0b3J5LmpzOjEzODoyOSlcXFxcbiAgICBhdCBwcm9jZXNzLm5leHRUaWNrICgvVXNlcnMvdGFsYWwvSGFja1JlYWN0b3IvZmVjL2NoZWNrb3V0L25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9Ob3JtYWxNb2R1bGVGYWN0b3J5LmpzOjM0Mjo5KVxcXFxuICAgIGF0IHByb2Nlc3MuaW50ZXJuYWxUaWNrQ2FsbGJhY2sgKGludGVybmFsL3Byb2Nlc3MvbmV4dF90aWNrLmpzOjcwOjExKVxcXCIpOy8vIyBzb3VyY2VVUkw9W21vZHVsZV1cXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUxpOXlaV0ZqZEMxamJHbGxiblF2YzNKakwybHVaR1Y0TG1wemVDNXFjeUlzSW5OdmRYSmpaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrLWludGVybmFsOi8vLy4vcmVhY3QtY2xpZW50L3NyYy9pbmRleC5qc3hcXG5cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pOyJdfQ==