/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerTransforms = __webpack_require__("./client/src/boot/registerTransforms.js");

var _registerTransforms2 = _interopRequireDefault(_registerTransforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
  (0, _registerTransforms2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(2);

var _Injector2 = _interopRequireDefault(_Injector);

var _Element = __webpack_require__("./client/src/components/ElementEditor/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _ElementActions = __webpack_require__("./client/src/components/ElementEditor/ElementActions.js");

var _ElementActions2 = _interopRequireDefault(_ElementActions);

var _ElementEditor = __webpack_require__("./client/src/components/ElementEditor/ElementEditor.js");

var _ElementEditor2 = _interopRequireDefault(_ElementEditor);

var _ElementList = __webpack_require__("./client/src/components/ElementEditor/ElementList.js");

var _ElementList2 = _interopRequireDefault(_ElementList);

var _Toolbar = __webpack_require__("./client/src/components/ElementEditor/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _AddNewButton = __webpack_require__("./client/src/components/ElementEditor/AddNewButton.js");

var _AddNewButton2 = _interopRequireDefault(_AddNewButton);

var _Header = __webpack_require__("./client/src/components/ElementEditor/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Content = __webpack_require__("./client/src/components/ElementEditor/Content.js");

var _Content2 = _interopRequireDefault(_Content);

var _Summary = __webpack_require__("./client/src/components/ElementEditor/Summary.js");

var _Summary2 = _interopRequireDefault(_Summary);

var _InlineEditForm = __webpack_require__("./client/src/components/ElementEditor/InlineEditForm.js");

var _InlineEditForm2 = _interopRequireDefault(_InlineEditForm);

var _AddElementPopover = __webpack_require__("./client/src/components/ElementEditor/AddElementPopover.js");

var _AddElementPopover2 = _interopRequireDefault(_AddElementPopover);

var _HoverBar = __webpack_require__("./client/src/components/ElementEditor/HoverBar.js");

var _HoverBar2 = _interopRequireDefault(_HoverBar);

var _DragPositionIndicator = __webpack_require__("./client/src/components/ElementEditor/DragPositionIndicator.js");

var _DragPositionIndicator2 = _interopRequireDefault(_DragPositionIndicator);

var _TextCheckboxGroupField = __webpack_require__("./client/src/components/TextCheckboxGroupField/TextCheckboxGroupField.js");

var _TextCheckboxGroupField2 = _interopRequireDefault(_TextCheckboxGroupField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    ElementEditor: _ElementEditor2.default,
    ElementToolbar: _Toolbar2.default,
    ElementAddNewButton: _AddNewButton2.default,
    ElementList: _ElementList2.default,
    Element: _Element2.default,
    ElementActions: _ElementActions2.default,
    ElementHeader: _Header2.default,
    ElementContent: _Content2.default,
    ElementSummary: _Summary2.default,
    ElementInlineEditForm: _InlineEditForm2.default,
    AddElementPopover: _AddElementPopover2.default,
    HoverBar: _HoverBar2.default,
    DragPositionIndicator: _DragPositionIndicator2.default,
    TextCheckboxGroupField: _TextCheckboxGroupField2.default
  });
};

/***/ }),

/***/ "./client/src/boot/registerTransforms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(2);

var _Injector2 = _interopRequireDefault(_Injector);

var _readOneBlockQuery = __webpack_require__("./client/src/state/history/readOneBlockQuery.js");

var _readOneBlockQuery2 = _interopRequireDefault(_readOneBlockQuery);

var _HistoricElementView = __webpack_require__("./client/src/components/HistoricElementView/HistoricElementView.js");

var _HistoricElementView2 = _interopRequireDefault(_HistoricElementView);

var _revertToBlockVersionMutation = __webpack_require__("./client/src/state/history/revertToBlockVersionMutation.js");

var _revertToBlockVersionMutation2 = _interopRequireDefault(_revertToBlockVersionMutation);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

var _readBlocksForAreaQuery2 = _interopRequireDefault(_readBlocksForAreaQuery);

var _addElementMutation = __webpack_require__("./client/src/state/editor/addElementMutation.js");

var _addElementMutation2 = _interopRequireDefault(_addElementMutation);

var _ArchiveAction = __webpack_require__("./client/src/components/ElementActions/ArchiveAction.js");

var _ArchiveAction2 = _interopRequireDefault(_ArchiveAction);

var _PublishAction = __webpack_require__("./client/src/components/ElementActions/PublishAction.js");

var _PublishAction2 = _interopRequireDefault(_PublishAction);

var _SaveAction = __webpack_require__("./client/src/components/ElementActions/SaveAction.js");

var _SaveAction2 = _interopRequireDefault(_SaveAction);

var _UnpublishAction = __webpack_require__("./client/src/components/ElementActions/UnpublishAction.js");

var _UnpublishAction2 = _interopRequireDefault(_UnpublishAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.transform('elemental-fieldgroup', function (updater) {
    updater.component('FieldGroup.HistoryViewer.VersionDetail', _HistoricElementView2.default, 'HistoricElement');
  }, {
    after: 'field-holders'
  });

  _Injector2.default.transform('elements-history', function (updater) {
    updater.component('HistoryViewer.Form_ItemEditForm', _readOneBlockQuery2.default, 'ElementHistoryViewer');
  });

  _Injector2.default.transform('blocks-history-revert', function (updater) {
    updater.component('HistoryViewerToolbar.VersionedAdmin.HistoryViewer.Element.HistoryViewerVersionDetail', _revertToBlockVersionMutation2.default, 'BlockRevertMutation');
  });

  _Injector2.default.transform('cms-element-editor', function (updater) {
    updater.component('ElementList', _readBlocksForAreaQuery2.default, 'PageElements');
  });

  _Injector2.default.transform('cms-element-adder', function (updater) {
    updater.component('AddElementPopover', _addElementMutation2.default, 'ElementAddButton');
  });

  _Injector2.default.transform('element-actions', function (updater) {
    updater.component('ElementActions', _SaveAction2.default, 'ElementActionsWithSave');
    updater.component('ElementActions', _ArchiveAction2.default, 'ElementActionsWithArchive');
    updater.component('ElementActions', _PublishAction2.default, 'ElementActionsWithPublish');
    updater.component('ElementActions', _UnpublishAction2.default, 'ElementActionsWithUnpublish');
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/ElementEditor/entwine.js");
__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/ElementActions/AbstractAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactstrap = __webpack_require__(10);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbstractAction = function AbstractAction(props) {
  var className = props.className,
      title = props.title;


  var itemProps = _extends({
    className: (0, _classnames2.default)(className, 'dropdown-item')
  }, props);

  return _react2.default.createElement(
    _reactstrap.DropdownItem,
    itemProps,
    title
  );
};

AbstractAction.propTypes = {
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  title: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _elementTypeType.elementTypeType,
  active: _propTypes2.default.bool
};

AbstractAction.defaultProps = {
  disabled: false
};

exports.default = AbstractAction;

/***/ }),

/***/ "./client/src/components/ElementActions/ArchiveAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(4);

var _AbstractAction = __webpack_require__("./client/src/components/ElementActions/AbstractAction.js");

var _AbstractAction2 = _interopRequireDefault(_AbstractAction);

var _archiveBlockMutation = __webpack_require__("./client/src/state/editor/archiveBlockMutation.js");

var _archiveBlockMutation2 = _interopRequireDefault(_archiveBlockMutation);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArchiveAction = function ArchiveAction(MenuComponent) {
  return function (props) {
    var handleClick = function handleClick(event) {
      event.stopPropagation();

      var id = props.element.ID,
          isPublished = props.isPublished,
          handleArchiveBlock = props.actions.handleArchiveBlock;


      var archiveMessage = _i18n2.default._t('ElementArchiveAction.CONFIRM_DELETE', 'Are you sure you want to send this block to the archive?');

      if (isPublished) {
        archiveMessage = _i18n2.default._t('ElementArchiveAction.CONFIRM_DELETE_AND_UNPUBLISH', 'Warning: This block will be unpublished before being sent to the archive. Are you sure you want to proceed?');
      }

      if (handleArchiveBlock && window.confirm(archiveMessage)) {
        handleArchiveBlock(id).then(function () {
          var preview = window.jQuery('.cms-preview');
          preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));
        });
      }
    };

    var newProps = {
      title: _i18n2.default._t('ElementArchiveAction.ARCHIVE', 'Archive'),
      className: 'element-editor__actions-archive',
      onClick: handleClick,
      toggle: props.toggle
    };

    return _react2.default.createElement(
      MenuComponent,
      props,
      props.children,
      _react2.default.createElement(_AbstractAction2.default, newProps)
    );
  };
};

exports.Component = ArchiveAction;
exports.default = (0, _redux.compose)(_archiveBlockMutation2.default, ArchiveAction);

/***/ }),

/***/ "./client/src/components/ElementActions/PublishAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(4);

var _AbstractAction = __webpack_require__("./client/src/components/ElementActions/AbstractAction.js");

var _AbstractAction2 = _interopRequireDefault(_AbstractAction);

var _publishBlockMutation = __webpack_require__("./client/src/state/editor/publishBlockMutation.js");

var _publishBlockMutation2 = _interopRequireDefault(_publishBlockMutation);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _Backend = __webpack_require__(13);

var _Backend2 = _interopRequireDefault(_Backend);

var _reactRedux = __webpack_require__(8);

var _loadElementSchemaValue = __webpack_require__("./client/src/state/editor/loadElementSchemaValue.js");

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reduxForm = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reportPublicationStatus = function reportPublicationStatus(type, title, success) {
  var noTitle = _i18n2.default.inject(_i18n2.default._t('ElementHeader.NOTITLE', 'Untitled {type} block'), { type: type });
  var successMessage = _i18n2.default.inject(_i18n2.default._t('ElementPublishAction.SUCCESS_NOTIFICATION', 'Published \'{title}\' successfully'), { title: title || noTitle });
  var errorMessage = _i18n2.default.inject(_i18n2.default._t('ElementPublishAction.ERROR_NOTIFICATION', 'Error publishing \'{title}\''), { title: title || noTitle });
  window.jQuery.noticeAdd({
    text: success ? successMessage : errorMessage,
    stay: false,
    type: success ? 'success' : 'error'
  });
};

var performSaveForElementWithFormData = function performSaveForElementWithFormData(id, formData, securityId) {
  var saveEndpoint = _Backend2.default.createEndpointFetcher({
    url: (0, _loadElementSchemaValue.loadElementSchemaValue)('saveUrl', id),
    method: (0, _loadElementSchemaValue.loadElementSchemaValue)('saveMethod'),
    payloadFormat: (0, _loadElementSchemaValue.loadElementSchemaValue)('payloadFormat'),
    defaultData: {
      SecurityID: securityId
    }
  });

  return saveEndpoint(formData).then(function () {
    return window.ss.apolloClient.queryManager.reFetchObservableQueries();
  }).then(function (input) {
    var preview = window.jQuery('.cms-preview');
    preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));
    return input;
  }).then(function (newPageData) {
    var newElementData = newPageData[0] && newPageData[0].data.readOneElementalArea.Elements.edges.find(function (elementData) {
      return elementData.node.ID === id;
    });
    return newElementData && newElementData.node.Version;
  });
};

var PublishAction = function PublishAction(MenuComponent) {
  return function (props) {
    var element = props.element,
        formDirty = props.formDirty;


    var handleClick = function handleClick(event) {
      event.stopPropagation();

      var _props$element = props.element,
          id = _props$element.ID,
          title = _props$element.Title,
          version = _props$element.Version,
          type = props.type,
          securityId = props.securityId,
          formData = props.formData,
          handlePublishBlock = props.actions.handlePublishBlock,
          reinitialiseForm = props.reinitialiseForm;


      var actionFlow = new Promise(function (resolve) {
        return resolve(version);
      });

      if (formDirty) {
        actionFlow = performSaveForElementWithFormData(id, formData, securityId).then(function (passthrough) {
          reinitialiseForm(formData);
          return passthrough;
        });
      }

      actionFlow.then(function (versionToPublish) {
        return handlePublishBlock(id, 'DRAFT', 'LIVE', versionToPublish);
      }).then(function () {
        return reportPublicationStatus(type.title, title, true);
      }).catch(function () {
        return reportPublicationStatus(type.title, title, false);
      });
    };

    var newProps = {
      title: _i18n2.default._t('ElementPublishAction.PUBLISH', 'Publish'),
      className: 'element-editor__actions-publish',
      onClick: handleClick,
      toggle: props.toggle
    };

    return _react2.default.createElement(
      MenuComponent,
      props,
      props.children,
      (formDirty || !element.IsLiveVersion) && _react2.default.createElement(_AbstractAction2.default, newProps)
    );
  };
};

function mapStateToProps(state, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  var formData = null;

  if (state.form.formState.element && state.form.formState.element[formName]) {
    formData = state.form.formState.element[formName].values;
  }

  return {
    formData: formData,
    securityId: state.config.SecurityID,
    formDirty: state.unsavedForms.find(function (unsaved) {
      return unsaved.name === 'element.' + formName;
    })
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  return {
    reinitialiseForm: function reinitialiseForm(savedData) {
      dispatch((0, _reduxForm.initialize)('element.' + formName, savedData));
    }
  };
}

exports.Component = PublishAction;
exports.default = (0, _redux.compose)(_publishBlockMutation2.default, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), PublishAction);

/***/ }),

/***/ "./client/src/components/ElementActions/SaveAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(4);

var _reactRedux = __webpack_require__(8);

var _AbstractAction = __webpack_require__("./client/src/components/ElementActions/AbstractAction.js");

var _AbstractAction2 = _interopRequireDefault(_AbstractAction);

var _Backend = __webpack_require__(13);

var _Backend2 = _interopRequireDefault(_Backend);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _loadElementSchemaValue = __webpack_require__("./client/src/state/editor/loadElementSchemaValue.js");

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reduxForm = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveAction = function SaveAction(MenuComponent) {
  return function (props) {
    var handleClick = function handleClick(event) {
      event.stopPropagation();

      var element = props.element,
          type = props.type,
          securityId = props.securityId,
          formData = props.formData,
          reinitialiseForm = props.reinitialiseForm;
      var _window = window,
          $ = _window.jQuery;

      var noTitle = _i18n2.default.inject(_i18n2.default._t('ElementHeader.NOTITLE', 'Untitled {type} block'), { type: type.title });

      var endpointSpec = {
        url: (0, _loadElementSchemaValue.loadElementSchemaValue)('saveUrl', element.ID),
        method: (0, _loadElementSchemaValue.loadElementSchemaValue)('saveMethod'),
        payloadFormat: (0, _loadElementSchemaValue.loadElementSchemaValue)('payloadFormat'),
        defaultData: {
          SecurityID: securityId
        }
      };

      var endpoint = _Backend2.default.createEndpointFetcher(endpointSpec);
      endpoint(formData).then(function () {
        var apolloClient = window.ss.apolloClient;

        apolloClient.queryManager.reFetchObservableQueries();
        reinitialiseForm(formData);

        var preview = $('.cms-preview');
        preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));

        var newTitle = formData ? formData['PageElements_' + element.ID + '_Title'] : null;
        $.noticeAdd({
          text: _i18n2.default.inject(_i18n2.default._t('ElementSaveAction.SUCCESS_NOTIFICATION', 'Saved \'{title}\' successfully'), { title: newTitle || noTitle }),
          stay: false,
          type: 'success'
        });
      }).catch(function () {
        $.noticeAdd({
          text: _i18n2.default.inject(_i18n2.default._t('ElementSaveAction.ERROR_NOTIFICATION', 'Error saving \'{title}\''), { title: element.Title || noTitle }),
          stay: false,
          type: 'error'
        });
      });
    };

    var newProps = {
      title: _i18n2.default._t('ElementSaveAction.SAVE', 'Save'),
      className: 'element-editor__actions-save',
      onClick: handleClick
    };

    return _react2.default.createElement(
      MenuComponent,
      props,
      props.children,
      _react2.default.createElement(_AbstractAction2.default, newProps)
    );
  };
};

function mapStateToProps(state, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  var formData = null;

  if (state.form.formState.element && state.form.formState.element[formName]) {
    formData = state.form.formState.element[formName].values;
  }

  return {
    formData: formData,
    securityId: state.config.SecurityID
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  return {
    reinitialiseForm: function reinitialiseForm(savedData) {
      dispatch((0, _reduxForm.initialize)('element.' + formName, savedData));
    }
  };
}

exports.Component = SaveAction;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), SaveAction);

/***/ }),

/***/ "./client/src/components/ElementActions/UnpublishAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(4);

var _AbstractAction = __webpack_require__("./client/src/components/ElementActions/AbstractAction.js");

var _AbstractAction2 = _interopRequireDefault(_AbstractAction);

var _unpublishBlockMutation = __webpack_require__("./client/src/state/editor/unpublishBlockMutation.js");

var _unpublishBlockMutation2 = _interopRequireDefault(_unpublishBlockMutation);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnpublishAction = function UnpublishAction(MenuComponent) {
  return function (props) {
    var element = props.element,
        type = props.type,
        handleUnpublishBlock = props.actions.handleUnpublishBlock;


    var handleClick = function handleClick(event) {
      event.stopPropagation();
      var _window = window,
          $ = _window.jQuery;

      var noTitle = _i18n2.default.inject(_i18n2.default._t('ElementHeader.NOTITLE', 'Untitled {type} block'), { type: type.title });

      if (handleUnpublishBlock) {
        handleUnpublishBlock(element.ID).then(function () {
          var preview = $('.cms-preview');
          preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));

          $.noticeAdd({
            text: _i18n2.default.inject(_i18n2.default._t('ElementUnpublishAction.SUCCESS_NOTIFICATION', 'Removed \'{title}\' from the published page'), { title: element.Title || noTitle }),
            stay: false,
            type: 'success'
          });
        }).catch(function () {
          $.noticeAdd({
            text: _i18n2.default.inject(_i18n2.default._t('ElementUnpublishAction.ERROR_NOTIFICATION', 'Error unpublishing \'{title}\''), { title: element.Title || noTitle }),
            stay: false,
            type: 'error'
          });
        });
      }
    };

    var newProps = {
      title: _i18n2.default._t('ElementUnpublishAction.UNPUBLISH', 'Unpublish'),
      className: 'element-editor__actions-unpublish',
      onClick: handleClick,
      toggle: props.toggle
    };

    return _react2.default.createElement(
      MenuComponent,
      props,
      props.children,
      element.IsPublished && _react2.default.createElement(_AbstractAction2.default, newProps)
    );
  };
};

exports.Component = UnpublishAction;
exports.default = (0, _redux.compose)(_unpublishBlockMutation2.default, UnpublishAction);

/***/ }),

/***/ "./client/src/components/ElementEditor/AddElementPopover.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Injector = __webpack_require__(2);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddElementPopover = function (_Component) {
  _inherits(AddElementPopover, _Component);

  function AddElementPopover(props) {
    _classCallCheck(this, AddElementPopover);

    var _this = _possibleConstructorReturn(this, (AddElementPopover.__proto__ || Object.getPrototypeOf(AddElementPopover)).call(this, props));

    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(AddElementPopover, [{
    key: 'getElementButtonClickHandler',
    value: function getElementButtonClickHandler(elementType) {
      var _this2 = this;

      return function (event) {
        var _props = _this2.props,
            handleAddElementToArea = _props.actions.handleAddElementToArea,
            insertAfterElement = _props.insertAfterElement;


        event.preventDefault();

        handleAddElementToArea(elementType.class, insertAfterElement).then(function () {
          var preview = window.jQuery('.cms-preview');
          preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));
        });
        _this2.handleToggle();
      };
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      switch (event.key) {
        case 'Escape':
          this.handleToggle();
          break;
        default:
      }
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      var toggle = this.props.toggle;


      toggle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          PopoverOptionSetComponent = _props2.PopoverOptionSetComponent,
          elementTypes = _props2.elementTypes,
          container = _props2.container,
          extraClass = _props2.extraClass,
          isOpen = _props2.isOpen,
          placement = _props2.placement,
          target = _props2.target;


      var popoverClassNames = (0, _classnames2.default)('element-editor-add-element', extraClass);

      var buttons = elementTypes.map(function (elementType) {
        return {
          content: elementType.title,
          key: elementType.name,
          className: (0, _classnames2.default)(elementType.icon, 'btn--icon-xl', 'element-editor-add-element__button'),
          onClick: _this3.getElementButtonClickHandler(elementType)
        };
      });

      return _react2.default.createElement(PopoverOptionSetComponent, {
        buttons: buttons,
        searchPlaceholder: _i18n2.default._t('ElementAddElementPopover.SEARCH_BLOCKS', 'Search blocks'),
        extraClass: popoverClassNames,
        container: container,
        isOpen: isOpen,
        placement: placement,
        target: target,
        toggle: this.handleToggle
      });
    }
  }]);

  return AddElementPopover;
}(_react.Component);

AddElementPopover.propTypes = {
  container: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]),
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  extraClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  isOpen: _propTypes2.default.bool.isRequired,
  placement: _propTypes2.default.string,
  target: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired,
  toggle: _propTypes2.default.func.isRequired,

  areaId: _propTypes2.default.number.isRequired,
  insertAfterElement: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = (0, _Injector.inject)(['PopoverOptionSet'], function (PopoverOptionSetComponent) {
  return {
    PopoverOptionSetComponent: PopoverOptionSetComponent
  };
}, function () {
  return 'ElementEditor';
})(AddElementPopover);

/***/ }),

/***/ "./client/src/components/ElementEditor/AddNewButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(10);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _Injector = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddNewButton = function (_Component) {
  _inherits(AddNewButton, _Component);

  function AddNewButton(props) {
    _classCallCheck(this, AddNewButton);

    var _this = _possibleConstructorReturn(this, (AddNewButton.__proto__ || Object.getPrototypeOf(AddNewButton)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(AddNewButton, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          AddElementPopoverComponent = _props.AddElementPopoverComponent,
          elementTypes = _props.elementTypes,
          areaId = _props.areaId;

      var buttonAttributes = {
        id: 'ElementalArea' + areaId + '_AddButton',
        color: 'primary',
        onClick: this.toggle,
        className: 'font-icon-plus'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          buttonAttributes,
          _i18n2.default._t('ElementAddNewButton.ADD_BLOCK', 'Add block')
        ),
        _react2.default.createElement(AddElementPopoverComponent, {
          placement: 'bottom-start',
          target: buttonAttributes.id,
          isOpen: this.state.popoverOpen,
          elementTypes: elementTypes,
          toggle: this.toggle,
          areaId: areaId,
          insertAfterElement: 0
        })
      );
    }
  }]);

  return AddNewButton;
}(_react.Component);

AddNewButton.defaultProps = {};
AddNewButton.propTypes = {
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  areaId: _propTypes2.default.number.isRequired
};

exports.Component = AddNewButton;
exports.default = (0, _Injector.inject)(['AddElementPopover'], function (AddElementPopoverComponent) {
  return {
    AddElementPopoverComponent: AddElementPopoverComponent
  };
}, function () {
  return 'ElementEditor.ElementList.AddNewButton';
})(AddNewButton);

/***/ }),

/***/ "./client/src/components/ElementEditor/Content.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(2);

var _redux = __webpack_require__(4);

var _reactRedux = __webpack_require__(8);

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reduxForm = __webpack_require__(11);

var _getFormState = __webpack_require__(16);

var _getFormState2 = _interopRequireDefault(_getFormState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_PureComponent) {
  _inherits(Content, _PureComponent);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          fileUrl = _props.fileUrl,
          fileTitle = _props.fileTitle,
          content = _props.content,
          previewExpanded = _props.previewExpanded,
          InlineEditFormComponent = _props.InlineEditFormComponent,
          SummaryComponent = _props.SummaryComponent,
          activeTab = _props.activeTab,
          onFormInit = _props.onFormInit,
          handleLoadingError = _props.handleLoadingError,
          formDirty = _props.formDirty;


      return _react2.default.createElement(
        'div',
        { className: 'element-editor-content' },
        !previewExpanded && _react2.default.createElement(SummaryComponent, {
          content: content,
          fileUrl: fileUrl,
          fileTitle: fileTitle
        }),
        previewExpanded && _react2.default.createElement(InlineEditFormComponent, {
          extraClass: { 'element-editor-editform--collapsed': !previewExpanded },
          onClick: function onClick(event) {
            return event.stopPropagation();
          },
          elementId: id,
          activeTab: activeTab,
          onFormInit: onFormInit,
          handleLoadingError: handleLoadingError
        }),
        formDirty && _react2.default.createElement('input', {
          type: 'hidden',
          name: 'change-tracker',
          className: 'element-form-dirty-state',
          value: '1'
        })
      );
    }
  }]);

  return Content;
}(_react.PureComponent);

Content.propTypes = {
  id: _propTypes2.default.string,
  content: _propTypes2.default.string,
  fileUrl: _propTypes2.default.string,
  fileTitle: _propTypes2.default.string,
  previewExpanded: _propTypes2.default.bool,
  SummaryComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  InlineEditFormComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  handleLoadingError: _propTypes2.default.func
};

Content.defaultProps = {};

function mapStateToProps(state, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.id);

  return {
    formDirty: (0, _reduxForm.isDirty)('element.' + formName, _getFormState2.default)(state)
  };
}

exports.Component = Content;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['ElementSummary', 'ElementInlineEditForm'], function (SummaryComponent, InlineEditFormComponent) {
  return {
    SummaryComponent: SummaryComponent, InlineEditFormComponent: InlineEditFormComponent
  };
}, function () {
  return 'ElementEditor.ElementList.Element';
}), (0, _reactRedux.connect)(mapStateToProps))(Content);

/***/ }),

/***/ "./client/src/components/ElementEditor/DragPositionIndicator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragPositionIndicator = function (_PureComponent) {
  _inherits(DragPositionIndicator, _PureComponent);

  function DragPositionIndicator() {
    _classCallCheck(this, DragPositionIndicator);

    return _possibleConstructorReturn(this, (DragPositionIndicator.__proto__ || Object.getPrototypeOf(DragPositionIndicator)).apply(this, arguments));
  }

  _createClass(DragPositionIndicator, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "elemental-editor-drag-indicator" },
        _react2.default.createElement("div", { className: "elemental-editor-drag-indicator__ball" })
      );
    }
  }]);

  return DragPositionIndicator;
}(_react.PureComponent);

exports.default = DragPositionIndicator;

/***/ }),

/***/ "./client/src/components/ElementEditor/Element.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__("./client/src/types/elementType.js");

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _redux = __webpack_require__(4);

var _Injector = __webpack_require__(2);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(8);

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _loadElementSchemaValue = __webpack_require__("./client/src/state/editor/loadElementSchemaValue.js");

var _TabsActions = __webpack_require__(20);

var TabsActions = _interopRequireWildcard(_TabsActions);

var _reactDnd = __webpack_require__(9);

var _reactDndHtml5Backend = __webpack_require__(14);

var _dragHelpers = __webpack_require__("./client/src/lib/dragHelpers.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = function (_Component) {
  _inherits(Element, _Component);

  function Element(props) {
    _classCallCheck(this, Element);

    var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleExpand = _this.handleExpand.bind(_this);
    _this.handleLoadingError = _this.handleLoadingError.bind(_this);
    _this.handleTabClick = _this.handleTabClick.bind(_this);
    _this.updateFormTab = _this.updateFormTab.bind(_this);

    _this.state = {
      previewExpanded: false,
      initialTab: '',
      loadingError: false
    };
    return _this;
  }

  _createClass(Element, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;

      if (connectDragPreview) {
        connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
          captureDraggingState: true
        });
      }
    }
  }, {
    key: 'getVersionedStateClassName',
    value: function getVersionedStateClassName() {
      var element = this.props.element;


      var baseClassName = 'element-editor__element';

      if (!element.IsPublished) {
        return baseClassName + '--draft';
      }

      if (element.IsPublished && !element.IsLiveVersion) {
        return baseClassName + '--modified';
      }

      return baseClassName + '--published';
    }
  }, {
    key: 'handleLoadingError',
    value: function handleLoadingError() {
      this.setState({
        loadingError: true
      });
    }
  }, {
    key: 'updateFormTab',
    value: function updateFormTab(activeTab) {
      var _props = this.props,
          tabSetName = _props.tabSetName,
          onActivateTab = _props.onActivateTab;
      var initialTab = this.state.initialTab;


      if (!initialTab) {
        this.setState({
          initialTab: activeTab
        });
      }

      if (activeTab || initialTab) {
        onActivateTab(tabSetName, activeTab || initialTab);
      } else {
        var defaultFirstTab = 'Main';
        onActivateTab(tabSetName, defaultFirstTab);
      }
    }
  }, {
    key: 'handleTabClick',
    value: function handleTabClick(toBeActiveTab) {
      var activeTab = this.props.activeTab;
      var loadingError = this.state.loadingError;


      if (toBeActiveTab !== activeTab && !loadingError) {
        this.setState({
          previewExpanded: true
        });

        this.updateFormTab(toBeActiveTab);
      }
    }
  }, {
    key: 'handleExpand',
    value: function handleExpand(event) {
      var _props2 = this.props,
          type = _props2.type,
          link = _props2.link;
      var loadingError = this.state.loadingError;


      if (event.target.type === 'button') {
        event.stopPropagation();
        return;
      }

      if (type.inlineEditable && !loadingError) {
        this.setState({
          previewExpanded: !this.state.previewExpanded
        });
        return;
      }

      window.location = link;
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      var nodeName = event.target.nodeName;


      if ((event.key === ' ' || event.key === 'Enter') && !['input', 'textarea'].includes(nodeName.toLowerCase())) {
        this.handleExpand(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          element = _props3.element,
          type = _props3.type,
          areaId = _props3.areaId,
          HeaderComponent = _props3.HeaderComponent,
          ContentComponent = _props3.ContentComponent,
          link = _props3.link,
          activeTab = _props3.activeTab,
          connectDragSource = _props3.connectDragSource,
          connectDropTarget = _props3.connectDropTarget,
          isDragging = _props3.isDragging,
          isOver = _props3.isOver,
          onDragEnd = _props3.onDragEnd;
      var previewExpanded = this.state.previewExpanded;


      if (!element.ID) {
        return null;
      }

      var linkTitle = _i18n2.default.inject(_i18n2.default._t('ElementalElement.TITLE', 'Edit this {type} block'), { type: type.title });

      var elementClassNames = (0, _classnames2.default)('element-editor__element', {
        'element-editor__element--expandable': type.inlineEditable,
        'element-editor__element--dragging': isDragging,
        'element-editor__element--dragged-over': isOver
      }, this.getVersionedStateClassName());

      var content = connectDropTarget(_react2.default.createElement(
        'div',
        {
          className: elementClassNames,
          onClick: this.handleExpand,
          onKeyUp: this.handleKeyUp,
          role: 'button',
          tabIndex: 0,
          title: linkTitle,
          key: element.ID
        },
        _react2.default.createElement(HeaderComponent, {
          element: element,
          type: type,
          areaId: areaId,
          expandable: type.inlineEditable,
          link: link,
          previewExpanded: previewExpanded,
          handleEditTabsClick: this.handleTabClick,
          activeTab: activeTab,
          disableTooltip: isDragging,
          onDragEnd: onDragEnd
        }),
        _react2.default.createElement(ContentComponent, {
          id: element.ID,
          fileUrl: element.BlockSchema.fileURL,
          fileTitle: element.BlockSchema.fileTitle,
          content: element.BlockSchema.content,
          previewExpanded: previewExpanded && !isDragging,
          activeTab: activeTab,
          onFormInit: function onFormInit() {
            return _this2.updateFormTab(activeTab);
          },
          handleLoadingError: this.handleLoadingError
        })
      ));

      if (!previewExpanded) {
        return connectDragSource(content);
      }

      return content;
    }
  }]);

  return Element;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var elementId = ownProps.element.ID;
  var elementName = (0, _loadElementFormStateName.loadElementFormStateName)(elementId);
  var elementFormSchema = (0, _loadElementSchemaValue.loadElementSchemaValue)('schemaUrl', elementId);

  var filterFieldsForTabs = function filterFieldsForTabs(field) {
    return field.component === 'Tabs';
  };

  var tabSet = state.form && state.form.formSchemas[elementFormSchema] && state.form.formSchemas[elementFormSchema].schema && state.form.formSchemas[elementFormSchema].schema.fields.find(filterFieldsForTabs);

  var tabSetName = tabSet && tabSet.id;
  var uniqueFieldId = 'element.' + elementName + '__' + tabSetName;

  var activeTab = state.tabs && state.tabs.fields && state.tabs.fields[uniqueFieldId] && state.tabs.fields[uniqueFieldId].activeTab;

  return {
    tabSetName: tabSetName,
    activeTab: activeTab
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  var elementName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  return {
    onActivateTab: function onActivateTab(tabSetName, activeTabName) {
      dispatch(TabsActions.activateTab('element.' + elementName + '__' + tabSetName, activeTabName));
    }
  };
}

Element.propTypes = {
  element: _elementType.elementType,
  type: _elementTypeType.elementTypeType.isRequired,
  areaId: _propTypes2.default.number.isRequired,
  link: _propTypes2.default.string.isRequired,

  activeTab: _propTypes2.default.string,
  tabSetName: _propTypes2.default.string,
  onActivateTab: _propTypes2.default.func,
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  connectDropTarget: _propTypes2.default.func.isRequired,
  isDragging: _propTypes2.default.bool.isRequired,
  isOver: _propTypes2.default.bool.isRequired,
  onDragOver: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func };

Element.defaultProps = {
  element: null
};

exports.Component = Element;


var elementTarget = {
  drop: function drop(props, monitor, component) {
    var element = props.element;


    return {
      target: element.ID,
      dropSpot: (0, _dragHelpers.isOverTop)(monitor, component) ? 'top' : 'bottom'
    };
  },
  hover: function hover(props, monitor, component) {
    var element = props.element,
        onDragOver = props.onDragOver;


    if (onDragOver) {
      onDragOver(element, (0, _dragHelpers.isOverTop)(monitor, component));
    }
  }
};

exports.default = (0, _redux.compose)((0, _reactDnd.DropTarget)('element', elementTarget, function (connector, monitor) {
  return {
    connectDropTarget: connector.dropTarget(),
    isOver: monitor.isOver()
  };
}), (0, _reactDnd.DragSource)('element', _dragHelpers.elementDragSource, function (connector, monitor) {
  return {
    connectDragSource: connector.dragSource(),
    connectDragPreview: connector.dragPreview(),
    isDragging: monitor.isDragging()
  };
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _Injector.inject)(['ElementHeader', 'ElementContent'], function (HeaderComponent, ContentComponent) {
  return {
    HeaderComponent: HeaderComponent, ContentComponent: ContentComponent
  };
}, function () {
  return 'ElementEditor.ElementList.Element';
}))(Element);

/***/ }),

/***/ "./client/src/components/ElementEditor/ElementActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(4);

var _reactstrap = __webpack_require__(10);

var _Injector = __webpack_require__(2);

var _elementType = __webpack_require__("./client/src/types/elementType.js");

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _AbstractAction = __webpack_require__("./client/src/components/ElementActions/AbstractAction.js");

var _AbstractAction2 = _interopRequireDefault(_AbstractAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementActions = function (_Component) {
  _inherits(ElementActions, _Component);

  function ElementActions(props) {
    _classCallCheck(this, ElementActions);

    var _this = _possibleConstructorReturn(this, (ElementActions.__proto__ || Object.getPrototypeOf(ElementActions)).call(this, props));

    _this.handleEditTabsClick = _this.handleEditTabsClick.bind(_this);
    return _this;
  }

  _createClass(ElementActions, [{
    key: 'handleEditTabsClick',
    value: function handleEditTabsClick(event) {
      var handleEditTabsClick = this.props.handleEditTabsClick;

      handleEditTabsClick(event.target.name);
    }
  }, {
    key: 'renderEditTabs',
    value: function renderEditTabs() {
      var _this2 = this;

      var _props = this.props,
          editTabs = _props.editTabs,
          activeTab = _props.activeTab,
          type = _props.type;


      if (!editTabs || !editTabs.length) {
        return null;
      }

      return editTabs.map(function (_ref) {
        var name = _ref.name,
            title = _ref.title;
        return _react2.default.createElement(_AbstractAction2.default, {
          key: name,
          name: name,
          title: title,
          type: type,
          onClick: _this2.handleEditTabsClick,
          active: name === activeTab
        });
      });
    }
  }, {
    key: 'renderDivider',
    value: function renderDivider() {
      var _props2 = this.props,
          children = _props2.children,
          editTabs = _props2.editTabs;


      if (editTabs && editTabs.length && _react2.default.Children.count(children)) {
        return _react2.default.createElement(_reactstrap.DropdownItem, { divider: true, role: 'separator' });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          id = _props3.id,
          ActionMenuComponent = _props3.ActionMenuComponent;


      var dropdownToggleClassNames = ['element-editor-header__actions-toggle', 'btn', 'btn-sm', 'btn--no-text', 'font-icon-dot-3'];

      return _react2.default.createElement(
        ActionMenuComponent,
        {
          id: 'element-editor-actions-' + id,
          className: 'element-editor-header__actions-dropdown',
          dropdownMenuProps: { right: true },
          dropdownToggleClassNames: dropdownToggleClassNames
        },
        this.renderEditTabs(),
        this.renderDivider(),
        children
      );
    }
  }]);

  return ElementActions;
}(_react.Component);

ElementActions.propTypes = {
  element: _elementType.elementType,
  type: _elementTypeType.elementTypeType.isRequired,

  areaId: _propTypes2.default.number.isRequired,
  activeTab: _propTypes2.default.string,
  editTabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    name: _propTypes2.default.string
  })),
  handleEditTabsClick: _propTypes2.default.func.isRequired
};

ElementActions.defaultProps = {
  editTabs: []
};

exports.Component = ElementActions;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['ActionMenu'], function (ActionMenuComponent) {
  return {
    ActionMenuComponent: ActionMenuComponent
  };
}, function () {
  return 'ElementEditor.ElementList.Element';
}))(ElementActions);

/***/ }),

/***/ "./client/src/components/ElementEditor/ElementDragPreview.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__("./client/src/components/ElementEditor/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _reactDnd = __webpack_require__(9);

var _elementType = __webpack_require__("./client/src/types/elementType.js");

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _elementConfig = __webpack_require__("./client/src/state/editor/elementConfig.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementDragPreview = function (_Component) {
  _inherits(ElementDragPreview, _Component);

  function ElementDragPreview() {
    _classCallCheck(this, ElementDragPreview);

    return _possibleConstructorReturn(this, (ElementDragPreview.__proto__ || Object.getPrototypeOf(ElementDragPreview)).apply(this, arguments));
  }

  _createClass(ElementDragPreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDragging = _props.isDragging,
          element = _props.element,
          elementTypes = _props.elementTypes,
          currentOffset = _props.currentOffset;


      if (!isDragging || !currentOffset) {
        return null;
      }

      var x = currentOffset.x,
          y = currentOffset.y;

      var transform = 'translate(' + x + 'px, ' + y + 'px)';
      var style = {
        transform: transform,
        WebkitTransform: transform
      };
      var type = (0, _elementConfig.getElementTypeConfig)(element.BlockSchema.typeName, elementTypes);

      return _react2.default.createElement(
        'div',
        { className: 'element-editor-drag-preview', style: style },
        _react2.default.createElement(_Header2.default, {
          element: element,
          type: type,
          simple: true
        })
      );
    }
  }]);

  return ElementDragPreview;
}(_react.Component);

ElementDragPreview.propTypes = {
  element: _elementType.elementType,
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType),
  isDragging: _propTypes2.default.bool,
  currentOffset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  })
};

exports.default = (0, _reactDnd.DragLayer)(function (monitor) {
  return {
    element: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
})(ElementDragPreview);

/***/ }),

/***/ "./client/src/components/ElementEditor/ElementEditor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(2);

var _redux = __webpack_require__(4);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _reactRedux = __webpack_require__(8);

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reactDnd = __webpack_require__(9);

var _sortBlockMutation = __webpack_require__("./client/src/state/editor/sortBlockMutation.js");

var _sortBlockMutation2 = _interopRequireDefault(_sortBlockMutation);

var _ElementDragPreview = __webpack_require__("./client/src/components/ElementEditor/ElementDragPreview.js");

var _ElementDragPreview2 = _interopRequireDefault(_ElementDragPreview);

var _withDragDropContext = __webpack_require__(21);

var _withDragDropContext2 = _interopRequireDefault(_withDragDropContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementEditor = function (_PureComponent) {
  _inherits(ElementEditor, _PureComponent);

  function ElementEditor(props) {
    _classCallCheck(this, ElementEditor);

    var _this = _possibleConstructorReturn(this, (ElementEditor.__proto__ || Object.getPrototypeOf(ElementEditor)).call(this, props));

    _this.state = {
      dragTargetElementId: null,
      dragSpot: null
    };

    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    return _this;
  }

  _createClass(ElementEditor, [{
    key: 'handleDragOver',
    value: function handleDragOver() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var isOverTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var id = element ? element.ID : false;

      this.setState({
        dragTargetElementId: id,
        dragSpot: isOverTop === false ? 'bottom' : 'top'
      });
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd(sourceId, afterId) {
      var _props = this.props,
          handleSortBlock = _props.actions.handleSortBlock,
          areaId = _props.areaId;


      handleSortBlock(sourceId, afterId, areaId).then(function () {
        var preview = window.jQuery('.cms-preview');
        preview.entwine('ss.preview')._loadUrl(preview.find('iframe').attr('src'));
      });

      this.setState({
        dragTargetElementId: null,
        dragSpot: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          fieldName = _props2.fieldName,
          formState = _props2.formState,
          ToolbarComponent = _props2.ToolbarComponent,
          ListComponent = _props2.ListComponent,
          areaId = _props2.areaId,
          elementTypes = _props2.elementTypes,
          isDraggingOver = _props2.isDraggingOver,
          connectDropTarget = _props2.connectDropTarget,
          allowedElements = _props2.allowedElements;
      var _state = this.state,
          dragTargetElementId = _state.dragTargetElementId,
          dragSpot = _state.dragSpot;

      var allowedElementTypes = allowedElements.map(function (className) {
        return elementTypes.find(function (type) {
          return type.class === className;
        });
      });

      return connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'element-editor' },
        _react2.default.createElement(ToolbarComponent, {
          elementTypes: allowedElementTypes,
          areaId: areaId,
          onDragOver: this.handleDragOver
        }),
        _react2.default.createElement(ListComponent, {
          allowedElementTypes: allowedElementTypes,
          elementTypes: elementTypes,
          areaId: areaId,
          onDragOver: this.handleDragOver,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          dragSpot: dragSpot,
          isDraggingOver: isDraggingOver,
          dragTargetElementId: dragTargetElementId
        }),
        _react2.default.createElement(_ElementDragPreview2.default, { elementTypes: elementTypes }),
        _react2.default.createElement('input', {
          name: fieldName,
          type: 'hidden',
          value: JSON.stringify(formState) || '',
          className: 'no-change-track'
        })
      ));
    }
  }]);

  return ElementEditor;
}(_react.PureComponent);

ElementEditor.propTypes = {
  fieldName: _propTypes2.default.string,
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  allowedElements: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  areaId: _propTypes2.default.number.isRequired,
  actions: _propTypes2.default.shape({
    handleSortBlock: _propTypes2.default.func
  })
};

function mapStateToProps(state) {
  var formNamePattern = (0, _loadElementFormStateName.loadElementFormStateName)('[0-9]+');
  var elementFormState = state.form.formState.element;

  if (!elementFormState) {
    return {};
  }

  var formState = Object.keys(elementFormState).filter(function (key) {
    return key.match(formNamePattern);
  }).reduce(function (accumulator, key) {
    return _extends({}, accumulator, _defineProperty({}, key, elementFormState[key].values));
  }, {});

  return { formState: formState };
}

exports.Component = ElementEditor;
exports.default = (0, _redux.compose)(_withDragDropContext2.default, (0, _reactDnd.DropTarget)('element', {}, function (connector, monitor) {
  return {
    connectDropTarget: connector.dropTarget(),
    isDraggingOver: monitor.isOver() };
}), (0, _reactRedux.connect)(mapStateToProps), (0, _Injector.inject)(['ElementToolbar', 'ElementList'], function (ToolbarComponent, ListComponent) {
  return {
    ToolbarComponent: ToolbarComponent,
    ListComponent: ListComponent
  };
}, function () {
  return 'ElementEditor';
}), _sortBlockMutation2.default)(ElementEditor);

/***/ }),

/***/ "./client/src/components/ElementEditor/ElementList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _elementType = __webpack_require__("./client/src/types/elementType.js");

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _redux = __webpack_require__(4);

var _Injector = __webpack_require__(2);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactDnd = __webpack_require__(9);

var _dragHelpers = __webpack_require__("./client/src/lib/dragHelpers.js");

var _elementConfig = __webpack_require__("./client/src/state/editor/elementConfig.js");

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementList = function (_Component) {
  _inherits(ElementList, _Component);

  function ElementList() {
    _classCallCheck(this, ElementList);

    return _possibleConstructorReturn(this, (ElementList.__proto__ || Object.getPrototypeOf(ElementList)).apply(this, arguments));
  }

  _createClass(ElementList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldBlocks = prevProps.blocks;
      var newBlocks = this.props.blocks;


      if (!oldBlocks || oldBlocks.length !== newBlocks.length) {
        return;
      }

      var blocks = oldBlocks.filter(function (oldElement, orderIndex) {
        return oldElement.ID !== newBlocks[orderIndex].ID;
      });

      blocks.forEach(function (element) {
        var thisElement = _reactDom2.default.findDOMNode(element);
        (0, _jquery2.default)('.htmleditor textarea', thisElement).entwine('ss').getEditor().repaint();
      });
    }
  }, {
    key: 'getDragIndicatorIndex',
    value: function getDragIndicatorIndex() {
      var _props = this.props,
          dragTargetElementId = _props.dragTargetElementId,
          draggedItem = _props.draggedItem,
          blocks = _props.blocks,
          dragSpot = _props.dragSpot;


      return (0, _dragHelpers.getDragIndicatorIndex)(blocks.map(function (element) {
        return element.ID;
      }), dragTargetElementId, draggedItem && draggedItem.ID, dragSpot);
    }
  }, {
    key: 'renderBlocks',
    value: function renderBlocks() {
      var _props2 = this.props,
          ElementComponent = _props2.ElementComponent,
          HoverBarComponent = _props2.HoverBarComponent,
          DragIndicatorComponent = _props2.DragIndicatorComponent,
          blocks = _props2.blocks,
          allowedElementTypes = _props2.allowedElementTypes,
          elementTypes = _props2.elementTypes,
          areaId = _props2.areaId,
          onDragEnd = _props2.onDragEnd,
          onDragOver = _props2.onDragOver,
          onDragStart = _props2.onDragStart,
          isDraggingOver = _props2.isDraggingOver;

      if (!blocks) {
        return null;
      }

      if (blocks && !blocks.length) {
        return _react2.default.createElement(
          'div',
          null,
          _i18n2.default._t('ElementList.ADD_BLOCKS', 'Add blocks to place your content')
        );
      }

      var output = blocks.map(function (element) {
        return _react2.default.createElement(
          'div',
          { key: element.ID },
          _react2.default.createElement(ElementComponent, {
            element: element,
            areaId: areaId,
            type: (0, _elementConfig.getElementTypeConfig)(element.BlockSchema.typeName, elementTypes),
            link: element.BlockSchema.actions.edit,
            onDragOver: onDragOver,
            onDragEnd: onDragEnd,
            onDragStart: onDragStart
          }),
          isDraggingOver || _react2.default.createElement(HoverBarComponent, {
            areaId: areaId,
            elementId: element.ID,
            elementTypes: allowedElementTypes
          })
        );
      });

      var dragIndicatorIndex = this.getDragIndicatorIndex();
      if (isDraggingOver && dragIndicatorIndex !== null) {
        output.splice(dragIndicatorIndex, 0, _react2.default.createElement(DragIndicatorComponent, { key: 'DropIndicator' }));
      }

      return output;
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      var _props3 = this.props,
          loading = _props3.loading,
          LoadingComponent = _props3.LoadingComponent;


      if (loading) {
        return _react2.default.createElement(LoadingComponent, null);
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var blocks = this.props.blocks;

      var listClassNames = (0, _classnames2.default)('elemental-editor-list', { 'elemental-editor-list--empty': !blocks || !blocks.length });

      return this.props.connectDropTarget(_react2.default.createElement(
        'div',
        { className: listClassNames },
        this.renderLoading(),
        this.renderBlocks()
      ));
    }
  }]);

  return ElementList;
}(_react.Component);

ElementList.propTypes = {
  blocks: _propTypes2.default.arrayOf(_elementType.elementType),
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  allowedElementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  loading: _propTypes2.default.bool,
  areaId: _propTypes2.default.number.isRequired,
  dragTargetElementId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  onDragOver: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func
};

ElementList.defaultProps = {
  blocks: [],
  loading: false
};

exports.Component = ElementList;


var elementListTarget = {
  drop: function drop(props, monitor) {
    var blocks = props.blocks;

    var elementTargetDropResult = monitor.getDropResult();

    if (!elementTargetDropResult) {
      return {};
    }

    var dropTarget = elementTargetDropResult.target,
        dropSpot = elementTargetDropResult.dropSpot;

    var draggedItem = monitor.getItem();
    var dropIndex = (0, _dragHelpers.getDragIndicatorIndex)(blocks.map(function (element) {
      return element.ID;
    }), dropTarget, draggedItem, dropSpot);

    var dropAfterID = blocks[dropIndex - 1] ? blocks[dropIndex - 1].ID : '0';
    var draggedItemIndex = blocks.findIndex(function (item) {
      return item === monitor.getItem();
    });

    return _extends({}, elementTargetDropResult, {
      dropAfterID: dropAfterID
    });
  }
};

exports.default = (0, _redux.compose)((0, _reactDnd.DropTarget)('element', elementListTarget, function (connector, monitor) {
  return {
    connectDropTarget: connector.dropTarget(),
    draggedItem: monitor.getItem()
  };
}), (0, _Injector.inject)(['Element', 'Loading', 'HoverBar', 'DragPositionIndicator'], function (ElementComponent, LoadingComponent, HoverBarComponent, DragIndicatorComponent) {
  return {
    ElementComponent: ElementComponent,
    LoadingComponent: LoadingComponent,
    HoverBarComponent: HoverBarComponent,
    DragIndicatorComponent: DragIndicatorComponent
  };
}, function () {
  return 'ElementEditor.ElementList';
}))(ElementList);

/***/ }),

/***/ "./client/src/components/ElementEditor/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(10);

var _elementType = __webpack_require__("./client/src/types/elementType.js");

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _redux = __webpack_require__(4);

var _reactRedux = __webpack_require__(8);

var _Injector = __webpack_require__(2);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reduxForm = __webpack_require__(11);

var _reactDnd = __webpack_require__(9);

var _getFormState = __webpack_require__(16);

var _getFormState2 = _interopRequireDefault(_getFormState);

var _dragHelpers = __webpack_require__("./client/src/lib/dragHelpers.js");

var _reactDndHtml5Backend = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      tooltipOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;

      if (connectDragPreview) {
        connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
          captureDraggingState: true
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var tooltipOpen = this.state.tooltipOpen;
      var disableTooltip = this.props.disableTooltip;


      if (tooltipOpen && disableTooltip) {
        this.setState({
          tooltipOpen: false
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: 'renderVersionedStateMessage',
    value: function renderVersionedStateMessage() {
      var _props = this.props,
          _props$element = _props.element,
          isLiveVersion = _props$element.IsLiveVersion,
          isPublished = _props$element.IsPublished,
          formDirty = _props.formDirty;

      if (!formDirty && isPublished && isLiveVersion) {
        return null;
      }

      var versionStateButtonTitle = '';
      var stateClassNames = ['element-editor-header__version-state'];

      if (formDirty) {
        versionStateButtonTitle = _i18n2.default._t('ElementHeader.STATE_UNSAVED', 'Item has unsaved changes');
        stateClassNames.push('element-editor-header__version-state--unsaved');
      } else if (!isPublished) {
        versionStateButtonTitle = _i18n2.default._t('ElementHeader.STATE_DRAFT', 'Item has not been published yet');
        stateClassNames.push('element-editor-header__version-state--draft');
      } else if (!isLiveVersion) {
        versionStateButtonTitle = _i18n2.default._t('ElementHeader.STATE_MODIFIED', 'Item has unpublished changes');
        stateClassNames.push('element-editor-header__version-state--modified');
      }

      return _react2.default.createElement('span', {
        className: (0, _classnames2.default)(stateClassNames),
        title: versionStateButtonTitle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          connectDragSource = _props2.connectDragSource,
          element = _props2.element,
          type = _props2.type,
          areaId = _props2.areaId,
          previewExpanded = _props2.previewExpanded,
          simple = _props2.simple,
          disableTooltip = _props2.disableTooltip,
          activeTab = _props2.activeTab,
          expandable = _props2.expandable,
          ElementActionsComponent = _props2.ElementActionsComponent,
          handleEditTabsClick = _props2.handleEditTabsClick;


      var noTitle = _i18n2.default.inject(_i18n2.default._t('ElementHeader.NOTITLE', 'Untitled {type} block'), { type: type.title });
      var titleClasses = (0, _classnames2.default)({
        'element-editor-header__title': true,
        'element-editor-header__title--none': !element.Title
      });
      var expandTitle = _i18n2.default._t('ElementHeader.EXPAND', 'Show editable fields');
      var containerClasses = (0, _classnames2.default)('element-editor-header', {
        'element-editor-header--simple': simple
      });
      var expandCaretClasses = (0, _classnames2.default)('element-editor-header__expand', {
        'font-icon-right-open-big': !expandable,
        'font-icon-up-open-big': expandable && previewExpanded,
        'font-icon-down-open-big': expandable && !previewExpanded
      });
      var blockIconId = 'element-icon-' + element.ID;

      var content = _react2.default.createElement(
        'div',
        { className: containerClasses },
        _react2.default.createElement(
          'div',
          { className: 'element-editor-header__drag-handle' },
          _react2.default.createElement('i', { className: 'font-icon-drag-handle' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'element-editor-header__info' },
          _react2.default.createElement(
            'div',
            { className: 'element-editor-header__icon-container' },
            _react2.default.createElement('i', { className: type.icon, id: blockIconId }),
            this.renderVersionedStateMessage(),
            !simple && _react2.default.createElement(
              _reactstrap.Tooltip,
              {
                placement: 'top',
                isOpen: this.state.tooltipOpen && !disableTooltip,
                target: blockIconId,
                toggle: this.toggle
              },
              type.title
            )
          ),
          _react2.default.createElement(
            'h3',
            { className: titleClasses },
            element.Title || noTitle
          )
        ),
        !simple && _react2.default.createElement(
          'div',
          { className: 'element-editor-header__actions' },
          expandable && _react2.default.createElement(
            'div',
            {
              role: 'none',
              onClick: function onClick(event) {
                return event.stopPropagation();
              }
            },
            _react2.default.createElement(ElementActionsComponent, {
              element: element,
              type: type,
              areaId: areaId,
              activeTab: activeTab,
              editTabs: type.editTabs,
              handleEditTabsClick: handleEditTabsClick
            })
          ),
          _react2.default.createElement('i', { className: expandCaretClasses, title: expandTitle })
        )
      );

      if (previewExpanded) {
        return connectDragSource(content);
      }

      return content;
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  element: _elementType.elementType.isRequired,
  type: _elementTypeType.elementTypeType.isRequired,
  areaId: _propTypes2.default.number,
  activeTab: _propTypes2.default.string,
  simple: _propTypes2.default.bool,
  ElementActionsComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  previewExpanded: _propTypes2.default.bool,
  disableTooltip: _propTypes2.default.bool,
  formDirty: _propTypes2.default.bool,
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  onDragEnd: _propTypes2.default.func };

Header.defaultProps = {
  expandable: true
};

function mapStateToProps(state, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.element.ID);

  return {
    formDirty: (0, _reduxForm.isDirty)('element.' + formName, _getFormState2.default)(state)
  };
}

exports.Component = Header;
exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)('element', _dragHelpers.elementDragSource, function (connector) {
  return {
    connectDragSource: connector.dragSource(),
    connectDragPreview: connector.dragPreview()
  };
}), (0, _reactRedux.connect)(mapStateToProps), (0, _Injector.inject)(['ElementActions'], function (ElementActionsComponent) {
  return {
    ElementActionsComponent: ElementActionsComponent
  };
}, function () {
  return 'ElementEditor.ElementList.Element';
}))(Header);

/***/ }),

/***/ "./client/src/components/ElementEditor/HoverBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Injector = __webpack_require__(2);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverBar = function (_Component) {
  _inherits(HoverBar, _Component);

  function HoverBar(props) {
    _classCallCheck(this, HoverBar);

    var _this = _possibleConstructorReturn(this, (HoverBar.__proto__ || Object.getPrototypeOf(HoverBar)).call(this, props));

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.renderHoverBar = _this.renderHoverBar.bind(_this);
    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      timeoutRef: null,
      delayAreaActive: false,
      instAreaActive: false,
      popoverOpen: false
    };
    return _this;
  }

  _createClass(HoverBar, [{
    key: 'handleMouseEnter',
    value: function handleMouseEnter(event) {
      var _this2 = this;

      var elementId = this.props.elementId;

      var plusButtonWidth = 50;

      var addBlockAreaContainer = window.document.getElementById('AddBlockArea_' + elementId);
      var clientWidth = addBlockAreaContainer.clientWidth;
      var offsetLeft = addBlockAreaContainer.getBoundingClientRect().left;
      var mousePos = event.pageX - offsetLeft;
      var delayArea = clientWidth - plusButtonWidth;

      if (mousePos < delayArea) {
        var timeoutRef = setTimeout(function () {
          _this2.setState({
            delayAreaActive: true
          });
        }, 200);

        this.setState({
          timeoutRef: timeoutRef
        });
      } else {
        this.setState({
          instAreaActive: true
        });
      }
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      clearTimeout(this.state.timeoutRef);

      if (this.state.popoverOpen) {
        return;
      }
      this.setState({ delayAreaActive: false, instAreaActive: false });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: 'renderHoverBar',
    value: function renderHoverBar(calledInstantaneously) {
      var elementId = this.props.elementId;


      var hoverBarClassNames = (0, _classnames2.default)('font-icon-plus-circled', 'element-editor__add-block-hover-bar', {
        'element-editor__add-block-hover-bar--delay': !calledInstantaneously,
        'element-editor__add-block-hover-bar--inst': calledInstantaneously
      });

      return _react2.default.createElement('button', {
        id: 'AddBlockHoverBar_' + elementId,
        className: hoverBarClassNames,
        onClick: this.toggle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          AddElementPopoverComponent = _props.AddElementPopoverComponent,
          elementTypes = _props.elementTypes,
          elementId = _props.elementId,
          areaId = _props.areaId;
      var popoverOpen = this.state.popoverOpen;


      return _react2.default.createElement(
        'div',
        { className: 'element-editor__add-block-area-container', id: 'AddBlockArea_' + elementId },
        _react2.default.createElement(
          'div',
          {
            className: 'element-editor__add-block-area',
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          },
          this.state.delayAreaActive && this.renderHoverBar(false) || this.state.instAreaActive && this.renderHoverBar(true),
          (this.state.delayAreaActive || this.state.instAreaActive) && _react2.default.createElement(AddElementPopoverComponent, {
            placement: 'bottom-end',
            target: 'AddBlockHoverBar_' + elementId,
            isOpen: popoverOpen,
            elementTypes: elementTypes,
            toggle: this.toggle,
            container: '#AddBlockArea_' + elementId,
            areaId: areaId,
            insertAfterElement: elementId
          })
        )
      );
    }
  }]);

  return HoverBar;
}(_react.Component);

HoverBar.propTypes = {
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  elementId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  areaId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};
exports.Component = HoverBar;
exports.default = (0, _Injector.inject)(['AddElementPopover'], function (AddElementPopoverComponent) {
  return {
    AddElementPopoverComponent: AddElementPopoverComponent
  };
}, function () {
  return 'ElementEditor.ElementList.HoverBar';
})(HoverBar);

/***/ }),

/***/ "./client/src/components/ElementEditor/InlineEditForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FormBuilderLoader = __webpack_require__(19);

var _FormBuilderLoader2 = _interopRequireDefault(_FormBuilderLoader);

var _loadElementSchemaValue = __webpack_require__("./client/src/state/editor/loadElementSchemaValue.js");

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _loadElementFormStateName = __webpack_require__("./client/src/state/editor/loadElementFormStateName.js");

var _reactRedux = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineEditForm = function (_PureComponent) {
  _inherits(InlineEditForm, _PureComponent);

  function InlineEditForm(props) {
    _classCallCheck(this, InlineEditForm);

    var _this = _possibleConstructorReturn(this, (InlineEditForm.__proto__ || Object.getPrototypeOf(InlineEditForm)).call(this, props));

    _this.handleLoadingError = _this.handleLoadingError.bind(_this);

    _this.state = {
      loadingError: null
    };
    return _this;
  }

  _createClass(InlineEditForm, [{
    key: 'handleLoadingError',
    value: function handleLoadingError() {
      var _window = window,
          $ = _window.jQuery;
      var handleLoadingError = this.props.handleLoadingError;


      this.setState({
        loadingError: true
      });

      $.noticeAdd({
        text: _i18n2.default.inject(_i18n2.default._t('ElementEditForm.ERROR_NOTIFICATION', 'Error displaying the edit form for this block')),
        stay: true,
        type: 'notice'
      });

      handleLoadingError();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          elementId = _props.elementId,
          extraClass = _props.extraClass,
          onClick = _props.onClick,
          onFormInit = _props.onFormInit,
          formHasState = _props.formHasState;
      var loadingError = this.state.loadingError;


      var classNames = (0, _classnames2.default)('element-editor-editform', extraClass);
      var schemaUrl = (0, _loadElementSchemaValue.loadElementSchemaValue)('schemaUrl', elementId);

      var formProps = {
        formTag: 'div',
        schemaUrl: schemaUrl,
        identifier: 'element',
        refetchSchemaOnMount: !formHasState,
        onLoadingError: this.handleLoadingError
      };

      if (loadingError) {
        formProps.loading = false;
      }

      if (typeof onFormInit === 'function') {
        formProps.onReduxFormInit = onFormInit;
      }

      return _react2.default.createElement(
        'div',
        { className: classNames, onClick: onClick, role: 'presentation' },
        _react2.default.createElement(_FormBuilderLoader2.default, formProps)
      );
    }
  }]);

  return InlineEditForm;
}(_react.PureComponent);

InlineEditForm.propTypes = {
  extraClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  onClick: _propTypes2.default.func,
  elementId: _propTypes2.default.string,
  handleLoadingError: _propTypes2.default.func
};

function mapStateToProps(state, ownProps) {
  var formName = (0, _loadElementFormStateName.loadElementFormStateName)(ownProps.elementId);

  return {
    formHasState: state.form.formState && state.form.formState.element && !!state.form.formState.element[formName]
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(InlineEditForm);

/***/ }),

/***/ "./client/src/components/ElementEditor/Summary.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = function (_PureComponent) {
  _inherits(Summary, _PureComponent);

  function Summary() {
    _classCallCheck(this, Summary);

    return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).apply(this, arguments));
  }

  _createClass(Summary, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          fileUrl = _props.fileUrl,
          fileTitle = _props.fileTitle,
          content = _props.content;

      var noContent = _i18n2.default._t('ElementSummary.NO_PREVIEW', 'No preview available');

      return _react2.default.createElement(
        'div',
        { className: 'element-editor-summary' },
        fileUrl && _react2.default.createElement('img', {
          className: 'element-editor-summary__thumbnail-image',
          src: fileUrl,
          alt: fileTitle
        }),
        (content || !fileUrl) && _react2.default.createElement(
          'p',
          { className: 'element-editor-summary__content' },
          content || noContent
        )
      );
    }
  }]);

  return Summary;
}(_react.PureComponent);

Summary.defaultProps = {};

Summary.propTypes = {
  content: _propTypes2.default.string,
  fileUrl: _propTypes2.default.string,
  fileTitle: _propTypes2.default.string
};

exports.default = Summary;

/***/ }),

/***/ "./client/src/components/ElementEditor/Toolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(2);

var _elementTypeType = __webpack_require__("./client/src/types/elementTypeType.js");

var _reactDnd = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_PureComponent) {
  _inherits(Toolbar, _PureComponent);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          AddNewButtonComponent = _props.AddNewButtonComponent,
          elementTypes = _props.elementTypes,
          areaId = _props.areaId,
          connectDropTarget = _props.connectDropTarget;

      return connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'element-editor__toolbar' },
        _react2.default.createElement(AddNewButtonComponent, {
          elementTypes: elementTypes,
          areaId: areaId
        })
      ));
    }
  }]);

  return Toolbar;
}(_react.PureComponent);

Toolbar.defaultProps = {};
Toolbar.propTypes = {
  elementTypes: _propTypes2.default.arrayOf(_elementTypeType.elementTypeType).isRequired,
  areaId: _propTypes2.default.number.isRequired,
  AddNewButtonComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  connectDropTarget: _propTypes2.default.func.isRequired,
  onDragOver: _propTypes2.default.func,
  onDragDrop: _propTypes2.default.func };

var toolbarTarget = {
  hover: function hover(props) {
    var onDragOver = props.onDragOver;

    if (onDragOver) {
      onDragOver();
    }
  }
};

exports.default = (0, _reactDnd.DropTarget)('element', toolbarTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
})((0, _Injector.inject)(['ElementAddNewButton'], function (AddNewButtonComponent) {
  return {
    AddNewButtonComponent: AddNewButtonComponent
  };
}, function () {
  return 'ElementEditor.ElementToolbar';
})(Toolbar));

/***/ }),

/***/ "./client/src/components/HistoricElementView/HistoricElementView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementalAreaHistoryFactory = function ElementalAreaHistoryFactory(FieldGroup) {
  return function (_FieldGroup) {
    _inherits(HistoricElementView, _FieldGroup);

    function HistoricElementView() {
      _classCallCheck(this, HistoricElementView);

      return _possibleConstructorReturn(this, (HistoricElementView.__proto__ || Object.getPrototypeOf(HistoricElementView)).apply(this, arguments));
    }

    _createClass(HistoricElementView, [{
      key: 'getClassName',
      value: function getClassName() {
        var classlist = [_get(HistoricElementView.prototype.__proto__ || Object.getPrototypeOf(HistoricElementView.prototype), 'getClassName', this).call(this)];
        if (this.props.data.ElementID) {
          classlist.unshift('elemental-area__element--historic-inner');
        }
        return (0, _classnames2.default)(classlist);
      }
    }, {
      key: 'render',
      value: function render() {
        var legend = this.getLegend();
        var Tag = this.props.data.tag || 'div';
        var classNames = this.getClassName();
        var data = this.props.data;


        if (!data.ElementID) {
          return _get(HistoricElementView.prototype.__proto__ || Object.getPrototypeOf(HistoricElementView.prototype), 'render', this).call(this);
        }

        return _react2.default.createElement(
          Tag,
          { className: classNames },
          legend,
          _react2.default.createElement(
            'div',
            { className: 'elemental-preview elemental-preview--historic' },
            data.ElementEditLink && _react2.default.createElement(
              'a',
              { className: 'elemental-preview__link', href: data.ElementEditLink },
              _react2.default.createElement(
                'span',
                { className: 'elemental-preview__link-text' },
                _i18n2.default._t('HistoricElementView.VIEW_BLOCK_HISTORY', 'Block history')
              ),
              _react2.default.createElement('i', { className: 'font-icon-angle-right btn--icon-lg elemental-preview__link-caret' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'elemental-preview__icon' },
              _react2.default.createElement('i', { className: data.ElementIcon })
            ),
            _react2.default.createElement(
              'div',
              { className: 'elemental-preview__detail' },
              _react2.default.createElement(
                'h3',
                null,
                data.ElementTitle,
                ' ',
                _react2.default.createElement(
                  'small',
                  null,
                  data.ElementType
                )
              )
            )
          ),
          this.props.children
        );
      }
    }]);

    return HistoricElementView;
  }(FieldGroup);
};

exports.default = ElementalAreaHistoryFactory;

/***/ }),

/***/ "./client/src/components/TextCheckboxGroupField/TextCheckboxGroupField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(10);

var _FieldHolder = __webpack_require__(18);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextCheckboxGroupField = function TextCheckboxGroupField(props) {
  var children = props.children;

  var childrenWithProps = _react2.default.Children.toArray(_react2.default.Children.map(children, function (child, index) {
    var additionalProps = { noHolder: true };

    if (index === 0) {
      additionalProps.id = props.id;
    }

    return _react2.default.cloneElement(child, additionalProps);
  }));

  if (props.readOnly) {
    return _react2.default.createElement(
      'div',
      { className: 'text-checkbox-group-field--read-only' },
      childrenWithProps
    );
  }

  if (childrenWithProps.length === 1) {
    return childrenWithProps[0];
  }

  return _react2.default.createElement(
    _reactstrap.InputGroup,
    { className: 'text-checkbox-group-field' },
    childrenWithProps[0],
    _react2.default.createElement(
      _reactstrap.InputGroupAddon,
      { addonType: 'append' },
      _react2.default.createElement(
        _reactstrap.InputGroupText,
        null,
        childrenWithProps[1]
      )
    )
  );
};

exports.default = (0, _FieldHolder2.default)(TextCheckboxGroupField);

/***/ }),

/***/ "./client/src/legacy/ElementEditor/entwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(2);

var _elementConfig = __webpack_require__("./client/src/state/editor/elementConfig.js");

var _reduxForm = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var resetStores = function resetStores() {
  window.ss.apolloClient.resetStore();

  setTimeout(function () {
    var store = window.ss.store;


    if (!store) {
      return;
    }

    store.dispatch(_reduxForm.destroy.apply(undefined, _toConsumableArray(Object.keys(store.getState().form.formState.element || {}).map(function (name) {
      return 'element.' + name;
    }))));
  }, 0);
};

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot .element-editor__container').entwine({
    onmatch: function onmatch() {
      var context = {};
      var ElementEditorComponent = (0, _Injector.loadComponent)('ElementEditor', context);
      var schemaData = this.data('schema');
      var elementTypes = (0, _elementConfig.getConfig)().elementTypes;

      var props = {
        fieldName: this.attr('name'),
        areaId: schemaData['elemental-area-id'],
        allowedElements: schemaData['allowed-elements'],
        elementTypes: elementTypes
      };

      _reactDom2.default.render(_react2.default.createElement(ElementEditorComponent, props), this[0]);
    },
    onunmatch: function onunmatch() {
      resetStores();
      _reactDom2.default.unmountComponentAtNode(this[0]);
    },

    'from .cms-edit-form': {
      onaftersubmitform: function onaftersubmitform() {
        resetStores();
      }
    }
  });

  $('.js-injector-boot .element-editor__container .element-form-dirty-state').entwine({
    onmatch: function onmatch() {
      $('.cms-edit-form').trigger('change');
    },
    onunmatch: function onunmatch() {
      $('.cms-edit-form').trigger('change');
    }
  });

  $('.cms-edit-form').entwine({
    getChangeTrackerOptions: function getChangeTrackerOptions() {
      var isDefault = this.entwineData('ChangeTrackerOptions') === undefined;

      var opts = this._super();

      if (isDefault) {
        opts = $.extend({}, opts);

        opts.ignoreFieldSelector += ', .elementalarea :input:not(.element-form-dirty-state)';

        this.setChangeTrackerOptions(opts);
      }

      return opts;
    }
  });
});

/***/ }),

/***/ "./client/src/lib/dragHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementDragSource = exports.getDragIndicatorIndex = exports.isOverTop = undefined;

var _reactDom = __webpack_require__(15);

var isOverTop = exports.isOverTop = function isOverTop(monitor, component) {
  var clientOffset = monitor.getClientOffset();
  var componentRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

  return clientOffset.y < componentRect.y + componentRect.height / 2;
};

var getDragIndicatorIndex = exports.getDragIndicatorIndex = function getDragIndicatorIndex(items, dragTarget, draggedItem, dragSpot) {
  if (dragTarget === null || !draggedItem) {
    return null;
  }

  var targetIndex = dragTarget ? items.findIndex(function (element) {
    return element === dragTarget;
  }) : 0;
  var sourceIndex = items.findIndex(function (item) {
    return item === draggedItem;
  });

  if (dragSpot === 'bottom') {
    targetIndex += 1;
  }

  if (sourceIndex === targetIndex || sourceIndex + 1 === targetIndex) {
    return null;
  }

  return targetIndex;
};

var elementDragSource = exports.elementDragSource = {
  beginDrag: function beginDrag(props) {
    return props.element;
  },
  endDrag: function endDrag(props, monitor) {
    var onDragEnd = props.onDragEnd;


    if (!onDragEnd || !monitor.getDropResult()) {
      return;
    }

    onDragEnd(monitor.getItem().ID, monitor.getDropResult().dropAfterID);
  }
};

/***/ }),

/***/ "./client/src/state/editor/addElementMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nmutation AddElementToArea($className: String!, $elementalAreaID: ID!, $afterElementID: ID) {\n  addElementToArea(\n    ClassName: $className,\n    ElementalAreaID: $elementalAreaID,\n    AfterElementID: $afterElementID\n  ) {\n    ID\n  }\n}\n'], ['\nmutation AddElementToArea($className: String!, $elementalAreaID: ID!, $afterElementID: ID) {\n  addElementToArea(\n    ClassName: $className,\n    ElementalAreaID: $elementalAreaID,\n    AfterElementID: $afterElementID\n  ) {\n    ID\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        _ref$ownProps = _ref.ownProps,
        actions = _ref$ownProps.actions,
        areaId = _ref$ownProps.areaId;

    var handleAddElementToArea = function handleAddElementToArea(className, afterElementID) {
      return mutate({
        variables: { className: className, elementalAreaID: areaId, afterElementID: afterElementID }
      });
    };

    return {
      actions: _extends({}, actions, {
        handleAddElementToArea: handleAddElementToArea
      })
    };
  },
  options: function options(_ref2) {
    var areaId = _ref2.areaId;
    return {
      refetchQueries: [{
        query: _readBlocksForAreaQuery.query,
        variables: _readBlocksForAreaQuery.config.options({ areaId: areaId }).variables
      }]
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/editor/archiveBlockMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nmutation ArchiveBlock($blockId: ID!) {\n  deleteBlock(IDs: [$blockId]) {\n    ID\n  }\n}\n'], ['\nmutation ArchiveBlock($blockId: ID!) {\n  deleteBlock(IDs: [$blockId]) {\n    ID\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        actions = _ref.ownProps.actions;

    var handleArchiveBlock = function handleArchiveBlock(blockId) {
      return mutate({
        variables: { blockId: blockId }
      });
    };

    return {
      actions: _extends({}, actions, {
        handleArchiveBlock: handleArchiveBlock
      })
    };
  },
  options: function options(_ref2) {
    var areaId = _ref2.areaId;
    return {
      refetchQueries: [{
        query: _readBlocksForAreaQuery.query,
        variables: _readBlocksForAreaQuery.config.options({ areaId: areaId }).variables
      }]
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/editor/elementConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementTypeConfig = exports.getConfig = undefined;

var _Config = __webpack_require__(12);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getConfig = exports.getConfig = function getConfig() {
  return _Config2.default.getSection('DNADesign\\Elemental\\Controllers\\ElementalAreaController');
};

var getElementTypeConfig = exports.getElementTypeConfig = function getElementTypeConfig(elementType) {
  var typeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var types = Array.isArray(typeConfig) ? typeConfig : getConfig().elementTypes;

  return types.find(function (value) {
    return value.class === elementType || value.name === elementType;
  });
};

/***/ }),

/***/ "./client/src/state/editor/loadElementFormStateName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadElementFormStateName = undefined;

var _Config = __webpack_require__(12);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadElementFormStateName = exports.loadElementFormStateName = function loadElementFormStateName() {
  var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var sectionKey = 'DNADesign\\Elemental\\Controllers\\ElementalAreaController';
  var section = _Config2.default.getSection(sectionKey);
  var formNameTemplate = section.form.elementForm.formNameTemplate;

  if (elementId) {
    return formNameTemplate.replace('{id}', elementId);
  }
  return formNameTemplate;
};

/***/ }),

/***/ "./client/src/state/editor/loadElementSchemaValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadElementSchemaValue = undefined;

var _Config = __webpack_require__(12);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadElementSchemaValue = exports.loadElementSchemaValue = function loadElementSchemaValue(key) {
  var elementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var sectionKey = 'DNADesign\\Elemental\\Controllers\\ElementalAreaController';
  var section = _Config2.default.getSection(sectionKey);
  var schemaValue = section.form.elementForm[key] || '';

  if (elementId) {
    return schemaValue + '/' + elementId;
  }
  return schemaValue;
};

/***/ }),

/***/ "./client/src/state/editor/publishBlockMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nmutation PublishBlock($blockId:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copyBlockToStage(Input: {\n    ID: $blockId\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n'], ['\nmutation PublishBlock($blockId:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copyBlockToStage(Input: {\n    ID: $blockId\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        actions = _ref.ownProps.actions;

    var handlePublishBlock = function handlePublishBlock(blockId, fromStage, toStage, fromVersion) {
      return mutate({
        variables: {
          blockId: blockId,
          fromStage: fromStage,
          toStage: toStage,
          fromVersion: fromVersion
        }
      });
    };

    return {
      actions: _extends({}, actions, {
        handlePublishBlock: handlePublishBlock
      })
    };
  },
  options: function options(_ref2) {
    var areaId = _ref2.areaId;
    return {
      refetchQueries: [{
        query: _readBlocksForAreaQuery.query,
        variables: _readBlocksForAreaQuery.config.options({ areaId: areaId }).variables
      }]
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/editor/readBlocksForAreaQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.query = undefined;

var _templateObject = _taggedTemplateLiteral(['\nquery ReadBlocksForArea($id:ID!) {\n  readOneElementalArea(ID: $id, Versioning: {\n    Mode: DRAFT\n  }){\n    Elements {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          ID\n          Title\n          BlockSchema\n          IsLiveVersion\n          IsPublished\n          Version\n        }\n      }\n    }\n  }\n}\n'], ['\nquery ReadBlocksForArea($id:ID!) {\n  readOneElementalArea(ID: $id, Versioning: {\n    Mode: DRAFT\n  }){\n    Elements {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          ID\n          Title\n          BlockSchema\n          IsLiveVersion\n          IsPublished\n          Version\n        }\n      }\n    }\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var query = (0, _graphqlTag2.default)(_templateObject);

var config = {
  options: function options(_ref) {
    var areaId = _ref.areaId;

    return {
      variables: {
        id: areaId
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        error = _ref2$data.error,
        readOneElementalArea = _ref2$data.readOneElementalArea,
        networkLoading = _ref2$data.loading;

    var blocks = null;
    if (readOneElementalArea) {
      blocks = readOneElementalArea.Elements.edges.map(function (element) {
        return element.node;
      });
    }

    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });

    return {
      loading: networkLoading || !blocks,
      blocks: blocks,
      graphQLErrors: errors
    };
  }
};

exports.query = query;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(query, config);

/***/ }),

/***/ "./client/src/state/editor/sortBlockMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\nmutation SortBlockMutation($blockId:ID!, $afterBlockId:ID!) {\n  sortBlock(\n    ID: $blockId\n    AfterBlockID: $afterBlockId\n  ) {\n    ID\n    IsLiveVersion\n    IsPublished\n  }\n}\n'], ['\nmutation SortBlockMutation($blockId:ID!, $afterBlockId:ID!) {\n  sortBlock(\n    ID: $blockId\n    AfterBlockID: $afterBlockId\n  ) {\n    ID\n    IsLiveVersion\n    IsPublished\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        actions = _ref.ownProps.actions;

    var handleSortBlock = function handleSortBlock(blockId, afterBlockId, areaId) {
      return mutate({
        variables: {
          blockId: blockId,
          afterBlockId: afterBlockId
        },
        optimisticResponse: {
          sortBlock: {
            ID: blockId,
            IsLiveVersion: false,
            __typename: 'Block'
          }
        },
        update: function update(store, _ref2) {
          var updatedElementData = _ref2.data.sortBlock;

          var variables = _readBlocksForAreaQuery.config.options({ areaId: areaId }).variables;
          var cachedData = store.readQuery({ query: _readBlocksForAreaQuery.query, variables: variables });

          var newData = JSON.parse(JSON.stringify(cachedData));
          var edges = newData.readOneElementalArea.Elements.edges;

          var movedBlockIndex = edges.findIndex(function (edge) {
            return edge.node.ID === blockId;
          });

          var movedBlock = edges[movedBlockIndex];

          Object.entries(updatedElementData).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            if (key === '__typename') {
              return;
            }

            movedBlock[key] = value;
          });

          edges.splice(movedBlockIndex, 1);

          if (!afterBlockId) {
            edges.unshift(movedBlock);
          } else {
            var targetBlockIndex = edges.findIndex(function (edge) {
              return edge.node.ID === afterBlockId;
            });

            var end = edges.slice(targetBlockIndex + 1);
            edges = edges.slice(0, targetBlockIndex + 1);
            edges.push(movedBlock);
            edges = edges.concat(end);
          }

          newData.readOneElementalArea.Elements.edges = edges;
          store.writeQuery({ query: _readBlocksForAreaQuery.query, data: newData, variables: variables });
        }
      });
    };
    return {
      actions: _extends({}, actions, {
        handleSortBlock: handleSortBlock
      })
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/editor/unpublishBlockMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nmutation UnpublishBlock($blockId:ID!) {\n  unpublishBlock(\n    ID: $blockId\n      ) {\n    ID\n  }\n}\n'], ['\nmutation UnpublishBlock($blockId:ID!) {\n  unpublishBlock(\n    ID: $blockId\n      ) {\n    ID\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _readBlocksForAreaQuery = __webpack_require__("./client/src/state/editor/readBlocksForAreaQuery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        actions = _ref.ownProps.actions;

    var handleUnpublishBlock = function handleUnpublishBlock(blockId, fromStage, toStage, fromVersion) {
      return mutate({
        variables: {
          blockId: blockId,
          fromStage: fromStage,
          toStage: toStage,
          fromVersion: fromVersion
        }
      });
    };

    return {
      actions: _extends({}, actions, {
        handleUnpublishBlock: handleUnpublishBlock
      })
    };
  },
  options: function options(_ref2) {
    var areaId = _ref2.areaId;
    return {
      refetchQueries: [{
        query: _readBlocksForAreaQuery.query,
        variables: _readBlocksForAreaQuery.config.options({ areaId: areaId }).variables
      }]
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/history/readOneBlockQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nquery ReadHistoryViewerBlock ($block_id: ID!, $limit: Int!, $offset: Int!) {\n  readOneBlock(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $block_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset, sortBy: {\n      field: Version\n      direction: DESC\n    }) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          AbsoluteLink\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LatestDraftVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n'], ['\nquery ReadHistoryViewerBlock ($block_id: ID!, $limit: Int!, $offset: Int!) {\n  readOneBlock(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $block_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset, sortBy: {\n      field: Version\n      direction: DESC\n    }) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          AbsoluteLink\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LatestDraftVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var query = (0, _graphqlTag2.default)(_templateObject);

var config = {
  options: function options(_ref) {
    var recordId = _ref.recordId,
        limit = _ref.limit,
        page = _ref.page;

    return {
      variables: {
        limit: limit,
        offset: ((page || 1) - 1) * limit,
        block_id: recordId
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        error = _ref2$data.error,
        refetch = _ref2$data.refetch,
        readOneBlock = _ref2$data.readOneBlock,
        networkLoading = _ref2$data.loading,
        _ref2$ownProps = _ref2.ownProps,
        _ref2$ownProps$action = _ref2$ownProps.actions,
        actions = _ref2$ownProps$action === undefined ? {
      versions: {}
    } : _ref2$ownProps$action,
        limit = _ref2$ownProps.limit,
        recordId = _ref2$ownProps.recordId;

    var versions = readOneBlock || null;

    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });

    return {
      loading: networkLoading || !versions,
      versions: versions,
      graphQLErrors: errors,
      actions: _extends({}, actions, {
        versions: _extends({}, versions, {
          goToPage: function goToPage(page) {
            refetch({
              offset: ((page || 1) - 1) * limit,
              limit: limit,
              block_id: recordId
            });
          }
        })
      })
    };
  }
};

exports.query = query;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(query, config);

/***/ }),

/***/ "./client/src/state/history/revertToBlockVersionMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nmutation revertBlockToVersion($id:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copyBlockToStage(Input: {\n    ID: $id\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n'], ['\nmutation revertBlockToVersion($id:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copyBlockToStage(Input: {\n    ID: $id\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n']);

var _reactApollo = __webpack_require__(6);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        actions = _ref.ownProps.actions;

    var revertToVersion = function revertToVersion(id, fromVersion, fromStage, toStage) {
      return mutate({
        variables: {
          id: id,
          fromVersion: fromVersion,
          fromStage: fromStage,
          toStage: toStage
        }
      });
    };

    return {
      actions: _extends({}, actions, {
        revertToVersion: revertToVersion
      })
    };
  },
  options: {
    refetchQueries: ['ReadHistoryViewerBlock']
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/types/elementType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementType = _propTypes2.default.shape({
  ID: _propTypes2.default.string.isRequired,
  Title: _propTypes2.default.string,
  BlockSchema: _propTypes2.default.object,
  InlineEditable: _propTypes2.default.bool,
  IsPublished: _propTypes2.default.bool,
  IsLiveVersion: _propTypes2.default.bool,
  Version: _propTypes2.default.number
});

exports.elementType = elementType;

/***/ }),

/***/ "./client/src/types/elementTypeType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementTypeType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementTypeType = _propTypes2.default.shape({
  name: _propTypes2.default.string,

  title: _propTypes2.default.string,

  icon: _propTypes2.default.string,

  inlineEditable: _propTypes2.default.boolean,

  editTabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    name: _propTypes2.default.string
  })),

  config: _propTypes2.default.object
});

exports.elementTypeType = elementTypeType;

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = ReduxForm;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = Backend;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = ReactDNDHtml5Backend;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = getFormState;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = FormBuilderLoader;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = TabsActions;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = withDragDropContext;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = GraphQLTag;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = ReactDND;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map