angular
    .module('ionicApp', ['ionic', 'angular.css.injector', 'ionSlider','youtube-embed'])

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
                cache : false,
                url: "/city/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/city.html",
                        controller: "cityCtrl"
                    }
                }
            })
            .state('eventmenu.pincode', {
                cache : false,
                url: "/pincode/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pincode.html",
                        controller: "pincodeCtrl"
                    }
                }
            })
            .state('eventmenu.offer-and-discount-city', {
                url: "/offer-and-discount-city/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/offer-and-discount-city.html",
                        controller: "offerAndDiscountCityCtrl"
                    }
                }
            })

            .state('eventmenu.offer-and-discount-brand', {
                url: "/offer-and-discount-brand/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/offer-and-discount-brand.html",
                        controller: "offerAndDiscountBrandCtrl"
                    }
                }
            })
            .state('eventmenu.offer-and-discount-model', {
            cache : false,
                url: "/offer-and-discount-model/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/offer-and-discount-model.html",
                        controller: "offerAndDiscountModelCtrl"
                    }
                }
            })
            .state('eventmenu.price-range', {
                url: "/price-range/:urlToCaller",
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
            .state('eventmenu.brand1', {
                url: "/brand1/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/brand1.html",
                        controller: "brandCtrl1"
                    }
                }
            })
            .state('eventmenu.varient-id', {
                cache : false,
                url: "/varient-id/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/varient-id.html",
                        controller: "varientIdCtrl"
                    }
                }
            })
            .state('eventmenu.valuation-varient-id', {
                url: "/valuation-varient-id/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/valuation-varient-id.html",
                        controller: "valuationVarientIdCtrl"
                    }
                }
            })


            .state('eventmenu.model', {
                url: "/model/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/model.html",
                        controller: "modelCtrl"
                    }
                }
            })
            .state('eventmenu.valuation-model', {
                url: "/valuation-model/:retunEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/valuation-model.html",
                        controller: "valuationModelCtrl"
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

            .state('eventmenu.used-car-valuation', {
                url: "/used-car-valuation",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-valuation.html",
                        controller: "usedCarValuationCtrl"
                    }
                }
            })
            .state('eventmenu.used-car-valuation-show', {
                url: "/used-car-valuation-show",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-valuation-show.html",
                        controller: "usedCarValuationShowCtrl"
                    }
                }
            })
            .state('eventmenu.used-car-valuation-get-detail', {
                url: "/used-car-valuation-get-detail",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-valuation-get-detail.html",
                        controller: "usedCarValuationGetDetailCtrl"
                    }
                }
            })
            .state('eventmenu.year', {
                url: "/year/:returnEvent",
                views: {
                    'menuContent': {
                        templateUrl: "templates/year.html",
                        controller: "yearCtrl"
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
                cache : false,
                url: "/used-car-detail/:isTrusted",
                views: {
                    'menuContent': {
                        templateUrl: "templates/used-car-detail.html",
                        controller: "usedCarDetailCtl"
                    }
                }
            })
            .state('eventmenu.used-single-car-detail', {
                url: "/used-single-car-detail/:isTrusted",
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
            .state('eventmenu.nc-search-cars-by-price', {
                url: "/nc-search-cars-by-price",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-search-cars-by-price.html",
                        controller: "nc_searchCarsByPriceCtrl"
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
            .state('eventmenu.nc-offers-and-dicounts-show', {
                url: "/nc-offers-and-dicounts-show",
                views: {
                    'menuContent': {
                        templateUrl: "templates/nc-offers-and-dicounts-show.html",
                        controller: "nc_offersAndDiscountsShow"
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
                url: "/nc-get-on-road-price-form/:oem/:carModel/:carImage/:carRating",
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

            .state('eventmenu.sell-a-car', {
                url: "/sell-a-car",
                views: {
                    'menuContent': {
                        templateUrl: "templates/sell-a-car.html",
                        controller: "sellACarCtrl"
                    }
                }
            })
            .state('eventmenu.trust-mark-info', {
                url: "/trust-mark-info",
                views: {
                    'menuContent': {
                        templateUrl: "templates/trust-mark-info.html",
                        controller: "trustMarkInfoCtrl"
                    }
                }
            })
            .state('eventmenu.compare-cars', {
                cache : false,
                url: "/compare-cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/compare-cars.html",
                        controller: "compareCarsCtrl"
                    }
                }
            })
            .state('eventmenu.show-compare', {
                url: "/show-compare",
                views: {
                    'menuContent': {
                        templateUrl: "templates/show-compare.html",
                        controller: "showCompareCtrl"
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
            .state('eventmenu.review-user-and-road-test', {
            	 cache : false,
                url: "/review-user-and-road-test/:reviewType/:isHome",
                views: {
                    'menuContent': {
                        templateUrl: "templates/review-user-and-road-test.html",
                        controller: "reviewUserAndRoadTestCtrl"
                    }
                }
            })
            .state('eventmenu.review-user-and-road-test-detail', {
                url: "/review-user-and-road-test-detail/:reviewtype",
                views: {
                    'menuContent': {
                        templateUrl: "templates/review-user-and-road-test-detail.html",
                        controller: "reviewUserAndRoadTestDetailCtrl"
                    }
                }
            })
            .state('eventmenu.expert-review', {
                url: "/expert-review/:reviewId/:reviewText",
                views: {
                    'menuContent': {
                        templateUrl: "templates/expert-review.html",
                        controller: "expertReviewCtrl"
                    }
                }
            })
            .state('eventmenu.user-review', {
                url: "/user-review/:reviewType",
                views: {
                    'menuContent': {
                        templateUrl: "templates/user-review.html",
                        controller: "userReviewCtrl"
                    }
                }
            })
            .state('eventmenu.user-review-detail', {
                url: "/user-review-detail/:reviewId/:reviewType/:indexId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/user-review-detail.html",
                        controller: "userReviewDetailCtrl"
                    }
                }
            })
            .state('eventmenu.car-insurance', {
                url: "/car-insurance",
                views: {
                    'menuContent': {
                        templateUrl: "templates/car-insurance.html",
                        controller: "carInsuranceCtrl"
                    }
                }
            })
            .state('eventmenu.car-loan', {
                url: "/car-loan",
                views: {
                    'menuContent': {
                        templateUrl: "templates/car-loan.html",
                        controller: "carLoanCtrl"
                    }
                }
            })
            .state('eventmenu.car-dealers', {
                url: "/car-dealers",
                views: {
                    'menuContent': {
                        templateUrl: "templates/car-dealers.html",
                        controller: "carDealersCtrl"
                    }
                }
            })
            .state('eventmenu.car-healp-line', {
                url: "/car-healp-line",
                views: {
                    'menuContent': {
                        templateUrl: "templates/car-healp-line.html",
                        controller: "carHealpLineCtrl"
                    }
                }
            })
            .state('eventmenu.car-road-side-assitance', {
                url: "/car-road-side-assitance",
                views: {
                    'menuContent': {
                        templateUrl: "templates/car-road-side-assitance.html",
                        controller: "carRoadSideAssitanceCtrl"
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
            objectValue.pincode = "";
            objectValue.brand = "";
            objectValue.model = "";
            objectValue.fuel = "";
            objectValue.km = ""
            objectValue.vehicleType = '';
            objectValue.modelYear = '';
            objectValue.transmission = '';
            objectValue.sellerType = '';
            objectValue.sellerType = '';

            objectValue.userDetails = {};
            objectValue.userDetails.name = '';
            objectValue.userDetails.userEmail = "";
            objectValue.userDetails.userMobile = "";


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
            objectValue.reviewUserAndRoadTestDetailObj = {};

            objectValue.reqParam = {};
            objectValue.reqParam.oem = "";
            objectValue.reqParam.carModel = "";
            objectValue.reqParam.carImage = "";
            objectValue.reqParam.carRating = "";

            objectValue.cityObj = {};
            objectValue.pinCodeObj = {};
            objectValue.reviewType = "";
            var onRoadDetailRequestObj = {};
            var compareDataObj = {};
            var reviewReturnEvent = {};
            objectValue.currentModel = "";
            objectValue.varientDetailObj = {};
            objectValue.varientDetailObj.first ={};
            objectValue.varientDetailObj.second={};
            objectValue.reviewObj = {};
            objectValue.sortBy = 'Relevance';
            objectValue.isAsending = true;
            objectValue.isTrusted = false;

            objectValue.fuelTypeObj = [{'type':'Diesel','isSelected':false},
                                        {'type':'Petrol','isSelected':false},
                                        {'type':'CNG','isSelected':false},
                                        {'type':'LPG','isSelected':false},
                                        {'type':'Electric','isSelected':false}];

            objectValue.KMsDrivenObj = [{'kmDisply':'Below 5,000 km','link_rewrite':'Below-5000-km', 'isSelected':false},
                {'kmDisply':'Below 20,000 km','link_rewrite':'Below-20000-km', 'isSelected':false},
                {'kmDisply':'Below 50,000 km','link_rewrite':'Below-50000-km', 'isSelected':false},
                {'kmDisply':'Below 2,00,000 km','link_rewrite':'Below-200000-km', 'isSelected':false},
                {'kmDisply':'Above 2,00,000 km','link_rewrite':'Above-200000-km', 'isSelected':false}];

            objectValue.vehicleTypeObj = [{'vehicleType':'Hatchback', 'isSelected':false, 'link_rewrite':'hatchback'},
                {'vehicleType':'Sedans', 'isSelected':false, 'link_rewrite':'sedans'},
                {'vehicleType':'SUV', 'isSelected':false, 'link_rewrite':'suv'},
                {'vehicleType':'MUV', 'isSelected':false, 'link_rewrite':'muv'},
                {'vehicleType':'Luxury', 'isSelected':false, 'link_rewrite':'luxury'},
                {'vehicleType':'Hybrid', 'isSelected':false, 'link_rewrite':'hybrid'},
                {'vehicleType':'Coupe', 'isSelected':false, 'link_rewrite':'coupe'},
                {'vehicleType':'Minivans', 'isSelected':false, 'link_rewrite':'minivans'},
                {'vehicleType':'Wagons', 'isSelected':false, 'link_rewrite':'wagons'},
                {'vehicleType':'Diesel Engines', 'isSelected':false, 'link_rewrite':'diesel-engines'}
            ]

            objectValue.modelYearObj = [{'mYear':'2013 - Onward','link_rewrite':'2013-onward', 'isSelected':false},
                {'mYear':'2011 - 2012','link_rewrite':'2011-2012', 'isSelected':false},
                {'mYear':'2008 - 2010','link_rewrite':'2008-2010', 'isSelected':false},
                {'mYear':'2004 - 2007','link_rewrite':'2004-2007', 'isSelected':false},
                {'mYear':'Before - 2003','link_rewrite':'Before-2003', 'isSelected':false}];

            objectValue.transmissionObj = [{'transType':'Automatic','link_rewrite':'automatic', 'isSelected':false},
                {'transType':'Manual','link_rewrite':'manual', 'isSelected':false}];

            objectValue.sellerTypeObj = [{'sellerType':'Individual','link_rewrite':'individual', 'isSelected':false},
                {'sellerType':'Dealer','link_rewrite':'dealer', 'isSelected':false},
                {'sellerType':'Certified Dealer','link_rewrite':'certified-dealer', 'isSelected':false}];


            objectValue.varientDetailObj.first.imageUrlList = "images/select_car_1.png";
            objectValue.varientDetailObj.first.displayVariantId = "Select Car 1";
            objectValue.varientDetailObj.first.OnRoadPrice = "";

            objectValue.varientDetailObj.second.imageUrlList = "images/select_car_2.png";
            objectValue.varientDetailObj.second.displayVariantId = "Select Car 2";
            objectValue.varientDetailObj.second.OnRoadPrice = "";
            objectValue.usedCarValuation = {};
            objectValue.usedCarValuation.getIbbCityList = {};
            objectValue.usedCarValuation.getUsedCarValuationOemByYear ={};
            objectValue.usedCarValuation.getUsedCarSearchResultDataWithStatus = {};
            objectValue.usedCarValuationGetDetail = {};
            objectValue.usedCarValuationGetDetail.selectedYear = '2015';
            objectValue.usedCarValuationGetDetail.selectedBrand = "Select a Brand";
            objectValue.usedCarValuationGetDetail.selectedModel = "Select Model";
            objectValue.usedCarValuationGetDetail.selectedVariant = "Select Variant";
            objectValue.usedCarValuationGetDetail.selectedCity = "Select City";
            objectValue.usedCarValuationGetDetail.yearList = ['1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];
            objectValue.usedCarValuationGetDetail.mileage = "55000";
            objectValue.offersAndDiscountObj = {};
            objectValue.offersAndDiscountObj.selectedCity = "New Delhi";
            objectValue.offersAndDiscountObj.selectedBrand = "Select Brand";
            objectValue.offersAndDiscountObj.selectedModel = "Select Model";
            objectValue.offersAndDiscountObj.OfferAndDiscountBrandAndModelObj = {};
            objectValue.priceRange = {};
            objectValue.priceRange =  {
                "status":"true",
                "data":{
                    "newCarFilterPriceRange":[
                        {
                            "displayPriceRange":"Below 1 Lac",
                            "linkRewrite":"below-1-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"1 lakh - 2 lakh",
                            "linkRewrite":"1-lakh-to-2-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"2 lakh - 3 lakh",
                            "linkRewrite":"2-lakh-to-3-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"3 lakh - 4 lakh",
                            "linkRewrite":"3-lakh-to-4-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"4 lakh - 5 lakh",
                            "linkRewrite":"4-lakh-to-5-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"5 lakh - 6 lakh",
                            "linkRewrite":"5-lakh-to-6-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"6 lakh - 8 lakh",
                            "linkRewrite":"6-lakh-to-7-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"8 lakh - 10 lakh",
                            "linkRewrite":"8-lakh-to-10-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"10 lakh - 30 lakh",
                            "linkRewrite":"10-lakh-to-30-lakh",
                            "isSelected" : false
                        },
                        {
                            "displayPriceRange":"Above 30 Crore",
                            "linkRewrite":"above-30-crore",
                            "isSelected" : false
                        }
                    ]
                }
            };


            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=getOfferCityList")
                .success(
                function (data1, status) {
                    objectValue.contact = data1.data.CarDiscountCities;
                })
                .error(function () {

                });

            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getNewCarPriceRangeDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
                .success(
                function (data1, status) {
                    objectValue.priceRanageObj = data1;
                })


            $http
                .post(
                "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getOemFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
                .success(
                function (data1, status) {
                    //console.log("brand : " +
                    //    JSON.stringify(data1));
                    objectValue.brandObj = data1.data.oemList;
                })

            return {
                setUserDetail : function(userDetails){
                    objectValue.userDetails = userDetails;
                },
                setGOPR : function(reqParam){
                    objectValue.reqParam = reqParam;
                },
                setSortBy : function(sortBy, sortOrder){
                    objectValue.sortBy = sortBy;
                    objectValue.isAsending = sortOrder;
                },
                setCity: function (cityVal) {
                    // console.log("Service"+cityVal);
                    objectValue.usedCarValuationGetDetail.selectedCity = cityVal;
                    objectValue.city = cityVal;
                },
                setPincode: function (pinCode){
                	objectValue.pincode = pinCode;
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
                    objectValue.usedCarValuationGetDetail.selectedBrand = brand;
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
                getUsedCarSearchResult: function (isTruested, cb) {
                    var serachString = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&parameter=getUsedCarSearchResultDataWithStatus&format=Gson&startLimit=1&endLimit=20";

                        serachString += "&City=" + objectValue.city;
                    if (objectValue.price !== '') {
                        console.log("objectValue.price"+objectValue.price);
                        serachString += "&PriceRange=" + objectValue.price;
                    }
                    if (objectValue.model !== '') {
                        console.log("objectValue.model"+ objectValue.model);
                        serachString += "&CarName=" + objectValue.model;
                    }
                    if (objectValue.brand !== '') {
                        console.log("objectValue.brand"+ objectValue.brand);
                        serachString += "&Brand=" + objectValue.brand;
                    }
                    if (objectValue.fuel !== '') {
                        console.log("objectValue.fuel "+ objectValue.fuel );
                        serachString += "&FuelType=" + objectValue.fuel;
                    }
                    if (objectValue.km !== '') {
                        console.log("objectValue.km"+ objectValue.km);
                        serachString += "&KM_Done=" + objectValue.km;
                    }
                    if (objectValue.vehicleType !== '') {
                        console.log("objectValue.vehicleType"+ objectValue.vehicleType);
                        serachString += "&Vehicletype=" + objectValue.vehicleType;
                    }
                    if (objectValue.modelYear !== '') {

                        serachString += "&modelYear=" + objectValue.modelYear;
                    }
                    if (objectValue.transmission !== '') {

                        serachString += "&Transmission=" + objectValue.transmission;
                    }
                    if (objectValue.sellerType !== '') {

                        serachString += "&sellerType=" + objectValue.sellerType;
                    }
                    if (objectValue.certifiedByTrustMaster === true) {

                        serachString += "&certificationid=1";
                    }
                    if (objectValue.withPicture === true) {
                        
                        serachString += "&photo=with-photos";
                    }
                    if (objectValue.isTrusted  === true || isTruested ) {

                        serachString += "&certificationid=1";
                    }

                    console.log("Serach String " + serachString);

                    $http
                        .post(serachString)
                        .success(
                        function (data1, status) {

                            function dynamicSort(property) {
                                var sortOrder = 1;
                                if(property[0] === "-") {
                                    sortOrder = -1;
                                    property = property.substr(1);
                                }
                                return function (a,b) {
                                    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                                    return result * sortOrder;
                                }
                            }

                            if( objectValue.sortBy === 'Relevance' ){
                                objectValue.usedCarSearchResult = data1;
                            }else if (objectValue.sortBy === 'Price' ){
                                getSortData("expectedPrice")
                            }else if (objectValue.sortBy === 'KM' ){
                                getSortData("driven")
                            }else if (objectValue.sortBy === 'ModelYear' ){
                                getSortData("modelYear")
                            }



                            function getSortData(propertyName){
                                if(objectValue.isAsending ) {
                                    data1.data.result.sort(dynamicSort(propertyName));
                                }else {
                                    data1.data.result.sort(dynamicSort("-"+ propertyName));
                                }
                                objectValue.usedCarSearchResult = data1;
                            }

                            objectValue.usedCarSearchResult = data1;

                            cb(objectValue.usedCarSearchResult);
                        })
                },
                getObject: function () {
                    //console.log("objectValue" + JSON.stringify(objectValue));
                    return objectValue;
                },
                setModel: function (model) {
                    console.log("model "+ model);
                    objectValue.usedCarValuationGetDetail.selectedModel = model;
                    objectValue.model = model;
                },
                setValuationModel: function (model) {
                    console.log("model "+ model);
                    objectValue.usedCarValuationGetDetail.selectedModel = model;
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
                getNCBrandDetails: function (brandName, callBackFun) {
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
                getNCModelDetails: function (modelName, callBackFn) {
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

                getDataFromApi: function (apiOption, paramValue, callBackFun) {
                    var urlToSearch = url;
                    switch (apiOption) {
                        case 'ncBrandDetailsObj':
                            urlToSearch += "getModelFeedsWithStatus&oem=" + paramValue;
                            break;
                        case 'ncModelDetailsObj':
                            urlToSearch += "getModelDetailsWithStatus&ModelName=" + paramValue;
                            break;
                        case 'reviewUserAndRoadTestDetailObj':
                            urlToSearch += "getExpertReviewsWithStatus&startLimit=1&endLimit=2&ModelName="+objectValue.model;
                            break;
                    }

                    console.log("get data from api" + urlToSearch);

                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            //console.log("get data from api" + JSON.stringify(data));
                            objectValue[apiOption] = data;
                            console.log("get data from api" + JSON.stringify(objectValue.ncBrandDetailsObj));
                            callBackFun(data);
                        })
                },
                getCityAndPin: function (callBackFun) {
                    var urlToSearch = url;

                    var cityUrl = urlToSearch + "getDataForOnRoadPriceWithStatus";
                    var pinUrl = urlToSearch + "getPincodesForCity&city=New%20Delhi";

                    var cityPost = $http.post(cityUrl);
                    var pingPost = $http.post(pinUrl);
                    $q.all([cityPost, pingPost]).then(function (cityAndPingObjs) {
                        console.log("city and pin " + JSON.stringify(cityAndPingObjs));
                        objectValue.cityObj = cityAndPingObjs[0];
                        objectValue.pinCodeObj = cityAndPingObjs[1];
                        callBackFun(cityAndPingObjs);
                    });

                },
                getPinCode: function (callBackFun) {
                    var urlToSearch = url;
                    var pinUrl = urlToSearch + "getPincodesForCity&city="+objectValue.city;
                    $http
                        .post(pinUrl)
                        .success(
                        function (data, status) {
                            objectValue.pinCodeObj = data;
                            console.log('PinCode', data);
                            callBackFun(data);
                        })

                },
                setOnRoadRequestObj: function (onRoadDetailRequest) {
                    console.log("request obj " + JSON.stringify(onRoadDetailRequest));
                    onRoadDetailRequestObj = onRoadDetailRequest;
                },
                getOnRoadDetailsObj: function (callBackFun) {
                    var urlToSearch = url
                        + "getOnRoadPriceWithStatus&MobileNo=" + onRoadDetailRequestObj.userMobile + "&BuyingTime=7&"
                        + "UserName=" + onRoadDetailRequestObj.name + "&ModelName=" + onRoadDetailRequestObj.carModel + "&PinCode=" + onRoadDetailRequestObj.userPinCode
                        + "&EmailId=" + onRoadDetailRequestObj.userEmail + "&OemName=" + onRoadDetailRequestObj.oem + "&City=" + onRoadDetailRequestObj.userCity;
                    console.log("getNCModelDetails : " + urlToSearch);

                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("get data from api" + data);
                            callBackFun(data, onRoadDetailRequestObj);
                        })
                },
                getCity: function () {
                    return objectValue.cityObj;
                },
                getPriceRange: function (callBackFun) {
                    $http
                        .post(
                        "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getNewCarPriceRangeDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
                        .success(
                        function (data1, status) {
                            objectValue.priceRanageObj = data1;
                            callBackFun(data1);
                        })

                },
                getHttpData: function (urlForCount, callBackFun) {
                    var urlToSearch = url + urlForCount;
                    console.log("getHttpData URL : " + urlToSearch);
                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            console.log("get data from api" + data);
                            callBackFun(data);
                        })

                },
                getMultipleHttpData: function (urlArrayForData, callBackFun) {
                    console.log("URL To Search " + JSON.stringify(urlArrayForData));
                    $q.all(urlArrayForData).then(function (httpCallBackData) {
                        callBackFun(httpCallBackData);
                    });
                },
                setCompareData: function (compareData) {
                    compareDataObj = compareData;
                },
                getCompareData: function () {
                    console.log("compareDataObj" + JSON.stringify(compareDataObj));
                    return compareDataObj;
                },

                setReviewReturnEvent: function (reviewReturnEventParam) {
                    reviewReturnEvent = reviewReturnEventParam;
                },
                getReviewReturnEvent: function () {
                    return reviewReturnEvent;
                },
                cleanBrandAndModel: function () {
                    objectValue.brand = "";
                    objectValue.model = "";
                },
                getBrand: function () {
                    return objectValue.brand;
                },
                getModel: function () {
                    console.log("get model "+ objectValue.model);
                    return objectValue.model;
                },
                setReviewType : function( reviewTypeParam) {
                    objectValue.reviewType = reviewTypeParam;
                },
                getReviewType : function( ) {
                    return objectValue.reviewType ;
                },
                setVarientID : function(varientObj){
                    console.log("set varient "+ JSON.stringify(varientObj));
                    objectValue.usedCarValuationGetDetail.selectedVariant = varientObj.carVariantId
                    objectValue.varientDetailObj[objectValue.currentModel] = varientObj;
                },
                setValuationVarientID : function(varient){
                    objectValue.usedCarValuationGetDetail.selectedVariant = varient
                },
                setCurrentModelNumber : function(modelNumber){
                    objectValue.currentModel = modelNumber;
                },
                setUsedTrustedCar : function(urlToSearch){
                    var urlToSearch = url + urlToSearch;
                    console.log("getHttpData URL : " + urlToSearch);
                    $http
                        .post(urlToSearch)
                        .success(
                        function (data, status) {
                            //console.log("get data from api" + data);
                            objectValue.usedCarSearchResult = data;
                        })
                },
                setCurrentModelNumber : function(modelNumber){
                    objectValue.currentModel = modelNumber;
                },
                setUsedCarValuation : function(multiData){
                    objectValue.usedCarValuation.getIbbCityList = multiData[0].data;
                    objectValue.usedCarValuation.getUsedCarValuationOemByYear = multiData[1].data;
                    objectValue.usedCarValuation.getUsedCarSearchResultDataWithStatus =  multiData[2].data;

                    console.log("setUsedCarValuation :"+ JSON.stringify(objectValue.usedCarValuation)) ;
                },
                getUsedCarValuation : function(){
                    return objectValue.usedCarValuationGetDetail;
                },
                setUsedCarValuationYear : function(modelYear){
                     objectValue.usedCarValuationGetDetail.selectedYear = modelYear;
                },
                getOfferAndDiscountObj : function(){
                       return objectValue.offersAndDiscountObj;
                },
                setOfferAndDiscountCity : function (city) {
                       objectValue.offersAndDiscountObj.selectedCity = city;
                },
                   setOfferAndDiscountBrand : function (brand) {
                       objectValue.offersAndDiscountObj.selectedBrand = brand;
                },
                setOfferAndDiscountModel : function (model) {
                       objectValue.offersAndDiscountObj.selectedModel = model;
                },
                setOfferAndDiscountBrandAndModelObj : function(OfferAndDiscountBrandAndModelObj){
                    objectValue.offersAndDiscountObj.OfferAndDiscountBrandAndModelObj = OfferAndDiscountBrandAndModelObj;
                },
                setReviewObject : function(reviewObj){
                    objectValue.reviewObj = reviewObj;
                },
                getReviewObject : function(reviewObj){
                    return objectValue.reviewObj ;
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
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    })

    // *************  Directive  ********************
    //Used Car
    .directive('myYoutube', function($sce) {
        return {
            restrict: 'EA',
            scope: { code:'=' },
            replace: true,
            template: '<div style="height:90% !important; width: 90% !important;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                console.log('here');
                scope.$watch('code', function (newVal) {
                    if (newVal) {
                        scope.url = $sce.trustAsResourceUrl(newVal);
                    }
                });
            }
        };
    })

    .directive('embedSrc', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var current = element;
                scope.$watch(function() { return attrs.embedSrc; }, function () {
                    var clone = element
                        .clone()
                        .attr('src', attrs.embedSrc);
                    current.replaceWith(clone);
                    current = clone;
                });
            }
        };
    })
    .directive('ngCity', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/city-CD.html"
        }
    })
    .directive('ngPincode', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/pincode-CD.html"
        }
    })
    .directive('ngCompareCarsSelectCar', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/compare-cars-select-car-CD.html",
            scope: {
                customerInfo: '=info'
            },
        }
    })
    .directive('ngReviewStars', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/review-stars-CD.html",
        }
    })
    .directive('ngPriceRange', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/price-range-CD.html"
        }
    })
    .directive('ngNcMoreOption', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/nc-new-car-more-option-popup-CD.html"
        }
    })
    .directive('ngBrand', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/brand-CD.html"
        }
    })
    .directive('ngYear', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/year-CD.html"
        }
    })
    .directive('ngBrandModel', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/model-CD.html"
        }
    })
    .directive('ngValuationModel', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/valuation-model-CD.html"
        }
    })
    .directive('ngSearchHeaderBar', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/search-header-bar-CD.html"
        }
    })

    //New Car
    .directive('ngUsedCarValuation', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/used-car-valuation-CD.html"
        }
    })
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
    .directive('ngNcCarOffer', function () {
        return {
            restrict: 'AEC',
            templateUrl: "templates/nc-car-offer-CD.html"
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
    'MainCtrl',['$scope', '$ionicSideMenuDelegate', 'cssInjector', function ($scope, $ionicSideMenuDelegate, cssInjector) {
        // StatusBar.hide();

        cssInjector.add("css/event-menu.css");

        $scope.toggleRight = function (groupName) {
            console.log("toggle right");
            //toggleGroup(groupName);
            $ionicSideMenuDelegate.toggleRight();
        };

        $scope.OpenUpNewCar = function (groupName) {
            //toggleGroup(groupName);
            $scope.shown = !$scope.shown;
        };

        $scope.OpenUpUsedCar = function (groupName) {
            //toggleGroup(groupName);
            $scope.shownUsed = !$scope.shownUsed;
        };

        $scope.OpenUpReviews = function (groupName) {
            //toggleGroup(groupName);
            $scope.shownReview = !$scope.shownReview;
        };

        $scope.OpenUpUtilities = function (groupName) {
            //toggleGroup(groupName);
            $scope.shownUtility = !$scope.shownUtility;
        };
        $scope.OpenUpFeedback = function (groupName) {
            //toggleGroup(groupName);
            $scope.shownFeedBack = !$scope.shownFeedBack;
        };


        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };



    }])




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
        '$stateParams',
        '$ionicPlatform',
        '$ionicLoading',

        function ($scope, sharedProperties, $state,$stateParams, $ionicPlatform, $ionicLoading) {

            $scope.city = "All India";
            var retunEvent = $stateParams.retunEvent;
            $scope.contactObj = sharedProperties.getObject();

            $scope.clearSearch = function () {
                $scope.search = '';
            };


            $scope.newCity = function (selectedCity) {
                sharedProperties.setCity(selectedCity);
                $scope.search = '';
                 console.log("Return Event " + retunEvent);
                if(retunEvent == 'used-car-valuation-get-detail'){
                    $state.go('eventmenu.used-car-valuation-get-detail');
                }
                else if (retunEvent == 'nc-get-on-road-price-form'){
                    $scope.loading = $ionicLoading.show({
                        template: ''
                    });
                    sharedProperties.getCityAndPin(function(cityAndPingObjs){
                        $ionicLoading.hide();
                        //console.log("city and ping"+ JSON.stringify(cityAndPingObjs));
                        $state.go('eventmenu.nc-get-on-road-price-form');

                    });

                }
                else {
                    $state.go('eventmenu.used-car-home');
                }
            }
        }])
        .controller(
    'pincodeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',

        function ($scope, sharedProperties, $state,$stateParams) {
            var retunEvent = $stateParams.retunEvent;
            $scope.pincode = "";
            $scope.contactObj = sharedProperties.getObject();

            $scope.clearSearch = function () {
                $scope.search = '';
            }
            $scope.fn_pincode = function (pincodeobj) {
                sharedProperties.setPincode(pincodeobj.pincode);
                console.log('retunEvent', retunEvent);
                $scope.search = '';
                $state.go('eventmenu.'+ retunEvent);
            }
        }])
    .controller(
    'priceRangeCtrl',
    [
        '$scope',
        'sharedProperties',
        '$stateParams',
        '$state',
        function ($scope, sharedProperties, $stateParams, $state) {
            var urlToCaller = $stateParams.urlToCaller;
            $scope.price = "...";
            if(urlToCaller === 'used-car-home'){
                $scope.priceRange =  {
                    "status":"true",
                    "data":{
                        "newCarFilterPriceRange":[
                            {
                                "displayPriceRange":"Below 1 Lac",
                                "linkRewrite":"below-1-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"1 lakh - 2 lakh",
                                "linkRewrite":"1-lakh-to-2-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"2 lakh - 3 lakh",
                                "linkRewrite":"2-lakh-to-3-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"3 lakh - 4 lakh",
                                "linkRewrite":"3-lakh-to-4-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"4 lakh - 5 lakh",
                                "linkRewrite":"4-lakh-to-5-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"5 lakh - 6 lakh",
                                "linkRewrite":"5-lakh-to-6-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"6 lakh - 8 lakh",
                                "linkRewrite":"6-lakh-to-7-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"8 lakh - 10 lakh",
                                "linkRewrite":"8-lakh-to-10-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"10 lakh - 30 lakh",
                                "linkRewrite":"10-lakh-to-30-lakh",
                                "isSelected" : false
                            },
                            {
                                "displayPriceRange":"Above 30 Crore",
                                "linkRewrite":"above-30-crore",
                                "isSelected" : false
                            }
                        ]
                    }
                };
            }else {
                $scope.priceRange = sharedProperties.getPriceRange(function (priceRange) {
                    $scope.priceRange = priceRange;
                    console.log(JSON.stringify(priceRange));
                    for (var i = 0; i < $scope.priceRange.data.newCarFilterPriceRange.length; i++) {
                        $scope.priceRange.data.newCarFilterPriceRange[i].isSelected = false;
                    }
                });
            }

            $scope.clearSearch = function () {
                $scope.search = '';
            };
            $scope.selectedPrice = [];

            $scope.newPrice = function (priceSelected) {

                var priceObj = {
                    "1-lakh-3-lakh":"1-lakh-to-3-lakh",
                    "3-lakh-5-lakh":"3-lakh-to-5-lakh",
                    "1-lakh-5-lakh":"1-lakh-to-5-lakh",
                    "5-lakh-10-lakh":"5-lakh-to-10-lakh",
                    "10-lakh-20-lakh":"10-lakh-to-20-lakh",
                    "20-lakh-50-lakh":"20-lakh-to-50-lakh",
                    "50-lakh-1-crore":"50-lakh-to-1-crore",
                    "above-1-crore":"above-1-crore",
                }

                if(priceSelected.isSelected){
                    priceSelected.isSelected = false;
                    $scope.selectedPrice.splice($scope.selectedPrice.indexOf(priceSelected.linkRewrite), 1);
                }else {
                    priceSelected.isSelected = true;
                    $scope.selectedPrice.push(priceSelected.linkRewrite);
                }
                console.log("price selected " + priceSelected + JSON.stringify($scope.selectedPrice));


                sharedProperties.setPrice($scope.selectedPrice.join("+"));

                var urlToCount = "getNewCarSearchResultDataCount&PriceRange="+$scope.selectedPrice.join("+");
                sharedProperties.getHttpData(urlToCount, function(data){
                    $scope.$emit('priceRangeCarCount', data);
                })

                $scope.search = '';
                if(urlToCaller) {
                    $state.go('eventmenu.' + urlToCaller);
                }
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
                if(retunEvent == 'review-user-and-road-test'){
                    var reviewType = sharedProperties.getReviewType();
                    $state.go('eventmenu.'+retunEvent,{"reviewType":reviewType});
                }else if(retunEvent == 'compare-cars'){
                    $state.go('eventmenu.model',{"retunEvent":retunEvent});
                }
                else {
                    $state.go('eventmenu.'+retunEvent);
                }

            }
        }])
    .controller(
    'brandCtrl1',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, $state, $stateParams, $ionicLoading) {
            $scope.brand1 = "...";
            var retunEvent = $stateParams.retunEvent;
            console.log('KK retunEvent'+ retunEvent);
            $scope.brandTempObj = sharedProperties.getObject();
            $scope.clearSearch = function () {
                $scope.search = '';
            };
            $scope.newBrand = function (brand) {
                console.log(brand);

                $scope.search = '';
                if(retunEvent == 'review-user-and-road-test'){
                    sharedProperties.setBrand(brand);
                    var reviewType = sharedProperties.getReviewType();
                    $state.go('eventmenu.'+retunEvent,{"reviewType":reviewType});
                }else if(retunEvent == 'compare-cars'){
                    sharedProperties.setBrand(brand);
                    $state.go('eventmenu.model',{"retunEvent":retunEvent});
                }
                else if(retunEvent === 'nc-brand-details'){
                    console.log('Karthik');

                    $scope.loading = $ionicLoading.show({
                        template: ''
                    });

                    sharedProperties
                        .getDataFromApi('ncBrandDetailsObj',brand, function (data) {
                            sharedProperties.setBrand(brand);
                            $ionicLoading.hide();
                            $state.go('eventmenu.nc-brand-details', {'paramName':brand });

                        })
                }
                else {
                    $state.go('eventmenu.'+retunEvent);
                }

            }

        }])
    .controller(
    'yearCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $state, $stateParams) {
            $scope.brand = "...";
            var retunEvent = $stateParams.returnEvent;
            console.log('year obj');
            $scope.yearObj = sharedProperties.getObject();
            console.log('year obj'+ JSON.stringify($scope.yearObj.usedCarValuationGetDetail.yearList));

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newBrand = function (modelYear) {
                console.log(modelYear);
                sharedProperties.setUsedCarValuationYear(modelYear);
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
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            $scope.model = "...";
            var retunEvent = $stateParams.retunEvent;

            $scope.modelTempObj = sharedProperties.getObject();

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newModel = function (model) {
                sharedProperties.setModel(model);
                if(retunEvent == 'review-user-and-road-test'){
                    var reviewType = sharedProperties.getReviewType();
                    $state.go('eventmenu.'+retunEvent,{"reviewType":reviewType});
                }else if(retunEvent == 'compare-cars'){
                    console.log("in compare cars")
                    $state.go('eventmenu.varient-id',{"retunEvent":"compare-cars"});
                }else {
                    $state.go('eventmenu.'+retunEvent);
                }

            }
        }])
    .controller(
    'valuationModelCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            $scope.model = "...";
            var retunEvent = $stateParams.retunEvent;

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            var usedCarValuationGetDetailObj = sharedProperties.getUsedCarValuation();
            urlToSerach = "getUsedCarValuationModelByOem&oem="+usedCarValuationGetDetailObj.selectedBrand+"&modelYear="+usedCarValuationGetDetailObj.selectedYear
            sharedProperties.getHttpData(urlToSerach, function(modelData){
                console.log("varient detail "+ JSON.stringify(modelData));
                $scope.modelObj = modelData;

            });

            $scope.newModel = function (model) {
                sharedProperties.setValuationModel(model);
                $state.go('eventmenu.'+retunEvent);
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
                //sharedProperties.getUsedCarSearchResult();
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
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, cssInjector, $ionicPopup, $timeout, $stateParams, $ionicLoading) {

            $scope.isTrusted = $stateParams.isTrusted;
            console.log('used car details controller')

            cssInjector.add("css/usedCarDetail.css");
            cssInjector.add("css/usedCarFilter.css");

            var trustedResult = {};
            var nonTrustResult = {};

            $scope.loading = $ionicLoading.show({
                template: ''
            });

            if($scope.isTrusted == 'trusted'){
                sharedProperties.getUsedCarSearchResult(true, function(data){
                    trustedResult = data;
                    $scope.detailedObj = data;
                    $ionicLoading.hide();
                });
            }else {
                sharedProperties.getUsedCarSearchResult(false, function(data){
                    nonTrustResult = data;
                    $scope.detailedObj = data;
                    $ionicLoading.hide();
                });
            }

            $scope.sharedObj = sharedProperties
                .getObject();


            $scope.usedCarDetailPerCar = function (item) {
                sharedProperties
                    .setUsedCarDetailPerCar(item);
                if($scope.isTrusted === 'trusted') {
                    $state.go('eventmenu.used-single-car-detail', {"isTrusted": "trusted"});
                }else {
                    $state.go('eventmenu.used-single-car-detail');
                }
            }

            $scope.fnCardView = function () {
                console.log("call single card view")
                $state.go('eventmenu.used-single-car-card-view');
            }
            var trust = false;
            $scope.imgScr = "images/trust_mark_uncheck.png";
            $scope.cr_trustmark = function (){
              trust = !trust; 
            if(trust==true){
                $scope.isTrusted = 'trusted';
            	$scope.imgScr  = "images/trust_mark_check.png";
                if(trustedResult.hasOwnProperty('data')){
                    $scope.detailedObj = trustedResult;
                }else {
                    $scope.loading = $ionicLoading.show({
                        template: ''
                    });
                    sharedProperties.getUsedCarSearchResult(true, function(data){
                        trustedResult = data;
                        $scope.detailedObj = data;
                        $ionicLoading.hide();
                    });
                }
             }else{
                $scope.isTrusted = '';
            	 $scope.imgScr = "images/trust_mark_uncheck.png";
                console.log('non trust result', nonTrustResult);
                if(nonTrustResult.hasOwnProperty('data')){

                    $scope.detailedObj = nonTrustResult;

                }else {
                    $scope.loading = $ionicLoading.show({
                        template: ''
                    });
                    sharedProperties.getUsedCarSearchResult(false, function(data){
                        nonTrustResult = data;
                        $scope.detailedObj = data;
                        $ionicLoading.hide();
                    });
                }
             }
              console.log("imagesuncheck",$scope.imgScr);
            }

            $scope.fnUCFilter = function () {
                $state.go('eventmenu.used-car-filter');
            }


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
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, cssInjector, $ionicSlideBoxDelegate, $ionicLoading, $stateParams) {

            cssInjector.add("css/singleCarPage.css");
            cssInjector.add("css/usedCarDetail.css");


            $scope.isTrustedScreen = false;

            if( $stateParams.isTrusted === 'trusted' ) {
                $scope.isTrustedScreen = true;
                console.log("isTrustedScreen :"+ $scope.isTrustedScreen);
            };



            $scope.loading = $ionicLoading.show({
                template: ''
            });

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
                            //console.log("CarDekho"+JSON.stringify($scope.featureList));
                        }

                        $scope.$on('ionicView.enter', function () {
                            $ionicSlideBoxDelegate.update();
                            console.log("$scope.totalSlide" + $scope.totalSlide + "$ionicSlideBoxDelegate.slidesCount()" + $ionicSlideBoxDelegate.slidesCount());
                        });

                        $scope.slideHasChanged = function ($index) {
                            $scope.currentSlide = $index + 1;
                        };

                        $scope.fnCardView = function(){
                            console.log("used-car-detail");
                            $state.go('eventmenu.used-car-detail');
                        }

                        $scope.usedCarDetailPerCar = function (item) {
                            console.log("usedsingleCarDetailCtl item.usedcarid" + item.usedcarid);
                            sharedProperties
                                .setUsedCarDetailPerCar(item);
                            getData();
                        }

                        $scope.getTrustMarkInfo =function (){
                            console.log("trust-mark-info")
                            $state.go('eventmenu.trust-mark-info');
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
            $scope.fnCardView = function(){
                console.log("used-car-detail");
                $state.go('eventmenu.used-car-detail');
            }

            $scope.fnUCFilter = function () {
                $state.go('eventmenu.used-car-filter');
            }


        }])
    .controller(
    'usedCarFilterCtl',
    ['$scope', 'cssInjector', 'sharedProperties','$state', function ($scope, cssInjector, sharedProperties, $state) {

        cssInjector.add("css/usedCarFilter.css");
        $scope.check = "CarDekho";


        $scope.sharedObj = sharedProperties.getObject();
        console.log("$scope.sharedObj ", $scope.sharedObj);

        $scope.filterOptions = {};

        $scope.contactObj = {};
        $scope.contactObj.contact = [];

        $scope.isUpArrow = 'images/active_arrow_down.png';

        var prevIndex = "";

        $scope.filterOptions.isCurrent = "City";


        $scope.fn_changeSort = function (sortOption) {

            if($scope.sharedObj.sortBy === sortOption ){
                if($scope.isUpArrow === 'images/active_arrow_down.png' ){
                    $scope.isUpArrow = 'images/active_arrow_up.png';
                }else {
                    $scope.isUpArrow = 'images/active_arrow_down.png';
                }
            }else {
                $scope.isUpArrow = 'images/active_arrow_down.png';
            }
            var isAsending = $scope.isUpArrow === 'images/active_arrow_up.png' ? true : false;
            console.log('isAsending ', isAsending);
            sharedProperties.setSortBy(sortOption, isAsending);

        }


        if ($scope.sharedObj.price != '') {
            var priceArray = $scope.sharedObj.price.split("+");
            for (var iCount = 0; iCount < $scope.sharedObj.priceRange.data.newCarFilterPriceRange.length; iCount++) {
                if (priceArray.indexOf($scope.sharedObj.priceRange.data.newCarFilterPriceRange[iCount].linkRewrite) != -1) {
                    $scope.sharedObj.priceRange.data.newCarFilterPriceRange[iCount].isSelected = true;
                }

            }
        }


        var priceArray = $scope.sharedObj.brand.split("+");
        for (var iCount = 0; iCount < $scope.sharedObj.brandObj.length; iCount++) {
            if (priceArray.indexOf($scope.sharedObj.brandObj[iCount].oemname) != -1) {
                $scope.sharedObj.brandObj[iCount].isSelected = true;
            } else {
                $scope.sharedObj.brandObj[iCount].isSelected = false;
            }

        }


        sharedProperties.getHttpData("getOfferCityList", function (data) {
            $scope.$emit('cityObj', data);
            console.log("$scope.sharedObj ", JSON.stringify(data));
            for (var iCount = 0; iCount < data.data.CarDiscountCities.length; iCount++) {
                var cityObj = {};
                cityObj.city = data.data.CarDiscountCities[iCount];
                cityObj.isSelected = false;
                if (cityObj.city === $scope.sharedObj.city) {
                    cityObj.isSelected = true;
                }
                $scope.contactObj.contact.push(cityObj);
            }
        })
        $scope.newCity = function (cityObj, index) {
            console.log('index', index);
            console.log('prevIndex', prevIndex);
            if (prevIndex || prevIndex === 0) {
                console.log('prevIndex', prevIndex);
                $scope.contactObj.contact[prevIndex].isSelected = false;
            }
            $scope.contactObj.contact[index].isSelected = true;
            prevIndex = index;
            sharedProperties.setCity(cityObj.city);

        }
        $scope.selectedPrice = [];
        $scope.selectedBrands = [];
        $scope.selectedBrands = $scope.sharedObj.brand.replace(/ /g, '-').toLowerCase().split("+");
        console.log('brands ', $scope.selectedBrands, ' split',  $scope.sharedObj.brand.replace(/ /g, '-').toLowerCase().split("+") );
        $scope.selectedModels = [];
        $scope.selectedModels = $scope.sharedObj.model.replace(/ /g, '-').toLowerCase().split("+");
        console.log('Models ', $scope.selectedModels, ' split',  $scope.sharedObj.model.replace(/ /g, '-').toLowerCase().split("+") );
        $scope.selectedFuleType = [];
        $scope.vehicleType = [];
        $scope.selectedFuleType = [];
        $scope.selectKMSDriven = [];
        $scope.selectModelYear = [];
        $scope.selectTransmission = [];
        $scope.selectSellerType = [];


        $scope.newPrice = function (priceObj, index) {
            if (priceObj.isSelected) {
                $scope.sharedObj.priceRange.data.newCarFilterPriceRange[index].isSelected = false;
                $scope.selectedPrice.splice($scope.selectedPrice.indexOf(priceObj.linkRewrite), 1);
            } else {
                $scope.sharedObj.priceRange.data.newCarFilterPriceRange[index].isSelected = true;
                $scope.selectedPrice.push(priceObj.linkRewrite);
            }

            sharedProperties.setPrice($scope.selectedPrice.join("+"));

        }

        $scope.fn_newFuelType = function (selectFuelTypeObj, index) {
            if (selectFuelTypeObj.isSelected) {
                $scope.sharedObj.fuelTypeObj[index].isSelected = false;
                $scope.selectedFuleType.splice($scope.selectedFuleType.indexOf(selectFuelTypeObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.fuelTypeObj[index].isSelected = true;
                $scope.selectedFuleType.push(selectFuelTypeObj.link_rewrite);
            }

            sharedProperties.setFuel($scope.selectedFuleType.join("+"));

        }

        $scope.fn_newKMDriven = function (selectKMSDrivenObj, index) {
            if (selectKMSDrivenObj.isSelected) {
                $scope.sharedObj.KMsDrivenObj[index].isSelected = false;
                $scope.selectKMSDriven.splice($scope.selectKMSDriven.indexOf(selectKMSDrivenObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.KMsDrivenObj[index].isSelected = true;
                $scope.selectKMSDriven.push(selectKMSDrivenObj.link_rewrite);
            }

            sharedProperties.setKM($scope.selectKMSDriven.join("+"));

        }

        $scope.fn_newVehileType = function (selectvehicleObj, index) {
            if (selectvehicleObj.isSelected) {
                $scope.sharedObj.vehicleTypeObj[index].isSelected = false;
                $scope.vehicleType.splice($scope.vehicleType.indexOf(selectvehicleObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.vehicleTypeObj[index].isSelected = true;
                $scope.vehicleType.push(selectvehicleObj.link_rewrite);
            }

            sharedProperties.setVehicleType($scope.vehicleType.join("+"));

        }

        $scope.fn_newModelYear = function (selectModelYearObj, index) {
            if (selectModelYearObj.isSelected) {
                $scope.sharedObj.modelYearObj[index].isSelected = false;
                $scope.selectModelYear.splice($scope.vehicleType.indexOf(selectModelYearObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.modelYearObj[index].isSelected = true;
                $scope.selectModelYear.push(selectModelYearObj.link_rewrite);
            }

            sharedProperties.setModelYear($scope.selectModelYear.join("+"));

        }

        $scope.fn_newTransmission = function (selectTransmissionObj, index) {
            if (selectTransmissionObj.isSelected) {
                $scope.sharedObj.transmissionObj[index].isSelected = false;
                $scope.selectTransmission.splice($scope.selectTransmission.indexOf(selectTransmissionObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.transmissionObj[index].isSelected = true;
                $scope.selectTransmission.push(selectTransmissionObj.link_rewrite);
            }

            sharedProperties.setTransmission($scope.selectTransmission.join("+"));

        }

        $scope.fn_newSellerType = function (selectSellerTypeObj, index) {
            if (selectSellerTypeObj.isSelected) {
                $scope.sharedObj.sellerTypeObj[index].isSelected = false;
                $scope.selectSellerType.splice($scope.selectSellerType.indexOf(selectSellerTypeObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.sellerTypeObj[index].isSelected = true;
                $scope.selectSellerType.push(selectSellerTypeObj.link_rewrite);
            }
            console.log('Seller Type',$scope.selectSellerType );
            sharedProperties.setSellerType($scope.selectSellerType.join("+"));

        }

        $scope.newBrand = function (priceObj, index) {
            if (priceObj.isSelected) {
                $scope.sharedObj.brandObj[index].isSelected = false;
                $scope.selectedBrands.splice($scope.selectedBrands.indexOf(priceObj.oemname), 1);
            } else {
                $scope.sharedObj.brandObj[index].isSelected = true;
                $scope.selectedBrands.push(priceObj.oemname);
            }

            sharedProperties.setBrand($scope.selectedBrands.join("+"));

        }

        $scope.newModel = function (priceObj, index) {
            console.log('selected model obj ', priceObj);
            if (priceObj.isSelected) {
                $scope.sharedObj.filterModelObj.data.Oem[index].isSelected = false;
                $scope.selectedModels.splice($scope.selectedModels.indexOf(priceObj.link_rewrite), 1);
            } else {
                $scope.sharedObj.filterModelObj.data.Oem[index].isSelected  = true;
                $scope.selectedModels.push(priceObj.link_rewrite);
            }
            sharedProperties.setModel($scope.selectedModels.join("+"));

        }

        $scope.fn_newCertified = function () {
            sharedProperties.setCertifiedByTrustMaster(!$scope.sharedObj.certifiedByTrustMaster);
        }


        $scope.fn_newPhoto = function () {
            sharedProperties.setWithPicture(!$scope.sharedObj.withPicture);
        }

        $scope.fn_clear = function () {
            sharedProperties.setModel('');
            sharedProperties.setCertifiedByTrustMaster(false);
            sharedProperties.setWithPicture(false);
            sharedProperties.setBrand('');
            sharedProperties.setSellerType('');
            sharedProperties.setTransmission('');
            sharedProperties.setModelYear('');
            sharedProperties.setVehicleType('');
            sharedProperties.setKM('');
            sharedProperties.setFuel('');
            sharedProperties.setPrice('');

            $scope.selectedPrice = [];
            $scope.selectedBrands = [];
            $scope.selectedBrands  = [];
            $scope.selectedModels = [];
            $scope.selectedFuleType = [];
            $scope.vehicleType = [];
            $scope.selectedFuleType = [];
            $scope.selectKMSDriven = [];
            $scope.selectModelYear = [];
            $scope.selectTransmission = [];
            $scope.selectSellerType = [];

            $scope.filterOptions.isCurrent = 'City';

        }

        $scope.fn_apply = function(){
            //sharedProperties.getUsedCarSearchResult();
            $state.go('eventmenu.used-car-detail');
        }


        $scope.fn_closeFilter = function(){
            $state.go('eventmenu.used-car-detail');
        }


        function getModel(){

            sharedProperties.getHttpData("getUsedCarModelNameListByOemNameWithStatus&oemName=" + $scope.selectedBrands.join("%2B"), function (modelObj) {
                $scope.selectedModels = [];
                var modelArray = $scope.sharedObj.model.replace(/ /g, '-').toLowerCase().split("+");
                console.log('Model Obj', modelArray);
                $scope.sharedObj.filterModelObj = modelObj;
                for (var iCount = 0; iCount < $scope.sharedObj.filterModelObj.data.Oem.length; iCount++) {
                    $scope.sharedObj.filterModelObj.data.Oem[iCount].isSelected = false;
                    console.log('model selected ', $scope.sharedObj.filterModelObj.data.Oem[iCount].link_rewrite);
                    if (modelArray.indexOf($scope.sharedObj.filterModelObj.data.Oem[iCount].link_rewrite) != -1) {
                        $scope.sharedObj.filterModelObj.data.Oem[iCount].isSelected = true;
                        $scope.selectedModels.push($scope.sharedObj.filterModelObj.data.Oem[iCount].link_rewrite);

                    }
                }
                console.log('model data', $scope.sharedObj.filterModelObj);
            })
        }

        $scope.fn_setCurrentFilter = function (currentOption) {
            console.log('brand ', $scope.selectedBrands.length);
            if (currentOption === 'Model' && ! $scope.sharedObj.hasOwnProperty('filterModelObj') && $scope.selectedBrands.length > 0 ) {
                $scope.sharedObj.filterModelObj = {};
                $scope.filterOptions.isCurrent = currentOption;
                getModel();
                console.log('length ',$scope.sharedObj.filterModelObj );

            }else if (currentOption === 'Model' && $scope.selectedBrands.length > 0 ) {
                $scope.filterOptions.isCurrent = currentOption;
                getModel();
            }else if (currentOption === 'Model' && $scope.selectedBrands.length === 0){
                alert('Please Select Brand First ')
            }else {
                $scope.filterOptions.isCurrent = currentOption;
                console.log('current option ', $scope.sharedObj)
            }
        }


    }])

    .controller(
    'nc_searchCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$ionicLoading',

        function ($scope, sharedProperties, $state, cssInjector, $ionicLoading) {
            console.log("in nc_searchCars");
            cssInjector.add("css/nc-search-cars.css");

            $scope.brand = sharedProperties
                .getObject();

            $scope.fn_ncSearchSetBrand = function(brandName){
                console.log('brandName'+ brandName );

                $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncBrandDetailsObj', brandName, function (data) {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-brand-details', {'paramName':brandName });

                    })
            }

            $scope.nc_sc_getMoreBrand = function () {
                $state.go('eventmenu.brand1', {"retunEvent":"nc-brand-details"});
            }
            $scope.nc_sc_getByPrice = function () {
                $state.go('eventmenu.nc-search-cars-by-price');
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
    'nc_searchCarsByPriceCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',

        function ($scope, sharedProperties, $state, cssInjector) {
            console.log("in nc_searchCars");
            cssInjector.add("css/nc-search-cars.css");

            //$scope.priceRange = sharedProperties.getObject();

            $scope.selectedRangeCarsCount;
            $scope.brand = sharedProperties
                .getObject();

            $scope.fn_ncSearchSetBrand = function(brandName){
                $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncBrandDetailsObj', brandName, function (data) {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-brand-details', {'paramName':brandName });

                    })

            }
            $scope.nc_sc_getByBrand = function () {
                $state.go('eventmenu.nc-search-cars');
            }
            $scope.$on('priceRangeCarCount', function(event, dataObj) {
                $scope.selectedRangeCarsCount = dataObj.data.Count;
            });
            
            $scope.nc_sc_getByBrand = function () {
            	$state.go('eventmenu.nc-search-cars');
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


            $scope.ncBrandDetails = sharedProperties
                .getObject();

            $scope.fn_ncSearchCar = function () {
                $state.go('eventmenu.nc-search-cars');
            }

            $scope.fn_ncBrandDetail = function (ncBrandDetail) {
                $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncModelDetailsObj', ncBrandDetail.carmodelname, function () {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-model-details', {"paramName":ncBrandDetail.carmodelname});
                    })
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

            var colorIndex = 0;

            $scope.isMore = false;
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
                console.log("go to on road price"+JSON.stringify($scope.ncModelDetails.ncModelDetailsObj));
                $scope.loading = $ionicLoading.show({
                    template: ''
                });
                sharedProperties.getCityAndPin(function(cityAndPingObjs){
                    $ionicLoading.hide();
                    //console.log("city and ping"+ JSON.stringify(cityAndPingObjs));
                    $state.go('eventmenu.nc-get-on-road-price-form',{"oem":$scope.ncModelDetails.ncModelDetailsObj.data.Brand,"carModel":$scope.ncModelDetails.ncModelDetailsObj.data.modelname,"carImage":$scope.imageUrl, "carRating":$scope.ncModelDetails.ncModelDetailsObj.data.modelrating.rating});


                });
            }


            $scope.fn_ncGetMoreOptionPopup = function(){
                console.log("in fn_ncGetMoreOptionPopup")
                $scope.isMore = true;

            }

            $scope.onSwipeLeft = function(){
                console.log('swipe left', colorIndex);
                if(colorIndex < $scope.ncModelDetails.ncModelDetailsObj.data.colors.length-1) {
                    colorIndex++;
                    setImageUrl(colorIndex);
                }
            }

            function setImageUrl(colorIndex ){
                $scope.imageUrl = $scope.ncModelDetails.ncModelDetailsObj.data.colors[colorIndex].colorImageUrl;
                if($scope.imageUrl === ''){
                    $scope.imageUrl = 'images/Car-Gray.png';
                }
                //console.log('swipe ',colorIndex, $scope.imageUrl, $scope.ncModelDetails.ncModelDetailsObj.data.colors);

            }

            $scope.onSwipeRight = function(){
                console.log('swipe right', colorIndex);
                if(colorIndex >= 1  ) {
                    colorIndex--;
                    setImageUrl(colorIndex);
                }
            }
            
            $scope.fn_ncRecCarDetail = function (recommendedCars) {

                $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncModelDetailsObj', recommendedCars.carmodelname, function () {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-model-details',{ paramName :recommendedCars.carmodelname});
                    })

            }
            
            $scope.fn_modelSelect = function(recommendedCars){
                console.log("fn_selectModel "+ recommendedCars);
                sharedProperties.setModel(recommendedCars);
                sharedProperties.setCurrentModelNumber('first');
                $state.go('eventmenu.varient-id',{"retunEvent":"compare-cars"});
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

            $scope.sharedObj = sharedProperties
                .getObject();

            console.log('$stateParams.oem', $stateParams.oem);
            $scope.oem = $stateParams.oem || $scope.sharedObj.reqParam.oem  ;
            $scope.carModel = $stateParams.carModel || $scope.sharedObj.reqParam.carModel;
            $scope.carImage = $stateParams.carImage || $scope.sharedObj.reqParam.carImage;
            $scope.carRating = $stateParams.carRating || $scope.sharedObj.reqParam.carRating;
            $scope.isUserAgreed = false;



            function setReqParam(){
                sharedProperties.setUserDetail($scope.sharedObj.userDetails);

                $scope.sharedObj.reqParam.oem = $scope.oem;
                $scope.sharedObj.reqParam.carModel = $scope.carModel
                $scope.sharedObj.reqParam.carImage = $scope.carImage;
                $scope.sharedObj.reqParam.carRating = $scope.carRating;
                sharedProperties.setGOPR($scope.sharedObj.reqParam);
            }

            $scope.getUserCity = function(){
                setReqParam();
                $state.go('eventmenu.city', {'retunEvent':'nc-get-on-road-price-form'})
            }
             $scope.getUserPincode = function(){
                 setReqParam();
                 $scope.loading = $ionicLoading.show({
                     template: ''
                 });
                 sharedProperties.getPinCode(function(cityAndPingObjs){
                     $ionicLoading.hide();
                     $state.go('eventmenu.pincode', {'retunEvent':'nc-get-on-road-price-form'})

                 });

            }

            $scope.fn_isUserAgreed = function() {
                $scope.isUserAgreed = !$scope.isUserAgreed;
            }
          function isEmpty(str) {
            	 return (!str || 0 === str.length || /^\s*$/.test(str)); 
            }
            $scope.fn_getOnRoadPriceDetails = function(onRoadDetailsObj) {
                $scope.onRoadDetailsObj = {};
                if(onRoadDetailsObj != null || onRoadDetailsObj != undefined){
                $scope.onRoadDetailsObj.oem = $scope.oem;
                $scope.onRoadDetailsObj.carModel = $scope.carModel;
                console.log(JSON.stringify(onRoadDetailsObj));
                var isValidationSuccess = true;
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                var phone = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
               // var pincode = /^([0-9](6,6))+$/;
                var pincode = /(^\d{6}$)/;
               // alert(pincode(onRoadDetailsObj.userPinCode));
               // alert(re.test(onRoadDetailsObj.userEmail));
                if(!onRoadDetailsObj.hasOwnProperty('name') || isEmpty(onRoadDetailsObj.name))
                {
                	isValidationSuccess = false;
                	alert("Please enter your name");
                	//alert("Your Name Should Contain Atleast 3 Characters");
                } else if(onRoadDetailsObj.name.length <= 2)  {
                	isValidationSuccess = false;
                	alert("Minimum required characters is 3 for your name"); 
                } else
                	 if(!onRoadDetailsObj.hasOwnProperty('userEmail') || isEmpty(onRoadDetailsObj.userEmail)){
                	isValidationSuccess = false;
                	alert("Please enter your email");
                }    else if(!re.test(onRoadDetailsObj.userEmail)){
                	 isValidationSuccess = false; 
                	  alert("Please enter valid email");
                } 
                else
                if(!onRoadDetailsObj.hasOwnProperty('userMobile') || isEmpty(onRoadDetailsObj.userMobile)){
                	isValidationSuccess = false;
                	alert("Please enter your phone no.");
                } else if(!phone.test(onRoadDetailsObj.userMobile)){
                	isValidationSuccess = false;
                	alert("Please enter valid number"); 
                }
                else
                if(isEmpty($scope.sharedObj.city)){
                	isValidationSuccess = false;
                	alert("Please select the city");
                } else
                if(isEmpty($scope.sharedObj.pincode)){
                	isValidationSuccess = false;
                	alert("Please enter the pincode");
                } else if(!pincode.test($scope.sharedObj.pincode)){
                	isValidationSuccess = false;
                	alert("Please enter valid pincode ");
                }
                else 
                if($scope.isUserAgreed == false){
                	isValidationSuccess = false;
                	alert("Please check Terms and Conditions");
                }
                if(isValidationSuccess){
                sharedProperties.setOnRoadRequestObj($scope.onRoadDetailsObj);
                $state.go('eventmenu.nc-get-on-road-price-detail')
                $scope.onRoadDetailsObj = onRoadDetailsObj;
                onRoadDetailsObj.oem = $scope.oem;
                onRoadDetailsObj.carModel = $scope.carModel;
                sharedProperties.setOnRoadRequestObj(onRoadDetailsObj);
                $state.go('eventmenu.nc-get-on-road-price-detail');
                }
            } else {
            	alert(" Please Enter the details");
            	}
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
                template: ''
            });

            $scope.cityItem ={"city": "New Delhi"};

            $scope.cityObj = sharedProperties.getCity();
            console.log("city obj"+ JSON.stringify($scope.cityObj));


            sharedProperties.getOnRoadDetailsObj(function(onRoadDetailsObj, onRoadDetailRequestObj){
                $ionicLoading.hide();

                console.log("onRoadDetailRequestObj"+ JSON.stringify(onRoadDetailsObj));
                $scope.onRoadDetailsObj = onRoadDetailsObj;

                $scope.carModel = onRoadDetailRequestObj.carModel;
                $scope.userCity = onRoadDetailRequestObj.userCity;

            });


            $scope.toggleGroup = function(group) {
                if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                }
            };
            $scope.isGroupShown = function(group) {
                return $scope.shownGroup === group;
            };


            $scope.fn_isUserAgreed = function() {
                $scope.isUserAgreed = !$scope.isUserAgreed;
            }

        }])

    .controller(
    'nc_newCarMoreOptionPopupCtrl',
    [
        '$scope',
        'sharedProperties',
        'cssInjector',
        '$state',
        '$stateParams',
        '$ionicLoading',
        '$ionicPopup',
        function ($scope, sharedProperties, cssInjector, $state, $stateParams, $ionicLoading, $ionicPopup) {
            console.log("in nc_getOnRoadPriceDetailCtrl");


            var myPopup = $ionicPopup.show({
                templateURL: 'templates/nc-new-car-more-option-popup-CD.html',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });



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
            console.log("in gbl_tempPageCtrl");
            var paramValue = $stateParams.paramValue;
            var paramName  = $stateParams.paramName;
            var apiOption  = $stateParams.apiOption;
            var urlToCall  = $stateParams.urlToCall;
            console.log("KK param name "+ paramName +paramValue+urlToCall);

            $scope.loading = $ionicLoading.show({
                template: ''
            });

            sharedProperties
                .getDataFromApi(apiOption, paramValue, function () {
                    console.log("in temp "+ urlToCall + paramName + paramValue+ JSON.stringify({paramName:paramValue}));
                    $ionicLoading.hide();
                    $state.go('eventmenu.'+urlToCall, { paramName :paramValue});
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

            var searchString = "getUpcomingCarListDataWithStatus&startLimit=1&endLimit=120";

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
        '$ionicLoading',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams,  $ionicLoading) {
            console.log("in nc_latestCars");

            cssInjector.add("css/nc-latest-cars.css");

            var searchString = "getLatestCarListDataWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (latestCars) {

                $scope.latestCars = latestCars;

            });
            
            $scope.get_latestCarDetail = function (latestCar) {
                $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncModelDetailsObj', latestCar.carmodelname , function () {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-model-details', { paramName :latestCar.carmodelname});
                    })

            }
            
            $scope.fn_modelSelect = function(latestCar){
                console.log("fn_selectModel "+ latestCar);
                sharedProperties.setModel(latestCar);
                sharedProperties.setCurrentModelNumber('first');
                $state.go('eventmenu.varient-id',{"retunEvent":"compare-cars"});
            }

        }])
    .controller(
    'nc_popularCars',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$ionicLoading',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams,  $ionicLoading) {
            console.log("in nc_popularCars");
            cssInjector.add("css/nc-popular-cars.css");

            var searchString = "getPopularCarListDataWithStatus&startLimit=1&endLimit=40";

            sharedProperties.getData(searchString, function (popularCars) {

                $scope.popularCars = popularCars;

            });
            
            $scope.get_popularCarDetail = function (popularCar) {
                 $scope.loading = $ionicLoading.show({
                    template: ''
                });

                sharedProperties
                    .getDataFromApi('ncModelDetailsObj', popularCar.carmodelname , function () {
                        $ionicLoading.hide();
                        $state.go('eventmenu.nc-model-details', { paramName :popularCar.carmodelname});
                    })
            }
            
             $scope.fn_modelSelect = function(popularCar){
                console.log("fn_selectModel "+ popularCar);
                sharedProperties.setModel(popularCar);
                sharedProperties.setCurrentModelNumber('first');
                $state.go('eventmenu.varient-id',{"retunEvent":"compare-cars"});
            }

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
            cssInjector.add("css/nc-offers-and-dicounts.css");

            $scope.offerAndDiscountObj = sharedProperties.getOfferAndDiscountObj();


            var urlToCountOem = "getOffersOemListForCity&city="+$scope.offerAndDiscountObj.selectedCity;

            sharedProperties.getHttpData(urlToCountOem, function(data){
                console.log("data "+ JSON.stringify(data));
                $scope.oemObj = data;

            })


            var urlToCount = "getLatestDiscountOffers&city="+$scope.offerAndDiscountObj.selectedCity;

            sharedProperties.getHttpData(urlToCount, function(data){
                console.log("data "+ JSON.stringify(data));
                $scope.offerObj1 = data;

            })

            $scope.fn_getOffers = function() {
                console.log("in get offers");
                $state.go('eventmenu.nc-offers-and-dicounts-show');
            }



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
        '$ionicPopover',
        'youtubeEmbedUtils',
        function ($scope, sharedProperties, $state, cssInjector, $sce, $ionicPopup, $ionicPopover, youtubeEmbedUtils) {
            console.log("in nc_carVideos");

            cssInjector.add("css/nc-car-videos.css");
            var searchString = "getModelCarVideoList&carmodelname=Maruti+Swift";

            sharedProperties.getData(searchString, function (carVideos) {
                  $scope.carVideos = carVideos;
            });

            $scope.fn_playVideo =  function($event, videoUrlFrame){
                $scope.code = videoUrlFrame.youTubeVideoId;
                $scope.popover.show($event);
            }

            $scope.fnDestroyPO = function(){
                $scope.popover.hide();

            }

            $scope.closePopover = function() {
                $scope.bestPlayer.stopVideo()
                $scope.popover.hide();
            };

            $ionicPopover.fromTemplateUrl('templates/nc-car-play-video.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

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

           
            cssInjector.add("css/auto.css");

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
    'sellACarCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams) {
            console.log("in sellACarCtrl");

        }])
    .controller(
    'trustMarkInfoCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams) {
            console.log("in trustMarkInfoCtrl");

        }])
    .controller(
    'compareCarsCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$http',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams,$http) {
            console.log("in sellACarCtrl");
            cssInjector.add("css/compare-cars.css");

            var baseUrl = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter="
            var urlToSearch = baseUrl + "getCarVariantDetailByCarModelName&ModelName=";

            $scope.isCompare = "images/compare_btn_disable.png";
            $scope.vsImage = "images/vs_grey.png";
            $scope.background = 'disableimg';
            console.log("background is set " + $scope.background);

            $scope.compDataObj = sharedProperties.getObject();
            
            console.log("condition car first id "+$scope.compDataObj.varientDetailObj.first.displayVariantId);
            console.log("condition car second id "+$scope.compDataObj.varientDetailObj.second.displayVariantId);


            if ($scope.compDataObj.varientDetailObj.second.displayVariantId != "Select Car 2" && $scope.compDataObj.varientDetailObj.first.displayVariantId != "Select Car 1"){
                $scope.background = 'enableimg';
            }

            var urlForData = "getPopularCompareCarListWithStatus&startLimit=1&endLimit=5"

            sharedProperties.getHttpData(urlForData, function (popularCarsWithStatus){
                $scope.popularCarsWithStatus =  popularCarsWithStatus;
            })

            $scope.fn_modelSelect = function(modelIndex){
                console.log("fn_selectModel "+ modelIndex);
               
                sharedProperties.setCurrentModelNumber(modelIndex);
                $state.go("eventmenu.brand",{"retunEvent": "compare-cars"});
            }
            
            $scope.fn_selectCompare = function(){
            	 if(($scope.compDataObj.varientDetailObj.first.displayVariantId != "Select Car 1") && ($scope.compDataObj.varientDetailObj.second.displayVariantId != "Select Car 2"))
                  {
            		 getDataToCompare($scope.compDataObj.varientDetailObj.first.carVariantId, $scope.compDataObj.varientDetailObj.second.carVariantId);
            	  }
            	
            }

            var showCompare = function(compareDate){
                sharedProperties.setCompareData(compareDate);
                $state.go("eventmenu.show-compare");
            }

            var getDataToCompare = function(model1Id, model2Id){
                //console.log("Varient Ids " + JSON.stringify(httpCallBackData));
                var getUrlForComparison = "getPopularCompareCarListVariantDataWithStatus&variant1=" +
                    model1Id + "&variant2=" + model2Id;

                sharedProperties.getHttpData(getUrlForComparison, function (comparisonData) {
                    console.log("comparisonData" + JSON.stringify(comparisonData));
                    showCompare(comparisonData);
                })
            }

            $scope.comparePopularModel = function(compareCarsObj) {
                var model1 = urlToSearch + compareCarsObj.Model1.name;
                var model2 = urlToSearch + compareCarsObj.Model2.name;

                urlArryaToSearch = [];
                urlArryaToSearch.push($http.post(model1));
                urlArryaToSearch.push($http.post(model2));

                sharedProperties.getMultipleHttpData(urlArryaToSearch, function (httpCallBackData) {
                    getDataToCompare(httpCallBackData[0].data.data.carVariantsList[0].carVariantId, httpCallBackData[1].data.data.carVariantsList[0].carVariantId);
                });
            }
        }])
    .controller(
    'showCompareCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        '$ionicLoading',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce,$ionicLoading) {
            console.log("in showCompareCtrl");
            cssInjector.add("css/show-compare.css");

            $scope.vsImage = "images/vs_grey.png";
            $scope.isOverView = true;
            $scope.isCommonShow = true;
            $scope.compareDataObj = sharedProperties.getCompareData();

            $scope.fn_changeOverAndFeatures = function (isOverView) {
                $scope.isOverView = isOverView;
            }
            $scope.fn_isCommonShow = function (isCommonShow) {
                console.log("isOverView"+ isCommonShow);
                $scope.isCommonShow = isCommonShow;
            }
             $scope.fnInsurance = function() {
                
                $state.go('eventmenu.car-insurance');
            }
            $scope.fnInsurance = function() {

                $state.go('eventmenu.car-insurance');
            }

            $scope.fn_getReview = function(carId){
                console.log('carId', carId);

                sharedProperties.setModel(carId.replace(/ /g, "_"));
                $state.go('eventmenu.user-review',{"reviewType":"mostHelpful"});

            }

            $scope.getOnRoadPrice = function (oem, model, image, rating) {
                $scope.loading = $ionicLoading.show({
                    template: ''
                });
                sharedProperties.getCityAndPin(function(cityAndPingObjs){
                    $ionicLoading.hide();
                    //console.log("city and ping"+ JSON.stringify(cityAndPingObjs));
                    $state.go('eventmenu.nc-get-on-road-price-form',{"oem":oem,"carModel":model,"carImage":image, "carRating":rating});

                });
            }


        }])
    .controller(
    'reviewUserAndRoadTestCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestCtrl");
            cssInjector.add("css/review-user-and-road-test.css");

            $scope.reviewType =  $stateParams.reviewType;
            $scope.isHome =  $stateParams.isHome;
            console.log("$scope.reviewType "+ $scope.reviewType );

            $scope.brandAndObject = sharedProperties.getObject();
            if($scope.isHome==="home"){		
            	$scope.brandAndObject.model="Select Model";		
            	$scope.brandAndObject.brand="Select Brand";		
            }
            $scope.fn_changeUserAndRoadReview = function(reviewType){
                $scope.reviewType = reviewType;
            }

            $scope.fn_getBrand = function(){
                $scope.brandAndObject.model="Select Model";
                sharedProperties.setReviewType($scope.reviewType);
                $state.go("eventmenu.brand",{'retunEvent':'review-user-and-road-test'});
            }

            $scope.fn_getModel = function(){
                console.log("In Model");
                sharedProperties.setReviewType($scope.reviewType);
                if($scope.brandAndObject.brand == 'Select Brand'){
                    alert("Please Select Brand First");
                }else {
                    $state.go("eventmenu.model", {'retunEvent': 'review-user-and-road-test'});
                }
            }

            $scope.fn_getReview = function () {
                console.log("get review");
                if ($scope.brandAndObject.brand == 'Select Brand') {
                    alert("Please Select Brand First");
                } else if ($scope.brandAndObject.model == 'Select Model') {
                    alert("Please Select Model First");
                } else {
                    console.log('$scope.brandAndObject.model' + $scope.reviewType);
                    if ($scope.reviewType == "user") {
                        $state.go('eventmenu.user-review',{"reviewType":"mostHelpful"});
                    } else {
                    	$state.go('eventmenu.gbl-temp-page', {
                        "paramName": "reviewtype",
                        "paramValue": $scope.reviewType,
                        "apiOption": "reviewUserAndRoadTestDetailObj",
                        "urlToCall": "review-user-and-road-test-detail"
                    });
                }
            }
        }


    }])


    .controller(
    'reviewUserAndRoadTestDetailCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/review-user-and-road-test-detail.css");

            $scope.reviewType = sharedProperties.getReviewType();


            $scope.reviewData = sharedProperties.getObject();
            console.log("car news id :" + JSON.stringify($scope.reviewData.reviewUserAndRoadTestDetailObj.data ));

            $scope.fn_getDetailedExpertReview = function(modelObj){
                $state.go("eventmenu.expert-review", {'reviewId':modelObj.expertReviewId,'reviewText':$scope.reviewData.model+' '+ $scope.reviewType + ' test'});
            }



        }])
    .controller(
    'userReviewCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        '$http',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce,$http) {
            console.log("in userReviewCtrl");
            cssInjector.add("css/user-review.css");
            var baseUrl = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter="
            $scope.modelDetailObject = sharedProperties.getObject();


            var urlToSearch = baseUrl + "getReviewsWithStatus&startLimit=1&endLimit=20&ModelName="+$scope.modelDetailObject.model+"&sortedBy=";

            var recentReviews = urlToSearch + "recentReview";
            var mostHelpFul = urlToSearch + "mostHelpful";

            urlArryaToSearch = [];
            urlArryaToSearch.push($http.post(recentReviews));
            urlArryaToSearch.push($http.post(mostHelpFul));
            $scope.reviewType = $stateParams.reviewType;

            sharedProperties.getMultipleHttpData(urlArryaToSearch, function (httpCallBackData) {
                $scope.reviewData = httpCallBackData;
                console.log("userReviewCtrl"+ JSON.stringify($scope.reviewData));
                sharedProperties.setReviewObject($scope.reviewData);

            });

            $scope.fn_changeType = function(reviewTypeParam){
                $scope.reviewType = reviewTypeParam;
            }
            $scope.fn_getDetailedUserReview = function (reviewDataObj, index){
                $state.go("eventmenu.user-review-detail", {'reviewId':reviewDataObj.reviewId, 'reviewType':$scope.reviewType, 'indexId':index});
            }


        }])
    .controller(
    'userReviewDetailCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in userReviewDetailCtrl");
            cssInjector.add("css/user-review-detail.css");

            $scope.expertReviewId = $stateParams.reviewId;
            $scope.reviewType = $stateParams.reviewType === 'mostHelpful' ? 1 : 0 ;
            $scope.indexId = $stateParams.indexId;

            $scope.modelName = sharedProperties.getModel();
            console.log("$scope.expertReviewId"+ $scope.expertReviewId);
            showDetailReview();

            function showDetailReview() {
                var urlForData = "getMoreReviewsWithStatus&startLimit=1&endLimit=5&carUserReviewId=" + $scope.expertReviewId;
                sharedProperties.getHttpData(urlForData, function (userDetailReviewData) {
                    console.log("expertReviewData" + JSON.stringify(userDetailReviewData));

                    $scope.autoDetailedNews = userDetailReviewData;

                });
            }

            $scope.reviewObj = sharedProperties.getReviewObject();

            $scope.fn_getNextReview = function(action) {

                if ( action === 'next' ){
                    $scope.indexId = +$scope.indexId + 1;
                }else {
                    $scope.indexId = +$scope.indexId - 1;
                }
                console.log("index id "+ $scope.indexId);
                $scope.expertReviewId = $scope.reviewObj[$scope.reviewType].data.data.review[$scope.indexId].reviewId;
                showDetailReview();

            }

        }])
    .controller(
    'expertReviewCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/expert-review.css");

            $scope.expertReviewId = $stateParams.reviewId;

            $scope.reviewType  = $stateParams.reviewText ;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                   console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

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
            cssInjector.add("css/autoDnews.css");


            var carNewsID = $stateParams.newsId;
            //console.log("car news id :" + carNewsID);
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
    .controller(
    'carInsuranceCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in carInsuranceCtrl");
            cssInjector.add("css/nc-popular-cars.css");

            $scope.expertReviewId = $stateParams.reviewId;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

            }

        }])
    .controller(
    'carLoanCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/nc-popular-cars.css");

            $scope.expertReviewId = $stateParams.reviewId;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

            }

        }])
    .controller(
    'carDealersCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/nc-popular-cars.css");

            $scope.expertReviewId = $stateParams.reviewId;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

            }

        }])
    .controller(
    'carHealpLineCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/nc-popular-cars.css");

            $scope.expertReviewId = $stateParams.reviewId;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

            }

        }])
    .controller(
    'carRoadSideAssitanceCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce) {
            console.log("in reviewUserAndRoadTestDetailCtrl");
            cssInjector.add("css/nc-popular-cars.css");

            $scope.expertReviewId = $stateParams.reviewId;

            var urlForData = "getDetailExpertReviewsWithStatus&expertReviewId="+  $scope.expertReviewId;
            sharedProperties.getHttpData(urlForData, function(expertReviewData){
                console.log("expertReviewData"+ JSON.stringify(expertReviewData));
                $scope.autoDetailedNews = $sce.trustAsHtml(expertReviewData);
            });
            $scope.fn_getDetailedExpertReview = function(modelObj){

            }

        }])
    .controller(
    'usedCarValuationCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        '$ionicLoading',
        '$http',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce, $ionicLoading,$http) {
            console.log("in usedCarValuationCtrl");
            cssInjector.add("css/used-car-valuation.css");

            $scope.loading = $ionicLoading.show({
                template: ''
            });

            var baseUrl = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter="

            var ibbCity = baseUrl + "getIbbCityList";
            var valuationOemByYear  = baseUrl + "getUsedCarValuationOemByYear&modelYear=2015";
            var usedCarSearchResultDataWithStatus  = baseUrl + "getUsedCarSearchResultDataWithStatus&certificationid=1&startLimit=1&endLimit=20&isCached= false&City=Chennai";

            urlArryaToSearch = [];
            urlArryaToSearch.push($http.post(ibbCity));
            urlArryaToSearch.push($http.post(valuationOemByYear));
            urlArryaToSearch.push($http.post(usedCarSearchResultDataWithStatus));

            sharedProperties.getMultipleHttpData(urlArryaToSearch, function (multiData){
                $ionicLoading.hide()
                console.log("setUsedCarValuation :"+ JSON.stringify(multiData)) ;

                sharedProperties.setUsedCarValuation(multiData);
;            })

            $scope.fn_getDetailsForValuation= function (){
                $state.go('eventmenu.used-car-valuation-get-detail');
            }

        }])
    .controller(
    'usedCarValuationShowCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        '$ionicLoading',
        '$http',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce, $ionicLoading,$http) {
            console.log("in usedCarValuationCtrl");
            cssInjector.add("css/used-car-valuation.css");

            $scope.isSellerOrBuyer = true;
            $scope.isDellerOrIndividual = true;

            $scope.getUsedCarValuationObj = sharedProperties.getUsedCarValuation();


            getData($scope.isDellerOrIndividual);

            $scope.fn_changeType = function(userType){
                $scope.isSellerOrBuyer = userType;
            }

            $scope.fn_changeDelerOrIndividual = function(dType){
                console.log("dType"+ dType);
                $scope.isDellerOrIndividual = dType;
                getData($scope.isDellerOrIndividual);
            }


            function getData(apiType){

                var baseUrl = "getIbbUsedCarValuationDetails&oem="+ $scope.getUsedCarValuationObj.selectedBrand+
                               "&modelName="+ $scope.getUsedCarValuationObj.selectedModel+"&modelYear="+$scope.getUsedCarValuationObj.selectedYear+
                               "&city="+ $scope.getUsedCarValuationObj.selectedCity +"&CarVariantId="+$scope.getUsedCarValuationObj.selectedVariant+
                               "&kilometer="+$scope.getUsedCarValuationObj.mileage +"&evaluationType="
                if(apiType == true ){
                    baseUrl = baseUrl + "1";
                }else {
                    baseUrl = baseUrl + "0";
                }

                sharedProperties.getHttpData(baseUrl, function(valuationDetails){
                    console.log("expertReviewData"+ JSON.stringify(valuationDetails));
                    $scope.valutionObj = valuationDetails;
                });

            }
        }])


    .controller(
    'usedCarValuationGetDetailCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        'cssInjector',
        '$stateParams',
        '$sce',
        '$ionicPopup',
        '$http',
        function ($scope, sharedProperties, $state, cssInjector, $stateParams, $sce, $ionicPopup,$http) {
            console.log("in usedCarValuationCtrl");
            cssInjector.add("css/used-car-valuation-details.css");

            var isYearSelected = false;
            var isBrandSelected = false;
            var isModelSelected = false;
            var isCitySelected = false;
            var isVarientSelected = false;

            $scope.usedCarValuationGetDetailObj = sharedProperties.getUsedCarValuation();

            $scope.fn_selectYear = function(){
                console.log('Year ');
                $state.go('eventmenu.year',{"returnEvent":"used-car-valuation-get-detail"});
            }

            $scope.fn_selectBrand = function(){
                $state.go('eventmenu.brand',{"retunEvent":"used-car-valuation-get-detail"});
            }

            $scope.fn_selectModel = function(){
                if($scope.usedCarValuationGetDetailObj.selectedBrand == "Select a Brand"){
                        alert("Please Select Brand First")
                }else {
                    $state.go('eventmenu.valuation-model', {"retunEvent": "used-car-valuation-get-detail"});
                }
            }
            $scope.fn_selectVariat = function(){
                if($scope.usedCarValuationGetDetailObj.selectedModel == "Select Model"){
                    alert("Please Select Model First")
                }else {
                    $state.go('eventmenu.valuation-varient-id', {"retunEvent": "used-car-valuation-get-detail"});
                }
            }
            $scope.fn_selectCity = function(){
                console.log('City ');
                if($scope.usedCarValuationGetDetailObj.selectedVariant == "Select Variant"){
                    alert("Please Select Varient First")
                }else {
                    $state.go('eventmenu.city', {"retunEvent": "used-car-valuation-get-detail"});
                }
            }

            $scope.fn_getValuationForCar = function(){
                $state.go('eventmenu.used-car-valuation-show');
            }

            $scope.fn_getValuationForCarLeft = function(){
                $state.go('eventmenu.used-car-valuation');
            }



        }])
    .controller(
    'varientIdCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            $scope.model = "...";

            var retunEvent = $stateParams.retunEvent;

            var selectedModel = sharedProperties.getModel();
            console.log("get model " + selectedModel);
            var urlToSerach = '';

            if (retunEvent == 'used-car-valuation-get-detail') {
                var usedCarValuationGetDetailObj = sharedProperties.getUsedCarValuation();
                urlToSerach = "getUsedCarValuationVariantByModel&modelName="+usedCarValuationGetDetailObj.selectedModel+"&modelYear="+usedCarValuationGetDetailObj.selectedYear
            } else {
                urlToSerach = "getCarVariantDetailByCarModelName&ModelName=" + selectedModel;
            }

            sharedProperties.getHttpData(urlToSerach, function(varientData){
                console.log("varient detail "+ JSON.stringify(varientData));
                $scope.varientObj = varientData;

            });

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.fn_setVarient = function (model) {
                sharedProperties.setVarientID(model);
                $state.go('eventmenu.'+retunEvent);
            }
        }])

    .controller(
    'valuationVarientIdCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            $scope.model = "...";

            var retunEvent = $stateParams.retunEvent;

            var selectedModel = sharedProperties.getModel();
            console.log("get model " + selectedModel);
            var urlToSerach = '';


                var usedCarValuationGetDetailObj = sharedProperties.getUsedCarValuation();
                urlToSerach = "getUsedCarValuationVariantByModel&modelName="+usedCarValuationGetDetailObj.selectedModel+"&modelYear="+usedCarValuationGetDetailObj.selectedYear


            sharedProperties.getHttpData(urlToSerach, function(varientData){
                console.log("varient detail "+ JSON.stringify(varientData));
                $scope.varientObj = varientData;

            });

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.fn_setVarient = function (model) {
                sharedProperties.setValuationVarientID(model);
                $state.go('eventmenu.'+retunEvent);
            }
        }])
    .controller(
    'offerAndDiscountCityCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',

        function ($scope, sharedProperties, $state,$stateParams) {
            console.log("city ");
            var retunEvent = $stateParams.retunEvent;

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            var urlToCount = "getOfferCityList"

            sharedProperties.getHttpData(urlToCount, function(data){
                $scope.offerCityListObj =data;
            })

            $scope.newCity = function (selectedCity) {
                console.log("city "+ selectedCity);
                sharedProperties.setOfferAndDiscountCity(selectedCity);
                $scope.search = '';
                    $state.go('eventmenu.nc-offers-and-dicounts');
            }
        }])
   .controller(
    'offerAndDiscountBrandCtrl',
    [
        '$scope',
        'sharedProperties',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $state, $stateParams) {
            $scope.brand = "...";
            var retunEvent = $stateParams.retunEvent;

            
            $scope.offerAndDiscountObj = sharedProperties.getOfferAndDiscountObj();
            $scope.clearSearch = function () {
                $scope.search = '';
            };


            var urlToCount = "getOfferOemModelForCity&city="+$scope.offerAndDiscountObj.selectedCity;

            sharedProperties.getHttpData(urlToCount, function(data){
                $scope.offerBrandListObj =data;
                sharedProperties.setOfferAndDiscountBrandAndModelObj(data);
            })

            $scope.newBrand = function (brand) {
            	console.log(brand);
            	$scope.offerAndDiscountObj.selectedModel="Select Model";
                sharedProperties.setOfferAndDiscountBrand(brand);
                $scope.search = '';
               
                $state.go("eventmenu.nc-offers-and-dicounts");
            }
        }])
        
    .controller(
    'offerAndDiscountModelCtrl',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            $scope.model = "...";
            var retunEvent = $stateParams.retunEvent;

            $scope.offerAndDiscountObj = sharedProperties.getOfferAndDiscountObj();
            //$scope.

            console.log('offerAndDiscountObj'+ JSON.stringify($scope.offerAndDiscountObj.selectedCity));
            
            var modelListArray = angular.copy($scope.offerAndDiscountObj.OfferAndDiscountBrandAndModelObj.data.oemModelList);

            for(var i=0; i< modelListArray.length; i++){
                var obj = modelListArray[i];

                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if($scope.offerAndDiscountObj.selectedBrand == key ){
                            console.log("key "+ key + JSON.stringify(obj));
                            console.log("offerAndDiscountObj.selectedBrand "+ $scope.offerAndDiscountObj.selectedBrand );
                            $scope.modelObj= obj[key];
                        }
                    }
                }

            }

            $scope.clearSearch = function () {
                $scope.search = '';
            };

            $scope.newModel = function (model) {
            	
                sharedProperties.setOfferAndDiscountModel(model);
                $scope.search = '';
                $state.go('eventmenu.nc-offers-and-dicounts');

            }
        }])
        
    .controller(
    'nc_offersAndDiscountsShow',
    [
        '$scope',
        'sharedProperties',
        '$window',
        '$location',
        '$rootScope',
        '$state',
        '$stateParams',
        function ($scope, sharedProperties, $window, $location,
                  $rootScope, $state, $stateParams) {
            //$scope.model = "...";
            //var retunEvent = $stateParams.retunEvent;

            $scope.offerAndDiscountObj = sharedProperties.getOfferAndDiscountObj();

            var urlToCount = "getDiscountOffersSearchResult&oem="+$scope.offerAndDiscountObj.selectedBrand +"&modelName="+$scope.offerAndDiscountObj.selectedModel +"&city="+$scope.offerAndDiscountObj.selectedCity+"&startLimit=1&endLimit=20";

            sharedProperties.getHttpData(urlToCount, function(data){
                console.log("data "+ JSON.stringify(data));
                $scope.offerObj =data;
                //sharedProperties.setOfferAndDiscountBrandAndModelObj(data);
            })


            $scope.fn_getMoreOffers = function () {
                $state.go('eventmenu.nc-offers-and-dicounts');

            }


        }])




