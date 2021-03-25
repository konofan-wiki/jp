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
                    position: "relative",
                    height: "40px"
                  },
                  children: form.specialskill !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/Common/Images/IconSpattack/Source/".concat(form.specialskill.toString().slice(0, -1) + "1", ".png"),
                      width: "40",
                      style: {
                        position: "absolute"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/OutGame/Window/".concat(form.specialskill.toString().slice(-1) === "1" ? "icon_skill_01" : "icon_skill_02", ".png"),
                      width: "40",
                      style: {
                        position: "absolute"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy50c3giXSwibmFtZXMiOlsicGFnZSIsInVzZVN0YXRlIiwicmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwic2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwiZmlsdGVyVGV4dCIsInNldEZpbHRlclRleHQiLCJhcmVuYV9pZCIsImRhdGUiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInJhbmtpbmciLCJyZWZldGNoIiwidXNlRWZmZWN0IiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3ViSGVhZGVyQ29tcG9uZW50TWVtbyIsInVzZU1lbW8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbHVtbnMiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkZpbHRlciIsIm9uU2V0T3B0aW9uIiwibGlzdCIsInVuaXEiLCJtYXAiLCJhIiwic2NvcmVjaGFsbGVuZ2VfaWQiLCJzb3J0IiwiYiIsImFyZW5hSWRMaXN0IiwiZmlsZUxpc3QiLCJkYXRlTGlzdCIsInVzZURyb3AiLCJhY2NlcHQiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJkcm9wIiwiaWQiLCJzZWxlY3RvciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJjZW50ZXIiLCJzb3J0YWJsZSIsImhpZGUiLCJjZWxsIiwicm93IiwiaWNvbiIsImdyb3ciLCJ1c2VEcmFnIiwidHlwZSIsImlzRHJhZ2dpbmciLCJjYW5EcmFnIiwiZW5kIiwiaXRlbSIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbGxlY3RlZCIsImRyYWciLCJkcmFnUHJldmlldyIsInBhcnR5IiwiZm9ybSIsIm1haW4iLCJzdWIxIiwic3ViMiIsIndlYXBvbiIsInRvU3RyaW5nIiwic2xpY2UiLCJhY2MiLCJwb3NpdGlvbiIsInNwZWNpYWxza2lsbCIsImZvcm1fbm8iLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJpbmRleCIsIm90aGVyIiwiYTExeVByb3BzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDK0JDLHNEQUFRLENBQUMsS0FBRCxDQUR2QztBQUFBLE1BQ3BCQyxxQkFEb0I7QUFBQSxNQUNHQyx3QkFESDs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFcEJHLFVBRm9CO0FBQUEsTUFFUkMsYUFGUTs7QUFBQSxtQkFHQ0osc0RBQVEsQ0FBQztBQUNuQ0ssWUFBUSxFQUFFLElBRHlCO0FBRW5DQyxRQUFJLEVBQUU7QUFGNkIsR0FBRCxDQUhUO0FBQUEsTUFHcEJDLE1BSG9CO0FBQUEsTUFHWkMsU0FIWTs7QUFBQSxrQkFPUUMsNkRBQVEsQ0FBUSxXQUFSLHNSQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdwREMsNENBQUssQ0FBQ0MsR0FBTixpRkFDcUVKLE1BQU0sQ0FBQ0YsUUFENUUsY0FDd0ZFLE1BQU0sQ0FBQ0QsSUFEL0YsV0FIb0Q7O0FBQUE7QUFBQSwyREFNMURNLElBTjBEOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQVFyRCxFQVJxRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQixHQVBoQjtBQUFBLE1BT2JDLE9BUGEsYUFPbkJELElBUG1CO0FBQUEsTUFPSkUsT0FQSSxhQU9K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O0FBQUEsVUFERjtBQWdCRDs7TUFuQlFGLFE7O0FBb0JULFNBQVNLLFNBQVQsQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQU87QUFDTHZDLE1BQUUsMkJBQW9CdUMsS0FBcEIsQ0FERztBQUVMLG1EQUF3Q0EsS0FBeEM7QUFGSyxHQUFQO0FBSUQ7O0FBQ0QsSUFBTUcsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLEtBRHRDO0FBRUp2RSxXQUFLLEVBQUU7QUFGSDtBQURpQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQU1lN0IsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmFua2luZy44NjBiOGQ1N2RjN2RmMTgxY2ViMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENhcmQsXG4gIEZvcm1Db250cm9sLFxuICBHcmlkLFxuICBJbnB1dExhYmVsLFxuICBtYWtlU3R5bGVzLFxuICBQYXBlcixcbiAgU2VsZWN0LFxuICBUYWIsXG4gIFRhYnMsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiB9IGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IEN1c3RvbVRhYmxlIGZyb20gXCIuLi9jb250YWluZXJzL2hvb2tzL0N1c3RvbVRhYmxlXCI7XG5pbXBvcnQgeyB1c2VEcmFnLCB1c2VEcm9wIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xuaW1wb3J0IHsgdW5pcSB9IGZyb20gXCJsb2Rhc2hcIjtcbmNvbnN0IHBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcmVzZXRQYWdpbmF0aW9uVG9nZ2xlLCBzZXRSZXNldFBhZ2luYXRpb25Ub2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsdGVyVGV4dCwgc2V0RmlsdGVyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29wdGlvbiwgc2V0T3B0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBhcmVuYV9pZDogXCI1N1wiLFxuICAgIGRhdGU6IFwiMjAyMS0wMy0yNlwiLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhOiByYW5raW5nLCByZWZldGNoIH0gPSB1c2VRdWVyeTxhbnlbXT4oXCJhcmVuYWxpc3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm8tZGF0YS9tYXN0ZXIvcmFua2luZy8ke29wdGlvbi5hcmVuYV9pZH0vJHtvcHRpb24uZGF0ZX0uanNvbmBcbiAgICAgICAgKVxuICAgICAgKS5kYXRhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZmV0Y2goKTtcbiAgfSwgW29wdGlvbl0pO1xuICBjb25zdCBmaWx0ZXJlZERhdGEgPSByYW5raW5nXG4gICAgPyBmaWx0ZXJUZXh0ID09PSBcIlwiXG4gICAgICA/IHJhbmtpbmdcbiAgICAgIDogcmFua2luZy5maWx0ZXIoKHIpID0+XG4gICAgICAgICAgci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVGV4dC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApXG4gICAgOiBbXTtcbiAgY29uc3Qgc3ViSGVhZGVyQ29tcG9uZW50TWVtbyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RmlsdGVyQ29tcG9uZW50XG4gICAgICAgIG9uRmlsdGVyPXsoZSkgPT4gc2V0RmlsdGVyVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGZpbHRlclRleHQ9e2ZpbHRlclRleHR9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBvblNldE9wdGlvbj17KGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIHNldE9wdGlvbih7XG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbZmlsdGVyVGV4dCwgcmVzZXRQYWdpbmF0aW9uVG9nZ2xlLCBvcHRpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgIDxDdXN0b21UYWJsZVxuICAgICAgICB0aXRsZT1cIlRvcCAxMDAwIFJhbmtpbmdcIlxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhPXtmaWx0ZXJlZERhdGF9XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXJcbiAgICAgICAgc3RyaXBlZD17dHJ1ZX1cbiAgICAgICAgZGVmYXVsdFNvcnRBc2M9e3RydWV9XG4gICAgICAgIHBhZ2luYXRpb25SZXNldERlZmF1bHRQYWdlPXtyZXNldFBhZ2luYXRpb25Ub2dnbGV9XG4gICAgICAgIGRlZmF1bHRTb3J0RmllbGQ9XCJpZFwiXG4gICAgICAgIHBhZ2luYXRpb25cbiAgICAgICAgc3ViSGVhZGVyQ29tcG9uZW50PXtzdWJIZWFkZXJDb21wb25lbnRNZW1vfVxuICAgICAgICBzdWJIZWFkZXJcbiAgICAgIC8+XG4gICAgPC9DYXJkPlxuICApO1xufTtcbmNvbnN0IEZpbHRlckNvbXBvbmVudCA9ICh7IGZpbHRlclRleHQsIG9uRmlsdGVyLCBvcHRpb24sIG9uU2V0T3B0aW9uIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhOiBhcmVuYUlkTGlzdCB9ID0gdXNlUXVlcnkoYGFyZW5hSWRMaXN0YCwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogbGlzdCB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm8tZGF0YS9tYXN0ZXIvYXJlbmFsaXN0Lmpzb25gXG4gICAgKTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gdW5pcShsaXN0Lm1hcCgoYSkgPT4gYS5zY29yZWNoYWxsZW5nZV9pZCkpLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YTogZGF0ZUxpc3QsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFxuICAgIGBkYXRlTGlzdC0ke29wdGlvbi5hcmVuYV9pZH1gLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogbGlzdCB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29uby1kYXRhL21hc3Rlci9yYW5raW5nLyR7b3B0aW9uLmFyZW5hX2lkfS9tZXRhZGF0YS5qc29uYFxuICAgICAgKTtcbiAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmZpbGVMaXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgY29uc3QgW3sgaXNPdmVyLCBjYW5Ecm9wIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xuICAgIGFjY2VwdDogXCJNZW1iZXJcIixcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPdmVyOiAhIW1vbml0b3IuaXNPdmVyKCksXG4gICAgICAgIGNhbkRyb3A6ICEhbW9uaXRvci5jYW5Ecm9wKCksXG4gICAgICB9O1xuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiYXJlbmEtaWRcIj5BcmVuYSBJRDwvSW5wdXRMYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNldE9wdGlvbn1cbiAgICAgICAgICBuYW1lPVwiYXJlbmFfaWRcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbi5hcmVuYV9pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHthcmVuYUlkTGlzdFxuICAgICAgICAgICAgPyBhcmVuYUlkTGlzdC5tYXAoKGlkOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpZH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICB7aWR9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IFtdfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJEYXRlXCI+RGF0ZTwvSW5wdXRMYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNldE9wdGlvbn1cbiAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uLmRhdGV9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0ZUxpc3QgJiZcbiAgICAgICAgICAgIGRhdGVMaXN0Lm1hcCgoZGF0ZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2RhdGV9IGtleT17ZGF0ZX0+XG4gICAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgQnkgTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgQnkgTmFtZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBJbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e2ZpbHRlclRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIHsvKiA8VGV4dEZpZWxkIGlubmVyUmVmPXtkcm9wfSAvPiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5jb25zdCBjb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogXCJyYW5rXCIsXG4gICAgbmFtZTogXCJSYW5rXCIsXG4gICAgbWF4V2lkdGg6IFwiNjBweFwiLFxuICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICBjZW50ZXI6IHRydWUsXG4gICAgc29ydGFibGU6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogXCJpY29uXCIsXG4gICAgbmFtZTogXCJBdmF0YXJcIixcbiAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIGhpZGU6IFwic21cIixcbiAgICBjZWxsOiAocm93KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke3Jvdy5pY29ufS5wbmdgfVxuICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJVc2VyIE5hbWVcIixcbiAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgbWF4V2lkdGg6IFwiMTUwcHhcIixcbiAgICBtaW5XaWR0aDogXCI1MHB4XCIsXG4gICAgZ3JvdzogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2NvcmVcIixcbiAgICBzZWxlY3RvcjogXCJzY29yZVwiLFxuICAgIHdpZHRoOiBcIjEzMHB4XCIsXG4gICAgaGlkZTogXCJtZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGb3JtYXRpb25cIixcbiAgICBjZW50ZXI6IHRydWUsXG4gICAgd2lkdGg6IFwiNDAwcHhcIixcbiAgICBjZWxsOiAocm93KSA9PiB7XG4gICAgICBjb25zdCBbY29sbGVjdGVkLCBkcmFnLCBkcmFnUHJldmlld10gPSB1c2VEcmFnKCgpID0+ICh7XG4gICAgICAgIHR5cGU6IFwiTWVtYmVyXCIsXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6ICEhbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuRHJhZzogdHJ1ZSxcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgd3JhcD1cIm5vd3JhcFwiPlxuICAgICAgICAgIHtyb3cucGFydHkubWFwKChmb3JtKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgaXRlbSBrZXk9e2Zvcm0uZm9ybV9ub30+XG4gICAgICAgICAgICAgIHtmb3JtLm1haW4gPiAwICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25NZW1iZXIvU291cmNlLyR7Zm9ybS5tYWlufS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLnN1YjEgIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17ZHJhZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbk1lbWJlci9Tb3VyY2UvJHtmb3JtLnN1YjF9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS5zdWIyICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25NZW1iZXIvU291cmNlLyR7Zm9ybS5zdWIyfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS53ZWFwb24gIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbldlYXBvbi9Tb3VyY2UvJHtmb3JtLndlYXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtMSl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uYWNjICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25BY2Nlc3NvcnkvU291cmNlLyR7Zm9ybS5hY2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTEpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3BlY2lhbHNraWxsICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uU3BhdHRhY2svU291cmNlLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL091dEdhbWUvV2luZG93LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoLTEpID09PSBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29uX3NraWxsXzAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbl9za2lsbF8wMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgaWQ9e2BmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YH1cbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YH1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxuICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBgZnVsbC13aWR0aC10YWItJHtpbmRleH1gLFxuICAgIFwiYXJpYS1jb250cm9sc1wiOiBgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWAsXG4gIH07XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHdpZHRoOiA1MDAsXG4gIH0sXG59KSk7XG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==