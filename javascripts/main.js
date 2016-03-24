var app = angular.module('mainApp', ['mainApp']);
app.controller('testController',['$scope',function($scope){
    $scope.isCourseClick=false;
    $scope.showCourse=function(){
        $scope.isCourseClick=true;
    }
}]);
app.controller('blockController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    // 等待登入
    $scope.loginLoading = false;
    // 是否登入
    $scope.isLogin=false;
    // 登入狀況說明
    $scope.loginMessage = "登入";
    // 登入
    $scope.login = function() {
        if($scope.loginAccount==undefined){
            alert('請填入帳號');
            return;
        }
        if($scope.loginPassword==undefined){
            alert('請填入密碼');
            return;
        }
        $scope.loginLoading = true;
        $scope.loginMessage = "Loading...";
        // 登入api網址
        var loginApi = 'http://163.17.136.197:8080/EMG/api/UserApi/Login';
        // 帳號密碼
        var loginData = { 'Account': $scope.loginAccount, 'Password': $scope.loginPassword };
        $http.post(loginApi, loginData).then(function(response) {
            var data = response.data;
            // 登入成功
            if (data.checkStr == "") {
                // 轉往個人首頁
                $scope.userName=data.userName;
                $scope.userPhoto=data.userPhoto;
                $scope.isLogin=true;
            }
            // 登入失敗
            else {
                alert(data.checkStr);
            }
            $scope.loginMessage = "登入"
            $scope.loginLoading = false;
        });
    };
    $scope.loginTest = function() {
            $scope.loginLoading = true;
            $timeout(function() {
                $scope.loginLoading = false;
            }, 1000);
        }
        // 登入後
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
