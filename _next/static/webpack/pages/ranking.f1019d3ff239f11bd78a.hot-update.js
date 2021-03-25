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
                      height: "40",
                      style: {
                        position: "relative",
                        zIndex: 2
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
                        zIndex: 1,
                        left: 40
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy50c3giXSwibmFtZXMiOlsicGFnZSIsInVzZVN0YXRlIiwicmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwic2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlIiwiZmlsdGVyVGV4dCIsInNldEZpbHRlclRleHQiLCJhcmVuYV9pZCIsImRhdGUiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInJhbmtpbmciLCJyZWZldGNoIiwidXNlRWZmZWN0IiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3ViSGVhZGVyQ29tcG9uZW50TWVtbyIsInVzZU1lbW8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbHVtbnMiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkZpbHRlciIsIm9uU2V0T3B0aW9uIiwibGlzdCIsInVuaXEiLCJtYXAiLCJhIiwic2NvcmVjaGFsbGVuZ2VfaWQiLCJzb3J0IiwiYiIsImFyZW5hSWRMaXN0IiwiZmlsZUxpc3QiLCJkYXRlTGlzdCIsInVzZURyb3AiLCJhY2NlcHQiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJkcm9wIiwiaWQiLCJzZWxlY3RvciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJjZW50ZXIiLCJzb3J0YWJsZSIsImhpZGUiLCJjZWxsIiwicm93IiwiaWNvbiIsImdyb3ciLCJ1c2VEcmFnIiwidHlwZSIsImlzRHJhZ2dpbmciLCJjYW5EcmFnIiwiZW5kIiwiaXRlbSIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbGxlY3RlZCIsImRyYWciLCJkcmFnUHJldmlldyIsInBhcnR5IiwiZm9ybSIsIm1haW4iLCJzdWIxIiwic3ViMiIsIndlYXBvbiIsInRvU3RyaW5nIiwic2xpY2UiLCJhY2MiLCJwb3NpdGlvbiIsInNwZWNpYWxza2lsbCIsInpJbmRleCIsImxlZnQiLCJmb3JtX25vIiwiVGFiUGFuZWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiaW5kZXgiLCJvdGhlciIsImExMXlQcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNwQkMscUJBRG9CO0FBQUEsTUFDR0Msd0JBREg7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXBCRyxVQUZvQjtBQUFBLE1BRVJDLGFBRlE7O0FBQUEsbUJBR0NKLHNEQUFRLENBQUM7QUFDbkNLLFlBQVEsRUFBRSxJQUR5QjtBQUVuQ0MsUUFBSSxFQUFFO0FBRjZCLEdBQUQsQ0FIVDtBQUFBLE1BR3BCQyxNQUhvQjtBQUFBLE1BR1pDLFNBSFk7O0FBQUEsa0JBT1FDLDZEQUFRLENBQVEsV0FBUixzUkFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHcERDLDRDQUFLLENBQUNDLEdBQU4saUZBQ3FFSixNQUFNLENBQUNGLFFBRDVFLGNBQ3dGRSxNQUFNLENBQUNELElBRC9GLFdBSG9EOztBQUFBO0FBQUEsMkRBTTFETSxJQU4wRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FRckQsRUFScUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBckIsR0FQaEI7QUFBQSxNQU9iQyxPQVBhLGFBT25CRCxJQVBtQjtBQUFB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LDREQUFEO0FBQUEsa0JBQWFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O01BbkJRRixROztBQW9CVCxTQUFTSyxTQUFULENBQW1CRixLQUFuQixFQUEwQjtBQUN4QixTQUFPO0FBQ0x6QyxNQUFFLDJCQUFvQnlDLEtBQXBCLENBREc7QUFFTCxtREFBd0NBLEtBQXhDO0FBRkssR0FBUDtBQUlEOztBQUNELElBQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxVQUFkLENBQXlCQyxLQUR0QztBQUVKekUsV0FBSyxFQUFFO0FBRkg7QUFEaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZTdCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JhbmtpbmcuZjEwMTlkM2ZmMjM5ZjExYmQ3OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDYXJkLFxuICBGb3JtQ29udHJvbCxcbiAgR3JpZCxcbiAgSW5wdXRMYWJlbCxcbiAgbWFrZVN0eWxlcyxcbiAgUGFwZXIsXG4gIFNlbGVjdCxcbiAgVGFiLFxuICBUYWJzLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBDdXN0b21UYWJsZSBmcm9tIFwiLi4vY29udGFpbmVycy9ob29rcy9DdXN0b21UYWJsZVwiO1xuaW1wb3J0IHsgdXNlRHJhZywgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIjtcbmltcG9ydCB7IHVuaXEgfSBmcm9tIFwibG9kYXNoXCI7XG5jb25zdCBwYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Jlc2V0UGFnaW5hdGlvblRvZ2dsZSwgc2V0UmVzZXRQYWdpbmF0aW9uVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbHRlclRleHQsIHNldEZpbHRlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcHRpb24sIHNldE9wdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgYXJlbmFfaWQ6IFwiNTdcIixcbiAgICBkYXRlOiBcIjIwMjEtMDMtMjZcIixcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YTogcmFua2luZywgcmVmZXRjaCB9ID0gdXNlUXVlcnk8YW55W10+KFwiYXJlbmFsaXN0XCIsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vLWRhdGEvbWFzdGVyL3JhbmtpbmcvJHtvcHRpb24uYXJlbmFfaWR9LyR7b3B0aW9uLmRhdGV9Lmpzb25gXG4gICAgICAgIClcbiAgICAgICkuZGF0YTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWZldGNoKCk7XG4gIH0sIFtvcHRpb25dKTtcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcmFua2luZ1xuICAgID8gZmlsdGVyVGV4dCA9PT0gXCJcIlxuICAgICAgPyByYW5raW5nXG4gICAgICA6IHJhbmtpbmcuZmlsdGVyKChyKSA9PlxuICAgICAgICAgIHIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclRleHQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKVxuICAgIDogW107XG4gIGNvbnN0IHN1YkhlYWRlckNvbXBvbmVudE1lbW8gPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZpbHRlckNvbXBvbmVudFxuICAgICAgICBvbkZpbHRlcj17KGUpID0+IHNldEZpbHRlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBmaWx0ZXJUZXh0PXtmaWx0ZXJUZXh0fVxuICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgb25TZXRPcHRpb249eyhlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICBzZXRPcHRpb24oe1xuICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW2ZpbHRlclRleHQsIHJlc2V0UGFnaW5hdGlvblRvZ2dsZSwgb3B0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICA8Q3VzdG9tVGFibGVcbiAgICAgICAgdGl0bGU9XCJUb3AgMTAwMCBSYW5raW5nXCJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgZGF0YT17ZmlsdGVyZWREYXRhfVxuICAgICAgICBoaWdobGlnaHRPbkhvdmVyXG4gICAgICAgIHN0cmlwZWQ9e3RydWV9XG4gICAgICAgIGRlZmF1bHRTb3J0QXNjPXt0cnVlfVxuICAgICAgICBwYWdpbmF0aW9uUmVzZXREZWZhdWx0UGFnZT17cmVzZXRQYWdpbmF0aW9uVG9nZ2xlfVxuICAgICAgICBkZWZhdWx0U29ydEZpZWxkPVwiaWRcIlxuICAgICAgICBwYWdpbmF0aW9uXG4gICAgICAgIHN1YkhlYWRlckNvbXBvbmVudD17c3ViSGVhZGVyQ29tcG9uZW50TWVtb31cbiAgICAgICAgc3ViSGVhZGVyXG4gICAgICAvPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5jb25zdCBGaWx0ZXJDb21wb25lbnQgPSAoeyBmaWx0ZXJUZXh0LCBvbkZpbHRlciwgb3B0aW9uLCBvblNldE9wdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogYXJlbmFJZExpc3QgfSA9IHVzZVF1ZXJ5KGBhcmVuYUlkTGlzdGAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IGxpc3QgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vLWRhdGEvbWFzdGVyL2FyZW5hbGlzdC5qc29uYFxuICAgICk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIHVuaXEobGlzdC5tYXAoKGEpID0+IGEuc2NvcmVjaGFsbGVuZ2VfaWQpKS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIH0pO1xuICBjb25zdCB7IGRhdGE6IGRhdGVMaXN0LCByZWZldGNoIH0gPSB1c2VRdWVyeShcbiAgICBgZGF0ZUxpc3QtJHtvcHRpb24uYXJlbmFfaWR9YCxcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGE6IGxpc3QgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm8tZGF0YS9tYXN0ZXIvcmFua2luZy8ke29wdGlvbi5hcmVuYV9pZH0vbWV0YWRhdGEuanNvbmBcbiAgICAgICk7XG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5maWxlTGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGNvbnN0IFt7IGlzT3ZlciwgY2FuRHJvcCB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcbiAgICBhY2NlcHQ6IFwiTWVtYmVyXCIsXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3ZlcjogISFtb25pdG9yLmlzT3ZlcigpLFxuICAgICAgICBjYW5Ecm9wOiAhIW1vbml0b3IuY2FuRHJvcCgpLFxuICAgICAgfTtcbiAgICB9LFxuICB9KSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImFyZW5hLWlkXCI+QXJlbmEgSUQ8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17b25TZXRPcHRpb259XG4gICAgICAgICAgbmFtZT1cImFyZW5hX2lkXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiIH19XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb24uYXJlbmFfaWR9XG4gICAgICAgID5cbiAgICAgICAgICB7YXJlbmFJZExpc3RcbiAgICAgICAgICAgID8gYXJlbmFJZExpc3QubWFwKChpZDogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aWR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAge2lkfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBbXX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiRGF0ZVwiPkRhdGU8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17b25TZXRPcHRpb259XG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbi5kYXRlfVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGVMaXN0ICYmXG4gICAgICAgICAgICBkYXRlTGlzdC5tYXAoKGRhdGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRlfSBrZXk9e2RhdGV9PlxuICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiRmlsdGVyIEJ5IE5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIEJ5IE5hbWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggSW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtmaWx0ZXJUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7LyogPFRleHRGaWVsZCBpbm5lclJlZj17ZHJvcH0gLz4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuY29uc3QgY29sdW1uczogSURhdGFUYWJsZUNvbHVtbltdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6IFwicmFua1wiLFxuICAgIG5hbWU6IFwiUmFua1wiLFxuICAgIG1heFdpZHRoOiBcIjYwcHhcIixcbiAgICBtaW5XaWR0aDogXCIzMHB4XCIsXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiaWNvblwiLFxuICAgIG5hbWU6IFwiQXZhdGFyXCIsXG4gICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICBoaWRlOiBcInNtXCIsXG4gICAgY2VsbDogKHJvdykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvbk1lbWJlci9Tb3VyY2UvJHtyb3cuaWNvbn0ucG5nYH1cbiAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVXNlciBOYW1lXCIsXG4gICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgIG1heFdpZHRoOiBcIjE1MHB4XCIsXG4gICAgbWluV2lkdGg6IFwiNTBweFwiLFxuICAgIGdyb3c6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNjb3JlXCIsXG4gICAgc2VsZWN0b3I6IFwic2NvcmVcIixcbiAgICB3aWR0aDogXCIxMzBweFwiLFxuICAgIGhpZGU6IFwibWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRm9ybWF0aW9uXCIsXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIHdpZHRoOiBcIjQwMHB4XCIsXG4gICAgY2VsbDogKHJvdykgPT4ge1xuICAgICAgY29uc3QgW2NvbGxlY3RlZCwgZHJhZywgZHJhZ1ByZXZpZXddID0gdXNlRHJhZygoKSA9PiAoe1xuICAgICAgICB0eXBlOiBcIk1lbWJlclwiLFxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0RyYWdnaW5nOiAhIW1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkRyYWc6IHRydWUsXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcbiAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIHdyYXA9XCJub3dyYXBcIj5cbiAgICAgICAgICB7cm93LnBhcnR5Lm1hcCgoZm9ybSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIGl0ZW0ga2V5PXtmb3JtLmZvcm1fbm99PlxuICAgICAgICAgICAgICB7Zm9ybS5tYWluID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke2Zvcm0ubWFpbn0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybS5zdWIxICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2RyYWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25NZW1iZXIvU291cmNlLyR7Zm9ybS5zdWIxfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0uc3ViMiAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uTWVtYmVyL1NvdXJjZS8ke2Zvcm0uc3ViMn0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm0ud2VhcG9uICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9Db21tb24vSW1hZ2VzL0ljb25XZWFwb24vU291cmNlLyR7Zm9ybS53ZWFwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTEpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLmFjYyAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RoYWlucTMxMjcva29ub19hc3NldC9tYXN0ZXIvQXNzZXRzL0FkZHJlc3NhYmxlQXNzZXRzU3RvcmUvVW5pdHlBc3NldHMvQ29tbW9uL0ltYWdlcy9JY29uQWNjZXNzb3J5L1NvdXJjZS8ke2Zvcm0uYWNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtLnNwZWNpYWxza2lsbCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFpbnEzMTI3L2tvbm9fYXNzZXQvbWFzdGVyL0Fzc2V0cy9BZGRyZXNzYWJsZUFzc2V0c1N0b3JlL1VuaXR5QXNzZXRzL0NvbW1vbi9JbWFnZXMvSWNvblNwYXR0YWNrL1NvdXJjZS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnNwZWNpYWxza2lsbC50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArIFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhhaW5xMzEyNy9rb25vX2Fzc2V0L21hc3Rlci9Bc3NldHMvQWRkcmVzc2FibGVBc3NldHNTdG9yZS9Vbml0eUFzc2V0cy9PdXRHYW1lL1dpbmRvdy8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnNwZWNpYWxza2lsbC50b1N0cmluZygpLnNsaWNlKC0xKSA9PT0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbl9za2lsbF8wMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25fc2tpbGxfMDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgekluZGV4OiAxLCBsZWZ0OiA0MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxuXTtcblxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICBpZD17YGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZnVsbC13aWR0aC10YWItJHtpbmRleH1gfVxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXG4gICAgICAgIDxCb3ggcD17M30+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGBmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWAsXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6IGBmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgfTtcbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgd2lkdGg6IDUwMCxcbiAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9