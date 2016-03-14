// crée un controlleur
myApp.controller('CommentsCtrl', ['$scope','$rootScope','$routeParams', 'PostFactory', function($scope, $rootScope, $routeParams, PostFactory) {
    
    $rootScope.loading = true;
	$scope.newComment ={};
	

	PostFactory.findOne($routeParams.id).then(function(post){		
		$rootScope.loading = false;
		$scope.post = post;
	} , function(msg) { 
		alert(msg);
	});
	

	$scope.addComment = function() {
		$scope.comments.push($scope.newComment);
		
		// persist on server
		PostFactory.save($scope.newComment).then(function(){
		
		} , function() { 
			alert("VOTRE message n'a pas pu etre saubvegardé");
		});

		$scope.newComment ={};
	}

		
}]);


