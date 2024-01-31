$(document).ready(function() {
    var numberToGuess = Math.floor(Math.random() * 18) + 1;
    var attempts = 0;
    var timeout = 10000;

    function createButtons(numberOfButtons) {
        $('#buttons').empty();
        for (let i = 1; i <= numberOfButtons; i++) {
            $('#buttons').append(`<button class="guessButton">${i}</button>`);
        }
    }

    $(document).on('click', '.guessButton', function() {
        var userGuess = parseInt($(this).text());
        attempts++;
        $('#attemptCounter').text(attempts + ' tentativas');

        if(userGuess === numberToGuess) {
            $('#result').text('Parabéns! Acertaste o número!');
            $('.guessButton').prop('disabled', true);
            clearTimeout(timeoutId);
        } else if(userGuess < numberToGuess) {
            $('#result').text('Mais alto!');
        } else {
            $('#result').text('Mais baixo!');
        }
    });

    $('#reset').click(function() {
        numberToGuess = Math.floor(Math.random() * 18) + 1;
        attempts = 0;
        $('#attemptCounter').text('0 tentativas');
        $('#result').text('');
        $('.guessButton').prop('disabled', false);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            $('.guessButton').prop('disabled', true);
            $('#result').text('Tempo esgotado!');
        }, timeout);
    });

    var timeoutId = setTimeout(function() {
        $('.guessButton').prop('disabled', true);
        $('#result').text('Tempo esgotado!');
    }, timeout);

    createButtons(18);
});
