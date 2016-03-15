myApp.filter('round', function() {
    return function(input, precision) {
        chiffre = Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision)
        return chiffre.toSting().replace('.', ',')
    }
})
