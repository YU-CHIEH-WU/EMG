var app = angular.module('mainApp', ['mainApp']);
app.controller('testController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.isCourseClick = false;
    $scope.isCourseShow = false;
    $scope.isPositionShow=false;
    $scope.showCourse = function(filter) {
        if(filter=='A'){
            $scope.courseTitle='初學者均衡鍛鍊';
            $scope.courseList=[{'day':'Day1','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day3','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day6','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day8','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day11','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day13','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day16','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day18','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day21','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day23','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day26','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]},
            {'day':'Day28','position':[{'pos':'姿勢四'},{'pos':'姿勢五'},{'pos':'姿勢六'}]},
            {'day':'Day31','position':[{'pos':'姿勢一'},{'pos':'姿勢二'},{'pos':'姿勢三'}]}];
        }
        $scope.isCourseClick = true;
        $timeout(function() {
            $scope.isCourseShow = true;
        }, 30);
    }
    $scope.hideCourse = function() {
        $scope.isCourseShow = false;
        $timeout(function() {
            $scope.isCourseClick = false;
        }, 250);
    }
    $scope.showPositionDetail = function(pos){
        $scope.positionName=pos;
        $scope.isPositionShow=true;
    }
    $scope.backCourseList = function(){
        $scope.isPositionShow=false;
    }
}]);
app.controller('blockController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    // 等待登入
    $scope.loginLoading = false;
    // 是否登入
    $scope.isLogin = false;
    // 登入狀況說明
    $scope.loginMessage = "登入";
    // 登入
    $scope.login = function() {
        if ($scope.loginAccount == undefined) {
            alert('請填入帳號');
            return;
        }
        if ($scope.loginPassword == undefined) {
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
                $scope.userName = data.userName;
                $scope.userPhoto = data.userPhoto;
                $scope.isLogin = true;
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
