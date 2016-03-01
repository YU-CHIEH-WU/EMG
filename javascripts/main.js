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
            //移動方塊
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
                    if(clickId=='block-detail-2'){

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
                if (mainChartData == '1rmGrow') {
                    mainChartData = '1rm';
                }
                if (mainChartData == '15rmGrow') {
                    mainChartData = '15rm';
                }
                if (leftChartData == '1rmGrow') {
                    leftChartData = '1rm';
                }
                if (leftChartData == '15rmGrow') {
                    leftChartData = '15rm';
                }
                if (rightChartData == '1rmGrow') {
                    rightChartData = '1rm';
                }
                if (rightChartData == '15rmGrow') {
                    rightChartData = '15rm';
                }
            }
            if (type == 'precent') {
                if (mainChartData == '1rm') {
                    mainChartData = '1rmGrow';
                }
                if (mainChartData == '15rm') {
                    mainChartData = '15rmGrow';
                }
                if (leftChartData == '1rm') {
                    leftChartData = '1rmGrow';
                }
                if (leftChartData == '15rm') {
                    leftChartData = '15rmGrow';
                }
                if (rightChartData == '1rm') {
                    rightChartData = '1rmGrow';
                }
                if (rightChartData == '15rm') {
                    rightChartData = '15rmGrow';
                }
            }
            setDetailCharts(chartTitle, mainChartData, leftChartData, rightChartData)
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
