const swiper = new Swiper('.read-sliders', {
    loop: true,
    spaceBetween: 50,
    spedd: 800,
    navigation: {
      nextEl: '.read-row .swiper-button-next',
      prevEl: '.read-row .swiper-button-prev',
    },
  });


  $(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });

let checkBox = document.querySelector('.end-box-btn');
checkBox.addEventListener('click', function() {
    checkBox.classList.toggle('end-box-btn-active');
})


window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    var BlkStyle = document.querySelector('header').style;
    if(html.scrollTop>100||body.scrollTop>100) {
        BlkStyle.background=" #081130";
    } else BlkStyle.background="transparent";
     }