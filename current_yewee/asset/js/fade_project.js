$(document).ready(function () {

    // effet fondu en entrée à l'ouverture de la page
    $('#project_page').fadeIn(3000);
    $("#ico").hide();
    $("#accueil").hide();
    $("#streamer").hide();
    $("#live").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#ico').fadeIn(1500);
        } else {
            $('#ico').fadeOut(100);
        }
        if ($(this).scrollTop() > 850) {
            $('#accueil').fadeIn(1500);
        } else {
            $('#accueil').fadeOut(100);
        }
        if ($(this).scrollTop() > 1650) {
            $('#streamer').fadeIn(1500);
        } else {
            $('#streamer').fadeOut(100);
        }
        if ($(this).scrollTop() > 2450) {
            $('#live').fadeIn(1500);
        } else {
            $('#live').fadeOut(100);
        }
    });

});