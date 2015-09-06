angular
    .module('ionicApp', ['ionic', 'angular.css.injector'])

    // *************  Config ********************
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('eventmenu.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html"
                    }
                }
            })

            .state('eventmenu.checkin', {
                url: "/check-in",
                views: {
                    'menuContent': {
                        templateUrl: "templates/check-in.html",
                        controller: "CheckinCtrl"
                    }
                }
            })
            .state('eventmenu.attendees', {
                url: "/attendees",
                views: {
                    'menuContent': {
                        templateUrl: "templates/attendees.html",
                        controller: "AttendeesCtrl"
                    }
                }
            })
            .state('eventmenu', {
                url: "/event",
                abstract: true,
                templateUrl: "templates/event-menu.html"
            })


            .state('eventmenu.city', {
                url: "/city",
                views: {
                    'menuContent': {
                        templateUrl: "templates/city.html",
                        controller: "cityCtrl"
                    }
                }
            })
            .state('eventmenu.price-range', {
                url: "/price-range",
                views: {
                    'menuContent': {
                        templateUrl: "templates/price-range.html",
                        controller: "priceRangeCtrl"
                    }
                }
            })
            .state('eventmenu.brand', {
                url: "/brand/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/brand.html",
                        controller: "brandCtrl"
                    }
                }
            })
            .state('eventmenu.model', {
                url: "/model",
                views: {
                    'menuContent': {
                        templateUrl: "templates/model.html",
                        controller: "modelCtrl"
                    }
                }
            })
            .state('eventmenu.fuel', {
                url: "/fuel",
                views: {
                    'menuContent': {
                        templateUrl: "templates/fuel.html",
                        controller: "fuelCtrl"
                    }
                }
            })
            .state('eventmenu.km', {
                url: "/km",
                views: {
                    'menuContent': {
                        templateUrl: "templates/km.html",
                        controller: "kmCtrl"
                    }
                }
            })
            .state('eventmenu.vehicle-type', {
                url: "/vehicle-type",
                views: {
                    'menuContent': {
                        templateUrl: "templates/vehicle-type.html",
                        controller: "vehicleTypeCtrl"
                    }
                }
            })
            .state('eventmenu.model-year', {
                url: "/model-year",
                views: {
                    'menuContent': {
                        templateUrl: "templates/model-year.html",
                        controller: "modelYearCtrl"
                    }
                }
            })
            .state('eventmenu.transmission', {
                url: "/transmission",
                views: {
                    'menuContent': {
                        templateUrl: "templates/transmission.html",
                        controller: "transmissionCtrl"
                    }
                }
            })
            .state('eventmenu.seller-type', {
                url: "/seller-type",
                views: {
                    'menuContent': {
                        templateUrl: "templates/seller-type.html",
                        controller: "sellerTypeCtrl"
                    }
                }
            })


            .state('eventmenu.used-car-home', {
                url: "/used-car-home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-home.html",
                        controller: "usedCarHomeCtrl"
                    }
                }
            })
            .state('eventmenu.used-single-car-card-view', {
                url: "/used-single-car-card-view",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-single-car-card-view.html",
                        controller: "usedSingleCarCardViewCtrl"
                    }
                }
            })
            .state('eventmenu.used-car-detail', {
                url: "/used-car-detail",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-detail.html",
                        controller: "usedCarDetailCtl"
                    }
                }
            })
            .state('eventmenu.used-single-car-detail', {
                url: "/used-single-car-detail",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-single-car-detail.html",
                        controller: "usedsingleCarDetailCtl"
                    }
                }
            })
            .state('eventmenu.used-car-filter', {
                url: "/used-car-filter",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-filter.html",
                        controller: "usedCarFilterCtl"
                    }
                }
            })


            .state('eventmenu.nc-search-cars', {
                url: "/nc-search-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-search-cars.html",
                        controller: "nc_searchCars"
                    }
                }
            })
            .state('eventmenu.nc-upcoming-cars', {
                url: "/nc-upcoming-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-upcoming-cars.html",
                        controller: "nc_upcomingCars"
                    }
                }
            })
            .state('eventmenu.nc-latest-cars', {
                url: "/nc-latest-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-latest-cars.html",
                        controller: "nc_latestCars"
                    }
                }
            })
            .state('eventmenu.nc-popular-cars', {
                url: "/nc-popular-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-popular-cars.html",
                        controller: "nc_popularCars"
                    }
                }
            })
            .state('eventmenu.nc-offers-and-dicounts', {
                url: "/nc-offers-and-dicounts",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-offers-and-dicounts.html",
                        controller: "nc_offersAndDiscounts"
                    }
                }
            })
            .state('eventmenu.nc-car-videos', {
                url: "/nc-car-videos",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-car-videos.html",
                        controller: "nc_carVideos"
                    }
                }
            })
            .state('eventmenu.nc-feel-the-cars', {
                url: "/nc-feel-the-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-feel-the-cars.html",
                        controller: "nc_feelTheCars"
                    }
                }
            })
            .state('eventmenu.nc-brand-details', {
                url: "/nc-brand-details/:paramName",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-brand-detail.html",
                        controller: "nc_brandDetails"
                    }
                }
            })
            .state('eventmenu.nc-model-details', {
                url: "/nc-model-details/:paramName",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-model-detail.html",
                        controller: "nc_modelDetails"
                    }
                }
            })
            .state('eventmenu.nc-get-on-road-price-form', {
                url: "/nc-get-on-road-price-form/:oem/:carModel",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-get-on-road-price-form.html",
                        controller: "nc_getOnRoadPriceFormCtrl"
                    }
                }
            })
            .state('eventmenu.nc-get-on-road-price-detail', {
                url: "/nc-get-on-road-price-detail",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-get-on-road-price-detail.html",
                        controller: "nc_getOnRoadPriceDetailCtrl"
                    }
                }
            })


            .state('eventmenu.gbl-temp-page', {
                url: "/gbl-temp-page/:paramName/:paramValue/:apiOption/:urlToCall",
                views: {
                    'menuContent': {
                        templateUrl: "templates/gbl-temp-page.html",
                        controller: "gbl_tempPageCtrl"
                    }
                }
            })

            .state('eventmenu.auto-news', {
                url: "/auto-news",
                views: {
                    'menuContent': {
                        templateUrl: "templates/auto-news.html",
                        controller: "autoNewsCtrl"
                    }
                }
            })
            .state('eventmenu.auto-detailed-news', {
                url: "/auto-detailed-news/:newsId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/auto-detailed-news.html",
                        controller: "autoDetailedNewsCtrl"
                    }
                }
            })

            $urlRouterProvider.otherwise("/event/home");
    })

    // *************  Service ********************
    .service(
    'sharedProperties',
    [
        '$http',
        '$ionicLoading',
        '$q',
        function ($http, $ionicLoading, $q) {

            function callApi(url) {
                $http.post(url).success(function (data, status) {
                    console.log("callApi : " + JSON.stringify(data));
                    return data;
                })
            }

            var url = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=";
            var objectValue = {};
            objectValue.isLoading = true;
            objectValue.city = 'All India';
            objectValue.price = "";
            objectValue.brand = "";
            objectValue.model = "";
            objectValue.fuel = "";
            objectValue.km = ""
            objectValue.vehicleType = '';
            objectValue.modelYear = '';
            objectValue.transmission = '';
            objectValue.sellerType = '';
            objectValue.sellerType = '';

            objectValue.usedCardIdToSearch = "";
            objectValue.certifiedByTrustMaster = false;
            objectValue.withPicture = false;


            objectValue.contact = [];
            objectValue.priceRanageObj = {};
            objectValue.brandObj = [];
            objectValue.modelObj = [];
            objectValue.usedCarSearchResult = [];
            objectValue.usedCarDetailResult = {};

            objectValue.ncBrandDetailsObj = {};
            objectValue.ncModelDetailsObj = {};

            var onRoadDetailRequestObj = {};


            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=getOfferCityList")
                .success(
                function (data1, status) {
                    // console.log("Data : "+
                    // JSON.stringify(data1));
                    objectValue.contact = data1.data.CarDiscountCities;
                })
                .error(function () {

                });
            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getNewCarPriceRangeDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
                .success(
                function (data1, status) {
                    // console.log("Data : "+
                    // JSON.stringify(data1));
                    objectValue.priceRanageObj = data1.data;
                })

            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getOemFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
                .success(
                function (data1, status) {
                    console.log("brand : " +
                        JSON.stringify(data1));
                    objectValue.brandObj = data1.data.oemList;
                })

            return {
                setCity: function (cityVal) {
                    // console.log("Service"+cityVal);
                    objectValue.city = cityVal;
                },
                setPrice: function (price) {
                    objectValue.price = price;
                },
                setCertifiedByTrustMaster: function (isCertified) {
                    objectValue.certifiedByTrustMaster = isCertified;
                },
                setWithPicture: function (isPicture) {
                    objectValue.withPicture = isPicture;
                },
                setFuel: function (fuel) {
                    objectValue.fuel = fuel;
                },
                setKM: function (km) {
                    objectValue.km = km;
                },
                setVehicleType: function (vehicleType) {
                    objectValue.vehicleType = vehicleType;
                },
                setModelYear: function (modelYear) {
                    objectValue.modelYear = modelYear;
                },
                setTransmission: function (transmission) {
                    objectValue.transmission = transmission;
                },
                setSellerType: function (seller) {
                    objectValue.sellerType = seller;
                },
                getUsedCarDetailPerCar: function (callBackFun) {
                    var urlToSearch = url
                        + "getUsedCarDetailsDataWithStatus&UsedCarId="
                        + objectValue.usedCardToSearch.usedcarid;
                    console.log("getUsedCarDetailPerCar : " + urlToSearch);
                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("single car data " + data);
                            callBackFun(data, objectValue.usedCardToSearch);
                        })
                },
                setUsedCarDetailPerCar: function (selectedCarITem) {
                    console.log("setUsedCarDetailPerCar" + selectedCarITem);
                    objectValue.usedCardToSearch = selectedCarITem;
                },
                setBrand: function (brand) {
                    objectValue.brand = brand;
                    var url = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getModelFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds&oem="
                        + objectValue.brand;
                    console.log("URL :" + url);
                    $http
                        .post(url)
                        .success(
                        function (data1, status) {
                            // console.log("Model :
                            // "+
                            // JSON.stringify(data1));
                            objectValue.modelObj = data1.data.modelList;
                        })
                },
                getUsedCarSearchResult: function () {
                    var serachString = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getUsedCarSearchResultDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds";

                    if (objectValue.city !== 'All India') {
                        serachString += "&city=" + objectValue.city;
                    }
                    if (objectValue.price !== '...') {
                        serachString += "&pricerange=" + objectValue.price;
                    }
                    if (objectValue.model !== '...') {
                        serachString += "&carname=" + objectValue.model;
                    }
                    if (objectValue.brand !== '...') {
                        serachString += "&brand=" + objectValue.brand;
                    }
                    if (objectValue.fuel !== '...') {
                        serachString += "&fueltype=" + objectValue.fuel;
                    }
                    if (objectValue.km !== '...') {
                        serachString += "&km_done=" + objectValue.km;
                    }
                    if (objectValue.vehicleType !== '...') {
                        serachString += "&vehicletype=" + objectValue.vehicleType;
                    }
                    if (objectValue.modelYear !== '...') {
                        serachString += "&modelyear=" + objectValue.modelYear;
                    }
                    if (objectValue.transmission !== '...') {
                        serachString += "&transmission=" + objectValue.transmission;
                    }
                    if (objectValue.sellerType !== '...') {
                        serachString += "&sellertype=" + objectValue.sellerType;
                    }
                    if (objectValue.certifiedByTrustMaster === true) {
                        serachString += "&certificationid=1";
                    }
                    if (objectValue.withPicture !== '...') {
                        serachString += "&photo=with-photos";
                    }

                    console.log("Serach String " + serachString);
                    var url = 'http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getUsedCarSearchResultDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds&City=Pune&PriceRange=1-Lac-to-5-Lac&Brand=honda&CarName=honda_city&startLimit=10&endLimit=20';
                    //console.log("URL :" + url);
                    $http
                        .post(url)
                        .success(
                        function (data1, status) {
//														console
//																.log("Used Car Search Object : "
//																		+ JSON
//																				.stringify(data1));
                            objectValue.usedCarSearchResult = data1;
                        })
                },
                getObject: function () {
                    console.log("objectValue" + JSON.stringify(objectValue));
                    return objectValue;
                },
                setModel: function (model) {
                    objectValue.model = model;
                },
                getData: function (searchString, callBackFun) {
                    var urlToSearch = url + searchString;
                    console.log("get data url : " + urlToSearch);

                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            callBackFun(data);
                        })
                },
                getNCBrandDetails : function(brandName, callBackFun){
                    var urlToSearch = url
                        + "getModelFeedsWithStatus&oem="
                        + brandName;
                    console.log("getNCBrandDetail : " + urlToSearch);
                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("get NC brand detail" + data);
                            objectValue.ncBrandDetailsObj = data;
                            callBackFun(data);
                        })
                },
                getNCModelDetails : function(modelName, callBackFn){
                var urlToSearch = url
                    + "getModelFeedsWithStatus&ModelName="
                    + modelName;
                console.log("getNCModelDetails : " + urlToSearch);
                $http
                    .post(urlToSearch)
                    .success(
                    function (data, status) {
                        console.log("get NC brand detail" + data);
                        callBackFun(data);
                    })
                },
                getDataFromApi : function(apiOption, paramValue, callBackFun){
                    var urlToSearch = url;
                    switch(apiOption){
                        case 'ncBrandDetailsObj':
                            urlToSearch += "getModelFeedsWithStatus&oem="+paramValue;
                            break;
                        case 'ncModelDetailsObj':
                            urlToSearch += "getModelDetailsWithStatus&ModelName="+paramValue;
                            break;
                    }

                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("get data from api" + data);
                            objectValue[apiOption] = data;
                            callBackFun(data);
                        })
                },
                getCityAndPing : function(callBackFun) {
                    var urlToSearch = url;

                    var cityUrl = urlToSearch + "getDataForOnRoadPriceWithStatus1";
                    var pinUrl = urlToSearch + "getPincodesForCity&city=New%20Delhi";

                    var cityPost = $http.post(cityUrl);
                    var pingPost = $http.post(pinUrl);
                    $q.all([cityPost, pingPost]).then(function(cityAndPingObjs) {
                        console.log("city and pin "+ JSON.stringify(cityAndPingObjs));
                        callBackFun(cityAndPingObjs);
                    });

                },
                setOnRoadRequestObj : function(onRoadDetailRequest){
                    console.log("request obj "+ JSON.stringify(onRoadDetailRequest));
                    onRoadDetailRequestObj = onRoadDetailRequest;
                },
                getOnRoadDetailsObj : function(callBackFun){
                    var urlToSearch = url
                        + "getOnRoadPriceWithStatus&MobileNo="+onRoadDetailRequestObj.userMobile+"&BuyingTime=7&"
                        + "UserName="+onRoadDetailRequestObj.name+"&ModelName="+onRoadDetailRequestObj.carModel +"&PinCode="+onRoadDetailRequestObj.userPinCode
                        + "&EmailId="+onRoadDetailRequestObj.userEmail+"&OemName="+onRoadDetailRequestObj.oem+"&City="+onRoadDetailRequestObj.userCity;
                    console.log("getNCModelDetails : " + urlToSearch);

                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("get data from api" + data);
                            callBackFun(data, onRoadDetailRequestObj);
                        })
                }

            }


        }])


    // *************  Filters ********************
    .filter(
    'formatPrice',
    function () {
        return function (originalPrice) {
            console.log("original price :" + originalPrice);
            if (!isNaN(originalPrice)) {
                originalPrice = originalPrice.toString();
            }
            var formatedPrice = "";
            formatedPrice = originalPrice.substring(0,
                    originalPrice.length - 5)
                + "."
                + originalPrice.substring(
                    originalPrice.length - 5, 3);
            return formatedPrice;
        };
    })

    .filter(
    'formatMileage',
    function () {
        return function (originalMilease) {
            var formatedMilease = "";
            if (originalMilease.length > 3) {
                formatedMilease = originalMilease.substring(0, 3)
                    + ","
                    + formatedMilease.substring(
                        4, formatedMilease.lenght);
            }

            if (originalMilease.length > 6) {
                formatedMilease = originalMilease.substring(0, 6)
                    + ","
                    + formatedMilease.substring(
                        4, formatedMilease.lenght);
            }

            return formatedPrice;
        };
    })

    // *************  Directive  ********************
    //Used Car
    .directive('ngCity', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/city-CD.html"
        }
    })
    .directive('ngPriceRange', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/price-range-CD.html"
        }
    })
    .directive('ngBrand', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/brand-CD.html"
        }
    })
    .directive('ngBrandModel', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/model-CD.html"
        }
    })
    .directive('ngSearchHeaderBar', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/search-header-bar-CD.html"
        }
    })

    //New Car
    .directive('ngNcFooterOption', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/nc-footer-options-CD.html"
        }
    })
    .directive('ngNcCarBrand', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/nc-car-brand-CD.html"
        }
    })
    .directive('ngNcSearchCarHeader', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/nc-search-car-header-CD.html"
        }
    })

    //TODO incomplete
    .directive('ngIsLoading', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/is-loading-CD.html"
        }
    })

    // *************  Controllers ********************
    .controller(
    'AttendeesCtrl', function ($scope) {

        $scope.activity = [];
        $scope.arrivedChange = function (attendee) {
            var msg = attendee.firstname + ' ' + attendee.lastname;
            msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
            msg += new Date().getMilliseconds();
            $scope.activity.push(msg);
            if ($scope.activity.length > 3) {
                $scope.activity.splice(0, 1);
            }
        };

    })
    .controller(
    'MainCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.attendees = [{
            firstname: 'Nicolas',
            lastname: 'Cage'
        }, {
            firstname: 'Jean-Claude',
            lastname: 'Van Damme'
        }, {
            firstname: 'Keanu',
            lastname: 'Reeves'
        }, {
            firstname: 'Steven',
            lastname: 'Seagal'
        }];
        // StatusBar.hide();

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.OpenUpNewCar = function () {
            $scope.shown = !$scope.shown;
        };

        $scope.OpenUpUsedCar = function () {
            $scope.shownUsed = !$scope.shownUsed;
        };

        $scope.OpenUpReviews = function () {
            $scope.shownReview = !$scope.shownReview;
        };

        $scope.OpenUpUtilities = function () {
            $scope.shownUtility = !$scope.shownUtility;
        };
        $scope.OpenUpFeedback = function () {
            $scope.shownFeedBack = !$scope.shownFeedBack;
        };

    })
    .controller(
    'CheckinCtrl', function ($scope) {
        $scope.showForm = true;

        $scope.shirtSizes = [{
            text: 'Large',
            value: 'L'
        }, {
            text: 'Medium',
            value: 'M'
        }, {
            text: 'Small',
            value: 'S'
        }];

        $scope.attendee = {};
        $scope.submit = function () {
            if (!$scope.attendee.firstname) {
                alert('Info required');
                return;
            }
            $scope.showForm = false;
            $scope.attendees.push($scope.attendee);
        };

    })




    .controller(
    'cityCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',

        function ($scope, sharedProperties, $state) {

            $scope.city = "All India";
            $scope.contactObj = sharedProperties.getObject();

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newCity = function (selectedCity) {
                sharedProperties.setCity(selectedCity);
                $scope.search = '';
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'priceRangeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.price = "...";
            $scope.priceRange = sharedProperties.getObject();
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newPrice = function (priceSelected) {
                console.log("price selected " + JSON.stringify(priceSelected))
                sharedProperties.setPrice(priceSelected.displayPriceRange);
                $scope.search = '';
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'brandCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $state, $stateParams) {
            $scope.brand = "...";
            var retunEvent = $stateParams.retunEvent;
            $scope.brandTempObj = sharedProperties.getObject();
            $scope.clearSearch = function () {
                $scope.search = '';
            };
            $scope.newBrand = function (brand) {
                console.log(brand);
                sharedProperties.setBrand(brand);
                $scope.search = '';
                $state.go('eventmenu.'+retunEvent);
            }
        }])
    .controller(
    'modelCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.model = "...";
            $scope.modelTempObj = sharedProperties.getObject();

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newModel = function (model) {
                sharedProperties.setModel(model);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'fuelCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.fuel = "...";
            // sharedProperties.setModelApi();

            $scope.contact1 = ['Diesel', 'Petrol', 'CNG',
                'LPG', 'Electric'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newFuel = function (fuel) {
                // console.log(fuel);
                sharedProperties.setFuel(fuel);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'kmCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.km = "...";
            // sharedProperties.setModelApi();

            $scope.contact1 = ['Below 5,000 km',
                'Below 20,000 km', 'Below 50,000 km',
                'Below 2,00,000 km', 'Above 2,00,000 km'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newKM = function (km) {
                // console.log(km);
                sharedProperties.setKM(km);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'vehicleTypeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {

            $scope.vehicleType = "...";
            // sharedProperties.setModelApi();

            $scope.contact1 = ['Hatchback', 'Sedans', 'SUV',
                'MUV', 'Luxury', 'Convertible', 'Hybrid',
                'Coupe', 'Minivans', 'Wagons',
                'Diesel Engines'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newVehichleType = function (vehichleType) {
                // console.log(vehichleType);
                sharedProperties.setVehicleType(vehichleType);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'modelYearCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.modelYear = "...";
            // sharedProperties.setModelApi();

            $scope.contact1 = ['2013 - Onward', '2011 - 2012',
                '2008 - 2010', '2004 - 2007',
                'Before - 2003'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newModelYear = function (modelYear) {
                // console.log(modelYear);
                sharedProperties.setModelYear(modelYear);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'transmissionCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {

            $scope.modelYear = "...";
            // sharedProperties.setModelApi();

            $scope.contact1 = ['Automatic', 'Manual'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newTransmission = function (transmission) {
                // console.log(transmission);
                sharedProperties.setTransmission(transmission);
                $state.go('eventmenu.used-car-home');
            }
        }])
    .controller(
    'sellerTypeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state) {
            $scope.sellerType = "...";
            $scope.contact1 = ['Individual', 'Dealer',
                'Certified Dealer'];

            $scope.getContacts = function () {
                letterHasMatch = {};

                return $scope.contact1
                    .filter(
                    function (item) {
                        var itemDoesMatch = !$scope.search
                            || item.isLetter
                            || item
                                .toLowerCase()
                                .indexOf(
                                $scope.search
                                    .toLowerCase()) > -1;

                        if (!item.isLetter
                            && itemDoesMatch) {
                            var letter = item
                                .charAt(0)
                                .toUpperCase();
                            if (item.charCodeAt(0) < 65) {
                                letter = "#";
                            }
                            letterHasMatch[letter] = true;
                        }
                        return itemDoesMatch;
                    })
                    .filter(
                    function (item) {
                        if (item.isLetter
                            && !letterHasMatch[item.letter]) {
                            return false;
                        }
                        return true;
                    })
            };
            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newSellerType = function (seller) {
                // console.log(seller);
                sharedProperties.setSellerType(seller);
                $state.go('eventmenu.used-car-home');
            }
        }])

    .controller(
    'usedCarHomeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$rootScope',
        '$state',
        'cssInjector',
        function ($scope, sharedProperties, $rootScope, $state, cssInjector) {
            console.log("in used car home control");

            cssInjector.add("css/SearchUsedCarHomeScreen.css");
            $scope.isAdvanceSerach = false;
            $scope.isCertified = false;
            $scope.isPicture = false;
            // console.log("usedCarHomeCtrl"+sharedProperties.getObject());
            // $scope.sharedObj = sharedProperties.getObject();
            $scope.cityObj = sharedProperties.getObject();

            $scope.advanceSeach = function () {
                // console.log('In Adv'+
                // $scope.isAdvanceSerach);
                $scope.isAdvanceSerach = true;
                // console.log('In Adv'+
                // $scope.isAdvanceSerach);
            }
            $scope.searchCar = function () {
                // console.log('In SearchCar'+
                // $scope.isAdvanceSerach);
                $scope.isAdvanceSerach = false;
                // console.log("Final Obj :"+
                // JSON.stringify(sharedProperties.getObject()));
                sharedProperties.getUsedCarSearchResult();
                $state.go('eventmenu.used-car-detail');

                // console.log('In SearchCar'+
                // $scope.isAdvanceSerach);
            }
            $scope.toggleCertified = function () {
                // console.log('In toggleCertified'+
                // $scope.isCertified);
                $scope.isCertified = !$scope.isCertified;
                sharedProperties
                    .setCertifiedByTrustMaster($scope.isCertified);
                // console.log('In toggleCertified'+
                // $scope.isCertified);
            }

            $scope.togglePicture = function () {
                // console.log('In isPicture'+
                // $scope.isPicture);
                $scope.isPicture = !$scope.isPicture;
                sharedProperties
                    .setWithPicture($scope.isPicture);
                // console.log('In isPicture'+
                // $scope.isPicture);
            }

        }])
    .controller(
    'usedCarDetailCtl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        'cssInjector',
        '$ionicPopup',
        '$timeout',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, cssInjector, $ionicPopup, $timeout) {

            cssInjector.add("css/usedCarDetail.css");
            cssInjector.add("css/usedCarFilter.css");
            var usedCarSearchResultObj = sharedProperties
                .getObject();
            $scope.detailedObj = usedCarSearchResultObj;
            $scope.usedCarDetailPerCar = function (item) {
                sharedProperties
                    .setUsedCarDetailPerCar(item);
                $state.go('eventmenu.used-single-car-detail');
            }

            $scope.fnCardView = function () {
                console.log("call single card view")
                $state.go('eventmenu.used-single-car-card-view');
            }

            $scope.fnUCFilter = function () {
                //$state.go('eventmenu.used-car-filter');
                $scope.data = {}

                var html = "";
                cssInjector.add("css/usedCarFilter.css");

                html = '<div style="position: absolute !important; width: 100% !important; z-index: 95 !important;"><div class="bar" style="height:24px !important; background-color: #23272c; padding-top: 2px;">' +
                    ' <span style="color: #FFFFFF">SORT BY</span> </div>' +
                    ' <div class="row rowPadding" align="center" valign="center">' +
                    '                <div class="col filterImageRow col-center" style="height: 73px;">' +
                    '                    <div>' +
                    '                        <img src="images/price_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Price</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/km_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Kilometer</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/model_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Model Year</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/relevence_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Relevance</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '</div>' +
                    '            <div class="bar" style="height:24px !important; background-color: #23272c; padding-top: 2px;">' +
                    '                <span style="color: #FFFFFF">FILTER BY</span>' +
                    '            </div> </div>' +
                    ' <div class="row scrollView ">' +
                    '                <div class="col scrollView">' +
                    '                    <ion-scroll direction="y" class="theroot">' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik1234' +
                    '                        </button>' +
                    '                    </ion-scroll>' +
                    '                </div>' +
                    '                <div class="col scrollView">' +
                    '                    <ion-scroll direction="y" class="theroot">' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik1234' +
                    '                        </button>' +
                    '                    </ion-scroll>' +
                    '                </div>' +
                    '            </div> ';

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: html,
                    scope: $scope,
                    title: '<div class="row filterTopBar"> <div class="col-75 resultLeft"> <label class="fResultHeadFont">Used Car <span class="fResultFont"> Result</span> by</label> </label></div><div class="col-25 resultRight"><img class="resultImageRight" src="images/cross.png"></div></div>',
                    buttons: [
                        {text: 'Cancel'},
                        {
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        },
                    ]
                });
                myPopup.then(function (res) {
                    console.log('Tapped!', res);
                });
                //$timeout(function() {
                //    myPopup.close(); //close the popup after 3 seconds for some reason
                //}, 3000);
            };


        }])
    .controller(
    'usedsingleCarDetailCtl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        'cssInjector',
        '$ionicSlideBoxDelegate',
        '$ionicLoading',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, cssInjector, $ionicSlideBoxDelegate, $ionicLoading) {

            cssInjector.add("css/singleCarPage.css");
            cssInjector.add("css/usedCarDetail.css");

            $scope.loading = $ionicLoading.show({
                template: 'loading'
            });

            //$scope.loading =

            //console.log("loading check "+JSON.stringify(sharedProperties.shoLoading()));
            //$scope.loading = sharedProperties.shoLoading;
            //console.log("Used Single Car Detail Result :"
            //+ JSON.stringify(usedCarSearchResultObj));
            (function getData() {
                $scope.singleCarObj = sharedProperties
                    .getUsedCarDetailPerCar(function (data1, selectedCarItem) {
                        console.log("in single car Obj");
                        $scope.loading.hide();
                        $scope.usedCarDetailResult = data1;
                        $scope.currentSlide = 1;
                        $scope.selectedCarItem = selectedCarItem;
                        console.log("Used Single Car Details value :" + JSON.stringify($scope.usedCarDetailResult));

                        var objFeat = $scope.usedCarDetailResult.data.vehicleDescription;
                        var featureLength = $scope.usedCarDetailResult.data.vehicleDescription.length;
                        $scope.featureList = {};

                        for (var i = 0; i < featureLength; i++) {
                            $scope.featureList[myTrim(objFeat[i].featureName)] = objFeat[i].featureValue;
                            //console.log("Karthik"+JSON.stringify($scope.featureList));
                        }

                        $scope.$on('ionicView.enter', function () {
                            $ionicSlideBoxDelegate.update();
                            console.log("$scope.totalSlide" + $scope.totalSlide + "$ionicSlideBoxDelegate.slidesCount()" + $ionicSlideBoxDelegate.slidesCount());
                        });

                        $scope.slideHasChanged = function ($index) {
                            $scope.currentSlide = $index + 1;
                        };

                        $scope.usedCarDetailPerCar = function (item) {
                            console.log("usedsingleCarDetailCtl item.usedcarid" + item.usedcarid);
                            sharedProperties
                                .setUsedCarDetailPerCar(item);
                            getData();
                        }
                    })
            })();


            function myTrim(x) {
                return x.replace(/\s+|\./gm, '');
            }

        }])
    .controller(
    'usedSingleCarCardViewCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        'cssInjector',
        '$ionicPopup',
        '$timeout',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, cssInjector, $ionicPopup, $timeout) {

            cssInjector.add("css/usedCarDetail.css");
            cssInjector.add("css/UsedSingleCarCardView.css");
            console.log("in card view");
            var usedCarSearchResultObj = sharedProperties
                .getObject();
            $scope.detailedObj = usedCarSearchResultObj;
            $scope.usedCarDetailPerCar = function (item) {
                sharedProperties
                    .setUsedCarDetailPerCar(item);
                $state.go('eventmenu.used-single-car-detail');
            }


            $scope.fnUCFilter = function () {
                //$state.go('eventmenu.used-car-filter');
                $scope.data = {}

                var html = "";
                cssInjector.add("css/usedCarFilter.css");

                html = '<div style="position: absolute !important; width: 100% !important; z-index: 95 !important;"><div class="bar" style="height:24px !important; background-color: #23272c; padding-top: 2px;">' +
                    ' <span style="color: #FFFFFF">SORT BY</span> </div>' +
                    ' <div class="row rowPadding" align="center" valign="center">' +
                    '                <div class="col filterImageRow col-center" style="height: 73px;">' +
                    '                    <div>' +
                    '                        <img src="images/price_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Price</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/km_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Kilometer</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/model_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Model Year</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="col filterImageRow">' +
                    '                    <div>' +
                    '                        <img src="images/relevence_normal.png">' +
                    '                    </div>' +
                    '                    <div>' +
                    '                        <span>Relevance</span>' +
                    '                    </div>' +
                    '                </div>' +
                    '</div>' +
                    '            <div class="bar" style="height:24px !important; background-color: #23272c; padding-top: 2px;">' +
                    '                <span style="color: #FFFFFF">FILTER BY</span>' +
                    '            </div> </div>' +
                    ' <div class="row scrollView ">' +
                    '                <div class="col scrollView">' +
                    '                    <ion-scroll direction="y" class="theroot">' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik1234' +
                    '                        </button>' +
                    '                    </ion-scroll>' +
                    '                </div>' +
                    '                <div class="col scrollView">' +
                    '                    <ion-scroll direction="y" class="theroot">' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik' +
                    '                        </button>' +
                    '                        <button class="backbutton">' +
                    '                            Karthik1234' +
                    '                        </button>' +
                    '                    </ion-scroll>' +
                    '                </div>' +
                    '            </div> ';

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: html,
                    scope: $scope,
                    title: '<div class="row filterTopBar"> <div class="col-75 resultLeft"> <label class="fResultHeadFont">Used Car <span class="fResultFont"> Result</span> by</label> </label></div><div class="col-25 resultRight"><img class="resultImageRight" src="images/cross.png"></div></div>',
                    buttons: [
                        {text: 'Cancel'},
                        {
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        },
                    ]
                });
                myPopup.then(function (res) {
                    console.log('Tapped!', res);
                });
                //$timeout(function() {
                //    myPopup.close(); //close the popup after 3 seconds for some reason
                //}, 3000);
            };


        }])
    .controller(
    'usedCarFilterCtl',
    ['$scope', 'cssInjector', function ($scope, cssInjector) {
        console.log("");
        cssInjector.add("css/usedCarFilter.css");
        $scope.check = "Karthik";

        $scope.showPopup = function () {
            $scope.data = {}
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
            $timeout(function () {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);
        };


    }])



    .controller(
    'nc_searchCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',

        function ($scope, sharedProperties, $state, cssInjector) {
            console.log("in nc_searchCars");
            cssInjector.add("css/nc-search-cars.css");


            $scope.brand = sharedProperties
                .getObject();

            $scope.fn_ncSearchSetBrand = function(brandName){
                $state.go('eventmenu.gbl-temp-page', {"paramName":"brandName","paramValue":brandName, "apiOption":"ncBrandDetailsObj","urlToCall":"nc-brand-details"});
            }



            $scope.nc_sc_getMoreBrand = function () {
                $state.go('eventmenu.brand', {"retunEvent":"nc-search-cars"});
            }

            $scope.nc_sc_getByPrice = function () {
                $state.go('eventmenu.brand');
            }

            $scope.nc_sc_getUpComing = function () {
                $state.go('eventmenu.nc-upcoming-cars');
            }

            $scope.nc_sc_getLatest = function () {
                $state.go('eventmenu.nc-latest-cars');
            }

            $scope.nc_sc_getPopuar = function () {
                $state.go('eventmenu.nc-popular-cars');
            }


        }])
    .controller(
    'nc_brandDetails',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        '$ionicSlideBoxDelegate',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading, $ionicSlideBoxDelegate) {
            console.log("in nc_brandDetails");

            var brandName = $stateParams.paramName;

            var usedCarSearchResultObj = sharedProperties
                .getObject();
            $scope.ncBrandDetails = usedCarSearchResultObj;

            $scope.fn_ncSearchCar = function () {
                $state.go('eventmenu.nc-search-cars');
            }

            $scope.fn_ncBrandDetail = function (ncBrandDetail) {
                $state.go('eventmenu.gbl-temp-page', {"paramName":"modelName","paramValue":ncBrandDetail.carmodelname, "apiOption":"ncModelDetailsObj","urlToCall":"nc-model-details"});
            }


        }])
    .controller(
    'nc_modelDetails',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading) {
            console.log("in nc_modelDetails");
            var brandName = $stateParams.paramName;
            cssInjector.add("css/nc-model-details.css");
            $scope.ncModelDetails = sharedProperties
                .getObject();

            $scope.imageUrl = $scope.ncModelDetails.ncModelDetailsObj.data.defaultimageUrl;

            $scope.fn_ncSearchCar = function () {
                $state.go('eventmenu.nc-search-cars');
            }

            $scope.fn_ncSelectedColor = function (colorObj) {
                console.log(colorObj.colorImageUrl)
                $scope.imageUrl = colorObj.colorImageUrl;
            }

            $scope.fnGetOnRoadPrice = function() {
                console.log("go to on road price")
                $state.go('eventmenu.nc-get-on-road-price-form');
            }

        }])
    .controller(
    'nc_getOnRoadPriceFormCtrl',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading) {
            console.log("in nc_modelDetails");
            $scope.oem = $stateParams.oem;
            $scope.carModel = $stateParams.carModel;
            $scope.isUserAgreed = false;

            $scope.loading = $ionicLoading.show({
                template: 'loading'
            });

           sharedProperties.getCityAndPing(function(cityAndPingObjs){
               $ionicLoading.hide();

           });

            $scope.fn_isUserAgreed = function() {
                $scope.isUserAgreed = !$scope.isUserAgreed;
            }

            $scope.fn_getOnRoadPriceDetails = function(onRoadDetailsObj) {
                console.log("userName"+ onRoadDetailsObj.name);
                console.log("userEmail"+ onRoadDetailsObj.userEmail);
                console.log("userMobile"+ onRoadDetailsObj.userMobile);
                console.log("userCity"+ onRoadDetailsObj.userCity);
                console.log("userPinCode"+ onRoadDetailsObj.userPinCode);
                $scope.onRoadDetailsObj = onRoadDetailsObj;
                onRoadDetailsObj.oem = $scope.oem;
                onRoadDetailsObj.carModel = $scope.carModel;
                sharedProperties.setOnRoadRequestObj(onRoadDetailsObj);
                $state.go('eventmenu.nc-get-on-road-price-detail')

            }

        }])
    .controller(
    'nc_getOnRoadPriceDetailCtrl',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading) {
            console.log("in nc_getOnRoadPriceDetailCtrl");


            $scope.loading = $ionicLoading.show({
                template: 'loading'
            });

            sharedProperties.getOnRoadDetailsObj(function(onRoadDetailsObj, onRoadDetailRequestObj){
                $ionicLoading.hide();

                $scope.carModel = onRoadDetailRequestObj.carModel;



            });

            $scope.fn_isUserAgreed = function() {
                $scope.isUserAgreed = !$scope.isUserAgreed;
            }

        }])
    .controller(
    'gbl_tempPageCtrl',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading) {
            console.log("in nc_modelDetails");
            var paramValue = $stateParams.paramValue;
            var paramName  = $stateParams.paramName;
            var apiOption  = $stateParams.apiOption;
            var urlToCall  = $stateParams.urlToCall;
            console.log("KK param name"+ paramName +paramValue);

            $scope.loading = $ionicLoading.show({
                template: 'loading'
            });

            sharedProperties
                .getDataFromApi(apiOption, paramValue, function () {
                    console.log("in temp");
                    $ionicLoading.hide();
                    $state.go('eventmenu.'+urlToCall, {paramName:paramValue});

             })
        }])


    .controller(
    'nc_upcomingCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        function ($scope, sharedProperties, $state, cssInjector) {
            console.log("in nc_upcomingCars");
            cssInjector.add("css/nc-upcoming-cars.css");

            var searchString = "getUpcomingCarListDataWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (upcomingCars) {

                $scope.upcomingCars = upcomingCars;

            });


        }])
    .controller(
    'nc_latestCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams) {
            console.log("in nc_latestCars");
            cssInjector.add("css/nc-latest-cars.css");

            var searchString = "getLatestCarListDataWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (latestCars) {

                $scope.latestCars = latestCars;

            });

        }])
    .controller(
    'nc_popularCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams) {
            console.log("in nc_popularCars");
            cssInjector.add("css/nc-popular-cars.css");

            var searchString = "getPopularCarListDataWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (popularCars) {

                $scope.popularCars = popularCars;

            });

        }])
    .controller(
    'nc_offersAndDiscounts',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        function ($scope, sharedProperties, $state, cssInjector) {
            console.log("in nc_offersAndDiscounts");

        }])
    .controller(
    'nc_carVideos',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$sce',
        '$ionicPopup',
        function ($scope, sharedProperties, $state, cssInjector, $sce, $ionicPopup) {
            console.log("in nc_carVideos");

            cssInjector.add("css/nc-car-videos.css");
            var searchString = "getModelCarVideoList&carmodelname=Maruti+Swift";

            sharedProperties.getData(searchString, function (carVideos) {

                $scope.carVideos = carVideos;

                $scope.carVideo = $sce.trustAsHtml("<iframe width='650' height='420' src='https://www.youtube-nocookie.com/embed/ottkHgfhm1U?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>");

            });

            $scope.fnPlayVideo = function (carVideo) {
                console.log("play selected car video");
                $scope.carVideoToPa = "https://www.youtube-nocookie.com/embed/ottkHgfhm1U?rel=0&amp;controls=0&amp;showinfo=0";
                //$scope.carVideo = $sce.trustAsHtml(carVideo.videoURL);
                //$scope.showModal('templates/nc-car-play-video.html');

            }

        }])
    .controller(
    'nc_feelTheCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        function ($scope, sharedProperties, $state, cssInjector) {
            console.log("in nc_feelTheCars");

        }])
    .controller(
    'nc_footerOptionController',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        function ($scope, sharedProperties, cssInjector, $state) {
            console.log("in nc_footerOptionController");


            $scope.fn_ncFooterOptions_selectTab = function (tabOption) {
                console.log("selected tab option : " + tabOption);
                var eventToCall = "";
                switch (tabOption) {
                    case 'search' :
                        eventToCall = "eventmenu.nc-search-cars";
                        break;
                    case 'upcoming' :
                        eventToCall = "eventmenu.nc-upcoming-cars";
                        break;
                    case 'latest' :
                        eventToCall = "eventmenu.nc-latest-cars";
                        break;
                    case 'popular' :
                        eventToCall = "eventmenu.nc-popular-cars";
                        break;
                }

                $state.go(eventToCall);

            }


        }])

    .controller(
    'autoNewsCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams) {
            console.log("in nc_popularCars");
            cssInjector.add("css/nc-popular-cars.css");

            var searchString = "getAutoNewsWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (autoNews) {

                $scope.autoNews = autoNews;

            });
            $scope.fnDetailedNews = function (singeAutoNews) {
                console.log("get detailed car news" + singeAutoNews.carNewsId);
                $state.go('eventmenu.auto-detailed-news', {newsId: singeAutoNews.carNewsId});
            }

        }])
    .controller(
    'autoDetailedNewsCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in nc_popularCars");
            cssInjector.add("css/nc-popular-cars.css");


            var carNewsID = $stateParams.newsId;
            console.log("car news id :" + carNewsID);
            var searchString = "getDetailAutoNewsHtmlWithStatus&CarNewsId=" + carNewsID;

            sharedProperties.getData(searchString, function (autoDetailedNews) {
                $scope.autoDetailedNews = $sce.trustAsHtml(autoDetailedNews);

            });


        }])
    .controller(
    'LoadingCtrl', ['$scope', '$ionicLoading', function ($scope, $ionicLoading) {

        // Trigger the loading indicator
        $scope.show = function () {

            // Show the loading overlay and text
            $scope.loading = $ionicLoading.show({

                // The text to display in the loading indicator
                content: 'Loading',

                // The animation to use
                animation: 'fade-in',

                // Will a dark overlay or backdrop cover the entire view
                showBackdrop: true,

                // The maximum width of the loading indicator
                // Text will be wrapped if longer than maxWidth
                maxWidth: 200,

                // The delay in showing the indicator
                showDelay: 500
            });
        };

        // Hide the loading indicator
        $scope.hide = function () {
            $scope.loading.hide();
        };
    }])
