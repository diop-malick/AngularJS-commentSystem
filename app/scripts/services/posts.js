// retoune un objet qui sera passé au controller
//Post service used for car REST endpoint jsonplacehoder
myApp.factory('PostFactory', function($http, $q, $timeout, $resource) {


    var host = 'http://jsonplaceholder.typicode.com';


    var factory = {

        posts: false, // false pour pas de cache

        post: function() {
            var path = host + '/posts/:id';
            return $resource(path, {}, {
                'query': {
                    method: 'GET',
                    isArray: true
                },
                'GET': {
                    method: 'GET'
                }
                // ,
                // 'update': {
                //     method: 'PUT'
                // }
                // implicite method : sget / ave / delete
                // possible to rename verb method
                // { postId: '@id'}  : ajoute  un param
            });
        },

        comment: function() {
            var path = host + '/posts/:id/comments';
            return $resource(path, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
        },

        // deprecated 
        /*
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
                    })
                    .error(function(data, status) {
                        deferred.reject('Impossible de récupérer les donnéesé');
                    });
            }
            return deferred.promise; // returne la promesse
        },

        findOne: function(id) {
            var deferred = $q.defer();
            var post = {};
            var posts = factory.findAll().then(function(posts) {
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
        */

        postComments: function(id) {
            var path = '/posts/' + id + '/comments';
            // var path =  '/comments?postId='+ id ;
            // $resource(host + path, {postId: id, xx:yy}, {});
            return $resource(host + path, {}, {
                query: {
                    method: 'GET',
                    isArray: true
                },
                create: {
                    method: 'POST'
                }
            });
        },


        save: function(comment) {

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
