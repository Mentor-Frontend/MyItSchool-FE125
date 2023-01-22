'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
   
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        console.log(routes);
        this.routes = routes;
        this.rootElem = document.querySelector('App');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        console.log(scope)
        console.log(r)
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                    if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) {
            let hash='';
            if (htmlName!='index.html') hash='#'
            var url =  hash+htmlName,
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this);
                    // scope.rootElem.innerHTML = this.responseText;
                }
            };
            console.log(htmlName);
            console.log(url);
            
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};
