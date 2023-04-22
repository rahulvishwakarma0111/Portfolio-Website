let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

// Reviews Swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Header Background Change on Scroll

  let Header = document.querySelector('header');

  window.addEventListener("scroll", ()=>{

    header.classList.toggle("header-active", window.scrollY > 0);
  });

  // Scroll Top

  let scrollTop = document.querySelector('.scroll-top');

  window.addEventListener("scroll", ()=>{

    scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
  });


  // Email JS

  function validate() {
    
      let name = document.querySelector('.name');
      let email = document.querySelector('.email');
      let message = document.querySelector('.message');
      let sendBtn = document.querySelector('.send-btn');

      sendBtn.addEventListener("click",( event )=>{

          event.preventDefault();
          
          if (name.value == "" || email.value == "" || message.value == "" ) {
            
              emptyerror();
          }
          else{

            sendmail( name.value, email.value, message.value);
            success();
          }
      });

      

  }

  validate();

  function sendmail(name,email,message) {
      emailjs.send("service_yf4auxw","template_0h7135j",{
        to_name: name,
        from_name: email,
        message: message,
      
      });
  }

  function emptyerror() {

    swal({
      title: "error",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  }

  function success() {

    swal({
      title: "Email send Successfully",
      text: "We try to reply in 24 hours ",
      icon: "success",
    });
  }