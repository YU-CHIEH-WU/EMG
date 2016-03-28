$(function() {
    $('.clickable').on('mouseenter', function() {
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.clickable').on('mouseleave', function() {
        $('.opacity').removeClass('opacity');
    })
    $('.btn-saveSVG').on('click', function() {
        var svg = $('#block-training-thumb').highcharts().getSVG();
        $('#trainingSVG').text(svg);
        console.log("data:image/svg+xml;base64," + btoa(svg));
    })
})
var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    // 首頁
    // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail1Active = false;
    $scope.detail2Active = false;
    $scope.detail3Active = false;
    // 以動畫差隱藏首頁block
    $scope.isOntop = false;
    this.prevType = '';
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

    // 會員
    $scope.userName = '使用者';
    $scope.userPhoto = 'images/profile.jpg';
    // 延遲載入使用者帳號並取得使用者資料 
    $timeout(function() {
        console.log($scope.userAccount);
        // TODO:API取得使用者資料
    }, 10);
    // 登入後使用者個人資料
    setChart('status', 'block-chart-status');
    setChart('bodyfatThumb', 'block-bodyfat-thumb');
    setChart('training', 'block-training-thumb');
    setChart('grow', 'block-grow-thumb');
    setChart('dotThumb', 'block-dotThumb');
    setChart('resultThumb', 'block-result-thumb');
    // 行事曆控制項與預設
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
        // 課程選項格式
    var courseOptions = { 'goal': '', 'complex': '', 'chest': '', 'back': '', 'shoulder': '', 'belly': '', 'foot': '', 'two': '', 'three': '', 'power': '' };
    // 目標選項格式
    var goalList = { 'strength': '', 'endurance': '' };
    // 部位選項格式
    var partList = { 'complex': '', 'chest': '', 'back': '', 'shoulder': '', 'shoulder': '', 'belly': '', 'foot': '', two: '', 'three': '' };
    // 複製格式 active為控制按鈕class所用
    $scope.courseOptions = angular.copy(courseOptions);
    $scope.selectedGoal = angular.copy(goalList);
    $scope.activePart = angular.copy(partList);
    $scope.selectedPart = angular.copy(partList);
    // 確認是否輸入選項
    var isGoalSet = false;
    var isPartSet = false;
    var isPowerSet = false;
    // 判斷是否有部位選取
    var isPartialSelected = false;
    var partialSelectedCount = 0;
    // true時顯示課程選項(不重複)
    $scope.isCreateCourse = false;
    // true時顯示產生新課程視窗
    $scope.isCourseShow = false;
    // 控制按鈕class所用
    $scope.selectedStrength = false;
    $scope.selectedEndurance = false;
    // 控制產生新課程步驟所用
    $scope.courseStatus = { 'options': '', 'preview': '', 'position': '' };
    // 開始產生新課程
    $scope.newCourse = function() {
            if (!$scope.isCreateCourse) {
                $scope.courseStatus['options'] = 'active';
            }
            $scope.isCreateCourse = true;
            $scope.isCourseShow = true;
        }
        // 隱藏產生新課程block
    $scope.hideCourse = function() {
            $scope.isCourseShow = false;
        }
        // 設定訓練目標
    $scope.setGoal = function(options) {
            $scope.courseOptions.goal = options;
            if (options == 'strength') {
                $scope.selectedGoal['endurance'] = '';
                if ($scope.selectedGoal[options] != 'strength') {
                    $scope.selectedGoal[options] = 'strength';
                    isGoalSet = true;
                } else {
                    $scope.selectedGoal[options] = '';
                    isGoalSet = false;
                }
            }
            if (options == 'endurance') {
                $scope.selectedGoal['strength'] = '';
                if ($scope.selectedGoal[options] != 'endurance') {
                    $scope.selectedGoal[options] = 'endurance';
                    isGoalSet = true;
                } else {
                    $scope.selectedGoal[options] = '';
                    isGoalSet = false;
                }
            }
        }
        // 設定訓練部位
    $scope.setPart = function(options) {
            // 如果有均衡訓練或部位訓練跨選則更新選項
            if (options == 'complex' && isPartialSelected) {
                $scope.selectedPart = angular.copy(partList);
                $scope.activePart = angular.copy(partList);
                partialSelectedCount = 0;
            }
            if (options != 'complex' && $scope.activePart['complex'] == 'active') {
                $scope.selectedPart = angular.copy(partList);
                $scope.activePart = angular.copy(partList);
            }
            if (options != 'complex' && $scope.activePart[options] != 'active') {
                partialSelectedCount++;
            }
            if (options != 'complex' && $scope.activePart[options] == 'active') {
                partialSelectedCount--;
            }
            if (partialSelectedCount > 0) {
                isPartialSelected = true;
                isPartSet = true;
            } else {
                isPartialSelected = false;
                isPartSet = false;
            }
            // toggle選取
            if ($scope.activePart[options] != 'active') {
                $scope.selectedPart[options] = options;
                $scope.activePart[options] = 'active';
                if (options == 'complex') {
                    isPartSet = true;
                }
            } else {
                $scope.selectedPart[options] = '';
                $scope.activePart[options] = '';
                if (options == 'complex') {
                    isPartSet = false;
                }
            }
        }
        // 產生個人化課表
    $scope.createCourse = function() {
        if ($scope.courseOptions.power > 0) {
            isPowerSet = true;
        };
        // 判斷輸入選項
        if (!isGoalSet) {
            alert('請選擇訓練目標');
            return;
        };
        if (!isPartSet) {
            alert('請選擇訓練部位');
            return;
        };
        if (!isPowerSet) {
            alert('請選擇訓練磅數');
            return;
        };
        // 放入訓練部位
        angular.forEach($scope.selectedPart, function(value, key) {
            if ($scope.selectedPart[value] != undefined) {
                $scope.courseOptions[value] = $scope.selectedPart[value];
            }
        })
        console.log($scope.courseOptions);
        // 接API回傳課程放入previewTitle跟previewList
        $scope.previewTitle = '初學者均衡鍛鍊';
        $scope.previewList = [{ 'day': 'Day1', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] },
            { 'day': 'Day3', 'position': [{ 'pos': '姿勢四' }, { 'pos': '姿勢五' }, { 'pos': '姿勢六' }] },
            { 'day': 'Day6', 'position': [{ 'pos': '姿勢一' }, { 'pos': '姿勢二' }, { 'pos': '姿勢三' }] }
        ];
        //顯示一週日期
        $scope.activeDate = ['', '', '', '', '', '', ''];
        $scope.previewDate = [];
        var week = ['禮拜天', '禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五', '禮拜六'];
        for (i = 1; i < 8; i++) {
            var currentDate = new Date(new Date().getTime() + i * 86400000);
            var month = currentDate.getMonth() + 1;
            var day = currentDate.getDate();
            var weekday = currentDate.getDay();
            var date = { 'month': month, 'day': day, 'weekday': week[weekday] }
            $scope.previewDate.push(date);
        };
        // 顯示課程預覽
        $scope.courseStatus['preview'] = 'active';
        $scope.courseStatus['options'] = '';
    };
    // 設定開始日期
    $scope.setDate = function(index) {
        $scope.activeDate = ['', '', '', '', '', '', ''];
        $scope.activeDate[index] = 'active';
        $scope.currentDate = $scope.previewDate[index];
    };
    // 確認課程
    $scope.courseConfirm = function() {
        console.log($scope.currentDate, $scope.courseOptions);
    };
    // 顯示姿勢詳細教學
    $scope.showPositionDetail = function(pos) {
        $scope.positionName = pos;
        $scope.courseStatus['position'] = 'active';
        $scope.courseStatus['preview'] = 'left';
    };
    // 返回課程預覽
    $scope.backPreviewList = function() {
        $scope.courseStatus['preview'] = 'active';
        $scope.courseStatus['position'] = '';
    };

    // 訓練成效與肌肉成長
    // true時顯示說明block
    $scope.hoverGrow = false;
    $scope.hoverTraining = false;
    // 顯示說明block
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
    // 隱藏說明block
    $scope.hideMessage = function(target) {
        if (target == 'training') {
            $scope.hoverTraining = false;
        };
        if (target == 'grow') {
            $scope.hoverGrow = false;
        };
    };
    // 分享圖表至Facebook
    $scope.shareChart = function() {
        $timeout(function() {
            var svg = $scope.trainingSVG;
            console.log(svg)
        }, 10);
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
