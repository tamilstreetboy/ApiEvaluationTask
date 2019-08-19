$(document).ready(function () {
    $('.home-link').show();
    var base_url = window.location.origin;
    $.ajax({
        url: base_url + "/Home/GetClientSecret",
        type: 'GET',
        success: function (response) {
            $.ajax({
                url: newsurl,
                type: 'GET',
                dataType: 'json',
                headers: {
                    'consumer-key': response.ClientCode,
                    'consumer-secret': response.ClientSecret
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
                                $("#news").append("<li><hr/><div class='media'><a class='pull-left' href = '#'><img class='media-object item' src=" + result.payload[i].image + "></a><div class='media- body'><h4 class='media-heading'>" + result.payload[i].title + "</h4><p>" + result.payload[i].description + "</p><span><i class='glyphicon glyphicon-calendar'></i> " + result.payload[i].date + "</span></div></li>");
                            }
                        }
                        $('#news').paginate();
                    }
                },
                error: function (error) {
                    alert("Error occured while getting a response");
                }

            });

        },
        error: function () {
            alert("Error occured while getting a response");
        }
    });

});