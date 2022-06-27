$(function(){

      //  Slider-box

  $('.slider-box').slick({
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: '<img class="arrow arrow-left" src="img/slider-box/arrow-left.svg" alt="Arrow-Left"></img>',
    nextArrow: '<img class="arrow arrow-right" src="img/slider-box/arrow-right.svg" alt="Arrow-Right"></img>'
  });

  // Mobile-nav

   $('.btn-mobile').on('click', function(){
    $('.btn-mobile__line').toggleClass('active');
   });
  
    $('.btn-mobile').on('click', function(){
      $('.menu__list').toggleClass('active');
    });


    // Pop-up

    $('.portfolio__gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });


      // Video-block

     const videoBtn = document.querySelector('#video-btn');
     const videoBtnIcon = document.querySelector('#video-btn-icon');
     const videoFile = document.querySelector('#video-content');
     const videoOverlay = document.querySelector('#video-overlay');

     videoBtn.addEventListener('click', function(){


      function toggleOverlay(event){
        if (event.type === 'mouseleave') {
          videoOverlay.classList.add('hidden')
        } else {
          videoOverlay.classList.remove('hidden')
        }
      }


      if ( videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src="img/video-block/pause.svg"

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;


      } else {
        videoFile.pause();
        videoBtnIcon.src="img/video-block/play-button.svg"
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
      }

     })  

});