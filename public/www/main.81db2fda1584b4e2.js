(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8811:
/*!*************************************!*\
  !*** ./src/app/alert/alert.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertPage: () => (/* binding */ AlertPage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _notification_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification-type.enum */ 7265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification.service */ 2546);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _AlertPage;







function AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_Template_ion_item_click_1_listener() {
      const notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.viewNotification(notification_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_ion_badge_11_Template, 2, 0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-item-options", 11)(13, "ion-item-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_Template_ion_item_option_click_13_listener() {
      const notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.viewNotification(notification_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("unread", !notification_r3.isRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("detail", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r3.getNotificationIcon(notification_r3))("color", ctx_r3.getNotificationColor(notification_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 9, notification_r3.createdAt, ctx_r3.IsToday_sDateWithTimezone(notification_r3.createdAt) ? "shortTime" : "dd MMM, yyyy 'at' hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !notification_r3.isRead);
  }
}
function AlertPage_ng_container_13_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AlertPage_ng_container_13_ion_list_1_ion_item_sliding_1_Template, 15, 12, "ion-item-sliding", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.segmentValue === "unread" ? ctx_r3.unreadNotifications : ctx_r3.readNotifications)("ngForTrackBy", ctx_r3.trackByNotificationId);
  }
}
function AlertPage_ng_container_13_ng_template_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "You're all caught up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AlertPage_ng_container_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AlertPage_ng_container_13_ng_template_2_p_4_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.segmentValue === "unread");
  }
}
function AlertPage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AlertPage_ng_container_13_ion_list_1_Template, 2, 2, "ion-list", 5)(2, AlertPage_ng_container_13_ng_template_2_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const emptyTemplate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r3.segmentValue === "unread" ? ctx_r3.unreadNotifications : ctx_r3.readNotifications).length > 0)("ngIfElse", emptyTemplate_r5);
  }
}
function AlertPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class AlertPage {
  constructor(notificationService, router) {
    this.notificationService = notificationService;
    this.router = router;
    this.loading = false;
    this.unreadNotifications = [];
    this.readNotifications = [];
    this.segmentValue = 'unread';
    this.isLoadingNotification = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadNotifications();
      yield _this.notificationService.getAllNotifications().toPromise();
    })();
  }
  IsToday_sDateWithTimezone(date, timeZone) {
    const inputDate = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    // Convert both dates to the same timezone (or local time if no timezone specified)
    const inputDateStr = inputDate.toLocaleDateString('en-CA', {
      timeZone
    });
    const todayStr = today.toLocaleDateString('en-CA', {
      timeZone
    });
    return inputDateStr === todayStr;
  }
  loadNotifications() {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.isLoadingNotification = true;
        setTimeout(() => {
          _this2.isLoadingNotification = false;
        }, 2000);
        _this2.loading = true;
        _this2.notificationService.notifications$.subscribe(allNotifications => {
          _this2.unreadNotifications = allNotifications.filter(n => !n.isRead);
          _this2.readNotifications = allNotifications.filter(n => n.isRead);
        });
      } catch (error) {
        console.error('Error loading notifications:', error);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  getNotificationIcon(notification) {
    const type = notification.type;
    const isRead = notification.isRead;
    const icons = {
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_INVITATION]: isRead ? 'mail-open' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_START]: isRead ? 'play-circle-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUESTION_READY]: isRead ? 'help-circle-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_ENDED]: isRead ? 'mail-open' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.RESULTS_AVAILABLE]: isRead ? 'bar-chart-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.NEW_LEADER]: isRead ? 'trophy-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.ACHIEVEMENT_UNLOCKED]: isRead ? 'ribbon-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.ADMIN_ANNOUNCEMENT]: isRead ? 'megaphone-outline' : 'mail-unread',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.SYSTEM_ALERT]: isRead ? 'warning-outline' : 'mail-unread'
    };
    return icons[type] || 'notifications';
  }
  getNotificationColor(type) {
    const colors = {
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_INVITATION]: 'primary',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_START]: 'success',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUESTION_READY]: 'warning',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.QUIZ_ENDED]: 'tertiary',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.RESULTS_AVAILABLE]: 'secondary',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.NEW_LEADER]: 'danger',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.ACHIEVEMENT_UNLOCKED]: 'success',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.ADMIN_ANNOUNCEMENT]: 'danger',
      [_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__.NotificationType.SYSTEM_ALERT]: 'warning'
    };
    return colors[type] || 'medium';
  }
  navigateToactionUrl(actionUrl) {}
  viewNotification(notification) {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!notification.isRead) {
        yield _this3.notificationService.markAsRead(notification._id);
        _this3.unreadNotifications = _this3.unreadNotifications.filter(n => n._id !== notification._id);
        _this3.readNotifications.unshift({
          ...notification,
          isRead: true
        });
      }
      _this3.navigateToactionUrl(notification.actionUrl);
    })();
  }
  markAllAsRead() {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unreadIds = _this4.unreadNotifications.map(n => n._id);
      if (unreadIds.length > 0) {
        yield _this4.notificationService.markAllAsRead();
        _this4.unreadNotifications = [];
        _this4.readNotifications = [..._this4.unreadNotifications, ..._this4.readNotifications];
      }
    })();
  }
  trackByNotificationId(index, notification) {
    return notification._id;
  }
  doRefresh() {
    var _this5 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.loadNotifications();
    })();
  }
}
_AlertPage = AlertPage;
_AlertPage.ɵfac = function AlertPage_Factory(t) {
  return new (t || _AlertPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_AlertPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AlertPage,
  selectors: [["app-alert"]],
  decls: 16,
  vars: 3,
  consts: [["loadingTemplate", ""], ["emptyTemplate", ""], [3, "ngModelChange", "ngModel"], ["value", "unread"], ["value", "all"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "detail"], ["slot", "start", 3, "name", "color"], [1, "time"], ["slot", "end", "color", "danger", 4, "ngIf"], ["side", "end"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "eye-outline"], ["slot", "end", "color", "danger"], [1, "empty-state"], ["name", "notifications-off-outline"], [4, "ngIf"], [1, "loading-state"], ["name", "crescent"]],
  template: function AlertPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-toolbar")(5, "ion-segment", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AlertPage_Template_ion_segment_ngModelChange_5_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.segmentValue, $event) || (ctx.segmentValue = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-segment-button", 3)(7, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Unread");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-segment-button", 4)(10, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AlertPage_ng_container_13_Template, 4, 2, "ng-container", 5)(14, AlertPage_ng_template_14_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const loadingTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.segmentValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", loadingTemplate_r6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background:#fff;\n  --border:unset;\n  --border-width:0;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-bottom: 18%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWxlcnQvYWxlcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6I2ZmZjtcbiAgLS1ib3JkZXI6dW5zZXQ7XG4gIC0tYm9yZGVyLXdpZHRoOjA7XG59XG5cbmlvbi1saXN0e1xuICBtYXJnaW4tYm90dG9tOiAxOCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.page */ 1624);
/* harmony import */ var _create_create_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.page */ 5158);
/* harmony import */ var _discover_discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover/discover.page */ 5304);
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.page */ 6980);
/* harmony import */ var _alert_alert_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert/alert.page */ 8811);
/* harmony import */ var _user_setup_user_setup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-setup/user-setup.page */ 1552);
/* harmony import */ var _categories_categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.page */ 9882);
/* harmony import */ var _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quizes/quizes.page */ 4880);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ 2193);
/* harmony import */ var _verify_quiz_verify_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify-quiz/verify-quiz.component */ 4744);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.component */ 6300);
/* harmony import */ var _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./live-quizes/live-quizes.component */ 4580);
/* harmony import */ var _ongoing_ongoing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ongoing/ongoing.component */ 6760);
/* harmony import */ var _quiz_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz-guard.service */ 8064);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ 3560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppRoutingModule;















 // Import the guard



const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}, {
  path: 'home',
  component: _home_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'create',
  component: _create_create_page__WEBPACK_IMPORTED_MODULE_2__.CreatePage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'discover',
  component: _discover_discover_page__WEBPACK_IMPORTED_MODULE_3__.DiscoverPage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'profile',
  component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_4__.ProfilePage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'alert',
  component: _alert_alert_page__WEBPACK_IMPORTED_MODULE_5__.AlertPage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'setup',
  component: _user_setup_user_setup_page__WEBPACK_IMPORTED_MODULE_6__.UserSetupPage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'categories',
  component: _categories_categories_page__WEBPACK_IMPORTED_MODULE_7__.CategoriesPage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'quizes',
  component: _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_8__.QuizesPage,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'live-quizes',
  component: _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_12__.LiveQuizesComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'history',
  component: _history_history_component__WEBPACK_IMPORTED_MODULE_15__.HistoryComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'users',
  component: _users_users_component__WEBPACK_IMPORTED_MODULE_11__.UsersComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'verify-quiz',
  component: _verify_quiz_verify_quiz_component__WEBPACK_IMPORTED_MODULE_10__.VerifyQuizComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard]
}, {
  path: 'ongoing',
  component: _ongoing_ongoing_component__WEBPACK_IMPORTED_MODULE_13__.OngoingComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard],
  canDeactivate: [_quiz_guard_service__WEBPACK_IMPORTED_MODULE_14__.QuizGuardService]
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [_quiz_guard_service__WEBPACK_IMPORTED_MODULE_14__.QuizGuardService] // Add the guard to providers
  ,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_17__.PreloadAllModules,
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.service */ 7300);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 2546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ 7220);
var _AppComponent;









function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateTopage("/home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateTopage("/history"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateTopage("/create"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateTopage("/alert"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateTopage("/profile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r1.currentRoute == "/home" || ctx_r1.currentRoute == "/live-quizes" || ctx_r1.currentRoute == "/quizes" || ctx_r1.currentRoute == "/users" ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r1.currentRoute == "/history" ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r1.currentRoute == "/create" ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r1.currentRoute == "/alert" ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.notifications$);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r1.currentRoute == "/profile" ? "active" : "", "");
  }
}
function AppComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
  }
}
class AppComponent {
  constructor(socketService, router, notificationService) {
    this.socketService = socketService;
    this.router = router;
    this.notificationService = notificationService;
    this.showLoader = false;
    this.logged = false;
    this.notifications$ = 0;
    this.currentRoute = '';
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      this.currentRoute = event.url;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
    if (localStorage.getItem('token')) {
      this.notificationService.getUnreadNotificationsCount().subscribe(count => {
        this.notifications$ = count;
      });
    }
  }
  navigateTopage(page) {
    this.router.navigate([page]);
  }
  ngOnInit() {
    this.logged = localStorage.getItem('token') ? true : false;
    this.socketService.authData$.subscribe(data => {
      this.logged = data ? true : false;
    });
    this.notificationService.notificationsCount$.subscribe(count => {
      this.notifications$ = count;
    });
  }
}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 2,
  consts: [["class", "bottom-nav", 4, "ngIf"], [4, "ngIf"], [1, "bottom-nav"], [3, "click"], [1, "fas", "fa-home"], [1, "fas", "fa-map-marked-alt"], [1, "fas", "fa-plus-circle"], [1, "fas", "fa-bell"], [1, "badge"], [1, "fas", "fa-user"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 23, 16, "div", 0)(3, AppComponent_app_loader_3_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logged && ctx.currentRoute != "/login" && ctx.currentRoute != "/ongoing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet, _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ 7220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _googleads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googleads.service */ 2776);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.page */ 1624);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web.service */ 7421);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.service */ 1118);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket.service */ 7300);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 197);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ 6429);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9634);
/* harmony import */ var _create_create_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create/create.page */ 5158);
/* harmony import */ var _discover_discover_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discover/discover.page */ 5304);
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.page */ 6980);
/* harmony import */ var _alert_alert_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alert/alert.page */ 8811);
/* harmony import */ var _user_setup_user_setup_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-setup/user-setup.page */ 1552);
/* harmony import */ var _categories_categories_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/categories.page */ 9882);
/* harmony import */ var _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quizes/quizes.page */ 4880);
/* harmony import */ var _verify_quiz_verify_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./verify-quiz/verify-quiz.component */ 4744);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/users.component */ 6300);
/* harmony import */ var _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./live-quizes/live-quizes.component */ 4580);
/* harmony import */ var _ongoing_ongoing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ongoing/ongoing.component */ 6760);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./history/history.component */ 3560);
var _AppModule;

































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.fas);
class AppModule {}
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
  providers: [_googleads_service__WEBPACK_IMPORTED_MODULE_4__.GoogleadsService, _loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService, _web_service__WEBPACK_IMPORTED_MODULE_6__.WebService, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__.InAppBrowser, _socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_24__.APP_INITIALIZER,
    useFactory: socket => () => socket.connect(localStorage.getItem('token') || ''),
    deps: [_socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService],
    multi: true
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicRouteStrategy
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _home_home_page__WEBPACK_IMPORTED_MODULE_5__.HomePage, _create_create_page__WEBPACK_IMPORTED_MODULE_11__.CreatePage, _discover_discover_page__WEBPACK_IMPORTED_MODULE_12__.DiscoverPage, _profile_profile_page__WEBPACK_IMPORTED_MODULE_13__.ProfilePage, _alert_alert_page__WEBPACK_IMPORTED_MODULE_14__.AlertPage, _user_setup_user_setup_page__WEBPACK_IMPORTED_MODULE_15__.UserSetupPage, _categories_categories_page__WEBPACK_IMPORTED_MODULE_16__.CategoriesPage, _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_17__.QuizesPage, _verify_quiz_verify_quiz_component__WEBPACK_IMPORTED_MODULE_18__.VerifyQuizComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_19__.UsersComponent, _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_20__.LiveQuizesComponent, _ongoing_ongoing_component__WEBPACK_IMPORTED_MODULE_21__.OngoingComponent, _history_history_component__WEBPACK_IMPORTED_MODULE_22__.HistoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule]
  });
})();

/***/ }),

/***/ 2193:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard),
/* harmony export */   loginGuard: () => (/* binding */ loginGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const authGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const token = localStorage.getItem('token');
  if (!token) {
    return router.navigate(['/login']);
  }
  return true;
};
const loginGuard = (route, state) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return true;
  }
  return false;
};

/***/ }),

/***/ 9882:
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesPage: () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
var _CategoriesPage;



class CategoriesPage {
  constructor() {}
  ngOnInit() {}
}
_CategoriesPage = CategoriesPage;
_CategoriesPage.ɵfac = function CategoriesPage_Factory(t) {
  return new (t || _CategoriesPage)();
};
_CategoriesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _CategoriesPage,
  selectors: [["app-categories"]],
  decls: 34,
  vars: 1,
  consts: [[1, "category-content", 3, "fullscreen"], [1, "section-title"], ["routerLink", "/home", 1, "back-button"], [1, "fas", "fa-chevron-left"], [1, "category-container"], [1, "category-n-scroll"], [1, "category-card", "active"], [1, "icon-wrapper"], [1, "fas", "fa-calculator"], [1, "category-card"], [1, "fas", "fa-flask"], [1, "fas", "fa-book"], [1, "fas", "fa-globe-americas"], [1, "fas", "fa-history"]],
  template: function CategoriesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Math");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Science");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Literature");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9)(25, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Geography");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9)(30, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n\n.category-content[_ngcontent-%COMP%] {\n  --padding-top: 20px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-bottom: 20px;\n}\n\n\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary); \n\n  text-decoration: none;\n  font-size: 16px;\n  margin-right: 16px;\n}\n\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 14px;\n}\n\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: #333;\n}\n\n\n\n.category-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n.category-n-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scrollbar-width: none; \n\n  padding-bottom: 16px;\n  width: 100%;\n}\n\n\n\n.category-n-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.category-card[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 100px;\n  min-height: 110px;\n  background: white;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.category-card.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n}\n\n.category-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n\n.category-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 8px;\n}\n\n\n\n@media (max-width: 480px) {\n  .icon-wrapper[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .category-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.category-n-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 28px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  justify-content: center;\n}\n\n\n\n.category-n-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.category-n-scroll[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 0 0 12px; \n\n}\n\n\n\n.category-n-scroll[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-start; \n\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUEsRUFBQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUUsdUJBQUE7QUFDQTtFQUNFLFdBQUE7QUFDSjs7QUFFRSw2QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUEsRUFBQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUUscUNBQUE7QUFDQTtFQUNFLGFBQUE7QUFDSjs7QUFFRSxtQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUUsMkJBQUE7QUFDQTtFQUdFO0lBQ0UsZUFBQTtFQURKO0VBSUU7SUFDRSxlQUFBO0VBRko7QUFDRjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBTEo7O0FBUUEsd0RBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGNBQUEsRUFBQSxxQkFBQTtBQUxKOztBQVFBLDJFQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUEsRUFBQSwwQkFBQTtBQUxKOztBQU9BO0VBQ0ksaUJBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZ1bGwgc2NyZWVuIHN0eWxpbmcgKi9cbi5jYXRlZ29yeS1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC8qIEhlYWRlciBzZWN0aW9uICovXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IC8qIFVzZSB5b3VyIHRoZW1lIGNvbG9yICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cbiAgXG4gIC5iYWNrLWJ1dHRvbiBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC8qIENhdGVnb3J5IGNvbnRhaW5lciAqL1xuICAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLyogU2Nyb2xsYWJsZSBjYXRlZ29yeSBsaXN0ICovXG4gIC5jYXRlZ29yeS1uLXNjcm9sbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lL1NhZmFyaSAqL1xuICAuY2F0ZWdvcnktbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKiBDYXRlZ29yeSBjYXJkcyAqL1xuICAuY2F0ZWdvcnktY2FyZCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2F0ZWdvcnktY2FyZC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jYXJkOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgfVxuICBcbiAgLmljb24td3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jYXJkIGg0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG4gIFxuICAvKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gICAgXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXRlZ29yeS1jYXJkIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cblxuXG5cbiAgLmNhdGVnb3J5LW4tc2Nyb2xsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIEZvciBsZWZ0LWFsaWduZWQgY29udGVudCB0aGF0J3MgY2VudGVyZWQgYXMgYSBncm91cCAqL1xuLmNhdGVnb3J5LW4tc2Nyb2xsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2F0ZWdvcnktbi1zY3JvbGw6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAwIDAgMTJweDsgLyogbWF0Y2hlcyB5b3VyIGdhcCAqL1xufVxuXG4vKiBGb3Igd3JhcHBpbmcgYmVoYXZpb3IgKGlmIHlvdSByZWFsbHkgd2FudCBib3RoIHdyYXBwaW5nIGFuZCBzY3JvbGxpbmcpICovXG4uY2F0ZWdvcnktbi1zY3JvbGwge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIGl0ZW1zIHN0YXJ0IGZyb20gbGVmdCAqL1xufVxuLmljb24td3JhcHBlcntcbiAgICBib3gtc2hhZG93OiB1bnNldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3577:
/*!******************************************!*\
  !*** ./src/app/create-quizes.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateQuizesService: () => (/* binding */ CreateQuizesService)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ 7300);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster.service */ 2503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);

var _CreateQuizesService;






class CreateQuizesService {
  // Value getters for synchronous access
  get currentDraft() {
    return this.quizDraftSubject$.value;
  }
  get draftQuizzes() {
    return this.quizzesDraftSubject$.value;
  }
  get publishedQuizzes() {
    return this.quizzesPublishedSubject$.value;
  }
  get activeQuiz() {
    return this.activeQuizSubject$.value;
  }
  constructor(socketService, toastr, router) {
    this.socketService = socketService;
    this.toastr = toastr;
    this.router = router;
    // State Subjects
    this.quizDraftSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.quizzesDraftSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.quizzesPublishedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.quizzesParticipantsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.activeQuizSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.liveQuizesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.submittedQuizesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.quizResultSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.refreshedQuizes$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.isQuizesRefreshed = this.refreshedQuizes$.asObservable();
    // Public Observables
    this.getCurrentDraft$ = this.quizDraftSubject$.asObservable();
    this.getQuizesDraft$ = this.quizzesDraftSubject$.asObservable();
    this.getPublishedQuizes$ = this.quizzesPublishedSubject$.asObservable();
    this.getActiveQuiz$ = this.activeQuizSubject$.asObservable();
    this.liveQuizes$ = this.liveQuizesSubject$.asObservable();
    this.submittedQuizes$ = this.submittedQuizesSubject$.asObservable();
    this.getQuizResults$ = this.quizResultSubject$.asObservable();
    this.getParticipants$ = this.quizzesParticipantsSubject$.asObservable();
    this.setupSocketListeners();
  }
  initializeData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Load initial data
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([_this.getAllQuiz().toPromise(), _this.getActiveQuizes().toPromise(), _this.getPublishedQuiz().toPromise()]).toPromise();
    })();
  }
  setupSocketListeners() {
    // Quiz list updates
    this.socketService.socket.on('quiz:all:success', data => {
      this.quizzesDraftSubject$.next(data.quizes);
    });
    // Published quizzes updates
    this.socketService.socket.on('quiz:published:success', data => {
      this.quizzesPublishedSubject$.next(data.quizes);
    });
    // Individual quiz updates
    this.socketService.socket.on('quiz:updated', quiz => {
      this.updateQuizInState(quiz);
    });
    // Quiz deletion
    this.socketService.socket.on('quiz:deleted', quizId => {
      this.removeQuizFromState(quizId);
    });
    // error listners
    this.socketService.socket.on('quiz:create:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:refreshQuestion:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:published:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:all:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:active:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:get:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:delete:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:publish:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:waiting:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:join:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:start:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:submit:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('quiz:answer:error', data => {
      this.toastr.success(data.error);
    });
    this.socketService.socket.on('refreshpage', data => {
      this.refreshedQuizes$.next(true);
    });
  }
  updateQuizInState(updatedQuiz) {
    var _this$activeQuiz, _this$currentDraft;
    // Update in drafts if exists
    const currentDrafts = this.quizzesDraftSubject$.value;
    const draftIndex = currentDrafts.findIndex(q => q._id === updatedQuiz._id);
    if (draftIndex >= 0) {
      const updatedDrafts = [...currentDrafts];
      updatedDrafts[draftIndex] = updatedQuiz;
      this.quizzesDraftSubject$.next(updatedDrafts);
    }
    // Update in published if exists
    const currentPublished = this.quizzesPublishedSubject$.value;
    const publishedIndex = currentPublished.findIndex(q => q._id === updatedQuiz._id);
    if (publishedIndex >= 0) {
      const updatedPublished = [...currentPublished];
      updatedPublished[publishedIndex] = updatedQuiz;
      this.quizzesPublishedSubject$.next(updatedPublished);
    }
    // Update active quiz if it's the one being updated
    if (((_this$activeQuiz = this.activeQuiz) === null || _this$activeQuiz === void 0 ? void 0 : _this$activeQuiz._id) === updatedQuiz._id) {
      this.activeQuizSubject$.next(updatedQuiz);
    }
    // Update current draft if it's the one being updated
    if (((_this$currentDraft = this.currentDraft) === null || _this$currentDraft === void 0 ? void 0 : _this$currentDraft._id) === updatedQuiz._id) {
      this.quizDraftSubject$.next(updatedQuiz);
    }
  }
  removeQuizFromState(quizId) {
    var _this$activeQuiz2, _this$currentDraft2;
    // Remove from drafts
    this.quizzesDraftSubject$.next(this.draftQuizzes.filter(q => q._id !== quizId));
    // Remove from published
    this.quizzesPublishedSubject$.next(this.publishedQuizzes.filter(q => q._id !== quizId));
    // Clear active quiz if it's the one being deleted
    if (((_this$activeQuiz2 = this.activeQuiz) === null || _this$activeQuiz2 === void 0 ? void 0 : _this$activeQuiz2._id) === quizId) {
      this.activeQuizSubject$.next(null);
    }
    // Clear current draft if it's the one being deleted
    if (((_this$currentDraft2 = this.currentDraft) === null || _this$currentDraft2 === void 0 ? void 0 : _this$currentDraft2._id) === quizId) {
      this.quizDraftSubject$.next(null);
    }
  }
  // Public API Methods
  createQuiz(prompt, options) {
    this.socketService.socket.emit('quiz:create', {
      prompt,
      options
    });
    return this.socketService.fromEvent('quiz:create:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.quizDraftSubject$.next(quiz);
      // Refresh lists
      this.getAllQuiz().subscribe();
      this.getPublishedQuiz().subscribe();
    }));
  }
  get limit() {
    let isLimitRoute = ['/home'].includes(this.router.url);
    return isLimitRoute ? 3 : 0;
  }
  getAllQuiz() {
    this.socketService.socket.emit('quiz:all');
    return this.socketService.fromEvent('quiz:all:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quizes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quizzes => this.quizzesDraftSubject$.next(quizzes)));
  }
  getPublishedQuiz(limit) {
    this.socketService.socket.emit('quiz:published', limit == 0 ? limit : this.limit);
    return this.socketService.fromEvent('quiz:published:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quizes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quizzes => this.quizzesPublishedSubject$.next(quizzes)));
  }
  getActiveQuizes(limit) {
    this.socketService.socket.emit('quiz:active', limit == 0 ? limit : this.limit);
    return this.socketService.fromEvent('quiz:active:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quizes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quizzes => this.liveQuizesSubject$.next(quizzes)));
  }
  getSubmittedQuizes() {
    this.socketService.socket.emit('quiz:SubmittedQuizes');
    return this.socketService.fromEvent('quiz:SubmittedQuizes:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quizes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quizzes => this.submittedQuizesSubject$.next(quizzes)));
  }
  getQuiz(quizId) {
    this.socketService.socket.emit('quiz:get', quizId);
    return this.socketService.fromEvent('quiz:get:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz));
  }
  getLiveQuiz(quizId) {
    this.socketService.socket.emit('livequiz:get', quizId);
    return this.socketService.fromEvent('livequiz:get:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz));
  }
  updateQuizStatus(quizId, approvalStatus) {
    this.socketService.socket.emit('quiz:publish', quizId, approvalStatus);
    return this.socketService.fromEvent('quiz:publish:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      // The socket listeners will handle the state updates
      this.getAllQuiz().subscribe();
      this.getPublishedQuiz().subscribe();
    }));
  }
  generateNewQuestion(quizId, index) {
    this.socketService.socket.emit('quiz:refreshQuestion', quizId, index);
    return this.socketService.fromEvent('quiz:refreshQuestion:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => this.updateQuizInState(quiz)));
  }
  deleteQuiz(quizId) {
    this.socketService.socket.emit('quiz:delete', quizId);
    return this.socketService.fromEvent('quiz:delete:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      // The socket listeners will handle the state updates
      this.refreshedQuizes$.next(true);
    }));
  }
  BeginQuiz(quizId) {
    this.socketService.socket.emit('quiz:waiting', quizId);
    return this.socketService.fromEvent('quiz:waiting:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.refreshedQuizes$.next(true);
    }));
  }
  joinQuiz(quizId) {
    this.socketService.socket.emit('quiz:join', quizId);
    return this.socketService.fromEvent('quiz:join:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.activeQuizSubject$.next(quiz), this.refreshedQuizes$.next(true);
    }));
  }
  startQuiz(quizId) {
    this.socketService.socket.emit('quiz:start', quizId);
    return this.socketService.fromEvent('quiz:start:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.refreshedQuizes$.next(true);
    }));
  }
  submitQuiz(quizId) {
    this.socketService.socket.emit('quiz:submit', quizId);
    return this.socketService.fromEvent('quiz:submit:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.toastr.success('Quiz submitted successfully!');
      this.refreshedQuizes$.next(true);
    }));
  }
  completeQuizByHost(quizId) {
    this.socketService.socket.emit('quiz:completeQuizByHost', quizId);
    return this.socketService.fromEvent('quiz:completeQuizByHost:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.refreshedQuizes$.next(true);
      this.getAllQuiz().subscribe();
      this.getPublishedQuiz().subscribe();
      this.getActiveQuizes().subscribe();
    }));
  }
  getQuizParticipant(quizId) {
    this.socketService.socket.emit('quiz:participants', quizId);
    return this.socketService.fromEvent('quiz:participants:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.quiz), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => this.quizzesParticipantsSubject$.next(quiz)));
  }
  submitAnswer(quizId, questionId, answer) {
    if (!quizId) {
      throw new Error('No active quiz');
    }
    this.socketService.socket.emit('quiz:answer:submit', {
      quizId: quizId,
      questionId,
      answer
    });
    return this.socketService.fromEvent('quiz:answer:success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(result => {
      return result;
    }));
  }
  clearDraft() {
    this.quizDraftSubject$.next(null);
  }
  endActiveQuiz() {
    this.activeQuizSubject$.next(null);
    this.quizResultSubject$.next(null);
  }
  // Helper method to find a quiz by ID
  findQuizById(id) {
    return [...this.draftQuizzes, ...this.publishedQuizzes].find(q => q._id === id);
  }
}
_CreateQuizesService = CreateQuizesService;
_CreateQuizesService.ɵfac = function CreateQuizesService_Factory(t) {
  return new (t || _CreateQuizesService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
_CreateQuizesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _CreateQuizesService,
  factory: _CreateQuizesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5158:
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePage: () => (/* binding */ CreatePage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toaster.service */ 2503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification.service */ 2546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _CreatePage;









const _c0 = () => [];
function CreatePage_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePage_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cancelQuizGeneration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreatePage__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreatePage__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 19)(1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " .spinner { animation: rotate 1s linear infinite; } @keyframes rotate { 100% { transform: rotate(360deg); } } .spinner__path { stroke-dasharray: 90, 150; stroke-dashoffset: 0; stroke-linecap: round; animation: dash 1.5s ease-in-out infinite; } @keyframes dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; } 50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; } 100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; } } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "circle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreatePage_ng_container_12_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 30)(6, "div", 31)(7, "div", 32)(8, "div", 33)(9, "div", 34)(10, "div", 35)(11, "div", 36)(12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function CreatePage_ng_container_12_div_1_div_6_ion_chip_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreatePage_ng_container_12_div_1_div_6_button_21__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 16);
  }
}
function CreatePage_ng_container_12_div_1_div_6_button_21__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 56);
  }
}
function CreatePage_ng_container_12_div_1_div_6_button_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreatePage_ng_container_12_div_1_div_6_button_21__svg_path_2_Template, 1, 0, "path", 54)(3, CreatePage_ng_container_12_div_1_div_6_button_21__svg_path_3_Template, 1, 0, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus == "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus == "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r3.approvalStatus, " ");
  }
}
function CreatePage_ng_container_12_div_1_div_6_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePage_ng_container_12_div_1_div_6_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.verifyQuiz(quiz_r3._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CreatePage_ng_container_12_div_1_div_6_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePage_ng_container_12_div_1_div_6_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteQuiz(quiz_r3._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CreatePage_ng_container_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 40)(6, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "path", 44)(13, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CreatePage_ng_container_12_div_1_div_6_ion_chip_20_Template, 2, 0, "ion-chip", 48)(21, CreatePage_ng_container_12_div_1_div_6_button_21_Template, 5, 3, "button", 49)(22, CreatePage_ng_container_12_div_1_div_6_button_22_Template, 4, 0, "button", 50)(23, CreatePage_ng_container_12_div_1_div_6_button_23_Template, 4, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quiz_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r3.estimatedTime / 60, " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r3.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r3.totalQuestions, " Qs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.IsAdminTemplate(quiz_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus != "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus != "pending");
  }
}
function CreatePage_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Generated Quizzes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreatePage_ng_container_12_div_1_ng_container_5_Template, 13, 0, "ng-container", 8)(6, CreatePage_ng_container_12_div_1_div_6_Template, 24, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingQuizzes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", vm_r6.draftQuizzes)("ngForTrackBy", ctx_r1.trackByQuizId);
  }
}
function CreatePage_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreatePage_ng_container_12_div_1_Template, 7, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", vm_r6.draftQuizzes.length);
  }
}
class CreatePage {
  constructor(quizService, toasterService, router, notificationService) {
    this.quizService = quizService;
    this.toasterService = toasterService;
    this.router = router;
    this.notificationService = notificationService;
    this.quizPrompt = '';
    this.quizPromptDraft = '';
    this.isCreating = false;
    this.waitingMessage = "Generate 10 questions about e.g., Science, History, Movies, etc.";
    this.isLoadingQuizzes = false;
    this.loadingMessages = ["Analyzing your topic...", "Creating engaging questions...", "Verifying content accuracy...", "Applying difficulty settings...", "Quality checking..."];
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.quizService.getCurrentDraft$, this.quizService.getQuizesDraft$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([currentDraft, draftQuizzes]) => ({
      currentDraft,
      draftQuizzes
    })));
  }
  ngOnInit() {
    this.loadDraftQuizzes();
  }
  IsAdminTemplate(quiz) {
    var _quiz$source;
    return ((_quiz$source = quiz.source) === null || _quiz$source === void 0 ? void 0 : _quiz$source.toLowerCase()) === 'admin-template' && quiz.approvalStatus !== 'rejected';
  }
  createQuiz() {
    if (!this.validateQuizPrompt()) return;
    this.prepareForQuizCreation();
    this.startLoadingAnimation();
    this.quizService.createQuiz(this.quizPromptDraft).subscribe({
      next: response => {
        this.stopLoadingAnimation(); // Stop progress bar on success
        this.handleCreationSuccess(response);
      },
      error: err => {
        this.stopLoadingAnimation(); // Also stop on error
        this.handleCreationError(err);
      }
    });
  }
  stopLoadingAnimation() {
    this.isCreating = false;
    this.quizPrompt = '';
  }
  handleCreationSuccess(response) {
    // Handle successful quiz creation
    this.waitingMessage = "";
    // You might want to navigate to the quiz page or show success message
    this.showSuccessMessage('Quiz created successfully!');
  }
  showSuccessMessage(message) {
    // Your success message implementation
    // Could use Toast, Alert, or Snackbar
  }
  handleCreationError(err) {
    this.isCreating = false;
    this.quizPrompt = this.quizPromptDraft;
    this.resetPromptFields();
    this.toasterService.error('Failed to create quiz. Please try again.');
    console.error('Quiz creation error:', err);
  }
  validateQuizPrompt() {
    if (!this.quizPrompt.trim()) {
      this.toasterService.error('Please enter a quiz topic');
      return false;
    }
    return true;
  }
  prepareForQuizCreation() {
    this.quizPromptDraft = this.quizPrompt;
    this.isCreating = true;
  }
  startLoadingAnimation() {
    let counter = 0;
    const maxMessages = this.loadingMessages.length * 2;
    const intervalId = setInterval(() => {
      if (counter >= maxMessages || !this.isCreating) {
        clearInterval(intervalId);
        if (this.isCreating) {
          this.quizPrompt = "Almost there...";
        }
        return;
      }
      this.quizPrompt = this.loadingMessages[counter % this.loadingMessages.length];
      counter++;
    }, 3000);
  }
  cancelQuizGeneration() {
    this.isCreating = false;
    this.quizPrompt = this.quizPromptDraft;
    this.resetPromptFields();
  }
  resetPromptFields() {
    this.quizPrompt = '';
    this.quizPromptDraft = '';
  }
  loadDraftQuizzes() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoadingQuizzes = true;
      setTimeout(() => {
        _this.isLoadingQuizzes = false;
      }, 2000);
      yield _this.quizService.getAllQuiz().toPromise();
    })();
  }
  verifyQuiz(quizId) {
    this.router.navigate(['/verify-quiz'], {
      queryParams: {
        id: quizId
      }
    });
  }
  deleteQuiz(quizId) {
    this.quizService.deleteQuiz(quizId).subscribe({
      error: err => {
        var _err$error;
        this.toasterService.error(((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || 'Failed to delete quiz');
        console.error('Delete failed:', err);
      }
    });
  }
  trackByQuizId(index, quiz) {
    return quiz._id;
  }
}
_CreatePage = CreatePage;
_CreatePage.ɵfac = function CreatePage_Factory(t) {
  return new (t || _CreatePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_1__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
};
_CreatePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _CreatePage,
  selectors: [["app-create"]],
  decls: 19,
  vars: 19,
  consts: [[3, "fullscreen"], [1, "input-container"], ["for", "quiz-input", 1, "input-label"], ["id", "quiz-input", 1, "big-input", 3, "ngModelChange", "readOnly", "ngModel", "placeholder"], ["class", "action-btn reject-btn cancel", "slot", "right", 3, "click", 4, "ngIf"], [1, "generate-btn", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "spinner", "width", "20", "height", "20", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [4, "ngIf"], [1, "floating-action", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 4v6h-6"], ["d", "M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["slot", "right", 1, "action-btn", "reject-btn", "cancel", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2M12 16.5V7.5M16.5 12L7.5 12", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "spinner"], ["cx", "12", "cy", "12", "r", "8", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 1, "spinner__path"], ["class", "autogenerated-quizzes", 4, "ngIf"], [1, "autogenerated-quizzes"], [1, "section-title"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "quiz-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-picture"], [1, "ph-row"], [1, "ph-col-6", "big"], [1, "ph-col-4", "big"], [1, "ph-col-2", "big"], [1, "ph-col-4"], [1, "ph-col-8", "empty"], [1, "ph-col-6"], [1, "ph-col-6", "empty"], [1, "quiz-card"], [1, "quiz-title"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 10H8.01M12 10H12.01M16 10H16.01M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "quiz-actions"], ["class", "difficulty-badge", 4, "ngIf"], ["class", "action-btn", 4, "ngIf"], ["class", "action-btn approve-btn", 3, "click", 4, "ngIf"], ["class", "action-btn delete-btn", 3, "click", 4, "ngIf"], [1, "difficulty-badge"], [1, "action-btn"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "approve-btn", 3, "click"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "delete-btn", 3, "click"], ["d", "M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z", "fill", "currentColor"]],
  template: function CreatePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Create your own custom quiz in seconds! Simply provide a topic and number of questions you want in this, and our system will generate a personalized quiz with a variety of questions. Perfect for learning, testing knowledge, or just having fun!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "textarea", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CreatePage_Template_textarea_ngModelChange_6_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.quizPrompt, $event) || (ctx.quizPrompt = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreatePage_button_7_Template, 4, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePage_Template_button_click_8_listener() {
        return ctx.createQuiz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreatePage__svg_svg_9_Template, 2, 0, "svg", 6)(10, CreatePage__svg_svg_10_Template, 4, 0, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Generate Quiz ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreatePage_ng_container_12_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePage_Template_div_click_14_listener() {
        return ctx.loadDraftQuizzes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "path", 11)(17, "path", 12)(18, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("phone-section ", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 14, ctx.viewModel$)) == null ? null : tmp_1_0.draftQuizzes) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0)).length > 2 ? "mb-50" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readOnly", ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.quizPrompt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.waitingMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 16, ctx.viewModel$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("loading", ctx.isLoadingQuizzes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".phone-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\n.mb-50[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6C5CE7;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 8px 12px 8px 0;\n  border-radius: 12px;\n  transition: all 0.2s;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(108, 92, 231, 0.1);\n}\n\n.back-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D3436;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  right: 23px;\n  background-color: #FFFFFF;\n}\n\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-weight: 600;\n  color: #2D3436;\n  font-size: 15px;\n}\n\n.big-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  font-size: 15px;\n  resize: none;\n  outline: none;\n  transition: all 0.3s;\n  background-color: #F5F6FA;\n  color: #2D3436;\n}\n\n.big-input[_ngcontent-%COMP%]:focus {\n  border-color: #6C5CE7;\n}\n\n.big-input[_ngcontent-%COMP%]::placeholder {\n  color: #ADADAD;\n}\n\n.generate-btn[_ngcontent-%COMP%] {\n  background-color: #6C5CE7;\n  color: white;\n  border: none;\n  border-radius: 14px;\n  padding: 18px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.3s;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.generate-btn[_ngcontent-%COMP%]:hover {\n  background-color: #5D4BDB;\n  transform: translateY(-1px);\n}\n\n.generate-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.section-title[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  color: #fff;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(108, 92, 231, 0.5607843137);\n}\n\n.difficulty-badge[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n  padding: 5px 15px;\n  border-radius: 16px;\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  right: -7px;\n  border-radius: unset;\n  border-bottom-left-radius: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFYUjs7QUFlQTtFQUNJLG1CQUFBO0FBWko7O0FBZUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWlI7O0FBZUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWhDTTtFQWlDTixxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVpSOztBQWVJO0VBQ0kseUNBQUE7QUFaUjs7QUFlSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaUjs7QUFlSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyREc7QUF5Q1g7O0FBZUk7RUFDSSx5QkF0RE07RUF1RE4sbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVpSOztBQWVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQWpFTTtBQXFEZDs7QUFlSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0EzRUc7RUE0RUgsZUFBQTtBQVpSOztBQWVJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQXZGQztFQXdGRCxjQTFGRztBQThFWDs7QUFlSTtFQUNJLHFCQWxHTTtBQXNGZDs7QUFlSTtFQUNJLGNBQUE7QUFaUjs7QUFlSTtFQUNJLHlCQTFHTTtFQTJHTixZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQVpSOztBQWVJO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQVpSOztBQWVJO0VBQ0ksd0JBQUE7QUFaUjs7QUFpQkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQWRSOztBQWlCSTtFQUNJLGtEQUFBO0FBZFI7O0FBb0JJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBakJSIiwic291cmNlc0NvbnRlbnQiOlsiICAgICRwcmltYXJ5OiAjNkM1Q0U3O1xuICAgICRwcmltYXJ5LWxpZ2h0OiAjQTI5QkZFO1xuICAgICRzdWNjZXNzOiAjMDBCODk0O1xuICAgICRkYW5nZXI6ICNENjMwMzE7XG4gICAgJHRleHQ6ICMyRDM0MzY7XG4gICAgJHRleHQtbGlnaHQ6ICM2MzZFNzI7XG4gICAgJGJnOiAjRjVGNkZBO1xuICAgICRjYXJkLWJnOiAjRkZGRkZGO1xuICAgICRzaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAkbmV1bW9ycGg6IDhweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgICAgICAtOHB4IC04cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cbiAgICAucGhvbmUtc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuXG4ubWItNTAge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHggOHB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIH1cblxuICAgIC5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA4LCA5MiwgMjMxLCAwLjEpO1xuICAgIH1cblxuICAgIC5iYWNrLWJ1dHRvbiBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xuICAgIH1cblxuICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1iZztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5jYW5jZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgcmlnaHQ6IDIzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJnO1xuICAgIH1cblxuICAgIC5pbnB1dC1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogJHRleHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuYmlnLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xuICAgIH1cblxuICAgIC5iaWctaW5wdXQ6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cblxuICAgIC5iaWctaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNBREFEQUQ7XG4gICAgfVxuXG4gICAgLmdlbmVyYXRlLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5nZW5lcmF0ZS1idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ0QkRCO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgLmdlbmVyYXRlLWJ0bjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG5cblxuICAgIC5zZWN0aW9uLXRpdGxlIC5zcGlubmVyIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YzVjZTc4ZjtcbiAgICB9XG5cblxuXG5cbiAgICAuZGlmZmljdWx0eS1iYWRnZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIycHg7XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8651:
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService),
/* harmony export */   LeaderboardUser: () => (/* binding */ LeaderboardUser),
/* harmony export */   UserStats: () => (/* binding */ UserStats)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.service */ 7300);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
var _DashboardService;




class UserStats {
  constructor() {
    this.correctAnswers = 0;
    this.points = 0;
    this.quizzesCreated = 0;
    this.quizzesHosted = 0;
    this.rank = 0;
    this.wrongAnswers = 0;
    this.streak = {
      current: 0,
      longest: 0,
      lastUpdated: new Date(0)
    };
  }
}
class LeaderboardUser {
  constructor() {
    this.userId = '';
    this.name = '';
    this.avatar = '';
    this.points = 0;
    this.rank = 0;
    this.streak = 0;
  }
}
class DashboardService {
  constructor(socketService, router) {
    this.socketService = socketService;
    this.router = router;
    this.userStatsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.getUserStats$ = this.userStatsSubject.asObservable();
    this.leaderboardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.leaderboard$ = this.leaderboardSubject.asObservable();
  }
  getDashboardStats() {
    this.socketService.socket.emit('dashboard:stats:get');
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const subscription = this.socketService.fromEvent('dashboard:stats:success').subscribe({
        next: data => {
          try {
            this.userStatsSubject.next(data.stats);
            observer.next(data.stats);
          } catch (error) {
            observer.error('Failed to save stats to localStorage');
          }
        },
        error: err => observer.error(err)
      });
      return () => subscription.unsubscribe();
    });
  }
  get limit() {
    let isLimitRoute = ['/home'].includes(this.router.url);
    return isLimitRoute ? 3 : 0;
  }
  getLeaderboardUser(limit) {
    this.socketService.socket.emit('dashboard:leaderboardUser:get', limit == 0 ? limit : this.limit);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const subscription = this.socketService.fromEvent('dashboard:leaderboardUser:success').subscribe({
        next: data => {
          try {
            this.leaderboardSubject.next(data.leaderboard);
            observer.next(data.leaderboard);
          } catch (error) {
            observer.error('Failed to save leaderboard to localStorage');
          }
        },
        error: err => observer.error(err)
      });
      return () => subscription.unsubscribe();
    });
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user') || '');
  }
  logout() {
    // Clear local storage on logout
    localStorage.removeItem('UserStats');
    localStorage.removeItem('activity');
    this.socketService.logout();
  }
}
_DashboardService = DashboardService;
_DashboardService.ɵfac = function DashboardService_Factory(t) {
  return new (t || _DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _DashboardService,
  factory: _DashboardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5304:
/*!*******************************************!*\
  !*** ./src/app/discover/discover.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscoverPage: () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _DiscoverPage;


class DiscoverPage {
  constructor() {}
  ngOnInit() {}
}
_DiscoverPage = DiscoverPage;
_DiscoverPage.ɵfac = function DiscoverPage_Factory(t) {
  return new (t || _DiscoverPage)();
};
_DiscoverPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DiscoverPage,
  selectors: [["app-discover"]],
  decls: 1,
  vars: 1,
  consts: [[3, "fullscreen"]],
  template: function DiscoverPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-content", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2776:
/*!**************************************!*\
  !*** ./src/app/googleads.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleadsService: () => (/* binding */ GoogleadsService)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capacitor-admob-ads */ 593);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);

var _GoogleadsService;



class GoogleadsService {
  constructor() {}
  loadBannerAds() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return true
      try {
        yield capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.AdmobAds.showBannerAd({
          adId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.BannerAdId,
          isTesting: true,
          adSize: capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.BannerSize.BANNER,
          adPosition: capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.BannerPosition.BOTTOM
        });
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  loadInterstitialAd() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.AdmobAds.loadInterstitialAd({
          adId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.InterstitialAdsId,
          isTesting: true
        });
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  showInterstitialAds() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return true
      try {
        yield capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.AdmobAds.showInterstitialAd();
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  loadRewardedVideoAd() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return true
      try {
        yield capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.AdmobAds.loadRewardedVideoAd({
          adId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.RewardedVideoAddId,
          isTesting: true
        });
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  showloadRewardedVideoAds() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return true
      try {
        yield capacitor_admob_ads__WEBPACK_IMPORTED_MODULE_1__.AdmobAds.showRewardedVideoAd();
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
}
_GoogleadsService = GoogleadsService;
_GoogleadsService.ɵfac = function GoogleadsService_Factory(t) {
  return new (t || _GoogleadsService)();
};
_GoogleadsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _GoogleadsService,
  factory: _GoogleadsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3560:
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryComponent: () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ 7300);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _HistoryComponent;










function HistoryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function HistoryComponent_div_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function HistoryComponent_div_4_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.filterQuizzes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
  }
}
function HistoryComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryComponent_div_5_div_1_Template_div_click_0_listener() {
      const category_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectCategory(category_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.selectedCategory === category_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](category_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r4.name);
  }
}
function HistoryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HistoryComponent_div_5_div_1_Template, 5, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function HistoryComponent_ng_container_6_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryComponent_ng_container_6_ng_container_1_div_1_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryComponent_ng_container_6_ng_container_1_div_1_div_4_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.getQuizParticipant(quiz_r6._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 40)(4, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quiz_r6.participantCount, " ");
  }
}
function HistoryComponent_ng_container_6_ng_container_1_div_1_ion_chip_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, quiz_r6.userSubmissionStatus.status), " ");
  }
}
function HistoryComponent_ng_container_6_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HistoryComponent_ng_container_6_ng_container_1_div_1_div_4_Template, 6, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 27)(8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 31)(16, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27)(23, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, HistoryComponent_ng_container_6_ng_container_1_div_1_ion_chip_27_Template, 3, 3, "ion-chip", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quiz_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quiz_r6.participantCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](quiz_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 8, quiz_r6.estimatedTime / 60, "1.2-2"), " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quiz_r6.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quiz_r6.totalQuestions, " Qs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quiz_r6.totalPoints, " XP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quiz_r6.userSubmissionStatus.isSubmitted);
  }
}
function HistoryComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HistoryComponent_ng_container_6_ng_container_1_div_1_Template, 28, 11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", quizzes_r7)("ngForTrackBy", ctx_r1.trackByQuizId);
  }
}
function HistoryComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 43);
  }
}
function HistoryComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HistoryComponent_ng_container_6_ng_container_1_Template, 2, 2, "ng-container", 20)(2, HistoryComponent_ng_container_6_ng_template_2_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r7 = ctx.ngIf;
    const noliveQuizzes_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quizzes_r7.length > 0)("ngIfElse", noliveQuizzes_r8);
  }
}
function HistoryComponent_div_8_ng_container_12_div_1_div_2_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fas fa-crown crown ", "crown-" + (i_r11 + 1), "");
  }
}
function HistoryComponent_div_8_ng_container_12_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 65)(4, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function HistoryComponent_div_8_ng_container_12_div_1_div_2_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handleAvatarError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 67)(6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 69)(9, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HistoryComponent_div_8_ng_container_12_div_1_div_2_i_11_Template, 1, 3, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("top-participant", i_r11 < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", user_r12.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r12.userId == ctx_r1.currentUser._id ? "You" : user_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r12.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r11 < 2);
  }
}
function HistoryComponent_div_8_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HistoryComponent_div_8_ng_container_12_div_1_div_2_Template, 12, 7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const leaderboardUsers_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", leaderboardUsers_r13.participants)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function HistoryComponent_div_8_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 75)(4, "div", 75)(5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function HistoryComponent_div_8_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HistoryComponent_div_8_ng_container_12_div_1_Template, 3, 2, "div", 20)(2, HistoryComponent_div_8_ng_container_12_ng_template_2_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const leaderboardUsers_r13 = ctx.ngIf;
    const emptyLeaderboard_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", leaderboardUsers_r13.participants)("ngIfElse", emptyLeaderboard_r14);
  }
}
function HistoryComponent_div_8_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 75)(4, "div", 75)(5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function HistoryComponent_div_8_img_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function HistoryComponent_div_8_img_19_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handleAvatarError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r1.quizParticipants$)) == null ? null : tmp_3_0.host == null ? null : tmp_3_0.host.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HistoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "article", 46)(3, "header", 47)(4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 51)(10, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HistoryComponent_div_8_ng_container_12_Template, 4, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HistoryComponent_div_8_ng_template_14_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "footer", 54)(17, "div", 55)(18, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, HistoryComponent_div_8_img_19_Template, 2, 3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 58)(22, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Hosted by");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    const leaderboardLoading_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx_r1.quizParticipants$)) == null ? null : tmp_2_0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, ctx_r1.quizParticipants$))("ngIfElse", leaderboardLoading_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 9, ctx_r1.quizParticipants$)) == null ? null : tmp_5_0.host == null ? null : tmp_5_0.host.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 11, ctx_r1.quizParticipants$)) == null ? null : tmp_6_0.host == null ? null : tmp_6_0.host.name) || "Unknown Host");
  }
}
class HistoryComponent {
  constructor(quizService, router, sanitizer, SocketService) {
    this.quizService = quizService;
    this.router = router;
    this.sanitizer = sanitizer;
    this.SocketService = SocketService;
    this.ParentInjected = false;
    this.isLoadingQuizzes = false;
    this.openModel = false;
    this.currentUser = {
      _id: "",
      name: "",
      email: "",
      avatar: "",
      role: "",
      isVerified: false
    };
    // Filter properties
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.categories = [{
      id: 'all',
      name: 'All',
      icon: 'fas fa-layer-group'
    }, {
      id: 'math',
      name: 'Math',
      icon: 'fas fa-calculator'
    }, {
      id: 'science',
      name: 'Science',
      icon: 'fas fa-flask'
    }, {
      id: 'literature',
      name: 'Literature',
      icon: 'fas fa-book'
    }, {
      id: 'geography',
      name: 'Geography',
      icon: 'fas fa-globe-americas'
    }, {
      id: 'history',
      name: 'History',
      icon: 'fas fa-history'
    }];
    const User = localStorage.getItem('user');
    if (User) {
      this.currentUser = JSON.parse(User);
    }
    if (this.currentUser.avatar) {
      this.currentUser.avatar = this.makeSafeUrl(this.currentUser.avatar);
    }
    this.submittedQuizes$ = this.quizService.submittedQuizes$;
    this.quizParticipants$ = this.quizService.getParticipants$;
    // Initialize filtered quizzes
    this.filteredQuizzes$ = this.submittedQuizes$;
  }
  ngOnInit() {
    this.loadInitialData();
    this.setupFiltering();
    this.quizService.isQuizesRefreshed.subscribe(data => {
      if (data) {
        this.loadInitialData();
      }
    });
  }
  // Setup filtering observable
  setupFiltering() {
    this.filteredQuizzes$ = this.submittedQuizes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(quizzes => {
      return this.applyFilters(quizzes);
    }));
  }
  // Apply both search and category filters
  applyFilters(quizzes) {
    // Apply category filter
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      return quizzes.filter(quiz => {
        var _quiz$category;
        return ((_quiz$category = quiz.category) === null || _quiz$category === void 0 ? void 0 : _quiz$category.toLowerCase()) === this.selectedCategory.toLowerCase();
      });
    }
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      return quizzes.filter(quiz => quiz.title.toLowerCase().includes(query));
    }
    return quizzes;
  }
  // Filter quizzes based on current criteria
  filterQuizzes() {
    this.submittedQuizes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(quizzes => this.applyFilters(quizzes))).subscribe(filtered => {
      // This will trigger the async pipe update
      this.filteredQuizzes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(filtered);
    });
  }
  // Select category and filter
  selectCategory(categoryId) {
    this.selectedCategory = categoryId;
    this.filterQuizzes();
  }
  loadInitialData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoadingQuizzes = true;
      setTimeout(() => {
        _this.isLoadingQuizzes = false;
      }, 2000);
      yield _this.quizService.getSubmittedQuizes().toPromise();
    })();
  }
  getQuizParticipant(quizId) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.SocketService.authDataSource.next(null);
      yield _this2.quizService.getQuizParticipant(quizId).toPromise();
    })();
  }
  makeSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  avatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null;
  }
  // TrackBy functions for ngFor performance
  trackByQuizId(index, quiz) {
    return quiz._id;
  }
  showDialog() {
    this.openModel = true;
  }
  closeDialog() {
    let AuthData = {
      token: localStorage.getItem('token') || '',
      user: JSON.parse(localStorage.getItem('user') || '{}')
    };
    this.SocketService.authDataSource.next(AuthData);
    this.openModel = false;
  }
  handleAvatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null; // Prevent infinite loop
  }
  trackByUserId(index, user) {
    return user.userId;
  }
  ngOnDestroy() {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.quizService.getActiveQuizes(3).toPromise();
    })();
  }
}
_HistoryComponent = HistoryComponent;
_HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
  return new (t || _HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_1__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService));
};
_HistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _HistoryComponent,
  selectors: [["app-history"]],
  inputs: {
    submittedQuizes$: "submittedQuizes$",
    quizParticipants$: "quizParticipants$",
    ParentInjected: "ParentInjected"
  },
  decls: 14,
  vars: 11,
  consts: [["noliveQuizzes", ""], ["leaderboardLoading", ""], ["emptyLeaderboard", ""], [1, "section-title"], ["class", "search-bar", 4, "ngIf"], ["class", "category-scroll skeleton-value", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "floating-action", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 4v6h-6"], ["d", "M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search quizzes, topics...", 3, "ngModelChange", "input", "ngModel"], [1, "category-scroll", "skeleton-value"], ["class", "category-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "icon-wrapper"], [4, "ngIf", "ngIfElse"], ["class", "quiz-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "quiz-card"], [1, "quiz-header"], [1, "quiz-title"], ["class", "quiz-meta", 3, "click", 4, "ngIf"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 10H8.01M12 10H12.01M16 10H16.01M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "fas", "fa-bolt"], [1, "quiz-actions"], ["color", "success", "class", "difficulty-badge", 4, "ngIf"], [1, "quiz-meta", 3, "click"], [1, "quiz-meta-item", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["color", "success", 1, "difficulty-badge"], ["src", "assets/noQuizes.svg", "alt", "", "srcset", "", "loading", "eager"], [1, "modal-overlay"], [1, "modal"], [1, "modal-container"], [1, "modal-container-header"], [1, "modal-container-title"], [1, "icon-button", 3, "click"], ["height", "24", "width", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z", "fill", "currentColor"], [1, "modal-container-body", "rtf"], [1, "modal-container-footer"], [1, "host-container"], [1, "host-data"], ["class", "host-avatar", "alt", "Host avatar", "crossorigin", "anonymous", 3, "src", "error", 4, "ngIf"], [1, "hoster"], [1, "host-label"], [1, "host-name"], [1, "leaderboard-modal"], ["class", "leaderboard-item-modal", 3, "top-participant", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "leaderboard-item-modal"], [1, "rank-modal"], [1, "user-modal"], ["crossorigin", "anonymous", 3, "error", "src"], [1, "user-info-modal"], [1, "name-modal"], [1, "status-modal"], [1, "status-text"], [3, "class", 4, "ngIf"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-row"], [1, "ph-col-12", "big"], ["alt", "Host avatar", "crossorigin", "anonymous", 1, "host-avatar", 3, "error", "src"]],
  template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Submitted Quizzes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HistoryComponent_div_4_Template, 3, 1, "div", 4)(5, HistoryComponent_div_5_Template, 2, 1, "div", 5)(6, HistoryComponent_ng_container_6_Template, 4, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HistoryComponent_div_8_Template, 27, 13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryComponent_Template_div_click_9_listener() {
        return ctx.loadInitialData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 10)(12, "path", 11)(13, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("section ", !ctx.ParentInjected && "mb", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 9, ctx.filteredQuizzes$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.openModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loading", ctx.isLoadingQuizzes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonChip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe],
  styles: [".mb[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n\n.status-badge-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px 4px 8px;\n  border-radius: 16px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  position: absolute;\n  top: 16px;\n  left: 13px;\n  letter-spacing: 0.5px;\n  z-index: 10;\n  \n\n  \n\n  \n\n}\n.status-badge-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  color: currentColor;\n}\n.status-badge-container.waiting[_ngcontent-%COMP%] {\n  background-color: #FFA000;\n}\n.status-badge-container.live[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n}\n.status-badge-container.completed[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n}\n.status-badge-container.completed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  animation: none;\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.quiz-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.button[_ngcontent-%COMP%], \n.input[_ngcontent-%COMP%], \n.select[_ngcontent-%COMP%], \n.textarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 999;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  padding: 2rem;\n  border-radius: 8px;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n\n.modal-container-header[_ngcontent-%COMP%] {\n  padding: 15px !important;\n  padding: 25px 15px;\n  display: flex;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n  justify-content: space-between;\n  background: #2c3e50;\n  color: white;\n}\n\n.modal-container-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  line-height: 1;\n  font-weight: 700;\n  font-size: 1.125;\n  font-weight: 600;\n}\n\n.modal-container-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #750550;\n}\n\n.modal-container-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 0;\n  flex: 1;\n}\n.modal-container-body[_ngcontent-%COMP%]   .quiz-card[_ngcontent-%COMP%] {\n  border-radius: unset;\n  border: unset;\n}\n\n.rtf[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.rtf[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.125;\n}\n\n.rtf[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.25;\n}\n\n.rtf[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.rtf[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.rtf[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + [_ngcontent-%COMP%]:is(h1, h2[_ngcontent-%COMP%], h3)[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.rtf[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:is(h1, h2[_ngcontent-%COMP%], h3)[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.75em;\n}\n\n.rtf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  list-style-position: inside;\n}\n\n.rtf[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: numeric;\n}\n\n.rtf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n\n.modal-container-footer[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  position: relative;\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n}\n\n.modal-container-footer[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -51px;\n  left: 24px;\n  right: 24px;\n  height: 50px;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 8px;\n  background-color: transparent;\n  border: 0;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n\n.button.is-ghost[_ngcontent-%COMP%]:hover, \n.button.is-ghost[_ngcontent-%COMP%]:focus {\n  background-color: #dfdad7;\n}\n\n.button.is-primary[_ngcontent-%COMP%] {\n  background-color: #750550;\n  color: #fff;\n}\n\n.button.is-primary[_ngcontent-%COMP%]:hover, \n.button.is-primary[_ngcontent-%COMP%]:focus {\n  background-color: #4a0433;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  cursor: pointer;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  transition: 0.15s ease;\n  background: none;\n  border: none;\n  color: white;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n\n.icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover, \n.icon-button[_ngcontent-%COMP%]:focus {\n  background-color: #dfdad7;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.host-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  font-size: 10px;\n  border-radius: 8px;\n}\n\n.host-data[_ngcontent-%COMP%] {\n  gap: 12px;\n  display: flex;\n  align-items: center;\n}\n\n.host-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #e9ecef;\n  border: 2px solid #4a6bff;\n}\n\n.host-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  display: block;\n  font-size: 12px;\n}\n\n.host-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-left: 4px;\n}\n\n.leaderboard-modal[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.leaderboard-header-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 120px 80px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 14px;\n}\n.leaderboard-header-modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.leaderboard-header-modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  width: 115px;\n}\n\n.leaderboard-item-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 120px 80px;\n  align-items: center;\n  padding: 15px;\n  margin-bottom: 10px;\n  background: white;\n  border-radius: 10px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  position: relative;\n}\n\n.rank-modal[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  color: #2c3e50;\n}\n\n.user-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 125px;\n}\n\n.user-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 12px;\n  background: #e9ecef;\n}\n\n.user-info-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.name-modal[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #2c3e50;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n\n.status-modal[_ngcontent-%COMP%], \n.hoster[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.points-modal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #28a745;\n  text-align: right;\n  margin-right: 5px;\n}\n\n.trophy-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  font-size: 20px;\n}\n\n\n\n.ph-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 15px;\n}\n\n.ph-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 7.5px;\n}\n\n.ph-col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n\n.ph-col-12.big[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 15px;\n  background-color: #ced4da;\n  border-radius: 5px;\n  animation: _ngcontent-%COMP%_phAnimation 1.5s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_phAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n.rank-1[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-1[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n\n.rank-2[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-2[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.rank-3[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-3[_ngcontent-%COMP%] {\n  color: #cd7f32;\n}\n\n.crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -11px;\n  left: 63px;\n  font-size: 24px;\n}\n\n.trophy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 70px;\n  transform: translateY(-50%);\n  font-size: 24px;\n  opacity: 0.2;\n}\n\n.rank-1[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #ffc107;\n  opacity: 0.4;\n}\n\n.rank-2[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #6c757d;\n  opacity: 0.4;\n}\n\n.rank-3[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #cd7f32;\n  opacity: 0.4;\n}\n\n\n\n@media (max-width: 600px) {\n  .leaderboard-header-modal[_ngcontent-%COMP%] {\n    grid-template-columns: 43px 18fr 124px 11px;\n    font-size: 12px;\n  }\n  .leaderboard-item-modal[_ngcontent-%COMP%] {\n    grid-template-columns: 60px 1fr 85px 37px;\n    padding: 12px 0;\n  }\n  .name-modal[_ngcontent-%COMP%] {\n    max-width: 100px;\n    font-size: 14px;\n  }\n  .rank-modal[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .points-modal[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .user-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    margin-right: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBT0EsMkJBQUE7RUFLQSxxQkFBQTtFQUtBLDRCQUFBO0FBYkY7QUFGRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUFFO0VBQ0UseUJBQUE7QUFFSjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUlFO0VBQ0UseUJBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQU9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQUpGO0VBT0E7SUFDRSxxQkFBQTtJQUNBLFlBQUE7RUFMRjtFQVFBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBTkY7QUFDRjtBQVNBOzs7O0VBSUUsYUFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUFQRjtBQVNFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0FBUEo7O0FBV0E7Ozs7OztFQU1FLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7O0VBRUUsaUJBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVJGOztBQVdBOztFQUVFLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFSRjs7QUFXQTs7RUFFRSx5QkFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTs7RUFFRSx5QkFBQTtFQUNBLG9DQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQVJKO0FBVUk7RUFDRSxZQUFBO0FBUk47O0FBY0E7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFjQSxtQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFYRjs7QUFjQTtFQUNFO0lBQ0UsWUFBQTtFQVhGO0VBY0E7SUFDRSxZQUFBO0VBWkY7RUFlQTtJQUNFLFlBQUE7RUFiRjtBQUNGO0FBZ0JBOztFQUVFLGNBQUE7QUFkRjs7QUFpQkE7O0VBRUUsY0FBQTtBQWRGOztBQWlCQTs7RUFFRSxjQUFBO0FBZEY7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFmRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VBaEJGO0VBbUJBO0lBQ0UseUNBQUE7SUFDQSxlQUFBO0VBakJGO0VBb0JBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBbEJGO0VBdUJBO0lBQ0UsZUFBQTtFQXJCRjtFQXdCQTtJQUNFLGVBQUE7RUF0QkY7RUF5QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBdkJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWIge1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG5cbi5zdGF0dXMtYmFkZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA0cHggMTJweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHotaW5kZXg6IDEwO1xuXG4gIHN2ZyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlO1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAvKiBXYWl0aW5nIFN0YXRlIChZZWxsb3cpICovXG4gICYud2FpdGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTAwMDsgLy8gQW1iZXJcbiAgfVxuXG4gIC8qIExpdmUgU3RhdGUgKFJlZCkgKi9cbiAgJi5saXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyAvLyBSZWRcbiAgfVxuXG4gIC8qIENvbXBsZXRlZCBTdGF0ZSAoR3JlZW4pICovXG4gICYuY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvLyBHcmVlblxuXG4gICAgc3ZnIHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnF1aXotaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucXVpei1tZXRhLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5idXR0b24sXG4uaW5wdXQsXG4uc2VsZWN0LFxuLnRleHRhcmVhIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMTI1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyLXRpdGxlIHN2ZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjNzUwNTUwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBmbGV4OiAxO1xuXG4gIC5xdWl6LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gIH1cbn1cblxuLnJ0ZiBoMSxcbi5ydGYgaDIsXG4ucnRmIGgzLFxuLnJ0ZiBoNCxcbi5ydGYgaDUsXG4ucnRmIGg2IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnJ0ZiBoMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5ydGYgaDIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4ucnRmIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ucnRmPiorKiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnJ0Zj4qKyA6aXMoaDEsIGgyLCBoMykge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5ydGY+IDppcyhoMSwgaDIsIGgzKSsqIHtcbiAgbWFyZ2luLXRvcDogMC43NWVtO1xufVxuXG4ucnRmIHVsLFxuLnJ0ZiBvbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG59XG5cbi5ydGYgb2wge1xuICBsaXN0LXN0eWxlOiBudW1lcmljO1xufVxuXG4ucnRmIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cblxuLm1vZGFsLWNvbnRhaW5lci1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci1mb290ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MXB4O1xuICBsZWZ0OiAyNHB4O1xuICByaWdodDogMjRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlO1xufVxuXG4uYnV0dG9uLmlzLWdob3N0OmhvdmVyLFxuLmJ1dHRvbi5pcy1naG9zdDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRhZDc7XG59XG5cbi5idXR0b24uaXMtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTA1NTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnk6aG92ZXIsXG4uYnV0dG9uLmlzLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGEwNDMzO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xufVxuXG4uaWNvbi1idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyLFxuLmljb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGFkNztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uaG9zdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhvc3QtZGF0YSB7XG4gIGdhcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvc3QtYXZhdGFyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzRhNmJmZjtcbn1cblxuLmhvc3QtbGFiZWwge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhvc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubGVhZGVyYm9hcmQtbW9kYWwge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubGVhZGVyYm9hcmQtaGVhZGVyLW1vZGFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciAxMjBweCA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHdpZHRoOiAxMTVweDtcbiAgICB9XG4gIH1cblxufVxuXG4ubGVhZGVyYm9hcmQtaXRlbS1tb2RhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMTIwcHggODBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYW5rLW1vZGFsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4udXNlci1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMjVweDtcbn1cblxuLnVzZXItbW9kYWwgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xufVxuXG4udXNlci1pbmZvLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hbWUtbW9kYWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLnN0YXR1cy1tb2RhbCxcbi5ob3N0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3RhdHVzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wb2ludHMtbW9kYWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50cm9waHktbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIExvYWRpbmcgc3RhdGVzICovXG4ucGgtaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnBoLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG59XG5cbi5waC1jb2wtMTIge1xuICBmbGV4OiAwIDAgMTAwJTtcbn1cblxuLnBoLWNvbC0xMi5iaWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYW5pbWF0aW9uOiBwaEFuaW1hdGlvbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwaEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG4ucmFuay0xIC5yYW5rLFxuLmNyb3duLTEge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLnJhbmstMiAucmFuayxcbi5jcm93bi0yIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5yYW5rLTMgLnJhbmssXG4uY3Jvd24tMyB7XG4gIGNvbG9yOiAjY2Q3ZjMyO1xufVxuXG5cbi5jcm93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgbGVmdDogNjNweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbi50cm9waHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnJhbmstMSAudHJvcGh5IHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnJhbmstMiAudHJvcGh5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnJhbmstMyAudHJvcGh5IHtcbiAgY29sb3I6ICNjZDdmMzI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubGVhZGVyYm9hcmQtaGVhZGVyLW1vZGFsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQzcHggMThmciAxMjRweCAxMXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5sZWFkZXJib2FyZC1pdGVtLW1vZGFsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDg1cHggMzdweDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gIH1cblxuICAubmFtZS1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuXG5cbiAgLnJhbmstbW9kYWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5wb2ludHMtbW9kYWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC51c2VyLW1vZGFsIGltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1624:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification.service */ 2546);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quizes/quizes.page */ 4880);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.component */ 6300);
/* harmony import */ var _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../live-quizes/live-quizes.component */ 4580);

var _HomePage;










class HomePage {
  constructor(dashboardService, quizService, sanitizer, notificationService) {
    this.dashboardService = dashboardService;
    this.quizService = quizService;
    this.sanitizer = sanitizer;
    this.notificationService = notificationService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.searchQueryData = {
      searchQuery: '',
      selectedCategory: ''
    };
  }
  ngOnInit() {
    this.loadInitialData();
    this.quizService.isQuizesRefreshed.subscribe(data => {
      if (data) {
        this.loadInitialData();
      }
    });
  }
  get currentUser() {
    return this.dashboardService.getUser();
  }
  filterQuizesEvent(searchQueryData) {
    this.searchQueryData = searchQueryData;
  }
  loadInitialData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([_this.dashboardService.getLeaderboardUser(3), _this.quizService.getActiveQuizes(), _this.quizService.getPublishedQuiz(), _this.quizService.getSubmittedQuizes(), _this.notificationService.getUnreadNotificationsCount(), _this.dashboardService.getDashboardStats(), _this.quizService.initializeData()]).toPromise();
    })();
  }
  makeSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  avatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null;
  }
  logout() {
    this.dashboardService.logout();
  }
  handleRefresh(event) {
    this.loadInitialData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_2__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  decls: 12,
  vars: 7,
  consts: [[3, "fullscreen"], [1, "homeHeader"], [1, "homeHeader-content"], [1, "user-greeting"], ["crossorigin", "anonymous", 1, "user-avatar", 3, "click", "error", "src"], [3, "filterQuizes", "ParentInjected"], [3, "handleRefresh", "searchQueryData", "ParentInjected"], [3, "ParentInjected"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Ready to challenge yourself today?");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_Template_img_click_8_listener() {
        return ctx.logout();
      })("error", function HomePage_Template_img_error_8_listener($event) {
        return ctx.avatarError($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "app-live-quizes", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filterQuizes", function HomePage_Template_app_live_quizes_filterQuizes_9_listener($event) {
        return ctx.filterQuizesEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "app-quizes", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("handleRefresh", function HomePage_Template_app_quizes_handleRefresh_10_listener($event) {
        return ctx.handleRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-users", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.currentUser.name, "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.currentUser.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ParentInjected", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("searchQueryData", ctx.searchQueryData)("ParentInjected", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ParentInjected", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _quizes_quizes_page__WEBPACK_IMPORTED_MODULE_4__.QuizesPage, _users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent, _live_quizes_live_quizes_component__WEBPACK_IMPORTED_MODULE_6__.LiveQuizesComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4580:
/*!******************************************************!*\
  !*** ./src/app/live-quizes/live-quizes.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveQuizesComponent: () => (/* binding */ LiveQuizesComponent)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ 7300);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _LiveQuizesComponent;












function LiveQuizesComponent_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_div_1_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadInitialData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LiveQuizesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Live Quizzes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LiveQuizesComponent_div_1_a_3_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.ParentInjected);
  }
}
function LiveQuizesComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_i_5_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.searchQuery = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterQuizzes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LiveQuizesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_div_7_Template_div_click_0_listener() {
      const category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectCategory(category_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.selectedCategory === category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](category_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r5.name);
  }
}
function LiveQuizesComponent_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_div_8_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadInitialData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LiveQuizesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Live Quizzes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LiveQuizesComponent_div_8_a_3_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.ParentInjected);
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 43);
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 44);
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 45);
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_div_11_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.getQuizParticipant(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 49)(4, "circle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.participantCount, " ");
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.joinQuiz(quiz_r8.quizId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Participate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.playQuiz(quiz_r8.quizId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_ion_chip_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, quiz_r8.userSubmissionStatus.status), " ");
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h3", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_5_Template, 1, 0, "path", 26)(6, LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_6_Template, 1, 0, "path", 27)(7, LiveQuizesComponent_ng_container_9_ng_container_1_div_1__svg_path_7_Template, 1, 0, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LiveQuizesComponent_ng_container_9_ng_container_1_div_1_div_11_Template, 6, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 32)(15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "path", 36)(23, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 32)(30, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_34_Template, 5, 0, "button", 41)(35, LiveQuizesComponent_ng_container_9_ng_container_1_div_1_button_35_Template, 4, 0, "button", 41)(36, LiveQuizesComponent_ng_container_9_ng_container_1_div_1_ion_chip_36_Template, 3, 3, "ion-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("waiting", quiz_r8.status == "waiting")("live", quiz_r8.status == "in-progress")("completed", quiz_r8.status == "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.status !== "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.status !== "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.status == "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.status == "waiting" ? "Waiting" : quiz_r8.status == "in-progress" ? "LIVE NOW" : "Completed", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.participantCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quiz_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 20, quiz_r8.estimatedTime / 60, "1.2-2"), " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.totalQuestions, " Qs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.totalPoints, " XP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.status == "waiting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.status == "in-progress" && quiz_r8.isParticipant && !quiz_r8.userSubmissionStatus.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quiz_r8.userSubmissionStatus.isSubmitted);
  }
}
function LiveQuizesComponent_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LiveQuizesComponent_ng_container_9_ng_container_1_div_1_Template, 37, 23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", quizzes_r11)("ngForTrackBy", ctx_r1.trackByQuizId);
  }
}
function LiveQuizesComponent_ng_container_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 56);
  }
}
function LiveQuizesComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LiveQuizesComponent_ng_container_9_ng_container_1_Template, 2, 2, "ng-container", 19)(2, LiveQuizesComponent_ng_container_9_ng_template_2_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r11 = ctx.ngIf;
    const noactiveQuizzes_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quizzes_r11.length > 0)("ngIfElse", noactiveQuizzes_r12);
  }
}
function LiveQuizesComponent_div_11_ng_container_12_div_1_div_2__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "circle", 85)(2, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LiveQuizesComponent_div_11_ng_container_12_div_1_div_2__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "circle", 87)(2, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LiveQuizesComponent_div_11_ng_container_12_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 76)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 78)(4, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function LiveQuizesComponent_div_11_ng_container_12_div_1_div_2_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleAvatarError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 80)(6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LiveQuizesComponent_div_11_ng_container_12_div_1_div_2__svg_svg_9_Template, 3, 0, "svg", 83)(10, LiveQuizesComponent_div_11_ng_container_12_div_1_div_2__svg_svg_10_Template, 3, 0, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("top-participant", i_r16 < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", user_r15.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.userId == ctx_r1.currentUser._id ? "You" : user_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r15.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !user_r15.isSubmitted);
  }
}
function LiveQuizesComponent_div_11_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LiveQuizesComponent_div_11_ng_container_12_div_1_div_2_Template, 11, 7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const leaderboardUsers_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", leaderboardUsers_r17.participants)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function LiveQuizesComponent_div_11_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 92)(4, "div", 92)(5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function LiveQuizesComponent_div_11_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LiveQuizesComponent_div_11_ng_container_12_div_1_Template, 3, 2, "div", 19)(2, LiveQuizesComponent_div_11_ng_container_12_ng_template_2_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const leaderboardUsers_r17 = ctx.ngIf;
    const emptyLeaderboard_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", leaderboardUsers_r17.participants)("ngIfElse", emptyLeaderboard_r18);
  }
}
function LiveQuizesComponent_div_11_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 92)(4, "div", 92)(5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function LiveQuizesComponent_div_11_img_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function LiveQuizesComponent_div_11_img_19_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleAvatarError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r1.quizParticipants$)) == null ? null : tmp_3_0.host == null ? null : tmp_3_0.host.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function LiveQuizesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "article", 59)(3, "header", 60)(4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_div_11_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "path", 64)(10, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "section", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LiveQuizesComponent_div_11_ng_container_12_Template, 4, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LiveQuizesComponent_div_11_ng_template_14_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "footer", 67)(17, "div", 68)(18, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LiveQuizesComponent_div_11_img_19_Template, 2, 3, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 71)(22, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Hosted by");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    const leaderboardLoading_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, ctx_r1.quizParticipants$)) == null ? null : tmp_2_0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, ctx_r1.quizParticipants$))("ngIfElse", leaderboardLoading_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 9, ctx_r1.quizParticipants$)) == null ? null : tmp_5_0.host == null ? null : tmp_5_0.host.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 11, ctx_r1.quizParticipants$)) == null ? null : tmp_6_0.host == null ? null : tmp_6_0.host.name) || "Unknown Host");
  }
}
function LiveQuizesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LiveQuizesComponent_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadInitialData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 96)(3, "path", 97)(4, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("loading", ctx_r1.isLoadingQuizzes);
  }
}
class LiveQuizesComponent {
  constructor(quizService, router, sanitizer, SocketService, dashboardService) {
    this.quizService = quizService;
    this.router = router;
    this.sanitizer = sanitizer;
    this.SocketService = SocketService;
    this.dashboardService = dashboardService;
    this.ParentInjected = false;
    this.isLoadingQuizzes = false;
    this.openModel = false;
    // Filter properties
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.filterQuizes = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.categories = [{
      id: 'all',
      name: 'All',
      icon: 'fas fa-layer-group'
    }, {
      id: 'math',
      name: 'Math',
      icon: 'fas fa-calculator'
    }, {
      id: 'science',
      name: 'Science',
      icon: 'fas fa-flask'
    }, {
      id: 'literature',
      name: 'Literature',
      icon: 'fas fa-book'
    }, {
      id: 'geography',
      name: 'Geography',
      icon: 'fas fa-globe-americas'
    }, {
      id: 'history',
      name: 'History',
      icon: 'fas fa-history'
    }];
    this.liveQuizes$ = this.quizService.liveQuizes$;
    this.quizParticipants$ = this.quizService.getParticipants$;
    // Initialize filtered quizzes
    this.filteredQuizzes$ = this.liveQuizes$;
  }
  get currentUser() {
    return this.dashboardService.getUser();
  }
  ngOnInit() {
    this.loadInitialData();
    this.setupFiltering();
    this.quizService.isQuizesRefreshed.subscribe(data => {
      if (data) {
        this.loadInitialData();
      }
    });
  }
  // Setup filtering observable
  setupFiltering() {
    this.filteredQuizzes$ = this.liveQuizes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(quizzes => {
      return this.applyFilters(quizzes);
    }));
  }
  // Apply both search and category filters
  applyFilters(quizzes) {
    // Apply category filter
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      return quizzes.filter(quiz => {
        var _quiz$category;
        return ((_quiz$category = quiz.category) === null || _quiz$category === void 0 ? void 0 : _quiz$category.toLowerCase()) === this.selectedCategory.toLowerCase();
      });
    }
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      return quizzes.filter(quiz => quiz.title.toLowerCase().includes(query));
    }
    return quizzes;
  }
  // Filter quizzes based on current criteria
  filterQuizzes() {
    this.filterQuizes.emit({
      searchQuery: this.searchQuery,
      selectedCategory: this.selectedCategory
    });
    this.liveQuizes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(quizzes => this.applyFilters(quizzes))).subscribe(filtered => {
      // This will trigger the async pipe update
      this.filteredQuizzes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(filtered);
    });
  }
  // Select category and filter
  selectCategory(categoryId) {
    this.selectedCategory = categoryId;
    this.filterQuizzes();
  }
  loadInitialData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoadingQuizzes = true;
      setTimeout(() => {
        _this.isLoadingQuizzes = false;
      }, 2000);
      yield _this.quizService.getActiveQuizes().toPromise();
    })();
  }
  getQuizParticipant(quizId) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.SocketService.authDataSource.next(null);
      yield _this2.quizService.getQuizParticipant(quizId).toPromise();
    })();
  }
  makeSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  avatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null;
  }
  joinQuiz(quizId) {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.quizService.joinQuiz(quizId).toPromise();
    })();
  }
  playQuiz(quizId) {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quiz start logic
      _this4.SocketService.authDataSource.next(null);
      _this4.router.navigate(['/ongoing'], {
        replaceUrl: true,
        queryParams: {
          id: quizId
        }
      });
    })();
  }
  // TrackBy functions for ngFor performance
  trackByQuizId(index, quiz) {
    return quiz._id;
  }
  showDialog() {
    this.openModel = true;
  }
  closeDialog() {
    let AuthData = {
      token: localStorage.getItem('token') || '',
      user: JSON.parse(localStorage.getItem('user') || '{}')
    };
    this.SocketService.authDataSource.next(AuthData);
    this.openModel = false;
  }
  handleAvatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null; // Prevent infinite loop
  }
  trackByUserId(index, user) {
    return user.userId;
  }
  ngOnDestroy() {
    var _this5 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.quizService.getActiveQuizes(3).toPromise();
    })();
  }
}
_LiveQuizesComponent = LiveQuizesComponent;
_LiveQuizesComponent.ɵfac = function LiveQuizesComponent_Factory(t) {
  return new (t || _LiveQuizesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_1__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService));
};
_LiveQuizesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _LiveQuizesComponent,
  selectors: [["app-live-quizes"]],
  inputs: {
    liveQuizes$: "liveQuizes$",
    quizParticipants$: "quizParticipants$",
    ParentInjected: "ParentInjected"
  },
  outputs: {
    filterQuizes: "filterQuizes"
  },
  decls: 13,
  vars: 16,
  consts: [["noactiveQuizzes", ""], ["leaderboardLoading", ""], ["emptyLeaderboard", ""], ["class", "section-title", 4, "ngIf"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search quizzes, topics...", 3, "ngModelChange", "input", "ngModel"], ["class", "fas fa-close", 3, "click", 4, "ngIf"], ["class", "category-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], ["class", "floating-action", 3, "click", 4, "ngIf"], [1, "section-title"], ["routerLink", "/live-quizes", 3, "click", 4, "ngIf"], ["routerLink", "/live-quizes", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "fas", "fa-close", 3, "click"], [1, "category-card", 3, "click"], [1, "icon-wrapper"], [4, "ngIf", "ngIfElse"], ["class", "quiz-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "quiz-card"], [1, "quiz-header"], [1, "quiz-title"], [1, "status-badge-container"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z", "fill", "currentColor", 4, "ngIf"], ["d", "M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z", "fill", "currentColor", 4, "ngIf"], ["d", "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z", "fill", "currentColor", 4, "ngIf"], [1, "status-text"], ["class", "quiz-meta", 3, "click", 4, "ngIf"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 10H8.01M12 10H12.01M16 10H16.01M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "fas", "fa-bolt"], [1, "quiz-actions"], ["class", "action-btn approve-btn", 3, "click", 4, "ngIf"], ["color", "success", "class", "difficulty-badge", 4, "ngIf"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z", "fill", "currentColor"], ["d", "M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z", "fill", "currentColor"], ["d", "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z", "fill", "currentColor"], [1, "quiz-meta", 3, "click"], [1, "quiz-meta-item", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "action-btn", "approve-btn", 3, "click"], ["name", "people-outline"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["color", "success", 1, "difficulty-badge"], ["src", "assets/noQuizes.svg", "alt", "", "srcset", "", "loading", "eager"], [1, "modal-overlay"], [1, "modal"], [1, "modal-container"], [1, "modal-container-header"], [1, "modal-container-title"], [1, "icon-button", 3, "click"], ["height", "24", "width", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z", "fill", "currentColor"], [1, "modal-container-body", "rtf"], [1, "modal-container-footer"], [1, "host-container"], [1, "host-data"], ["class", "host-avatar", "alt", "Host avatar", "crossorigin", "anonymous", 3, "src", "error", 4, "ngIf"], [1, "hoster"], [1, "host-label"], [1, "host-name"], [1, "leaderboard-modal"], ["class", "leaderboard-item-modal", 3, "top-participant", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "leaderboard-item-modal"], [1, "rank-modal"], [1, "user-modal"], ["crossorigin", "anonymous", 3, "error", "src"], [1, "user-info-modal"], [1, "name-modal"], [1, "status-modal"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "9", "fill", "#10B981"], ["d", "M8 12L11 15L16 9", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "9", "fill", "#F59E0B"], ["d", "M12 8V12L15 15", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-row"], [1, "ph-col-12", "big"], ["alt", "Host avatar", "crossorigin", "anonymous", 1, "host-avatar", 3, "error", "src"], [1, "floating-action", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 4v6h-6"], ["d", "M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"]],
  template: function LiveQuizesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LiveQuizesComponent_div_1_Template, 4, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LiveQuizesComponent_Template_input_ngModelChange_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function LiveQuizesComponent_Template_input_input_4_listener() {
        return ctx.filterQuizzes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LiveQuizesComponent_i_5_Template, 1, 0, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LiveQuizesComponent_div_7_Template, 5, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LiveQuizesComponent_div_8_Template, 4, 1, "div", 3)(9, LiveQuizesComponent_ng_container_9_Template, 4, 2, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LiveQuizesComponent_div_11_Template, 27, 13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LiveQuizesComponent_div_12_Template, 5, 2, "div", 11);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("section ", ctx.ParentInjected && "mb", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("category-scroll skeleton-value ", !ctx.ParentInjected && "mb-28", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 14, ctx.filteredQuizzes$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.openModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe],
  styles: [".mb[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  margin-top: -20px !important;\n}\n\n.mb-28[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n\n.status-badge-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px 4px 8px;\n  border-radius: 16px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  position: absolute;\n  top: 16px;\n  left: 13px;\n  letter-spacing: 0.5px;\n  z-index: 10;\n  \n\n  \n\n  \n\n}\n.status-badge-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  color: currentColor;\n}\n.status-badge-container.waiting[_ngcontent-%COMP%] {\n  background-color: #FFA000;\n}\n.status-badge-container.live[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n}\n.status-badge-container.completed[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n}\n.status-badge-container.completed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  animation: none;\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12%;\n  margin-bottom: 12px;\n}\n\n.quiz-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.button[_ngcontent-%COMP%], \n.input[_ngcontent-%COMP%], \n.select[_ngcontent-%COMP%], \n.textarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 999;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  padding: 2rem;\n  border-radius: 8px;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n\n.modal-container-header[_ngcontent-%COMP%] {\n  padding: 15px !important;\n  padding: 25px 15px;\n  display: flex;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n  justify-content: space-between;\n  background: #2c3e50;\n  color: white;\n}\n\n.modal-container-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  line-height: 1;\n  font-weight: 700;\n  font-size: 1.125;\n  font-weight: 600;\n}\n\n.modal-container-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #750550;\n}\n\n.modal-container-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 0;\n  flex: 1;\n}\n.modal-container-body[_ngcontent-%COMP%]   .quiz-card[_ngcontent-%COMP%] {\n  border-radius: unset;\n  border: unset;\n}\n\n.rtf[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.rtf[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.125;\n}\n\n.rtf[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.25;\n}\n\n.rtf[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.rtf[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.rtf[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + [_ngcontent-%COMP%]:is(h1, h2[_ngcontent-%COMP%], h3)[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.rtf[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:is(h1, h2[_ngcontent-%COMP%], h3)[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.75em;\n}\n\n.rtf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.rtf[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  list-style-position: inside;\n}\n\n.rtf[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: numeric;\n}\n\n.rtf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n\n.modal-container-footer[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  position: relative;\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n}\n\n.modal-container-footer[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -51px;\n  left: 24px;\n  right: 24px;\n  height: 50px;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 8px;\n  background-color: transparent;\n  border: 0;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n\n.button.is-ghost[_ngcontent-%COMP%]:hover, \n.button.is-ghost[_ngcontent-%COMP%]:focus {\n  background-color: #dfdad7;\n}\n\n.button.is-primary[_ngcontent-%COMP%] {\n  background-color: #750550;\n  color: #fff;\n}\n\n.button.is-primary[_ngcontent-%COMP%]:hover, \n.button.is-primary[_ngcontent-%COMP%]:focus {\n  background-color: #4a0433;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  cursor: pointer;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  transition: 0.15s ease;\n  background: none;\n  border: none;\n  color: white;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n\n.icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover, \n.icon-button[_ngcontent-%COMP%]:focus {\n  background-color: #dfdad7;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.host-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  font-size: 10px;\n  border-radius: 8px;\n}\n\n.host-data[_ngcontent-%COMP%] {\n  gap: 12px;\n  display: flex;\n  align-items: center;\n}\n\n.host-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #e9ecef;\n  border: 2px solid #4a6bff;\n}\n\n.host-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  display: block;\n  font-size: 12px;\n}\n\n.host-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-left: 4px;\n}\n\n.leaderboard-modal[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.leaderboard-header-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 120px 80px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 14px;\n}\n.leaderboard-header-modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.leaderboard-header-modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  width: 115px;\n}\n\n.leaderboard-item-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 120px 80px;\n  align-items: center;\n  padding: 15px;\n  margin-bottom: 10px;\n  background: white;\n  border-radius: 10px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  position: relative;\n}\n\n.rank-modal[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  color: #2c3e50;\n}\n\n.user-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 125px;\n}\n\n.user-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 12px;\n  background: #e9ecef;\n}\n\n.user-info-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.name-modal[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #2c3e50;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n\n.status-modal[_ngcontent-%COMP%], \n.hoster[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.points-modal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #28a745;\n  text-align: right;\n  margin-right: 5px;\n}\n\n.trophy-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  font-size: 20px;\n}\n\n\n\n.ph-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 15px;\n}\n\n.ph-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 7.5px;\n}\n\n.ph-col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n\n.ph-col-12.big[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 15px;\n  background-color: #ced4da;\n  border-radius: 5px;\n  animation: _ngcontent-%COMP%_phAnimation 1.5s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_phAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n.rank-1[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-1[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n\n.rank-2[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-2[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.rank-3[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], \n.crown-3[_ngcontent-%COMP%] {\n  color: #cd7f32;\n}\n\n.crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -11px;\n  left: 63px;\n  font-size: 24px;\n}\n\n.trophy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 70px;\n  transform: translateY(-50%);\n  font-size: 24px;\n  opacity: 0.2;\n}\n\n.rank-1[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #ffc107;\n  opacity: 0.4;\n}\n\n.rank-2[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #6c757d;\n  opacity: 0.4;\n}\n\n.rank-3[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #cd7f32;\n  opacity: 0.4;\n}\n\n\n\n@media (max-width: 600px) {\n  .leaderboard-header-modal[_ngcontent-%COMP%] {\n    grid-template-columns: 43px 18fr 124px 11px;\n    font-size: 12px;\n  }\n  .leaderboard-item-modal[_ngcontent-%COMP%] {\n    grid-template-columns: 60px 1fr 85px 37px;\n    padding: 12px 0;\n  }\n  .name-modal[_ngcontent-%COMP%] {\n    max-width: 100px;\n    font-size: 14px;\n  }\n  .rank-modal[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .points-modal[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .user-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    margin-right: 8px;\n  }\n}\n.visual-circle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60vw; \n\n  height: 60vw;\n  max-width: 300px; \n\n  max-height: 300px;\n  margin-bottom: 25px;\n}\n\n\n\n.circle-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n\n\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  background-color: #f0f0f0;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 2;\n  opacity: 0.5;\n}\n\n\n\n.avatar[_ngcontent-%COMP%]:nth-child(1) {\n  top: -2%;\n  left: 45%;\n}\n\n.avatar[_ngcontent-%COMP%]:nth-child(2) {\n  top: 18%;\n  right: -2%;\n}\n\n.avatar[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 18%;\n  right: -2%;\n}\n\n.avatar[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: -2%;\n  left: 45%;\n}\n\n.avatar[_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 18%;\n  left: -2%;\n}\n\n.avatar[_ngcontent-%COMP%]:nth-child(6) {\n  top: 18%;\n  left: -2%;\n}\n\n\n\n.loader-cards-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  z-index: 3;\n}\n\n.loader-card[_ngcontent-%COMP%] {\n  width: 180px; \n\n  height: 50px; \n\n  background-color: #f9f9f9;\n  border: 1px solid #ededed;\n  border-radius: 10px;\n  background: linear-gradient(90deg, #e9e9e9 25%, #f4f4f4 50%, #e9e9e9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n}\n\n\n\n.loader-card.highlighted[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  border-image-source: linear-gradient(45deg, #a4508b, #5f0a87);\n  border-image-slice: 1;\n  animation: none;\n}\n\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n\n.text-content[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #888;\n  line-height: 1.5;\n  margin: 8px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGl2ZS1xdWl6ZXMvbGl2ZS1xdWl6ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFPQSwyQkFBQTtFQUtBLHFCQUFBO0VBS0EsNEJBQUE7QUFiRjtBQUZFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUlKO0FBQUU7RUFDRSx5QkFBQTtBQUVKO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBSUU7RUFDRSx5QkFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0FBRk47O0FBT0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQUpGO0VBT0E7SUFDRSxxQkFBQTtJQUNBLFlBQUE7RUFMRjtFQVFBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBTkY7QUFDRjtBQVNBOzs7O0VBSUUsYUFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUFQRjtBQVNFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0FBUEo7O0FBV0E7Ozs7OztFQU1FLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7O0VBRUUsaUJBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVJGOztBQVdBOztFQUVFLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFSRjs7QUFXQTs7RUFFRSx5QkFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTs7RUFFRSx5QkFBQTtFQUNBLG9DQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQVJKO0FBVUk7RUFDRSxZQUFBO0FBUk47O0FBY0E7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFjQSxtQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFYRjs7QUFjQTtFQUNFO0lBQ0UsWUFBQTtFQVhGO0VBY0E7SUFDRSxZQUFBO0VBWkY7RUFlQTtJQUNFLFlBQUE7RUFiRjtBQUNGO0FBZ0JBOztFQUVFLGNBQUE7QUFkRjs7QUFpQkE7O0VBRUUsY0FBQTtBQWRGOztBQWlCQTs7RUFFRSxjQUFBO0FBZEY7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFmRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VBaEJGO0VBbUJBO0lBQ0UseUNBQUE7SUFDQSxlQUFBO0VBakJGO0VBb0JBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBbEJGO0VBdUJBO0lBQ0UsZUFBQTtFQXJCRjtFQXdCQTtJQUNFLGVBQUE7RUF0QkY7RUF5QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBdkJGO0FBQ0Y7QUE2QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUEsRUFBQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQSxFQUFBLHNEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTNCRjs7QUE4QkEsbUNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBM0JGOztBQThCQSw4QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUEzQkY7O0FBOEJBLDJDQUFBO0FBQ0E7RUFBdUIsUUFBQTtFQUFVLFNBQUE7QUF6QmpDOztBQTBCQTtFQUF1QixRQUFBO0VBQVUsVUFBQTtBQXJCakM7O0FBc0JBO0VBQXVCLFdBQUE7RUFBYSxVQUFBO0FBakJwQzs7QUFrQkE7RUFBdUIsV0FBQTtFQUFhLFNBQUE7QUFicEM7O0FBY0E7RUFBdUIsV0FBQTtFQUFhLFNBQUE7QUFUcEM7O0FBVUE7RUFBdUIsUUFBQTtFQUFVLFNBQUE7QUFMakM7O0FBT0EsaUNBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBLEVBQUEscUNBQUE7RUFDQSxZQUFBLEVBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFMRjs7QUFRQSwwQ0FBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLDZEQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUFLLDJCQUFBO0VBSkw7RUFLQTtJQUFPLDRCQUFBO0VBRlA7QUFDRjtBQUlBLHFDQUFBO0FBRUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWIge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0yOHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLnN0YXR1cy1iYWRnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgei1pbmRleDogMTA7XG5cbiAgc3ZnIHtcbiAgICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGU7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC8qIFdhaXRpbmcgU3RhdGUgKFllbGxvdykgKi9cbiAgJi53YWl0aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBMDAwOyAvLyBBbWJlclxuICB9XG5cbiAgLyogTGl2ZSBTdGF0ZSAoUmVkKSAqL1xuICAmLmxpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IC8vIFJlZFxuICB9XG5cbiAgLyogQ29tcGxldGVkIFN0YXRlIChHcmVlbikgKi9cbiAgJi5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IC8vIEdyZWVuXG5cbiAgICBzdmcge1xuICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4ucXVpei1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnF1aXotbWV0YS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uYnV0dG9uLFxuLmlucHV0LFxuLnNlbGVjdCxcbi50ZXh0YXJlYSB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXItaGVhZGVyIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjEyNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci10aXRsZSBzdmcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzc1MDU1MDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci1ib2R5IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZmxleDogMTtcblxuICAucXVpei1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICB9XG59XG5cbi5ydGYgaDEsXG4ucnRmIGgyLFxuLnJ0ZiBoMyxcbi5ydGYgaDQsXG4ucnRmIGg1LFxuLnJ0ZiBoNiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ydGYgaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xufVxuXG4ucnRmIGgyIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cblxuLnJ0ZiBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnJ0Zj4qKyoge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5ydGY+KisgOmlzKGgxLCBoMiwgaDMpIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4ucnRmPiA6aXMoaDEsIGgyLCBoMykrKiB7XG4gIG1hcmdpbi10b3A6IDAuNzVlbTtcbn1cblxuLnJ0ZiB1bCxcbi5ydGYgb2wge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xufVxuXG4ucnRmIG9sIHtcbiAgbGlzdC1zdHlsZTogbnVtZXJpYztcbn1cblxuLnJ0ZiB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG59XG5cbi5tb2RhbC1jb250YWluZXItZm9vdGVyIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5tb2RhbC1jb250YWluZXItZm9vdGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTFweDtcbiAgbGVmdDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZTtcbn1cblxuLmJ1dHRvbi5pcy1naG9zdDpob3Zlcixcbi5idXR0b24uaXMtZ2hvc3Q6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkYWQ3O1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzUwNTUwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5pcy1wcmltYXJ5OmhvdmVyLFxuLmJ1dHRvbi5pcy1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhMDQzMztcbn1cblxuLmljb24tYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cblxuLmljb24tYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5pY29uLWJ1dHRvbjpob3Zlcixcbi5pY29uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRhZDc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmhvc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5ob3N0LWRhdGEge1xuICBnYXA6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3N0LWF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YTZiZmY7XG59XG5cbi5ob3N0LWxhYmVsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ob3N0LW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmxlYWRlcmJvYXJkLW1vZGFsIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmxlYWRlcmJvYXJkLWhlYWRlci1tb2RhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMTIwcHggODBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICB3aWR0aDogMTE1cHg7XG4gICAgfVxuICB9XG5cbn1cblxuLmxlYWRlcmJvYXJkLWl0ZW0tbW9kYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDEyMHB4IDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmFuay1tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLnVzZXItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTI1cHg7XG59XG5cbi51c2VyLW1vZGFsIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbn1cblxuLnVzZXItaW5mby1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYW1lLW1vZGFsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJjM2U1MDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5zdGF0dXMtbW9kYWwsXG4uaG9zdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG9pbnRzLW1vZGFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzI4YTc0NTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udHJvcGh5LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiBMb2FkaW5nIHN0YXRlcyAqL1xuLnBoLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5waC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDcuNXB4O1xufVxuXG4ucGgtY29sLTEyIHtcbiAgZmxleDogMCAwIDEwMCU7XG59XG5cbi5waC1jb2wtMTIuYmlnIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFuaW1hdGlvbjogcGhBbmltYXRpb24gMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcGhBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuLnJhbmstMSAucmFuayxcbi5jcm93bi0xIHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG5cbi5yYW5rLTIgLnJhbmssXG4uY3Jvd24tMiB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ucmFuay0zIC5yYW5rLFxuLmNyb3duLTMge1xuICBjb2xvcjogI2NkN2YzMjtcbn1cblxuXG4uY3Jvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIGxlZnQ6IDYzcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4udHJvcGh5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDcwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5yYW5rLTEgLnRyb3BoeSB7XG4gIGNvbG9yOiAjZmZjMTA3O1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5yYW5rLTIgLnRyb3BoeSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5yYW5rLTMgLnRyb3BoeSB7XG4gIGNvbG9yOiAjY2Q3ZjMyO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi8qIFJlc3BvbnNpdmUgc3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxlYWRlcmJvYXJkLWhlYWRlci1tb2RhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0M3B4IDE4ZnIgMTI0cHggMTFweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubGVhZGVyYm9hcmQtaXRlbS1tb2RhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA4NXB4IDM3cHg7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICB9XG5cbiAgLm5hbWUtbW9kYWwge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cblxuXG4gIC5yYW5rLW1vZGFsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAucG9pbnRzLW1vZGFsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAudXNlci1tb2RhbCBpbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuXG5cblxuXG4udmlzdWFsLWNpcmNsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHZ3OyAvKiBTY2FsZXMgd2l0aCB0aGUgdmlld3BvcnQgd2lkdGggKi9cbiAgaGVpZ2h0OiA2MHZ3O1xuICBtYXgtd2lkdGg6IDMwMHB4OyAvKiBQcmV2ZW50cyBpdCBmcm9tIGdldHRpbmcgdG9vIGxhcmdlIG9uIGJpZyBzY3JlZW5zICovXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBUaGUgbWFpbiBjaXJjdWxhciByaW5nIGdyYXBoaWMgKi9cbi5jaXJjbGUtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFNtYWxsZXIgdXNlciBhdmF0YXIgaWNvbnMgKi9cbi5hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgYXZhdGFycyBhcm91bmQgdGhlIGNpcmNsZSAqL1xuLmF2YXRhcjpudGgtY2hpbGQoMSkgeyB0b3A6IC0yJTsgbGVmdDogNDUlOyB9XG4uYXZhdGFyOm50aC1jaGlsZCgyKSB7IHRvcDogMTglOyByaWdodDogLTIlOyB9XG4uYXZhdGFyOm50aC1jaGlsZCgzKSB7IGJvdHRvbTogMTglOyByaWdodDogLTIlOyB9XG4uYXZhdGFyOm50aC1jaGlsZCg0KSB7IGJvdHRvbTogLTIlOyBsZWZ0OiA0NSU7IH1cbi5hdmF0YXI6bnRoLWNoaWxkKDUpIHsgYm90dG9tOiAxOCU7IGxlZnQ6IC0yJTsgfVxuLmF2YXRhcjpudGgtY2hpbGQoNikgeyB0b3A6IDE4JTsgbGVmdDogLTIlOyB9XG5cbi8qIC0tLSBTbWFsbGVyIExvYWRlciBDYXJkcyAtLS0gKi9cblxuLmxvYWRlci1jYXJkcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5sb2FkZXItY2FyZCB7XG4gIHdpZHRoOiAxODBweDsgLyogUmVkdWNlZCB3aWR0aCBmb3IgYSBzbWFsbGVyIGxvb2sgKi9cbiAgaGVpZ2h0OiA1MHB4OyAvKiBSZWR1Y2VkIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlOWU5ZTkgMjUlLCAjZjRmNGY0IDUwJSwgI2U5ZTllOSA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuNXMgaW5maW5pdGU7XG59XG5cbi8qIEhpZ2hsaWdodGVkIGNhcmQgd2l0aCBncmFkaWVudCBib3JkZXIgKi9cbi5sb2FkZXItY2FyZC5oaWdobGlnaHRlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2E0NTA4YiwgIzVmMGE4Nyk7XG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgYW5pbWF0aW9uOiBub25lOyBcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cbn1cblxuLyogLS0tIFRleHQgQ29udGVudCBhbmQgQnV0dG9ucyAtLS0gKi9cblxuLnRleHQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzg4ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiA4cHggMCAwIDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1118:
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoaderService;


class LoaderService {
  constructor() {
    this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loggedState = this.loggedSubject.asObservable();
    this.loaderState$ = this.loaderSubject.asObservable();
  }
  showLoader() {
    this.loaderSubject.next(true);
  }
  hideLoader() {
    this.loaderSubject.next(false);
  }
}
_LoaderService = LoaderService;
_LoaderService.ɵfac = function LoaderService_Factory(t) {
  return new (t || _LoaderService)();
};
_LoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _LoaderService,
  factory: _LoaderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7220:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoaderComponent;

class LoaderComponent {
  constructor() {}
  ngOnInit() {}
}
_LoaderComponent = LoaderComponent;
_LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || _LoaderComponent)();
};
_LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _LoaderComponent,
  selectors: [["app-loader"]],
  decls: 18,
  vars: 0,
  consts: [[1, "backdrop"], [1, "loader-container"], [1, "cube-container"], [1, "cube"], [1, "face", "front"], [1, "fas", "fa-brain"], [1, "face", "back"], [1, "fas", "fa-calculator"], [1, "face", "right"], [1, "fas", "fa-flask"], [1, "face", "left"], [1, "fas", "fa-landmark"], [1, "face", "top"], [1, "fas", "fa-book"], [1, "face", "bottom"], [1, "fas", "fa-globe"], [1, "loading-text"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".backdrop[_ngcontent-%COMP%] {\n  position: fixed; \n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); \n\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px); \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000; \n\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px; \n\n}\n\n.cube-container[_ngcontent-%COMP%] {\n  perspective: 800px; \n\n}\n\n.cube[_ngcontent-%COMP%] {\n  width: 60px; \n\n  height: 60px; \n\n  position: relative;\n  transform-style: preserve-3d;\n  transform: rotateX(-15deg) rotateY(15deg); \n\n  animation: _ngcontent-%COMP%_rotateCube 6s infinite linear; \n\n}\n\n@keyframes _ngcontent-%COMP%_rotateCube {\n  0% {\n    transform: rotateX(-15deg) rotateY(0deg); \n\n  }\n  100% {\n    transform: rotateX(-15deg) rotateY(360deg); \n\n  }\n}\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 1px solid white; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px; \n\n  color: white; \n\n}\n\n\n\n.front[_ngcontent-%COMP%] {\n  transform: translateZ(30px); \n\n}\n\n\n\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translateZ(30px); \n\n}\n\n\n\n.right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translateZ(30px); \n\n}\n\n\n\n.left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translateZ(30px); \n\n}\n\n\n\n.top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translateZ(30px); \n\n}\n\n\n\n.bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translateZ(30px); \n\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: white; \n\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUEsRUFBQSw4Q0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQSxFQUFBLGdDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQSxFQUFBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBLEVBQUEsd0NBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBLEVBQUEsZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBLEVBQUEsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUEsRUFBQSw4QkFBQTtFQUNBLFlBQUEsRUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQSxFQUFBLGlCQUFBO0VBQ0Esd0NBQUEsRUFBQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSx3Q0FBQSxFQUFBLG1CQUFBO0VBQU47RUFFRTtJQUNJLDBDQUFBLEVBQUEsa0JBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUEsRUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQSxFQUFBLHNCQUFBO0VBQ0EsWUFBQSxFQUFBLGVBQUE7QUFESjs7QUFJQSxlQUFBO0FBQ0E7RUFDSSwyQkFBQSxFQUFBLDhCQUFBO0FBREo7O0FBSUEsY0FBQTtBQUNBO0VBQ0ksMkNBQUEsRUFBQSw4QkFBQTtBQURKOztBQUlBLGVBQUE7QUFDQTtFQUNJLDBDQUFBLEVBQUEsOEJBQUE7QUFESjs7QUFJQSxjQUFBO0FBQ0E7RUFDSSwyQ0FBQSxFQUFBLDhCQUFBO0FBREo7O0FBSUEsYUFBQTtBQUNBO0VBQ0ksMENBQUEsRUFBQSw4QkFBQTtBQURKOztBQUlBLGdCQUFBO0FBQ0E7RUFDSSwyQ0FBQSxFQUFBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBLEVBQUEsZUFBQTtFQUNBLGtCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgcG9zaXRpb24gdG8gY292ZXIgdGhlIGVudGlyZSBzY3JlZW4gKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGJhY2tncm91bmQgKi9cbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTsgLyogQmx1ciBlZmZlY3QgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIGl0J3Mgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cbn1cblxuXG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGN1YmUgYW5kIHRleHQgKi9cbn1cblxuLmN1YmUtY29udGFpbmVyIHtcbiAgICBwZXJzcGVjdGl2ZTogODAwcHg7IC8qIDNEIHBlcnNwZWN0aXZlICovXG59XG5cbi5jdWJlIHtcbiAgICB3aWR0aDogNjBweDsgLyogU21hbGxlciBzaXplIGZvciB0aGUgY3ViZSAqL1xuICAgIGhlaWdodDogNjBweDsgLyogU21hbGxlciBzaXplIGZvciB0aGUgY3ViZSAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTVkZWcpIHJvdGF0ZVkoMTVkZWcpOyAvKiBJbml0aWFsIHRpbHQgKi9cbiAgICBhbmltYXRpb246IHJvdGF0ZUN1YmUgNnMgaW5maW5pdGUgbGluZWFyOyAvKiBSb3RhdGUgYW5pbWF0aW9uICovXG59XG5cbkBrZXlmcmFtZXMgcm90YXRlQ3ViZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE1ZGVnKSByb3RhdGVZKDBkZWcpOyAvKiBTdGFydCByb3RhdGlvbiAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xNWRlZykgcm90YXRlWSgzNjBkZWcpOyAvKiBGdWxsIHJvdGF0aW9uICovXG4gICAgfVxufVxuXG4uZmFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgLyogU29saWQgYm9yZGVyICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogU21hbGxlciBpY29uIHNpemUgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIEljb24gY29sb3IgKi9cbn1cblxuLyogRnJvbnQgZmFjZSAqL1xuLmZyb250IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzBweCk7IC8qIEFkanVzdGVkIGZvciBzbWFsbGVyIGN1YmUgKi9cbn1cblxuLyogQmFjayBmYWNlICovXG4uYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigzMHB4KTsgLyogQWRqdXN0ZWQgZm9yIHNtYWxsZXIgY3ViZSAqL1xufVxuXG4vKiBSaWdodCBmYWNlICovXG4ucmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigzMHB4KTsgLyogQWRqdXN0ZWQgZm9yIHNtYWxsZXIgY3ViZSAqL1xufVxuXG4vKiBMZWZ0IGZhY2UgKi9cbi5sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDMwcHgpOyAvKiBBZGp1c3RlZCBmb3Igc21hbGxlciBjdWJlICovXG59XG5cbi8qIFRvcCBmYWNlICovXG4udG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMzBweCk7IC8qIEFkanVzdGVkIGZvciBzbWFsbGVyIGN1YmUgKi9cbn1cblxuLyogQm90dG9tIGZhY2UgKi9cbi5ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMzBweCk7IC8qIEFkanVzdGVkIGZvciBzbWFsbGVyIGN1YmUgKi9cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket.service */ 7300);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toaster.service */ 2503);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);

var _LoginPage;











const _c0 = ["OTPmodal"];
const _c1 = ["errorModal"];
const _c2 = ["googleModal"];
const _c3 = ["facebookModal"];
const _c4 = ["scrollContainer"];
const _c5 = () => [0.45, 0.5];
const _c6 = () => [0, 0.25, 0.5, 0.75];
function LoginPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "1000+ Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Daily Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Global Leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginPage_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_input_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_input_31_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.loginForm.email, $event) || (ctx_r2.loginForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.loginForm.email);
  }
}
function LoginPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_button_34_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 39);
  }
}
function LoginPage_button_34_ion_spinner_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 40);
  }
}
function LoginPage_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginPage_button_34_ion_icon_2_Template, 1, 0, "ion-icon", 37)(3, LoginPage_button_34_ion_spinner_3_Template, 1, 0, "ion-spinner", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
  }
}
function LoginPage_ng_template_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 51)(4, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 56)(4, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Authentication Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginPage_ng_template_50_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 60)(2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_50_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.googleProgress ? "Signing in with Google" : "Success!");
  }
}
function LoginPage_ng_template_50_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_50_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r2.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function LoginPage_ng_template_50_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Logged in successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_50_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_50_div_10_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_50_div_10_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.retrySocialLogins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginPage_ng_template_50_div_1_Template, 5, 0, "div", 42)(2, LoginPage_ng_template_50_div_2_Template, 7, 0, "div", 43)(3, LoginPage_ng_template_50_div_3_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoginPage_ng_template_50_h3_5_Template, 2, 1, "h3", 21)(6, LoginPage_ng_template_50_p_6_Template, 2, 0, "p", 21)(7, LoginPage_ng_template_50_p_7_Template, 1, 1, "p", 46)(8, LoginPage_ng_template_50_p_8_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoginPage_ng_template_50_div_10_Template, 8, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.authFailed && !ctx_r2.googleProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.googleProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.googleProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.googleProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
  }
}
function LoginPage_ng_template_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 51)(4, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 56)(4, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Authentication Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginPage_ng_template_53_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 60)(2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_53_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.facebookProgress ? "Signing in with Facebook" : "Success!");
  }
}
function LoginPage_ng_template_53_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_53_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r2.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function LoginPage_ng_template_53_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Logged in successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginPage_ng_template_53_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_53_div_10_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_53_div_10_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.retrySocialLogins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginPage_ng_template_53_div_1_Template, 5, 0, "div", 42)(2, LoginPage_ng_template_53_div_2_Template, 7, 0, "div", 43)(3, LoginPage_ng_template_53_div_3_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoginPage_ng_template_53_h3_5_Template, 2, 1, "h3", 21)(6, LoginPage_ng_template_53_p_6_Template, 2, 0, "p", 21)(7, LoginPage_ng_template_53_p_7_Template, 1, 1, "p", 46)(8, LoginPage_ng_template_53_p_8_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoginPage_ng_template_53_div_10_Template, 8, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.authFailed && !ctx_r2.facebookProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.facebookProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.facebookProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.facebookProgress && !ctx_r2.authFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
  }
}
function LoginPage_ng_template_56_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_56_div_11_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_56_div_11_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.retrySocialLogins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 53)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "circle", 56)(5, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Authentication Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginPage_ng_template_56_div_11_Template, 8, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r2.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authFailed);
  }
}
function LoginPage_ng_template_59_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "circle", 51)(5, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Logged in successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function LoginPage_ng_template_59_div_1_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 39);
  }
}
function LoginPage_ng_template_59_div_1_ion_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 40);
  }
}
function LoginPage_ng_template_59_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Resend OTP in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_59_div_1_p_13_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formattedTimer);
  }
}
function LoginPage_ng_template_59_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Didn't receive code? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_59_div_1_p_14_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginPage_ng_template_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Verify your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "We've sent otp code to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 74)(8, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_ng_template_59_div_1_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.loginForm.otp, $event) || (ctx_r2.loginForm.otp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_ng_template_59_div_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.verifyOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginPage_ng_template_59_div_1_ion_icon_11_Template, 1, 0, "ion-icon", 37)(12, LoginPage_ng_template_59_div_1_ion_spinner_12_Template, 1, 0, "ion-spinner", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoginPage_ng_template_59_div_1_p_13_Template, 4, 1, "p", 76)(14, LoginPage_ng_template_59_div_1_p_14_Template, 4, 0, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.loginForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.loginForm.otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.loginForm.otp == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.canResendOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.canResendOtp);
  }
}
function LoginPage_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoginPage_ng_template_59_div_0_Template, 11, 0, "div", 70)(1, LoginPage_ng_template_59_div_1_Template, 15, 7, "div", 71);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.otpSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.otpSuccess && ctx_r2.showOtpModal);
  }
}
class LoginPage {
  constructor(router, socketService, modalController, toasterService, dashboardService, createQuizesService) {
    this.router = router;
    this.socketService = socketService;
    this.modalController = modalController;
    this.toasterService = toasterService;
    this.dashboardService = dashboardService;
    this.createQuizesService = createQuizesService;
    this.loginForm = {
      email: '',
      otp: ''
    };
    this.errorModalStatus = '';
    this.errorMessage = `
    There was an issue processing your request. Please try one of these solutions:<br><br>
    <div class="main">
    <div class="error">1. Check your internet connection</div>
    <div class="error">2. Retry the operation</div>
    <div class="error">3. Cancel and use a different email address</div></div>
  `;
    // State flags
    this.continuewith = false;
    this.isLoading = false;
    this.googleProgress = false;
    this.facebookProgress = false;
    this.authFailed = false;
    this.otpSuccess = false;
    this.showOtpModal = false;
    this.loginSuccess = false;
    this.canResendOtp = false;
    this.connectionState = 'disconnected';
    // Timer
    this.otpTimer = 120;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.subscriptions = [];
  }
  ngOnInit() {
    this.setupSocketListeners();
    this.listenForSocialUrls();
  }
  ngOnDestroy() {
    this.cleanup();
  }
  listenForSocialUrls() {
    this.subscriptions.push(this.socketService.url$.subscribe(({
      url
    }) => {
      // Handle the URL - it will be automatically opened by the SocketService
      // You can add additional logic here if needed
    }));
  }
  setupSocketListeners() {
    this.subscriptions.push(this.socketService.connectionState.subscribe(state => {
      this.connectionState = state;
    }));
    this.subscriptions.push(this.socketService.authData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => this.handleAuthSuccess(data)));
    this.subscriptions.push(this.socketService.otpSuccess$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => this.handleOtpSuccess(data)));
    this.subscriptions.push(this.socketService.loginData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => this.handleLoginResponse(data)));
    this.subscriptions.push(this.socketService.authError$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => this.handleAuthError(data)));
  }
  handleAuthSuccess(data) {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!data) return;
      _this.loginSuccess = true;
      _this.isLoading = false;
      _this.resetAuthStates();
      yield _this.handleSuccessfulLogin(data);
    })();
  }
  handleOtpSuccess(data) {
    // this.toasterService.presentToast('Login successful', 3000, 'bottom', 'success');
    this.loginSuccess = true;
    this.isLoading = false;
    this.otpSuccess = true;
    this.handleSuccessfulLogin(data);
  }
  handleLoginResponse(otpDetails) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!otpDetails) {
        _this2.showErrorModal();
        return;
      }
      // this.toasterService.presentToast('OTP sent successfully!', 3000, 'bottom', 'success');
      _this2.loginSuccess = true;
      _this2.startOtpTimer();
      _this2.otpDetails = otpDetails;
      _this2.showOtpModal = true;
      _this2.isLoading = false;
      _this2.otpSuccess = false;
      try {
        yield _this2.otpModal.present();
        const {
          data
        } = yield _this2.otpModal.onDidDismiss();
        if (!data) {
          _this2.resetForm();
        }
      } catch (error) {
        console.error('Error presenting OTP modal:', error);
      }
    })();
  }
  showErrorModal() {
    this.errorModal.present();
    this.resetAuthStates();
    this.authFailed = true;
  }
  handleAuthError(message) {
    this.toasterService.presentToast(message, 3000, 'bottom', 'danger');
    setTimeout(() => {
      if (!this.loginSuccess) {
        this.resetAuthStates();
        this.authFailed = true;
        this.isLoading = false;
        this.showErrorModal();
      }
    }, 1000);
  }
  verifyOTP() {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.validateOtpForm()) return;
      _this3.isLoading = true;
      try {
        yield _this3.socketService.verifyLoginOTP(_this3.loginForm.email, _this3.loginForm.otp, _this3.otpDetails.verificationToken);
      } catch (error) {
        _this3.handleAuthError(error.message);
      }
    })();
  }
  validateOtpForm() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.loginForm.email) {
      this.toasterService.presentToast('Please enter email', 3000, 'bottom');
      return false;
    }
    if (!emailRegex.test(this.loginForm.email)) {
      this.toasterService.presentToast('Please enter valid email', 3000, 'bottom');
      return false;
    }
    if (!this.loginForm.otp) {
      this.toasterService.presentToast('Invalid OTP', 3000, 'bottom');
      return false;
    }
    return true;
  }
  login() {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!_this4.loginForm.email) {
        _this4.toasterService.presentToast('Please enter email', 3000, 'bottom');
        return;
      }
      if (!emailRegex.test(_this4.loginForm.email)) {
        _this4.toasterService.presentToast('Please enter valid email', 3000, 'bottom');
        return;
      }
      _this4.authFailed = false;
      _this4.isLoading = true;
      try {
        yield _this4.socketService.login(_this4.loginForm.email);
      } catch (error) {
        _this4.handleAuthError(error.message);
      }
    })();
  }
  loginWithGoogle() {
    var _this5 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.resetAuthStates();
      _this5.googleProgress = true;
      _this5.errorModalStatus = 'auth:google:error';
      try {
        yield _this5.googleModal.present();
        _this5.socketService.initiateGoogleLogin();
      } catch (error) {
        _this5.googleProgress = false;
        _this5.handleAuthError('Failed to initiate Google login');
      }
    })();
  }
  loginWithFacebook() {
    var _this6 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.resetAuthStates();
      _this6.facebookProgress = true;
      _this6.errorModalStatus = 'auth:facebook:error';
      try {
        yield _this6.facebookModal.present();
        _this6.socketService.initiateFacebookLogin();
      } catch (error) {
        _this6.facebookProgress = false;
        _this6.handleAuthError('Failed to initiate Facebook login');
      }
    })();
  }
  retrySocialLogins() {
    switch (this.errorModalStatus) {
      case 'auth:google:error':
        this.loginWithGoogle();
        break;
      case 'auth:facebook:error':
        this.loginWithFacebook();
        break;
      default:
        this.login();
        break;
    }
  }
  startOtpTimer() {
    this.stopOtpTimer();
    this.otpTimer = 120;
    this.canResendOtp = false;
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(0, 1000).subscribe(() => {
      this.otpTimer--;
      if (this.otpTimer <= 0) {
        this.stopOtpTimer();
        this.canResendOtp = true;
      }
    });
  }
  stopOtpTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
  }
  get formattedTimer() {
    const minutes = Math.floor(this.otpTimer / 60);
    const seconds = this.otpTimer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  resendOtp() {
    if (!this.canResendOtp) return;
    this.login();
    this.startOtpTimer();
    this.loginForm.otp = "";
  }
  resetAuthStates() {
    this.isLoading = false;
    this.googleProgress = false;
    this.facebookProgress = false;
    this.authFailed = false;
    this.otpSuccess = false;
    this.showOtpModal = false;
  }
  resetForm() {
    this.loginForm.email = "";
    this.loginForm.otp = "";
    this.toasterService.dismiss();
    this.continuewith = false;
    this.isLoading = false;
  }
  handleSuccessfulLogin(data) {
    var _this7 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.closeModal();
      // Load initial data
      _this7.dashboardService.getDashboardStats().subscribe();
      _this7.dashboardService.getLeaderboardUser().subscribe();
      _this7.createQuizesService.initializeData();
      // Navigate to home
      _this7.router.navigate(['/home'], {
        queryParams: {
          token: data.token
        },
        state: {
          user: data.user
        }
      });
    })();
  }
  closeModal() {
    var _this8 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.showOtpModal = false;
      try {
        yield _this8.modalController.dismiss();
      } catch (error) {}
    })();
  }
  cleanup() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopOtpTimer();
    this.cleanupSubscriptions();
  }
  cleanupSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }
  // UI Helpers
  focusInput() {
    this.scrollToShowContent();
    this.continuewith = true;
    setTimeout(() => {
      const inputElement = document.getElementById('input');
      if (inputElement) {
        inputElement.focus();
      }
    }, 0);
  }
  scrollToShowContent() {
    try {
      const container = this.scrollContainer.nativeElement;
      const buttonHeight = 50; // Adjust this to your button's actual height
      // Scroll to show content but leave space for the button
      container.scrollTop = container.scrollHeight - container.clientHeight - buttonHeight;
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_4__.CreateQuizesService));
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["app-login"]],
  viewQuery: function LoginPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.otpModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.errorModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.googleModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.facebookModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollContainer = _t.first);
    }
  },
  decls: 60,
  vars: 19,
  consts: [["scrollContainer", ""], ["googleModal", ""], ["facebookModal", ""], ["errorModal", ""], ["OTPmodal", ""], [3, "fullscreen"], [1, "card"], [1, "logo"], ["src", "assets/AppLogo.png", "alt", ""], [1, "subtitle"], ["class", "features", 4, "ngIf"], [1, "options-title"], [1, "methods"], [1, "btn", "btn-google", 3, "click"], [1, "btn-content"], [1, "fab", "fa-google"], [1, "arrow"], [1, "btn", "btn-facebook", 3, "click"], [1, "fab", "fa-facebook-f"], [1, "btn", "btn-email", 3, "click"], [1, "fas", "fa-envelope"], [4, "ngIf"], ["id", "input", "type", "text", "type", "email", "placeholder", "name@gmail.com", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "arrow", 4, "ngIf"], ["class", "error arrow", 4, "ngIf"], ["class", "btn btn-email center", 3, "disabled", "click", 4, "ngIf"], [1, "terms"], ["href", "#"], [1, "powered"], ["name", "newspaper-outline"], [3, "initialBreakpoint", "breakpoints"], ["trigger", "open-verifyModel", 3, "initialBreakpoint", "breakpoints"], [1, "features"], [1, "feature"], ["id", "input", "type", "text", "type", "email", "placeholder", "name@gmail.com", 3, "ngModelChange", "ngModel"], [1, "error", "arrow"], [1, "btn", "btn-email", "center", 3, "click", "disabled"], ["name", "arrow-forward", "slot", "end", 4, "ngIf"], ["class", "spinner", "slot", "end", 4, "ngIf"], ["name", "arrow-forward", "slot", "end"], ["slot", "end", 1, "spinner"], [1, "verification-container"], ["class", "success", 4, "ngIf"], ["class", "failure", 4, "ngIf"], ["class", "loader", 4, "ngIf"], [1, "verification-text"], [3, "innerHTML", 4, "ngIf"], ["class", "social-login", 4, "ngIf"], [1, "success"], [1, "success-animation"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 52 52", 1, "checkmark"], ["cx", "26", "cy", "26", "r", "25", "fill", "none", 1, "checkmark__circle"], ["fill", "none", "d", "M14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], [1, "failure"], [1, "failure-animation"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 52 52", 1, "crossmark"], ["cx", "26", "cy", "26", "r", "25", "fill", "none", 1, "crossmark__circle"], ["fill", "none", "d", "M16 16 36 36 M36 16 16 36", 1, "crossmark__cross"], [1, "failure-message"], [1, "loader"], [1, "loader-spinner"], ["src", "assets/google.png", "width", "30px", "alt", "Google", 1, "loader-icon"], [3, "innerHTML"], [1, "social-login"], [1, "social-buttons"], [1, "social-btn", "google", 3, "click"], ["name", "close-circle", "slot", "start"], [1, "social-btn", "facebook", 3, "click"], ["name", "refresh", "slot", "start"], ["src", "assets/facebook.png", "width", "30px", "alt", "Facebook", 1, "loader-icon"], ["class", "verification-container", 4, "ngIf"], ["class", "otp-container", 4, "ngIf"], [1, "otp-container"], [1, "resend-link"], [1, "otp-inputs"], ["type", "text", 1, "otp-input", 3, "ngModelChange", "ngModel"], ["class", "resend-text", 4, "ngIf"], [1, "resend-text"], [1, "resend-link", 3, "click"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 5)(1, "div", 6, 0)(3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Join Our Quiz App");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Community");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Join thousands of players testing their knowledge daily. Track your progress, earn badges, and climb the leaderboards! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginPage_div_11_Template, 7, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Quick sign up with");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        ctx.continuewith = false;
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.loginWithGoogle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Google ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_Template_button_click_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        ctx.continuewith = false;
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.loginWithFacebook());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Facebook ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_Template_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.focusInput());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LoginPage_span_30_Template, 2, 0, "span", 21)(31, LoginPage_input_31_Template, 1, 1, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, LoginPage_div_32_Template, 2, 0, "div", 23)(33, LoginPage_div_33_Template, 2, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, LoginPage_button_34_Template, 4, 3, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " By joining, you agree to our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Quiz Rules");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, ", and confirm you're at least 13 years old. Your progress will be saved to your account. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "ion-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Ajit Rajbhar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-modal", 30, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, LoginPage_ng_template_50_Template, 11, 8, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-modal", 30, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, LoginPage_ng_template_53_Template, 11, 8, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-modal", 30, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, LoginPage_ng_template_56_Template, 12, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ion-modal", 31, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, LoginPage_ng_template_59_Template, 2, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.continuewith);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.continuewith);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.continuewith);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.continuewith && false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.continuewith);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("initialBreakpoint", 0.45)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("initialBreakpoint", 0.45)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("initialBreakpoint", 0.75)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("initialBreakpoint", 0.75)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c6));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal],
  styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n  position: relative;\n  overflow-x: hidden;\n  height: 100vh;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  background-color: #FAFAFA;\n}\n\n.features[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(108, 99, 255, 0.1);\n  color: #6C63FF;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  flex: none;\n}\n\n.otp-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: unset !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  position: relative;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 170px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 10px 0;\n  font-weight: 700;\n  color: #2D3748;\n  position: relative;\n  z-index: 101;\n  line-height: 1.3;\n  background: linear-gradient(90deg, #6C63FF, #4DAAF5);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #718096;\n  margin-bottom: 25px;\n  font-weight: 400;\n}\n\n.options-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #718096;\n  margin: 45px 0 15px;\n  text-align: center;\n  position: relative;\n}\n\n.options-title[_ngcontent-%COMP%]::before, \n.options-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 30%;\n  height: 1px;\n  background: lightgray;\n}\n@media (max-width: 414px) {\n  .options-title[_ngcontent-%COMP%]::before, \n   .options-title[_ngcontent-%COMP%]::after {\n    width: 22%;\n  }\n}\n\n.options-title[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\n.options-title[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n\n.methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 45px;\n  margin-top: 45px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 25px;\n  border-radius: 12px;\n  background-color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  font-size: 15px;\n  outline: none;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  width: 100%;\n  border: unset;\n  outline: unset;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  z-index: 2;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #DB4437;\n}\n\n.btn-facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1877F2;\n}\n\n.center[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 10px;\n  color: #fff;\n  height: 60px;\n  background: #6475fc;\n}\n\n.btn-email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6C63FF;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #718096;\n  transition: transform 0.3s ease;\n  z-index: 2;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #ce3737 !important;\n}\n\n.btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n  color: #6C63FF;\n}\n\n.terms[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #718096;\n  margin-top: 25px;\n  line-height: 1.6;\n}\n\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6C63FF;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4DAAF5;\n  text-decoration: underline;\n}\n\n.notification[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #718096;\n  text-align: left;\n  width: 100%;\n  gap: 10px;\n}\n\n.notification[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  accent-color: #6C63FF;\n  margin-top: 2px;\n  cursor: pointer;\n}\n\n.notification[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  word-break: break-word;\n  white-space: normal;\n  cursor: pointer;\n}\n\n.powered[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 12px;\n  color: #718096;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.powered[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6C63FF;\n}\n\n.powered[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FF6584;\n  font-size: 14px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-left: 10px;\n  color: #fff;\n}\n.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1877F2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0U7RUFFRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFUSjs7QUFZRTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVEo7O0FBYUk7RUFDRSx3QkFBQTtBQVZOOztBQWNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWFJO0VBQ0UsWUFBQTtBQVhOOztBQWVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQVpKOztBQWVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBWko7QUFjSTtFQVRGOztJQVVJLFVBQUE7RUFWSjtBQUNGOztBQWFFO0VBQ0UsT0FBQTtBQVZKOztBQWFFO0VBQ0UsUUFBQTtBQVZKOztBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVko7QUFZSTs7O0VBR0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBVk47O0FBZ0JFO0VBQ0Usd0JBQUE7QUFiSjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFiSjs7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWJKOztBQWdCRTtFQUNFLGNBQUE7QUFiSjs7QUFnQkU7RUFDRSxjQUFBO0FBYko7O0FBZ0JFO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWdCRTtFQUNFLGNBQUE7QUFiSjs7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQWJKOztBQWdCRTtFQUNFLHlCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBYko7O0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWJKOztBQWdCRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQWJKOztBQWdCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBYko7O0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWJKOztBQWdCRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWJKOztBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFiSjs7QUFnQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFnQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWJKOztBQWdCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFiSjtBQWVJO0VBQ0UsY0FBQTtBQWJOIiwic291cmNlc0NvbnRlbnQiOlsiICAkcHJpbWFyeTogIzZDNjNGRjtcbiAgJHNlY29uZGFyeTogIzREQUFGNTtcbiAgJGFjY2VudDogI0ZGNjU4NDtcbiAgJHRleHQ6ICMyRDM3NDg7XG4gICR0ZXh0LWxpZ2h0OiAjNzE4MDk2O1xuICAkYmc6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgMCUsICNjM2NmZTIgMTAwJSk7XG4gICRjYXJkLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuXG5cbiAgLmNhcmQge1xuICAgIC8vIGJhY2tncm91bmQ6ICgkYmcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICB9XG5cbiAgLmZlYXR1cmVzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZmVhdHVyZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMSk7XG4gICAgY29sb3I6ICgkcHJpbWFyeSk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4OiBub25lO1xuICB9XG5cbiAgLm90cC1jb250YWluZXIge1xuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAoJHRleHQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICgkcHJpbWFyeSksICgkc2Vjb25kYXJ5KSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICgkdGV4dC1saWdodCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLm9wdGlvbnMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogKCR0ZXh0LWxpZ2h0KTtcbiAgICBtYXJnaW46IDQ1cHggMCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAub3B0aW9ucy10aXRsZTo6YmVmb3JlLFxuICAub3B0aW9ucy10aXRsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgd2lkdGg6IDIyJTtcbiAgICB9XG4gIH1cblxuICAub3B0aW9ucy10aXRsZTo6YmVmb3JlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgLm9wdGlvbnMtdGl0bGU6OmFmdGVyIHtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5tZXRob2RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGlucHV0LFxuICAgIGlucHV0OmZvY3VzLFxuICAgIGlucHV0OmhvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgIG91dGxpbmU6IHVuc2V0O1xuICAgIH1cbiAgfVxuXG5cblxuICAuYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmJ0bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnRuIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmJ0bi1nb29nbGUgaSB7XG4gICAgY29sb3I6ICNEQjQ0Mzc7XG4gIH1cblxuICAuYnRuLWZhY2Vib29rIGkge1xuICAgIGNvbG9yOiAjMTg3N0YyO1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjQ3NWZjO1xuICB9XG5cbiAgLmJ0bi1lbWFpbCBpIHtcbiAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgY29sb3I6ICNjZTM3MzcgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG46aG92ZXIgLmFycm93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC50ZXJtcyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuXG4gIC50ZXJtcyBhIHtcbiAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gIH1cblxuICAudGVybXMgYTpob3ZlciB7XG4gICAgY29sb3I6ICgkc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICgkdGV4dC1saWdodCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAubm90aWZpY2F0aW9uIGlucHV0IHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYWNjZW50LWNvbG9yOiAoJHByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubm90aWZpY2F0aW9uIGxhYmVsIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5wb3dlcmVkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogKCR0ZXh0LWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gIH1cblxuICAucG93ZXJlZCBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAoJHByaW1hcnkpO1xuICB9XG5cbiAgLnBvd2VyZWQgaSB7XG4gICAgY29sb3I6ICgkYWNjZW50KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMTg3N0YyO1xuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7265:
/*!*******************************************!*\
  !*** ./src/app/notification-type.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationType: () => (/* binding */ NotificationType)
/* harmony export */ });
// notification-type.enum.ts
var NotificationType;
(function (NotificationType) {
  NotificationType["QUIZ_INVITATION"] = "quiz-invitation";
  NotificationType["QUIZ_START"] = "quiz-start";
  NotificationType["QUESTION_READY"] = "question-ready";
  NotificationType["NEW_QUIZ"] = "new-quiz";
  NotificationType["QUIZ_ENDED"] = "quiz-ended";
  NotificationType["RESULTS_AVAILABLE"] = "results-available";
  NotificationType["NEW_LEADER"] = "new-leader";
  NotificationType["ACHIEVEMENT_UNLOCKED"] = "achievement-unlocked";
  NotificationType["ADMIN_ANNOUNCEMENT"] = "admin-announcement";
  NotificationType["SYSTEM_ALERT"] = "system-alert"; // System notification
})(NotificationType || (NotificationType = {}));

/***/ }),

/***/ 2546:
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-type.enum */ 7265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ 7300);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster.service */ 2503);
var _NotificationService;





class NotificationService {
  constructor(socketService, toastr) {
    this.socketService = socketService;
    this.toastr = toastr;
    this.notificationSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.notificationCountSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.notifications$ = this.notificationSource$.asObservable();
    this.notificationsCount$ = this.notificationCountSource$.asObservable();
    this.unreadCount$ = this.notifications$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(notifications => notifications.filter(n => !n.isRead).length));
    this.setupSocketListeners();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupSocketListeners() {
    // Success handlers
    this.socketService.socket.on('notification:send:success', data => {
      this.getUnreadNotificationsCount().subscribe();
      this.getAllNotifications().subscribe();
      this.showToastNotification(data.notification);
    });
    this.socketService.socket.on('notification:new', data => {
      this.getUnreadNotificationsCount().subscribe();
      this.getAllNotifications().subscribe();
      this.showToastNotification(data.notification);
    });
    this.socketService.socket.on('notification:broadcast:success', data => {
      this.getUnreadNotificationsCount().subscribe();
      this.getAllNotifications().subscribe();
      this.showToastNotification(data.notification);
    });
    this.socketService.socket.on('notification:read:success', data => {
      this.getUnreadNotificationsCount().subscribe();
    });
    // Error handlers
    this.socketService.socket.on('notification:get:error', data => {
      this.toastr.error(data.error);
    });
    this.socketService.socket.on('notification:send:error', data => {
      this.toastr.error(data.error);
    });
    this.socketService.socket.on('notification:read:error', data => {
      this.toastr.error(data.error);
    });
    this.socketService.socket.on('notification:broadcast:error', data => {
      this.toastr.error(data.error);
    });
  }
  showToastNotification(notification) {
    let message = notification.message;
    const metadata = notification.metadata || {};
    switch (notification.type) {
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.QUIZ_INVITATION:
        message = `🎯 You've been invited to "${metadata.quizTitle || metadata.custom_data || 'a quiz'}" by ${metadata.inviterName || 'a friend'}!`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.QUIZ_START:
        message = `🚀 "${metadata.quizTitle || metadata.custom_data || 'The quiz'}" is starting now! Get ready!`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.QUESTION_READY:
        message = `❓ New question available in "${metadata.quizTitle || metadata.custom_data || 'the quiz'}!"`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.QUIZ_ENDED:
        message = `✅ "${metadata.quizTitle || metadata.custom_data || 'The quiz'}" has ended. Thanks for playing! 🎉`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.RESULTS_AVAILABLE:
        message = `📊 Results for "${metadata.quizTitle || metadata.custom_data || 'the quiz'}" are now available!`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.NEW_LEADER:
        message = `🏆 You're now the leader in "${metadata.quizTitle || metadata.custom_data || 'the quiz'}!" 🎉`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.ACHIEVEMENT_UNLOCKED:
        message = `⭐ Achievement unlocked: "${metadata.achievementName || metadata.custom_data || 'New achievement'}!" 🎯`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.ADMIN_ANNOUNCEMENT:
        message = `📢 Announcement: ${metadata.message || metadata.custom_data || 'New announcement'}`;
        break;
      case _notification_type_enum__WEBPACK_IMPORTED_MODULE_0__.NotificationType.SYSTEM_ALERT:
        message = `⚠️ System alert: ${metadata.alertMessage || metadata.custom_data || 'System notification'}`;
        break;
    }
    this.toastr.success(message);
  }
  getAllNotifications() {
    this.socketService.socket.emit('notification:get');
    return this.socketService.fromEvent('notification:get:success').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.notifications), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(notifications => this.notificationSource$.next(notifications)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$));
  }
  getUnreadNotificationsCount() {
    this.socketService.socket.emit('notification:UnreadNotificationsCount');
    return this.socketService.fromEvent('notification:UnreadNotificationsCount:success').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => this.notificationCountSource$.next(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$));
  }
  sendNotification(recipientId, type, message, metadata, actionUrl) {
    this.socketService.socket.emit('notification:send', {
      recipientId: recipientId,
      type,
      message,
      metadata,
      actionUrl
    });
  }
  sendBroadcastNotification(type, message, metadata, actionUrl) {
    this.socketService.socket.emit('notification:broadcast', {
      type,
      message,
      metadata,
      actionUrl
    });
  }
  markAsRead(notificationId) {
    this.socketService.socket.emit('notification:read', notificationId);
    return this.socketService.fromEvent('notification:read:success').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.notificationId), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(notificationId => {
      this.getAllNotifications().subscribe();
    }));
  }
  markAllAsRead() {
    const unreadIds = this.notificationSource$.value.filter(n => !n.isRead).map(n => n._id);
    if (unreadIds.length > 0) {
      this.socketService.socket.emit('notification:read-all', {
        notificationIds: unreadIds
      });
    }
  }
}
_NotificationService = NotificationService;
_NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || _NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService));
};
_NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: _NotificationService,
  factory: _NotificationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6760:
/*!**********************************************!*\
  !*** ./src/app/ongoing/ongoing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OngoingComponent: () => (/* binding */ OngoingComponent)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/app */ 9326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ 7300);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _OngoingComponent;









const _c0 = (a0, a1, a2, a3) => ({
  "selected": a0,
  "wrong": a1,
  "correct": a2,
  "disabled": a3
});
function OngoingComponent_div_1_div_33_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 39);
  }
}
function OngoingComponent_div_1_div_33_div_7_div_5_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 43);
  }
}
function OngoingComponent_div_1_div_33_div_7_div_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 44);
  }
}
function OngoingComponent_div_1_div_33_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OngoingComponent_div_1_div_33_div_7_div_5_i_1_Template, 1, 0, "i", 41)(2, OngoingComponent_div_1_div_33_div_7_div_5_i_2_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const option_r4 = ctx_r7.$implicit;
    const i_r5 = ctx_r7.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isCorrectAnswerToShow(option_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isOptionSelected(i_r5) && ctx_r6.isWrongAnswer(i_r5, option_r4));
  }
}
function OngoingComponent_div_1_div_33_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_1_div_33_div_7_Template_div_click_0_listener() {
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const option_r4 = ctx_r2.$implicit;
      const i_r5 = ctx_r2.index;
      const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngIf;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](!ctx_r6.resultPopup && ctx_r6.selectOption(i_r5, quiz_r6._id, ctx_r6.currentQuestion, option_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OngoingComponent_div_1_div_33_div_7_div_2_Template, 1, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OngoingComponent_div_1_div_33_div_7_div_5_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](4, _c0, ctx_r6.isOptionSelected(i_r5), ctx_r6.isOptionSelected(i_r5) && ctx_r6.isWrongAnswer(i_r5, option_r4), ctx_r6.isCorrectAnswerToShow(option_r4), ctx_r6.viewAnswer));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isOptionSelected(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.viewAnswer);
  }
}
function OngoingComponent_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OngoingComponent_div_1_div_33_div_7_Template, 6, 9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Question ", ctx_r6.currentQuestionIndex + 1, " of ", quiz_r6.questions.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.currentQuestion == null ? null : ctx_r6.currentQuestion.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.currentQuestion == null ? null : ctx_r6.currentQuestion.options)("ngForTrackBy", ctx_r6.trackByOption);
  }
}
function OngoingComponent_div_1_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_1_ng_container_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r6.isOptionSelected());
  }
}
function OngoingComponent_div_1_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_1_ng_template_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submitQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Submit Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r6.isOptionSelected());
  }
}
function OngoingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9)(6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 13)(14, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16)(21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 19)(25, "div", 20)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, OngoingComponent_div_1_div_33_Template, 8, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 24)(35, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.previousQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, OngoingComponent_div_1_ng_container_38_Template, 4, 1, "ng-container", 27)(39, OngoingComponent_div_1_ng_template_39_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r6 = ctx.ngIf;
    const submitSection_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quiz_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quiz_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 15, quiz_r6.estimatedTime / 60, "1.0-0"), " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 18, quiz_r6.difficulty), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r6.totalPoints, " XP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.formatTime(ctx_r6.remainingTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Progress: ", ctx_r6.currentQuestionIndex + 1, "/", quiz_r6.questions.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](30, 20, ctx_r6.progressPercentage, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r6.progressPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.getQuestionLoadingState(ctx_r6.currentQuestionIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.currentQuestionIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentQuestionIndex < quiz_r6.questions.length - 1)("ngIfElse", submitSection_r11);
  }
}
function OngoingComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 53)(5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 51)(9, "div", 56)(10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function OngoingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.stayInQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 59)(3, "h2", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Leave Quiz?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "You have an active quiz! Are you sure you want to leave? If you leave this page, your quiz will be submitted automatically.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 62)(8, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_5_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.stayInQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Stay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_div_5_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.leaveQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function OngoingComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_ng_container_6_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 67)(3, "div", 68)(4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 71)(12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Quiz completed successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "You attempted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " and got ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " correct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 74)(23, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_ng_container_6_div_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.viewAnswers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Verify Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OngoingComponent_ng_container_6_div_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.closeQuizWithoutSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const quiz_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.calculatePoints(quiz_r14), " XP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", quiz_r14.questions.length, " questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r6.correctAnswersCount, " answers");
  }
}
function OngoingComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OngoingComponent_ng_container_6_div_1_Template, 27, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.resultPopup);
  }
}
class OngoingComponent {
  // Computed properties
  get currentQuestion() {
    const quiz = this.quizSubject.getValue();
    return quiz === null || quiz === void 0 ? void 0 : quiz.questions[this.currentQuestionIndex];
  }
  get progressPercentage() {
    const quiz = this.quizSubject.getValue();
    return quiz ? (this.currentQuestionIndex + 1) / quiz.questions.length * 100 : 0;
  }
  constructor(route, quizService, location, router, socketService, cdr) {
    this.route = route;
    this.quizService = quizService;
    this.location = location;
    this.router = router;
    this.socketService = socketService;
    this.cdr = cdr;
    this.quizSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.quiz$ = this.quizSubject.asObservable();
    this.quizId = "";
    this.currentQuestionIndex = 0;
    this.selectedOptions = [];
    this.remainingTime = 0;
    this.isAdminUser = false;
    this.isLoading = false;
    this.resultPopup = false;
    this.viewAnswer = false;
    this.loadingStates = [];
    this.isQuizActive = false;
    this.deactivateSubject = null;
    this.confirmationPopup = false;
    this.correctAnswersCount = 0;
    this.isQuizActive = true;
    this.socketService.authDataSource.next(null);
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setupBackButtonHandler();
      _this.loadQuizData();
    })();
  }
  loadQuizData() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(params => {
      this.quizId = params['id'];
      return this.quizService.getLiveQuiz(this.quizId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(quiz => {
      // Apply shuffling based on quiz configuration or default settings
      this.applyShuffling(quiz);
      return quiz;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(quiz => {
      this.quizSubject.next(quiz);
      this.isLoading = false;
      this.selectedOptions = new Array(quiz.questions.length).fill(null);
      if (!this.isAdminUser || quiz.approvalStatus !== 'pending') {
        this.startTimer(quiz.estimatedTime);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      this.isLoading = false;
      console.error('Error loading quiz', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
    })).subscribe();
  }
  applyShuffling(quiz) {
    // Check if shuffling is enabled (you can add these properties to your Quiz interface)
    // const shuffleQuestions = quiz.shuffleQuestions !== undefined ? quiz.shuffleQuestions : true;
    const shuffleQuestions = true;
    // const shuffleOptions = quiz.shuffleOptions !== undefined ? quiz.shuffleOptions : true;
    const shuffleOptions = true;
    // Shuffle questions
    if (shuffleQuestions) {
      quiz.questions = this.shuffleArray(quiz.questions);
    }
    // Shuffle options for each question
    if (shuffleOptions) {
      quiz.questions.forEach(question => {
        // Store original correct answer before shuffling
        const correctAnswer = question.correctAnswer;
        // Shuffle options
        question.options = this.shuffleArray(question.options);
        // Update correct answer reference (in case we need it later)
        question.correctAnswer = correctAnswer;
      });
    }
  }
  // Improved shuffle function with better randomness
  shuffleArray(array) {
    const shuffled = [...array];
    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    return shuffled;
  }
  setupBackButtonHandler() {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof window !== 'undefined' && 'capacitor' in window) {
        _this2.backButtonListener = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_1__.App.addListener('backButton', ({
          canGoBack
        }) => {
          if (_this2.isQuizActive && !_this2.confirmationPopup) {
            _this2.handleBackButton();
          } else if (_this2.confirmationPopup) {
            _this2.stayInQuiz();
          } else {
            _capacitor_app__WEBPACK_IMPORTED_MODULE_1__.App.exitApp();
          }
        });
      }
    })();
  }
  onPopState(event) {
    event.preventDefault();
    this.resultPopup = false;
    this.handleBackButton();
  }
  handleBackButton() {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.isQuizActive) return;
      _this3.confirmationPopup = true;
      _this3.cdr.detectChanges();
    })();
  }
  canDeactivate() {
    this.resultPopup = false;
    if (!this.isQuizActive) return true;
    this.confirmationPopup = true;
    this.deactivateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    return this.deactivateSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
      this.confirmationPopup = false;
      if (response) this.cleanupQuiz();
      return response;
    }));
  }
  stayInQuiz() {
    if (this.deactivateSubject) {
      this.deactivateSubject.next(false);
      this.deactivateSubject.complete();
      this.deactivateSubject = null;
    }
    this.confirmationPopup = false;
    this.resultPopup = false;
  }
  leaveQuiz() {
    if (this.deactivateSubject) {
      this.deactivateSubject.next(true);
      this.deactivateSubject.complete();
      this.deactivateSubject = null;
    }
    this.confirmationPopup = false;
    this.cleanupQuiz();
    this.router.navigate(['/home'], {
      replaceUrl: true
    });
  }
  ngOnDestroy() {
    if (this.backButtonListener) this.backButtonListener.remove();
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.cleanupQuiz();
  }
  cleanupQuiz() {
    this.isQuizActive = false;
    const authData = {
      token: localStorage.getItem('token') || '',
      user: JSON.parse(localStorage.getItem('user') || '{}')
    };
    this.socketService.authDataSource.next(authData);
  }
  unloadNotification($event) {
    if (this.isQuizActive) {
      $event.returnValue = 'You have an active quiz. Are you sure you want to leave?';
    }
  }
  startTimer(estimatedTime) {
    this.remainingTime = estimatedTime;
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timerInterval);
        this.isQuizActive = false;
        this.submitQuiz();
      }
    }, 1000);
  }
  pauseTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  nextQuestion() {
    const quiz = this.quizSubject.getValue();
    if (quiz && this.currentQuestionIndex < quiz.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  selectOption(optionIndex, quizId, question, answer) {
    if (!quizId) return;
    this.selectedOptions[this.currentQuestionIndex] = optionIndex;
    this.quizService.submitAnswer(quizId, question._id, answer).subscribe();
  }
  isOptionSelected(optionIndex) {
    if (optionIndex !== undefined) {
      return this.selectedOptions[this.currentQuestionIndex] === optionIndex;
    }
    return this.selectedOptions[this.currentQuestionIndex] !== undefined && this.selectedOptions[this.currentQuestionIndex] !== null;
  }
  getQuestionLoadingState(index) {
    return this.loadingStates[index] || false;
  }
  submitQuiz() {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const quiz = _this4.quizSubject.getValue();
        if (quiz) {
          _this4.correctAnswersCount = _this4.calculateCorrectAnswers(quiz);
          if (!_this4.viewAnswer) {
            _this4.quizService.submitQuiz(quiz._id).subscribe();
            _this4.pauseTimer();
          }
          _this4.resultPopup = true;
        }
      } catch (error) {
        console.error('Error submitting quiz:', error);
      }
    })();
  }
  calculateCorrectAnswers(quiz) {
    return quiz.questions.reduce((count, question, index) => {
      const selectedOptionIndex = this.selectedOptions[index];
      return selectedOptionIndex !== null && selectedOptionIndex !== undefined && question.correctAnswer === question.options[selectedOptionIndex] ? count + 1 : count;
    }, 0);
  }
  calculatePoints(quiz) {
    return quiz.questions.reduce((totalPoints, question, index) => {
      const selectedOptionIndex = this.selectedOptions[index];
      // Check if an option was selected and if it's correct
      if (selectedOptionIndex !== null && selectedOptionIndex !== undefined && question.correctAnswer === question.options[selectedOptionIndex]) {
        // Add the question's point value to the total
        return totalPoints + (question.points || 1); // Use question.points or default to 1
      }
      return totalPoints; // Return current total if answer is wrong or not selected
    }, 0);
  }
  isCorrectAnswer(correctAnswer, option) {
    return correctAnswer === option;
  }
  viewAnswers() {
    this.viewAnswer = true;
    this.resultPopup = false;
  }
  closeQuizWithoutSubmit() {
    var _this5 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.cleanupQuiz();
      _this5.router.navigate(['/home'], {
        replaceUrl: true
      });
    })();
  }
  // Helper method to check if an answer is wrong
  isWrongAnswer(optionIndex, option) {
    if (!this.viewAnswer || !this.currentQuestion) return false;
    const isSelected = this.isOptionSelected(optionIndex);
    const isCorrect = this.currentQuestion.correctAnswer === option;
    return isSelected && !isCorrect;
  }
  // Helper method to check if an answer should be shown as correct
  isCorrectAnswerToShow(option) {
    if (!this.viewAnswer || !this.currentQuestion) return false;
    return this.currentQuestion.correctAnswer === option;
  }
  // TrackBy function for better performance
  trackByOption(index, option) {
    return option; // Use the option text as unique identifier
  }
  trackByQuestionId(index, question) {
    return question._id || index.toString();
  }
}
_OngoingComponent = OngoingComponent;
_OngoingComponent.ɵfac = function OngoingComponent_Factory(t) {
  return new (t || _OngoingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_2__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};
_OngoingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _OngoingComponent,
  selectors: [["app-ongoing"]],
  hostBindings: function OngoingComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("popstate", function OngoingComponent_popstate_HostBindingHandler($event) {
        return ctx.onPopState($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("beforeunload", function OngoingComponent_beforeunload_HostBindingHandler($event) {
        return ctx.unloadNotification($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 8,
  vars: 9,
  consts: [["loading", ""], ["submitSection", ""], [1, "ion-padding", 3, "fullscreen"], ["class", "container", 4, "ngIf", "ngIfElse"], ["class", "dialog-backdrop", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "quiz-title"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "fas", "fa-bolt"], [1, "timer-container"], [1, "timer"], [1, "fas", "fa-clock"], [1, "progress-container"], [1, "progress-info"], [1, "progress-bar"], [1, "progress-fill"], ["class", "question-card", 4, "ngIf"], [1, "quiz-actions"], [1, "action-btn", "prev-btn", 3, "click", "disabled"], [1, "fas", "fa-arrow-left"], [4, "ngIf", "ngIfElse"], [1, "question-card"], [1, "question-header"], [1, "question-number"], [1, "question-text"], [1, "options-list"], ["class", "option-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "option-item", 3, "click", "ngClass"], [1, "option-radio"], ["class", "radio-inner", 4, "ngIf"], [1, "option-text"], ["class", "answer-feedback", 4, "ngIf"], [1, "radio-inner"], [1, "answer-feedback"], ["class", "fas fa-check correct-icon", 4, "ngIf"], ["class", "fas fa-times wrong-icon", 4, "ngIf"], [1, "fas", "fa-check", "correct-icon"], [1, "fas", "fa-times", "wrong-icon"], [1, "action-btn", "next-btn", 3, "click", "disabled"], [1, "fas", "fa-arrow-right"], [1, "action-btn", "submit-btn", 3, "click", "disabled"], [1, "fas", "fa-paper-plane"], [1, "loading-container"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-row"], [1, "ph-col-8", "big"], [1, "ph-col-4", "big"], [1, "ph-picture"], [1, "ph-col-6"], [1, "dialog-backdrop", 3, "click"], [1, "dialog-container", 3, "click"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-message"], [1, "dialog-actions"], [1, "dialog-button", "button-cancel", 3, "click"], [1, "dialog-button", "button-delete", 3, "click"], ["class", "dialog-backdrop", 4, "ngIf"], [1, "dialog-backdrop"], [1, "card"], [1, "header"], [1, "image"], ["src", "assets/winner-cup.svg", "width", "100px", "alt", "Quiz completed"], [1, "content"], [1, "title"], [1, "message"], [1, "actions"]],
  template: function OngoingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OngoingComponent_div_1_Template, 41, 23, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OngoingComponent_ng_template_3_Template, 11, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(5, OngoingComponent_div_5_Template, 12, 0, "div", 4)(6, OngoingComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const loading_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, ctx.quiz$))("ngIfElse", loading_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.confirmationPopup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, ctx.quiz$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe],
  styles: [".quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  background: #ffffff;\n  border-radius: 16px;\n}\n\n.difficulty-badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: capitalize;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  background-color: #efefef;\n  color: #333;\n}\n\n.quiz-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 30px;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.9rem;\n}\n\n.quiz-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #2f2f2f;\n  margin-bottom: 12px;\n}\n\n.quiz-description[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  line-height: 1.5;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-width: 1px;\n  height: 30px;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n}\n\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  color: #a0a0a0;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #3f51b5;\n  border-radius: 4px;\n  width: 30%;\n  transition: all 0.3s ease;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2f2f2f;\n}\n\n.question-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n  margin-bottom: 35%;\n}\n\n.question-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.question-number[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.question-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2f2f2f;\n  margin-bottom: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.options-list[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.option-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 16px;\n  margin-bottom: 12px;\n  border-radius: 12px;\n  background: #f5f5f5;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.option-item.selected[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.option-item.correct[_ngcontent-%COMP%] {\n  background-color: #7b7b7b;\n  color: #fff;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.option-item.wrong[_ngcontent-%COMP%] {\n  background-color: rgba(221, 40, 40, 0.7098039216);\n  color: #fff;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.option-radio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid #a0a0a0;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n\n.answer-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.option-item.selected[_ngcontent-%COMP%]   .option-radio[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  background-color: #3f51b5;\n}\n\n.option-item.correct[_ngcontent-%COMP%]   .option-radio[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  background-color: #7b7b7b;\n}\n\n.option-item.wrong[_ngcontent-%COMP%]   .option-radio[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  background-color: rgba(221, 40, 40, 0.7098039216);\n}\n\n.option-item.selected[_ngcontent-%COMP%]   .option-radio[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: white;\n}\n\n.option-item.correct[_ngcontent-%COMP%]   .option-radio[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: white;\n}\n\n.option-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.4;\n}\n\n.quiz-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: sticky;\n  bottom: 10px;\n  background: transparent;\n  border-radius: 16px;\n  margin-top: 24px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.prev-btn[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #2f2f2f;\n}\n\n.prev-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8ff;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.next-btn[_ngcontent-%COMP%]:hover {\n  background-color: #5a52e0;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  background-color: #00B894;\n  color: white;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #00a382;\n}\n\n.timer-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 24px;\n  background: linear-gradient(135deg, #5260ff 0%, #3f51b5 100%);\n  border-radius: 12px;\n  margin: 0 auto 24px;\n  font-size: 1.5rem;\n  color: #fff;\n  position: sticky;\n  top: 0;\n  font-weight: 700;\n}\n.timer-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.difficulty-easy[_ngcontent-%COMP%] {\n  background-color: rgba(0, 184, 148, 0.2);\n  color: #00B894;\n}\n\n.difficulty-medium[_ngcontent-%COMP%] {\n  background-color: rgba(255, 196, 9, 0.2);\n  color: #cc9a00;\n}\n\n.difficulty-hard[_ngcontent-%COMP%] {\n  background-color: rgba(214, 48, 49, 0.2);\n  color: #D63031;\n}\n\n.dialog-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n  padding: 10px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out forwards;\n}\n\n.dialog-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  transform: scale(0.9);\n  animation: _ngcontent-%COMP%_scaleIn 0.2s ease-out forwards;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  padding: 24px 24px 16px;\n  text-align: center;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2d3748;\n  margin-bottom: 8px;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 16px;\n  line-height: 1.5;\n}\n\n.test-suite-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4a5568;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px 24px 24px;\n  gap: 12px;\n}\n\n.button-cancel[_ngcontent-%COMP%] {\n  background-color: #f7fafc;\n  color: #4a5568;\n  border: 1px solid #e2e8f0;\n}\n\n.button-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #edf2f7;\n}\n\n.button-delete[_ngcontent-%COMP%] {\n  background-color: #ff6379;\n  color: white;\n}\n\n.button-delete[_ngcontent-%COMP%]:hover {\n  background-color: #f14b61;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n\n.card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  height: 350px;\n  border-radius: 0.5rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  background-color: #fff;\n}\n\n.dismiss[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  background-color: #fff;\n  color: black;\n  border: 2px solid #D1D5DB;\n  font-size: 1rem;\n  font-weight: 300;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  transition: 0.3s ease;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n  height: 8rem;\n  border-radius: 9999px;\n  transition: 0.6s ease;\n  margin-bottom: 30px;\n}\n\n.image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0afa2a;\n  width: 2rem;\n  height: 2rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  text-align: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #066e29;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #595b5f;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin: 0.75rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.dialog-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px;\n  align-content: center;\n  line-height: 1.5rem;\n  font-weight: 500;\n  justify-content: center;\n  width: 100%;\n  border-radius: 0.375rem;\n  border: none;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n.track[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 0.75rem;\n  padding: 0.5rem 1rem;\n  color: #242525;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  justify-content: center;\n  width: 100%;\n  border-radius: 0.375rem;\n  border: 1px solid #D1D5DB;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.09);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb25nb2luZy9vbmdvaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpREFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRkY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxpREFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUVBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FBTEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQUxKOztBQWVBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBWkY7O0FBZUE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFaRjs7QUFlQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWtCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBZkY7O0FBa0JBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtBQWZGOztBQWtCQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWZGOztBQW1CQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSx5QkFBQTtBQWhCRjs7QUFxQkE7RUFDRTtJQUNFLFVBQUE7RUFsQkY7RUFxQkE7SUFDRSxVQUFBO0VBbkJGO0FBQ0Y7QUFzQkE7RUFDRTtJQUNFLHFCQUFBO0VBcEJGO0VBdUJBO0lBQ0UsbUJBQUE7RUFyQkY7QUFDRjtBQTBCQSxpQ0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUZBQUE7RUFDQSxzQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBeEJGOztBQTBCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF2QkY7QUF5QkU7RUFDRSxPQUFBO0FBdkJKOztBQTJCQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBeEJGOztBQTJCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBeEJGOztBQTJCQTtFQUNFO0lBQ0UsbUJBQUE7RUF4QkY7RUEyQkE7SUFDRSxzQkFBQTtFQXpCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uZGlmZmljdWx0eS1iYWRnZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucXVpei1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWV0YS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucXVpei10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzJmMmYyZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnF1aXotZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5ociB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4ucHJvZ3Jlc3MtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2dyZXNzLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDMwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLnF1ZXN0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBtYXJnaW4tYm90dG9tOiAzNSU7XG59XG5cbi5xdWVzdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5xdWVzdGlvbi1udW1iZXIge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnF1ZXN0aW9uLXRleHQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5vcHRpb25zLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ub3B0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICA7XG59XG5cbi5vcHRpb24taXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vcHRpb24taXRlbS5jb3JyZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiN2I3YjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm9wdGlvbi1pdGVtLndyb25nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMjgyOGI1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5cbi5vcHRpb24tcmFkaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYTBhMGEwO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgO1xufVxuXG4uYW5zd2VyLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ub3B0aW9uLWl0ZW0uc2VsZWN0ZWQgLm9wdGlvbi1yYWRpbyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbi5vcHRpb24taXRlbS5jb3JyZWN0IC5vcHRpb24tcmFkaW8ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I3YjdiO1xufVxuXG4ub3B0aW9uLWl0ZW0ud3JvbmcgLm9wdGlvbi1yYWRpbyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDI4MjhiNTtcbn1cblxuLm9wdGlvbi1pdGVtLnNlbGVjdGVkIC5vcHRpb24tcmFkaW86OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ub3B0aW9uLWl0ZW0uY29ycmVjdCAub3B0aW9uLXJhZGlvOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm9wdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ucXVpei1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnByZXYtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG5cbi5wcmV2LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZmY7XG59XG5cbi5uZXh0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5leHQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNTJlMDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCODk0O1xuICA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMzgyO1xufVxuXG4udGltZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTI2MGZmIDAlLCAjM2Y1MWI1IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDAgYXV0byAyNHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcblxuXG4gIH1cbn1cblxuXG5cblxuXG4uZGlmZmljdWx0eS1lYXN5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODQsIDE0OCwgMC4yKTtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG5cbi5kaWZmaWN1bHR5LW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTYsIDksIDAuMik7XG4gIGNvbG9yOiAjY2M5YTAwO1xufVxuXG4uZGlmZmljdWx0eS1oYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDQ4LCA0OSwgMC4yKTtcbiAgY29sb3I6ICNENjMwMzE7XG59XG5cblxuXG5cbi5kaWFsb2ctYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLmRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDAuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5kaWFsb2ctaGVhZGVyIHtcbiAgcGFkZGluZzogMjRweCAyNHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZDM3NDg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRpYWxvZy1tZXNzYWdlIHtcbiAgY29sb3I6ICM3MTgwOTY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnRlc3Qtc3VpdGUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGE1NTY4O1xufVxuXG4uZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHggMjRweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG5cbi5idXR0b24tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmFmYztcbiAgY29sb3I6ICM0YTU1Njg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi5idXR0b24tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjJmNztcbn1cblxuLmJ1dHRvbi1kZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2Mzc5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNGI2MTtcbiAgO1xuICA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cblxuXG4vKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovXG4uY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZGlzbWlzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEMUQ1REI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbn1cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICB0cmFuc2l0aW9uOiAuNnMgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmltYWdlIHN2ZyB7XG4gIGNvbG9yOiAjMGFmYTJhO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMwNjZlMjk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiAjNTk1YjVmO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW46IDAuNzVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5cbi5kaWFsb2ctYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udHJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGNvbG9yOiAjMjQyNTI1O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6980:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/share */ 1953);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toaster.service */ 2503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _ProfilePage;










function ProfilePage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 26)(3, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "XP Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 29)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 29)(12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Streak");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((vm_r1.userStats == null ? null : vm_r1.userStats.points) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((vm_r1.userStats == null ? null : vm_r1.userStats.rank) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((vm_r1.userStats == null ? null : vm_r1.userStats.streak == null ? null : vm_r1.userStats.streak.current) || 0);
  }
}
function ProfilePage_ng_container_32_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function ProfilePage_ng_container_32_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 61)(4, "circle", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " 1.2K ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_ng_container_32_div_3_ion_chip_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ng_container_32_div_3_button_23__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "path", 68);
  }
}
function ProfilePage_ng_container_32_div_3_button_23__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "path", 69);
  }
}
function ProfilePage_ng_container_32_div_3_button_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfilePage_ng_container_32_div_3_button_23__svg_path_2_Template, 1, 0, "path", 66)(3, ProfilePage_ng_container_32_div_3_button_23__svg_path_3_Template, 1, 0, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quiz_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", quiz_r2.approvalStatus == "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", quiz_r2.approvalStatus == "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", quiz_r2.approvalStatus, " ");
  }
}
function ProfilePage_ng_container_32_div_3_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_ng_container_32_div_3_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const quiz_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.verifyQuiz(quiz_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_ng_container_32_div_3_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_ng_container_32_div_3_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const quiz_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.deleteQuiz(quiz_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_ng_container_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfilePage_ng_container_32_div_3_div_4_Template, 6, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 47)(8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 51)(15, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ProfilePage_ng_container_32_div_3_ion_chip_22_Template, 2, 0, "ion-chip", 55)(23, ProfilePage_ng_container_32_div_3_button_23_Template, 5, 3, "button", 56)(24, ProfilePage_ng_container_32_div_3_button_24_Template, 4, 0, "button", 57)(25, ProfilePage_ng_container_32_div_3_button_25_Template, 4, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", quiz_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](quiz_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", quiz_r2.estimatedTime / 60, " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", quiz_r2.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", quiz_r2.totalQuestions, " Qs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.IsAdminTemplate(quiz_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", quiz_r2.approvalStatus != "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", quiz_r2.approvalStatus == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", quiz_r2.approvalStatus != "pending");
  }
}
function ProfilePage_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfilePage_ng_container_32_ng_container_2_Template, 2, 0, "ng-container", 23)(3, ProfilePage_ng_container_32_div_3_Template, 26, 10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "div", 33)(6, "div", 34)(7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Weekly Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "87%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "line", 39)(15, "polyline", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " 12% from last week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("tab-content ", ctx_r3.activeTab == "quizzes" ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", vm_r6.draftQuizzes.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", vm_r6.draftQuizzes)("ngForTrackBy", ctx_r3.trackByQuizId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("tab-content ", ctx_r3.activeTab == "stats" ? "active" : "", "");
  }
}
class ProfilePage {
  constructor(dashboardService, quizService, router, toasterService) {
    this.dashboardService = dashboardService;
    this.quizService = quizService;
    this.router = router;
    this.toasterService = toasterService;
    this.activeTab = 'quizzes';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // Combine all needed observables
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.dashboardService.getUserStats$, this.quizService.getQuizesDraft$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([userStats, draftQuizzes]) => ({
      userStats,
      draftQuizzes
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$));
  }
  ngOnInit() {
    this.loadInitialData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get currentUser() {
    return this.dashboardService.getUser();
  }
  loadInitialData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield Promise.all([_this.dashboardService.getDashboardStats().toPromise(), _this.quizService.getAllQuiz().toPromise()]);
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    })();
  }
  changeTab(tab) {
    this.activeTab = tab;
  }
  verifyQuiz(quizId) {
    this.router.navigate(['/verify-quiz'], {
      queryParams: {
        id: quizId
      }
    });
  }
  deleteQuiz(quizId) {
    this.quizService.deleteQuiz(quizId).subscribe({
      next: () => {
        this.toasterService.success('Quiz deleted successfully');
      },
      error: err => {
        this.toasterService.error('Failed to delete quiz');
        console.error('Delete quiz error:', err);
      }
    });
  }
  trackByQuizId(index, quiz) {
    return quiz._id;
  }
  shareApp() {
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appName = "QuizMaster";
      const message = `🚀 Challenge yourself with ${appName}! 
  Test your knowledge with fun quizzes and compete with friends. 
  Join me now!`;
      const shareOptions = {
        title: `Try ${appName} - The Ultimate Quiz App`,
        text: message,
        url: 'https://your-app-website-or-play-store-link.com',
        dialogTitle: 'Challenge Your Friends'
      };
      try {
        yield _capacitor_share__WEBPACK_IMPORTED_MODULE_1__.Share.share(shareOptions);
      } catch (error) {
        console.error('Share error:', error);
      }
    })();
  }
  IsAdminTemplate(quiz) {
    var _quiz$source;
    return ((_quiz$source = quiz.source) === null || _quiz$source === void 0 ? void 0 : _quiz$source.toLowerCase()) === 'admin-template' && quiz.approvalStatus !== 'rejected';
  }
  avatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null;
  }
}
_ProfilePage = ProfilePage;
_ProfilePage.ɵfac = function ProfilePage_Factory(t) {
  return new (t || _ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_3__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_4__.ToasterService));
};
_ProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ProfilePage,
  selectors: [["app-profile"]],
  decls: 34,
  vars: 17,
  consts: [[3, "fullscreen"], [1, "phone-section"], [1, "profile-header"], [1, "avatar-container"], ["crossorigin", "anonymous", 1, "profile-avatar", 3, "error", "src"], ["class", "edit-avatar", 4, "ngIf"], [1, "profile-name"], [1, "profile-username"], ["class", "profile-stats", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "/create", 1, "btn", "btn-primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [1, "btn", "btn-outline", 3, "click"], ["cx", "18", "cy", "5", "r", "3"], ["cx", "6", "cy", "12", "r", "3"], ["cx", "18", "cy", "19", "r", "3"], ["x1", "8.59", "y1", "13.51", "x2", "15.42", "y2", "17.49"], ["x1", "15.41", "y1", "6.51", "x2", "8.59", "y2", "10.49"], [1, "tabs"], [3, "click"], [4, "ngIf"], [1, "edit-avatar"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "profile-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], ["class", "quiz-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-card-title"], ["name", "stats-chart-sharp"], [1, "stat-card-value"], [1, "stat-card-change", "positive"], ["x1", "12", "y1", "19", "x2", "12", "y2", "5"], ["points", "5 12 12 5 19 12"], ["src", "assets/noQuizes.svg", "alt", "", "srcset", ""], [1, "quiz-card"], [1, "quiz-header"], [1, "quiz-title"], ["class", "quiz-meta", 4, "ngIf"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 10H8.01M12 10H12.01M16 10H16.01M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "quiz-actions"], ["class", "difficulty-badge", 4, "ngIf"], ["class", "action-btn", 4, "ngIf"], ["class", "action-btn approve-btn", 3, "click", 4, "ngIf"], ["class", "action-btn delete-btn", 3, "click", 4, "ngIf"], [1, "quiz-meta-item"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "difficulty-badge"], [1, "action-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "approve-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "delete-btn", 3, "click"], ["d", "M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z", "fill", "currentColor"]],
  template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ProfilePage_Template_img_error_4_listener($event) {
        return ctx.avatarError($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfilePage_div_5_Template, 4, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfilePage_div_10_Template, 16, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "circle", 12)(16, "line", 13)(17, "line", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Create Quiz ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_19_listener() {
        return ctx.shareApp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "circle", 16)(22, "circle", 17)(23, "circle", 18)(24, "line", 19)(25, "line", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Share ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 21)(28, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_div_click_28_listener() {
        return ctx.activeTab = "quizzes";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "My Quizzes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_div_click_30_listener() {
        return ctx.activeTab = "stats";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ProfilePage_ng_container_32_Template, 17, 9, "ng-container", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.currentUser.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentUser.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentUser.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 13, ctx.viewModel$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("tab ", ctx.activeTab == "quizzes" ? "active" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("tab ", ctx.activeTab == "stats" ? "active" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 15, ctx.viewModel$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n\n.phone-section[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 20px;\n  min-height: 100vh;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6C5CE7;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 8px 12px 8px 0;\n  border-radius: 12px;\n  transition: all 0.2s;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(108, 92, 231, 0.1);\n}\n\n.back-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D3436;\n}\n\n\n\n.profile-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin: 0 auto 16px;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #FFFFFF;\n}\n\n.edit-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 36px;\n  height: 36px;\n  background-color: #6C5CE7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.edit-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.profile-username[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #636E72;\n  margin-bottom: 12px;\n}\n\n.profile-bio[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto 16px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #636E72;\n}\n\n.profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #636E72;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #6C5CE7;\n  color: white;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #5649C0;\n  transform: translateY(-2px);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #6C5CE7;\n  border: 2px solid #6C5CE7;\n}\n\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: rgba(108, 92, 231, 0.1);\n}\n\n\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 16px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  color: #636E72;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.tab.active[_ngcontent-%COMP%] {\n  color: #6C5CE7;\n}\n\n.tab.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #6C5CE7;\n  border-radius: 3px 3px 0 0;\n}\n\n\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tab-content[_ngcontent-%COMP%]   .quiz-card[_ngcontent-%COMP%] {\n  animation: unset;\n}\n\n.tab-content.active[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 18%;\n}\n\n\n\n.badges-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.badge-card[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.badge-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.badge-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(135deg, #6C5CE7, #A29BFE);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n  color: white;\n  font-size: 24px;\n}\n\n.badge-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.badge-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #636E72;\n}\n\n\n\n.quiz-item[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.quiz-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.quiz-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n  word-break: break-word;\n}\n\n.quiz-category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C5CE7;\n  background-color: rgba(108, 92, 231, 0.1);\n  padding: 4px 8px;\n  border-radius: 20px;\n}\n\n.quiz-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #636E72;\n}\n\n.quiz-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 10px;\n}\n\n.quiz-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.quiz-action[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.quiz-action.edit[_ngcontent-%COMP%] {\n  background-color: rgba(0, 184, 148, 0.1);\n  color: #00B894;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.quiz-action.delete[_ngcontent-%COMP%] {\n  background-color: rgba(255, 118, 117, 0.1);\n  color: #FF7675;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  padding: 16px;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.stat-card-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #636E72;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: flex-start !important;\n  gap: 6px;\n}\n\n.stat-card-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.stat-card-change[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: #00B894;\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: #FF7675;\n}\n\n\n\n.progress-container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.progress-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.progress-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C5CE7;\n  font-weight: 600;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: rgba(108, 92, 231, 0.1);\n  border-radius: 4px;\n  margin-bottom: 8px;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 75%;\n  background: linear-gradient(90deg, #6C5CE7, #A29BFE);\n  border-radius: 4px;\n  transition: width 1s ease-out;\n}\n\n.progress-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #636E72;\n}\n\n\n\n.tab-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #FFFFFF;\n  display: flex;\n  justify-content: space-around;\n  padding: 12px 0;\n  max-width: 414px;\n  margin: 0 auto;\n  z-index: 5;\n}\n\n.tab-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  color: #636E72;\n  text-decoration: none;\n  font-size: 12px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.tab-item.active[_ngcontent-%COMP%] {\n  color: #6C5CE7;\n}\n\n.tab-item.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  width: 6px;\n  height: 6px;\n  background-color: #6C5CE7;\n  border-radius: 50%;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n@media (max-width: 480px) {\n  .phone[_ngcontent-%COMP%] {\n    padding: 16px;\n    padding-bottom: 72px;\n  }\n  .badges-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n  padding: 5px 15px;\n  border-radius: 16px;\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  right: -7px;\n  border-radius: unset;\n  border-bottom-left-radius: 22px;\n}\n\n.ph-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 18%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhSSx3QkFBQTtBQVVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBckJSOztBQXlCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0QlI7O0FBeUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0F6Q007RUEwQ04scUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUF0QlI7O0FBeUJJO0VBQ0kseUNBQUE7QUF0QlI7O0FBeUJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXRCUjs7QUF5Qkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBNURHO0FBc0NYOztBQTBCSSxtQkFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtBQXZCUjs7QUEwQkk7RUFDSSxxQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdkJSOztBQTBCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBdkJSOztBQTBCSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxrQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXZCUjs7QUEwQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXZCUjs7QUEwQkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF2QlI7O0FBMEJJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBdkJSOztBQTBCSTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUF2QlI7O0FBMEJJO0VBQ0kseUNBQUE7QUF2QlI7O0FBMEJJLFNBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBdkJSOztBQTBCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksY0FBQTtBQXZCUjs7QUEwQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXZCUjs7QUEwQkkscUJBQUE7QUFDQTtFQUNJLGFBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksZ0JBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBdkJSOztBQTJCSSxtQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBeEJSOztBQTJCSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQXhCUjs7QUEyQkk7RUFDSSwyQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXhCUjs7QUEyQkksb0JBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQXhCUjs7QUEyQkk7RUFDSSwyQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBeEJSOztBQTJCSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBeEJSOztBQTJCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBeEJSOztBQTJCSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXhCUjs7QUEyQkk7RUFDSSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBeEJSOztBQTJCSSxrQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBeEJSOztBQTJCSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksMkJBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFFBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksY0FBQTtBQXhCUjs7QUEyQkk7RUFDSSxjQUFBO0FBeEJSOztBQTJCSSxtQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXhCUjs7QUEyQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBeEJSOztBQTJCSTtFQUNJLGdCQUFBO0FBeEJSOztBQTJCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBeEJSOztBQTJCSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBeEJSOztBQTJCSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBeEJSOztBQTJCSSxZQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXhCUjs7QUEyQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQXhCUjs7QUEyQkk7RUFDSSxjQUFBO0FBeEJSOztBQTJCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZUFBQTtBQXhCUjs7QUEyQkksMkJBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG9CQUFBO0VBeEJWO0VBMkJNO0lBQ0kscUNBQUE7RUF6QlY7RUE0Qk07SUFDSSxxQ0FBQTtFQTFCVjtBQUNGO0FBOEJJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBNUJSOztBQStCSTtFQUNJLGtCQUFBO0FBNUJSIiwic291cmNlc0NvbnRlbnQiOlsiICAgICRwcmltYXJ5OiAjNkM1Q0U3O1xuICAgICRwcmltYXJ5LWxpZ2h0OiAjQTI5QkZFO1xuICAgICRwcmltYXJ5LWRhcms6ICM1NjQ5QzA7XG4gICAgJHN1Y2Nlc3M6ICMwMEI4OTQ7XG4gICAgJGRhbmdlcjogI0ZGNzY3NTtcbiAgICAkd2FybmluZzogI0ZEQ0I2RTtcbiAgICAkdGV4dDogIzJEMzQzNjtcbiAgICAkdGV4dC1saWdodDogIzYzNkU3MjtcbiAgICAkYmc6ICNGNUY2RkE7XG4gICAgJGNhcmQtYmc6ICNGRkZGRkY7XG4gICAgJHNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgJHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuXG4gICAgLyogRGFyayBtb2RlIHZhcmlhYmxlcyAqL1xuICAgICRkYXJrLWJnOiAjMUExQTJFO1xuICAgICRkYXJrLWNhcmQ6ICMxNjIxM0U7XG4gICAgJGRhcmstdGV4dDogI0U2RTZFNjtcbiAgICAkZGFyay10ZXh0LWxpZ2h0OiAjQjhCOEI4O1xuXG5cblxuXG5cbiAgICAucGhvbmUtc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDkyLCAyMzEsIDAuMSk7XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogJHRleHQ7XG4gICAgfVxuXG5cbiAgICAvKiBQcm9maWxlIGhlYWRlciAqL1xuICAgIC5wcm9maWxlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICAgIH1cblxuICAgIC5wcm9maWxlLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICgkY2FyZC1iZyk7XG4gICAgfVxuXG4gICAgLmVkaXQtYXZhdGFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJHByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogKCR0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuZWRpdC1hdmF0YXI6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5wcm9maWxlLXVzZXJuYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogKCR0ZXh0LWxpZ2h0KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAucHJvZmlsZS1iaW8ge1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgIC5wcm9maWxlLXN0YXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuc3RhdC1pdGVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgLnN0YXQtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAoJHRyYW5zaXRpb24pO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgkcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJHByaW1hcnktZGFyayk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAuYnRuLW91dGxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICgkcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICgkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLmJ0bi1vdXRsaW5lOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDkyLCAyMzEsIDAuMSk7XG4gICAgfVxuXG4gICAgLyogVGFicyAqL1xuICAgIC50YWJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAudGFiIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICgkdGV4dC1saWdodCk7XG4gICAgICAgIHRyYW5zaXRpb246ICgkdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLnRhYi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAudGFiLmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCRwcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgfVxuXG4gICAgLyogQ29udGVudCBzZWN0aW9ucyAqL1xuICAgIC50YWItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnRhYi1jb250ZW50IC5xdWl6LWNhcmQge1xuICAgICAgICBhbmltYXRpb246IHVuc2V0O1xuICAgIH1cblxuICAgIC50YWItY29udGVudC5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTglO1xuICAgIH1cblxuXG4gICAgLyogQmFkZ2VzIHNlY3Rpb24gKi9cbiAgICAuYmFkZ2VzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuYmFkZ2UtY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgkY2FyZC1iZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogKCR0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuYmFkZ2UtY2FyZDpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB9XG5cbiAgICAuYmFkZ2UtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICgkcHJpbWFyeSksICgkcHJpbWFyeS1saWdodCkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuYmFkZ2UtbmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuYmFkZ2UtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgIC8qIFF1aXp6ZXMgc2VjdGlvbiAqL1xuICAgIC5xdWl6LWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJGNhcmQtYmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAoJHRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5xdWl6LWl0ZW06aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgfVxuXG4gICAgLnF1aXotaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIC5xdWl6LXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5xdWl6LWNhdGVnb3J5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDkyLCAyMzEsIDAuMSk7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG4gICAgLnF1aXotbWV0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogKCR0ZXh0LWxpZ2h0KTtcbiAgICB9XG5cbiAgICAucXVpei1tZXRhLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnF1aXotYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgIC5xdWl6LWFjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAoJHRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5xdWl6LWFjdGlvbi5lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODQsIDE0OCwgMC4xKTtcbiAgICAgICAgY29sb3I6ICgkc3VjY2Vzcyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cblxuICAgIC5xdWl6LWFjdGlvbi5kZWxldGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTE4LCAxMTcsIDAuMSk7XG4gICAgICAgIGNvbG9yOiAoJGRhbmdlcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cblxuICAgIC8qIFN0YXRzIHNlY3Rpb24gKi9cbiAgICAuc3RhdHMtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuc3RhdC1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCRjYXJkLWJnKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogKCR0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuc3RhdC1jYXJkOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIH1cblxuICAgIC5zdGF0LWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGdhcDogNnB4O1xuICAgIH1cblxuICAgIC5zdGF0LWNhcmQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuc3RhdC1jYXJkLWNoYW5nZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLnBvc2l0aXZlIHtcbiAgICAgICAgY29sb3I6ICgkc3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgLm5lZ2F0aXZlIHtcbiAgICAgICAgY29sb3I6ICgkZGFuZ2VyKTtcbiAgICB9XG5cbiAgICAvKiBQcm9ncmVzcyBjaGFydCAqL1xuICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJGNhcmQtYmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtbGV2ZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAoJHByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDkyLCAyMzEsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICgkcHJpbWFyeSksICgkcHJpbWFyeS1saWdodCkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgIC8qIFRhYiBiYXIgKi9cbiAgICAudGFiLWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCRjYXJkLWJnKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiA0MTRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgfVxuXG4gICAgLnRhYi1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIGNvbG9yOiAoJHRleHQtbGlnaHQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2l0aW9uOiAoJHRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC50YWItaXRlbS5hY3RpdmUge1xuICAgICAgICBjb2xvcjogKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAudGFiLWl0ZW0uYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJHByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgLnBob25lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWRnZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHMtZ3JpZCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAuZGlmZmljdWx0eS1iYWRnZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIycHg7XG4gICAgfVxuXG4gICAgLnBoLWl0ZW0gPiAqe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOCU7XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8064:
/*!***************************************!*\
  !*** ./src/app/quiz-guard.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizGuardService: () => (/* binding */ QuizGuardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _QuizGuardService;


class QuizGuardService {
  constructor() {
    this.routeChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  canDeactivate(component) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  get routeChange$() {
    return this.routeChangeSubject.asObservable();
  }
}
_QuizGuardService = QuizGuardService;
_QuizGuardService.ɵfac = function QuizGuardService_Factory(t) {
  return new (t || _QuizGuardService)();
};
_QuizGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _QuizGuardService,
  factory: _QuizGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4880:
/*!***************************************!*\
  !*** ./src/app/quizes/quizes.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizesPage: () => (/* binding */ QuizesPage)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ 7300);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _QuizesPage;












const _c0 = ["*"];
function QuizesPage_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadInitialData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuizesPage_div_5_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_div_5_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.searchQuery = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterQuizzes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuizesPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuizesPage_div_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function QuizesPage_div_5_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterQuizzes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, QuizesPage_div_5_i_3_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
  }
}
function QuizesPage_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_div_6_div_1_Template_div_click_0_listener() {
      const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectCategory(category_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.selectedCategory === category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](category_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r6.name);
  }
}
function QuizesPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuizesPage_div_6_div_1_Template, 5, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_ng_container_7_ng_container_1_div_1_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.verifyQuiz(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Revise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_ng_container_7_ng_container_1_div_1_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.verifyQuiz(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_ng_container_7_ng_container_1_div_1_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.BeginQuiz(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Begin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_ng_container_7_ng_container_1_div_1_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.startQuiz(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_ng_container_7_ng_container_1_div_1_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const quiz_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.completeQuizByHost(quiz_r8._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuizesPage_ng_container_7_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 29)(8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 33)(16, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 29)(23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, QuizesPage_ng_container_7_ng_container_1_div_1_button_28_Template, 4, 0, "button", 38)(29, QuizesPage_ng_container_7_ng_container_1_div_1_button_29_Template, 4, 0, "button", 38)(30, QuizesPage_ng_container_7_ng_container_1_div_1_button_30_Template, 4, 0, "button", 39)(31, QuizesPage_ng_container_7_ng_container_1_div_1_button_31_Template, 4, 0, "button", 39)(32, QuizesPage_ng_container_7_ng_container_1_div_1_button_32_Template, 4, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quiz_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("waiting", quiz_r8.status == "waiting")("live", quiz_r8.status == "in-progress")("completed", quiz_r8.status == "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quiz_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 17, quiz_r8.estimatedTime / 60, "1.2-2"), " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.totalQuestions, " Qs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quiz_r8.totalPoints, " XP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role == "user" && (quiz_r8.status == "waiting" || quiz_r8.status == "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role != "user" && (quiz_r8.status == "waiting" || quiz_r8.status == "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role != "user" && !quiz_r8.isLive && quiz_r8.status == "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role != "user" && quiz_r8.isLive && quiz_r8.status == "waiting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.role != "user" && quiz_r8.isLive && quiz_r8.status == "in-progress");
  }
}
function QuizesPage_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuizesPage_ng_container_7_ng_container_1_div_1_Template, 33, 20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", quizzes_r13)("ngForTrackBy", ctx_r1.trackByQuizId);
  }
}
function QuizesPage_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 44);
  }
}
function QuizesPage_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuizesPage_ng_container_7_ng_container_1_Template, 2, 2, "ng-container", 22)(2, QuizesPage_ng_container_7_ng_template_2_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const quizzes_r13 = ctx.ngIf;
    const noapublishedQuizzes_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quizzes_r13.length > 0)("ngIfElse", noapublishedQuizzes_r14);
  }
}
class QuizesPage {
  set searchQueryData(data) {
    if (data.searchQuery || data.selectedCategory) {
      this.searchQuery = data.searchQuery;
      this.selectedCategory = data.selectedCategory;
      this.filterQuizzes();
    }
  }
  constructor(quizService, router, sanitizer, SocketService, dashboardService) {
    this.quizService = quizService;
    this.router = router;
    this.sanitizer = sanitizer;
    this.SocketService = SocketService;
    this.dashboardService = dashboardService;
    this.ParentInjected = false;
    this.handleRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isLoadingQuizzes = false;
    this.openModel = false;
    // Filter properties
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.categories = [{
      id: 'all',
      name: 'All',
      icon: 'fas fa-layer-group'
    }, {
      id: 'math',
      name: 'Math',
      icon: 'fas fa-calculator'
    }, {
      id: 'science',
      name: 'Science',
      icon: 'fas fa-flask'
    }, {
      id: 'literature',
      name: 'Literature',
      icon: 'fas fa-book'
    }, {
      id: 'geography',
      name: 'Geography',
      icon: 'fas fa-globe-americas'
    }, {
      id: 'history',
      name: 'History',
      icon: 'fas fa-history'
    }];
    this.publishedQuizes$ = this.quizService.getPublishedQuizes$;
    this.filteredQuizzes$ = this.publishedQuizes$;
  }
  get currentUser() {
    return this.dashboardService.getUser();
  }
  ngOnInit() {
    this.loadInitialData();
    this.quizService.isQuizesRefreshed.subscribe(data => {
      if (data) {
        this.loadInitialData();
      }
    });
  }
  // Apply both search and category filters
  applyFilters(quizzes) {
    // Apply category filter
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      return quizzes.filter(quiz => {
        var _quiz$category;
        return ((_quiz$category = quiz.category) === null || _quiz$category === void 0 ? void 0 : _quiz$category.toLowerCase()) === this.selectedCategory.toLowerCase();
      });
    }
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      return quizzes.filter(quiz => quiz.title.toLowerCase().includes(query));
    }
    return quizzes;
  }
  // Filter quizzes based on current criteria
  filterQuizzes() {
    this.publishedQuizes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(quizzes => this.applyFilters(quizzes))).subscribe(filtered => {
      // This will trigger the async pipe update
      this.filteredQuizzes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(filtered);
    });
  }
  // Select category and filter
  selectCategory(categoryId) {
    this.selectedCategory = categoryId;
    this.filterQuizzes();
  }
  loadInitialData() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.handleRefresh.emit(true);
      _this.isLoadingQuizzes = true;
      setTimeout(() => {
        _this.isLoadingQuizzes = false;
      }, 2000);
      yield _this.quizService.getPublishedQuiz().toPromise();
    })();
  }
  getQuizParticipant(quizId) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.SocketService.authDataSource.next(null);
      yield _this2.quizService.getQuizParticipant(quizId).toPromise();
    })();
  }
  makeSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  avatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null;
  }
  joinQuiz(quizId) {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.quizService.joinQuiz(quizId).toPromise();
    })();
  }
  playQuiz(quizId) {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quiz start logic
      _this4.SocketService.authDataSource.next(null);
      _this4.router.navigate(['/ongoing'], {
        replaceUrl: true,
        queryParams: {
          id: quizId
        }
      });
    })();
  }
  // TrackBy functions for ngFor performance
  trackByQuizId(index, quiz) {
    return quiz._id;
  }
  showDialog() {
    this.openModel = true;
  }
  closeDialog() {
    let AuthData = {
      token: localStorage.getItem('token') || '',
      user: JSON.parse(localStorage.getItem('user') || '{}')
    };
    this.SocketService.authDataSource.next(AuthData);
    this.openModel = false;
  }
  handleAvatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null; // Prevent infinite loop
  }
  BeginQuiz(quizId) {
    var _this5 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quiz start logic
      yield _this5.quizService.BeginQuiz(quizId).toPromise();
    })();
  }
  startQuiz(quizId) {
    var _this6 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quiz start logic
      yield _this6.quizService.startQuiz(quizId).toPromise();
    })();
  }
  completeQuizByHost(quizId) {
    var _this7 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quiz start logic
      yield _this7.quizService.completeQuizByHost(quizId).toPromise();
    })();
  }
  verifyQuiz(quizId) {
    this.router.navigate(['/verify-quiz'], {
      queryParams: {
        id: quizId
      }
    });
  }
  trackByUserId(index, user) {
    return user.userId;
  }
  ngOnDestroy() {
    var _this8 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.quizService.getPublishedQuiz(3).toPromise();
    })();
  }
}
_QuizesPage = QuizesPage;
_QuizesPage.ɵfac = function QuizesPage_Factory(t) {
  return new (t || _QuizesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_1__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService));
};
_QuizesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _QuizesPage,
  selectors: [["app-quizes"]],
  inputs: {
    publishedQuizes$: "publishedQuizes$",
    ParentInjected: "ParentInjected",
    searchQueryData: "searchQueryData"
  },
  outputs: {
    handleRefresh: "handleRefresh"
  },
  ngContentSelectors: _c0,
  decls: 15,
  vars: 11,
  consts: [["noapublishedQuizzes", ""], [1, "section-title"], ["routerLink", "/quizes", 3, "click", 4, "ngIf"], ["class", "search-bar", 4, "ngIf"], ["class", "category-scroll skeleton-value mb-28", 4, "ngIf"], [4, "ngIf"], [1, "floating-action", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 4v6h-6"], ["d", "M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["routerLink", "/quizes", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "search-bar"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search quizzes, topics...", 3, "ngModelChange", "input", "ngModel"], ["class", "fas fa-close", 3, "click", 4, "ngIf"], [1, "fas", "fa-close", 3, "click"], [1, "category-scroll", "skeleton-value", "mb-28"], ["class", "category-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "icon-wrapper"], [4, "ngIf", "ngIfElse"], ["class", "quiz-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "quiz-card"], [1, "quiz-header"], [1, "quiz-title"], [1, "status-badge-container"], [1, "quiz-description"], [1, "quiz-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V12L15 15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 10H8.01M12 10H12.01M16 10H16.01M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "fas", "fa-bolt"], [1, "quiz-actions"], ["class", "action-btn reject-btn", 3, "click", 4, "ngIf"], ["class", "action-btn approve-btn", 3, "click", 4, "ngIf"], [1, "action-btn", "reject-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "approve-btn", 3, "click"], ["src", "assets/noQuizes.svg", "alt", "", "srcset", "", "loading", "eager"]],
  template: function QuizesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Upcoming Quizzes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, QuizesPage_a_4_Template, 3, 0, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, QuizesPage_div_5_Template, 4, 2, "div", 3)(6, QuizesPage_div_6_Template, 2, 1, "div", 4)(7, QuizesPage_ng_container_7_Template, 4, 2, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizesPage_Template_div_click_10_listener() {
        return ctx.loadInitialData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "path", 8)(13, "path", 9)(14, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("section ", ctx.ParentInjected && "mb", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, ctx.filteredQuizzes$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("loading", ctx.isLoadingQuizzes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
  styles: [".section[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n\n.mb-28[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary); \n\n  text-decoration: none;\n  font-size: 16px;\n  margin-right: 16px;\n}\n\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 14px;\n}\n\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcXVpemVzL3F1aXplcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBLEVBQUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5zZWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgfVxuXG5cbi5tYi0yOHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuICBcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmJhY2stYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgLyogVXNlIHlvdXIgdGhlbWUgY29sb3IgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxuICBcbiAgLmJhY2stYnV0dG9uIGkge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7300:
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketService: () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ 8654);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.service */ 2503);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 197);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _SocketService;









const MAX_RECONNECTION_ATTEMPTS = 5;
const BASE_RECONNECTION_DELAY = 1000;
const MAX_RECONNECTION_DELAY = 10000;
class SocketService {
  constructor(router, toasterService, http, inAppBrowser, platform, modalController) {
    this.router = router;
    this.toasterService = toasterService;
    this.http = http;
    this.inAppBrowser = inAppBrowser;
    this.platform = platform;
    this.modalController = modalController;
    this.authDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    this.loginDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    this.otpDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    this.authErrorSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('disconnected');
    this.connectionAttempts = 0;
    this.urlSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1); // New subject for URL events
    this.authData$ = this.authDataSource.asObservable();
    this.loginData$ = this.loginDataSource.asObservable();
    this.otpSuccess$ = this.otpDataSource.asObservable();
    this.connectionState = this.connectionState$.asObservable();
    this.authError$ = this.authErrorSource.asObservable();
    this.url$ = this.urlSubject.asObservable(); // Expose URL observable
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.initializeSocket(localStorage.getItem('token') || undefined);
  }
  ngOnDestroy() {
    this.cleanupSocket();
    this.cleanup();
  }
  initializeSocket(token) {
    try {
      this.connectionState$.next('connecting');
      this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, {
        transports: ['websocket'],
        reconnection: true,
        autoConnect: true,
        auth: token ? {
          token
        } : undefined,
        reconnectionDelay: this.calculateReconnectionDelay(),
        reconnectionAttempts: MAX_RECONNECTION_ATTEMPTS,
        forceNew: true // Ensure new connection instance
      });
      this.setupConnectionMonitoring();
      this.registerAuthEvents();
      this.registerUrlEvents(); // Register URL-specific events
    } catch (error) {
      console.error('Socket initialization error:', error);
      this.connectionState$.next('error');
    }
  }
  registerUrlEvents() {
    this.socket.on('auth:google:url', data => {
      this.urlSubject.next(data); // Emit URL data
      this.openAuthUrl(data); // Also open URL if needed
    });
    this.socket.on('auth:facebook:url', data => {
      this.urlSubject.next(data); // Emit URL data
      this.openAuthUrl(data); // Also open URL if needed
    });
  }
  calculateReconnectionDelay() {
    const delay = Math.min(BASE_RECONNECTION_DELAY * Math.pow(2, this.connectionAttempts), MAX_RECONNECTION_DELAY);
    return delay + Math.random() * delay;
  }
  cleanupSocket() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
  setupConnectionMonitoring() {
    this.socket.on('connect', () => {
      this.connectionAttempts = 0;
      this.connectionState$.next('connected');
      console.log('Socket connected');
      if (localStorage.getItem('token')) {
        this.emit('quiz:all');
        this.emit('quiz:published', 3);
      }
    });
    this.socket.on('disconnect', reason => {
      var _this$socket;
      this.handleDisconnect(reason);
      if (!((_this$socket = this.socket) !== null && _this$socket !== void 0 && _this$socket.connected)) {
        this.cleanupSocket();
        this.socket.auth = {
          token: localStorage.getItem('token') || undefined
        };
        this.socket.connect();
      }
    });
    this.socket.on('connect_error', err => {
      this.handleConnectionError(err);
    });
    this.socket.on('reconnect_attempt', () => {
      this.connectionAttempts++;
      this.connectionState$.next('reconnecting');
      console.log(`Reconnection attempt ${this.connectionAttempts}`);
    });
    this.socket.on('reconnect_failed', () => {
      this.connectionState$.next('error');
      this.showToast('Connection failed. Please refresh the page.');
    });
  }
  handleDisconnect(reason) {
    console.log(`Disconnected: ${reason}`);
    this.connectionState$.next('disconnected');
    if (reason === 'io server disconnect') {
      this.handleUnauthorized();
    }
  }
  handleConnectionError(err) {
    console.error('Connection error:', err);
    this.connectionState$.next('error');
    if (this.connectionAttempts < MAX_RECONNECTION_ATTEMPTS) {
      setTimeout(() => this.retryConnection(), this.calculateReconnectionDelay());
    }
  }
  registerAuthEvents() {
    const authEvents = {
      'auth:login:success': this.handleLoginSuccess.bind(this),
      'auth:register:success': this.handleAuthSuccess.bind(this),
      'auth:google:success': this.handleAuthSuccess.bind(this),
      'auth:facebook:success': this.handleAuthSuccess.bind(this),
      'auth:otp:verify:success': this.handleOtpSuccess.bind(this),
      'auth:google:callback': this.handleGoogleCallback.bind(this),
      'auth:facebook:callback': this.handleFacebookCallback.bind(this),
      'auth:error': this.handleAuthError.bind(this),
      'receiveLogin': data => {
        localStorage.setItem('token', data.token);
      }
    };
    Object.entries(authEvents).forEach(([event, handler]) => {
      this.socket.on(event, handler);
    });
  }
  handleAuthError(error) {
    this.authErrorSource.next(error.message);
  }
  handleAuthSuccess(data) {
    this.persistAuthData(data);
    this.authDataSource.next(data);
  }
  handleLoginSuccess(data) {
    this.loginDataSource.next(data);
  }
  handleOtpSuccess(data) {
    this.persistAuthData(data);
    this.otpDataSource.next(data);
    this.authDataSource.next(data);
  }
  persistAuthData(data) {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      _this.cleanupSocket();
      _this.socket.auth = {
        token: data.token || localStorage.getItem('token')
      };
      _this.socket.connect();
      _this.router.navigate(['/home']);
      yield _this.closeAllModals();
    })();
  }
  // Add this method to your component
  closeAllModals() {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Method 1: Close all modals using ModalController (recommended)
        const topModal = yield _this2.modalController.getTop();
        if (topModal) {
          yield _this2.modalController.dismiss();
          // Recursively close all modals
          yield _this2.closeAllModals();
        }
      } catch (error) {
        console.error('Error closing modals:', error);
      }
    })();
  }
  showToast(message, duration = 3000, position = 'bottom', color = 'dark') {
    this.toasterService.presentToast(message, duration, position, color);
  }
  retryConnection(token) {
    var _this$socket2;
    this.connectionState$.next('connecting');
    if (!((_this$socket2 = this.socket) !== null && _this$socket2 !== void 0 && _this$socket2.connected)) {
      this.cleanupSocket();
      this.socket.auth = {
        token: token || localStorage.getItem('token')
      };
      this.socket.connect();
    }
  }
  logout() {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // 1. Get user data before clearing storage
        let userId = '';
        try {
          const userStr = localStorage.getItem('user');
          if (userStr) {
            const user = JSON.parse(userStr);
            userId = user._id || '';
          }
        } catch (parseError) {
          console.warn('Error parsing user data:', parseError);
        }
        // 2. Close all toasters first
        _this3.toasterService.dismiss();
        // 3. Close all open modals (if you have modalController)
        yield _this3.closeAllModals();
        // 4. Clear auth data source properly
        _this3.cleanup();
        // 5. Emit logout event if user ID exists
        if (userId) {
          try {
            _this3.emit('auth:logout', userId);
          } catch (emitError) {
            console.error('Logout emit error:', emitError);
          }
        }
      } catch (error) {
        localStorage.clear();
        _this3.cleanup();
        console.error('Logout error:', error);
      } finally {
        localStorage.clear();
        _this3.cleanup();
        _this3.router.navigate(['/login']);
        _this3.showToast('You have been logged out');
      }
    })();
  }
  cleanup() {
    // Complete all subjects
    this.authDataSource.complete();
    this.loginDataSource.complete();
    this.otpDataSource.complete();
    this.authErrorSource.complete();
    this.connectionState$.complete();
    this.urlSubject.complete();
    // Complete the destroy subject
    this.destroy$.next();
    this.destroy$.complete();
    // Reset connection attempts
    this.connectionAttempts = 0;
  }
  /**
   * Individual subject cleanup methods (optional)
   */
  cleanupAuthData() {
    this.authDataSource.complete();
    this.authDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
  }
  cleanupLoginData() {
    this.loginDataSource.complete();
    this.loginDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
  }
  cleanupOtpData() {
    this.otpDataSource.complete();
    this.otpDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
  }
  cleanupAuthErrors() {
    this.authErrorSource.complete();
    this.authErrorSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
  }
  cleanupConnectionState() {
    this.connectionState$.complete();
    this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('disconnected');
  }
  cleanupUrlSubject() {
    this.urlSubject.complete();
    this.urlSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
  }
  resetAllSubjects() {
    this.cleanupAuthData();
    this.cleanupLoginData();
    this.cleanupOtpData();
    this.cleanupAuthErrors();
    this.cleanupConnectionState();
    this.cleanupUrlSubject();
    this.connectionAttempts = 0;
  }
  handleUnauthorized() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.showToast('Session expired. Please login again.', 3000, 'bottom', 'warning');
  }
  // Authentication methods
  register(payload) {
    this.emit('auth:register', payload);
  }
  login(payload) {
    var _this$socket3;
    if ((_this$socket3 = this.socket) !== null && _this$socket3 !== void 0 && _this$socket3.connected) {
      this.emit('auth:login', payload);
    } else {
      this.httpLogin(payload).subscribe(data => this.handleLoginSuccess(data));
    }
  }
  httpLogin(email) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}auth/login`, {
      email
    });
  }
  httpverifyOTP(email, otp, verificationToken) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}auth/verifyOtpAndLogin`, {
      email,
      otp,
      verificationToken
    });
  }
  httpGoogleLogin(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}auth/google/login`, payload);
  }
  httpFacebookLogin(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}auth/facebook/login`, payload);
  }
  initiateGoogleLogin() {
    var _this$socket4;
    if ((_this$socket4 = this.socket) !== null && _this$socket4 !== void 0 && _this$socket4.connected) {
      this.emit('auth:google:login');
    } else {
      this.httpGoogleLogin('payload').subscribe(data => {
        this.urlSubject.next(data); // Emit URL data
        this.openAuthUrl(data);
      });
    }
  }
  handleGoogleCallback(code, state) {
    this.emit('auth:google:callback', code, state);
  }
  initiateFacebookLogin() {
    var _this$socket5;
    if ((_this$socket5 = this.socket) !== null && _this$socket5 !== void 0 && _this$socket5.connected) {
      this.emit('auth:facebook:login');
    } else {
      this.httpFacebookLogin('payload').subscribe(data => {
        this.urlSubject.next(data); // Emit URL data
        this.openAuthUrl(data);
      });
    }
  }
  handleFacebookCallback(code, state) {
    this.emit('auth:facebook:callback', code, state);
  }
  sendOTP(email) {
    this.emit('auth:otp:send', email);
  }
  verifyOTP(email, otp) {
    this.emit('auth:otp:verify', email, otp);
  }
  verifyLoginOTP(email, otp, verificationToken) {
    var _this$socket6;
    if ((_this$socket6 = this.socket) !== null && _this$socket6 !== void 0 && _this$socket6.connected) {
      this.emit('auth:verify:loginOTP', email, otp, verificationToken);
    } else {
      this.httpverifyOTP(email, otp, verificationToken).subscribe(data => this.handleOtpSuccess(data));
    }
  }
  // Socket utility methods
  fromEvent(eventName) {
    try {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.socket, eventName);
    } catch (error) {
      console.error(`Error listening to event ${eventName}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)();
    }
  }
  emit(eventName, ...args) {
    var _this$socket7;
    if ((_this$socket7 = this.socket) !== null && _this$socket7 !== void 0 && _this$socket7.connected) {
      this.socket.emit(eventName, ...args);
    } else {
      console.warn(`Attempted to emit ${eventName} while disconnected`);
      this.showToast('Connection lost. Trying to reconnect...', 2000, 'bottom', 'warning');
      this.retryConnection();
    }
  }
  openAuthUrl(data) {
    try {
      if (!this.platform.is('cordova')) {
        window.open(data.url, '_blank');
        return;
      }
      this.inAppBrowser.create(data.url, '_blank');
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  }
  connect(token) {
    this.cleanupSocket();
    this.socket.auth = {
      token: token || localStorage.getItem('token')
    };
    this.socket.connect();
  }
  disconnect() {
    var _this$socket8;
    (_this$socket8 = this.socket) === null || _this$socket8 === void 0 || _this$socket8.disconnect();
  }
}
_SocketService = SocketService;
_SocketService.ɵfac = function SocketService_Factory(t) {
  return new (t || _SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController));
};
_SocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: _SocketService,
  factory: _SocketService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2503:
/*!************************************!*\
  !*** ./src/app/toaster.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToasterService: () => (/* binding */ ToasterService)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _ToasterService;


class ToasterService {
  constructor(toastCtrl) {
    this.toastCtrl = toastCtrl;
  }
  presentToast(_x) {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, duration = 1000, position, color) {
      const toast = yield _this.toastCtrl.create({
        message,
        duration,
        position,
        color
      });
      toast.present();
    }).apply(this, arguments);
  }
  success(message) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastCtrl.create({
        message,
        duration: 1000,
        position: 'top'
      });
      toast.present();
    })();
  }
  error(message) {
    var _this3 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    })();
  }
  dismiss() {
    var _this4 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastCtrl.dismiss();
    })();
  }
}
_ToasterService = ToasterService;
_ToasterService.ɵfac = function ToasterService_Factory(t) {
  return new (t || _ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController));
};
_ToasterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _ToasterService,
  factory: _ToasterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1552:
/*!***********************************************!*\
  !*** ./src/app/user-setup/user-setup.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSetupPage: () => (/* binding */ UserSetupPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader.service */ 1118);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _UserSetupPage;




class UserSetupPage {
  constructor(loader) {
    this.loader = loader;
  }
  ngOnInit() {}
}
_UserSetupPage = UserSetupPage;
_UserSetupPage.ɵfac = function UserSetupPage_Factory(t) {
  return new (t || _UserSetupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
};
_UserSetupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _UserSetupPage,
  selectors: [["app-user-setup"]],
  decls: 36,
  vars: 1,
  consts: [[3, "fullscreen"], [1, "screen-container"], [1, "form-card"], [1, "subtext"], [1, "input-group", "select-wrapper"], ["for", "org-type"], ["id", "org-type"], ["value", "", "disabled", "", "selected", ""], ["value", "individual"], ["value", "business"], ["value", "education"], ["for", "role-type"], ["id", "role-type"], ["value", "admin"], ["value", "student"], [1, "primary-btn"], [1, "footer"], ["href", "#", 1, "footer-link"]],
  template: function UserSetupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to Quiz Platform");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Choose an organization to join\u2014your quiz\u2011master journey starts here. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Organization type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 6)(11, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select organization...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Individual");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4)(20, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Your role");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 12)(23, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select role...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16)(32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Signed in as ajitrajbhar.careermail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Use a different account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent],
  styles: ["@charset \"UTF-8\";\n.screen-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 8px;\n  padding: 32px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  text-align: center;\n}\n\n.subtext[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6e6e80;\n  margin-bottom: 24px;\n  line-height: 1.4;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d9d9e3;\n  border-radius: 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n\n\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 100%;\n  padding: 12px;\n  padding-right: 36px; \n\n  border: 1px solid #d9d9e3;\n  border-radius: 10px;\n  font-size: 14px;\n  background-color: #fff;\n  box-sizing: border-box;\n}\n\n\n\n.select-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\u25BE\";\n  position: absolute;\n  top: 68%;\n  right: 12px; \n\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 14px;\n  color: #666;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #10a37f;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background-color: #5649C0;\n  color: white;\n  border: none;\n  padding: 16px 20px 16px 50px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6C5CE7;\n}\n\n.legal-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6e6e80;\n  text-align: center;\n  margin: 24px 0;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #d9d9e3;\n  margin: 24px 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #d9d9e3;\n  text-align: center;\n  font-size: 14px;\n}\n\n.footer-link[_ngcontent-%COMP%] {\n  color: #10a37f;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.footer-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci1zZXR1cC91c2VyLXNldHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFLCtCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBLEVBQUEsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRSwwQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUEsRUFBQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zY3JlZW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMzJweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VidGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNmU2ZTgwO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZWxlY3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAvKiBIaWRlIGRlZmF1bHQgYnJvd3NlciBhcnJvdyAqL1xuICAuc2VsZWN0LXdyYXBwZXIgc2VsZWN0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4OyAvKiByb29tIGZvciBjdXN0b20gYXJyb3cgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLyogQWRkIHlvdXIgY3VzdG9tIGFycm93ICovXG4gIC5zZWxlY3Qtd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiw6LClsK+XCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjglO1xuICAgIHJpZ2h0OiAxMnB4OyAvKiBzaGlmdCBsZWZ0IGZyb20gcmlnaHQgZWRnZSAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cblxuICBcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTBhMzdmO1xufVxuXG4ucHJpbWFyeS1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NDlDMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4ucHJpbWFyeS1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QzVDRTc7XG59XG5cbi5sZWdhbC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2ZTZlODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjRweCAwO1xufVxuXG4uZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDllMztcbiAgICBtYXJnaW46IDI0cHggMDtcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDllMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICAgIGNvbG9yOiAjMTBhMzdmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9vdGVyLWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6300:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 8651);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _UsersComponent;







function UsersComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.loadLeaderboardData(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " See all rankings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_container_5_div_1_div_2_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fas fa-crown crown ", "crown-" + (i_r4 + 1), "");
  }
}
function UsersComponent_ng_container_5_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11)(4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function UsersComponent_ng_container_5_div_1_div_2_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handleAvatarError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UsersComponent_ng_container_5_div_1_div_2_i_9_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("rank-1", i_r4 === 0)("rank-2", i_r4 === 1)("rank-3", i_r4 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", user_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.userId == ctx_r1.currentUser._id ? "You" : user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", user_r5.points, " pts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r4 < 2);
  }
}
function UsersComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UsersComponent_ng_container_5_div_1_div_2_Template, 10, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const leaderboardUsers_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", leaderboardUsers_r6)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function UsersComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
}
function UsersComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UsersComponent_ng_container_5_div_1_Template, 3, 2, "div", 4)(2, UsersComponent_ng_container_5_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const leaderboardUsers_r6 = ctx.ngIf;
    const emptyLeaderboard_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", leaderboardUsers_r6.length > 0)("ngIfElse", emptyLeaderboard_r7);
  }
}
function UsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 20)(4, "div", 20)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
class UsersComponent {
  constructor(dashboardService, quizService, sanitizer, router) {
    this.dashboardService = dashboardService;
    this.quizService = quizService;
    this.sanitizer = sanitizer;
    this.router = router;
    this.ParentInjected = false;
    this.leaderboardUsers$ = this.dashboardService.leaderboard$;
  }
  get currentUser() {
    return this.dashboardService.getUser();
  }
  ngOnInit() {
    let isLimitRoute = ['/home'].includes(this.router.url);
    this.loadLeaderboardData(isLimitRoute ? 3 : 0);
    this.quizService.isQuizesRefreshed.subscribe(data => {
      if (data) {
        this.loadLeaderboardData(3);
      }
    });
  }
  ngOnDestroy() {
    var _this = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.dashboardService.getLeaderboardUser(3).toPromise();
    })();
  }
  loadLeaderboardData(index) {
    var _this2 = this;
    return (0,_Users_ajeetrajbhar_Documents_QuizGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.dashboardService.getLeaderboardUser(index).toPromise();
    })();
  }
  makeSafeUrl(url) {
    if (!url) {
      return 'assets/user.png';
    }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  handleAvatarError(event) {
    const img = event.target;
    img.src = 'assets/user.png';
    img.onerror = null; // Prevent infinite loop
  }
  trackByUserId(index, user) {
    return user.userId;
  }
}
_UsersComponent = UsersComponent;
_UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || _UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_2__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _UsersComponent,
  selectors: [["app-users"]],
  inputs: {
    leaderboardUsers$: "leaderboardUsers$",
    ParentInjected: "ParentInjected"
  },
  decls: 9,
  vars: 7,
  consts: [["leaderboardLoading", ""], ["emptyLeaderboard", ""], [1, "section-title"], ["routerLink", "/users", "class", "see-all-link", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["routerLink", "/users", 1, "see-all-link", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "leaderboard"], ["class", "leaderboard-item", 3, "rank-1", "rank-2", "rank-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "leaderboard-item"], [1, "rank"], [1, "user-info"], ["crossorigin", "anonymous", 3, "error", "src"], [1, "name"], [1, "points"], [3, "class", 4, "ngIf"], ["src", "assets/noQuizes.svg", "alt", "", "srcset", "", "loading", "eager"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-row"], [1, "ph-col-12", "big"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Leaderboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UsersComponent_a_4_Template, 3, 0, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UsersComponent_ng_container_5_Template, 4, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UsersComponent_ng_template_7_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const leaderboardLoading_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.ParentInjected ? "section-n-padding" : "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ParentInjected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx.leaderboardUsers$))("ngIfElse", leaderboardLoading_r8);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n\n.header[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: white;\n  padding: 25px;\n  text-align: center;\n  border-radius: 10px 10px 0 0;\n  margin-bottom: 0;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n.see-all-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  transition: all 0.3s ease;\n  font-size: 14px;\n}\n\n.see-all-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n\n.leaderboard[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border-radius: 0 0 10px 10px;\n}\n\n.leaderboard-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n  margin-bottom: 10px;\n  border-radius: 15px;\n  background: #fff;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  position: relative;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: center;\n  color: #2c3e50;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 90px;\n}\n\n.points[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #28a745;\n}\n\n\n\n.rank-1[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], .crown-1[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n\n.rank-2[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], .crown-2[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.rank-3[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%], .crown-3[_ngcontent-%COMP%] {\n  color: #cd7f32;\n}\n\n\n\n.crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -11px;\n  left: 63px;\n  font-size: 24px;\n}\n\n.trophy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 95px;\n  transform: translateY(-50%);\n  font-size: 24px;\n  opacity: 0.2;\n}\n\n.rank-1[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #ffc107;\n  opacity: 0.4;\n}\n\n.rank-2[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #6c757d;\n  opacity: 0.4;\n}\n\n.rank-3[_ngcontent-%COMP%]   .trophy[_ngcontent-%COMP%] {\n  color: #cd7f32;\n  opacity: 0.4;\n}\n\n\n\n.ph-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 15px;\n}\n\n.ph-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ph-col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n\n.ph-col-12.big[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 5px;\n  background-color: #ced4da;\n  border-radius: 5px;\n  animation: _ngcontent-%COMP%_phAnimation 1.5s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_phAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBLDRCQUFBO0FBZUE7RUFDRSxjQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFnQkEsd0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkEsbUJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFiRjs7QUFnQkE7RUFDRTtJQUNFLFlBQUE7RUFiRjtFQWVBO0lBQ0UsWUFBQTtFQWJGO0VBZUE7SUFDRSxZQUFBO0VBYkY7QUFDRjtBQWdCQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUFkRjtFQWlCQTtJQUNFLGVBQUE7RUFmRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGVhZGVyYm9hcmQgU3R5bGVzICovXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2VlLWFsbC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zZWUtYWxsLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVhZGVyYm9hcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG4ubGVhZGVyYm9hcmQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJhbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4udXNlci1pbmZvIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDkwcHg7XG59XG5cbi5wb2ludHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG4vKiBTcGVjaWZpYyByYW5raW5nIHN0eWxlcyAqL1xuLy8gLnJhbmstMSB7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmY5ZTYgMCUsICNmZmVkYjggMTAwJSk7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmMxMDc7XG4vLyB9XG5cbi8vIC5yYW5rLTIge1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xuLy8gfVxuXG4vLyAucmFuay0zIHtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjBlNiAwJSwgI2VjZGNjOCAxMDAlKTtcbi8vIH1cblxuLnJhbmstMSAucmFuaywuY3Jvd24tMSB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuXG4ucmFuay0yIC5yYW5rLC5jcm93bi0yIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5yYW5rLTMgLnJhbmssLmNyb3duLTMge1xuICBjb2xvcjogI2NkN2YzMjtcbn1cblxuLyogRGVjb3JhdGl2ZSBlbGVtZW50cyAqL1xuLmNyb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICBsZWZ0OiA2M3B4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50cm9waHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogOTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnJhbmstMSAudHJvcGh5IHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnJhbmstMiAudHJvcGh5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnJhbmstMyAudHJvcGh5IHtcbiAgY29sb3I6ICNjZDdmMzI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyogTG9hZGluZyBzdGF0ZXMgKi9cbi5waC1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnBoLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBoLWNvbC0xMiB7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuXG4ucGgtY29sLTEyLmJpZyB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFuaW1hdGlvbjogcGhBbmltYXRpb24gMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcGhBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIHN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4744:
/*!******************************************************!*\
  !*** ./src/app/verify-quiz/verify-quiz.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyQuizComponent: () => (/* binding */ VerifyQuizComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _create_quizes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-quizes.service */ 3577);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toaster.service */ 2503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _VerifyQuizComponent;








const _c0 = a0 => ({
  "correct-answer": a0
});
function VerifyQuizComponent_div_1_div_24_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerifyQuizComponent_div_1_div_24_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.refreshQuestion(quiz_r3._id, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.getQuestionLoadingState(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.getQuestionLoadingState(i_r2) ? "Refreshing..." : "Refresh", " ");
  }
}
function VerifyQuizComponent_div_1_div_24_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r3.isCorrectAnswer(i_r2, option_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r5);
  }
}
function VerifyQuizComponent_div_1_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VerifyQuizComponent_div_1_div_24_div_5_div_4_Template, 4, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](question_r6.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", question_r6.options);
  }
}
function VerifyQuizComponent_div_1_div_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 37)(6, "div", 38)(7, "div", 39)(8, "div", 40)(9, "div", 41)(10, "div", 42)(11, "div", 43)(12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function VerifyQuizComponent_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VerifyQuizComponent_div_1_div_24_button_4_Template, 4, 2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VerifyQuizComponent_div_1_div_24_div_5_Template, 5, 2, "div", 21)(6, VerifyQuizComponent_div_1_div_24_div_6_Template, 13, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Question ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.getQuestionLoadingState(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.getQuestionLoadingState(i_r2));
  }
}
function VerifyQuizComponent_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerifyQuizComponent_div_1_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.rejectQuiz(quiz_r3._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerifyQuizComponent_div_1_div_25_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const quiz_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.approveQuiz(quiz_r3._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.rejecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.rejecting ? "Rejecting..." : "Reject", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.approving);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.approving ? "Approving..." : "Approve", " ");
  }
}
function VerifyQuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Questions Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, VerifyQuizComponent_div_1_div_24_Template, 7, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, VerifyQuizComponent_div_1_div_25_Template, 9, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quiz_r3 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 10, quiz_r3.estimatedTime / 60, "1.2-2"), " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", quiz_r3.totalQuestions, " questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", quiz_r3.totalPoints, " XP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", quiz_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r3.getDifficultyColor(quiz_r3.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 13, quiz_r3.difficulty), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](quiz_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", quiz_r3.questions)("ngForTrackBy", ctx_r3.trackByQuestionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", quiz_r3.approvalStatus == "pending");
  }
}
function VerifyQuizComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 37)(4, "div", 38)(5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 37)(8, "div", 38)(9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 37)(13, "div", 38)(14, "div", 39)(15, "div", 40)(16, "div", 41)(17, "div", 42)(18, "div", 43)(19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 37)(23, "div", 38)(24, "div", 39)(25, "div", 40)(26, "div", 41)(27, "div", 42)(28, "div", 43)(29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class VerifyQuizComponent {
  constructor(route, quizService, toasterService) {
    this.route = route;
    this.quizService = quizService;
    this.toasterService = toasterService;
    this.quizSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.quiz$ = this.quizSubject.asObservable();
    this.loadingStates = {};
    this.isLoading = true;
    this.rejecting = false;
    this.approving = false;
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.quizService.getQuiz(params['id'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(quiz => {
      this.quizSubject.next(quiz);
      this.isLoading = false;
      // Initialize loading states
      quiz.questions.forEach((_, index) => {
        this.loadingStates[index] = false;
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      this.isLoading = false;
      this.toasterService.error('Failed to load quiz');
      console.error('Error loading quiz', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  isCorrectAnswer(questionIndex, option) {
    var _this$quizSubject$val;
    const question = (_this$quizSubject$val = this.quizSubject.value) === null || _this$quizSubject$val === void 0 ? void 0 : _this$quizSubject$val.questions[questionIndex];
    return (question === null || question === void 0 ? void 0 : question.correctAnswer) === option;
  }
  getDifficultyColor(difficulty) {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'medium':
        return 'warning';
      case 'hard':
        return 'danger';
      default:
        return 'primary';
    }
  }
  refreshQuestion(quizId, index) {
    if (!quizId || this.loadingStates[index]) return;
    this.loadingStates[index] = true;
    this.quizService.generateNewQuestion(quizId, index).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(newQuestion => {
      const currentQuiz = this.quizSubject.value;
      if (currentQuiz) {
        const updatedQuestions = [...currentQuiz.questions];
        updatedQuestions[index] = newQuestion;
        this.quizSubject.next({
          ...currentQuiz,
          questions: updatedQuestions
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      this.toasterService.error('Failed to refresh question');
      console.error('Error refreshing question', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.loadingStates[index] = false;
    })).subscribe();
  }
  approveQuiz(quizId) {
    if (this.approving) return;
    this.approving = true;
    this.quizService.updateQuizStatus(quizId, 'approved').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.toasterService.success('Quiz Approved');
      // Refresh the quiz data after approval
      return this.quizService.getQuiz(quizId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(updatedQuiz => {
      this.quizSubject.next(updatedQuiz);
      this.approving = false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      this.approving = false;
      this.toasterService.error('Approval failed');
      console.error('Approval failed', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  rejectQuiz(quizId) {
    if (this.rejecting) return;
    this.rejecting = true;
    this.quizService.updateQuizStatus(quizId, 'rejected').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.toasterService.success('Quiz Rejected');
      // Refresh the quiz data after rejection
      return this.quizService.getQuiz(quizId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(updatedQuiz => {
      this.quizSubject.next(updatedQuiz);
      this.rejecting = false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      this.rejecting = false;
      this.toasterService.error('Rejection failed');
      console.error('Rejection failed', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  trackByQuestionId(index, question) {
    return question._id || index.toString();
  }
  getQuestionLoadingState(index) {
    return this.loadingStates[index] || false;
  }
}
_VerifyQuizComponent = VerifyQuizComponent;
_VerifyQuizComponent.ɵfac = function VerifyQuizComponent_Factory(t) {
  return new (t || _VerifyQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_create_quizes_service__WEBPACK_IMPORTED_MODULE_0__.CreateQuizesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService));
};
_VerifyQuizComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _VerifyQuizComponent,
  selectors: [["app-verify-quiz"]],
  decls: 5,
  vars: 5,
  consts: [["loading", ""], [1, "ion-padding", 3, "fullscreen"], ["class", "quiz-preview-container", 4, "ngIf", "ngIfElse"], [1, "quiz-preview-container"], [1, "quiz-header"], [1, "quiz-meta"], [1, "meta-item"], ["name", "time-outline"], ["name", "help-circle-outline"], [1, "fas", "fa-bolt"], [1, "quiz-title"], [1, "difficulty-badge", 2, "width", "110px", 3, "color"], [1, "quiz-description"], [1, "section-title"], [1, "questions-preview"], ["class", "question-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "quiz-actions", 4, "ngIf"], [1, "question-card"], [1, "question-header"], [1, "question-number"], ["class", "refresh-btn", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "question-loading-placeholder", 4, "ngIf"], [1, "refresh-btn", 3, "click", "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M23 4V10H17M1 20V14H7M1 14C1.53043 14 2.03914 13.7893 2.41421 13.4142C2.78929 13.0391 3 12.5304 3 12C3 10.1435 3.7375 8.363 5.05025 7.05025C6.36301 5.7375 8.14348 5 10 5L13 5M23 10C22.4696 10 21.9609 10.2107 21.5858 10.5858C21.2107 10.9609 21 11.4696 21 12C21 13.8565 20.2625 15.637 18.9497 16.9497C17.637 18.2625 15.8565 19 14 19H11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "question-text"], [1, "options-list"], ["class", "option-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "option-item", 3, "ngClass"], [1, "option-bullet"], [1, "option-text"], [1, "question-loading-placeholder"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-picture"], [1, "ph-row"], [1, "ph-col-6", "big"], [1, "ph-col-4", "big"], [1, "ph-col-2", "big"], [1, "ph-col-4"], [1, "ph-col-8", "empty"], [1, "ph-col-6"], [1, "ph-col-6", "empty"], [1, "quiz-actions"], [1, "action-btn", "reject-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "action-btn", "approve-btn", 3, "click", "disabled"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]],
  template: function VerifyQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerifyQuizComponent_div_1_Template, 26, 15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VerifyQuizComponent_ng_template_3_Template, 31, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const loading_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx.quiz$))("ngIfElse", loading_r8);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe],
  styles: [".quiz-preview-container[_ngcontent-%COMP%] {\n  margin: 0 0 35% 0;\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.quiz-header[_ngcontent-%COMP%]   .difficulty-badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: capitalize;\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-size: 0.8rem;\n}\n.quiz-header[_ngcontent-%COMP%]   .quiz-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.quiz-header[_ngcontent-%COMP%]   .quiz-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.quiz-header[_ngcontent-%COMP%]   .quiz-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.quiz-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n}\n\n.quiz-description[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin-bottom: 24px;\n  line-height: 1.5;\n  padding: 0 4px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin: 24px 0 16px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.questions-preview[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.question-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n}\n.question-card[_ngcontent-%COMP%]   .question-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.question-card[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.question-card[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(63, 81, 181, 0.1);\n  color: #3f51b5;\n  border: none;\n  border-radius: 8px;\n  padding: 4px 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.question-card[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(63, 81, 181, 0.2);\n}\n.question-card[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.question-card[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.question-card[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n  font-weight: 500;\n  line-height: 1.4;\n}\n\n.options-list[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.options-list[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.options-list[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   .option-bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--ion-color-medium);\n  flex-shrink: 0;\n}\n.options-list[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.4;\n}\n\n.quiz-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  background: white;\n  padding: 12px;\n  border-radius: 16px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-btn.approve-btn[_ngcontent-%COMP%] {\n  background-color: rgba(0, 184, 148, 0.1);\n  color: #00B894;\n}\n.action-btn.approve-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 184, 148, 0.2);\n}\n.action-btn.reject-btn[_ngcontent-%COMP%] {\n  background-color: rgba(214, 48, 49, 0.1);\n  color: #D63031;\n}\n.action-btn.reject-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(214, 48, 49, 0.2);\n}\n\n.option-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.option-item.correct-answer[_ngcontent-%COMP%] {\n  background-color: #2ecc71;\n}\n.option-item.correct-answer[_ngcontent-%COMP%]   .option-bullet[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LXF1aXovdmVyaWZ5LXF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBSkY7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQU9NO0VBQ0UsZUFBQTtBQUxSOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQVJGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVJGO0FBV0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0EvRk07RUFnR04sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVhKO0FBYUk7RUFDRSxrQ0FBQTtBQVhOO0FBY0k7RUFDRSwrQkFBQTtBQVpOO0FBZUk7RUFDRSx3QkFBQTtBQWJOO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBb0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtBQWpCSjtBQW1CSTtFQUNFLG1CQUFBO0FBakJOO0FBb0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQWxCTjtBQXFCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFuQk47O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckJGOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXJCRjtBQXVCRTtFQUNFLHdDQUFBO0VBQ0EsY0FwTE07QUErSlY7QUF1Qkk7RUFDRSx3Q0FBQTtBQXJCTjtBQXlCRTtFQUNFLHdDQUFBO0VBQ0EsY0E1TEs7QUFxS1Q7QUF5Qkk7RUFDRSx3Q0FBQTtBQXZCTjs7QUE0QkE7RUFDRSx5QkFBQTtBQXpCRjtBQTJCRTtFQUNFLHlCQUFBO0FBekJKO0FBMkJJO0VBQ0UsaUNBQUE7QUF6Qk4iLCJzb3VyY2VzQ29udGVudCI6WyIkc3VjY2VzczogIzAwQjg5NDtcbiRkYW5nZXI6ICNENjMwMzE7XG4kcHJpbWFyeTogIzNmNTFiNTtcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xuXG4ucXVpei1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAwIDM1JSAwO1xufVxuXG4ucXVpei1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcblxuICAuZGlmZmljdWx0eS1iYWRnZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLnF1aXotbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAubWV0YS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5xdWl6LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5xdWl6LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAwIDRweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWFyZ2luOiAyNHB4IDAgMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5xdWVzdGlvbnMtcHJldmlldyB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5xdWVzdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cblxuICAucXVlc3Rpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICAucXVlc3Rpb24tbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnJlZnJlc2gtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeSwgMC4xKTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeSwgMC4yKTtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHN2ZyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLnF1ZXN0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG5cbi5vcHRpb25zLWxpc3Qge1xuICAub3B0aW9uLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLm9wdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAub3B0aW9uLXRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gIH1cbn1cblxuLnF1aXotYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDgwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcblxuICAmLmFwcHJvdmUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzdWNjZXNzLCAwLjEpO1xuICAgIGNvbG9yOiAkc3VjY2VzcztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3VjY2VzcywgMC4yKTtcbiAgICB9XG4gIH1cblxuICAmLnJlamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhbmdlciwgMC4xKTtcbiAgICBjb2xvcjogJGRhbmdlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFuZ2VyLCAwLjIpO1xuICAgIH1cbiAgfVxufVxuXG4ub3B0aW9uLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICYuY29ycmVjdC1hbnN3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG5cbiAgICAub3B0aW9uLWJ1bGxldCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7421:
/*!********************************!*\
  !*** ./src/app/web.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebService: () => (/* binding */ WebService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _WebService;

class WebService {}
_WebService = WebService;
_WebService.ɵfac = function WebService_Factory(t) {
  return new (t || _WebService)();
};
_WebService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _WebService,
  factory: _WebService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiURL: 'https://quiznewbackend.onrender.com',
  production: true,
  BannerAdId: 'ca-app-pub-4874253778737753/3116134419',
  InterstitialAdsId: 'ca-app-pub-4874253778737753/5853978398',
  RewardedVideoAddId: 'ca-app-pub-4874253778737753/9601651714'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


// Create and show loading element before bootstrapping
const loadingElement = document.createElement('div');
loadingElement.innerHTML = `
  <div style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  ">
    <img src="assets/loading.gif" alt="Loading..." style="width: 80px; height: 80px;">
  </div>
`;
document.body.appendChild(loadingElement);
// Bootstrap the application
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(() => {
  // Remove loading element once app is initialized
  document.body.removeChild(loadingElement);
}).catch(err => {
  console.log(err);
  // Also remove loading element if there's an error
  document.body.removeChild(loadingElement);
});

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-CKHMWxfe_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-CKHMWxfe_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-otp.entry.js": [
		381,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-be4gBvVY_js-node_modules_ionic_core_dist-a8d71f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		4312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		4540,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		7101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-be4gBvVY_js-node_modules_ionic_core_dist-a8d71f",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.81db2fda1584b4e2.js.map