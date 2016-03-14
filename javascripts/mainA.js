var app = angular.module('mainApp', ['mainApp']);
app.controller('mainController', ['$rootScope', function($rootScope) {
    $rootScope.object = {};
    // 登入是否成功
    $rootScope.object.loginSuccess = false;
    // 登入後個人資訊
    $rootScope.object.userName = '';
    $rootScope.object.userPhoto = '';
}])
app.controller('loginController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
    //判斷是否登入成功
    $rootScope.loginSuccess = false;
    // 登入等待狀況
    $scope.loginLoading = false;
    // 登入狀況說明
    $scope.loginMessage = "";
    // 登入按鈕鎖定
    $scope.loginDisabled = false;
    // 登入
    $scope.login = function() {
        $scope.loginLoading = true;
        $scope.loginMessage = "Loading...";
        $scope.loginDisabled = false;
        // 登入api網址
        var loginApi = 'http://163.17.136.197:8080/EMG/api/UserApi/Login';
        // 帳號密碼
        var loginData = { 'Account': $scope.loginAccount, 'Password': $scope.loginPassword };
        $http.post(loginApi, loginData).then(function(response) {
            var data = response.data;
            // 登入成功
            if (data.checkStr == "") {
                $rootScope.userName = data.userName;
                $rootScope.userPhoto = data.userPhoto;
                $scope.loginLoading = false;
                $rootScope.loginSuccess = true;
            }
            // 登入失敗
            else {
                $scope.loginMessage = data.checkStr;
            }
            $scope.loginDisabled = false;
        });
    };
    $scope.loginTest = function() {
            $rootScope.userName = "測試";
            $rootScope.userPhoto = "images/profile.jpg";
            $scope.loginDisabled = false;
            $scope.loginLoading = false;
            $rootScope.loginSuccess = true;
        }
        // 登入後設定首頁圖表
    $scope.setIndexCharts = function($event) {
        if ($rootScope.loginSuccess) {
            // 過濾觸發事件
            var target = angular.element(event.target);
            if (target.hasClass('block-login-back')) {
                // 隱藏登入block
                $scope.hideLogin = true;
                // 設定首頁圖表
                setChart('status', 'block-chart-status');
                setChart('bodyfatThumb', 'block-bodyfatThumb');
                setChart('training', 'block-trainingThumb');
                setChart('grow', 'block-growThumb');
                setChart('dotThumb', 'block-dotThumb');
                setChart('resultThumb', 'block-resultThumb');
            };
        };
    };
}]);
app.controller('blockController', ['$rootScope', '$scope', '$http', '$timeout', function($rootScope, $scope, $http, $timeout) {
    // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail1Active = false;
    $scope.detail2Active = false;
    $scope.detail3Active = false;
    // 以動畫差隱藏首頁block
    $scope.isOntop = false;
    // detail1詳細設定
    $scope.detail1Options = {
        'title': '',
        'chart1': '',
        'chart2': '',
        'chart3': ''
    };
    // detail2詳細設定
    $scope.detail2Options = {
        'title': '',
        'chart1': '',
        'chart2': '',
        'chart3': '',
        'chart4': ''
    };
    // detail3詳細設定
    $scope.detail3Options = {
        title: '',
        'src': ''
    };
    this.prevType = '';
    // 顯示detail1BLock
    $scope.showDetail1 = function(setting) {
        var title = $scope.detail1Options.title;
        var chart1 = $scope.detail1Options.chart1;
        var chart2 = $scope.detail1Options.chart2;
        var chart3 = $scope.detail1Options.chart3;
        if (setting == 'training') {
            title = '訓練成效詳細資訊';
            chart1 = 'fatigue';
            chart2 = 'pmvc';
            chart3 = 'result';
        };
        if (setting == 'grow') {
            title = '肌肉成長詳細資訊';
            chart1 = '1rm';
            chart2 = 'pmvc';
            chart3 = 'growWays';
        };
        // 設定detail1圖表
        setChart(chart1, 'detail1-main-chart');
        setChart(chart2, 'detail1-left-chart');
        setChart(chart3, 'detail1-right-chart');
        $scope.detail1Active = true;
        $scope.isDetailActive = true;
    };
    // 切換公斤與百分比圖表
    $scope.switchType = function(type) {
            if (type != this.prevType) {
                if (type == 'kg') {
                    var chart1 = $scope.detail1Options.chart1;
                    var chart2 = $scope.detail1Options.chart2;
                    var chart3 = $scope.detail1Options.chart3;
                    if (chart1 == '1rmGrow') {
                        chart1 = '1rm';
                    }
                    if (chart1 == '15rmGrow') {
                        chart1 = '15rm';
                    }
                    if (chart2 == '1rmGrow') {
                        chart2 = '1rm';
                    }
                    if (chart2 == '15rmGrow') {
                        chart2 = '15rm';
                    }
                    if (chart3 == '1rmGrow') {
                        chart3 = '1rm';
                    }
                    if (chart3 == '15rmGrow') {
                        chart3 = '15rm';
                    }
                }
                if (type == 'precent') {
                    if (chart1 == '1rm') {
                        chart1 = '1rmGrow';
                    }
                    if (chart1 == '15rm') {
                        chart1 = '15rmGrow';
                    }
                    if (chart2 == '1rm') {
                        chart2 = '1rmGrow';
                    }
                    if (chart2 == '15rm') {
                        chart2 = '15rmGrow';
                    }
                    if (chart3 == '1rm') {
                        chart3 = '1rmGrow';
                    }
                    if (chart3 == '15rm') {
                        chart3 = '15rmGrow';
                    }
                }
                setChart(chart1, 'detail1-main-chart');
                setChart(chart2, 'detail1-left-chart');
                setChart(chart3, 'detail1-right-chart');
            }

        }
        // 顯示detail3Block
    $scope.showDetail3 = function(setting) {
        var title = '';
        var src = '';
        if (setting == 'cog') {
            title = 'TEST';
            src = 'test.html';
        };
        $scope.detail3Options.title = title;
        $scope.detail3Options.src = src;
        $scope.detail3Active = true;
        $scope.isDetailActive = true;
    };
    // 防止動畫重複觸發
    $scope.setOntop = function() {
        if ($scope.isDetailActive && !$scope.isOntop) {
            $scope.isOntop = true;
        };
    };
    // 顯示首頁
    $scope.showIndex = function() {
        $scope.detail1Active = false;
        $scope.detail2Active = false;
        $scope.detail3Active = false;
        $scope.isOntop = false;
        $timeout(function() { $scope.isDetailActive = false }, 50);
    };
}]);
// 偵測TransitionEnd
app.directive('whenTransitionEnd', [
    '$parse',
    function($parse) {
        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        var whichTransitionEvent = function() {
            var t,
                el = document.createElement("fakeelement");

            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        };

        var transitionEvent = whichTransitionEvent();

        return {
            'restrict': 'A',
            'link': function(scope, element, attrs) {
                var expr = attrs['whenTransitionEnd'];
                var fn = $parse(expr);

                element.bind(transitionEvent, function(evt) {

                    var phase = scope.$root.$$phase;

                    if (phase === '$apply' || phase === '$digest') {
                        fn();
                    } else {
                        scope.$apply(fn);
                    };
                });
            },
        };
    }
]);
