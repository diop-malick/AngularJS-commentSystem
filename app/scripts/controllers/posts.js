


// insére la factory PostFactory
myApp.controller('PostsCtrl', ['$scope', '$rootScope', '$resource' , 'PostFactory', function($scope, $rootScope, $resource, PostFactory) {
// myApp.controller('PostsCtrl', ['$scope', 'PostService', function($scope, PostService) {
    
	// $scope.posts = PostService.getPosts(); // appel service 
	
	// appel factory
	// then : une fois operation teminé alors 
	$rootScope.loading = true;
	$scope.posts = PostFactory.findAll().then(function(posts){
		$rootScope.loading = false;
		$scope.posts = posts
	}, function(msg) { 
		alert(msg);
	});



/*
	var Post = $resource('http://localhost:8080/posts/:id.json', null, {
		'update' : {method:'PUT', params: {id : "@id"}}
	});
	
	$scope.posts = Post.query({page : 2}); // findall article with or not parameter page
	$scope.post = false;
	$scope.Npost = {};
	// $scope.posts = Post.get({id : 1}); // get sur 1 articles

	// mis à jour a demandé aprés 
	$scope.editPost = function(){
		$scope.post.$update(function(){
			$scope.post = false; /: masque automatiquement le ofrmulaire
		});
	}

	$scope.showEditPost = function(post){
		$scope.post = post;
	}

	$scope.newPost = function(post){
		var post = Post.save(null, $scope.Npost, function(){
			$scope.posts.push(post);
		})
	}

	*/


}]);