exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
    async: function(value) {
        var deferred = Promise.defer();
        deferred.resolve(value);
        return deferred.promise;
    },
    manipulateRemoteData: function(url) {
    	var deferred=Promise.defer();

        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.onreadystatechange = listener;

        function listener() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                	var response = JSON.parse(httpRequest.responseText);
                    deferred.resolve(response.people.map(function(record){
                    	return record.name;
                    }).sort())
                }
            }
        }

        return deferred.promise;
    }
};