//TODO:chart改為attribute
$(function() {
    var prevType = 'main';
    //hover首頁方塊調整其他方塊透明度
    $('.clickable').on('mouseenter', function() {
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.clickable').on('mouseleave', function() {
            $('.opacity').removeClass('opacity');
        })
        //點擊首頁方塊顯示詳細方塊1
    $('.clickable').click(function(e) {
            //停止氣泡
            e.stopPropagation();
            //取得資料
            clickBlock = $(this);
            title = clickBlock.data('title');
            mainChartName = clickBlock.data('mainchartname');
            leftChartName = clickBlock.data('leftchartname');
            rightChartName = clickBlock.data('rightchartname');
            detail = clickBlock.data('detail');
            showTabs = clickBlock.data('showtabs');
            //移動方塊 TODO:fadeout
            if (detail == 1) {
                //是否顯示操作項
                if (showTabs) {
                    $('#detail1-right-tabs').show();
                } else {
                    $('#detail1-right-tabs').hide();
                }
                //加入標題與圖表
                showDetail('#block-detail-1');
                setDetail1(title, mainChartName, leftChartName, rightChartName);
            }
            if (detail == 2) {
                showDetail('#block-detail-2');
                setDetail2(title, mainChartName, leftChartName, rightChartName);
            }

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
            showDetail('#block-detail-3');
            setDetail3(title, src);
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
                        $('#detail1-main-chart').highcharts().destroy();
                        $('#detail1-left-chart').highcharts().destroy();
                        $('#detail1-right-chart').highcharts().destroy();
                    }
                    if (clickId == 'block-detail-2') {
                        $('#block-detail-2').find('.title').html('');
                        $('#detail2-main-chart').highcharts().destroy();
                        $('#detail2-left-chart').highcharts().destroy();
                        $('#detail2-right-chart').highcharts().destroy();
                    }
                    if (clickId == 'block-detail-3') {
                        $('#detail2-main-iframe').attr('src', '');
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
        mainChartName = $('#detail1-main-chart').data('chartname');
        leftChartName = $('#detail1-left-chart').data('chartname');
        rightChartName = $('#detail1-right-chart').data('chartname');
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
        setDetail1(title, mainChartName, leftChartName, rightChartName)
        prevType = type;
    })

    function showDetail(id) {
        if (!$('.block-inner').hasClass('ontop')) {
            $('.block-inner').addClass('gotop');
            $(id).addClass('active');
        }
    }
    //設定Detail1圖表
    function setDetail1(title, mainChartName, leftChartName, rightChartName) {
        if (title != undefined) {
            $('#block-detail-1').find('.block-header').find('.title').html(title);
        }
        if (mainChartName != undefined) {
            setChart(mainChartName, 'detail1-main-chart');
            $('#detail1-main-chart').data('chartname', mainChartName);
        }
        if (leftChartName != undefined) {
            setChart(leftChartName, 'detail1-left-chart');
            $('#detail1-left-chart').data('chartname', leftChartName);
        }
        if (rightChartName != undefined) {
            setChart(rightChartName, 'detail1-right-chart');
            $('#detail1-right-chart').data('chartname', rightChartName);
        }
    }
    //設定Detail2圖表
    function setDetail2(title, mainChartName, leftChartName, rightChartName) {
        if (title != undefined) {
            $('#block-detail-2').find('.block-header').find('.title').html(title);
        }
        if (mainChartName != undefined) {
            setChart(mainChartName, 'detail2-main-chart');
            $('#detail2-main-chart').data('chartname', mainChartName);
        }
        if (leftChartName != undefined) {
            setChart(leftChartName, 'detail2-left-chart');
            $('#detail2-left-chart').data('chartname', leftChartName);
        }
        if (rightChartName != undefined) {
            setChart(rightChartName, 'detail2-right-chart');
            $('#detail2-right-chart').data('chartname', rightChartName);
        }
    }
    //設定Detail3iframe
    function setDetail3(title, src) {
        $('#block-detail-3').find('.block-header').find('.title').html(title);
        $('#detail3-main-iframe').attr('src', src);
    }
})
