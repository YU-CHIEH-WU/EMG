$(function() {
    $('.clickable').on('mouseenter', function() {
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.clickable').on('mouseleave', function() {
            $('.opacity').removeClass('opacity');
        })
        //分享圖表至Facebook
    $('#btn-trainingSVG').on('click', function() {
        var svg = $('#block-training-thumb').highcharts().getSVG();
        $('#trainingSVG').text(svg);
        console.log("data:image/svg+xml;base64," + btoa(svg));
        window.fbAsyncInit = function() {
            FB.init({
                appId: '472853519550243',
                status: true,
                cookie: true,
                xfbml: true
            });
        };
        var e = document.createElement('script');
        e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
        url = "data:image/svg+xml;base64," + btoa(svg);
        FB.ui({
            method: 'feed',
            name: 'FIT ME 肌不可失',
            link: 'http://163.17.136.197:8080/EMG',
            picture: url,
            caption: 'This article demonstrates how to use the jQuery dialog feature in ASP.Net.',
            description: 'FIT ME 肌不可失,您個人專屬的健身教練',
            message: 'hello raj message'
        });
    });
})
var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$http', '$timeout', '$location', '$anchorScroll',
    function($scope, $http, $timeout, $location, $anchorScroll) {
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
                chart2 = '15rm';
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
        $scope.courseList = [];
        $scope.isHaveCourse = false;
        // 課程選項格式
        var courseOptions = { 'goal': '', 'complex': '', 'chest': '', 'back': '', 'shoulder': '', 'belly': '', 'foot': '', 'two': '', 'three': '', 'power': '' };
        // 目標選項格式
        var goalList = { 'strength': '', 'endurance': '' };
        // 部位選項格式
        var partList = { 'complex': '', 'chest': '', 'back': '', 'shoulder': '', 'shoulder': '', 'belly': '', 'foot': '', two: '', 'three': '' };
        // 器材選項格式
        var deviceList = { 'dumbbell': '', 'barbell': '', 'pulley': '' };
        // 存放課程預覽
        $scope.previewList = [];
        // 複製格式 active為控制按鈕class所用
        $scope.courseOptions = angular.copy(courseOptions);
        $scope.selectedGoal = angular.copy(goalList);
        $scope.selectedPart = angular.copy(partList);
        $scope.selectedDevice = angular.copy(deviceList);
        // 確認是否輸入選項
        $scope.isGoalSet = false;
        $scope.isPartSet = false;
        $scope.isDeviceSet = false;
        // 判斷是否有部位選取
        var isPartialSelected = false;
        var partialSelectedCount = 0;
        // 判斷是否有器材選取
        var deviceSelectedCount = 0;
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
        var refreshCourse=function(){
                    $scope.previewList = [];
                    $scope.courseOptions = angular.copy(courseOptions);
                    $scope.selectedGoal = angular.copy(goalList);
                    $scope.selectedPart = angular.copy(partList);
                    $scope.selectedDevice=angular.copy(deviceList);
                    $scope.isGoalSet = false;
                    $scope.isPartSet = false;
                    isPartialSelected = false;
                    partialSelectedCount = 0;
                    $scope.isDeviceSet = false;
                    deviceSelectedCount = 0;
                    $scope.isCreateCourse = false;
                    $scope.isCourseShow = false;
                    $scope.selectedStrength = false;
                    $scope.selectedEndurance = false;
                    $scope.courseStatus = { 'options': '', 'preview': '', 'position': '' };
            }
            // 隱藏產生新課程block
        $scope.hideCourse = function(option) {
                // 重置產生新課程
                if (option == 'quit') {
                    refreshCourse();
                }
                $scope.isCourseShow = false;
            }
            // 設定訓練目標
        $scope.setGoal = function(options) {
                $scope.courseOptions.goal = options;
                if (options == '肌力') {
                    $scope.selectedGoal['endurance'] = '';
                    if ($scope.selectedGoal['strength'] != '肌力') {
                        $scope.selectedGoal['strength'] = '肌力';
                        $scope.isGoalSet = true;
                    } else {
                        $scope.selectedGoal['strength'] = '';
                        $scope.isGoalSet = false;
                    }
                }
                if (options == '肌耐力') {
                    $scope.selectedGoal['strength'] = '';
                    if ($scope.selectedGoal['endurance]'] != '肌耐力') {
                        $scope.selectedGoal['endurance'] = '肌耐力';
                        $scope.isGoalSet = true;
                    } else {
                        $scope.selectedGoal['endurance'] = '';
                        $scope.isGoalSet = false;
                    }
                }
            }
            // 設定訓練部位
        $scope.setPart = function(options) {
                var index = '';
                if (options == '複合') {
                    index = 'complex';
                }
                if (options == '胸') {
                    index = 'chest';
                }
                if (options == '背') {
                    index = 'back';
                }
                if (options == '肩') {
                    index = 'shoulder';
                }
                if (options == '腹') {
                    index = 'belly';
                }
                if (options == '腳') {
                    index = 'foot';
                }
                if (options == '肱二頭') {
                    index = 'two';
                }
                if (options == '肱三頭') {
                    index = 'three';
                }
                // 如果有均衡訓練或部位訓練跨選則更新選項
                if (index == 'complex' && isPartialSelected) {
                    $scope.selectedPart = angular.copy(partList);
                    partialSelectedCount = 0;
                }
                if (index != 'complex' && $scope.selectedPart['complex'] != '') {
                    $scope.selectedPart = angular.copy(partList);
                }
                if (index != 'complex' && $scope.selectedPart[index] == '') {
                    partialSelectedCount++;
                }
                if (index != 'complex' && $scope.selectedPart[index] != '') {
                    partialSelectedCount--;
                }
                if (partialSelectedCount > 0) {
                    isPartialSelected = true;
                    $scope.isPartSet = true;
                } else {
                    isPartialSelected = false;
                    $scope.isPartSet = false;
                }
                // toggle選取
                if ($scope.selectedPart[index] == '') {
                    $scope.selectedPart[index] = options;
                    if (index == 'complex') {
                        $scope.isPartSet = true;
                    }
                } else {
                    $scope.selectedPart[index] = '';
                    if (index == 'complex') {
                        $scope.isPartSet = false;
                    }
                }
            }
            // 設定訓練器材
        $scope.setDevice = function(options) {
                var index = '';
                if (options == '啞鈴') {
                    index = 'dumbbell';
                }
                if (options == '槓鈴') {
                    index = 'barbell';
                }
                if (options == '滑輪') {
                    index = 'pulley';
                }
                console.log($scope.selectedDevice[index]=='');
                if ($scope.selectedDevice[index] == '') {
                    deviceSelectedCount++;
                    $scope.selectedDevice[index] = options;
                }
                else if ($scope.selectedDevice[index] != '') {
                    deviceSelectedCount--;
                    $scope.selectedDevice[index] = '';
                }
                if (deviceSelectedCount > 0) {
                    $scope.isDeviceSet = true;
                } else {
                    $scope.isDeviceSet = false;
                }
                console.log($scope.selectedDevice[index])
            }
            // 產生個人化課表
        $scope.createCourse = function() {
            // 判斷輸入選項
            if (!$scope.isGoalSet) {
                alert('請選擇訓練目標');
                return;
            };
            if (!$scope.isPartSet) {
                alert('請選擇訓練部位');
                return;
            };
            if(!$scope.isDeviceSet){
                alert('請選擇訓練器材');
                return;
            }
            // 放入訓練部位
            angular.forEach($scope.selectedPart, function(value, key) {
                    $scope.courseOptions[key] = $scope.selectedPart[key];
                })
                // 產生個人化課表
                // 產生課程api網址
                //var createCourseApi = 'http://localhost:55546/api/CourseApi/CreateCourse'; //本機測試用網址
            var createCourseApi = 'http://163.17.136.197:8080/EMG/api/CourseApi/CreateCourse';
            // 產生課程選項
            var courseData = $scope.courseOptions;
            $http.post(createCourseApi, courseData).then(function(response) {
                var data = response.data;
                // 產生課程成功
                if (data != "") {
                    // 儲存一週課程資料
                    $scope.course = data;
                    // 接API回傳課程放入previewTitle跟previewList
                    angular.forEach(data, function(value, key) {
                        var preview = {
                            'day': 'Day' + value.Days,
                            'position': [{ 'pos': value.Pos1 }, { 'pos': value.Pos2 },
                                { 'pos': value.Pos3 }, { 'pos': value.Pos4 }, { 'pos': value.Pos5 }, { 'pos': value.Pos6 }
                            ]
                        };
                        $scope.previewList.push(preview);
                    })
                    console.log($scope.previewList);
                    //顯示一週日期
                    $scope.activeDate = ['', '', '', '', '', '', ''];
                    $scope.previewDate = [];
                    var week = ['禮拜天', '禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五', '禮拜六'];
                    for (i = 1; i < 8; i++) {
                        var currentDate = new Date(new Date().getTime() + i * 86400000);
                        var year = currentDate.getFullYear();
                        var month = currentDate.getMonth() + 1;
                        var day = currentDate.getDate();
                        var weekday = currentDate.getDay();
                        var date = { 'month': month, 'day': day, 'weekday': week[weekday], 'date': year + '-' + month + '-' + day }
                        $scope.previewDate.push(date);
                    };
                    // 顯示課程預覽
                    $scope.courseStatus['preview'] = 'active';
                    $scope.courseStatus['options'] = '';
                }
                // 產生課程失敗
                else {
                    alert("產生課程失敗");
                }
            });
        };
        // 設定開始日期
        $scope.setDate = function(index) {
            $scope.activeDate = ['', '', '', '', '', '', ''];
            $scope.activeDate[index] = 'active';
            $scope.currentDate = $scope.previewDate[index];
            $location.hash('btn-confirm');
            $anchorScroll();
        };
        // 確認課程
        $scope.courseConfirm = function() {
            console.log($scope.currentDate, $scope.courseOptions);
            // 儲存個人化課表
            // 儲存課程api網址
            //var saveCourseApi = 'http://localhost:55546/api/CourseApi/SaveCourse'; //本機測試用網址
            var saveCourseApi = 'http://163.17.136.197:8080/EMG/api/CourseApi/SaveCourse';
            // 課程資料
            var saveCourseData = { 'courseList': $scope.course, 'date': $scope.currentDate.date, 'goal': $scope.courseOptions.goal, 'power': $scope.courseOptions.power };
            $http.post(saveCourseApi, saveCourseData).then(function(response) {
                var data = response.data;
                // 產生課程成功
                if (data != "") {
                    // 儲存一週課程資料
                    angular.forEach(data, function(value, key) {
                        var values = value['Date'].split('T');
                        var time = values[0];
                        console.log(values, time)
                        var course = { 'thumb': 'images/muscle.jpg', 'title': value['P_Name'], 'time': time };
                        $scope.courseList.push(course);
                    })
                    console.log(data);
                    console.log("success")
                    $scope.isHaveCourse = true;
                    $scope.previewList = [];
                    $scope.courseOptions = angular.copy(courseOptions);
                    $scope.selectedGoal = angular.copy(goalList);
                    $scope.activePart = angular.copy(partList);
                    $scope.selectedPart = angular.copy(partList);
                    $scope.isGoalSet = false;
                    $scope.isPartSet = false;
                    $scope.isDeviceSet = false;
                    isPartialSelected = false;
                    partialSelectedCount = 0;
                    $scope.isCreateCourse = false;
                    $scope.isCourseShow = false;
                    $scope.selectedStrength = false;
                    $scope.selectedEndurance = false;
                    $scope.courseStatus = { 'options': '', 'preview': '', 'position': '' };
                }
                // 儲存課程失敗
                else {
                    alert("儲存課程失敗");
                }
            });
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
    }
]);
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
