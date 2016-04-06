var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$http', '$timeout', '$interval', function($scope, $http, $timeout, $interval) {
    // 首頁
    // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail4Active = false;
    // 以動畫差隱藏首頁block
    $scope.isOntop = false;
    // 防止動畫重複觸發
    $scope.setOntop = function() {
        if ($scope.isDetailActive && !$scope.isOntop) {
            $scope.isOntop = true;
        };
    };
    // 顯示首頁
    $scope.showIndex = function() {
        $scope.detail4Active = false;
        $scope.isOntop = false;
        $timeout(function() { $scope.isDetailActive = false }, 50);
    };
    $scope.showDetail4 = function(id) {
            console.log(id);
            //接API
            $scope.isDetailActive = true;
            $scope.detailTitle = '健身消息標題';
            $scope.detailContent = '健身消息內文';
            $scope.detail4Active = true;
            $scope.isDetailActive = true;
        }
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
        //最新消息
    $scope.newsList = [{ 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }
    ];
    // 名人榜
    var fameList = [{ 'title': '第一名', 'thumb': 'images/profile.jpg', 'name': '使用者', 'slide': 'active', opacity: 'opacity' },
        { 'title': '第二名', 'thumb': 'images/profile.jpg', 'name': '使用者', 'slide': 'right', opacity: '' },
        { 'title': '第三名', 'thumb': 'images/profile.jpg', 'name': '使用者', 'slide': 'right', opacity: '' },
        { 'title': '第四名', 'thumb': 'images/profile.jpg', 'name': '使用者', 'slide': 'right', opacity: '' },
        { 'title': '第五名', 'thumb': 'images/profile.jpg', 'name': '使用者', 'slide': 'right', opacity: '' }
    ];
    $scope.fameList = angular.copy(fameList);
    var fameCount = 1;
    $interval(function() {
        if (fameCount == 0) {
            $scope.fameList[4].opacity = '';
            $scope.fameList[fameCount].opacity = 'opacity';
            fameCount++;
        } else if (fameCount > 0 && fameCount < 4) {
            $scope.fameList[fameCount - 1].opacity = '';
            $scope.fameList[fameCount].opacity = 'opacity';
            fameCount++;
        } else {
            $scope.fameList[fameCount - 1].opacity = '';
            $scope.fameList[fameCount].opacity = 'opacity';
            fameCount = 0;
        }
    }, 2000);
    // 推薦課程 接入api
    var beginnerCourse = {
        title: '初學者均衡鍛鍊',
        'courseList': [{ 'day': 'Day1', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day3', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day6', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day8', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day11', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day13', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day16', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day18', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day21', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day23', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day26', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day28', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day31', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] }
        ]
    };
    var hotCourse = {
        title: '進階均衡鍛鍊',
        'courseList': [{ 'day': 'Day1', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day3', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day6', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day8', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day11', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day13', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day16', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day18', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day21', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day23', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day26', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day28', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day31', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] }
        ]
    };
    var themeCourse = {
        title: '二頭肌強力鍛鍊',
        'courseList': [{ 'day': 'Day1', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day3', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day6', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day8', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day11', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day13', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day16', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day18', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day21', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day23', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day26', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day28', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day31', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] }
        ]
    };
    var targetCourse = {
        title: '進階減脂課程',
        'courseList': [{ 'day': 'Day1', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day3', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day6', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day8', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day11', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day13', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day16', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day18', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day21', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day23', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day26', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day28', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day31', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] }
        ]
    };
    $scope.isCourseClick = false;
    $scope.isCourseShow = false;
    $scope.isPositionShow = false;
    $scope.showCourse = function(filter) {
        if (filter == 'beginner') {
            $scope.courseTitle=angular.copy(beginnerCourse.title);
            $scope.courseList=angular.copy(beginnerCourse.courseList);
        }
        if(filter=='hot'){
            $scope.courseTitle=angular.copy(hotCourse.title);
            $scope.courseList=angular.copy(hotCourse.courseList);
        }
        if(filter=='theme'){
            $scope.courseTitle=angular.copy(themeCourse.title);
            $scope.courseList=angular.copy(themeCourse.courseList);
        }
        if(filter=='target'){
            $scope.courseTitle=angular.copy(targetCourse.title);
            $scope.courseList=angular.copy(targetCourse.courseList);
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
    $scope.showPositionDetail = function(pos) {
        //接入姿勢api
        $scope.positionName = pos;
        $scope.isPositionShow = true;
    }
    $scope.backCourseList = function() {
        $scope.isPositionShow = false;
    }
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
