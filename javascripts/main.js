//TODO:chart改為attribute
$(function() {
    console.log(Date.UTC(2016,1,23)-Date.UTC(2016,1,22));
    var chartTitle = '';
    var mainChartName = '';
    var leftChartName = '';
    var rightChartName = '';
    var prevType = 'main';
    //點擊首頁方塊顯示詳細方塊
    $('.block-inner').on('mouseenter',function(){
        $('.block-inner').not(this).addClass('opacity');
    })
    $('.block-inner').on('mouseleave',function(){
        $('.opacity').removeClass('opacity');
    })
    $('.block-header,.block-body').click(function(e) {
            //停止氣泡
            e.stopPropagation();
            //取得資料
            var clickBlock = $(this).parent('div');
            var clickId = clickBlock.attr('id');
            chartTitle = clickBlock.data('charttitle');
            mainChartName = clickBlock.data('mainchartname');
            leftChartName = clickBlock.data('leftchartname');
            rightChartName = clickBlock.data('rightchartname');
            //過濾詳細方塊
            if (clickId != 'block-detail') {
                //過濾2號方塊
                if (!clickBlock.hasClass('block-inner-2')) {
                    //移動方塊
                    if (!$('.block-inner').hasClass('ontop')) {
                        $('.block-inner').addClass('gotop');
                        $('#block-detail').addClass('active');
                    }
                }
                //是否顯示操作項
                if(mainChartName!=undefined){
                    $('.chartTabs').show();
                }
                else{
                    $('.chartTabs').hide();
                }
                //加入標題與圖表
                setDetailCharts(chartTitle, mainChartName, leftChartName, rightChartName)
            }
        })
        //動畫結束後加上ontop判斷 避免動畫重複觸發
    $('#block-detail').on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {
            $('.block-inner').addClass('ontop');
            if (!$('.ontop').hasClass('gotop')) {
                $('.ontop').removeClass('ontop');
            }
        })
        //點擊詳細方塊外圍回首頁
    $('html,body,.back').on('click', function(e) {
            if ($('.block-inner').hasClass('ontop')) {
                //停止氣泡
                e.stopPropagation();
                //移動方塊
                $('#block-detail').removeClass('active');
                $('.block-inner').removeClass('gotop');
                //清除標題與圖表
                $('#block-detail').find('.title').html('');
                $('#block-detail-chart').highcharts().destroy();
                $('#block-subChart-left').highcharts().destroy();
                $('#block-subChart-right').highcharts().destroy();
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
    //個人素質
    setChart('status', 'block-chart-status');
    //縮圖
    setChart('bodyfatThumb', 'block-bodyfatThumb');
    setChart('1rmThumb', 'block-1rmThumb');
    setChart('15rmThumb', 'block-15rmThumb');
    setChart('dotThumb', 'block-dotThumb');
    setChart('resultThumb', 'block-resultThumb');
    //詳細方塊圖表切換
    $('.btn-type').on('click', function() {
        var type = $(this).data('type')
        //移動圖表方塊
        if (type == 'main') {
            $('#block-detail-chart').addClass('active');
            $('#block-subChart-left').removeClass('active');
        }
        if (type == 'sub') {
            $('#block-subChart-left').addClass('active');
            $('#block-detail-chart').removeClass('active');
        }
        //改變圖表長寬
        if (type != prevType) {
            $('#block-detail-chart').highcharts()
                .setSize($('#block-subChart-left').width(), $('#block-detail-chart').height());
            $('#block-subChart-left').highcharts()
                .setSize($('#block-detail-chart').width(), $('#block-subChart-left').height());
        }
        prevType = type;
    })
    //防止有白目把它玩壞
    $('#block-detail-chart').on('transitionend oTransitionEnd webkitTransitionEnd', function() {
            $('#block-detail-chart').highcharts()
                .setSize($('#block-detail-chart').width(), $('#block-detail-chart').height());
            $('#block-subChart-left').highcharts()
                .setSize($('#block-subChart-left').width(), $('#block-subChart-left').height());
        })
        //設定圖表
    function setDetailCharts(chartTitle, mainChartName, leftChartName, rightChartName) {
        if (chartTitle != undefined) {
            $('#block-detail').find('.block-header').find('.title').html(chartTitle);
        }
        if (mainChartName != undefined) {
            setChart(mainChartName, 'block-detail-chart');
        }
        if (leftChartName != undefined) {
            setChart(leftChartName, 'block-subChart-left');
        }
        if (rightChartName != undefined) {
            setChart(rightChartName, 'block-subChart-right');
        }
    }
})
