(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ["product",
                        ProductDetailCtrl]);

    function ProductDetailCtrl(product) {
        var vm = this;

        vm.product = product;
        // vm.product = {
        //     "productId": 2,
        //     "productName": "Garden Cart",
        //     "productCode": "GDN-0023",
        //     "releaseDate": "March 18, 2010",
        //     "description": "15 gallon capacity rolling garden cart",
        //     "cost": 20.00,
        //     "price": 32.99,
        //     "category": "garden",
        //     "tags": ["barrow", "cart", "wheelbarrow"],
        //     "imageUrl": "images/Capture1.PNG"
        // };

        vm.title = "Product Detail: " + vm.product.productName;

        if(vm.product.tags){
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());