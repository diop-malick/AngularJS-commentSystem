// retoune un objet qui sera passé au controller
myApp.factory('PostFactory', function($http, $q, $timeout) {

    var factory = {
	
        posts: false, // false pour pas de cache
		
        findAll: function() {

			var deferred = $q.defer(); // initialise une tache 
			
			// pour éviter les nombreux rehargment du json, recupère la cache
			if (factory.posts !== false) {
				deferred.resolve(factory.posts);
			} else {
				$http.get('posts.json')
					.success(function(data, status) {
						factory.posts = data;
						deferred.resolve(factory.posts);

                        // $timeout(function(){
							// deferred.resolve(factory.posts);
						// }, 2000)						
					})
					.error(function(data, status) {
						deferred.reject('Impossible de récupérer les donnéesé');
					});
			}		
            return deferred.promise; // returne la promesse

			// q : faire des promesse, excécuter des function dans le future
			// timeout, marquer un temps d'arrer avant d'exécuter une 
        },
		
        findOne: function(id) {

            var deferred = $q.defer();
            var post = {};
			var posts = factory.findAll().then(function(posts){
				angular.forEach(posts, function(value, key) {
                    if (value.id == id) {
                        post = value;
                    }
				});
				deferred.resolve(post); // je renvoi l'article une fois bien recupéré
			}, function(msg) { 
				deferred.reject(msg);
			});
            return deferred.promise;
            // return post;
            // return factory.posts[0];
        },


        save : function(comment) {

            var deferred = $q.defer();
            // ....
            deferred.resolve();
            return deferred.promise;

        }
    }
    return factory

});



// retoune un objet qui sera passé au controller
/*
myApp.service('PostService', function() {

	$this = this; // obget courant
	
        $this.posts = [{
            "id": 0,
            "name": "Velity",
            "content": "Cillum adipisicing non eu quis aute. Culpa incididunt deserunt aute nostrud.",
            "comments": [{
                "username": "Rosemarie",
                "city": "Fairlee",
                "email": "rosemariebruce@velity.com",
                "content": "Sit ad nisi nisi dolore cupidatat eiusmod tempor voluptate mollit est adipisicing cillum."
            }, {
                "username": "Marquita",
                "city": "Vernon",
                "email": "marquitabruce@velity.com",
                "content": "Labore magna sunt incididunt enim sit cillum in."
            }]
        }, {
            "id": 1,
            "name": "Endicil",
            "content": "Qui esse culpa veniam culpa est anim. Proident sint ex est ex do laboris occaecat deserunt ut culpa cupidatat.",
            "comments": [{
                "username": "Ruby",
                "city": "Veyo",
                "email": "rubybruce@endicil.com",
                "content": "Id nostrud consequat irure esse in magna ut culpa Lorem fugiat."
            }, {
                "username": "Burris",
                "city": "Interlochen",
                "email": "burrisbruce@endicil.com",
                "content": "Aliquip esse cupidatat tempor consequat ipsum aliquip amet commodo ea irure voluptate cupidatat."
            }, {
                "username": "Beth",
                "city": "Salix",
                "email": "bethbruce@endicil.com",
                "content": "Officia ut voluptate nisi in dolore exercitation ipsum aliqua enim laboris ex dolore voluptate."
            }]
        }, {
            "id": 2,
            "name": "Techmania",
            "content": "Quis aute et consequat elit mollit deserunt cupidatat anim. Irure elit do et nisi dolore nisi exercitation dolore dolore sint duis laboris commodo exercitation.",
            "comments": [{
                "username": "Tabatha",
                "city": "Churchill",
                "email": "tabathabruce@techmania.com",
                "content": "Sunt nisi voluptate in nisi quis ea cillum dolor enim."
            }]
        }, {
            "id": 3,
            "name": "Corpulse",
            "content": "Magna nulla nulla pariatur magna pariatur quis aliquip sit. Amet fugiat in ad consectetur.",
            "comments": [{
                "username": "Pollard",
                "city": "Lindcove",
                "email": "pollardbruce@corpulse.com",
                "content": "Nostrud magna nostrud aute eu do ut reprehenderit dolor eu aute."
            }, {
                "username": "Lori",
                "city": "Chesterfield",
                "email": "loribruce@corpulse.com",
                "content": "Sunt mollit reprehenderit elit ad labore mollit dolore nulla duis."
            }]
        }];
		
        $this.getPosts = function() {
            return $this.posts;
        },
        
		$this.getPost = function(id) {
            var post = {};
            angular.forEach($this.posts, function(value, key) {
                if (value.id == id) {
                    post = value;
                }
            });
            return post;
        }  

});
*/