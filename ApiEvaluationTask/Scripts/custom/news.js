$(document).ready(function () {
    $.ajax({
        url: "https://api.qa.mrhe.gov.ae/mrhecloud/v1.4/api//public/v1/news?local=en",
        async: true,
        type: 'GET',
        dataType: 'json',
        headers: {
            'consumer-key': 'mobile_dev',
            'consumer-secret': '20891a1b4504ddc33d42501f9c8d2215fbe85008'
        },
        contentType: 'application/json; charset=utf-8',
        beforeSend: function () {
            $("#loading-image").show();
        },
        success: function (result) {
            if (result !== null) {
                $("#loading-image").hide();
                if (result.payload.length > 0) {
                    for (var i = 0; i < result.payload.length; i++) {
                        $("#news").append("<hr/><div class='media'><a class='pull-left' href = '#'><img class='media-object item' src=" + result.payload[i].image + "></a><div class='media- body'><h4 class='media-heading'>" + result.payload[i].title + "</h4><p>" + result.payload[i].description + "</p><span><i class='glyphicon glyphicon-calendar'></i> " + result.payload[i].date + "</span></div>");
                    }
                }
            }
        },
        error: function (error) {
            alert("Error occured while getting a response");
        }

    });

});