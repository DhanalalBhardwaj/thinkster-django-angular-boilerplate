/**
 * Created by dhanalalb on 28/4/16.
 */
/**
 * Posts
 * @namespace thinkster.posts.services
 */
(function () {
    'use strict';

    angular
        .module('thinkster.posts.services')
        .factory('Posts', Posts);

    Posts.$inject = ['$http'];

    /**
     * @namespace Posts
     * @returns {Factory}
     */
    function Posts($http) {
        var Posts = {
            all: all,
            create: create,
            get: get,
            destroy: destroy
        };

        return Posts;

        ////////////////////

        /**
         * @name all
         * @desc Get all Posts
         * @returns {Promise}
         * @memberOf thinkster.posts.services.Posts
         */
        function all() {
            return $http.get('/api/v1/posts/');
        }


        /**
         * @name create
         * @desc Create a new Post
         * @param {string} content The content of the new Post
         * @returns {Promise}
         * @memberOf thinkster.posts.services.Posts
         */
        function create(content) {
            return $http.post('/api/v1/posts/', {
                content: content
            });
        }

        /**
         * @name delete
         * @desc Delete a Post
         * @param {string} pk Primary key of post to be deleted
         * @returns {Promise}
         * @memberOf thinkster.posts.services.Posts
         */
        function destroy(pk) {
            return $http.delete('/api/v1/posts/' + pk + '/');
        }

        /**
         * @name get
         * @desc Get the Posts of a given user
         * @param {string} username The username to get Posts for
         * @returns {Promise}
         * @memberOf thinkster.posts.services.Posts
         */
        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/posts/');
        }
    }
})();
