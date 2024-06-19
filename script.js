$(document).ready(function() {
    // Cambia el color de fondo al presionar los botones
    $("#modo-claro").click(function() {
        $("body").css("background-color", "#f8f9fa"); // Color claro
    });
    $("#modo-oscuro").click(function() {
        $("body").css("background-color", "#343a40"); // Color oscuro
    });
});