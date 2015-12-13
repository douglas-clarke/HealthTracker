
  $(function () {
    // # Place all the behaviors and hooks related to the matching controller here.
    // # All this logic will automatically be available in application.js.
    // # You can use CoffeeScript in this file: http://coffeescript.org/
    //

    new Highcharts.Chart({
        chart: {
          renderTo: "container",
          type: 'bar'
        },
        title: {
            text: 'Excercise over time'
        },
        xAxis: {

            categories: gon.activity_dates,
            max: 6,
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            opposite: true,
            tickInterval: 1,
            max: gon.max_distance,
            title: {
                text: 'Miles'
            }
        },
        legend: {
            reversed: true
        },

        plotOptions: {
            series: {
                stacking: 'normal',
            }
        },

        scrollbar: {
            enabled: true
        },

        series: gon.series
    });
});
