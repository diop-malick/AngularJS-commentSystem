myApp.controller('PostsCtrl', ['$scope', '$rootScope', '$resource', 'PostFactory', function($scope, $rootScope, $resource, PostFactory) {

    $scope.titleLetterLimit = 10;
    $scope.Npost = {};

    // retrieve posts
    $scope.posts = PostFactory.post().query();
    // $scope.posts = tmp.query({}, {});
    $scope.posts.$promise.then(function(response) {
        $rootScope.loading = false;
        $scope.posts = response;
        // console.log($scope.posts);
    }, function(error) {
        alert(msg);
    });


    // mis à jour a demandé aprés 
    $scope.editPost = function() {
        $scope.post.$update(function() {
            $scope.post = false;
            // masque automatiquement le formulaire
        });
    }

    $scope.showEditPost = function(post) {
        $scope.post = post;
    }

    $scope.newPost = function() {
        var post = PostFactory.post().save(null, $scope.Npost, function() {
            $scope.posts.push(post);
        })
    }

    // $scope.posts = PostFactory.findAll().then(function(posts) {
    //     $rootScope.loading = false;
    //     $scope.posts = posts
    // }, function(msg) {
    //     alert(msg);
    // });
    // var Post = $resource('http://jsonplaceholder.typicode.com/posts/:id')
    // $scope.posts = Post.query();

    // var Post = $resource('http://localhost:8080/posts/:id.json', null, {
    // 	'update' : {method:'PUT', params: {id : "@id"}}
    // });    	
    // $scope.posts = Post.query({ page: 2 }); // findall article with or not parameter page
    // $scope.posts = Post.get({id : 1}); // get sur 1 articles
    // $scope.post = false;

}]);
