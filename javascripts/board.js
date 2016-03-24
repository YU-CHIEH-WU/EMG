$(function() {
    $('.clickable').on('mouseenter', function() {
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.clickable').on('mouseleave', function() {
        $('.opacity').removeClass('opacity');
    })
})
var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    // 延遲載入使用者帳號並取得使用者資料 
    $timeout(function() {
        console.log($scope.userAccount);
        // API取得使用者資料
    }, 10);
    // 登入後使用者個人資料
    $scope.userName = '使用者';
    $scope.userPhoto = 'images/profile.jpg';
    setChart('status', 'block-chart-status');
    setChart('bodyfatThumb', 'block-bodyfatThumb');
    setChart('training', 'block-trainingThumb');
    setChart('grow', 'block-growThumb');
    setChart('dotThumb', 'block-dotThumb');
    setChart('resultThumb', 'block-resultThumb');
    // 行事曆
    $scope.courseData = [{
            'thumb': 'images/dumbbell.png',
            'title': '啞鈴集中彎舉',
            'time': '3/9 星期三'
        }, {
            'thumb': 'images/dumbbell-c.png',
            'title': '啞鈴斜板彎舉',
            'time': '3/11 星期五'
        }, {
            'thumb': 'images/chin-up.png',
            'title': '引體向上',
            'time': '3/13 星期日'
        }, {
            'thumb': 'images/dumbbell-c.png',
            'title': '啞鈴斜板彎舉',
            'time': '3/15 星期二'
        }, {
            'thumb': 'images/dumbbell.png',
            'title': '啞鈴集中彎舉',
            'time': '3/17 星期四'
        }, {
            'thumb': 'images/chin-up.png',
            'title': '引體向上',
            'time': '3/19 星期六'
        }]
        // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail1Active = false;
    $scope.detail2Active = false;
    $scope.detail3Active = false;
    // 以動畫差隱藏首頁block
    $scope.isOntop = false;
    this.prevType = '';
    $scope.hoverTraining = false;
    $scope.hoverGrow = false;
    //顯示說明block
    $scope.showMessage = function(target) {
        if (target == 'training') {
            this.trainingMoving = true;
            $scope.hoverTraining = true;
        };
        if (target == 'grow') {
            this.growMoving = true;
            $scope.hoverGrow = true;
        };
    };
    $scope.hideMessage = function(target) {
        if (target == 'training') {
            $scope.hoverTraining = false;
        };
        if (target == 'grow') {
            $scope.hoverGrow = false;
        };
    };
    // 顯示detail1BLock
    $scope.showDetail1 = function(setting) {
        var title = '';
        var chart1 = '';
        var chart2 = '';
        var chart3 = '';
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