$(document).ready(function () {
    // Greeting the user
    $('#login-button').click(function () {
        let username = $('#username').val();
        if (username) {
            $('#user-name').text(username);
            $('#greeting').show();
        }
    });

    // Displaying an error message for incorrect login
    $('#login-attempt-button').click(function () {
        let userId = $('#user-id').val();
        let password = $('#password').val();

        if (userId !== 'correctUserId' || password !== 'correctPassword') {
            $('#error-message').show();
            $('#user-id').val('');
            $('#password').val('');
        }
    });

    // Displaying different form fields based on ticket type
    $('#ticket-type').change(function () {
        var selectedType = $(this).val();
        $('#computer-fields, #software-fields, #network-fields').hide();

        if (selectedType === 'computer') {
            $('#computer-fields').show();
        } else if (selectedType === 'software') {
            $('#software-fields').show();
        } else if (selectedType === 'network') {
            $('#network-fields').show();
        }
    });

    // Dynamically updating ticket status
    $('#ticket-status').change(function () {
        var status = $(this).val();
        var statusText = $('#status-text');

        statusText.removeClass('status-open status-in-progress status-closed');

        if (status === 'open') {
            statusText.addClass('status-open').text('Open');
        } else if (status === 'in-progress') {
            statusText.addClass('status-in-progress').text('In Progress');
        } else if (status === 'closed') {
            statusText.addClass('status-closed').text('Closed');
        }
    });
});




