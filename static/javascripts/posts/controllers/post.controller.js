/**
 * Created by dhanalalb on 4/5/16.
 */
/**
 * PostController
 * @namespace thinkster.posts.controllers
 */
(function () {
    'use strict';

    angular
        .module('thinkster.posts.controllers')
        .controller('PostController', PostController);

    PostController.$inject = ['Snackbar', 'Posts', 'Authentication'];

    /**
     * @namespace PostController
     */
    function PostController(Snackbar, Posts, Authentication) {
        var vm = this;
        
        vm.deletePost = deletePost;
        vm.user  = Authentication.getAuthenticatedAccount();

        function deletePost(pk) {

            Posts.destroy(pk).then(deletePostSuccessFn, deletePostErrorFn);


            /**
             * @name deletePostSuccessFn
             * @desc Show snackbar with success message
             */
            function deletePostSuccessFn(data, status, headers, config) {
                Snackbar.show('Success! Post deleted.');
                window.location = '/';
            }


            /**
             * @name createPostErrorFn
             * @desc Propogate error event and show snackbar with error message
             */
            function deletePostErrorFn(res, status, headers, config) {
                Snackbar.error(res.data.detail);
            }
        }
    }
})();