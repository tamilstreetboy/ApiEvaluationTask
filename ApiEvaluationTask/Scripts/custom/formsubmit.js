
$(document).ready(function () {
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

            $.ajax({
                url: "https://api.qa.mrhe.gov.ae/mrhecloud/v1.4/api/iskan/v1/certificates/towhomitmayconcern",
                type: 'POST',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'consumer-key': 'mobile_dev',
                    'consumer-secret': '20891a1b4504ddc33d42501f9c8d2215fbe85008'
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
                        $('#responseMessage').text('Form has been updated successfully')
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
                    $('#responseMessage').text(error)
                    $('#successModal').modal('show');
                }

            });
            return false; // required to block normal submit since you used ajax
        }
    });




});