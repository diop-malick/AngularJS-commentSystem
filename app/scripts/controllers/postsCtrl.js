myApp.controller('PostsCtrl', ['$scope', '$rootScope', '$resource', 'PostFactory', function($scope, $rootScope, $resource, PostFactory) {

    $scope.titleLetterLimit = 10;

    // retrieve posts

    // $scope.posts = PostFactory.findAll().then(function(posts) {
    //     $rootScope.loading = false;
    //     $scope.posts = posts
    // }, function(msg) {
    //     alert(msg);
    // });
    // var Post = $resource('http://jsonplaceholder.typicode.com/posts/:id')
    // $scope.posts = Post.query();
    $scope.posts = PostFactory.post().query();
    // $scope.posts = tmp.query({}, {});
    $scope.posts.$promise.then(function(response) {
        $rootScope.loading = false;
        $scope.posts = response;
        // console.log($scope.posts);
    }, function(error) {
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
