angular
    .module('app')
    .factory('ImageService', image);

function image($http) {
    return {
        get : function(page) {
            return $http.get('http://192.168.1.4/api/images', {
                params: { page: page }
            });
        },
        singular : function(id) {
            return $http.get('http://192.168.1.4/api/images/' + id, {
                params: { id: id }
            });
        }
    }
}
