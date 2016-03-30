$(function() {
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
    setChart('training', 'container');
    $('#button').click(function() {
        var chart = $('#container').highcharts(),
            svg = chart.getSVG();
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
    })
});
