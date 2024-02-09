// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateTotal').click(function () {
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourlyRate').val());

        if (isNaN(hours) || hours <= 0) {
            $('.error').text('Please enter a valid number of hours.');
            $('#total').text('');
        } else {
            $('.error').text('');
            var total = hours * hourlyRate;
            $('#total').text('$' + total.toFixed(2));
        }
    });
});
