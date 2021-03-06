(function () {
  'use strict';

  angular.module('flexget').directive('toolBar', function (toolBar) {

    var template = '<div class="admin-toolbar">' +
        '<md-toolbar class="admin-toolbar">' +
            '<div class="md-toolbar-tools">' +
                '<md-button class="md-icon-button" ng-click="toggleNav()" style="width: 40px">' +
                    '<md-icon class="fa fa-bars" aria-label="Menu"></md-icon>' +
                '</md-button>' +
                '<span flex></span>' +
                '<div ng-repeat="item in toolBarItems | orderBy:\'order\'">' +
                  '<md-button aria-label="{{ item.label }}" class="md-icon-button" ng-click="item.action()" ng-if="item.type == \'button\'">' +
                      '<md-tooltip>{{ item.label }}</md-tooltip>' +
                      '<md-icon md-menu-origin class="{{ item.cssClass }}"></md-icon>' +
                  '</md-button>' +
                  '<md-menu ng-if="item.type == \'menu\'">' +
                    '<md-button aria-label="{{ item.label }}" class="md-icon-button" ng-click="$mdOpenMenu($event)">' +
                        '<md-tooltip>{{ item.label }}</md-tooltip>' +
                        '<md-icon md-menu-origin class="{{ item.cssClass }}"></md-icon>' +
                    '</md-button>' +
                    '<md-menu-content width="{{ item.width }}">' +
                      '<md-menu-item ng-repeat="menuItem in item.items | orderBy:\'order\'">' +
                        '<md-button ng-click="menuItem.action()"><md-icon md-menu-origin class="{{ menuItem.cssClass }}"></md-icon>{{ menuItem.label }}</md-button>' +
                      '</md-menu-item>' +
                    '</md-menu-content>' +
                  '</md-menu>' +
                '</div>' +
            '</div>' +
        '</md-toolbar>' +
    '</div>';

    return {
      restrict: 'E',
      replace: 'true',
      template: template,
      link: function (scope, element, attrs) {
        scope.toolBarItems = toolBar.items;
      }
    };
  });

})();