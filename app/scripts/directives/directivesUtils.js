myApp.directive('ngComment', function() {

    return {

        // scope isolé, propre à la directive // PAR defaut une directive use le scope parent
        scope: {
            comment: '='
        },
        restrict: 'E',
        templateUrl: 'views/partials/_comment.html'
    }
})


// directive gestion onglet : directives imbriqués
// 
myApp.directive('ngTabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/partials/tabs.html',
        scope: {},
        // constrolleur propre à la directive, sert API pour communiquer avecles dirrective enfant
        controller: function($scope) {
            // $scope.clic= function(title){
            // 	alert(title);
            // }
            $scope.tabs = [];

            $scope.select = function(tab) {
                angular.forEach($scope.tabs, function(t) {
                    t.selected = false;
                })
                tab.selected = true;
            }


            this.add = function(tab) {
                if ($scope.tabs.length == 0) {
                    $scope.select(tab);
                };
                $scope.tabs.push(tab);
            }
        }
    }
})

myApp.directive('ngTab', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/partials/tab.html',
        scope: {
            title: '@'
        },
        require: '^ngTabs',
        link: function(scope, element, attrs, tabsCtrl) {
            // element.click(function(){
            // 	tabsCtrl.clic(scope.title)
            // })
            scope.selected = false;
            tabsCtrl.add(scope);
        }

    }
})




// directive time 

myApp.directive('time', function(dateFilter, $interval) {

    return {
        restrict: 'E',
        template: '{{time}}',
        scope: {},

        // gestion des evenements sur des elements
        link: function(scope, element, attrs) {
            scope.time = dateFilter(new Date(), 'hh:mm:ss');

            element.on('$destroy', function() {
                $interval.cancel(interval);
            })

            // execute la focntion toutes les 1000 ms = 1s
            interval = $interval(function() {
                scope.time = dateFilter(new Date(), 'hh:mm:ss');
            }, 1000)
        }
    }
})


// eg chargement lugin jquery
// directive qui permet de charge un datepicker, 

myApp.directive('datepicker', function() {

    return {
        restrict: 'C',
        scope: {
            options: "=datepickerOptions"
        },
        link: function(scope, element, attrs) {
            $(element).pickadate(scope.options);
        }
    }
})


// test notion de transclusion, fait avec le scope du parent

myApp.directive('ngTest', function() {

    return {
        template: "<div> Salut <strong> {{username}} </strong> <div ng-transclude></div></div>",
        restrict: 'A',
        transclude: true,
        scope: {
            username: "=username"
        }
    }
})
