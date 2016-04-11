//TODO:參數增加data傳入
function setChart(ChartName, targetId, title, data1, data2) {

    var target = $('#' + targetId);
    // 大數據分析圖
    if (ChartName == "tippie") {
        target.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: title
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                colorByPoint: true,
                data: data1
            }],
            credits: {
                enabled: false
            }
        });
    }
    if (ChartName == "pie") {
        target.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: title
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                colorByPoint: true,
                data: data1
            }],
            credits: {
                enabled: false
            }
        });
    }
    // 肌力變化-公斤&百分比
    if (ChartName == "1rm") {
        target.highcharts({
            chart: {
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '訓練期間肌力變化圖'
            },
            subtitle: {
                text: '1RM為評估最大肌力的指標'
            },
            xAxis: [{
                categories: ['2/17', '2/24', '3/2', '3/9', '3/16', '3/23', '3/30', '4/6', '4/13', '4/20', '4/27', '5/4', '5/11', '5/18', '5/25'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: '成長百分比',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    align: 'high',
                    rotation: 0,
                    x: 50,
                    y: -20
                }
            }, { // Secondary yAxis
                title: {
                    text: '成長公斤數',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    },
                    align: 'high',
                    rotation: 0,
                    x: -50,
                    y: -20
                },
                labels: {
                    format: '{value} KG',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            series: [{
                name: '成長公斤數',
                type: 'column',
                yAxis: 1,
                data: [82, 85, 87, 91, 94, 97, 100, 106, 109, 112, 115, 117, 119, 121, 124],
                tooltip: {
                    valueSuffix: ' KG'
                }

            }, {
                name: '成長百分比',
                type: 'spline',
                data: [0, 3.6, 6.1, 11.0, 14.6, 18.3, 22.0, 29.3, 33.0, 36.6, 40.2, 42.7, 45.1, 47.6, 51.2],
                tooltip: {
                    valueSuffix: '%'
                }
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌力變化-公斤
    if (ChartName == "1rmKG") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌力變化-公斤',
                x: -20 //center
            },
            subtitle: {
                text: '1RM為評估最大肌力的指標'
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                categories: ['2/17', '2/19', '2/20', '2/22', '2/23', '2/25']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}KG'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'KG'
            },
            series: [{
                name: 'SELF',
                data: [82, 87, 94, 100, 106, 112]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌力變化-百分比
    if (ChartName == "1rmGrow") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌力變化-百分比',
                x: -20 //center
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                spline: {
                    pointInterval: 86400000, // one hour
                    pointStart: Date.UTC(2016, 1, 17)
                }
            },
            series: [{
                name: 'SELF',
                data: [0, 2, 3, 5, 8, 10, 12]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌力變化-訓練動作
    if (ChartName == "1rmWays") {
        target.highcharts({
            chart: {
                type: 'bar'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌力變化-訓練動作'
            },
            xAxis: {
                categories: ['啞鈴集中彎舉', '啞鈴斜板彎舉', '引體向上', '槓鈴站立彎舉'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: 'KG'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}KG'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'SELF',
                data: [21, 12, 6, 9]
            }]
        });
    }
    //肌耐力變化-公斤
    if (ChartName == "15rm") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌耐力變化-公斤',
                x: -20 //center
            },
            subtitle: {
                text: '15RM為評估肌耐力的指標'
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                categories: ['2/17', '2/19', '2/20', '2/22', '2/23', '2/25']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}KG'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'KG'
            },
            series: [{
                name: 'SELF',
                data: [54, 57, 60, 62, 64, 68]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌耐力變化-百分比
    if (ChartName == "15rmGrow") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌耐力變化-百分比',
                x: -20 //center
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                spline: {
                    pointInterval: 86400000, // one hour
                    pointStart: Date.UTC(2016, 1, 17)
                }
            },
            series: [{
                name: 'SELF',
                data: [0, 2, 3, 5, 6, 8, 9]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌耐力變化-訓練動作
    if (ChartName == "15rmWays") {
        target.highcharts({
            chart: {
                type: 'bar'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌耐力變化-訓練動作'
            },
            xAxis: {
                categories: ['啞鈴集中彎舉', '啞鈴斜板彎舉', '引體向上', '槓鈴站立彎舉'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: 'KG'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}KG'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'SELF',
                data: [14, 8, 5, 2]
            }]
        });
    }
    //體脂變化-原始百分比
    if (ChartName == "bodyfat") {
        var data = { "sex": "男", "age": 21 };
        var standard = [];
        var fat = { "fatEnd": 45 };
        //判斷體脂標準
        if (data.sex == "男") {
            if (data.age >= 18 && data.age <= 20) {
                standard = {};
            }
            if (data.age >= 21 && data.age <= 25) {
                standard = { "leanStart": 2.5, "leanEnd": 8.4, "idealStart": 8.4, "idealEnd": 15.4, "averageStart": 15.4, "averageEnd": 21.2, "aboveStart": 21.2, "aboveEnd": 25.8, };
            }
        }
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null,
                x: -20 //center
            },
            legend: {
                enabled: false,
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotBands: [{ // lean
                    from: standard.leanStart,
                    to: standard.leanEnd,
                    color: 'rgba(0,188,212,0.1)',
                    label: {
                        text: '過瘦',
                        style: {
                            color: '#fff'
                        }
                    }
                }, { // ideal
                    from: standard.idealStart,
                    to: standard.idealEnd,
                    color: 'rgba(76,175,80,0.1)',
                    label: {
                        text: '理想',
                        style: {
                            color: '#fff'
                        }
                    }
                }, { // average
                    from: standard.averageStart,
                    to: standard.averageEnd,
                    color: 'rgba(255,235,59,0.1)',
                    label: {
                        text: '標準',
                        style: {
                            color: '#fff'
                        }
                    }
                }, { // above
                    from: standard.aboveStart,
                    to: standard.aboveEnd,
                    color: 'rgba(255,193,7,0.1)',
                    label: {
                        text: '微胖',
                        style: {
                            color: '#fff'
                        }
                    }
                }, { // fat
                    from: standard.aboveEnd,
                    to: fat.fatEnd,
                    color: 'rgba(244,67,54,0.1)',
                    label: {
                        text: '過胖',
                        style: {
                            color: '#fff'
                        }
                    }
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                spline: {
                    pointInterval: 86400000, // one hour
                    pointStart: Date.UTC(2016, 1, 17)
                }
            },
            series: [{
                name: '體脂率',
                data: [29.8, 26.1, 23.4, 19.3, 16.9, 15.8, 14.6]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //體脂變化-變化百分比
    if (ChartName == "bodyfatGrow") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '體脂變化-變化百分比',
                x: -20 //center
            },
            legend: {
                borderWidth: 0,
                itemDistance: 50,
                margin: 24,
                itemStyle: {
                    "font-size": "14px"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                spline: {
                    pointInterval: 86400000, // one hour
                    pointStart: Date.UTC(2016, 1, 17)
                }
            },
            series: [{
                name: 'SELF',
                data: [0, 2, 3, 5, 6, 8, 10]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //體脂變化-訓練動作
    if (ChartName == "bodyfatWays") {
        target.highcharts({
            chart: {
                type: 'bar'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '訓練動作之體脂變化'
            },
            xAxis: {
                categories: ['啞鈴集中彎舉', '啞鈴斜板彎舉', '引體向上', '槓鈴站立彎舉'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}%'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '體脂變化率',
                data: [4, 2, 1, 0]
            }]
        });
    }
    //訓練動作相對成長
    if (ChartName == "growWays") {
        target.highcharts({
            chart: {
                type: 'bar'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '訓練動作之相對肌肉成長'
            },
            xAxis: {
                categories: ['啞鈴集中彎舉', '啞鈴斜板彎舉', '引體向上', '槓鈴站立彎舉'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}%'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '肌力',
                data: [51, 30, 12, 6]
            }, {
                name: '肌耐力',
                data: [45, 31, 15, 9]
            }]
        });
    }
    //訓練成效-肌肉疲勞
    if (ChartName == "fatigue") {
        target.highcharts({
            chart: {
                type: 'areaspline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌肉疲勞'
            },
            tooltip: {
                valueSuffix: '%'
            },
            xAxis: {
                categories: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8']
            },
            yAxis: {
                title: {
                    text: null
                },
                min: 0,
                max: 100,
                tickInterval: 20,
                labels: {
                    format: '{value}%'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                type: 'area',
                name: 'SELF',
                data: [0, 8, 12, 15, 21, 28, 32, 45, 54, 60, 68, 73, 80, 84, 86, 90, 92, 94, 95, 97, 98, 100, 100, 100]
            }],
            credits: {
                enabled: false
            }
        })
    }
    //訓練成效-出力百分比
    if (ChartName == "pmvc") {
        target.highcharts({
            chart: {
                tpye: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '肌肉出力百分比'
            },
            tooltip: {
                valueSuffix: '%'
            },
            xAxis: {
                categories: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8']
            },
            yAxis: {
                title: {
                    text: null
                },
                min: 0,
                max: 100,
                tickInterval: 20,
                labels: {
                    format: '{value}%'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                type: 'spline',
                name: 'SELF',
                data: [65, 72, 80, 80, 79, 82, 78, 81, 75, 73, 78, 82, 80, 84, 86, 78, 75, 72, 80, 71, 75, 71, 69, 68]
            }],
            credits: {
                enabled: false
            }
        })
    }
    //訓練成效-成效評估
    if (ChartName == "result") {
        //$('#'+targetId).html('<div class="progress-title"><p>本次訓練成效</p></div><div class="block-progress"><div class="progress progress-striped active"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 82%"><span class="pull-right">82%</span></div></div></div>')
        target.highcharts({
            chart: {
                type: 'bar'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '訓練成效之綜合指標'
            },
            xAxis: {
                categories: ['訓練完成度', '動作正確性', '預估肌肉成長'],
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}%'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'SELF',
                data: [85, 32, 3]
            }]
        });
    }
    //個人素質
    if (ChartName == "status") {
        target.highcharts({
            chart: {
                polar: true,
                type: 'line'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null,
                x: -80
            },
            pane: {
                size: '70%'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['肌群均衡', '肌力', '肌耐力', '訓練成效', '體脂率', '超負荷'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}%</b><br/>'
            },
            series: [{
                name: 'SELF',
                type: 'area',
                data: [15, 70, 42, 90, 72, 65],
                pointPlacement: 'on'
            }],
            credits: {
                enabled: false
            }
        });
    }
    //訓練成效
    if (ChartName == "training") {
        target.highcharts({
            chart: {
                type: 'column'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null,
                x: -20 //center
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['2/17', '2/19', '2/20', '2/22', '2/23', '2/25']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'SELF',
                data: [66, 82, 71, 60, 0, 84]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //肌肉成長
    if (ChartName == "grow") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null,
                x: -20 //center
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['2/17', '2/19', '2/20', '2/22', '2/23', '2/25']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'SELF',
                data: [23, 28, 32, 38, 42, 49]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //體脂縮圖
    if (ChartName == "bodyfatThumb") {
        target.highcharts({
            chart: {
                type: 'spline'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null,
                x: -20 //center
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['2/17', '2/19', '2/20', '2/22', '2/23', '2/25']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: '體脂率',
                data: [22.4, 21.9, 21.5, 21.1, 20.8, 20.6]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //落點分析縮圖
    if (ChartName == "dotThumb") {
        target.highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: null
                },
                labels: {
                    enabled: false
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    enabled: false
                }
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                name: '女性',
                color: 'rgba(223, 83, 83, .5)',
                data: [
                    [161.2, 51.6],
                    [167.5, 59.0],
                    [159.5, 49.2],
                    [157.0, 63.0],
                    [155.8, 53.6],
                    [170.0, 59.0],
                    [159.1, 47.6],
                    [166.0, 69.8],
                    [176.2, 66.8],
                    [160.2, 75.2],
                    [172.5, 55.2],
                    [170.9, 54.2],
                    [172.9, 62.5],
                    [153.4, 42.0],
                    [160.0, 50.0],
                    [147.2, 49.8],
                    [168.2, 49.2],
                    [175.0, 73.2],
                    [157.0, 47.8],
                    [167.6, 68.8],
                    [159.5, 50.6],
                    [175.0, 82.5],
                    [166.8, 57.2],
                    [176.5, 87.8],
                    [170.2, 72.8],
                    [174.0, 54.5],
                    [173.0, 59.8],
                    [179.9, 67.3],
                    [170.5, 67.8],
                    [160.0, 47.0],
                    [154.4, 46.2],
                    [162.0, 55.0],
                    [176.5, 83.0],
                    [160.0, 54.4],
                    [152.0, 45.8],
                    [162.1, 53.6],
                    [170.0, 73.2],
                    [160.2, 52.1],
                    [161.3, 67.9],
                    [166.4, 56.6],
                    [168.9, 62.3],
                    [163.8, 58.5],
                    [167.6, 54.5],
                    [160.0, 50.2],
                    [161.3, 60.3],
                    [167.6, 58.3],
                    [165.1, 56.2],
                    [160.0, 50.2],
                    [170.0, 72.9],
                    [157.5, 59.8],
                    [167.6, 61.0],
                    [160.7, 69.1],
                    [163.2, 55.9],
                    [152.4, 46.5],
                    [157.5, 54.3],
                    [168.3, 54.8],
                    [180.3, 60.7],
                    [165.5, 60.0],
                    [165.0, 62.0],
                    [164.5, 60.3],
                    [156.0, 52.7],
                    [160.0, 74.3],
                    [163.0, 62.0],
                    [165.7, 73.1],
                    [161.0, 80.0],
                    [162.0, 54.7],
                    [166.0, 53.2],
                    [174.0, 75.7],
                    [172.7, 61.1],
                    [167.6, 55.7],
                    [151.1, 48.7],
                    [164.5, 52.3],
                    [163.5, 50.0],
                    [152.0, 59.3],
                    [169.0, 62.5],
                    [164.0, 55.7],
                    [161.2, 54.8],
                    [155.0, 45.9],
                    [170.0, 70.6],
                    [176.2, 67.2],
                    [170.0, 69.4],
                    [162.5, 58.2],
                    [170.3, 64.8],
                    [164.1, 71.6],
                    [169.5, 52.8],
                    [163.2, 59.8],
                    [154.5, 49.0],
                    [159.8, 50.0],
                    [173.2, 69.2],
                    [170.0, 55.9],
                    [161.4, 63.4],
                    [169.0, 58.2],
                    [166.2, 58.6],
                    [159.4, 45.7],
                    [162.5, 52.2],
                    [159.0, 48.6],
                    [162.8, 57.8],
                    [159.0, 55.6],
                    [179.8, 66.8],
                    [162.9, 59.4],
                    [161.0, 53.6],
                    [151.1, 73.2],
                    [168.2, 53.4],
                    [168.9, 69.0],
                    [173.2, 58.4],
                    [171.8, 56.2],
                    [178.0, 70.6],
                    [164.3, 59.8],
                    [163.0, 72.0],
                    [168.5, 65.2],
                    [166.8, 56.6],
                    [172.7, 105.2],
                    [163.5, 51.8],
                    [169.4, 63.4],
                    [167.8, 59.0],
                    [159.5, 47.6],
                    [167.6, 63.0],
                    [161.2, 55.2],
                    [160.0, 45.0],
                    [163.2, 54.0],
                    [162.2, 50.2],
                    [161.3, 60.2],
                    [149.5, 44.8],
                    [157.5, 58.8],
                    [163.2, 56.4],
                    [172.7, 62.0],
                    [155.0, 49.2],
                    [156.5, 67.2],
                    [164.0, 53.8],
                    [160.9, 54.4],
                    [162.8, 58.0],
                    [167.0, 59.8],
                    [160.0, 54.8],
                    [160.0, 43.2],
                    [168.9, 60.5],
                    [158.2, 46.4],
                    [156.0, 64.4],
                    [160.0, 48.8],
                    [167.1, 62.2],
                    [158.0, 55.5],
                    [167.6, 57.8],
                    [156.0, 54.6],
                    [162.1, 59.2],
                    [173.4, 52.7],
                    [159.8, 53.2],
                    [170.5, 64.5],
                    [159.2, 51.8],
                    [157.5, 56.0],
                    [161.3, 63.6],
                    [162.6, 63.2],
                    [160.0, 59.5],
                    [168.9, 56.8],
                    [165.1, 64.1],
                    [162.6, 50.0],
                    [165.1, 72.3],
                    [166.4, 55.0],
                    [160.0, 55.9],
                    [152.4, 60.4],
                    [170.2, 69.1],
                    [162.6, 84.5],
                    [170.2, 55.9],
                    [158.8, 55.5],
                    [172.7, 69.5],
                    [167.6, 76.4],
                    [162.6, 61.4],
                    [167.6, 65.9],
                    [156.2, 58.6],
                    [175.2, 66.8],
                    [172.1, 56.6],
                    [162.6, 58.6],
                    [160.0, 55.9],
                    [165.1, 59.1],
                    [182.9, 81.8],
                    [166.4, 70.7],
                    [165.1, 56.8],
                    [177.8, 60.0],
                    [165.1, 58.2],
                    [175.3, 72.7],
                    [154.9, 54.1],
                    [158.8, 49.1],
                    [172.7, 75.9],
                    [168.9, 55.0],
                    [161.3, 57.3],
                    [167.6, 55.0],
                    [165.1, 65.5],
                    [175.3, 65.5],
                    [157.5, 48.6],
                    [163.8, 58.6],
                    [167.6, 63.6],
                    [165.1, 55.2],
                    [165.1, 62.7],
                    [168.9, 56.6],
                    [162.6, 53.9],
                    [164.5, 63.2],
                    [176.5, 73.6],
                    [168.9, 62.0],
                    [175.3, 63.6],
                    [159.4, 53.2],
                    [160.0, 53.4],
                    [170.2, 55.0],
                    [162.6, 70.5],
                    [167.6, 54.5],
                    [162.6, 54.5],
                    [160.7, 55.9],
                    [160.0, 59.0],
                    [157.5, 63.6],
                    [162.6, 54.5],
                    [152.4, 47.3],
                    [170.2, 67.7],
                    [165.1, 80.9],
                    [172.7, 70.5],
                    [165.1, 60.9],
                    [170.2, 63.6],
                    [170.2, 54.5],
                    [170.2, 59.1],
                    [161.3, 70.5],
                    [167.6, 52.7],
                    [167.6, 62.7],
                    [165.1, 86.3],
                    [162.6, 66.4],
                    [152.4, 67.3],
                    [168.9, 63.0],
                    [170.2, 73.6],
                    [175.2, 62.3],
                    [175.2, 57.7],
                    [160.0, 55.4],
                    [165.1, 104.1],
                    [174.0, 55.5],
                    [170.2, 77.3],
                    [160.0, 80.5],
                    [167.6, 64.5],
                    [167.6, 72.3],
                    [167.6, 61.4],
                    [154.9, 58.2],
                    [162.6, 81.8],
                    [175.3, 63.6],
                    [171.4, 53.4],
                    [157.5, 54.5],
                    [165.1, 53.6],
                    [160.0, 60.0],
                    [174.0, 73.6],
                    [162.6, 61.4],
                    [174.0, 55.5],
                    [162.6, 63.6],
                    [161.3, 60.9],
                    [156.2, 60.0],
                    [149.9, 46.8],
                    [169.5, 57.3],
                    [160.0, 64.1],
                    [175.3, 63.6],
                    [169.5, 67.3],
                    [160.0, 75.5],
                    [172.7, 68.2],
                    [162.6, 61.4],
                    [157.5, 76.8],
                    [176.5, 71.8],
                    [164.4, 55.5],
                    [160.7, 48.6],
                    [174.0, 66.4],
                    [163.8, 67.3]
                ]

            }, {
                name: '男性',
                color: 'rgba(119, 152, 191, .5)',
                data: [
                    [174.0, 65.6],
                    [175.3, 71.8],
                    [193.5, 80.7],
                    [186.5, 72.6],
                    [187.2, 78.8],
                    [181.5, 74.8],
                    [184.0, 86.4],
                    [184.5, 78.4],
                    [175.0, 62.0],
                    [184.0, 81.6],
                    [180.0, 76.6],
                    [177.8, 83.6],
                    [192.0, 90.0],
                    [176.0, 74.6],
                    [174.0, 71.0],
                    [184.0, 79.6],
                    [192.7, 93.8],
                    [171.5, 70.0],
                    [173.0, 72.4],
                    [176.0, 85.9],
                    [176.0, 78.8],
                    [180.5, 77.8],
                    [172.7, 66.2],
                    [176.0, 86.4],
                    [173.5, 81.8],
                    [178.0, 89.6],
                    [180.3, 82.8],
                    [180.3, 76.4],
                    [164.5, 63.2],
                    [173.0, 60.9],
                    [183.5, 74.8],
                    [175.5, 70.0],
                    [188.0, 72.4],
                    [189.2, 84.1],
                    [172.8, 69.1],
                    [170.0, 59.5],
                    [182.0, 67.2],
                    [170.0, 61.3],
                    [177.8, 68.6],
                    [184.2, 80.1],
                    [186.7, 87.8],
                    [171.4, 84.7],
                    [172.7, 73.4],
                    [175.3, 72.1],
                    [180.3, 82.6],
                    [182.9, 88.7],
                    [188.0, 84.1],
                    [177.2, 94.1],
                    [172.1, 74.9],
                    [167.0, 59.1],
                    [169.5, 75.6],
                    [174.0, 86.2],
                    [172.7, 75.3],
                    [182.2, 87.1],
                    [164.1, 55.2],
                    [163.0, 57.0],
                    [171.5, 61.4],
                    [184.2, 76.8],
                    [174.0, 86.8],
                    [174.0, 72.2],
                    [177.0, 71.6],
                    [186.0, 84.8],
                    [167.0, 68.2],
                    [171.8, 66.1],
                    [182.0, 72.0],
                    [167.0, 64.6],
                    [177.8, 74.8],
                    [164.5, 70.0],
                    [192.0, 101.6],
                    [175.5, 63.2],
                    [171.2, 79.1],
                    [181.6, 78.9],
                    [167.4, 67.7],
                    [181.1, 66.0],
                    [177.0, 68.2],
                    [174.5, 63.9],
                    [177.5, 72.0],
                    [170.5, 56.8],
                    [182.4, 74.5],
                    [197.1, 90.9],
                    [180.1, 93.0],
                    [175.5, 80.9],
                    [180.6, 72.7],
                    [184.4, 68.0],
                    [175.5, 70.9],
                    [180.6, 72.5],
                    [177.0, 72.5],
                    [177.1, 83.4],
                    [181.6, 75.5],
                    [176.5, 73.0],
                    [175.0, 70.2],
                    [174.0, 73.4],
                    [165.1, 70.5],
                    [177.0, 68.9],
                    [192.0, 102.3],
                    [176.5, 68.4],
                    [169.4, 65.9],
                    [182.1, 75.7],
                    [179.8, 84.5],
                    [175.3, 87.7],
                    [184.9, 86.4],
                    [177.3, 73.2],
                    [167.4, 53.9],
                    [178.1, 72.0],
                    [168.9, 55.5],
                    [157.2, 58.4],
                    [180.3, 83.2],
                    [170.2, 72.7],
                    [177.8, 64.1],
                    [172.7, 72.3],
                    [165.1, 65.0],
                    [186.7, 86.4],
                    [165.1, 65.0],
                    [174.0, 88.6],
                    [175.3, 84.1],
                    [185.4, 66.8],
                    [177.8, 75.5],
                    [180.3, 93.2],
                    [180.3, 82.7],
                    [177.8, 58.0],
                    [177.8, 79.5],
                    [177.8, 78.6],
                    [177.8, 71.8],
                    [177.8, 116.4],
                    [163.8, 72.2],
                    [188.0, 83.6],
                    [198.1, 85.5],
                    [175.3, 90.9],
                    [166.4, 85.9],
                    [190.5, 89.1],
                    [166.4, 75.0],
                    [177.8, 77.7],
                    [179.7, 86.4],
                    [172.7, 90.9],
                    [190.5, 73.6],
                    [185.4, 76.4],
                    [168.9, 69.1],
                    [167.6, 84.5],
                    [175.3, 64.5],
                    [170.2, 69.1],
                    [190.5, 108.6],
                    [177.8, 86.4],
                    [190.5, 80.9],
                    [177.8, 87.7],
                    [184.2, 94.5],
                    [176.5, 80.2],
                    [177.8, 72.0],
                    [180.3, 71.4],
                    [171.4, 72.7],
                    [172.7, 84.1],
                    [172.7, 76.8],
                    [177.8, 63.6],
                    [177.8, 80.9],
                    [182.9, 80.9],
                    [170.2, 85.5],
                    [167.6, 68.6],
                    [175.3, 67.7],
                    [165.1, 66.4],
                    [185.4, 102.3],
                    [181.6, 70.5],
                    [172.7, 95.9],
                    [190.5, 84.1],
                    [179.1, 87.3],
                    [175.3, 71.8],
                    [170.2, 65.9],
                    [193.0, 95.9],
                    [171.4, 91.4],
                    [177.8, 81.8],
                    [177.8, 96.8],
                    [167.6, 69.1],
                    [167.6, 82.7],
                    [180.3, 75.5],
                    [182.9, 79.5],
                    [176.5, 73.6],
                    [186.7, 91.8],
                    [188.0, 84.1],
                    [188.0, 85.9],
                    [177.8, 81.8],
                    [174.0, 82.5],
                    [177.8, 80.5],
                    [171.4, 70.0],
                    [185.4, 81.8],
                    [185.4, 84.1],
                    [188.0, 90.5],
                    [188.0, 91.4],
                    [182.9, 89.1],
                    [176.5, 85.0],
                    [175.3, 69.1],
                    [175.3, 73.6],
                    [188.0, 80.5],
                    [188.0, 82.7],
                    [175.3, 86.4],
                    [170.5, 67.7],
                    [179.1, 92.7],
                    [177.8, 93.6],
                    [175.3, 70.9],
                    [182.9, 75.0],
                    [170.8, 93.2],
                    [188.0, 93.2],
                    [180.3, 77.7],
                    [177.8, 61.4],
                    [185.4, 94.1],
                    [168.9, 75.0],
                    [185.4, 83.6],
                    [180.3, 85.5],
                    [174.0, 73.9],
                    [167.6, 66.8],
                    [182.9, 87.3],
                    [160.0, 72.3],
                    [180.3, 88.6],
                    [167.6, 75.5],
                    [186.7, 101.4],
                    [175.3, 91.1],
                    [175.3, 67.3],
                    [175.9, 77.7],
                    [175.3, 81.8],
                    [179.1, 75.5],
                    [181.6, 84.5],
                    [177.8, 76.6],
                    [182.9, 85.0],
                    [177.8, 102.5],
                    [184.2, 77.3],
                    [179.1, 71.8],
                    [176.5, 87.9],
                    [188.0, 94.3],
                    [174.0, 70.9],
                    [167.6, 64.5],
                    [170.2, 77.3],
                    [167.6, 72.3],
                    [188.0, 87.3],
                    [174.0, 80.0],
                    [176.5, 82.3],
                    [180.3, 73.6],
                    [167.6, 74.1],
                    [188.0, 85.9],
                    [180.3, 73.2],
                    [167.6, 76.3],
                    [183.0, 65.9],
                    [183.0, 90.9],
                    [179.1, 89.1],
                    [170.2, 62.3],
                    [177.8, 82.7],
                    [179.1, 79.1],
                    [190.5, 98.2],
                    [177.8, 84.1],
                    [180.3, 83.2],
                    [180.3, 83.2]
                ]
            }],
            credits: {
                enabled: false
            }
        });
    }
    //訓練成效縮圖
    if (ChartName == "resultThumb") {
        var data = [
            [25],
            [72],
            [64],
            [50],
            [12],
            [45],
            [55]
        ]
        target.highcharts({
            chart: {
                type: 'area',
                events: {
                    load: function() {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = parseInt(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 500);
                    }
                }
            },
            exporting: {
                enabled: false
            },
            title: {
                text: null
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    enabled: null
                }
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 500,
                            y: parseInt(Math.random() * 100)
                        });
                    }
                    return data;
                }())
            }],
            credits: {
                enabled: false
            }
        });
    }
}
