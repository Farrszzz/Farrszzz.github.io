$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Graphic Designer", "Web Design", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Graphic Designer", "Web Design", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

  // Owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 2,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  });

  // Function to open modal with project details and link to project website
  function openProjectModal(title, imageSrc, description, projectLink) {
      var modal = $('#projectModal');
      var projectTitle = $('#projectTitle');
      var projectImage = $('#projectImage');
      var projectDescription = $('#projectDescription');
      var projectButton = $('#projectButton');

      projectTitle.text(title);
      projectImage.attr('src', imageSrc);
      projectDescription.text(description);

      projectButton.attr('href', projectLink);
      modal.css('display', 'block');
  }


  // Function to close the modal
  function closeProjectModal() {
      var modal = $('#projectModal');
      modal.css('display', 'none');
  }

  // Handling click on project cards to open the modal
  $('.carousel .card').click(function() {
      var title = $(this).find('h3').text();
      var imageSrc = $(this).find('img').attr('src');
      var description = $(this).find('p').text();
      var projectLink = $(this).data('link'); // menggunakan atribut data-link pada card untuk menyimpan link proyek

      openProjectModal(title, imageSrc, description, projectLink);
  });


  // Handling click on close button of the modal
  $('.modal .close').click(function() {
      closeProjectModal();
  });

  // Handling click outside the modal to close it
  $(window).click(function(event) {
      var modal = $('#projectModal');
      if (event.target == modal[0]) {
          closeProjectModal();
      }
  });


});

const contactform = document.getElementById("contact-form");

contactform.addEventListener("submit", function(e){
  e.preventDefault();

  const url = e.target.action;
  const formdata = new FormData(contactform)

  fetch(url, {
    method: "POST",
    body: formdata,
    mode: "no-cors"
  }).then(() => {
    alert("Formulir berhasil dikirim!");
  })
  .catch(() => alert("Error occured"))
})