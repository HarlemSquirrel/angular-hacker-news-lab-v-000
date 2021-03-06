angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
	.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/top');

		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getTopStories();
          }
        }
			})
      .state('post', {
				url: '/post/:id',
				templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function ($stateParams, PostsService) {
            return PostsService.getPost($stateParams.id);
          }
        }
			});

	});
