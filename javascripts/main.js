//TODO:chart改為attribute
$(function() {
    var prevType = 'main';
    //hover首頁方塊調整其他方塊透明度
    $('.block-inner').on('mouseenter', function() {
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.block-inner').on('mouseleave', function() {
            $('.opacity').removeClass('opacity');
        })
        //點擊首頁方塊顯示詳細方塊1
    $('.clickable').click(function(e) {
            //停止氣泡
            e.stopPropagation();
            //取得資料
            clickBlock = $(this);
            chartTitle = clickBlock.data('charttitle');
            mainChartName = clickBlock.data('mainchartname');
            leftChartName = clickBlock.data('leftchartname');
            rightChartName = clickBlock.data('rightchartname');
            showTabs = clickBlock.data('showtabs');
            //移動方塊 TODO:fadeout
            if (!$('.block-inner').hasClass('ontop')) {
                $('.block-inner').addClass('gotop');
                $('#block-detail-1').addClass('active');
            }
            //是否顯示操作項
            if (showTabs) {
                $('.chartTabs').show();
            } else {
                $('.chartTabs').hide();
            }
            //加入標題與圖表
            setDetailCharts(chartTitle, mainChartName, leftChartName, rightChartName)
        })
        //動畫結束後加上ontop判斷 避免動畫重複觸發
    $('.block-detail').on('transitionend webkitTransitionEnd oTransitionEnd', function() {
        $('.block-inner').addClass('ontop');
        if (!$('.ontop').hasClass('gotop')) {
            $('.ontop').removeClass('ontop');
        }
    })
    $('.user-nav').find('a').on('click', function(e) {
            e.stopPropagation();
            src = $(this).data('src');
            title = $(this).data('title');
            $('#block-detail-2').find('.block-header').find('.title').html(title);
            $('#block-detail-iframe').attr('src', src);
            if (!$('.block-inner').hasClass('ontop')) {
                $('.block-inner').addClass('gotop');
                $('#block-detail-2').addClass('active');
            }
        })
        //點擊詳細方塊外圍回首頁
    $('html,body,.back').on('click', function(e) {
            if ($('.block-inner').hasClass('ontop')) {
                //停止氣泡
                e.stopPropagation();
                //移動方塊
                clickId = $('.active').attr('id');
                $('html, body').scrollTop(0);
                $('.block-inner').removeClass('ontop');
                $('.block-detail').removeClass('active');
                var timeout = setTimeout(function() {
                    $('.block-inner').removeClass('gotop');
                    //清除標題與圖表
                    if (clickId == 'block-detail-1') {
                        $('#block-detail-1').find('.title').html('');
                        $('#block-detail-chart').highcharts().destroy();
                        $('#block-subChart-left').highcharts().destroy();
                        $('#block-subChart-right').highcharts().destroy();
                    }
                    if (clickId == 'block-detail-2') {

                    }
                }, 50)
            }
        })
        //防止有白目把它玩壞
    $('*').on('click', function() {
            if (!$('.ontop').hasClass('gotop')) {
                $('.ontop').removeClass('ontop');
            }
        })
        //時鐘
    var interval = setInterval(function() {
        var date = new Date();
        var hour = ("0" + date.getHours()).slice(-2);
        var minute = ("0" + date.getMinutes()).slice(-2);
        var second = ("0" + date.getSeconds()).slice(-2);
        $('#block-clock').find('.block-body').html(hour + ' : ' + minute + ' : ' + second);
    }, 100);
    //首頁方塊圖表縮圖
    setChart('status', 'block-chart-status');
    setChart('bodyfatThumb', 'block-bodyfatThumb');
    setChart('training', 'block-trainingThumb');
    setChart('grow', 'block-growThumb');
    setChart('dotThumb', 'block-dotThumb');
    setChart('resultThumb', 'block-resultThumb');
    //詳細方塊圖表切換
    $('.btn-type').on('click', function(e) {
            e.stopPropagation();
            mainChartName = $('#block-detail-chart').data('chartname');
            leftChartName = $('#block-subChart-left').data('chartname');
            rightChartName = $('#block-subChart-right').data('chartname');
            type = $(this).data('type')
                //公斤與百分比切換
            if (type == 'kg') {
                if (mainChartName == '1rmGrow') {
                    mainChartName = '1rm';
                }
                if (mainChartName == '15rmGrow') {
                    mainChartName = '15rm';
                }
                if (leftChartName == '1rmGrow') {
                    leftChartName = '1rm';
                }
                if (leftChartName == '15rmGrow') {
                    leftChartName = '15rm';
                }
                if (rightChartName == '1rmGrow') {
                    rightChartName = '1rm';
                }
                if (rightChartName == '15rmGrow') {
                    rightChartName = '15rm';
                }
            }
            if (type == 'precent') {
                if (mainChartName == '1rm') {
                    mainChartName = '1rmGrow';
                }
                if (mainChartName == '15rm') {
                    mainChartName = '15rmGrow';
                }
                if (leftChartName == '1rm') {
                    leftChartName = '1rmGrow';
                }
                if (leftChartName == '15rm') {
                    leftChartName = '15rmGrow';
                }
                if (rightChartName == '1rm') {
                    rightChartName = '1rmGrow';
                }
                if (rightChartName == '15rm') {
                    rightChartName = '15rmGrow';
                }
            }
            setDetailCharts(chartTitle, mainChartName, leftChartName, rightChartName)
            prevType = type;
        })
        //設定圖表
    function setDetailCharts(chartTitle, mainChartName, leftChartName, rightChartName) {
        if (chartTitle != undefined) {
            $('#block-detail-1').find('.block-header').find('.title').html(chartTitle);
        }
        if (mainChartName != undefined) {
            setChart(mainChartName, 'block-detail-chart');
            $('#block-detail-chart').data('chartname', mainChartName);
        }
        if (leftChartName != undefined) {
            setChart(leftChartName, 'block-subChart-left');
            $('#block-subChart-left').data('chartname', leftChartName);
        }
        if (rightChartName != undefined) {
            setChart(rightChartName, 'block-subChart-right');
            $('#block-subChart-right').data('chartname', rightChartName);
        }
    }
})
