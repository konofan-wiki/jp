webpackHotUpdate_N_E("pages/ranking",{

/***/ "./pages/ranking.tsx":
/*!***************************!*\
  !*** ./pages/ranking.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _containers_hooks_CustomTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/hooks/CustomTable */ "./containers/hooks/CustomTable.tsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\Users\\ezcax\\Dropbox\\kono-web\\pages\\ranking.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var page = function page() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      resetPaginationToggle = _useState[0],
      setResetPaginationToggle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      filterText = _useState2[0],
      setFilterText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    arena_id: "57",
    date: "2021-03-26"
  }),
      option = _useState3[0],
      setOption = _useState3[1];

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"])("arenalist", /*#__PURE__*/Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
    return C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://raw.githubusercontent.com/thainq3127/kono-data/master/ranking/".concat(option.arena_id, "/").concat(option.date, ".json"));

          case 3:
            return _context.abrupt("return", _context.sent.data);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", []);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }))),
      ranking = _useQuery.data,
      refetch = _useQuery.refetch;

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    refetch();
  }, [option]);
  var filteredData = ranking ? filterText === "" ? ranking : ranking.filter(function (r) {
    return r.name.toLowerCase().includes(filterText.toLowerCase());
  }) : [];
  var subHeaderComponentMemo = Object(react__WEBPACK_IMPORTED_MODULE_8__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(FilterComponent, {
      onFilter: function onFilter(e) {
        return setFilterText(e.target.value);
      },
      filterText: filterText,
      option: option,
      onSetOption: function onSetOption(e) {
        var name = e.target.name;
        var value = e.target.value;
        setOption(_objectSpread(_objectSpread({}, option), {}, Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this);
  }, [filterText, resetPaginationToggle, option]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_hooks_CustomTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: "Top 1000 Ranking",
      columns: columns,
      data: filteredData,
      highlightOnHover: true,
      striped: true,
      defaultSortAsc: true,
      paginationResetDefaultPage: resetPaginationToggle,
      defaultSortField: "id",
      pagination: true,
      subHeaderComponent: subHeaderComponentMemo,
      subHeader: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(page, "526T9dd3yA6pufd7nnM6S6ADDRo=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
});

var FilterComponent = function FilterComponent(_ref2) {
  _s2();

  var filterText = _ref2.filterText,
      onFilter = _ref2.onFilter,
      option = _ref2.option,
      onSetOption = _ref2.onSetOption;

  var _useQuery2 = Object(react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"])("arenaIdList", /*#__PURE__*/Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
    var _yield$axios$get, list;

    return C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://raw.githubusercontent.com/thainq3127/kono-data/master/arenalist.json");

          case 2:
            _yield$axios$get = _context2.sent;
            list = _yield$axios$get.data;
            return _context2.abrupt("return", Object(lodash__WEBPACK_IMPORTED_MODULE_13__["uniq"])(list.map(function (a) {
              return a.scorechallenge_id;
            })).sort(function (a, b) {
              return b - a;
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))),
      arenaIdList = _useQuery2.data;

  var _useQuery3 = Object(react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"])("dateList-".concat(option.arena_id), /*#__PURE__*/Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
    var _yield$axios$get2, list;

    return C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://raw.githubusercontent.com/thainq3127/kono-data/master/ranking/".concat(option.arena_id, "/metadata.json"));

          case 2:
            _yield$axios$get2 = _context3.sent;
            list = _yield$axios$get2.data;

            if (!list) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", list.fileList);

          case 8:
            return _context3.abrupt("return", []);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }))),
      dateList = _useQuery3.data,
      refetch = _useQuery3.refetch;

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_12__["useDrop"])(function () {
    return {
      accept: "Member",
      collect: function collect(monitor) {
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        };
      }
    };
  }),
      _useDrop2 = Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDrop, 2),
      _useDrop2$ = _useDrop2[0],
      isOver = _useDrop2$.isOver,
      canDrop = _useDrop2$.canDrop,
      drop = _useDrop2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
        htmlFor: "arena-id",
        children: "Arena ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        onChange: onSetOption,
        name: "arena_id",
        style: {
          width: "100px"
        },
        defaultValue: option.arena_id,
        children: arenaIdList ? arenaIdList.map(function (id) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: id,
            children: id
          }, id, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 17
          }, _this);
        }) : []
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
        htmlFor: "Date",
        children: "Date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        onChange: onSetOption,
        name: "date",
        style: {
          width: "150px"
        },
        defaultValue: option.date,
        children: dateList && dateList.map(function (date) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: date,
            children: date
          }, date, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        id: "search",
        type: "text",
        label: "Filter By Name",
        placeholder: "Filter By Name",
        "aria-label": "Search Input",
        value: filterText,
        onChange: onFilter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s2(FilterComponent, "I8T4YHmbLbFl+wtwX3FF2f1yZOw=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"], react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"], react_dnd__WEBPACK_IMPORTED_MODULE_12__["useDrop"]];
});

_c = FilterComponent;
var columns = [{
  selector: "rank",
  name: "Rank",
  maxWidth: "60px",
  minWidth: "30px",
  center: true,
  sortable: true
}, {
  selector: "icon",
  name: "Avatar",
  width: "60px",
  center: true,
  hide: "sm",
  cell: function cell(row) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconMember/Source/".concat(row.icon, ".png"),
      variant: "square"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }, _this);
  }
}, {
  name: "User Name",
  selector: "name",
  maxWidth: "150px",
  minWidth: "50px",
  grow: 1
}, {
  name: "Score",
  selector: "score",
  width: "130px",
  hide: "md"
}, {
  name: "Formation",
  center: true,
  width: "400px",
  cell: _s3(function cell(row) {
    _s3();

    var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_12__["useDrag"])(function () {
      return {
        type: "Member",
        collect: function collect(monitor) {
          return {
            isDragging: !!monitor.isDragging()
          };
        },
        canDrag: true,
        end: function end(item, monitor) {
          var dropResult = monitor.getDropResult();

          if (item) {
            //@ts-ignore
            console.log(item);
          }
        }
      };
    }),
        _useDrag2 = Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDrag, 3),
        collected = _useDrag2[0],
        drag = _useDrag2[1],
        dragPreview = _useDrag2[2];

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      direction: "row",
      wrap: "nowrap",
      children: row.party.map(function (form) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          container: true,
          direction: "column",
          item: true,
          children: form.main > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconMember/Source/".concat(form.main, ".png"),
                width: "80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              container: true,
              direction: "column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                container: true,
                direction: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  children: form.sub1 !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    ref: drag,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconMember/Source/".concat(form.sub1, ".png"),
                      width: "40"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  children: form.sub2 !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                    src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconMember/Source/".concat(form.sub2, ".png"),
                    width: "40"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                container: true,
                direction: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  children: form.weapon !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                    src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconWeapon/Source/".concat(form.weapon.toString().slice(0, -1), ".png"),
                    width: "40"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  children: form.acc !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                    src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconAccessory/Source/".concat(form.acc.toString().slice(0, -1), ".png"),
                    width: "40"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                container: true,
                direction: "row",
                justify: "center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  style: {
                    position: "static",
                    height: "40px"
                  },
                  children: form.specialskill !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconSpattack/Source/".concat(form.specialskill.toString().slice(0, -1) + "1", ".png"),
                      height: "40",
                      style: {
                        position: "absolute",
                        right: "20px"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/OutGame/Window/".concat(form.specialskill.toString().slice(-1) === "1" ? "icon_skill_01" : "icon_skill_02", ".png"),
                      height: "40",
                      style: {
                        position: "absolute",
                        right: "20px"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 29
                    }, _this)]
                  }, void 0, true)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, form.form_no, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }, _this);
  }, "TEg420EeVqEhs2FVhxDjrh6yCxo=", false, function () {
    return [react_dnd__WEBPACK_IMPORTED_MODULE_12__["useDrag"]];
  })
}];

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(C_Users_ezcax_Dropbox_kono_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "value", "index"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: "full-width-tabpanel-".concat(index),
    "aria-labelledby": "full-width-tab-".concat(index),
    style: {
      width: "100%"
    }
  }, other), {}, {
    children: value === index && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      p: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 5
  }, this);
}

_c2 = TabPanel;

function a11yProps(index) {
  return {
    id: "full-width-tab-".concat(index),
    "aria-controls": "full-width-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (page);

var _c, _c2;

$RefreshReg$(_c, "FilterComponent");
$RefreshReg$(_c2, "TabPanel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy50c3giXSwibmFtZXMiOlsicGFnZSIsInVzZVN0YXRlIiwicmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwic2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwiZmlsdGVyVGV4dCIsInNldEZpbHRlclRleHQiLCJhcmVuYV9pZCIsImRhdGUiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInJhbmtpbmciLCJyZWZldGNoIiwidXNlRWZmZWN0IiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3ViSGVhZGVyQ29tcG9uZW50TWVtbyIsInVzZU1lbW8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbHVtbnMiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkZpbHRlciIsIm9uU2V0T3B0aW9uIiwibGlzdCIsInVuaXEiLCJtYXAiLCJhIiwic2NvcmVjaGFsbGVuZ2VfaWQiLCJzb3J0IiwiYiIsImFyZW5hSWRMaXN0IiwiZmlsZUxpc3QiLCJkYXRlTGlzdCIsInVzZURyb3AiLCJhY2NlcHQiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJkcm9wIiwiaWQiLCJzZWxlY3RvciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJjZW50ZXIiLCJzb3J0YWJsZSIsImhpZGUiLCJjZWxsIiwicm93IiwiaWNvbiIsImdyb3ciLCJ1c2VEcmFnIiwidHlwZSIsImlzRHJhZ2dpbmciLCJjYW5EcmFnIiwiZW5kIiwiaXRlbSIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbGxlY3RlZCIsImRyYWciLCJkcmFnUHJldmlldyIsInBhcnR5IiwiZm9ybSIsIm1haW4iLCJzdWIxIiwic3ViMiIsIndlYXBvbiIsInRvU3RyaW5nIiwic2xpY2UiLCJhY2MiLCJwb3NpdGlvbiIsInNwZWNpYWxza2lsbCIsInJpZ2h0IiwiZm9ybV9ubyIsIlRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsImluZGV4Iiwib3RoZXIiLCJhMTF5UHJvcHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0JBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBQyxLQUFELENBRHZDO0FBQUEsTUFDcEJDLHFCQURvQjtBQUFBLE1BQ0dDLHdCQURIOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVwQkcsVUFGb0I7QUFBQSxNQUVSQyxhQUZROztBQUFBLG1CQUdDSixzREFBUSxDQUFDO0FBQ25DSyxZQUFRLEVBQUUsSUFEeUI7QUFFbkNDLFFBQUksRUFBRTtBQUY2QixHQUFELENBSFQ7QUFBQSxNQUdwQkMsTUFIb0I7QUFBQSxNQUdaQyxTQUhZOztBQUFBLGtCQU9RQyw2REFBUSxDQUFRLFdBQVIsc1JBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR3BEQyw0Q0FBSyxDQUFDQyxHQUFOLGlGQUNxRUosTUFBTSxDQUFDRixRQUQ1RSxjQUN3RkUsTUFBTSxDQUFDRCxJQUQvRixXQUhvRDs7QUFBQTtBQUFBLDJEQU0xRE0sSUFOMEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBUXJELEVBUnFEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJCLEdBUGhCO0FBQUEsTUFPYkMsT0FQYSxhQU9uQkQsSUFQbUI7QUFBQSxNQU9KRSxP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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztNQW5CUUYsUTs7QUFvQlQsU0FBU0ssU0FBVCxDQUFtQkYsS0FBbkIsRUFBMEI7QUFDeEIsU0FBTztBQUNMeEMsTUFBRSwyQkFBb0J3QyxLQUFwQixDQURHO0FBRUwsbURBQXdDQSxLQUF4QztBQUZLLEdBQVA7QUFJRDs7QUFDRCxJQUFNRyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsS0FEdEM7QUFFSnhFLFdBQUssRUFBRTtBQUZIO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTWU3QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5raW5nLjBlOTljY2M4NmE5OTU4M2I3NDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2FyZCxcbiAgRm9ybUNvbnRyb2wsXG4gIEdyaWQsXG4gIElucHV0TGFiZWwsXG4gIG1ha2VTdHlsZXMsXG4gIFBhcGVyLFxuICBTZWxlY3QsXG4gIFRhYixcbiAgVGFicyxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgQ3VzdG9tVGFibGUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvaG9va3MvQ3VzdG9tVGFibGVcIjtcbmltcG9ydCB7IHVzZURyYWcsIHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XG5pbXBvcnQgeyB1bmlxIH0gZnJvbSBcImxvZGFzaFwiO1xuY29uc3QgcGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXNldFBhZ2luYXRpb25Ub2dnbGUsIHNldFJlc2V0UGFnaW5hdGlvblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXJUZXh0LCBzZXRGaWx0ZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGUoe1xuICAgIGFyZW5hX2lkOiBcIjU3XCIsXG4gICAgZGF0ZTogXCIyMDIxLTAzLTI2XCIsXG4gIH0pO1xuICBjb25zdCB7IGRhdGE6IHJhbmtpbmcsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5PGFueVtdPihcImFyZW5hbGlzdFwiLCBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29uby1kYXRhL21hc3Rlci9yYW5raW5nLyR7b3B0aW9uLmFyZW5hX2lkfS8ke29wdGlvbi5kYXRlfS5qc29uYFxuICAgICAgICApXG4gICAgICApLmRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmZXRjaCgpO1xuICB9LCBbb3B0aW9uXSk7XG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHJhbmtpbmdcbiAgICA/IGZpbHRlclRleHQgPT09IFwiXCJcbiAgICAgID8gcmFua2luZ1xuICAgICAgOiByYW5raW5nLmZpbHRlcigocikgPT5cbiAgICAgICAgICByLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJUZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIClcbiAgICA6IFtdO1xuICBjb25zdCBzdWJIZWFkZXJDb21wb25lbnRNZW1vID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGaWx0ZXJDb21wb25lbnRcbiAgICAgICAgb25GaWx0ZXI9eyhlKSA9PiBzZXRGaWx0ZXJUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgZmlsdGVyVGV4dD17ZmlsdGVyVGV4dH1cbiAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgIG9uU2V0T3B0aW9uPXsoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgc2V0T3B0aW9uKHtcbiAgICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtmaWx0ZXJUZXh0LCByZXNldFBhZ2luYXRpb25Ub2dnbGUsIG9wdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgPEN1c3RvbVRhYmxlXG4gICAgICAgIHRpdGxlPVwiVG9wIDEwMDAgUmFua2luZ1wiXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGRhdGE9e2ZpbHRlcmVkRGF0YX1cbiAgICAgICAgaGlnaGxpZ2h0T25Ib3ZlclxuICAgICAgICBzdHJpcGVkPXt0cnVlfVxuICAgICAgICBkZWZhdWx0U29ydEFzYz17dHJ1ZX1cbiAgICAgICAgcGFnaW5hdGlvblJlc2V0RGVmYXVsdFBhZ2U9e3Jlc2V0UGFnaW5hdGlvblRvZ2dsZX1cbiAgICAgICAgZGVmYXVsdFNvcnRGaWVsZD1cImlkXCJcbiAgICAgICAgcGFnaW5hdGlvblxuICAgICAgICBzdWJIZWFkZXJDb21wb25lbnQ9e3N1YkhlYWRlckNvbXBvbmVudE1lbW99XG4gICAgICAgIHN1YkhlYWRlclxuICAgICAgLz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuY29uc3QgRmlsdGVyQ29tcG9uZW50ID0gKHsgZmlsdGVyVGV4dCwgb25GaWx0ZXIsIG9wdGlvbiwgb25TZXRPcHRpb24gfSkgPT4ge1xuICBjb25zdCB7IGRhdGE6IGFyZW5hSWRMaXN0IH0gPSB1c2VRdWVyeShgYXJlbmFJZExpc3RgLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBsaXN0IH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29uby1kYXRhL21hc3Rlci9hcmVuYWxpc3QuanNvbmBcbiAgICApO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiB1bmlxKGxpc3QubWFwKChhKSA9PiBhLnNjb3JlY2hhbGxlbmdlX2lkKSkuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuICB9KTtcbiAgY29uc3QgeyBkYXRhOiBkYXRlTGlzdCwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoXG4gICAgYGRhdGVMaXN0LSR7b3B0aW9uLmFyZW5hX2lkfWAsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBsaXN0IH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vLWRhdGEvbWFzdGVyL3JhbmtpbmcvJHtvcHRpb24uYXJlbmFfaWR9L21ldGFkYXRhLmpzb25gXG4gICAgICApO1xuICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuZmlsZUxpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuICApO1xuICBjb25zdCBbeyBpc092ZXIsIGNhbkRyb3AgfSwgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XG4gICAgYWNjZXB0OiBcIk1lbWJlclwiLFxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc092ZXI6ICEhbW9uaXRvci5pc092ZXIoKSxcbiAgICAgICAgY2FuRHJvcDogISFtb25pdG9yLmNhbkRyb3AoKSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSkpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJhcmVuYS1pZFwiPkFyZW5hIElEPC9JbnB1dExhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2V0T3B0aW9ufVxuICAgICAgICAgIG5hbWU9XCJhcmVuYV9pZFwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uLmFyZW5hX2lkfVxuICAgICAgICA+XG4gICAgICAgICAge2FyZW5hSWRMaXN0XG4gICAgICAgICAgICA/IGFyZW5hSWRMaXN0Lm1hcCgoaWQ6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2lkfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgIHtpZH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogW119XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIkRhdGVcIj5EYXRlPC9JbnB1dExhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2V0T3B0aW9ufVxuICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb24uZGF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRlTGlzdCAmJlxuICAgICAgICAgICAgZGF0ZUxpc3QubWFwKChkYXRlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZGF0ZX0ga2V5PXtkYXRlfT5cbiAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBCeSBOYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBCeSBOYW1lXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIElucHV0XCJcbiAgICAgICAgICB2YWx1ZT17ZmlsdGVyVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgey8qIDxUZXh0RmllbGQgaW5uZXJSZWY9e2Ryb3B9IC8+ICovfVxuICAgIDwvPlxuICApO1xufTtcbmNvbnN0IGNvbHVtbnM6IElEYXRhVGFibGVDb2x1bW5bXSA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiBcInJhbmtcIixcbiAgICBuYW1lOiBcIlJhbmtcIixcbiAgICBtYXhXaWR0aDogXCI2MHB4XCIsXG4gICAgbWluV2lkdGg6IFwiMzBweFwiLFxuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImljb25cIixcbiAgICBuYW1lOiBcIkF2YXRhclwiLFxuICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICBjZW50ZXI6IHRydWUsXG4gICAgaGlkZTogXCJzbVwiLFxuICAgIGNlbGw6IChyb3cpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25NZW1iZXIvU291cmNlLyR7cm93Lmljb259LnBuZ2B9XG4gICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlVzZXIgTmFtZVwiLFxuICAgIHNlbGVjdG9yOiBcIm5hbWVcIixcbiAgICBtYXhXaWR0aDogXCIxNTBweFwiLFxuICAgIG1pbldpZHRoOiBcIjUwcHhcIixcbiAgICBncm93OiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTY29yZVwiLFxuICAgIHNlbGVjdG9yOiBcInNjb3JlXCIsXG4gICAgd2lkdGg6IFwiMTMwcHhcIixcbiAgICBoaWRlOiBcIm1kXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZvcm1hdGlvblwiLFxuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgIGNlbGw6IChyb3cpID0+IHtcbiAgICAgIGNvbnN0IFtjb2xsZWN0ZWQsIGRyYWcsIGRyYWdQcmV2aWV3XSA9IHVzZURyYWcoKCkgPT4gKHtcbiAgICAgICAgdHlwZTogXCJNZW1iZXJcIixcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNEcmFnZ2luZzogISFtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjYW5EcmFnOiB0cnVlLFxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJvcFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiB3cmFwPVwibm93cmFwXCI+XG4gICAgICAgICAge3Jvdy5wYXJ0eS5tYXAoKGZvcm0pID0+IChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBpdGVtIGtleT17Zm9ybS5mb3JtX25vfT5cbiAgICAgICAgICAgICAge2Zvcm0ubWFpbiA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbk1lbWJlci9Tb3VyY2UvJHtmb3JtLm1haW59LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3ViMSAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtkcmFnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke2Zvcm0uc3ViMX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLnN1YjIgIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbk1lbWJlci9Tb3VyY2UvJHtmb3JtLnN1YjJ9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLndlYXBvbiAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uV2VhcG9uL1NvdXJjZS8ke2Zvcm0ud2VhcG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS5hY2MgIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbkFjY2Vzc29yeS9Tb3VyY2UvJHtmb3JtLmFjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtMSl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3BlY2lhbHNraWxsICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uU3BhdHRhY2svU291cmNlLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL091dEdhbWUvV2luZG93LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoLTEpID09PSBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29uX3NraWxsXzAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbl9za2lsbF8wMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgaWQ9e2BmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YH1cbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YH1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxuICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBgZnVsbC13aWR0aC10YWItJHtpbmRleH1gLFxuICAgIFwiYXJpYS1jb250cm9sc1wiOiBgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWAsXG4gIH07XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHdpZHRoOiA1MDAsXG4gIH0sXG59KSk7XG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==