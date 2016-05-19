//TODO:參數增加data傳入
function setChart(targetId, chartOption) {
    var target = $('#' + targetId);
    target.highcharts(chartOption);
}

function getChartOption(ChartName, title, data1, data2) {
    var chartOption = {};
    if (ChartName == "Heart") {
        chartOption = {
            chart: { type: 'column' },
            title: { text: 'HeartDisease Column Chart' },
            exporting: { enabled: false },
            xAxis: {
                categories: ['Presence Female', 'Absence Female', 'Presence Male', 'Absence Male'],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: { text: 'average' }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            credits: { enabled: false },
            series: [{
                name: 'age',
                data: [59.35, 54.58, 56.04, 51.19]

            }, {
                name: 'chest pain type',
                data: [3.85, 2.91, 3.57, 2.75]

            }, {
                name: 'maximum heart rate',
                data: [143.5, 154.84, 137.93, 161.16]
            }, {
                name: 'exercise induced angina',
                data: [0.5, 0.12, 0.56, 0.18]
            }, {
                name: 'ca',
                data: [1.35, 0.31, 1.11, 0.27]
            }, {
                name: 'thal',
                data: [5.2, 3.12, 6, 4.33]
            }]
        };
    }
    // 大數據分析圖
    if (ChartName == "tippie") {
        chartOption = {
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
        };
    }
    if (ChartName == "pie") {
        chartOption = {
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
        };
    }
    // 肌力變化-公斤&百分比
    if (ChartName == "1rm") {
        chartOption = {
            chart: {
                zoomType: 'xy',
                spacing: [10, 0, 0, 0]
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
                    enabled: false,
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
                    enabled: false,
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
                data: [10, 12, 13, 14, 16, 18, 19, 21, 23, 26, 27, 29, 30, 31, 33],
                tooltip: {
                    valueSuffix: ' KG'
                }

            }, {
                name: '成長百分比',
                type: 'spline',
                data: [0, 20.0, 30.0, 40.0, 60.0, 80.0, 90.0, 110.0, 130.0, 160.0, 170.0, 190.0, 200.0, 210.0, 230.0],
                tooltip: {
                    valueSuffix: '%'
                }
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌力變化-公斤
    if (ChartName == "1rmKG") {
        chartOption = {
            chart: {
                type: 'spline'
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
                name: '肌力',
                data: [82, 87, 94, 100, 106, 112]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌力變化-百分比
    if (ChartName == "1rmGrow") {
        chartOption = {
            chart: {
                type: 'spline'
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
                name: '肌力',
                data: [0, 2, 3, 5, 8, 10, 12]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌力變化-訓練動作
    if (ChartName == "1rmWays") {
        chartOption = {
            chart: {
                type: 'bar'
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
                name: '肌力',
                data: [21, 12, 6, 9]
            }]
        };
    }
    //肌耐力變化-公斤&百分比
    if (ChartName == "15rm") {
        chartOption = {
            chart: {
                zoomType: 'xy',
                spacing: [10, 0, 0, 0]
            },
            title: {
                text: '訓練期間肌耐力變化圖'
            },
            subtitle: {
                text: '15RM為評估肌耐力的指標'
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
                    enabled: false,
                    text: '成長百分比',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    align: 'high',
                    rotation: 0,
                    x: 50,
                    y: -20,
                    offset: 50
                }
            }, { // Secondary yAxis
                title: {
                    enabled: false,
                    text: '成長公斤數',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    },
                    align: 'high',
                    rotation: 0,
                    x: -50,
                    y: -20,
                    offset: 50
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
                data: [3, 5, 7, 8, 10, 12, 13, 15, 16, 18, 19, 20, 21, 23, 25],
                tooltip: {
                    valueSuffix: ' KG'
                }

            }, {
                name: '成長百分比',
                type: 'spline',
                data: [0, 66.6, 133.3, 166.6, 233.3, 300.0, 333.3, 400.0, 433.3, 500.0, 533.3, 566.6, 600.0, 633.3, 733.3],
                tooltip: {
                    valueSuffix: '%'
                }
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌耐力變化-百分比
    if (ChartName == "15rmGrow") {
        chartOption = {
            chart: {
                type: 'spline'
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
                name: '肌耐力',
                data: [0, 2, 3, 5, 6, 8, 9]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌耐力變化-訓練動作
    if (ChartName == "15rmWays") {
        chartOption = {
            chart: {
                type: 'bar'
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
                name: '肌耐力',
                data: [14, 8, 5, 2]
            }]
        };
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
        chartOption = {
            chart: {
                type: 'spline'
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
        };
    }
    //體脂變化-變化百分比
    if (ChartName == "bodyfatGrow") {
        chartOption = {
            chart: {
                type: 'spline'
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
                name: '體脂率',
                data: [0, 2, 3, 5, 6, 8, 10]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //體脂變化-訓練動作
    if (ChartName == "bodyfatWays") {
        chartOption = {
            chart: {
                type: 'bar'
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
        };
    }
    //訓練姿勢相對成長
    if (ChartName == "growPart") {
        chartOption = {
            chart: {
                type: 'bar'
            },
            title: {
                text: '肌肉部位之相對肌肉成長'
            },
            xAxis: {
                categories: ['肱二頭肌', '肱三頭肌', '胸肌', '腹肌', '背肌', '肩膀', '腿部'],
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
                    },
                series:{
                        pointPadding:0.15
                    }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '肌力',
                data: [31, 25, 15, 6, 11, 4, 8]
            }, {
                name: '肌耐力',
                data: [41, 24, 10, 6, 9, 3, 7]
            }]
        };
    }
    //訓練成效-肌肉疲勞
    if (ChartName == "fatigue") {
        chartOption = {
            chart: {
                type: 'areaspline'
            },
            colors: ['#FF9A00'],
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
                name: '肌肉疲勞',
                data: [0, 8, 12, 15, 21, 28, 32, 45, 54, 60, 68, 73, 80, 84, 86, 90, 92, 94, 95, 97, 98, 100, 100, 100]
            }],
            credits: {
                enabled: false
            }
        }
    }
    //訓練成效-出力百分比
    if (ChartName == "pmvc") {
        chartOption = {
            chart: {
                tpye: 'spline'
            },
            colors: ['#FF9A00', '#249400'],
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
                enabled: true
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
                name: '向心',
                data: [65, 72, 80, 80, 79, 82, 78, 81, 75, 73, 78, 82, 80, 84, 86, 78, 75, 72, 80, 71, 75, 71, 69, 68]
            }, {
                type: 'spline',
                name: '離心',
                data: [45, 68, 72, 68, 81, 74, 81, 73, 62, 68, 81, 75, 68, 74, 88, 81, 65, 84, 77, 75, 67, 74, 80, 75]
            }],
            credits: {
                enabled: false
            }
        }
    }
    if (ChartName == "result") {
        //$('#'+targetId).html('<div class="progress-title"><p>本次訓練成效</p></div><div class="block-progress"><div class="progress progress-striped active"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 82%"><span class="pull-right">82%</span></div></div></div>')
        chartOption = {
            chart: {
                type: 'bar'
            },
            colors: ['#FF9A00', '#249400'],
            title: {
                text: '訓練姿勢之訓練成效'
            },
            xAxis: {
                categories: ['伏地挺身', '啞鈴單手後屈伸', '啞鈴跨步蹲舉', '立姿側平舉', '仰臥腿上舉', 'V型仰臥起坐'],
                title: {
                    text: null
                }
            },
            legend: {
                enabled: true
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
                name: '肌肉疲勞',
                data: [72, 62, 85, 92, 68, 79]
            }, {
                name: '肌肉出力',
                data: [90, 82, 87, 90, 85, 78]
            }]
        };
    }
    //個人素質
    if (ChartName == "status") {
        chartOption = {
            chart: {
                polar: true,
                type: 'line'
            },
            colors: ['#f45b5b'],
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
                categories: ['肌群均衡', '肌力', '肌耐力', '訓練成效', '體脂率'],
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
                pointFormat: '<span style="color:{series.color}"><b>{point.y}%</b><br/>'
            },
            series: [{
                name: 'SELF',
                type: 'area',
                data: [15, 70, 42, 90, 72],
                pointPlacement: 'on'
            }],
            credits: {
                enabled: false
            }
        };
    }
    //訓練成效
    if (ChartName == "training") {
        chartOption = {
            chart: {
                type: 'column'
            },
            colors: ['#FF9A00'],
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
                name: '訓練成效',
                data: [66, 82, 71, 60, 0, 84]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //肌肉成長
    if (ChartName == "grow") {
        chartOption = {
            chart: {
                type: 'spline'
            },
            colors: ['#FF9A00'],
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
                name: '肌肉成長',
                data: [23, 28, 32, 38, 42, 49]
            }],
            credits: {
                enabled: false
            }
        };
    }
    //體脂縮圖
    if (ChartName == "bodyfatThumb") {
        chartOption = {
            chart: {
                type: 'spline'
            },
            colors: ['#f45b5b'],
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
        };
    }
    //落點分析縮圖
    if (ChartName == "dotThumb") {
        chartOption = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Dependent Variable Scatter'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'bottom',
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1,
                y: -50,
                x: 50
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Maximum Heart Rate'
                },
                labels: {
                    enabled: true
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Age'
                },
                labels: {
                    enabled: true
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
                name: 'Absence Female',
                color: 'rgba(223, 83, 83, .5)',
                data: [
                    [160, 67],
                    [121, 74],
                    [159, 57],
                    [125, 71],
                    [159, 54],
                    [139, 48],
                    [152, 46],
                    [157, 51],
                    [130, 71],
                    [170, 37],
                    [163, 62],
                    [157, 65],
                    [179, 63],
                    [175, 45],
                    [168, 41],
                    [96, 60],
                    [171, 60],
                    [149, 44],
                    [163, 57],
                    [116, 76],
                    [142, 67],
                    [179, 39],
                    [173, 42],
                    [163, 41],
                    [133, 64],
                    [162, 50],
                    [175, 44],
                    [163, 49],
                    [138, 45],
                    [170, 54],
                    [162, 49],
                    [114, 66],
                    [151, 65],
                    [163, 54],
                    [169, 52],
                    [160, 46],
                    [172, 67],
                    [192, 34],
                    [172, 41],
                    [158, 50],
                    [167, 54],
                    [122, 64],
                    [149, 51],
                    [172, 46],
                    [154, 64],
                    [159, 50],
                    [152, 45],
                    [115, 68],
                    [122, 42],
                    [157, 62],
                    [161, 55],
                    [122, 58],
                    [158, 54],
                    [151, 69],
                    [160, 60],
                    [165, 43],
                    [172, 41],
                    [172, 63],
                    [182, 35],
                    [162, 58],
                    [160, 53],
                    [143, 53],
                    [142, 51],
                    [148, 65],
                    [162, 71],
                    [172, 58],
                    [153, 56],
                ]

            }, {
                name: 'Presence Female',
                color: 'rgba(119, 152, 191, .5)',
                data: [
                    [154, 63],
                    [114, 65],
                    [143, 59],
                    [142, 51],
                    [152, 58],
                    [169, 61],
                    [157, 60],
                    [117, 55],
                    [161, 60],
                    [133, 56],
                    [169, 63],
                    [165, 66],
                    [154, 62],
                    [106, 62],
                    [150, 56],
                    [97, 62],
                    [136, 43],
                    [146, 61],
                    [145, 62],
                    [160, 62]
                ]
            }, {
                name: 'Absence Male',
                color: 'rgba(200,79,79,0.5)',
                data: [
                    [105, 64],
                    [140, 65],
                    [161, 59],
                    [111, 53],
                    [180, 44],
                    [144, 64],
                    [178, 40],
                    [180, 48],
                    [181, 43],
                    [143, 47],
                    [138, 66],
                    [150, 42],
                    [186, 48],
                    [179, 44],
                    [156, 46],
                    [165, 58],
                    [184, 52],
                    [173, 57],
                    [169, 44],
                    [150, 63],
                    [186, 51],
                    [143, 70],
                    [148, 45],
                    [178, 56],
                    [168, 41],
                    [126, 57],
                    [178, 42],
                    [140, 62],
                    [145, 59],
                    [164, 59],
                    [151, 66],
                    [143, 51],
                    [153, 41],
                    [162, 42],
                    [152, 54],
                    [158, 52],
                    [178, 42],
                    [165, 54],
                    [168, 57],
                    [182, 59],
                    [125, 51],
                    [179, 41],
                    [170, 45],
                    [162, 56],
                    [155, 55],
                    [161, 43],
                    [152, 53],
                    [131, 69],
                    [174, 34],
                    [163, 50],
                    [194, 42],
                    [173, 53],
                    [162, 43],
                    [147, 52],
                    [160, 54],
                    [156, 54],
                    [175, 48],
                    [151, 68],
                    [178, 52],
                    [154, 58],
                    [187, 37],
                    [166, 51],
                    [202, 29],
                    [154, 51],
                    [147, 54],
                    [170, 44],
                    [174, 57],
                    [132, 41],
                    [190, 52],
                    [185, 45],
                    [146, 62],
                    [156, 47],
                    [172, 52],
                    [182, 39],
                    [188, 44],
                    [123, 51],
                    [157, 59],
                    [137, 61],
                    [171, 43],
                    [171, 49],
                    [162, 52],
                    [173, 44],
                    [148, 57]
                ]
            }, {
                name: 'Presence Male',
                color: 'rgba(100,133,182,0.5)',
                data: [
                    [109, 70],
                    [141, 57],
                    [142, 56],
                    [142, 59],
                    [170, 60],
                    [145, 61],
                    [120, 46],
                    [155, 53],
                    [129, 67],
                    [165, 58],
                    [150, 57],
                    [140, 59],
                    [126, 50],
                    [150, 48],
                    [138, 61],
                    [125, 59],
                    [181, 40],
                    [134, 59],
                    [126, 49],
                    [177, 44],
                    [120, 66],
                    [125, 42],
                    [125, 61],
                    [103, 62],
                    [112, 57],
                    [152, 47],
                    [140, 61],
                    [147, 45],
                    [105, 58],
                    [130, 35],
                    [111, 58],
                    [128, 50],
                    [109, 54],
                    [108, 54],
                    [168, 52],
                    [118, 47],
                    [156, 58],
                    [
                        71, 67
                    ],
                    [124, 57],
                    [147, 63],
                    [166, 48],
                    [162, 59],
                    [144, 46],
                    [103, 56],
                    [139, 49],
                    [116, 54],
                    [
                        88, 57
                    ],
                    [
                        99, 62
                    ],
                    [160, 60],
                    [132, 66],
                    [
                        96, 64
                    ],
                    [144, 56],
                    [132, 64],
                    [163, 50],
                    [195, 54],
                    [
                        95, 53
                    ],
                    [160, 52],
                    [114, 40],
                    [173, 58],
                    [111, 55],
                    [182, 38],
                    [130, 58],
                    [174, 65],
                    [146, 69],
                    [125, 67],
                    [122, 51],
                    [147, 46],
                    [163, 67],
                    [158, 41],
                    [105, 56],
                    [112, 70],
                    [125, 70],
                    [156, 35],
                    [162, 77],
                    [171, 58],
                    [141, 60],
                    [173, 51],
                    [145, 55],
                    [131, 64],
                    [159, 59],
                    [131, 58],
                    [126, 54],
                    [127, 65],
                    [132, 63],
                    [140, 39],
                    [161, 52],
                    [120, 43],
                    [150, 68],
                    [144, 60],
                    [158, 65],
                    [155, 60],
                    [142, 60],
                    [113, 54],
                    [153, 44],
                    [132, 55],
                    [158, 64],
                    [132, 60],
                    [160, 58],
                    [168, 48],
                    [108, 67]
                ]
            }],
            credits: {
                enabled: false
            }
        };
    }
    return chartOption;
}
