$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});

function SendMessage () {
   $("#contactForm")[0].reset();
   Swal.fire({
          icon: 'success',
          title: 'Message sent!',
          text: 'Thank you for reaching out to us.',
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            content: 'sweetalert-custom-content',
          }
        });
}
  