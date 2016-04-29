/**
 * Created by dhanalalb on 28/4/16.
 */
(function () {
  'use strict';

  angular
    .module('thinkster.posts', [
      'thinkster.posts.controllers',
      'thinkster.posts.directives',
      'thinkster.posts.services'
    ]);

  angular
    .module('thinkster.posts.controllers', []);

  angular
    .module('thinkster.posts.directives', ['ngDialog']);

  angular
    .module('thinkster.posts.services', []);
})();