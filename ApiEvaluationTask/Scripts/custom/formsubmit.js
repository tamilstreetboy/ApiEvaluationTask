
$(document).ready(function () {
    $('.home-link').show();
    $("#addForm").validate({
        rules: {
            eid: {
                required: true,
            },
            name: {
                required: true,
            },
            idbarahno: {
                required: true,
            },
            unifiednumber: {
                required: true,
            },
            mobile: {
                required: true,
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        messages: {
            eid: {
                required: "This field is required",
            },
            name: {
                required: "This field is required",
            },
            idbarahno: {
                required: "This field is required",
            },


            unifiednumber: {
                required: "This field is required",
            },
            mobile: {
                required: "This field is required",
            },

        },
        submitHandler: function (form) {
            var base_url = window.location.origin;
            $.ajax({
                url: base_url + "/Home/GetClientSecret",
                type: 'GET',
                success: function (response) {
                    $.ajax({
                        url: formurl,
                        type: 'POST',
                        dataType: 'json',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'consumer-key': response.ClientCode,
                            'consumer-secret': response.ClientSecret
                        },
                        contentType: 'application/json; charset=utf-8',
                        data: {
                            "eid": $('#eid').val(),
                            "name": $('#name').val(),
                            "idbarahno": $('#idbarahno').val(),
                            "emailaddress": $('#email').val(),
                            "unifiednumber": $('#unifiednumber').val(),
                            "mobileno": $('#mobileno').val()
                        },
                        success: function (result) {
                            if (result.success == true) {
                                $('#responseMessage').text('Form has been updated successfully');
                                $('#successModal').modal('show');
                                $("#addForm")[0].reset();

                            }
                            else {
                                var parts = result.message.split('.');
                                var answer = parts[parts.length - 1];

                                $('#responseMessage').text(answer);

                                $('#successModal').modal('show');
                            }

                        },
                        error: function (error) {
                            $('#responseMessage').text(error);
                            $('#successModal').modal('show');
                        }

                    });
                },
                error: function () {
                    alert("Error occured while getting a response");
                }
            });


            return false; // required to block normal submit since you used ajax
        }
    });




});