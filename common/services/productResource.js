/**
 * Created by user on 3/2/2017.
 */
(function (){
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }
}());