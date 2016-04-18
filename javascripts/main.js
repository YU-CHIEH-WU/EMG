$(function() {
    $('.datepicker').datepicker({
        language: "zh-TW",
        autoclose: true
    });
})
var app = angular.module('mainApp', ['mainApp']);
app.controller('blockController', ['$scope', '$sce', '$http', '$timeout', '$interval', function($scope, $sce, $http, $timeout, $interval) {
    // 首頁
    // true時隱藏首頁block
    $scope.isDetailActive = false;
    // true時顯示對應detail
    $scope.detail3Active = false;
    $scope.detail4Active = false;
    $scope.detail5Active = false;
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
        $scope.detail5Active = false;
        $scope.isOntop = false;
        $timeout(function() { $scope.isDetailActive = false }, 50);
    };
    $scope.showDetail3 = function() {
        $scope.isDetailActive = true;
        $scope.detail3Active = true;
    };
    $scope.showDetail4 = function(id) {
        //接API
        $scope.detailTitle = '健身消息標題';
        var test = 'Line1\nLine2\nLine3\n'
        var detailContent = '患有精神分裂症（schizophrenia）的患者通常會被要求服用抗精神病藥物（antipsuchotics）以緩和病情，但抗精神病藥物通常只能改善精神的狀況，像是妄想與幻覺等，卻不能改善其它大腦的症狀，讓許多醫生相當困擾。而根據最新的研究顯示，若患者搭配健身的話，將能更加改善精神分裂症的症狀。\n\n精神分裂症，又稱為思覺失調症，患有此病的人有著相當多的病徵，其中大家最了解的徵狀就是出現幻覺與幻想。然而，其他像是影響記憶力、處理接收資訊的速度、注意力、解決問題的技巧等病徵雖看似不起眼，影響程度卻比出現幻覺還來的深遠。加州大學洛杉磯分校神經科學與人類行為研究所的 Keith Nuechterlein 教授表示，這些不起眼的病徵，都是導致他們患有殘疾與遭社會孤立的原因。\n\n世界上大約 1% 的人口深受精神分裂之苦，除了服用抗精神病藥物外，有的專家也會使用電腦遊戲來治療精神分裂症，大約能改善病患在記憶、思考能力、與社會認知中，四分之一到三分之一的病徵。但 Nuechterlein 教授的團隊發現，若在這個療程中搭配有氧運動的話，將可以大大改善精神病患者的症狀。\n在第一項進行大約 10 周的研究中，Nuechterlein 的團隊對 16 名患有早期精神分裂症的青壯年進行實驗，其中 9 名在這幾周中分別進行神經認知以及社會認知訓練的電腦程式操作，而剩下的 7 名除了進行相同的訓練外，更加上了每周 150 分鐘的有氧運動，看看其成果是否會有所不同。10 周過後，研究團隊發現，有搭配有氧運動的認知表現有著兩倍左右的差距，相當的驚人。\n\n而在第二項進行六個月的實驗中，共有 32 個患有早期精神分裂的患者參與實驗，其中一半的實驗者除了每周進行 4 小時的電腦遊戲訓練外，也搭配定期的有氧運動。六個月過後，研究學者更發現，有在運動的實驗者比沒運動的實驗者的症狀改善程度還好上三倍，顯示定期運動的時間若拉長，將會對患者有著更好的效果。\n\n然而，為什麼運動會有著這樣的成果呢？研究學者表示，這是因為在有氧運動的過程中，大腦會釋放出一種叫做腦源性神經營養生長因子（BDNF）的蛋白質，BDNF 能夠刺激在大腦中的學習與長期記憶中心—海馬迴，讓它能生長出新的神經，並且增加神經之間的連結，除了一般人以外，對於患有精神病的患者來說，更是能增長他們的記憶力以及學習力。\n\n團隊成員之一的心理學家研究助理 Sarah McEwen 表示，在第二項實驗裡，有運動的患者腦部裡的 BDNF 含量增加了 35%，其中過半的 BDNF 是在實驗剛進行的前兩個禮拜就已增加。此外，他們也測量了其他沒有運動的人大腦中的 BDNF 含量，在這六個月的過程中，則是一點也沒有增加。而研究學者也表示，這項研究對於患有早期精神分裂的人來說是較有效的，因為他們的病情比較具有長期的改善。\n\nNuechterlein 最後表示，他們做此研究希望的是，能夠避免慢性殘疾在精神分裂患者中出現，並且讓他們盡可能的在社會上繼續生活，有著規律的上學生活或者是正常的朋友關係。他們也認為，在未來，服用抗精神病藥物和電腦遊戲訓練只是基本能緩和精神病病徵的治療方式，搭配有氧運動的療程才能使患者更能讓患者大幅改善。';
        $scope.detailContent = $sce.trustAsHtml(detailContent.replace(new RegExp('\r?\n', 'g'), '<br />'));
        $scope.detail4Active = true;
        $scope.isDetailActive = true;
    };
    $scope.showDetail5 = function(id) {
            $scope.detailTitle = '健身消息標題';
            var detailContent = '患有精神分裂症（schizophrenia）的患者通常會被要求服用抗精神病藥物（antipsuchotics）以緩和病情，但抗精神病藥物通常只能改善精神的狀況，像是妄想與幻覺等，卻不能改善其它大腦的症狀，讓許多醫生相當困擾。而根據最新的研究顯示，若患者搭配健身的話，將能更加改善精神分裂症的症狀。\n\n精神分裂症，又稱為思覺失調症，患有此病的人有著相當多的病徵，其中大家最了解的徵狀就是出現幻覺與幻想。然而，其他像是影響記憶力、處理接收資訊的速度、注意力、解決問題的技巧等病徵雖看似不起眼，影響程度卻比出現幻覺還來的深遠。加州大學洛杉磯分校神經科學與人類行為研究所的 Keith Nuechterlein 教授表示，這些不起眼的病徵，都是導致他們患有殘疾與遭社會孤立的原因。\n\n世界上大約 1% 的人口深受精神分裂之苦，除了服用抗精神病藥物外，有的專家也會使用電腦遊戲來治療精神分裂症，大約能改善病患在記憶、思考能力、與社會認知中，四分之一到三分之一的病徵。但 Nuechterlein 教授的團隊發現，若在這個療程中搭配有氧運動的話，將可以大大改善精神病患者的症狀。\n在第一項進行大約 10 周的研究中，Nuechterlein 的團隊對 16 名患有早期精神分裂症的青壯年進行實驗，其中 9 名在這幾周中分別進行神經認知以及社會認知訓練的電腦程式操作，而剩下的 7 名除了進行相同的訓練外，更加上了每周 150 分鐘的有氧運動，看看其成果是否會有所不同。10 周過後，研究團隊發現，有搭配有氧運動的認知表現有著兩倍左右的差距，相當的驚人。\n\n而在第二項進行六個月的實驗中，共有 32 個患有早期精神分裂的患者參與實驗，其中一半的實驗者除了每周進行 4 小時的電腦遊戲訓練外，也搭配定期的有氧運動。六個月過後，研究學者更發現，有在運動的實驗者比沒運動的實驗者的症狀改善程度還好上三倍，顯示定期運動的時間若拉長，將會對患者有著更好的效果。\n\n然而，為什麼運動會有著這樣的成果呢？研究學者表示，這是因為在有氧運動的過程中，大腦會釋放出一種叫做腦源性神經營養生長因子（BDNF）的蛋白質，BDNF 能夠刺激在大腦中的學習與長期記憶中心—海馬迴，讓它能生長出新的神經，並且增加神經之間的連結，除了一般人以外，對於患有精神病的患者來說，更是能增長他們的記憶力以及學習力。\n\n團隊成員之一的心理學家研究助理 Sarah McEwen 表示，在第二項實驗裡，有運動的患者腦部裡的 BDNF 含量增加了 35%，其中過半的 BDNF 是在實驗剛進行的前兩個禮拜就已增加。此外，他們也測量了其他沒有運動的人大腦中的 BDNF 含量，在這六個月的過程中，則是一點也沒有增加。而研究學者也表示，這項研究對於患有早期精神分裂的人來說是較有效的，因為他們的病情比較具有長期的改善。\n\nNuechterlein 最後表示，他們做此研究希望的是，能夠避免慢性殘疾在精神分裂患者中出現，並且讓他們盡可能的在社會上繼續生活，有著規律的上學生活或者是正常的朋友關係。他們也認為，在未來，服用抗精神病藥物和電腦遊戲訓練只是基本能緩和精神病病徵的治療方式，搭配有氧運動的療程才能使患者更能讓患者大幅改善。';
            $scope.detailEdit = detailContent;
            $scope.detail5Active = true;
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
        var bigdata1Option = getChartOption('tippie', '女生最想看異性哪個肌肉部位', femaleWant);
        var bigdata2Option = getChartOption('tippie', '男生最注重自己哪個肌肉部位', maleFocus);
        var bigdata3Option = getChartOption('pie', '大家健身最大的動機為何', motiveList);
        console.log(bigdata1Option);
        setChart('block-bigdata1-thumb', bigdata1Option);
        setChart('block-bigdata2-thumb', bigdata2Option);
        setChart('block-bigdata3-thumb', bigdata3Option);
    })
    $scope.changeSex = function(type, sex) {
            var chartOption = {};
            if (type == 'want') {
                if (sex == 'female') {
                    $scope.isFemaleWant = true;
                    $scope.isMaleWant = false;
                    chartOption = getChartOption('tippie', '女生最想看異性哪個肌肉部位', femaleWant);
                    setChart('block-bigdata1-thumb', chartOption);
                } else {
                    $scope.isMaleWant = true;
                    $scope.isFemaleWant = false
                    chartOption = getChartOption('tippie', '男生最想看異性哪個肌肉部位', maleWant);
                    setChart('block-bigdata1-thumb', chartOption);
                }
            }
            if (type == 'focus') {
                if (sex == 'female') {
                    $scope.isFemaleFocus = true;
                    $scope.isMaleFocus = false;
                    chartOption = getChartOption('tippie', '女生最注重自己哪個肌肉部位', femaleFocus);
                    setChart('block-bigdata2-thumb', chartOption);
                } else {
                    $scope.isMaleFocus = true;
                    $scope.isFemaleFocus = false;
                    chartOption = getChartOption('tippie', '男生最注重自己哪個肌肉部位', maleFocus);
                    setChart('block-bigdata2-thumb', chartOption);
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
        $scope.registerUser = { 'url': 'images/profile.jpg' };
        $scope.isRegisterClick = true;
        $scope.isFormShow = true;
        $scope.isQuestShow = false;
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
    $scope.doQuest = function(event) {
            event.preventDefault();
            $scope.isFormShow = false;
            $scope.isQuestShow = true;
        }
        // 登入後
        //最新消息
    $scope.newsList = [{ 'id': '1', 'title': '健身消息標題健身消息標題健身消息標題健身消息標題健身消息標題健身消息標題健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' },
        { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }, { 'id': '1', 'title': '健身消息標題' }
    ];
    // 名人榜
    var fameList = [{ 'title': '第一名', 'thumb': 'images/profile.jpg', 'name': '姜琇森', 'slide': 'active', opacity: 'opacity' },
        { 'title': '第二名', 'thumb': 'images/profile.jpg', 'name': '王麒瑞', 'slide': 'right', opacity: 'opacity' },
        { 'title': '第三名', 'thumb': 'images/profile.jpg', 'name': '鄧方晴', 'slide': 'right', opacity: '' },
        { 'title': '第四名', 'thumb': 'images/profile.jpg', 'name': '張哲瑋', 'slide': 'right', opacity: '' },
        { 'title': '第五名', 'thumb': 'images/profile.jpg', 'name': '吳彧傑', 'slide': 'right', opacity: '' }
    ];
    $scope.fameList = angular.copy(fameList);
    var fameCount = 1;
    $interval(function() {
        if (fameCount == 0) {
            $scope.fameList[3].opacity = '';
            $scope.fameList[4].slide = 'left';
            $scope.fameList[0].slide = 'active';
            $scope.fameList[1].opacity = 'opacity';
            $scope.fameList[2].slide = 'right';
        }
        if (fameCount == 1) {
            $scope.fameList[4].opacity = '';
            $scope.fameList[0].slide = 'left';
            $scope.fameList[1].slide = 'active';
            $scope.fameList[2].opacity = 'opacity';
            $scope.fameList[3].slide = 'right';
        }
        if (fameCount == 2) {
            $scope.fameList[0].opacity = '';
            $scope.fameList[1].slide = 'left';
            $scope.fameList[2].slide = 'active';
            $scope.fameList[3].opacity = 'opacity';
            $scope.fameList[4].slide = 'right';
        }
        if (fameCount == 3) {
            $scope.fameList[1].opacity = '';
            $scope.fameList[2].slide = 'left';
            $scope.fameList[3].slide = 'active';
            $scope.fameList[4].opacity = 'opacity';
            $scope.fameList[0].slide = 'right';
        }
        if (fameCount == 4) {
            $scope.fameList[2].opacity = '';
            $scope.fameList[3].slide = 'left';
            $scope.fameList[4].slide = 'active';
            $scope.fameList[0].opacity = 'opacity';
            $scope.fameList[1].slide = 'right';
        }
        fameCount++;
        if (fameCount == 5) {
            fameCount = 0;
        }
    }, 2000);
    // 訓練成果相片
    $scope.isAlbumListShow = true;
    $scope.isPhotoListShow = false;
    $scope.photoTitle = '';
    $scope.albumList = [{ 'title': '肱二頭肌', 'thumb': 'images/T51.jpg' },
        { 'title': '肱三頭肌', 'thumb': 'images/T51.jpg' }, { 'title': '胸肌', 'thumb': 'images/T51.jpg' },
        { 'title': '腹肌', 'thumb': 'images/T51.jpg' }, { 'title': '背肌', 'thumb': 'images/T51.jpg' },
        { 'title': '肩部', 'thumb': 'images/T51.jpg' }, { 'title': '腿部', 'thumb': 'images/T51.jpg' }
    ];
    $scope.showPhotoList = function(title) {
        $scope.photoTitle = title;
        $scope.photoList = [{ 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' },
            { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' },
            { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }, { 'src': 'images/T51.jpg' }
        ]
        $scope.isPhotoListShow = true;
        $scope.isAlbumListShow = false;
    };
    $scope.showAlbumList = function() {
        $scope.isAlbumListShow = true;
        $scope.isPhotoListShow = false;
    };
    $scope.showPhoto = function(photo) {
        $scope.detailPhoto = photo;
        $scope.isPhotoClick = true;
        $timeout(function() {
            $scope.isPhotoShow = true;
        }, 250);
    }
    $scope.backPhotoList = function() {
            $scope.isPhotoShow = false;
            $timeout(function() {
                $scope.isPhotoClick = false;
            }, 250);
        }
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
    var partCourse = {
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
        if (filter == 'part') {
            $scope.courseTitle = angular.copy(partCourse.title);
            $scope.courseList = angular.copy(partCourse.courseList);
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
app.directive("fileread", [function() {
    return {
        scope: {
            fileread: "="
        },
        link: function(scope, element, attributes) {
            element.bind("change", function(changeEvent) {
                var reader = new FileReader();
                reader.onload = function(loadEvent) {
                    scope.$apply(function() {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);
