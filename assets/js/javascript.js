// smooth scrolling
$("a").click(function() {
    console.log(this.hash);

    if (this.hash !== "") {
        event.preventDefault();

        console.log(this.hash);

        var hash = this.hash;

        console.log(hash);

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    }

});

// enviar correo alert
$("#enviarMensaje").click(function() {
    alert("Este mensaje fue enviado correctamente.")
    });

// tooltip boton enviar
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// toogle cuerpo de tarjetas
$(".tituloTarjeta").click(function(){
    $(".textoTarjeta").toggle();
  });

// efecto menu navbar
$(".navboton").hover(function(){
    $(this).css("font-size", "18px");
    }, function(){
    $(this).css("font-size", "16px");
});


// toast
const myToast = new bootstrap.Toast('.toast');

setTimeout(() => {
    myToast.show();
}, 1000);
