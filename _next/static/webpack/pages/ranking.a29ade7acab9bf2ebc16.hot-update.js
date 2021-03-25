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
                  children: form.specialskill !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                    item: true,
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
                      src: "https://raw.githubusercontent.com/thainq3127/kono_asset/master/Assets/AddressableAssetsStore/UnityAssets/OutGame/Window/".concat(form.specialskill.toString().slice(-1, 0) === "1" ? "icon_skill_01" : "icon_skill_02", ".png"),
                      width: "40",
                      style: {
                        position: "absolute"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 29
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 27
                  }, _this)
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
        lineNumber: 339,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 329,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy50c3giXSwibmFtZXMiOlsicGFnZSIsInVzZVN0YXRlIiwicmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwic2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwiZmlsdGVyVGV4dCIsInNldEZpbHRlclRleHQiLCJhcmVuYV9pZCIsImRhdGUiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInJhbmtpbmciLCJyZWZldGNoIiwidXNlRWZmZWN0IiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3ViSGVhZGVyQ29tcG9uZW50TWVtbyIsInVzZU1lbW8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbHVtbnMiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkZpbHRlciIsIm9uU2V0T3B0aW9uIiwibGlzdCIsInVuaXEiLCJtYXAiLCJhIiwic2NvcmVjaGFsbGVuZ2VfaWQiLCJzb3J0IiwiYiIsImFyZW5hSWRMaXN0IiwiZmlsZUxpc3QiLCJkYXRlTGlzdCIsInVzZURyb3AiLCJhY2NlcHQiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJkcm9wIiwiaWQiLCJzZWxlY3RvciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJjZW50ZXIiLCJzb3J0YWJsZSIsImhpZGUiLCJjZWxsIiwicm93IiwiaWNvbiIsImdyb3ciLCJ1c2VEcmFnIiwidHlwZSIsImlzRHJhZ2dpbmciLCJjYW5EcmFnIiwiZW5kIiwiaXRlbSIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbGxlY3RlZCIsImRyYWciLCJkcmFnUHJldmlldyIsInBhcnR5IiwiZm9ybSIsIm1haW4iLCJzdWIxIiwic3ViMiIsIndlYXBvbiIsInRvU3RyaW5nIiwic2xpY2UiLCJhY2MiLCJwb3NpdGlvbiIsInNwZWNpYWxza2lsbCIsImZvcm1fbm8iLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJpbmRleCIsIm90aGVyIiwiYTExeVByb3BzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDK0JDLHNEQUFRLENBQUMsS0FBRCxDQUR2QztBQUFBLE1BQ3BCQyxxQkFEb0I7QUFBQSxNQUNHQyx3QkFESDs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFcEJHLFVBRm9CO0FBQUEsTUFFUkMsYUFGUTs7QUFBQSxtQkFHQ0osc0RBQVEsQ0FBQztBQUNuQ0ssWUFBUSxFQUFFLElBRHlCO0FBRW5DQyxRQUFJLEVBQUU7QUFGNkIsR0FBRCxDQUhUO0FBQUEsTUFHcEJDLE1BSG9CO0FBQUEsTUFHWkMsU0FIWTs7QUFBQSxrQkFPUUMsNkRBQVEsQ0FBUSxXQUFSLHNSQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdwREMsNENBQUssQ0FBQ0MsR0FBTixpRkFDcUVKLE1BQU0sQ0FBQ0YsUUFENUUsY0FDd0ZFLE1BQU0sQ0FBQ0QsSUFEL0YsV0FIb0Q7O0FBQUE7QUFBQSwyREFNMURNLElBTjBEOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQVFyRCxFQVJxRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQixHQVBoQjtBQUFBLE1BT2JDLE9BUGEsYUFPbkJELElBUG1CO0FBQUEsTUFPSkUsT0FQSSxhQU9K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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O01BbkJRRixROztBQW9CVCxTQUFTSyxTQUFULENBQW1CRixLQUFuQixFQUEwQjtBQUN4QixTQUFPO0FBQ0x2QyxNQUFFLDJCQUFvQnVDLEtBQXBCLENBREc7QUFFTCxtREFBd0NBLEtBQXhDO0FBRkssR0FBUDtBQUlEOztBQUNELElBQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxVQUFkLENBQXlCQyxLQUR0QztBQUVKdkUsV0FBSyxFQUFFO0FBRkg7QUFEaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZTdCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JhbmtpbmcuYTI5YWRlN2FjYWI5YmYyZWJjMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDYXJkLFxuICBGb3JtQ29udHJvbCxcbiAgR3JpZCxcbiAgSW5wdXRMYWJlbCxcbiAgbWFrZVN0eWxlcyxcbiAgUGFwZXIsXG4gIFNlbGVjdCxcbiAgVGFiLFxuICBUYWJzLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBDdXN0b21UYWJsZSBmcm9tIFwiLi4vY29udGFpbmVycy9ob29rcy9DdXN0b21UYWJsZVwiO1xuaW1wb3J0IHsgdXNlRHJhZywgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIjtcbmltcG9ydCB7IHVuaXEgfSBmcm9tIFwibG9kYXNoXCI7XG5jb25zdCBwYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Jlc2V0UGFnaW5hdGlvblRvZ2dsZSwgc2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbHRlclRleHQsIHNldEZpbHRlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcHRpb24sIHNldE9wdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgYXJlbmFfaWQ6IFwiNTdcIixcbiAgICBkYXRlOiBcIjIwMjEtMDMtMjZcIixcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YTogcmFua2luZywgcmVmZXRjaCB9ID0gdXNlUXVlcnk8YW55W10+KFwiYXJlbmFsaXN0XCIsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vLWRhdGEvbWFzdGVyL3JhbmtpbmcvJHtvcHRpb24uYXJlbmFfaWR9LyR7b3B0aW9uLmRhdGV9Lmpzb25gXG4gICAgICAgIClcbiAgICAgICkuZGF0YTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWZldGNoKCk7XG4gIH0sIFtvcHRpb25dKTtcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcmFua2luZ1xuICAgID8gZmlsdGVyVGV4dCA9PT0gXCJcIlxuICAgICAgPyByYW5raW5nXG4gICAgICA6IHJhbmtpbmcuZmlsdGVyKChyKSA9PlxuICAgICAgICAgIHIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclRleHQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKVxuICAgIDogW107XG4gIGNvbnN0IHN1YkhlYWRlckNvbXBvbmVudE1lbW8gPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZpbHRlckNvbXBvbmVudFxuICAgICAgICBvbkZpbHRlcj17KGUpID0+IHNldEZpbHRlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBmaWx0ZXJUZXh0PXtmaWx0ZXJUZXh0fVxuICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgb25TZXRPcHRpb249eyhlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICBzZXRPcHRpb24oe1xuICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW2ZpbHRlclRleHQsIHJlc2V0UGFnaW5hdGlvblRvZ2dsZSwgb3B0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICA8Q3VzdG9tVGFibGVcbiAgICAgICAgdGl0bGU9XCJUb3AgMTAwMCBSYW5raW5nXCJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgZGF0YT17ZmlsdGVyZWREYXRhfVxuICAgICAgICBoaWdobGlnaHRPbkhvdmVyXG4gICAgICAgIHN0cmlwZWQ9e3RydWV9XG4gICAgICAgIGRlZmF1bHRTb3J0QXNjPXt0cnVlfVxuICAgICAgICBwYWdpbmF0aW9uUmVzZXREZWZhdWx0UGFnZT17cmVzZXRQYWdpbmF0aW9uVG9nZ2xlfVxuICAgICAgICBkZWZhdWx0U29ydEZpZWxkPVwiaWRcIlxuICAgICAgICBwYWdpbmF0aW9uXG4gICAgICAgIHN1YkhlYWRlckNvbXBvbmVudD17c3ViSGVhZGVyQ29tcG9uZW50TWVtb31cbiAgICAgICAgc3ViSGVhZGVyXG4gICAgICAvPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5jb25zdCBGaWx0ZXJDb21wb25lbnQgPSAoeyBmaWx0ZXJUZXh0LCBvbkZpbHRlciwgb3B0aW9uLCBvblNldE9wdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogYXJlbmFJZExpc3QgfSA9IHVzZVF1ZXJ5KGBhcmVuYUlkTGlzdGAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IGxpc3QgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vLWRhdGEvbWFzdGVyL2FyZW5hbGlzdC5qc29uYFxuICAgICk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIHVuaXEobGlzdC5tYXAoKGEpID0+IGEuc2NvcmVjaGFsbGVuZ2VfaWQpKS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIH0pO1xuICBjb25zdCB7IGRhdGE6IGRhdGVMaXN0LCByZWZldGNoIH0gPSB1c2VRdWVyeShcbiAgICBgZGF0ZUxpc3QtJHtvcHRpb24uYXJlbmFfaWR9YCxcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGE6IGxpc3QgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm8tZGF0YS9tYXN0ZXIvcmFua2luZy8ke29wdGlvbi5hcmVuYV9pZH0vbWV0YWRhdGEuanNvbmBcbiAgICAgICk7XG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5maWxlTGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGNvbnN0IFt7IGlzT3ZlciwgY2FuRHJvcCB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcbiAgICBhY2NlcHQ6IFwiTWVtYmVyXCIsXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3ZlcjogISFtb25pdG9yLmlzT3ZlcigpLFxuICAgICAgICBjYW5Ecm9wOiAhIW1vbml0b3IuY2FuRHJvcCgpLFxuICAgICAgfTtcbiAgICB9LFxuICB9KSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImFyZW5hLWlkXCI+QXJlbmEgSUQ8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17b25TZXRPcHRpb259XG4gICAgICAgICAgbmFtZT1cImFyZW5hX2lkXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiIH19XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb24uYXJlbmFfaWR9XG4gICAgICAgID5cbiAgICAgICAgICB7YXJlbmFJZExpc3RcbiAgICAgICAgICAgID8gYXJlbmFJZExpc3QubWFwKChpZDogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aWR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAge2lkfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBbXX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiRGF0ZVwiPkRhdGU8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17b25TZXRPcHRpb259XG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbi5kYXRlfVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGVMaXN0ICYmXG4gICAgICAgICAgICBkYXRlTGlzdC5tYXAoKGRhdGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRlfSBrZXk9e2RhdGV9PlxuICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiRmlsdGVyIEJ5IE5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIEJ5IE5hbWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggSW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtmaWx0ZXJUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7LyogPFRleHRGaWVsZCBpbm5lclJlZj17ZHJvcH0gLz4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuY29uc3QgY29sdW1uczogSURhdGFUYWJsZUNvbHVtbltdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6IFwicmFua1wiLFxuICAgIG5hbWU6IFwiUmFua1wiLFxuICAgIG1heFdpZHRoOiBcIjYwcHhcIixcbiAgICBtaW5XaWR0aDogXCIzMHB4XCIsXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiaWNvblwiLFxuICAgIG5hbWU6IFwiQXZhdGFyXCIsXG4gICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICBoaWRlOiBcInNtXCIsXG4gICAgY2VsbDogKHJvdykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbk1lbWJlci9Tb3VyY2UvJHtyb3cuaWNvbn0ucG5nYH1cbiAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVXNlciBOYW1lXCIsXG4gICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgIG1heFdpZHRoOiBcIjE1MHB4XCIsXG4gICAgbWluV2lkdGg6IFwiNTBweFwiLFxuICAgIGdyb3c6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNjb3JlXCIsXG4gICAgc2VsZWN0b3I6IFwic2NvcmVcIixcbiAgICB3aWR0aDogXCIxMzBweFwiLFxuICAgIGhpZGU6IFwibWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRm9ybWF0aW9uXCIsXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIHdpZHRoOiBcIjQwMHB4XCIsXG4gICAgY2VsbDogKHJvdykgPT4ge1xuICAgICAgY29uc3QgW2NvbGxlY3RlZCwgZHJhZywgZHJhZ1ByZXZpZXddID0gdXNlRHJhZygoKSA9PiAoe1xuICAgICAgICB0eXBlOiBcIk1lbWJlclwiLFxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0RyYWdnaW5nOiAhIW1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkRyYWc6IHRydWUsXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcbiAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIHdyYXA9XCJub3dyYXBcIj5cbiAgICAgICAgICB7cm93LnBhcnR5Lm1hcCgoZm9ybSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIGl0ZW0ga2V5PXtmb3JtLmZvcm1fbm99PlxuICAgICAgICAgICAgICB7Zm9ybS5tYWluID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke2Zvcm0ubWFpbn0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS5zdWIxICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2RyYWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25NZW1iZXIvU291cmNlLyR7Zm9ybS5zdWIxfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3ViMiAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke2Zvcm0uc3ViMn0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLndlYXBvbiAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uV2VhcG9uL1NvdXJjZS8ke2Zvcm0ud2VhcG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS5hY2MgIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbkFjY2Vzc29yeS9Tb3VyY2UvJHtmb3JtLmFjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtMSl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCI0MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3BlY2lhbHNraWxsICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uU3BhdHRhY2svU291cmNlLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL091dEdhbWUvV2luZG93LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3BlY2lhbHNraWxsLnRvU3RyaW5nKCkuc2xpY2UoLTEsIDApID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29uX3NraWxsXzAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbl9za2lsbF8wMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cbiAgICAgIGlkPXtgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2BmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWB9XG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcbiAgICAgICAgPEJveCBwPXszfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YCxcbiAgICBcImFyaWEtY29udHJvbHNcIjogYGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gLFxuICB9O1xufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICB3aWR0aDogNTAwLFxuICB9LFxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=