document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('menu-icon');
    const links = document.querySelector('.links ul');
  
    icon.addEventListener('click', function () {
      links.classList.toggle('show');
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoWidth:true,
    dots: true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            merge:true,
        },
        1000:{
            items:5,
            nav:false,
            merge:true,
        }
    }
})
  

