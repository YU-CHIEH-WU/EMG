var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$http', '$timeout', '$interval', function($scope, $http, $timeout, $interval) {
    // 首頁
    // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail3Active = false;
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
        $scope.detail3Active = false;
        $scope.detail4Active = false;
        $scope.isOntop = false;
        $timeout(function() { $scope.isDetailActive = false }, 50);
    };
    $scope.showDetail3 = function() {
        $scope.isDetailActive = true;
        $scope.detail3Active = true;
    }
    $scope.showDetail4 = function(id) {
            console.log(id);
            //接API
            $scope.detailTitle = '健身消息標題';
            $scope.detailContent = '健身消息內文';
            $scope.detail4Active = true;
            $scope.isDetailActive = true;
        }
        // 取得問卷資料
        // categories 放運動項目 series name放健身部位 data放各個部位的值
    var questList = [];
    var femaleCount = 0;
    var maleCount = 0;
    var wantList = [{ 'name': '腿部', 'y': 0 }, { 'name': '胸部', 'y': 0 }, { 'name': '背部', 'y': 0 }, { 'name': '腹部', 'y': 0 }, { 'name': '肩部', 'y': 0 }, { 'name': '肱二頭肌', 'y': 0 }, { 'name': '肱三頭肌', 'y': 0 }]
    var focusList = [{ 'name': '均衡發展', 'y': 0 }, { 'name': '腿部', 'y': 0 }, { 'name': '胸部', 'y': 0 }, { 'name': '背部', 'y': 0 }, { 'name': '腹部', 'y': 0 }, { 'name': '肩部', 'y': 0 }, { 'name': '肱二頭肌', 'y': 0 }, { 'name': '肱三頭肌', 'y': 0 }]
    var wantCount = { '腿部': 0, '胸部': 0, '背部': 0, '腹部': 0, '肩部': 0, '肱二頭肌': 0, '肱三頭肌': 0 };
    var focusCount = { '均衡發展': 0, '腿部': 0, '胸部': 0, '背部': 0, '腹部': 0, '肩部': 0, '肱二頭肌': 0, '肱三頭肌': 0 };
    var maleWant = angular.copy(wantList);
    var maleWantCount = angular.copy(wantCount);
    var femaleWant = angular.copy(wantList);
    var femaleWantCount = angular.copy(wantCount);
    var maleFocus = angular.copy(focusList);
    var maleFocusCount = angular.copy(focusCount);
    var femaleFocus = angular.copy(focusList);
    var femaleFocusCount = angular.copy(focusCount);
    $scope.isMaleWant = false;
    $scope.isMaleFocus = true;
    $scope.isFemaleWant = true;
    $scope.isFemaleFocus = false;
    var motiveList = [];
    var motiveCount = {};
    var sportList = ['其他'];
    var sportTempCount = {};
    var sportCount = [{ 'name': '其他', 'y': 0, 'data': [] }];
    var sportFocus = [];
    var sportSeries = [{ 'name': '均衡發展', 'data': [] }, { 'name': '腿部', 'data': [] }, { 'name': '胸部', 'data': [] }, { 'name': '背部', 'data': [] }, { 'name': '腹部', 'data': [] }, { 'name': '肩部', 'data': [] }, { 'name': '肱二頭肌', 'data': [] }, { 'name': '肱三頭肌', 'data': [] }, ]
    var questApi = 'https://spreadsheets.google.com/feeds/list/1ZiCa4_VaaajJ2mNj36Mb-Z51AwuwH5O7g60NN7a4SPQ/od6/public/values?alt=json';
    $http.get(questApi).then(function(response) {
        var entry = response.data.feed.entry;
        angular.forEach(entry, function(value, key) {
            var sex = entry[key]['gsx$sex'].$t;
            var age = entry[key]['gsx$age'].$t;
            var food = entry[key]['gsx$food'].$t;
            var frult = entry[key]['gsx$frult'].$t;
            var digest = entry[key]['gsx$digest'].$t;
            var regular = entry[key]['gsx$regular'].$t;
            var fried = entry[key]['gsx$fried'].$t;
            var sugary = entry[key]['gsx$sugary'].$t;
            var sleep = entry[key]['gsx$sleep'].$t;
            var frequency = entry[key]['gsx$frequency'].$t;
            var time = entry[key]['gsx$time'].$t;
            var sport = entry[key]['gsx$sport'].$t;
            var motive = entry[key]['gsx$motive'].$t;
            var level = entry[key]['gsx$level'].$t;
            var focus = entry[key]['gsx$focus'].$t;
            var want = entry[key]['gsx$want'].$t;
            var sustain = entry[key]['gsx$sustain'].$t;
            var request = entry[key]['gsx$request'].$t;
            var plan = entry[key]['gsx$plan'].$t;
            var data = {
                'sex': sex,
                'age': age,
                'food': food,
                'frult': frult,
                'digest': digest,
                'regular': regular,
                'fried': fried,
                'sugary': sugary,
                'sleep': sleep,
                'frequency': frequency,
                'time': time,
                'sport': sport,
                'motive': motive,
                'level': level,
                'focus': focus,
                'want': want,
                'sustain': sustain,
                'request': request,
                'plan': plan
            };
            questList.push(data);
            if (motiveCount[motive] == undefined) {
                motiveCount[motive] = 1;
                motiveList.push({ 'name': motive, 'y': 0 });
            } else {
                motiveCount[motive]++;
            }
            if (sportTempCount[sport] == undefined) {
                sportTempCount[sport] = 1;
            } else {
                sportTempCount[sport]++;
            }
            if (sex == '男生') {
                maleWantCount[want]++;
                maleFocusCount[focus]++;
                maleCount++;
            }
            if (sex == '女生') {
                femaleWantCount[want]++;
                femaleFocusCount[focus]++;
                femaleCount++;
            }
        })
        angular.forEach(sportTempCount, function(value, key) {
            if (value >= 3 && key != '無') {
                sportCount.push({ 'name': key, 'y': value, 'data': [] });
                sportList.push(key);
            } else {
                sportCount[0].y += value;
            }
        })
        sportCount.sort(function(a, b) {
            return a.y - b.y;
        });
        sportCount.reverse();
        sportCount.pop()
        console.log(sportList, sportCount);
        angular.forEach(motiveList, function(value, key) {
            motiveList[key].y = parseFloat((motiveCount[value.name] / questList.length * 100).toFixed(2));
        })
        angular.forEach(maleWant, function(value, key) {
            maleWant[key].y = parseFloat((maleWantCount[value.name] / maleCount * 100).toFixed(2));
        })
        angular.forEach(femaleWant, function(value, key) {
            femaleWant[key].y = parseFloat((femaleWantCount[value.name] / femaleCount * 100).toFixed(2));
        })
        angular.forEach(maleFocus, function(value, key) {
            maleFocus[key].y = parseFloat((maleFocusCount[value.name] / maleCount * 100).toFixed(2));
        })
        angular.forEach(femaleFocus, function(value, key) {
            femaleFocus[key].y = parseFloat((femaleFocusCount[value.name] / femaleCount * 100).toFixed(2));
        })
        setChart('tippie', 'block-bigdata1-thumb', '女生最想看異性哪個肌肉部位', femaleWant);
        setChart('tippie', 'block-bigdata2-thumb', '男生最注重自己哪個肌肉部位', maleFocus);
        setChart('pie', 'block-bigdata3-thumb', '大家健身最大的動機為何', motiveList);
    })
    $scope.changeSex = function(type, sex) {
            if (type == 'want') {
                if (sex == 'female') {
                    $scope.isFemaleWant = true;
                    $scope.isMaleWant = false;
                    setChart('tippie', 'block-bigdata1-thumb', '女生最想看異性哪個肌肉部位', femaleWant);
                } else {
                    $scope.isMaleWant = true;
                    $scope.isFemaleWant = false
                    setChart('tippie', 'block-bigdata1-thumb', '男生最想看異性哪個肌肉部位', maleWant);
                }
            }
            if (type == 'focus') {
                if (sex == 'female') {
                    $scope.isFemaleFocus = true;
                    $scope.isMaleFocus = false;
                    setChart('tippie', 'block-bigdata2-thumb', '女生最注重自己哪個肌肉部位', femaleFocus);
                } else {
                    $scope.isMaleFocus = true;
                    $scope.isFemaleFocus = false;
                    setChart('tippie', 'block-bigdata2-thumb', '男生最注重自己哪個肌肉部位', maleFocus);
                }
            }
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
        // 註冊
    $scope.register = function() {
        $scope.isRegisterClick = true;
        $timeout(function() {
            $scope.isRegisterShow = true;
        }, 30);
    }
    $scope.hideRegister = function() {
            $scope.isRegisterShow = false;
            $timeout(function() {
                $scope.isRegisterClick = false;
            }, 250);
        }
        // 登入後
        //最新消息
    $scope.newsList = [{ 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }
    ];
    // 名人榜
    var fameList = [{ 'title': '第一名', 'thumb': 'images/profile.jpg', 'name': '姜琇森', 'slide': 'active', opacity: 'opacity' },
        { 'title': '第二名', 'thumb': 'images/profile.jpg', 'name': '王麒瑞', 'slide': 'right', opacity: '' },
        { 'title': '第三名', 'thumb': 'images/profile.jpg', 'name': '鄧方晴', 'slide': 'right', opacity: '' },
        { 'title': '第四名', 'thumb': 'images/profile.jpg', 'name': '張哲瑋', 'slide': 'right', opacity: '' },
        { 'title': '第五名', 'thumb': 'images/profile.jpg', 'name': '吳彧傑', 'slide': 'right', opacity: '' }
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
    // 訓練成果相片
    $scope.albumList = [{ 'title': '肱二頭肌', 'thumb': 'images/T51.jpg' },
        { 'title': '肱三頭肌', 'thumb': 'images/T51.jpg' }, { 'title': '胸肌', 'thumb': 'images/T51.jpg' },
        { 'title': '腹肌', 'thumb': 'images/T51.jpg' }, { 'title': '背肌', 'thumb': 'images/T51.jpg' },
        { 'title': '肩部', 'thumb': 'images/T51.jpg' }, { 'title': '腿部', 'thumb': 'images/T51.jpg' }
    ];
    $scope.showPhotoList = function(title) {
        console.log(title);
    };
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
    var popularCourse = {
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
    var bodyfatCourse = {
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
            $scope.courseTitle = angular.copy(beginnerCourse.title);
            $scope.courseList = angular.copy(beginnerCourse.courseList);
        }
        if (filter == 'popular') {
            $scope.courseTitle = angular.copy(popularCourse.title);
            $scope.courseList = angular.copy(popularCourse.courseList);
        }
        if (filter == 'theme') {
            $scope.courseTitle = angular.copy(themeCourse.title);
            $scope.courseList = angular.copy(themeCourse.courseList);
        }
        if (filter == 'bodyfat') {
            $scope.courseTitle = angular.copy(bodyfatCourse.title);
            $scope.courseList = angular.copy(bodyfatCourse.courseList);
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
