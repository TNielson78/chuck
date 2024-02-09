$(document).ready(function() {
    $('#getJoke').click(function() {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/chucknorris',
            headers: { 'X-Api-Key': 'f3sb9sYBG4C3iE2CoLc7nw==XTPO6ydCopULQmQr' },
            contentType: 'application/json',
            success: function(result) {
                $('#jokeDisplay').text(result.joke);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('#jokeDisplay').text('Error fetching joke');
            }
        });
    });
});
