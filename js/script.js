$(document).ready(function () {
  // ------------------window load------------

  $('document').ready(function(e) {
    setTimeout(() => {
        $(".loader").fadeOut("slow");
    }, 500);
    
    
   });

  // -----------------phone-------------------
  $(function () {
    $('.round-phone').on('click', function () {
      $('.phone-message').show();
    })
    $('#phone-close').on('click', function () {
      $('.phone-message').hide();
      $('#input_phone').val('');
      $('#input_name').val('');
    })
  })

// ------------------message------------------
  $('#message').submit(function(e){
    e.preventDefault();
    var name = $('#mname');
    rname = /^[a-zA-Z ]+$/.test(name.val());
    var email = $('#memail');
    var message = $('#mmessage');
    if(rname === true && email.val().length > 9 && message.val().length > 2){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Շնորհակալություն",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        text:'Հարգելի '+ name.val() +' ձեր գրառումը  հաջողությամբ ուղարկվել է',
        showConfirmButton: false,
        timer: 3000,
      }) 
      name.val('');
      email.val('');
      message.val('');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Սխալ',
        text: 'Ճիշտ լրացրեք տվյալները',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  })

// ------------------phone------------------
  $('#mphone').submit(function(e){
    e.preventDefault();
    var name = $('#pname');
    pname = /^[a-zA-Z ]+$/.test(name.val());
    var number = $('#pnumber');
    pnumber = /^[0-9]+$/.test(number.val());
     if(pname === true && pnumber === true && number.val().length < 12 && number.val().length > 8 ){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Շնորհակալություն",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        text:'Հարգելի '+ name.val() +' ձեր գրառումը  հաջողությամբ ուղարկվել է',
        showConfirmButton: false,
        timer: 3000,
      }) 
      name.val('');
      number.val('');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Սխալ',
        text: 'Ճիշտ լրացրեք տվյալները',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } 
  })

})


$(".for-teach").slick({
  'slidesToShow':3,
  "speed":700,
  "prevArrow":'<button type="button" class="slick-prev"> ← </button>',
  "nextArrow":'<button type="button" class="slick-next"> → </button>',
  "draggable":false,
  'variableWidth': false,
  "swipe":false,
  responsive: [
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
       }
     },
     {
       breakpoint: 590,
       settings: {
         slidesToShow: 1,
       }
     }
   ]
})